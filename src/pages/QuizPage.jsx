import { useState, useMemo, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import questions from '../data/questions.js'
import { useOfflineProgress } from '../hooks/useOfflineProgress.js'
import { useAdaptiveDifficulty, getQuizComposition } from '../hooks/useAdaptiveDifficulty.js'
import { useAuth } from '../context/AuthContext.jsx'

function pickQuestionsByDifficulty(topic, difficulty) {
  const pool = questions.filter((q) => q.topic === topic)
  if (pool.length === 0) return []

  const comp = getQuizComposition(difficulty)
  const picked = []

  for (const [diff, count] of Object.entries(comp)) {
    const filtered = pool.filter((q) => q.difficulty === diff)
    const shuffled = [...filtered].sort(() => Math.random() - 0.5)
    picked.push(...shuffled.slice(0, count))
  }

  return picked.sort(() => Math.random() - 0.5)
}

const TOPIC_LABELS = {
  numbers: '🔢 數字王國',
  measurement: '📏 量度世界',
  shapes: '🔷 圖形迷宮',
  data: '📊 數據偵探',
}

export default function QuizPage() {
  const { topic } = useParams()
  const { userProfile } = useAuth()
  const { saveProgress, saveQuizResult, isOnline } = useOfflineProgress()
  const { difficulty, recordAnswer, getDifficultyLabel } = useAdaptiveDifficulty()

  const quiz = useMemo(() => pickQuestionsByDifficulty(topic, difficulty), [topic, difficulty])

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [earnedStars, setEarnedStars] = useState(0)
  const [syncing, setSyncing] = useState(false)
  const [diffMsg, setDiffMsg] = useState(null)

  // Reset when topic changes
  useEffect(() => {
    setCurrent(0)
    setSelected(null)
    setAnswered(false)
    setScore(0)
    setFinished(false)
    setEarnedStars(0)
    setDiffMsg(null)
  }, [topic])

  const question = quiz[current]
  const isLast = current === quiz.length - 1
  const totalStars = userProfile?.totalStars || 0
  const diffLabel = getDifficultyLabel()

  async function handleSelect(option) {
    if (answered) return
    setSelected(option)
    setAnswered(true)

    const correct = option === question.answer
    if (correct) {
      setScore((s) => s + 1)
    }

    // Record for adaptive difficulty
    const result = recordAnswer(correct)
    if (result.changed) {
      setDiffMsg(result.message)
      setTimeout(() => setDiffMsg(null), 3000)
    }

    // Save per-question progress to backend
    await saveProgress(topic, question.id, correct)
  }

  function handleNext() {
    setCurrent((c) => c + 1)
    setSelected(null)
    setAnswered(false)
  }

  async function finishQuiz() {
    const finalScore = score
    setSyncing(true)

    const result = await saveQuizResult(topic, finalScore, quiz.length)
    const stars = result?.starEarned || finalScore
    setEarnedStars(stars)
    setSyncing(false)
    setFinished(true)
  }

  // Star multiplier based on difficulty
  function getStarReward(difficulty) {
    const map = { easy: 1, medium: 2, hard: 3 }
    return map[difficulty] || 1
  }

  if (quiz.length === 0) {
    return (
      <div className="quiz-page" style={{ textAlign: 'center', paddingTop: 60 }}>
        <p style={{ fontSize: 18, marginBottom: 20 }}>❌ 找不到題目</p>
        <Link to="/" className="home-btn">返回主頁</Link>
      </div>
    )
  }

  if (finished) {
    const isPerfect = score === quiz.length
    const isGreat = score >= 8
    const isGood = score >= 6

    let resultEmoji = '😅'
    if (isPerfect) resultEmoji = '🏆'
    else if (isGreat) resultEmoji = '👏'
    else if (isGood) resultEmoji = '👍'

    const bonus = isPerfect ? 3 : 0

    return (
      <div className="quiz-page">
        <div className="quiz-result slide-up">
          <div className="result-title">
            {isPerfect ? '🎉 完美滿分！' : '📊 完成挑戰！'}
          </div>
          <div className="result-score perfect">
            {score} / {quiz.length}
          </div>
          <div className="result-msg">
            {resultEmoji} {syncing ? '⏳ 儲存中...' : (isPerfect ? '太厲害了！' : isGreat ? '做得好好！' : isGood ? '繼續努力！' : '下次會更好！')}
          </div>
          <div className="result-sub">{TOPIC_LABELS[topic] || topic}</div>
          {!syncing && (
            <div className="result-star-earned bounce-in">
              ⭐ +{earnedStars} 星星 {bonus > 0 ? '（全對獎勵+3🌟）' : ''}
            </div>
          )}
          <div className="result-buttons">
            <Link to={`/quiz/${topic}`} className="retry-btn" style={{ textDecoration: 'none' }}>
              🔄 再玩一次
            </Link>
            <Link to="/" className="home-btn">
              🏠 返回主頁
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-page">
      {/* Header */}
      <div className="quiz-header">
        <Link to="/" className="quiz-back-btn">← 離開</Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {!isOnline && <span style={{ fontSize: 12, color: 'var(--orange)' }}>📴</span>}
          <span className={`difficulty-badge difficulty-${difficulty}`}>
            {diffLabel.emoji} {diffLabel.label}
          </span>
          <span className="quiz-star-count">⭐ {totalStars}</span>
        </div>
      </div>

      {/* Difficulty change message */}
      {diffMsg && (
        <div style={{
          textAlign: 'center', padding: '8px 16px', marginBottom: 8,
          background: 'linear-gradient(135deg, var(--blue-light), var(--purple))',
          color: 'white', borderRadius: 10, fontWeight: 700, fontSize: 14,
          animation: 'bounce-in 0.4s ease-out',
        }}>
          {diffMsg}
        </div>
      )}

      {/* Progress */}
      <div className="progress-wrap">
        <div className="progress-label">
          <span>{TOPIC_LABELS[topic]}</span>
          <span>第 {current + 1} / {quiz.length} 題</span>
        </div>
        <div className="progress-bar-bg">
          <div
            className={`progress-bar-fill ${topic}`}
            style={{ width: `${(current / quiz.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="question-card slide-up" key={current}>
        <div className="question-number" style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>第 {current + 1} 題</span>
          <span className={`difficulty-badge difficulty-${question.difficulty}`}>
            {question.difficulty === 'easy' ? '🟢' : question.difficulty === 'medium' ? '🟡' : '🔴'}
            {' '}{question.difficulty === 'easy' ? '簡單' : question.difficulty === 'medium' ? '中等' : '困難'}
            {' '}+{getStarReward(question.difficulty)}⭐
          </span>
        </div>
        <div className="question-text">{question.question}</div>

        <div className="options-grid">
          {question.options.map((option, idx) => {
            const letters = ['A', 'B', 'C', 'D']
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
                disabled={answered}
              >
                <span className="option-letter">{letters[idx]}</span>
                <span className="option-text">{option}</span>
              </button>
            )
          })}
        </div>

        {/* Feedback */}
        {answered && (
          <div className={`feedback ${selected === question.answer ? 'correct' : 'wrong'} bounce-in`}>
            {selected === question.answer
              ? `✅ 答對了！+${getStarReward(question.difficulty)}⭐`
              : `❌ 答錯了... 正確答案是：${question.answer}`}
            {selected !== question.answer && (
              <>
                <span className="feedback-hint">💡 {question.hint}</span>
                {question.explanation && (
                  <span className="feedback-hint" style={{ marginTop: 4, fontSize: 13, color: 'var(--text-light)' }}>
                    📖 {question.explanation}
                  </span>
                )}
              </>
            )}
          </div>
        )}
      </div>

      {/* Next / Finish button */}
      {answered && (
        <button
          className="next-btn pop"
          onClick={isLast ? finishQuiz : handleNext}
        >
          {isLast ? '📊 看成績！' : '下一題 →'}
        </button>
      )}
    </div>
  )
}
