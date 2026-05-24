import { useState, useEffect, useMemo, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import questions from '../data/questions.js'

const STORAGE_KEY = 'math_quest_p3'
const QUIZ_SIZE = 10
const BONUS_PERFECT = 3

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

// Shuffle and pick fixed size
function pickQuestions(topic, count = QUIZ_SIZE) {
  const pool = questions.filter((q) => q.topic === topic)
  if (pool.length === 0) return []
  const shuffled = [...pool].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}

const TOPIC_LABELS = {
  numbers: '🔢 數字王國',
  measurement: '📏 量度世界',
  shapes: '🔷 圖形迷宮',
  data: '📊 數據偵探',
}

export default function QuizPage() {
  const { topic } = useParams()
  const quiz = useMemo(() => pickQuestions(topic), [topic])

  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [finished, setFinished] = useState(false)
  const [earnedStars, setEarnedStars] = useState(0)
  const [totalStars, setTotalStars] = useState(0)
  const [progress, setProgress] = useState(() => loadProgress())

  const question = quiz[current]
  const isLast = current === quiz.length - 1

  function handleSelect(option) {
    if (answered) return
    setSelected(option)
    setAnswered(true)

    const correct = option === question.answer
    if (correct) {
      setScore((s) => s + 1)
    }
  }

  const handleNext = useCallback(() => {
    if (isLast) {
      // Calculate final results
      const totalCorrect = score + (selected === question.answer ? 1 : 0)
      // Wait - score already incremented on select for correct... let me fix
      // Actually score state was updated in handleSelect. So score already has
      // this question's result. But we need to recalculate.
      // Let's use a different approach - compute from stored state
      return
    }
    setCurrent((c) => c + 1)
    setSelected(null)
    setAnswered(false)
  }, [isLast, score, selected, question])

  // Finish quiz - separate effect triggered by isLast+answered+handleNext click
  function finishQuiz() {
    const finalScore = score  // score already includes current question if correct
    const starsEarned = finalScore + (finalScore === QUIZ_SIZE ? BONUS_PERFECT : 0)

    const p = loadProgress()
    p.stars += starsEarned
    p.totalCorrect += finalScore
    p.totalQuiz += quiz.length
    saveProgress(p)

    setEarnedStars(starsEarned)
    setTotalStars(p.stars)
    setFinished(true)
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
    const pct = Math.round((score / quiz.length) * 100)
    const isPerfect = score === quiz.length
    const isGreat = score >= 8
    const isGood = score >= 6

    let resultClass = 'ok'
    let resultEmoji = '😅'
    if (isPerfect) { resultClass = 'perfect'; resultEmoji = '🏆' }
    else if (isGreat) { resultClass = 'great'; resultEmoji = '👏' }
    else if (isGood) { resultClass = 'good'; resultEmoji = '👍' }

    return (
      <div className="quiz-page">
        <div className="quiz-result slide-up">
          <div className="result-title">
            {isPerfect ? '🎉 完美滿分！' : '📊 完成挑戰！'}
          </div>
          <div className={`result-score ${resultClass}`}>
            {score} / {quiz.length}
          </div>
          <div className="result-msg">{resultEmoji} {isPerfect ? '太厲害了！' : isGreat ? '做得好好！' : isGood ? '繼續努力！' : '下次會更好！'}</div>
          <div className="result-sub">{TOPIC_LABELS[topic] || topic}</div>
          <div className="result-star-earned bounce-in">
            ⭐ +{earnedStars} 星星 {isPerfect ? '（全對獎勵+3🌟）' : ''}
          </div>
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
        <span className="quiz-star-count">⭐ {totalStars || progress.stars}</span>
      </div>

      {/* Progress */}
      <div className="progress-wrap">
        <div className="progress-label">
          <span>{TOPIC_LABELS[topic]}</span>
          <span>第 {current + 1} / {quiz.length} 題</span>
        </div>
        <div className="progress-bar-bg">
          <div
            className={`progress-bar-fill ${topic}`}
            style={{ width: `${((current) / quiz.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="question-card slide-up" key={current}>
        <div className="question-number">第 {current + 1} 題</div>
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
              ? '✅ 答對了！+1⭐'
              : `❌ 答錯了... 正確答案是：${question.answer}`}
            {selected !== question.answer && (
              <span className="feedback-hint">💡 {question.hint}</span>
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
