import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { doc, getDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase/config.js'
import { useAuth } from '../context/AuthContext.jsx'
import questions from '../data/questions.js'
import achievementsData from '../data/achievements.js'

// ── Colour constants matching App.css variables ─────
const C = {
  blue: '#4A90D9',
  blueLight: '#7BB3E8',
  blueDark: '#2D6CB4',
  yellow: '#FFD93D',
  yellowLight: '#FFE680',
  yellowDark: '#E6B800',
  green: '#6BCB77',
  greenLight: '#96DFA5',
  greenDark: '#4CAF50',
  red: '#FF6B6B',
  orange: '#FF8C42',
  purple: '#9B59B6',
  pink: '#FF6B9D',
  bg: '#E8F4FD',
  bgCard: '#FFFFFF',
  text: '#2C3E50',
  textLight: '#7F8C8D',
  shadow: '0 4px 15px rgba(0,0,0,0.1)',
  shadowBig: '0 8px 30px rgba(0,0,0,0.15)',
  radius: 16,
  radiusSm: 10,
}

const TOPICS = [
  { key: 'numbers', icon: '🔢', name: '數字王國', color: C.blue },
  { key: 'measurement', icon: '📏', name: '量度世界', color: C.green },
  { key: 'shapes', icon: '🔷', name: '圖形迷宮', color: C.purple },
  { key: 'data', icon: '📊', name: '數據偵探', color: C.orange },
]

const TOPIC_NAME_MAP = {
  numbers: '數字王國',
  measurement: '量度世界',
  shapes: '圖形迷宮',
  data: '數據偵探',
}

const TOPIC_ICON_MAP = {
  numbers: '🔢',
  measurement: '📏',
  shapes: '🔷',
  data: '📊',
}

// ── PIN Screen ──────────────────────────────────────

function PinScreen({ onUnlock, error, setError }) {
  const [pin, setPin] = useState('')

  function handleDigit(d) {
    if (pin.length >= 4) return
    const next = pin + d
    setPin(next)
    setError('')
    if (next.length === 4) {
      onUnlock(next)
    }
  }

  function handleBackspace() {
    setPin((p) => p.slice(0, -1))
    setError('')
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '40px 24px',
      background: C.bg,
    }}>
      <div style={{
        background: C.bgCard,
        borderRadius: C.radius,
        padding: '40px 28px',
        boxShadow: C.shadowBig,
        width: '100%',
        maxWidth: 360,
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 48, marginBottom: 8 }}>🔒</div>
        <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 4, color: C.text }}>
          家長驗證
        </h2>
        <p style={{ fontSize: 14, color: C.textLight, fontWeight: 600, marginBottom: 24 }}>
          請輸入家長 PIN 碼（4位數字）
        </p>

        {/* PIN dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          marginBottom: 8,
        }}>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: pin[i] ? C.blue : '#E0E0E0',
              transition: 'background 0.15s',
            }} />
          ))}
        </div>

        {error && (
          <div style={{
            background: '#FFEBEE',
            color: '#C62828',
            padding: '10px 16px',
            borderRadius: C.radiusSm,
            fontSize: 14,
            fontWeight: 700,
            marginBottom: 16,
            animation: 'shake 0.4s ease-out',
          }}>
            {error}
          </div>
        )}

        {/* Numpad */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 10,
          marginTop: 16,
        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
            <button
              key={d}
              onClick={() => handleDigit(String(d))}
              style={{
                padding: 16,
                fontSize: 24,
                fontWeight: 800,
                background: C.bg,
                border: 'none',
                borderRadius: C.radiusSm,
                cursor: 'pointer',
                color: C.text,
                boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
                transition: 'transform 0.1s',
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.92)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {d}
            </button>
          ))}
          <div /> {/* empty cell */}
          <button
            onClick={() => handleDigit('0')}
            style={{
              padding: 16,
              fontSize: 24,
              fontWeight: 800,
              background: C.bg,
              border: 'none',
              borderRadius: C.radiusSm,
              cursor: 'pointer',
              color: C.text,
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              transition: 'transform 0.1s',
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.92)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            0
          </button>
          <button
            onClick={handleBackspace}
            style={{
              padding: 16,
              fontSize: 20,
              fontWeight: 800,
              background: '#FFEBEE',
              border: 'none',
              borderRadius: C.radiusSm,
              cursor: 'pointer',
              color: C.red,
              boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
              transition: 'transform 0.1s',
            }}
            onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.92)'}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            ⌫
          </button>
        </div>

        <Link to="/" style={{
          display: 'inline-block',
          marginTop: 20,
          fontSize: 14,
          fontWeight: 700,
          color: C.textLight,
          textDecoration: 'none',
        }}>
          🏠 返回主頁
        </Link>
      </div>
    </div>
  )
}

// ── Card wrapper ────────────────────────────────────

function SectionCard({ title, children, style }) {
  return (
    <div style={{
      background: C.bgCard,
      borderRadius: C.radius,
      padding: 20,
      boxShadow: C.shadow,
      marginBottom: 16,
      ...style,
    }}>
      {title && (
        <h3 style={{
          fontSize: 18,
          fontWeight: 800,
          color: C.text,
          marginBottom: 16,
        }}>
          {title}
        </h3>
      )}
      {children}
    </div>
  )
}

// ── Overview Cards ──────────────────────────────────

function OverviewCards({ totalStars, totalAnswered, bestStreak, loginStreak }) {
  const cards = [
    { icon: '⭐', label: '總星星', value: totalStars, bg: '#FFF8E1', color: '#8B6914' },
    { icon: '📝', label: '總答題數', value: totalAnswered, bg: '#E3F2FD', color: C.blueDark },
    { icon: '🔥', label: '最佳連續', value: bestStreak, bg: '#FFF3E0', color: C.orange },
    { icon: '📅', label: '登入連續', value: loginStreak, bg: '#F3E5F5', color: C.purple },
  ]

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
    }}>
      {cards.map((c) => (
        <div key={c.label} style={{
          background: c.bg,
          borderRadius: C.radiusSm,
          padding: '16px 12px',
          textAlign: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        }}>
          <div style={{ fontSize: 28, marginBottom: 4 }}>{c.icon}</div>
          <div style={{ fontSize: 24, fontWeight: 900, color: c.color }}>{c.value}</div>
          <div style={{ fontSize: 12, fontWeight: 700, color: C.textLight, marginTop: 2 }}>{c.label}</div>
        </div>
      ))}
    </div>
  )
}

// ── Topic Progress ──────────────────────────────────

function TopicProgress({ progress }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {TOPICS.map((t) => {
        const tp = progress?.[t.key] || { completed: [], stars: 0 }
        const completed = tp.completed?.length || 0
        const total = 10
        const pct = Math.min(100, Math.round((completed / total) * 100))

        return (
          <div key={t.key} style={{
            background: '#FAFAFA',
            borderRadius: C.radiusSm,
            padding: '14px 16px',
            borderLeft: `4px solid ${t.color}`,
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 8,
            }}>
              <span style={{ fontSize: 15, fontWeight: 800, color: C.text }}>
                {t.icon} {t.name}
              </span>
              <span style={{ fontSize: 13, fontWeight: 700, color: C.textLight }}>
                ⭐{tp.stars} · {completed}/{total}
              </span>
            </div>
            <div style={{
              width: '100%',
              height: 8,
              background: '#E8E8E8',
              borderRadius: 999,
              overflow: 'hidden',
            }}>
              <div style={{
                width: `${pct}%`,
                height: '100%',
                borderRadius: 999,
                background: `linear-gradient(90deg, ${t.color}, ${t.color}88)`,
                transition: 'width 0.4s ease',
              }} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Difficulty Breakdown ────────────────────────────

function DifficultyBreakdown({ wrongQuestions, totalAnswered }) {
  // Count wrong by difficulty
  const wrongByDifficulty = useMemo(() => {
    const counts = { easy: 0, medium: 0, hard: 0 }
    const wrongIds = wrongQuestions?.map((w) => w.questionId) || []
    for (const q of questions) {
      if (wrongIds.includes(q.id) && counts[q.difficulty] !== undefined) {
        counts[q.difficulty]++
      }
    }
    return counts
  }, [wrongQuestions])

  // Total questions per difficulty
  const totalByDifficulty = useMemo(() => {
    const counts = { easy: 0, medium: 0, hard: 0 }
    for (const q of questions) {
      if (counts[q.difficulty] !== undefined) counts[q.difficulty]++
    }
    return counts
  }, [])

  const difficulties = [
    { key: 'easy', label: '簡單 🟢', color: C.green },
    { key: 'medium', label: '中等 🟡', color: C.orange },
    { key: 'hard', label: '困難 🔴', color: C.red },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {difficulties.map((d) => {
        const total = totalByDifficulty[d.key]
        const wrong = wrongByDifficulty[d.key]
        const correct = total - wrong
        const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0

        return (
          <div key={d.key} style={{
            background: '#FAFAFA',
            borderRadius: C.radiusSm,
            padding: '12px 16px',
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 6,
            }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: C.text }}>{d.label}</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: d.color }}>{accuracy}%</span>
            </div>
            <div style={{
              width: '100%',
              height: 6,
              background: '#E8E8E8',
              borderRadius: 999,
              overflow: 'hidden',
            }}>
              <div style={{
                width: `${accuracy}%`,
                height: '100%',
                borderRadius: 999,
                background: d.color,
                transition: 'width 0.4s ease',
              }} />
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: C.textLight, marginTop: 4 }}>
              正確 {correct}/{total} 題
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Recent Wrong Questions ──────────────────────────

function RecentWrongQuestions({ wrongQuestions }) {
  const recent = (wrongQuestions || [])
    .slice()
    .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
    .slice(0, 5)

  if (recent.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: 20, color: C.textLight, fontWeight: 600 }}>
        🎉 沒有錯題紀錄！繼續加油！
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      {recent.map((w, i) => {
        const q = questions.find((q) => q.id === w.questionId)
        const topicName = TOPIC_NAME_MAP[w.topic] || w.topic
        const date = w.timestamp
          ? new Date(w.timestamp).toLocaleDateString('zh-HK', { month: 'short', day: 'numeric' })
          : '—'

        return (
          <div key={i} style={{
            background: '#FFF5F5',
            borderRadius: C.radiusSm,
            padding: '12px 14px',
            borderLeft: `3px solid ${C.red}`,
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: C.text, marginBottom: 4 }}>
              {q ? q.question : '（已刪除題目）'}
            </div>
            <div style={{ fontSize: 11, fontWeight: 600, color: C.textLight }}>
              {topicName} · {date}
              {q && ` · 正確答案：${q.answer}`}
            </div>
          </div>
        )
      })}
    </div>
  )
}

// ── Achievements Section ────────────────────────────

function AchievementsSection({ userProfile }) {
  const stats = useMemo(() => ({
    totalStars: userProfile?.totalStars || 0,
    bestStreak: userProfile?.bestStreak || 0,
    loginStreak: userProfile?.loginStreak || 0,
    perfectRounds: userProfile?.perfectRounds || 0,
    timedBest: userProfile?.timedBest || 0,
    wrongCleared: userProfile?.wrongCleared || 0,
    progress: userProfile?.progress || {},
  }), [userProfile])

  const unlocked = useMemo(() => {
    return achievementsData.filter((a) => a.condition(stats))
  }, [stats])

  const locked = useMemo(() => {
    return achievementsData.filter((a) => !a.condition(stats))
  }, [stats])

  return (
    <>
      {unlocked.length > 0 && (
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.greenDark, marginBottom: 8 }}>
            ✅ 已解鎖 ({unlocked.length})
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {unlocked.map((a) => (
              <div key={a.id} style={{
                background: '#E8F5E9',
                borderRadius: C.radiusSm,
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}>
                <span style={{ fontSize: 22 }}>{a.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.greenDark }}>{a.name}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.textLight }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {locked.length > 0 && (
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: C.textLight, marginBottom: 8 }}>
            🔒 未解鎖 ({locked.length})
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {locked.map((a) => (
              <div key={a.id} style={{
                background: '#F5F5F5',
                borderRadius: C.radiusSm,
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                opacity: 0.65,
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}>
                <span style={{ fontSize: 22, filter: 'grayscale(1)' }}>{a.icon}</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 800, color: C.textLight }}>{a.name}</div>
                  <div style={{ fontSize: 11, fontWeight: 600, color: C.textLight }}>{a.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}

// ── Main Dashboard Component ────────────────────────

export default function ParentDashboard() {
  const { currentUser, userProfile } = useAuth()

  // PIN state
  const [storedPin, setStoredPin] = useState('1234')
  const [unlocked, setUnlocked] = useState(false)
  const [pinError, setPinError] = useState('')
  const [loadingPin, setLoadingPin] = useState(true)

  // Change PIN state
  const [newPin, setNewPin] = useState('')
  const [pinSaved, setPinSaved] = useState(false)
  const [pinSaving, setPinSaving] = useState(false)

  // Reset topic state
  const [showResetDialog, setShowResetDialog] = useState(false)

  // Load PIN from Firestore on mount
  useEffect(() => {
    async function loadPin() {
      if (!currentUser) {
        setLoadingPin(false)
        return
      }
      try {
        const snap = await getDoc(doc(db, 'users', currentUser.uid))
        if (snap.exists()) {
          const data = snap.data()
          if (data.parentPin) {
            setStoredPin(data.parentPin)
          }
        }
      } catch {
        // Fall back to default 1234
      }
      setLoadingPin(false)
    }
    loadPin()
  }, [currentUser])

  function handlePinSubmit(inputPin) {
    if (inputPin === storedPin) {
      setUnlocked(true)
      setPinError('')
    } else {
      setPinError('❌ PIN 碼錯誤，再試一次')
    }
  }

  async function handleSavePin() {
    if (!currentUser || newPin.length !== 4 || !/^\d{4}$/.test(newPin)) return
    setPinSaving(true)
    try {
      await updateDoc(doc(db, 'users', currentUser.uid), { parentPin: newPin })
      setStoredPin(newPin)
      setNewPin('')
      setPinSaved(true)
      setTimeout(() => setPinSaved(false), 2000)
    } catch {
      setPinSaved(false)
    }
    setPinSaving(false)
  }

  // Calculate aggregates
  const totalStars = userProfile?.totalStars || 0
  const bestStreak = userProfile?.bestStreak || 0
  const loginStreak = userProfile?.loginStreak || 0
  const progress = userProfile?.progress || {}
  const wrongQuestions = userProfile?.wrongQuestions || []

  const totalAnswered = useMemo(() => {
    let count = 0
    for (const t of TOPICS) {
      const tp = progress[t.key]
      if (tp?.completed) count += tp.completed.length
    }
    return count
  }, [progress])

  // ── Loading state ──
  if (loadingPin) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: C.bg,
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: 48,
            height: 48,
            border: '5px solid ' + C.blueLight,
            borderTopColor: C.blue,
            borderRadius: '50%',
            animation: 'spin 0.8s linear infinite',
            margin: '0 auto 16px',
          }} />
          <p style={{ fontWeight: 700, color: C.textLight }}>載入中...</p>
        </div>
      </div>
    )
  }

  // ── PIN lock screen ──
  if (!unlocked) {
    return (
      <PinScreen
        onUnlock={handlePinSubmit}
        error={pinError}
        setError={setPinError}
      />
    )
  }

  // ── Dashboard ──
  const nickname = userProfile?.nickname || '小朋友'

  return (
    <div style={{
      padding: '20px 16px 40px',
      minHeight: '100vh',
      background: C.bg,
      maxWidth: 500,
      margin: '0 auto',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
      }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, color: C.text }}>
          👨‍👩‍👧 家長儀表板
        </h2>
        <Link to="/" style={{
          fontSize: 14,
          fontWeight: 700,
          color: C.textLight,
          background: C.bgCard,
          border: '2px solid #E0E0E0',
          borderRadius: C.radiusSm,
          padding: '8px 16px',
          cursor: 'pointer',
          textDecoration: 'none',
          boxShadow: C.shadow,
        }}>
          🏠 主頁
        </Link>
      </div>

      <p style={{ fontSize: 14, fontWeight: 600, color: C.textLight, marginBottom: 20 }}>
        {nickname} 的學習進度總覽
      </p>

      {/* Section 1: Overview */}
      <SectionCard title="📊 學習概覽">
        <OverviewCards
          totalStars={totalStars}
          totalAnswered={totalAnswered}
          bestStreak={bestStreak}
          loginStreak={loginStreak}
        />
      </SectionCard>

      {/* Section 2: Topic Progress */}
      <SectionCard title="📚 主題進度">
        <TopicProgress progress={progress} />
      </SectionCard>

      {/* Section 3: Difficulty Breakdown */}
      <SectionCard title="🎯 難度分析">
        <DifficultyBreakdown
          wrongQuestions={wrongQuestions}
          totalAnswered={totalAnswered}
        />
      </SectionCard>

      {/* Section 4: Recent Wrong Questions */}
      <SectionCard title="❌ 最近錯題">
        <RecentWrongQuestions wrongQuestions={wrongQuestions} />
      </SectionCard>

      {/* Section 5: Achievements */}
      <SectionCard title="🏅 成就">
        <AchievementsSection userProfile={userProfile} />
      </SectionCard>

      {/* Reset Topic Progress (placeholder) */}
      <SectionCard>
        <button
          onClick={() => setShowResetDialog(true)}
          style={{
            width: '100%',
            padding: 16,
            fontSize: 16,
            fontWeight: 800,
            background: '#FFF3E0',
            color: C.orange,
            border: `2px solid ${C.orange}`,
            borderRadius: C.radiusSm,
            cursor: 'pointer',
            transition: 'transform 0.15s',
          }}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.97)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          🔄 重置某主題進度
        </button>
      </SectionCard>

      {/* Reset confirm dialog */}
      {showResetDialog && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: 24,
        }}
          onClick={() => setShowResetDialog(false)}
        >
          <div style={{
            background: C.bgCard,
            borderRadius: C.radius,
            padding: 28,
            maxWidth: 340,
            width: '100%',
            textAlign: 'center',
            boxShadow: C.shadowBig,
          }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ fontSize: 40, marginBottom: 8 }}>⚠️</div>
            <h3 style={{ fontSize: 18, fontWeight: 900, color: C.text, marginBottom: 8 }}>
              重置進度
            </h3>
            <p style={{ fontSize: 14, fontWeight: 600, color: C.textLight, marginBottom: 20 }}>
              呢個功能將會清空所選主題嘅所有進度。\n（目前只係 UI 佔位，未實際連接）
            </p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button
                onClick={() => setShowResetDialog(false)}
                style={{
                  flex: 1,
                  padding: 14,
                  fontSize: 15,
                  fontWeight: 700,
                  background: '#F5F5F5',
                  border: 'none',
                  borderRadius: C.radiusSm,
                  cursor: 'pointer',
                  color: C.textLight,
                }}
              >
                🔙 取消
              </button>
              <button
                onClick={() => {
                  alert('🔧 功能開發中 — 重置進度功能尚未實作')
                  setShowResetDialog(false)
                }}
                style={{
                  flex: 1,
                  padding: 14,
                  fontSize: 15,
                  fontWeight: 700,
                  background: C.red,
                  border: 'none',
                  borderRadius: C.radiusSm,
                  cursor: 'pointer',
                  color: 'white',
                }}
              >
                🗑️ 確認重置
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Change PIN */}
      <SectionCard title="🔑 更改 PIN 碼">
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            placeholder="輸入4位新PIN"
            value={newPin}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '')
              if (val.length <= 4) setNewPin(val)
            }}
            style={{
              flex: 1,
              padding: '14px 16px',
              fontSize: 18,
              fontWeight: 700,
              border: `3px solid ${C.blueLight}`,
              borderRadius: C.radiusSm,
              outline: 'none',
              textAlign: 'center',
              letterSpacing: 6,
              background: C.bgCard,
            }}
          />
          <button
            onClick={handleSavePin}
            disabled={newPin.length !== 4 || pinSaving}
            style={{
              padding: '14px 20px',
              fontSize: 15,
              fontWeight: 800,
              background: newPin.length === 4 ? C.blue : '#E0E0E0',
              color: newPin.length === 4 ? 'white' : C.textLight,
              border: 'none',
              borderRadius: C.radiusSm,
              cursor: newPin.length === 4 ? 'pointer' : 'default',
              transition: 'transform 0.15s',
              whiteSpace: 'nowrap',
            }}
            onMouseDown={(e) => {
              if (newPin.length === 4) e.currentTarget.style.transform = 'scale(0.95)'
            }}
            onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            {pinSaving ? '⏳...' : '儲存'}
          </button>
        </div>
        {pinSaved && (
          <div style={{
            marginTop: 10,
            fontSize: 13,
            fontWeight: 700,
            color: C.greenDark,
            textAlign: 'center',
          }}>
            ✅ PIN 碼已更新！
          </div>
        )}
      </SectionCard>
    </div>
  )
}
