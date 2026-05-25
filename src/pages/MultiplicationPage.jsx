import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'

const GAMES = [
  {
    icon: '🎵',
    name: '乘法表歌',
    desc: '跟住唱歌學乘法',
    route: '/multiplication/song',
    difficulty: 'easy',
    badge: '🌱',
    badgeLabel: '簡單',
  },
  {
    icon: '🍎',
    name: '消消樂配對',
    desc: '睇算式揀答案',
    route: '/multiplication/match',
    difficulty: 'easy',
    badge: '🌱',
    badgeLabel: '簡單',
  },
  {
    icon: '👾',
    name: '打怪獸模式',
    desc: '快手答題打怪獸',
    route: '/multiplication/monster',
    difficulty: 'hard',
    badge: '🔥',
    badgeLabel: '困難',
  },
  {
    icon: '🎨',
    name: '填色書',
    desc: '答啱就填色',
    route: '/multiplication/coloring',
    difficulty: 'medium',
    badge: '⚔️',
    badgeLabel: '中等',
  },
  {
    icon: '📅',
    name: '每日挑戰',
    desc: '日日挑戰10題',
    route: '/multiplication/daily',
    difficulty: 'medium',
    badge: '⚔️',
    badgeLabel: '中等',
  },
]

const DIFFICULTY_COLORS = {
  easy: { bg: 'linear-gradient(135deg, #6BCB77, #4CAF50)', shadow: '0 4px 15px rgba(76, 175, 80, 0.3)' },
  medium: { bg: 'linear-gradient(135deg, #FF8C42, #FF6B35)', shadow: '0 4px 15px rgba(255, 107, 53, 0.3)' },
  hard: { bg: 'linear-gradient(135deg, #FF6B6B, #E53935)', shadow: '0 4px 15px rgba(229, 57, 53, 0.3)' },
}

export default function MultiplicationPage() {
  const { userProfile } = useAuth()

  const masteredTables = userProfile?.masteredTables || []
  const totalMultStars = userProfile?.totalMultStars || 0
  const totalTables = 10

  return (
    <div className="mult-page">
      {/* Header */}
      <div className="mult-header">
        <Link to="/" className="mult-back-link">
          ← 返回主頁
        </Link>
      </div>

      {/* Title Section */}
      <div className="mult-title-section">
        <h1 className="mult-title">乘法表樂園 🔢</h1>
        <p className="mult-subtitle">
          邊玩邊學乘法表，超級好玩！
        </p>
      </div>

      {/* Progress Stats */}
      <div className="mult-stats">
        <div className="mult-stat-card">
          <span className="mult-stat-icon">📖</span>
          <div className="mult-stat-info">
            <span className="mult-stat-value">
              {masteredTables.length}/{totalTables}
            </span>
            <span className="mult-stat-label">已掌握乘法表</span>
          </div>
        </div>
        <div className="mult-stat-card">
          <span className="mult-stat-icon">⭐</span>
          <div className="mult-stat-info">
            <span className="mult-stat-value">{totalMultStars}</span>
            <span className="mult-stat-label">乘法星星</span>
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="mult-games-grid">
        {GAMES.map((game) => {
          const diffStyle = DIFFICULTY_COLORS[game.difficulty]
          return (
            <Link
              key={game.route}
              to={game.route}
              className="mult-game-card"
            >
              <span className="mult-game-icon">{game.icon}</span>
              <span className="mult-game-name">{game.name}</span>
              <span className="mult-game-desc">{game.desc}</span>
              <span
                className="mult-game-badge"
                style={{
                  background: diffStyle.bg,
                  boxShadow: diffStyle.shadow,
                }}
              >
                {game.badge} {game.badgeLabel}
              </span>
              <span className="mult-game-play">
                開始玩 →
              </span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
