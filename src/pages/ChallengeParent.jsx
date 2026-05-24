import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import questions from '../data/questions.js'

const STORAGE_KEY = 'math_quest_p3'
const CHALLENGE_COUNT = 3

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw)
  } catch {}
  return { name: '', stars: 0 }
}

const letters = ['A', 'B', 'C', 'D']

export default function ChallengeParent() {
  const [progress] = useState(() => loadProgress())
  const [started, setStarted] = useState(false)
  const [challengeQs, setChallengeQs] = useState([])
  const [parentAnswers, setParentAnswers] = useState([])
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState(null)
  const [answered, setAnswered] = useState(false)
  const [finished, setFinished] = useState(false)
  const [parentCorrect, setParentCorrect] = useState(0)

  const childName = progress.name || '小朋友'

  function startChallenge() {
    // Pick random questions from all topics
    const shuffled = [...questions].sort(() => Math.random() - 0.5)
    const picked = shuffled.slice(0, CHALLENGE_COUNT)
    setChallengeQs(picked)
    setParentAnswers([])
    setCurrent(0)
    setSelected(null)
    setAnswered(false)
    setFinished(false)
    setParentCorrect(0)
    setStarted(true)
  }

  function handleSelect(option) {
    if (answered) return
    setSelected(option)
    setAnswered(true)
  }

  function handleNext() {
    const isCorrect = selected === challengeQs[current].answer
    const newCorrect = isCorrect ? parentCorrect + 1 : parentCorrect
    setParentCorrect(newCorrect)
    setParentAnswers((prev) => [...prev, isCorrect])

    if (current >= challengeQs.length - 1) {
      setFinished(true)
    } else {
      setCurrent((c) => c + 1)
      setSelected(null)
      setAnswered(false)
    }
  }

  const childWins = parentCorrect < challengeQs.length
  const parentWins = parentCorrect === challengeQs.length

  return (
    <div className="challenge-page">
      <div className="challenge-header">
        <h2>😄 挑戰爸爸/媽媽</h2>
        <p>
          <span className="challenge-child-name">{childName}</span> 出題！
        </p>
      </div>

      {!started && (
        <button className="challenge-start-btn" onClick={startChallenge}>
          🎯 開始出題！
        </button>
      )}

      {started && !finished && challengeQs.length > 0 && (
        <>
          {/* Progress */}
          <div className="quiz-header" style={{ marginBottom: 16 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--text-light)' }}>
              第 {current + 1} / {challengeQs.length} 題
            </span>
          </div>

          {/* Question */}
          <div className="question-card slide-up" key={current}>
            <div className="question-text">{challengeQs[current].question}</div>

            <div className="options-grid">
              {challengeQs[current].options.map((option, idx) => {
                let btnClass = 'option-btn'
                if (answered) {
                  if (option === challengeQs[current].answer) {
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

            {answered && (
              <div
                className={`feedback ${selected === challengeQs[current].answer ? 'correct' : 'wrong'} bounce-in`}
              >
                {selected === challengeQs[current].answer
                  ? '✅ 答對了！'
                  : `❌ 答錯了... 正確答案是：${challengeQs[current].answer}`}
              </div>
            )}
          </div>

          {answered && (
            <button className="next-btn pop" onClick={handleNext}>
              {current >= challengeQs.length - 1
                ? '📊 看成績！'
                : '下一題 →'}
            </button>
          )}
        </>
      )}

      {finished && (
        <div className="challenge-result slide-up">
          <h3>📊 成績出爐！</h3>
          <div className="challenge-result-score">
            {parentCorrect} / {challengeQs.length}
          </div>

          {parentWins ? (
            <>
              <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--green-dark)' }}>
                爸爸/媽媽好叻！🎉
              </p>
              <div className="challenge-result-msg lose">
                😄 {childName}，下次出啲更難嘅題目考佢哋啦！
              </div>
            </>
          ) : (
            <>
              <p style={{ fontSize: 16, fontWeight: 600, color: 'var(--orange)' }}>
                哈哈，爸爸/媽媽被考起啦！😄
              </p>
              <div className="challenge-result-msg win">
                🎉 {childName} 你比爸爸/媽媽叻！
              </div>
            </>
          )}

          <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <button className="retry-btn" onClick={startChallenge}>
              🔄 再出題
            </button>
            <Link to="/" className="home-btn">
              🏠 返回主頁
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
