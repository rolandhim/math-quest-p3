import { useState, useEffect, useRef, useCallback } from 'react'
import { useAuth } from '../../context/AuthContext.jsx'
import { db } from '../../firebase/config.js'
import { doc, updateDoc, increment, getDoc } from 'firebase/firestore'
import { playSound } from '../../utils/soundEffects.js'
import { TABLE_DATA } from '../../data/multiplicationData.js'

/* ─── Constants ────────────────────────────────────────── */
const TOTAL_QUESTIONS = 10
const STARS_THRESHOLDS = [
  { min: 10, stars: 5 },
  { min: 8, stars: 3 },
  { min: 6, stars: 2 },
  { min: 0, stars: 1 },
]

function getStars(correct) {
  for (const t of STARS_THRESHOLDS) {
    if (correct >= t.min) return t.stars
  }
  return 1
}

/* ─── Seeded RNG ────────────────────────────────────────── */
function seededRandom(seed) {
  let s = seed
  return () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
}

/* ─── Today helpers ─────────────────────────────────────── */
function getTodayStr() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function getDateSeed() {
  const d = new Date()
  return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate()
}

function getYesterdayStr() {
  const d = new Date()
  d.setDate(d.getDate() - 1)
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function getCountdownUntilMidnight() {
  const now = new Date()
  const midnight = new Date(now)
  midnight.setDate(midnight.getDate() + 1)
  midnight.setHours(0, 0, 0, 0)
  const diff = midnight - now
  const h = Math.floor(diff / 3600000)
  const min = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  return `${h}小時 ${min}分 ${s}秒`
}

/* ─── Generate daily questions ─────────────────────────── */
function generateDailyQuestions(masteredTables) {
  const tables = masteredTables.length > 0 ? masteredTables : [1, 2]
  const seed = getDateSeed()
  const rng = seededRandom(seed)
  const questions = []

  for (let i = 0; i < TOTAL_QUESTIONS; i++) {
    const table = tables[Math.floor(rng() * tables.length)]
    const multiplier = Math.floor(rng() * 9) + 2 // 2–10
    const answer = table * multiplier
    questions.push({ a: table, b: multiplier, answer })
  }
  return questions
}

function generateOptions(correct, rng) {
  const options = new Set([correct])
  const steps = [2, 3, 5]

  for (let i = 0; i < steps.length; i++) {
    if (options.size >= 4) break
    const step = steps[i]
    const sign = rng() > 0.5 ? 1 : -1
    const distractor = correct + sign * step
    if (distractor >= 1 && distractor !== correct) {
      options.add(distractor)
    }
  }

  // Fallback: fill if needed
  for (let offset = 1; options.size < 4; offset++) {
    if (correct + offset >= 1) options.add(correct + offset)
    if (options.size >= 4) break
    if (correct - offset >= 1) options.add(correct - offset)
  }

  // Shuffle using Fisher-Yates with seeded RNG
  const arr = [...options]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}

/* ─── Styles ────────────────────────────────────────────── */
const S = {
  container: {
    maxWidth: 600,
    margin: '0 auto',
    padding: '24px 16px',
    fontFamily: '"Segoe UI", "Noto Sans TC", system-ui, sans-serif',
    color: '#1a1a2e',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  header: {
    textAlign: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: 800,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    padding: 28,
    boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  startBtn: {
    display: 'block',
    width: '100%',
    maxWidth: 280,
    margin: '24px auto 0',
    padding: '16px 0',
    fontSize: 22,
    fontWeight: 700,
    border: 'none',
    borderRadius: 14,
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    transition: 'opacity 0.2s, transform 0.15s',
  },
  doneCard: {
    background: '#f0f9ff',
    border: '2px solid #bae6fd',
    borderRadius: 16,
    padding: 28,
    textAlign: 'center',
  },
  doneTitle: {
    fontSize: 26,
    fontWeight: 800,
    marginBottom: 12,
  },
  doneStars: {
    fontSize: 48,
    marginBottom: 12,
  },
  doneScore: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  doneTime: {
    fontSize: 18,
    color: '#555',
    marginBottom: 8,
  },
  doneCompare: {
    fontSize: 16,
    fontWeight: 700,
    color: '#f59e0b',
    marginBottom: 8,
  },
  streakBadge: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 8,
  },
  countdown: {
    fontSize: 14,
    color: '#888',
    marginTop: 12,
  },
  progressRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 600,
  },
  timer: {
    color: '#667eea',
  },
  equationArea: {
    textAlign: 'center',
    marginBottom: 28,
  },
  equationText: {
    fontSize: 44,
    fontWeight: 800,
    letterSpacing: 2,
    marginBottom: 4,
  },
  equationMark: {
    color: '#667eea',
  },
  optionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: 12,
    maxWidth: 400,
    margin: '0 auto',
  },
  optionBtn: {
    padding: '18px 0',
    fontSize: 28,
    fontWeight: 700,
    border: '2.5px solid #e0e0e0',
    borderRadius: 12,
    cursor: 'pointer',
    background: '#fff',
    color: '#1a1a2e',
    transition: 'transform 0.12s, box-shadow 0.12s, border-color 0.15s',
    userSelect: 'none',
  },
  optionCorrect: {
    borderColor: '#4caf50',
    background: '#e8f5e9',
    color: '#2e7d32',
  },
  optionWrong: {
    borderColor: '#f44336',
    background: '#ffebee',
    color: '#c62828',
  },
  optionReveal: {
    borderColor: '#ff9800',
    background: '#fff8e1',
    color: '#e65100',
    boxShadow: '0 0 0 3px rgba(255,152,0,0.4)',
  },
  hintText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 600,
    color: '#f44336',
    marginTop: 16,
    minHeight: 24,
  },
}

/* ─── Component ─────────────────────────────────────────── */
export default function DailyChallengePage() {
  const { currentUser, userProfile, refreshProfile } = useAuth()
  const uid = currentUser?.uid

  /* State */
  const [todayData, setTodayData] = useState(null) // today's completed entry
  const [loading, setLoading] = useState(true)
  const [gameState, setGameState] = useState('idle') // idle | playing | done
  const [questions, setQuestions] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [options, setOptions] = useState([])
  const [correctCount, setCorrectCount] = useState(0)
  const [wrongCount, setWrongCount] = useState(0)
  const [attempts, setAttempts] = useState(0) // per question
  const [selectedOption, setSelectedOption] = useState(null)
  const [optionStates, setOptionStates] = useState({})
  const [hint, setHint] = useState('')
  const [startTime, setStartTime] = useState(null)
  const [elapsed, setElapsed] = useState(0)
  const [result, setResult] = useState(null) // final result object
  const [countdown, setCountdown] = useState('')
  const [saving, setSaving] = useState(false)

  const timerRef = useRef(null)
  const countdownRef = useRef(null)

  /* ── Load today data on mount ────────────────────────── */
  useEffect(() => {
    if (!uid) {
      setLoading(false)
      return
    }
    const load = async () => {
      try {
        const today = getTodayStr()
        const snap = await getDoc(doc(db, 'users', uid))
        if (snap.exists()) {
          const data = snap.data()
          const daily = data.dailyMultiplication || {}
          if (daily[today]) {
            setTodayData(daily[today])
          }
        }
      } catch {
        // Offline — silently fail
      }
      setLoading(false)
    }
    load()
  }, [uid])

  /* ── Countdown timer for completed today ────────────── */
  useEffect(() => {
    if (todayData) {
      setCountdown(getCountdownUntilMidnight())
      countdownRef.current = setInterval(() => {
        setCountdown(getCountdownUntilMidnight())
      }, 1000)
      return () => clearInterval(countdownRef.current)
    }
  }, [todayData])

  /* ── Game timer ─────────────────────────────────────── */
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setElapsed(Math.floor((Date.now() - startTime) / 1000))
      }, 200)
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [gameState, startTime])

  /* ── Start Challenge ────────────────────────────────── */
  const handleStart = useCallback(() => {
    playSound('correct') // click sound
    const mastered = userProfile?.multiplication?.masteredTables || []
    const seed = getDateSeed()
    const rng = seededRandom(seed)
    const qs = generateDailyQuestions(mastered)
    setQuestions(qs)
    setCurrentIndex(0)
    setOptions(generateOptions(qs[0].answer, rng))
    setCorrectCount(0)
    setWrongCount(0)
    setAttempts(0)
    setSelectedOption(null)
    setOptionStates({})
    setHint('')
    setElapsed(0)
    setStartTime(Date.now())
    setResult(null)
    setGameState('playing')
  }, [userProfile])

  /* ── Advance to next question ───────────────────────── */
  const advance = useCallback(() => {
    const nextIdx = currentIndex + 1
    if (nextIdx >= TOTAL_QUESTIONS) {
      // Game done
      const timeSeconds = Math.floor((Date.now() - startTime) / 1000)
      const stars = getStars(correctCount)
      playSound('complete')
      setGameState('done')
      setResult({ correct: correctCount, wrong: wrongCount, timeSeconds, stars })
      return
    }
    const rng = seededRandom(getDateSeed())
    setCurrentIndex(nextIdx)
    setOptions(generateOptions(questions[nextIdx].answer, rng))
    setAttempts(0)
    setSelectedOption(null)
    setOptionStates({})
    setHint('')
  }, [currentIndex, correctCount, wrongCount, questions, startTime])

  /* ── Handle option click ────────────────────────────── */
  const handleOptionClick = useCallback((value) => {
    if (selectedOption !== null) return // already answered this question
    const q = questions[currentIndex]
    if (!q) return

    if (value === q.answer) {
      // Correct!
      playSound('correct')
      setCorrectCount((c) => c + 1)
      setSelectedOption(value)
      setOptionStates({ [value]: 'correct' })
      setTimeout(() => advance(), 600)
    } else {
      // Wrong
      playSound('wrong')
      const newAttempts = attempts + 1
      setAttempts(newAttempts)
      setWrongCount((w) => w + 1)
      setOptionStates({ [value]: 'wrong' })

      if (newAttempts >= 2) {
        // Reveal answer
        setTimeout(() => {
          setOptionStates({ [q.answer]: 'reveal', [value]: 'wrong' })
          setHint(`答案係 ${q.answer} 😊`)
          setTimeout(() => advance(), 1200)
        }, 400)
      } else {
        // First wrong — hint, allow retry
        let hintMsg = '再試一次！🤔'
        if (q.a === 1) {
          hintMsg = `任何數乘 1 都等於佢自己喎！`
        } else if (q.a === 2) {
          hintMsg = `諗下雙倍嘅概念⋯`
        } else if (q.a === 5) {
          hintMsg = `5 嘅乘法結尾係 0 或 5！`
        } else if (q.a === 10) {
          hintMsg = `10 嘅乘法後面加個 0 就得！`
        }
        setHint(hintMsg)
        setTimeout(() => {
          setOptionStates({})
          setSelectedOption(null)
        }, 800)
      }
    }
  }, [currentIndex, questions, selectedOption, attempts, advance])

  /* ── Save result to Firestore ───────────────────────── */
  const saveResult = useCallback(async () => {
    if (!uid || !result || saving) return
    setSaving(true)
    try {
      const today = getTodayStr()
      const yesterday = getYesterdayStr()
      const userRef = doc(db, 'users', uid)
      const snap = await getDoc(userRef)

      if (!snap.exists()) {
        setSaving(false)
        return
      }

      const data = snap.data()
      const dailyMultiplication = data.dailyMultiplication || {}
      const currentStreak = data.multiplicationStreak || 0
      const prevBestTime = data.multiplicationBestTime || Infinity

      // Streak check
      let newStreak = 1
      if (dailyMultiplication[yesterday]) {
        newStreak = currentStreak + 1
      }

      // Stars from streak bonus
      let streakBonusStars = 0
      let streakEmoji = ''
      if (newStreak >= 14) {
        streakBonusStars = 20
        streakEmoji = '🏆'
      } else if (newStreak >= 7) {
        streakBonusStars = 10
        streakEmoji = '👑'
      } else if (newStreak >= 3) {
        streakBonusStars = 3
        streakEmoji = '🔥'
      }

      const totalStarsEarned = result.stars + streakBonusStars
      const newBestTime = result.timeSeconds < prevBestTime ? result.timeSeconds : prevBestTime

      const updates = {
        [`dailyMultiplication.${today}`]: {
          completed: true,
          correct: result.correct,
          wrong: result.wrong,
          timeSeconds: result.timeSeconds,
          starsEarned: result.stars,
          streakBonusStars,
          streakDays: newStreak,
        },
        multiplicationStreak: newStreak,
        multiplicationBestTime: newBestTime,
        'multiplication.totalMultStars': increment(totalStarsEarned),
        totalStars: increment(totalStarsEarned),
      }

      await updateDoc(userRef, updates)
      await refreshProfile()

      setResult((prev) => ({
        ...prev,
        streakDays: newStreak,
        streakBonusStars,
        streakEmoji,
        totalStarsEarned,
      }))
    } catch {
      // Fail silently
    }
    setSaving(false)
  }, [uid, result, saving, refreshProfile])

  /* ── Save on done ───────────────────────────────────── */
  useEffect(() => {
    if (gameState === 'done' && result && !result._saved) {
      setResult((prev) => ({ ...prev, _saved: true }))
      saveResult()
    }
  }, [gameState, result, saveResult])

  /* ── Comparison with yesterday ──────────────────────── */
  const [yesterdayData, setYesterdayData] = useState(null)
  useEffect(() => {
    if (!uid || gameState !== 'done') return
    const fetchYesterday = async () => {
      try {
        const snap = await getDoc(doc(db, 'users', uid))
        if (snap.exists()) {
          const daily = snap.data().dailyMultiplication || {}
          setYesterdayData(daily[getYesterdayStr()] || null)
        }
      } catch {}
    }
    fetchYesterday()
  }, [uid, gameState])

  /* ── Render: Loading ────────────────────────────────── */
  if (loading) {
    return (
      <div style={S.container}>
        <div style={{ textAlign: 'center', marginTop: 80, fontSize: 18, color: '#888' }}>
          載入中...
        </div>
      </div>
    )
  }

  /* ── Render: Already done today ─────────────────────── */
  if (todayData) {
    const stars = getStars(todayData.correct)
    return (
      <div style={S.container}>
        <div style={S.header}>
          <div style={S.title}>📅 今日挑戰</div>
          <div style={S.subtitle}>今日已經完成咗啦！</div>
        </div>
        <div style={S.doneCard}>
          <div style={S.doneTitle}>今日挑戰完成！🎉</div>
          <div style={S.doneStars}>{'⭐'.repeat(stars)}</div>
          <div style={S.doneScore}>答對 {todayData.correct} / {TOTAL_QUESTIONS} 題</div>
          {todayData.timeSeconds != null && (
            <div style={S.doneTime}>用時 {todayData.timeSeconds} 秒</div>
          )}
          {todayData.streakDays > 1 && (
            <div style={S.streakBadge}>
              {todayData.streakDays >= 14 ? '🏆' : todayData.streakDays >= 7 ? '👑' : '🔥'}{' '}
              連續 {todayData.streakDays} 日！
            </div>
          )}
          <div style={S.countdown}>下次挑戰仲有 {countdown}</div>
        </div>
      </div>
    )
  }

  /* ── Render: Game playing ───────────────────────────── */
  if (gameState === 'playing') {
    const q = questions[currentIndex]
    const progress = `第 ${currentIndex + 1} / ${TOTAL_QUESTIONS} 題`

    return (
      <div style={S.container}>
        <div style={S.progressRow}>
          <span>{progress}</span>
          <span style={S.timer}>⏱ {elapsed}秒</span>
        </div>

        <div style={S.equationArea}>
          <div style={S.equationText}>
            {q.a} <span style={S.equationMark}>×</span> {q.b} <span style={S.equationMark}>=</span>{' '}
            <span style={S.equationMark}>?</span>
          </div>
        </div>

        <div style={S.optionsGrid}>
          {options.map((opt) => {
            let btnStyle = { ...S.optionBtn }
            if (optionStates[opt] === 'correct') {
              btnStyle = { ...btnStyle, ...S.optionCorrect }
            } else if (optionStates[opt] === 'wrong') {
              btnStyle = { ...btnStyle, ...S.optionWrong }
            } else if (optionStates[opt] === 'reveal') {
              btnStyle = { ...btnStyle, ...S.optionReveal }
            }
            return (
              <button
                key={opt}
                style={btnStyle}
                onClick={() => handleOptionClick(opt)}
                disabled={selectedOption !== null}
              >
                {opt}
              </button>
            )
          })}
        </div>

        {hint && <div style={S.hintText}>{hint}</div>}
      </div>
    )
  }

  /* ── Render: Result screen ──────────────────────────── */
  if (gameState === 'done' && result) {
    let compareText = ''
    if (yesterdayData) {
      if (result.timeSeconds < yesterdayData.timeSeconds) {
        const diff = yesterdayData.timeSeconds - result.timeSeconds
        compareText = `比昨日快咗 ${diff} 秒！⚡`
      } else if (result.correct > (yesterdayData.correct || 0)) {
        const diff = result.correct - (yesterdayData.correct || 0)
        compareText = `比昨日多答對 ${diff} 題！📈`
      } else {
        compareText = `繼續努力！💪`
      }
    }

    return (
      <div style={S.container}>
        <div style={S.card}>
          <div style={{ fontSize: 48, marginBottom: 8 }}>🎉</div>
          <div style={S.doneTitle}>今日挑戰完成！🎉</div>
          <div style={S.doneStars}>{'⭐'.repeat(result.stars)}</div>
          <div style={S.doneScore}>
            答對 {result.correct} / {TOTAL_QUESTIONS} 題
          </div>
          <div style={S.doneTime}>用時 {result.timeSeconds} 秒</div>

          {compareText && <div style={S.doneCompare}>{compareText}</div>}

          {result.streakDays > 1 && (
            <div style={S.streakBadge}>
              {result.streakEmoji} 連續 {result.streakDays} 日！
            </div>
          )}

          {result.streakBonusStars > 0 && (
            <div style={{ fontSize: 16, color: '#f59e0b', fontWeight: 700, marginBottom: 8 }}>
              +{result.streakBonusStars}⭐ 連續獎勵 {result.streakEmoji}
            </div>
          )}

          <div style={{ fontSize: 18, fontWeight: 700, color: '#667eea', marginBottom: 16 }}>
            獲得 {result.totalStarsEarned} ⭐！
          </div>
        </div>
      </div>
    )
  }

  /* ── Render: Idle / Start screen ────────────────────── */
  return (
    <div style={S.container}>
      <div style={S.header}>
        <div style={S.title}>📅 今日挑戰</div>
        <div style={S.subtitle}>每日 10 題，保持練習🔥</div>
      </div>
      <div style={S.card}>
        <div style={{ fontSize: 64, marginBottom: 12 }}>🏆</div>
        <div style={{ fontSize: 18, color: '#555', marginBottom: 8 }}>
          每日 10 條乘法題
        </div>
        <div style={{ fontSize: 14, color: '#888', marginBottom: 4 }}>
          全部答對可得 5⭐
        </div>
        <div style={{ fontSize: 14, color: '#888', marginBottom: 16 }}>
          連續挑戰有 bonus ⭐！
        </div>
        <button style={S.startBtn} onClick={handleStart}>
          開始挑戰 🚀
        </button>
      </div>
    </div>
  )
}
