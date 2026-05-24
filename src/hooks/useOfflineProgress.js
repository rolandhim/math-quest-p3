import { useState, useEffect, useCallback, useRef } from 'react'
import { doc, updateDoc, arrayUnion, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config.js'
import { useAuth } from '../context/AuthContext.jsx'

const LEVELS = [
  { min: 0, name: '數學新手' },
  { min: 10, name: '數學學徒' },
  { min: 25, name: '數學勇士' },
  { min: 50, name: '數學高手' },
  { min: 100, name: '數學冒險王' },
]

function calcLevel(stars) {
  let level = LEVELS[0]
  for (const l of LEVELS) {
    if (stars >= l.min) level = l
  }
  return level.name
}

const TOPIC_MAP = {
  numbers: '數字王國',
  measurement: '量度世界',
  shapes: '圖形迷宮',
  data: '數據偵探',
}

const STORAGE_KEY = 'math_quest_offline'

/**
 * Load offline cache from localStorage.
 * Returns { pendingSyncs: [], localProgress: {}, totalStars: 0 } as default.
 */
function loadOfflineCache() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {
    // Corrupted data — reset
    localStorage.removeItem(STORAGE_KEY)
  }
  return { pendingSyncs: [], localProgress: {}, totalStars: 0 }
}

/**
 * Persist offline cache to localStorage.
 */
function saveOfflineCache(cache) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cache))
  } catch {
    // localStorage full or unavailable — silently degrade
  }
}

/**
 * useOfflineProgress — drop-in upgrade from useProgress with offline protection.
 *
 * @param {function} onStatusChange — optional callback({ type, message })
 *        type: 'offline' | 'online' | 'syncing' | 'synced' | 'error'
 *
 * @returns {{
 *   saveProgress,    // async (topic, questionId, isCorrect) => { success, starEarned, ... }
 *   saveQuizResult,  // async (topic, score, total) => { starEarned, bonus, ... }
 *   getTopicProgress,// (topic) => { completed, total, stars }
 *   isOnline,        // boolean
 *   pendingSync,     // number of pending syncs in queue
 *   forceSync,       // async () => manually trigger sync now
 * }}
 */
export function useOfflineProgress(onStatusChange) {
  const { currentUser, userProfile, refreshProfile } = useAuth()
  const [isOnline, setIsOnline] = useState(
    typeof navigator !== 'undefined' ? navigator.onLine : true
  )
  const [pendingSync, setPendingSync] = useState(0)
  const statusCallback = useRef(onStatusChange)
  const syncingRef = useRef(false)

  // Keep the callback ref up to date
  useEffect(() => {
    statusCallback.current = onStatusChange
  }, [onStatusChange])

  // Notify helper
  const notify = useCallback((type, message) => {
    if (statusCallback.current) {
      statusCallback.current({ type, message })
    }
  }, [])

  // Refresh pending count from cache
  const refreshPendingCount = useCallback(() => {
    const cache = loadOfflineCache()
    setPendingSync(cache.pendingSyncs?.length || 0)
  }, [])

  // ── Online / Offline event listeners ──
  useEffect(() => {
    const goOnline = () => {
      setIsOnline(true)
      notify('online', '網絡已恢復連線 ✨')

      // Trigger auto-sync when coming back online
      const cache = loadOfflineCache()
      if (cache.pendingSyncs?.length > 0) {
        syncAllPending()
      }
    }

    const goOffline = () => {
      setIsOnline(false)
      notify('offline', '已離線 — 進度會暫存喺本地 📦')
    }

    window.addEventListener('online', goOnline)
    window.addEventListener('offline', goOffline)

    // Initial sync attempt if we're online and have pending items
    if (navigator.onLine) {
      const cache = loadOfflineCache()
      if (cache.pendingSyncs?.length > 0) {
        syncAllPending()
      }
    }

    return () => {
      window.removeEventListener('online', goOnline)
      window.removeEventListener('offline', goOffline)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // ── Sync all pending actions to Firestore ──
  const syncAllPending = useCallback(async () => {
    if (!currentUser || syncingRef.current) return

    const cache = loadOfflineCache()
    if (!cache.pendingSyncs?.length) {
      setPendingSync(0)
      return
    }

    syncingRef.current = true
    notify('syncing', `正在同步 ${cache.pendingSyncs.length} 項進度… 🔄`)

    const uid = currentUser.uid
    const userRef = doc(db, 'users', uid)
    let successCount = 0
    let failCount = 0
    const failedSyncs = []

    for (const action of cache.pendingSyncs) {
      try {
        if (action.type === 'saveProgress') {
          const updates = {
            [`progress.${action.topic}.completed`]: action.completed,
            [`progress.${action.topic}.stars`]: action.topicStars,
            totalStars: action.totalStars,
            level: action.level,
            lastLogin: serverTimestamp(),
          }

          if (action.wrongEntry) {
            updates.wrongQuestions = arrayUnion(action.wrongEntry)
          }

          await updateDoc(userRef, updates)
        } else if (action.type === 'saveQuizResult') {
          const starUpdates = {
            totalStars: action.totalStars,
            level: action.level,
            lastLogin: serverTimestamp(),
          }
          await updateDoc(userRef, starUpdates)
        }
        successCount++
      } catch {
        failCount++
        failedSyncs.push(action)
      }
    }

    // Update cache: keep only failed items
    const updatedCache = loadOfflineCache()
    updatedCache.pendingSyncs = failedSyncs
    saveOfflineCache(updatedCache)
    setPendingSync(failedSyncs.length)

    syncingRef.current = false

    if (failCount === 0 && successCount > 0) {
      notify('synced', `已同步 ${successCount} 項進度到雲端 ✅`)
    } else if (failCount > 0 && successCount > 0) {
      notify('synced', `已同步 ${successCount} 項，${failCount} 項失敗，將再嘗試 📋`)
    }

    // Refresh context profile after successful syncs
    if (successCount > 0) {
      try {
        await refreshProfile()
      } catch {
        // Profile refresh failed — non-critical
      }
    }
  }, [currentUser, notify, refreshProfile])

  // ── saveProgress ──
  const saveProgress = useCallback(async (topic, questionId, isCorrect) => {
    if (!currentUser || !userProfile) return { success: false }

    // Check deduplication from both Firestore profile and local cache
    const topicProgress = userProfile.progress?.[topic] || { completed: [], stars: 0 }
    const alreadyDoneFirestore = topicProgress.completed.includes(questionId)

    const cache = loadOfflineCache()
    const localTopic = cache.localProgress?.[topic] || { completed: [], stars: 0 }
    const alreadyDoneLocal = localTopic.completed.includes(questionId)

    if (alreadyDoneFirestore || alreadyDoneLocal) {
      return { success: true, msg: '已經答過呢題啦～' }
    }

    // Calculate new values based on latest available data
    const baseStars = Math.max(
      topicProgress.stars || 0,
      localTopic.stars || 0
    )
    const baseCompleted = new Set([
      ...(topicProgress.completed || []),
      ...(localTopic.completed || []),
    ])

    // Prevent double-count even from merged data
    if (baseCompleted.has(questionId)) {
      return { success: true, msg: '已經答過呢題啦～' }
    }

    const newCompleted = [...baseCompleted, questionId]
    const starEarned = isCorrect ? 1 : 0
    const newTopicStars = baseStars + starEarned
    const baseTotalStars = Math.max(
      userProfile.totalStars || 0,
      cache.totalStars || 0
    )
    const newTotalStars = baseTotalStars + starEarned
    const newLevel = calcLevel(newTotalStars)

    // Wrong question entry
    const wrongEntry = !isCorrect
      ? { questionId, topic, timestamp: new Date().toISOString() }
      : null

    // 1. Always save to localStorage immediately
    const updatedCache = loadOfflineCache()
    updatedCache.localProgress = updatedCache.localProgress || {}
    updatedCache.localProgress[topic] = {
      completed: newCompleted,
      stars: newTopicStars,
    }
    updatedCache.totalStars = newTotalStars

    if (wrongEntry) {
      updatedCache.pendingSyncs = updatedCache.pendingSyncs || []
      // Add pending sync action for the wrong question
      updatedCache.pendingSyncs.push({
        type: 'saveProgress',
        topic,
        completed: newCompleted,
        topicStars: newTopicStars,
        totalStars: newTotalStars,
        level: newLevel,
        wrongEntry,
      })
    }

    saveOfflineCache(updatedCache)
    refreshPendingCount()

    // 2. If online, also update Firestore directly
    if (navigator.onLine) {
      try {
        const uid = currentUser.uid
        const userRef = doc(db, 'users', uid)

        const updates = {
          [`progress.${topic}.completed`]: newCompleted,
          [`progress.${topic}.stars`]: newTopicStars,
          totalStars: newTotalStars,
          level: newLevel,
          lastLogin: serverTimestamp(),
        }

        if (wrongEntry) {
          updates.wrongQuestions = arrayUnion(wrongEntry)
        }

        await updateDoc(userRef, updates)

        // If we also had a pending sync for this exact action, clear it
        const cacheAfterSync = loadOfflineCache()
        cacheAfterSync.pendingSyncs = (cacheAfterSync.pendingSyncs || []).filter(
          (p) =>
            !(
              p.type === 'saveProgress' &&
              p.topic === topic &&
              p.completed.length === newCompleted.length &&
              JSON.stringify(p.completed) === JSON.stringify(newCompleted)
            )
        )
        // Remove the corresponding local progress since it's synced
        if (cacheAfterSync.localProgress?.[topic]) {
          // Only clear local if no other pending syncs exist for this topic
          const hasOtherPending = cacheAfterSync.pendingSyncs.some(
            (p) => p.topic === topic
          )
          if (!hasOtherPending) {
            delete cacheAfterSync.localProgress[topic]
          }
        }
        saveOfflineCache(cacheAfterSync)
        refreshPendingCount()

        await refreshProfile()
      } catch {
        // Firestore write failed — data already in localStorage, will retry
        notify('offline', '同步失敗，進度已保存離線 📦')
      }
    } else {
      // Queue a pending sync for later
      const offlineCache = loadOfflineCache()
      offlineCache.pendingSyncs = offlineCache.pendingSyncs || []

      // Remove any stale pending sync for same topic/question
      offlineCache.pendingSyncs = offlineCache.pendingSyncs.filter(
        (p) =>
          !(
            p.type === 'saveProgress' &&
            p.topic === topic &&
            p.wrongEntry?.questionId === questionId
          )
      )

      offlineCache.pendingSyncs.push({
        type: 'saveProgress',
        topic,
        completed: newCompleted,
        topicStars: newTopicStars,
        totalStars: newTotalStars,
        level: newLevel,
        wrongEntry,
      })

      saveOfflineCache(offlineCache)
      refreshPendingCount()
    }

    return { success: true, starEarned, totalStars: newTotalStars, level: newLevel }
  }, [currentUser, userProfile, refreshProfile, notify, refreshPendingCount])

  // ── saveQuizResult ──
  const saveQuizResult = useCallback(async (topic, correctCount, totalCount) => {
    if (!currentUser) return { success: false }

    const bonus = correctCount === totalCount ? 3 : 0
    const starEarned = correctCount + bonus

    // Calculate base total stars from both profile and cache
    const cache = loadOfflineCache()
    const baseTotalStars = Math.max(
      userProfile?.totalStars || 0,
      cache.totalStars || 0
    )
    const newTotalStars = baseTotalStars + starEarned
    const newLevel = calcLevel(newTotalStars)

    // 1. Always save to localStorage
    const updatedCache = loadOfflineCache()
    updatedCache.totalStars = newTotalStars
    updatedCache.pendingSyncs = updatedCache.pendingSyncs || []

    // Queue quiz result sync
    updatedCache.pendingSyncs.push({
      type: 'saveQuizResult',
      topic,
      starEarned,
      bonus,
      totalStars: newTotalStars,
      level: newLevel,
    })

    saveOfflineCache(updatedCache)
    refreshPendingCount()

    // 2. If online, also update Firestore directly
    if (navigator.onLine) {
      try {
        const uid = currentUser.uid
        const userRef = doc(db, 'users', uid)

        await updateDoc(userRef, {
          totalStars: newTotalStars,
          level: newLevel,
          lastLogin: serverTimestamp(),
        })

        // Remove the just-synced pending item
        const cacheAfterSync = loadOfflineCache()
        cacheAfterSync.pendingSyncs = (cacheAfterSync.pendingSyncs || []).filter(
          (p) =>
            !(
              p.type === 'saveQuizResult' &&
              p.totalStars === newTotalStars
            )
        )
        saveOfflineCache(cacheAfterSync)
        refreshPendingCount()

        await refreshProfile()
      } catch {
        notify('offline', '同步失敗，結果已保存離線 📦')
      }
    } else {
      notify('offline', '結果已保存離線，連線後將自動同步 📦')
    }

    return { starEarned, bonus, totalStars: newTotalStars, level: newLevel }
  }, [currentUser, userProfile, refreshProfile, notify, refreshPendingCount])

  // ── getTopicProgress ──
  const getTopicProgress = useCallback((topic) => {
    // Merge Firestore data with local cache for most accurate view
    const cache = loadOfflineCache()
    const localTopic = cache.localProgress?.[topic]

    if (!userProfile?.progress && !localTopic) {
      return { completed: 0, total: 10, stars: 0 }
    }

    const fsCompleted = userProfile?.progress?.[topic]?.completed?.length || 0
    const fsStars = userProfile?.progress?.[topic]?.stars || 0
    const localCompleted = localTopic?.completed?.length || 0
    const localStars = localTopic?.stars || 0

    // Use the larger value between Firestore and local cache
    // This handles the case where local cache has more data (offline progress)
    return {
      completed: Math.max(fsCompleted, localCompleted),
      total: 10,
      stars: Math.max(fsStars, localStars),
    }
  }, [userProfile])

  // ── forceSync ──
  const forceSync = useCallback(async () => {
    const cache = loadOfflineCache()
    if (!cache.pendingSyncs?.length) {
      notify('synced', '沒有待同步嘅項目 ✅')
      return { success: true, count: 0 }
    }

    if (!navigator.onLine) {
      notify('offline', '離線中，無法同步到雲端 📦')
      return { success: false, reason: 'offline' }
    }

    await syncAllPending()
    return { success: true, count: cache.pendingSyncs.length }
  }, [notify, syncAllPending])

  // Initialize pending count
  useEffect(() => {
    refreshPendingCount()
  }, [refreshPendingCount])

  return {
    saveProgress,
    saveQuizResult,
    getTopicProgress,
    isOnline,
    pendingSync,
    forceSync,
  }
}
