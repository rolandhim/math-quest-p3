import { useCallback } from 'react'
import { doc, updateDoc, arrayUnion, serverTimestamp, getDoc } from 'firebase/firestore'
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

export function useProgress() {
  const { currentUser, userProfile, refreshProfile } = useAuth()

  const saveProgress = useCallback(async (topic, questionId, isCorrect) => {
    if (!currentUser || !userProfile) return { success: false }

    const uid = currentUser.uid
    const userRef = doc(db, 'users', uid)

    // Get current progress for this topic
    const topicProgress = userProfile.progress?.[topic] || { completed: [], stars: 0 }
    const alreadyDone = topicProgress.completed.includes(questionId)

    // Don't double-count
    if (alreadyDone) return { success: true, msg: '已經答過呢題啦～' }

    const newCompleted = [...topicProgress.completed, questionId]
    const starEarned = isCorrect ? 1 : 0
    const newTopicStars = topicProgress.stars + starEarned
    const newTotalStars = (userProfile.totalStars || 0) + starEarned
    const newLevel = calcLevel(newTotalStars)

    // Only push wrong questions
    const updates = {
      [`progress.${topic}.completed`]: newCompleted,
      [`progress.${topic}.stars`]: newTopicStars,
      totalStars: newTotalStars,
      level: newLevel,
      lastLogin: serverTimestamp(),
    }

    if (!isCorrect) {
      // Add to wrong questions
      const wrongEntry = { questionId, topic, timestamp: new Date().toISOString() }
      // We use arrayUnion to avoid duplicates
      updates.wrongQuestions = arrayUnion(wrongEntry)
    }

    await updateDoc(userRef, updates)

    // Refresh the profile in context
    await refreshProfile()

    return { success: true, starEarned, totalStars: newTotalStars, level: newLevel }
  }, [currentUser, userProfile, refreshProfile])

  /**
   * Sync quiz results after finishing a quiz set
   */
  const saveQuizResult = useCallback(async (topic, correctCount, totalCount) => {
    if (!currentUser) return

    const bonus = correctCount === totalCount ? 3 : 0
    const starEarned = correctCount + bonus

    const uid = currentUser.uid
    const userRef = doc(db, 'users', uid)

    const newTotalStars = (userProfile?.totalStars || 0) + starEarned
    const newLevel = calcLevel(newTotalStars)

    await updateDoc(userRef, {
      totalStars: newTotalStars,
      level: newLevel,
      lastLogin: serverTimestamp(),
    })

    await refreshProfile()

    return { starEarned, bonus, totalStars: newTotalStars, level: newLevel }
  }, [currentUser, userProfile, refreshProfile])

  /**
   * Get topic progress summary
   */
  const getTopicProgress = useCallback((topic) => {
    if (!userProfile?.progress) {
      return { completed: 0, total: 10, stars: 0 }
    }
    const tp = userProfile.progress[topic]
    if (!tp) return { completed: 0, total: 10, stars: 0 }

    return {
      completed: tp.completed?.length || 0,
      total: 10,
      stars: tp.stars || 0,
    }
  }, [userProfile])

  return { saveProgress, saveQuizResult, getTopicProgress }
}
