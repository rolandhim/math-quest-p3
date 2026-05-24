import { useState, useCallback, useEffect } from 'react'
import { doc, updateDoc, increment } from 'firebase/firestore'
import { db } from '../firebase/config.js'
import { useAuth } from '../context/AuthContext.jsx'
import achievements from '../data/achievements.js'

export function useGamification() {
  const { currentUser, userProfile, refreshProfile } = useAuth()
  const [newlyUnlocked, setNewlyUnlocked] = useState([])
  const [streak, setStreak] = useState(0)

  // Sync streak from user profile on mount / when profile changes
  useEffect(() => {
    if (userProfile?.streak != null) {
      setStreak(userProfile.streak)
    } else {
      setStreak(0)
    }
  }, [userProfile])

  /**
   * Check daily login and award bonuses.
   *
   * Logic:
   * - Compare lastLoginDate (stored as YYYY-MM-DD) with today.
   * - If already logged in today → no bonus.
   * - If last login was yesterday → increment loginStreak.
   * - If last login was older → reset loginStreak to 1.
   * - Always award +2 daily login bonus stars.
   * - If loginStreak >= 7, award +10 streak bonus stars.
   * - Persist to Firestore and refresh profile.
   *
   * @returns {{ dailyBonus: number, streakBonus: number }}
   */
  const checkDailyLogin = useCallback(async () => {
    if (!currentUser || !userProfile) return { dailyBonus: 0, streakBonus: 0 }

    const uid = currentUser.uid
    const userRef = doc(db, 'users', uid)

    const today = new Date()
    const todayStr = today.toISOString().split('T')[0] // YYYY-MM-DD

    const lastLoginDate = userProfile.lastLoginDate || null

    // Already logged in today — no bonus
    if (lastLoginDate === todayStr) {
      return { dailyBonus: 0, streakBonus: 0 }
    }

    let newLoginStreak = 1

    if (lastLoginDate) {
      const lastDate = new Date(lastLoginDate + 'T00:00:00')
      const diffTime = today.getTime() - lastDate.getTime()
      const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24))

      if (diffDays === 1) {
        // Consecutive day
        newLoginStreak = (userProfile.loginStreak || 0) + 1
      }
      // else: gap > 1 day → reset to 1 (already set above)
    }

    const dailyBonus = 2
    const streakBonus = newLoginStreak >= 7 ? 10 : 0
    const totalBonus = dailyBonus + streakBonus

    // Update Firestore
    await updateDoc(userRef, {
      loginStreak: newLoginStreak,
      lastLoginDate: todayStr,
      totalStars: increment(totalBonus),
    })

    // Refresh the local profile so subsequent reads see updated values
    await refreshProfile()

    return { dailyBonus, streakBonus }
  }, [currentUser, userProfile, refreshProfile])

  /**
   * Check all achievements against current stats.
   * Uses sessionStorage to avoid returning the same achievement twice.
   *
   * @param {object} stats - Current user stats (totalStars, bestStreak, loginStreak, etc.)
   * @returns {Array} Newly unlocked achievement objects.
   */
  const checkAchievements = useCallback((stats) => {
    if (!stats) return []

    const stored = sessionStorage.getItem('unlockedAchievements')
    const previouslyUnlocked = stored ? JSON.parse(stored) : []
    const unlocked = []

    for (const achievement of achievements) {
      // Skip if already unlocked in this session
      if (previouslyUnlocked.includes(achievement.id)) continue

      if (achievement.condition(stats)) {
        unlocked.push(achievement)
        previouslyUnlocked.push(achievement.id)
      }
    }

    if (unlocked.length > 0) {
      sessionStorage.setItem('unlockedAchievements', JSON.stringify(previouslyUnlocked))
      setNewlyUnlocked((prev) => [...prev, ...unlocked])
    }

    return unlocked
  }, [])

  /**
   * Dismiss / clear any newly-unlocked achievements.
   * Clears the sessionStorage flag so they won't re-appear.
   */
  const dismissNewAchievements = useCallback(() => {
    sessionStorage.removeItem('unlockedAchievements')
    setNewlyUnlocked([])
  }, [])

  return {
    streak,
    checkDailyLogin,
    checkAchievements,
    achievements,
    newlyUnlocked,
    dismissNewAchievements,
  }
}
