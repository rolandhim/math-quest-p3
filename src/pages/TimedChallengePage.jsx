import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import questions from '../data/questions.js'
import { doc, updateDoc, getDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase/config.js'
import { useAuth } from '../context/AuthContext.jsx'

const TOTAL_TIME = 60
const AUTO_ADVANCE_MS = 500
const LETTERS = ['A', 'B', 'C', 'D']

/**
 * Fisher-Yates shuffle — produces a new shuffled copy
 */
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function TimedChallengePage() {
  const { currentUser, userProfile, refreshProfile } = useAuth()

  // Shuffle once — useRef avoids re-shuffle on re-renders
  const shuffledRef = useRef(null)
  if (!shuffledRef.current) {
    shuffledRef.current = shuffle(questions)
  }

  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME)
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [correctCount, setCorrectCount] = useState(0)
  const [finished, setFinished] = useState(false)
  const [bestScore, setBestScore] = useState(null)
  const [isNewBest, setIsNewBest] = useState(false)
  const [saving, setSaving] = useState(false)

  // Ref to always have the latest correctCount inside callbacks/effects
  const correctRef = useRef(0)
  useEffect(() => {
    correctRef.current = correctCount
  }, [correctCount])

  const question = shuffledRef.current[current]
  const isTimeUp = timeLeft <= 0
  const isOutOfQuestions = current >= shuffledRef.current.length

  // ── Reset for retry ──
  function reset() {
    shuffledRef.current = shuffle(questions)
    setTimeLeft(TOTAL_TIME)
    setCurrent(0)
    setSelected(null)
    setAnswered(false)
    setCorrectCount(0)
    setFinished(false)
    setBestScore(null)
    setIsNewBest(false)
    setSaving(false)
  }

  // ── Finish the challenge (save result, show summary) ──
  const finishChallenge = useCallback(async () => {
    if (finished) return
    setFinished(true)

    const finalCorrect = correctRef.current

    if (!currentUser) return

    setSaving(true)
    try {
      const uid = currentUser.uid
      const userRef = doc(db, 'users', uid)
      const snap = await getDoc(userRef)
      const prevBest = snap.exists() ? (snap.data().timedBest || 0) : 0

      if (finalCorrect > prevBest) {
        setIsNewBest(true)
        setBestScore(finalCorrect)
        await updateDoc(userRef, {
          timedBest: finalCorrect,
          lastLogin: serverTimestamp(),
        })
      } else {
        setBestScore(prevBest)
      }

      // Award stars equal to correct count
      const newTotalStars = (userProfile?.totalStars || 0) + finalCorrect
      await updateDoc(userRef, {
        totalStars: newTotalStars,
        lastLogin: serverTimestamp(),
      })

      await refreshProfile()
    } catch (err) {
      console.error('Failed to save timed challenge result:', err)
    }
    setSaving(false)
  }, [finished, currentUser, userProfile, refreshProfile])

  // ── Timer: count down every second ──
  useEffect(() => {
    if (finished) return

    const id = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(id)
          return 0
        }
        return t - 1
      })
    }, 1000)

    return () => clearInterval(id)
  }, [finished])

  // ── When time hits 0, finish ──
  useEffect(() => {
    if (timeLeft === 0 && !finished) {
      finishChallenge()
    }
  }, [timeLeft, finished, finishChallenge])

  // ── Auto-advance after answering (500ms) ──
  useEffect(() => {
    if (!answered || isTimeUp || finished) return

    const id = setTimeout(() => {
      setCurrent((c) => c + 1)
      setSelected(null)
      setAnswered(false)
    }, AUTO_ADVANCE_MS)

    return () => clearTimeout(id)
  }, [answered, isTimeUp, finished])

  // ── Handle answer selection ──
  function handleSelect(option) {
    if (answered || isTimeUp || finished) return
    setSelected(option)
    setAnswered(true)

    if (option === question.answer) {
      setCorrectCount((c) => c + 1)
    }
  }

  // ── If we somehow ran out of questions before time, finish ──
  useEffect(() => {
    if (isOutOfQuestions && !finished && current > 0) {
      finishChallenge()
    }
  }, [isOutOfQuestions, finished, current, finishChallenge])

  // ── Guard: no questions available ──
  if (!question && !finished) {
    return (
      <div className="quiz-page" style={{ textAlign: 'center', paddingTop: 60 }}>
        <p style={{ fontSize: 18, marginBottom: 20 }}>❌ 沒有題目</p>
        <Link to="/" className="home-btn">返回主頁</Link>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════
  //  RESULTS SCREEN
  // ═══════════════════════════════════════════════════
  if (finished) {
    return (
      <div className="quiz-page">
        <div className="quiz-result slide-up">
          <div className="result-title">⚡ 限時挑戰完成！</div>
          <div className="result-score perfect">
            {correctCount} 題
          </div>
          <div className="result-msg">
            {saving
              ? '⏳ 儲存中...'
              : `60秒內答對 ${correctCount} 題！`}
          </div>

          {isNewBest && !saving && (
            <div className="result-star-earned bounce-in" style={{ fontSize: 28 }}>
              🎉 新紀錄！
            </div>
          )}

          {!saving && bestScore !== null && (
            <div className="result-sub">
              最佳紀錄：{bestScore} 題
            </div>
          )}

          <div className="result-buttons" style={{ marginTop: 24 }}>
            <button className="retry-btn" onClick={reset}>
              🔄 再玩一次
            </button>
            <Link to="/" className="home-btn">
              🏠 返回主頁
            </Link>
          </div>
        </div>
      </div>
    )
  }

  // ═══════════════════════════════════════════════════
  //  ACTIVE CHALLENGE
  // ═══════════════════════════════════════════════════

  // Timer colour: green > 20s, orange 10–20s, red < 10s
  const timerColor =
    timeLeft <= 10
      ? 'var(--red)'
      : timeLeft <= 20
        ? 'var(--orange)'
        : 'var(--green)'

  const minutes = Math.floor(timeLeft / 60)
  const seconds = timeLeft % 60
  const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`

  return (
    <div className="quiz-page">
      {/* Header */}
      <div className="quiz-header">
        <Link to="/" className="quiz-back-btn">
          ← 離開
        </Link>
        <span className="quiz-star-count">
          ⭐ {userProfile?.totalStars || 0}
        </span>
      </div>

      {/* Prominent countdown timer */}
      <div
        className="timed-timer"
        style={{ textAlign: 'center', marginBottom: 20 }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: timerColor,
            fontVariantNumeric: 'tabular-nums',
            transition: 'color 0.3s',
            lineHeight: 1.2,
          }}
        >
          {timeDisplay}
        </div>
        <div
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: 'var(--text-light)',
            marginTop: 4,
          }}
        >
          答對：{correctCount} 題
        </div>
      </div>

      {/* Question card */}
      <div className="question-card slide-up" key={current}>
        <div className="question-text" style={{ fontSize: 18 }}>
          {question.question}
        </div>

        <div className="options-grid">
          {question.options.map((option, idx) => {
            let btnClass = 'option-btn'
            if (answered) {
              if (option === question.answer) {
                btnClass += ' correct'
              } else if (option === selected) {
                btnClass += ' wrong'
              }
            }
            return (
              <button
                key={idx}
                className={btnClass}
                onClick={() => handleSelect(option)}
                disabled={answered || isTimeUp}
              >
                <span className="option-letter">{LETTERS[idx]}</span>
                <span className="option-text">{option}</span>
              </button>
            )
          })}
        </div>

        {/* Brief feedback — no hint/explanation in timed mode */}
        {answered && (
          <div
            className={`feedback ${selected === question.answer ? 'correct' : 'wrong'} bounce-in`}
            style={{ fontSize: 18 }}
          >
            {selected === question.answer ? '✅ 答對了！' : '❌ 答錯了'}
          </div>
        )}
      </div>
    </div>
  )
}
