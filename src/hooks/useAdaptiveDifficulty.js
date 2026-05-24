/**
 * Adaptive difficulty hook — adjusts quiz difficulty based on performance.
 *
 * - 3 consecutive correct → bump up difficulty
 * - 2 consecutive wrong → drop down difficulty
 * - Returns messages in Chinese
 */

import { useState, useCallback, useRef } from 'react'

const DIFFICULTIES = ['easy', 'medium', 'hard']

const LABELS = {
  easy: { emoji: '🟢', label: '簡單' },
  medium: { emoji: '🟡', label: '中等' },
  hard: { emoji: '🔴', label: '困難' },
}

/**
 * Get how many questions of each difficulty to pick
 */
export function getQuizComposition(difficulty, total = 10) {
  const map = {
    easy: { easy: 5, medium: 3, hard: 2 },
    medium: { easy: 3, medium: 4, hard: 3 },
    hard: { easy: 2, medium: 3, hard: 5 },
  }
  return map[difficulty] || map.easy
}

export function useAdaptiveDifficulty() {
  const [difficulty, setDifficultyState] = useState('easy')
  const correctStreakRef = useRef(0)
  const wrongStreakRef = useRef(0)

  const setDifficulty = useCallback((d) => {
    if (DIFFICULTIES.includes(d)) {
      setDifficultyState(d)
      correctStreakRef.current = 0
      wrongStreakRef.current = 0
    }
  }, [])

  const recordAnswer = useCallback((wasCorrect) => {
    let changed = false
    let message = null
    let newDifficulty = difficulty

    if (wasCorrect) {
      wrongStreakRef.current = 0
      correctStreakRef.current += 1

      if (correctStreakRef.current >= 3) {
        const idx = DIFFICULTIES.indexOf(difficulty)
        if (idx < DIFFICULTIES.length - 1) {
          newDifficulty = DIFFICULTIES[idx + 1]
          changed = true
          message = '🔥 你好叻！難度提升了！'
          correctStreakRef.current = 0
        }
      }
    } else {
      correctStreakRef.current = 0
      wrongStreakRef.current += 1

      if (wrongStreakRef.current >= 2) {
        const idx = DIFFICULTIES.indexOf(difficulty)
        if (idx > 0) {
          newDifficulty = DIFFICULTIES[idx - 1]
          changed = true
          message = '💪 唔緊要！我哋慢慢來！'
          wrongStreakRef.current = 0
        }
      }
    }

    if (changed) {
      setDifficultyState(newDifficulty)
    }

    return { newDifficulty, changed, message }
  }, [difficulty])

  const getDifficultyLabel = useCallback(() => {
    return LABELS[difficulty] || LABELS.easy
  }, [difficulty])

  const reset = useCallback(() => {
    setDifficultyState('easy')
    correctStreakRef.current = 0
    wrongStreakRef.current = 0
  }, [])

  return {
    difficulty,
    setDifficulty,
    recordAnswer,
    getDifficultyLabel,
    reset,
  }
}
