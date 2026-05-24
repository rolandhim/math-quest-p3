const achievements = [
  {
    id: 'first_star',
    name: '初星勇士',
    desc: '獲得第一顆星',
    icon: '⭐',
    condition: (stats) => stats.totalStars >= 1,
  },
  {
    id: 'streak_5',
    name: '連勝達人',
    desc: '連續答對5題',
    icon: '🔥',
    condition: (stats) => stats.bestStreak >= 5,
  },
  {
    id: 'streak_10',
    name: '連勝大師',
    desc: '連續答對10題',
    icon: '🔥🔥',
    condition: (stats) => stats.bestStreak >= 10,
  },
  {
    id: 'perfect_10',
    name: '完美答題',
    desc: '10題全對',
    icon: '💯',
    condition: (stats) => stats.perfectRounds >= 1,
  },
  {
    id: 'perfect_3',
    name: '完美三連霸',
    desc: '3次10題全對',
    icon: '👑',
    condition: (stats) => stats.perfectRounds >= 3,
  },
  {
    id: 'daily_7',
    name: '每日勤練',
    desc: '連續登入7天',
    icon: '📅',
    condition: (stats) => stats.loginStreak >= 7,
  },
  {
    id: 'master_50',
    name: '數學高手',
    desc: '累積50星',
    icon: '🏆',
    condition: (stats) => stats.totalStars >= 50,
  },
  {
    id: 'master_100',
    name: '數學冒險王',
    desc: '累積100星',
    icon: '👑',
    condition: (stats) => stats.totalStars >= 100,
  },
  {
    id: 'speed_10',
    name: '閃電答題',
    desc: '限時挑戰答對10題',
    icon: '⚡',
    condition: (stats) => (stats.timedBest || 0) >= 10,
  },
  {
    id: 'speed_15',
    name: '極速傳說',
    desc: '限時挑戰答對15題',
    icon: '⚡⚡',
    condition: (stats) => (stats.timedBest || 0) >= 15,
  },
  {
    id: 'wrong_clear',
    name: '錯題清零',
    desc: '清空所有錯題',
    icon: '🧹',
    condition: (stats) => stats.wrongCleared >= 1,
  },
  {
    id: 'all_topics',
    name: '全面探索',
    desc: '四個主題各完成10題',
    icon: '🌍',
    condition: (stats) => {
      const p = stats.progress || {}
      return ['numbers', 'measurement', 'shapes', 'data'].every(
        (t) => (p[t]?.completed?.length || 0) >= 10
      )
    },
  },
]

export default achievements
