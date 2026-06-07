import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { useProgress } from '../hooks/useProgress.js'
import questions from '../data/questions.js'
import achievementsData from '../data/achievements.js'

const TOPICS = [
  {
    key: 'numbers',
    icon: '🔢',
    name: '數字王國',
    desc: '數與運算',
    className: 'topic-numbers',
  },
  {
    key: 'measurement',
    icon: '📏',
    name: '量度世界',
    desc: '度量與時間',
    className: 'topic-measurement',
  },
  {
    key: 'shapes',
    icon: '🔷',
    name: '圖形迷宮',
    desc: '圖形與空間',
    className: 'topic-shapes',
  },
  {
    key: 'data',
    icon: '📊',
    name: '數據偵探',
    desc: '數據處理',
    className: 'topic-data',
  },
]

function BadgesSection({ userProfile }) {
  const stats = useMemo(() => ({
    totalStars: userProfile?.totalStars || 0,
    bestStreak: userProfile?.bestStreak || 0,
    loginStreak: userProfile?.loginStreak || 0,
    perfectRounds: userProfile?.perfectRounds || 0,
    timedBest: userProfile?.timedBest || 0,
    wrongCleared: userProfile?.wrongCleared || 0,
    progress: userProfile?.progress || {},
    masteredTables: userProfile?.masteredTables || [],
    monsterLevelsCompleted: userProfile?.monsterLevelsCompleted || 0,
    coloringCompleted: userProfile?.coloringCompleted || 0,
    multiplicationStreak: userProfile?.multiplicationStreak || 0,
    multiplicationBestTime: userProfile?.multiplicationBestTime || 999,
  }), [userProfile])

  const unlocked = useMemo(() =>
    achievementsData.filter((a) => a.condition(stats)),
    [stats]
  )

  const locked = useMemo(() =>
    achievementsData.filter((a) => !a.condition(stats)),
    [stats]
  )

  if (unlocked.length === 0 && locked.length === 0) return null

  return (
    <div className="home-badges-section">
      <h3 className="home-badges-title">🏅 我的徽章</h3>
      <div className="home-badges-grid">
        {unlocked.map((a) => (
          <div key={a.id} className="badge-item badge-unlocked">
            <span className="badge-icon">{a.icon}</span>
            <div className="badge-info">
              <div className="badge-name">{a.name}</div>
              <div className="badge-desc">{a.desc}</div>
            </div>
          </div>
        ))}
        {locked.map((a) => (
          <div key={a.id} className="badge-item badge-locked">
            <span className="badge-icon badge-icon-locked">{a.icon}</span>
            <div className="badge-info">
              <div className="badge-name badge-name-locked">{a.name}</div>
              <div className="badge-desc badge-desc-locked">{a.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function HomePage() {
  const { userProfile, logout } = useAuth()
  const { getTopicProgress } = useProgress()

  const nickname = userProfile?.nickname || '小朋友'
  const totalStars = userProfile?.totalStars || 0
  const level = userProfile?.level || '數學新手'

  return (
    <div className="home">
      {/* Header with logout */}
      <div className="home-top-bar">
        <span className="home-greeting">你好，{nickname}！👋</span>
        <button className="logout-btn" onClick={logout} title="登出">
          🚪
        </button>
      </div>

      {/* Stars + Rank */}
      <div className="stars-badge float">
        ⭐ {totalStars} 顆星星
      </div>
      <div className="stars-rank">
        {level}
      </div>

      <BadgesSection userProfile={userProfile} />

      {/* Topic Grid with Progress */}
      <div className="topics-grid">
        {TOPICS.map((topic) => {
          const count = questions.filter((q) => q.topic === topic.key).length
          const prog = getTopicProgress(topic.key)
          const pct = Math.min(100, Math.round((prog.completed / count) * 100))

          return (
            <Link
              key={topic.key}
              to={`/quiz/${topic.key}`}
              className={`topic-card ${topic.className}`}
            >
              <span className="topic-icon">{topic.icon}</span>
              <span className="topic-name">{topic.name}</span>
              <span className="topic-desc">{topic.desc} · {count}題</span>

              {/* Progress bar */}
              <div className="topic-progress-wrap">
                <div className="topic-progress-bg">
                  <div
                    className="topic-progress-fill"
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="topic-progress-label">
                  ⭐{prog.stars} · {prog.completed}/{count}
                </span>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Challenge Button */}
      <Link to="/challenge" className="challenge-btn" style={{ textDecoration: 'none' }}>
        😄 出題考爸爸/媽媽
      </Link>

      {/* Timed Challenge Button */}
      <Link
        to="/timed-challenge"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          width: '100%',
          padding: 18,
          marginTop: 12,
          fontSize: 18,
          fontWeight: 800,
          background: 'linear-gradient(135deg, var(--purple), var(--pink))',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius)',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-big)',
          textDecoration: 'none',
        }}
      >
        ⚡ 限時挑戰 (60秒)
      </Link>

      {/* Clock Playground Button */}
      <Link
        to="/clock"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          width: '100%',
          padding: 18,
          marginTop: 12,
          fontSize: 18,
          fontWeight: 800,
          background: 'linear-gradient(135deg, #7C3AED, #A855F7)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius)',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-big)',
          textDecoration: 'none',
        }}
      >
        🕐 時鐘樂園
      </Link>

      {/* Multiplication Playground Button */}
      <Link
        to="/multiplication"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 10,
          width: '100%',
          padding: 18,
          marginTop: 12,
          fontSize: 18,
          fontWeight: 800,
          background: 'linear-gradient(135deg, #FF8C42, #FF6B6B)',
          color: 'white',
          border: 'none',
          borderRadius: 'var(--radius)',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-big)',
          textDecoration: 'none',
        }}
      >
        🔢 乘法表樂園
      </Link>

      {/* Wrong Questions Link */}
      <Link
        to="/wrong-questions"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          width: '100%',
          padding: '14px',
          marginTop: 12,
          fontSize: 16,
          fontWeight: 700,
          color: 'var(--red)',
          background: 'var(--bg-card)',
          border: '2px solid var(--red)',
          borderRadius: 'var(--radius)',
          cursor: 'pointer',
          textDecoration: 'none',
          boxShadow: 'var(--shadow)',
        }}
      >
        ❌ 錯題複習
      </Link>

      {/* Parent Dashboard Link */}
      <Link
        to="/parent-dashboard"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          width: '100%',
          padding: '14px',
          marginTop: 12,
          fontSize: 16,
          fontWeight: 700,
          color: 'var(--text-light)',
          background: 'var(--bg-card)',
          border: '2px solid var(--text-light)',
          borderRadius: 'var(--radius)',
          cursor: 'pointer',
          textDecoration: 'none',
          boxShadow: 'var(--shadow)',
        }}
      >
        👨‍👩‍👧 家長
      </Link>
    </div>
  )
}
