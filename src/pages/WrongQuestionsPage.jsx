import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { doc, updateDoc, arrayRemove } from 'firebase/firestore'
import { db } from '../firebase/config.js'
import { useAuth } from '../context/AuthContext.jsx'
import questions from '../data/questions.js'

const STYLES = {
  page: {
    padding: '20px 16px 40px',
    minHeight: '100vh',
  },
  topBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '16px 0 8px',
  },
  backBtn: {
    fontSize: 14,
    fontWeight: 700,
    color: 'var(--text-light, #7F8C8D)',
    background: 'none',
    border: '2px solid var(--text-light, #7F8C8D)',
    borderRadius: 'var(--radius-sm, 10px)',
    padding: '8px 16px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  title: {
    fontSize: 22,
    fontWeight: 900,
    textAlign: 'center',
    marginBottom: 20,
    color: 'var(--red, #FF6B6B)',
  },
  topicHeading: {
    fontSize: 18,
    fontWeight: 800,
    padding: '10px 16px',
    borderRadius: 'var(--radius-sm, 10px)',
    marginBottom: 12,
    marginTop: 20,
  },
  card: {
    background: 'var(--bg-card, #FFFFFF)',
    borderRadius: 'var(--radius, 16px)',
    padding: '20px',
    boxShadow: 'var(--shadow, 0 4px 15px rgba(0,0,0,0.1))',
    marginBottom: 12,
    borderLeft: '5px solid var(--red, #FF6B6B)',
  },
  questionText: {
    fontSize: 17,
    fontWeight: 700,
    lineHeight: 1.5,
    marginBottom: 12,
    color: 'var(--text, #2C3E50)',
  },
  answerLabel: {
    fontSize: 13,
    fontWeight: 700,
    color: 'var(--text-light, #7F8C8D)',
    marginBottom: 4,
  },
  answerBox: {
    display: 'inline-block',
    padding: '8px 16px',
    borderRadius: 'var(--radius-sm, 10px)',
    fontSize: 16,
    fontWeight: 800,
    background: '#E8F5E9',
    color: 'var(--green-dark, #4CAF50)',
    border: '2px solid var(--green, #6BCB77)',
    marginBottom: 14,
  },
  knowBtn: {
    width: '100%',
    padding: '12px',
    fontSize: 16,
    fontWeight: 800,
    background: 'linear-gradient(135deg, var(--green, #6BCB77), var(--green-dark, #4CAF50))',
    color: 'white',
    border: 'none',
    borderRadius: 'var(--radius-sm, 10px)',
    cursor: 'pointer',
    transition: 'transform 0.15s',
  },
  celebration: {
    textAlign: 'center',
    padding: '60px 20px',
  },
  celebrationEmoji: {
    fontSize: 72,
    marginBottom: 16,
  },
  celebrationTitle: {
    fontSize: 24,
    fontWeight: 900,
    color: 'var(--green-dark, #4CAF50)',
    marginBottom: 12,
  },
  celebrationMsg: {
    fontSize: 16,
    fontWeight: 600,
    color: 'var(--text-light, #7F8C8D)',
    marginBottom: 30,
  },
  homeBtn: {
    display: 'inline-block',
    padding: '14px 36px',
    fontSize: 16,
    fontWeight: 700,
    color: 'var(--text-light, #7F8C8D)',
    background: 'var(--bg-card, #FFFFFF)',
    border: '2px solid var(--text-light, #7F8C8D)',
    borderRadius: 'var(--radius-sm, 10px)',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  emptyState: {
    textAlign: 'center',
    padding: '40px 20px',
    fontSize: 16,
    fontWeight: 600,
    color: 'var(--text-light, #7F8C8D)',
  },
  countBadge: {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: 999,
    fontSize: 13,
    fontWeight: 800,
    color: 'white',
    marginLeft: 8,
  },
}

const TOPIC_META = {
  numbers: { icon: '🔢', name: '數字王國', color: 'var(--blue, #4A90D9)', bg: '#E3F2FD' },
  measurement: { icon: '📏', name: '量度世界', color: 'var(--green, #6BCB77)', bg: '#E8F5E9' },
  shapes: { icon: '🔷', name: '圖形迷宮', color: 'var(--purple, #9B59B6)', bg: '#F3E5F5' },
  data: { icon: '📊', name: '數據偵探', color: 'var(--orange, #FF8C42)', bg: '#FFF3E0' },
}

export default function WrongQuestionsPage() {
  const { currentUser, userProfile, refreshProfile } = useAuth()
  const [removing, setRemoving] = useState({})

  // Build a map of questionId -> question data for fast lookup
  const questionMap = useMemo(() => {
    const map = {}
    for (const q of questions) {
      map[q.id] = q
    }
    return map
  }, [])

  // Get wrong question entries from user profile
  const wrongEntries = userProfile?.wrongQuestions || []

  // Group wrong questions by topic
  const grouped = useMemo(() => {
    const groups = {}
    for (const entry of wrongEntries) {
      const q = questionMap[entry.questionId]
      if (!q) continue
      const topic = q.topic
      if (!groups[topic]) groups[topic] = []
      groups[topic].push({ entry, question: q })
    }
    return groups
  }, [wrongEntries, questionMap])

  const totalWrong = wrongEntries.length
  const isCleared = totalWrong === 0

  async function handleRemove(questionId) {
    if (removing[questionId]) return
    setRemoving((prev) => ({ ...prev, [questionId]: true }))

    try {
      const uid = currentUser.uid
      const userRef = doc(db, 'users', uid)
      const wrongEntry = wrongEntries.find((e) => e.questionId === questionId)
      if (wrongEntry) {
        // Use arrayRemove to remove the specific wrong question entry
        await updateDoc(userRef, {
          wrongQuestions: arrayRemove(wrongEntry),
        })
      }
      await refreshProfile()
    } catch (err) {
      console.error('Failed to remove wrong question:', err)
    } finally {
      setRemoving((prev) => ({ ...prev, [questionId]: false }))
    }
  }

  // ── Celebration: all cleared ──
  if (isCleared) {
    return (
      <div style={STYLES.page}>
        <div style={STYLES.topBar}>
          <Link to="/" style={STYLES.backBtn}>← 返回</Link>
        </div>
        <div style={STYLES.celebration}>
          <div style={STYLES.celebrationEmoji}>🎉</div>
          <div style={STYLES.celebrationTitle}>錯題清零！你進步了！</div>
          <div style={STYLES.celebrationMsg}>
            所有錯題都已經搞掂晒！你好叻呀！🌟<br />
            繼續保持，數學一定愈來愈好！
          </div>
          <Link to="/" style={STYLES.homeBtn}>🏠 返回主頁</Link>
        </div>
      </div>
    )
  }

  const topicKeys = Object.keys(TOPIC_META)

  return (
    <div style={STYLES.page}>
      {/* Top bar */}
      <div style={STYLES.topBar}>
        <Link to="/" style={STYLES.backBtn}>← 返回</Link>
        <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-light, #7F8C8D)' }}>
          錯題複習
        </span>
      </div>

      {/* Page Title */}
      <h2 style={STYLES.title}>
        ❌ 錯題本
        <span style={{ ...STYLES.countBadge, background: 'var(--red, #FF6B6B)' }}>
          {totalWrong}
        </span>
      </h2>

      {/* Wrong Questions grouped by topic */}
      {topicKeys.map((topicKey) => {
        const items = grouped[topicKey]
        if (!items || items.length === 0) return null

        const meta = TOPIC_META[topicKey]
        return (
          <div key={topicKey}>
            {/* Topic heading */}
            <div
              style={{
                ...STYLES.topicHeading,
                background: meta.bg,
                color: meta.color,
              }}
            >
              {meta.icon} {meta.name}
              <span style={{ ...STYLES.countBadge, background: meta.color }}>
                {items.length}
              </span>
            </div>

            {/* Question cards */}
            {items.map(({ entry, question }) => (
              <div key={entry.questionId} style={STYLES.card}>
                <div style={STYLES.questionText}>{question.question}</div>

                <div style={STYLES.answerLabel}>✅ 正確答案：</div>
                <div style={STYLES.answerBox}>{question.answer}</div>

                <button
                  style={{
                    ...STYLES.knowBtn,
                    opacity: removing[entry.questionId] ? 0.6 : 1,
                  }}
                  onClick={() => handleRemove(entry.questionId)}
                  disabled={removing[entry.questionId]}
                >
                  {removing[entry.questionId]
                    ? '⏳ 處理中...'
                    : '✅ 我識啦！'}
                </button>
              </div>
            ))}
          </div>
        )
      })}

      {/* If somehow there are entries but none match any question */}
      {Object.keys(grouped).length === 0 && !isCleared && (
        <div style={STYLES.emptyState}>
          😅 暫未找到對應的題目資料
        </div>
      )}
    </div>
  )
}
