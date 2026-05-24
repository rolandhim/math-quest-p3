import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import questions from '../data/questions.js'

const STORAGE_KEY = 'math_quest_p3'

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { name: '', stars: 0, totalCorrect: 0, totalQuiz: 0 }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
}

const RANKS = [
  { min: 0, name: '數學新手', emoji: '🌱' },
  { min: 10, name: '數學學徒', emoji: '🔰' },
  { min: 25, name: '數學勇士', emoji: '⚔️' },
  { min: 50, name: '數學高手', emoji: '🏆' },
  { min: 100, name: '數學冒險王', emoji: '👑' },
]

function getRank(stars) {
  let rank = RANKS[0]
  for (const r of RANKS) {
    if (stars >= r.min) rank = r
  }
  return rank
}

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

export default function HomePage() {
  const [progress, setProgress] = useState(loadProgress)
  const [name, setName] = useState(progress.name || '')
  const [saved, setSaved] = useState(!!progress.name)

  useEffect(() => {
    const p = loadProgress()
    setName(p.name || '')
    setSaved(!!p.name)
    setProgress(p)
  }, [])

  function handleSaveName() {
    const trimmed = name.trim()
    if (!trimmed) return
    const p = loadProgress()
    p.name = trimmed
    saveProgress(p)
    setProgress(p)
    setSaved(true)
  }

  function handleNameKeyDown(e) {
    if (e.key === 'Enter') handleSaveName()
  }

  const rank = getRank(progress.stars)

  return (
    <div className="home">
      <header className="home-header">
        <h1 className="home-title">數學冒險王國 🏰</h1>
        <p className="home-subtitle">小三數學練習 — 邊玩邊學！</p>
      </header>

      {!saved ? (
        <section className="name-section slide-up">
          <label className="name-label">✏️ 你的名字是？</label>
          <div className="name-input-wrap">
            <input
              className="name-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={handleNameKeyDown}
              placeholder="輸入名字..."
              maxLength={10}
            />
            <button className="name-btn" onClick={handleSaveName}>
              開始！
            </button>
          </div>
        </section>
      ) : (
        <>
          <div className="stars-badge float">
            ⭐ {progress.stars} 顆星星
          </div>
          <div className="stars-rank">
            {rank.emoji} {progress.name} · {rank.name}
          </div>

          <div className="topics-grid">
            {TOPICS.map((topic) => {
              const count = questions.filter((q) => q.topic === topic.key).length
              return (
                <Link
                  key={topic.key}
                  to={`/quiz/${topic.key}`}
                  className={`topic-card ${topic.className}`}
                >
                  <span className="topic-icon">{topic.icon}</span>
                  <span className="topic-name">{topic.name}</span>
                  <span className="topic-desc">{topic.desc} · {count}題</span>
                </Link>
              )
            })}
          </div>

          <Link to="/challenge" className="challenge-btn" style={{ textDecoration: 'none' }}>
            😄 出題考爸爸/媽媽
          </Link>
        </>
      )}
    </div>
  )
}
