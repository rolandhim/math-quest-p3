import { useState, useRef, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { db } from '../firebase/config.js'
import { doc, updateDoc, increment } from 'firebase/firestore'
import { useAuth } from '../context/AuthContext.jsx'
import clockQuestions from '../data/clockQuestions.js'

/* ════════════════════════════════════════════════════════════
   Utility helpers
   ════════════════════════════════════════════════════════════ */

/** Convert (hour, minute, period) → 24h hour (0-23) */
function to24h(hour, minute, period) {
  let h = hour
  if (period === 'PM' && h !== 12) h += 12
  if (period === 'AM' && h === 12) h = 0
  return h
}

/** Normalise hour+minute to 0-23:59 */
function normaliseTime(totalMinutes) {
  let m = ((totalMinutes % 1440) + 1440) % 1440
  const h = Math.floor(m / 60)
  m = m % 60
  return { hour: h, minute: m }
}

/** Get period & display-hour from 24h hour */
function periodInfo(h24) {
  if (h24 === 0) return { period: 'AM', display: 12 }
  if (h24 < 12) return { period: 'AM', display: h24 }
  if (h24 === 12) return { period: 'PM', display: 12 }
  return { period: 'PM', display: h24 - 12 }
}

/** Sky colour based on 24h hour */
function skyColor(h24) {
  if (h24 >= 6 && h24 < 17) return 'linear-gradient(180deg, #87CEEB, #B0E0E6)'
  if (h24 >= 17 && h24 < 19) return 'linear-gradient(180deg, #FF7F50, #FFDAB9)'
  return 'linear-gradient(180deg, #1a1a4e, #2d2d6b)'
}

/** Cantonese time string */
function cantoneseTime(h24, minute) {
  const { period, display } = periodInfo(h24)
  const periodLabel = period === 'AM' ? '朝早' : '下晝'
  if (minute === 0) return `${periodLabel}${display}點正`
  if (minute === 15) return `${periodLabel}${display}點一個字`
  if (minute === 30) return `${periodLabel}${display}點半`
  if (minute === 45) return `${periodLabel}${display}點九個字`
  return `${periodLabel}${display}點${minute}分`
}

/** Elapsed time calculation with step-by-step */
function calcElapsed(startH, startM, endH, endM) {
  let borrowH = 0
  let resultM = endM - startM
  if (resultM < 0) {
    borrowH = 1
    resultM += 60
  }
  let resultH = endH - startH - borrowH
  if (resultH < 0) resultH += 24

  const steps = []
  if (borrowH) {
    steps.push(`分針唔夠減：${endM}分 < ${startM}分，要向時針借 1 小時`)
    steps.push(`借 1 小時 = 60 分，60 + ${endM} - ${startM} = ${resultM} 分`)
    steps.push(`時針（已借 1 小時）：${endH} - 1 - ${startH} = ${resultH} 小時`)
  } else if (resultH > 0 || resultM > 0) {
    steps.push(`分針：${endM} - ${startM} = ${resultM} 分`)
    if (resultH > 0) {
      steps.push(`時針：${endH} - ${startH} = ${resultH} 小時`)
    }
  } else {
    steps.push('開始時間同結束時間一樣，即係 0 小時 0 分')
  }
  steps.push(`總共：${resultH} 小時 ${resultM} 分`)

  return { hours: resultH, minutes: resultM, steps }
}

/* ════════════════════════════════════════════════════════════
   SVG Clock component (standalone drawing)
   ════════════════════════════════════════════════════════════ */

function AnalogClock({ hour, minute, onMinuteDrag, radius = 150 }) {
  const svgRef = useRef(null)
  const dragging = useRef(false)
  const cx = radius + 20
  const cy = radius + 20
  const size = (radius + 20) * 2

  const minuteAngle = minute * 6
  const hourAngle = ((hour % 12) + minute / 60) * 30

  const minRad = (minuteAngle - 90) * Math.PI / 180
  const hourRad = (hourAngle - 90) * Math.PI / 180

  const minX = cx + radius * 0.85 * Math.cos(minRad)
  const minY = cy + radius * 0.85 * Math.sin(minRad)
  const hourX = cx + radius * 0.55 * Math.cos(hourRad)
  const hourY = cy + radius * 0.55 * Math.sin(hourRad)

  const handlePointerDown = useCallback((e) => {
    dragging.current = true
    handlePointerMove(e)
  }, [])

  const handlePointerMove = useCallback((e) => {
    if (!dragging.current) return
    const svg = svgRef.current
    if (!svg) return
    const rect = svg.getBoundingClientRect()
    const pt = { x: 0, y: 0 }
    if (e.touches) {
      pt.x = e.touches[0].clientX - rect.left
      pt.y = e.touches[0].clientY - rect.top
    } else {
      pt.x = e.clientX - rect.left
      pt.y = e.clientY - rect.top
    }
    const dx = pt.x - cx * (size / (size)) // will fix scaling
    const dy = pt.y - cy

    // Get the actual scale of the SVG
    const svgWidth = rect.width
    const scale = svgWidth / size
    const scaledCx = cx * scale
    const scaledCy = cy * scale
    const scaledDx = pt.x - scaledCx
    const scaledDy = pt.y - scaledCy

    let rawAngle = Math.atan2(scaledDy, scaledDx) * 180 / Math.PI + 90
    if (rawAngle < 0) rawAngle += 360
    const newMinute = Math.round(rawAngle / 6) % 60
    if (onMinuteDrag) onMinuteDrag(newMinute)
  }, [cx, cy, size, onMinuteDrag])

  const handlePointerUp = useCallback(() => {
    dragging.current = false
  }, [])

  // Tick marks — every 5 min = hour tick
  const ticks = []
  for (let i = 0; i < 60; i++) {
    const angle = (i * 6 - 90) * Math.PI / 180
    const isHour = i % 5 === 0
    const outerR = radius - 4
    const innerR = isHour ? radius - 16 : radius - 10
    const x1 = cx + outerR * Math.cos(angle)
    const y1 = cy + outerR * Math.sin(angle)
    const x2 = cx + innerR * Math.cos(angle)
    const y2 = cy + innerR * Math.sin(angle)
    ticks.push(
      <line
        key={i}
        x1={x1} y1={y1} x2={x2} y2={y2}
        stroke={isHour ? '#2C3E50' : '#95A5A6'}
        strokeWidth={isHour ? 3 : 1.5}
        strokeLinecap="round"
      />
    )
  }

  // Hour numbers
  const numbers = []
  for (let i = 1; i <= 12; i++) {
    const angle = (i * 30 - 90) * Math.PI / 180
    const nr = radius - 28
    const nx = cx + nr * Math.cos(angle)
    const ny = cy + nr * Math.sin(angle)
    numbers.push(
      <text
        key={i}
        x={nx} y={ny}
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={radius > 100 ? 16 : 12}
        fontWeight="800"
        fill="#2C3E50"
        fontFamily="'Segoe UI', sans-serif"
      >
        {i}
      </text>
    )
  }

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      style={{ touchAction: 'none', display: 'block', margin: '0 auto' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      onTouchStart={handlePointerDown}
      onTouchMove={handlePointerMove}
      onTouchEnd={handlePointerUp}
    >
      {/* Clock face */}
      <circle cx={cx} cy={cy} r={radius} fill="white" stroke="#CBD5E0" strokeWidth={3} />
      <circle cx={cx} cy={cy} r={radius - 2} fill="none" stroke="#E2E8F0" strokeWidth={1} />

      {/* Center dot */}
      <circle cx={cx} cy={cy} r={6} fill="#2C3E50" />
      <circle cx={cx} cy={cy} r={3} fill="#718096" />

      {/* Tick marks */}
      {ticks}

      {/* Hour numbers */}
      {numbers}

      {/* Hour hand */}
      <line
        x1={cx} y1={cy} x2={hourX} y2={hourY}
        stroke="#E53E3E"
        strokeWidth={6}
        strokeLinecap="round"
      />

      {/* Minute hand */}
      <line
        x1={cx} y1={cy} x2={minX} y2={minY}
        stroke="#3182CE"
        strokeWidth={4}
        strokeLinecap="round"
      />

      {/* Drag hint circle at tip of minute hand */}
      <circle cx={minX} cy={minY} r={10} fill="rgba(49, 130, 206, 0.15)" cursor="grab" />
    </svg>
  )
}

/* ════════════════════════════════════════════════════════════
   24-hour timeline bar
   ════════════════════════════════════════════════════════════ */

function TimelineBar({ startH, startM, endH, endM }) {
  const startPct = ((startH * 60 + startM) / 1440) * 100
  const endPct = ((endH * 60 + endM) / 1440) * 100

  return (
    <div style={{ marginTop: 16 }}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        fontSize: 11, fontWeight: 700, color: 'var(--text-light)', marginBottom: 4
      }}>
        <span>00:00</span>
        <span>06:00</span>
        <span>12:00</span>
        <span>18:00</span>
        <span>24:00</span>
      </div>
      <div style={{
        position: 'relative', height: 20, background: '#E2E8F0',
        borderRadius: 999, overflow: 'hidden'
      }}>
        {/* Highlighted range */}
        <div style={{
          position: 'absolute', top: 0, height: '100%',
          left: `${Math.min(startPct, endPct)}%`,
          width: `${Math.abs(endPct - startPct)}%`,
          background: 'linear-gradient(90deg, var(--green), var(--blue))',
          borderRadius: 999,
          transition: 'left 0.3s, width 0.3s',
        }} />
        {/* Start marker */}
        <div style={{
          position: 'absolute', top: 0, left: `${startPct}%`,
          width: 4, height: '100%', background: 'var(--orange)',
          borderRadius: 2, transform: 'translateX(-2px)',
          transition: 'left 0.3s',
          zIndex: 2,
        }} />
        {/* End marker */}
        <div style={{
          position: 'absolute', top: 0, left: `${endPct}%`,
          width: 4, height: '100%', background: 'var(--blue)',
          borderRadius: 2, transform: 'translateX(-2px)',
          transition: 'left 0.3s',
          zIndex: 2,
        }} />
      </div>
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginTop: 4,
        fontSize: 10, fontWeight: 600, color: 'var(--text-light)'
      }}>
        <span style={{ color: 'var(--orange)' }}>🟠 開始 {String(startH).padStart(2,'0')}:{String(startM).padStart(2,'0')}</span>
        <span style={{ color: 'var(--blue)' }}>🔵 結束 {String(endH).padStart(2,'0')}:{String(endM).padStart(2,'0')}</span>
      </div>
    </div>
  )
}

/* ════════════════════════════════════════════════════════════
   Main ClockPage component
   ════════════════════════════════════════════════════════════ */

export default function ClockPage() {
  const { currentUser, userProfile, refreshProfile } = useAuth()

  // ── Tab state ──
  const [activeTab, setActiveTab] = useState('practice') // 'practice' | 'challenge'

  // ── Shared clock state ──
  const [totalMinutes, setTotalMinutes] = useState(9 * 60) // start at 09:00

  const { hour: clockHour, minute: clockMinute } = normaliseTime(totalMinutes)
  const { period, display: displayHour } = periodInfo(clockHour)

  // ── Elapsed time calculator state ──
  const [startHour, setStartHour] = useState(8)
  const [startMinute, setStartMinute] = useState(0)
  const [startPeriod, setStartPeriod] = useState('AM')
  const [startSet, setStartSet] = useState(false)
  const [calcResult, setCalcResult] = useState(null)

  const startH24 = to24h(startHour, startMinute, startPeriod)

  // Recalculate when clock moves or start changes
  useEffect(() => {
    if (startSet) {
      const result = calcElapsed(startH24, startMinute, clockHour, clockMinute)
      setCalcResult(result)
    }
  }, [startSet, startH24, startMinute, clockHour, clockMinute])

  // ── Challenge state ──
  const [level, setLevel] = useState(0)
  const [challengeStarted, setChallengeStarted] = useState(false)
  const [challengeFinished, setChallengeFinished] = useState(false)
  const [challengeStars, setChallengeStars] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [calcInputH, setCalcInputH] = useState('')
  const [calcInputM, setCalcInputM] = useState('')
  const [challengeAnswered, setChallengeAnswered] = useState(false)
  const [challengeCorrect, setChallengeCorrect] = useState(false)
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [syncing, setSyncing] = useState(false)

  const currentQuestion = clockQuestions[level] || null

  // ── Clock adjustment ──
  function adjustClock(deltaMin) {
    setTotalMinutes(prev => ((prev + deltaMin) % 1440 + 1440) % 1440)
  }

  function resetClock() {
    setTotalMinutes(12 * 60) // 12:00
  }

  function handleMinuteDrag(newMinute) {
    const currentHour = Math.floor(totalMinutes / 60)
    const currentMin = totalMinutes % 60
    const diff = newMinute - currentMin
    // Handle crossing 60 boundary
    let newTotal = totalMinutes + diff
    if (diff < -30) newTotal = totalMinutes + diff + 60
    if (diff > 30) newTotal = totalMinutes + diff - 60
    setTotalMinutes(((newTotal % 1440) + 1440) % 1440)
  }

  // ── Set start time ──
  function setStartFromClock() {
    setStartHour(displayHour)
    setStartMinute(clockMinute)
    setStartPeriod(period)
  }

  function confirmStartTime() {
    setStartSet(true)
  }

  function copyEndToStart() {
    setStartHour(displayHour)
    setStartMinute(clockMinute)
    setStartPeriod(period)
    setStartSet(true)
  }

  // ── Challenge handlers ──
  function startChallenge() {
    setLevel(0)
    setChallengeStarted(true)
    setChallengeFinished(false)
    setChallengeStars(0)
    setSelectedOption(null)
    setCalcInputH('')
    setCalcInputM('')
    setChallengeAnswered(false)
    setWrongAttempts(0)
    setShowExplanation(false)
  }

  function checkSetClock() {
    if (!currentQuestion) return
    const { targetTime } = currentQuestion
    const targetH24 = to24h(targetTime.hour, targetTime.minute, targetTime.period)
    const currentH24 = clockHour
    const diffH = Math.abs(currentH24 - targetH24)
    const diffM = Math.abs(clockMinute - targetTime.minute)
    const correct = diffH === 0 && diffM === 0

    if (correct) {
      setChallengeCorrect(true)
      setChallengeAnswered(true)
      setChallengeStars(prev => prev + (currentQuestion.stars || 2))
    } else {
      setWrongAttempts(prev => {
        const next = prev + 1
        if (next >= 2) setShowExplanation(true)
        return next
      })
      setChallengeCorrect(false)
      setChallengeAnswered(true)
    }
  }

  function selectOption(opt) {
    if (challengeAnswered) return
    setSelectedOption(opt)
    const correct = opt === currentQuestion.answer
    if (correct) {
      setChallengeCorrect(true)
      setChallengeAnswered(true)
      setChallengeStars(prev => prev + (currentQuestion.stars || 1))
    } else {
      setWrongAttempts(prev => {
        const next = prev + 1
        if (next >= 2) setShowExplanation(true)
        return next
      })
      setChallengeCorrect(false)
      setChallengeAnswered(true)
    }
  }

  function checkCalculate() {
    if (challengeAnswered || !currentQuestion) return
    const h = parseInt(calcInputH, 10)
    const m = parseInt(calcInputM, 10)
    if (isNaN(h) || isNaN(m)) return

    const ans = currentQuestion.answer
    const correct = h === ans.hours && m === ans.minutes
    if (correct) {
      setChallengeCorrect(true)
      setChallengeAnswered(true)
      setChallengeStars(prev => prev + (currentQuestion.stars || 3))
    } else {
      setWrongAttempts(prev => {
        const next = prev + 1
        if (next >= 2) setShowExplanation(true)
        return next
      })
      setChallengeCorrect(false)
      setChallengeAnswered(true)
    }
  }

  function nextLevel() {
    if (level >= 19) {
      finishChallenge()
      return
    }
    setLevel(prev => prev + 1)
    setSelectedOption(null)
    setCalcInputH('')
    setCalcInputM('')
    setChallengeAnswered(false)
    setWrongAttempts(0)
    setShowExplanation(false)
  }

  async function finishChallenge() {
    setChallengeFinished(true)
    setSyncing(true)

    // Bonus 5 stars for completing all 20
    const totalStarCount = challengeStars + 5

    try {
      if (currentUser) {
        const userRef = doc(db, 'users', currentUser.uid)
        await updateDoc(userRef, { totalStars: increment(totalStarCount) })
        await refreshProfile()
      }
    } catch (err) {
      console.error('Failed to sync stars', err)
    }

    setSyncing(false)
  }

  // ── Practice Tab ──
  const renderPractice = () => {
    const calcInfo = calcResult && startSet ? calcResult : null

    return (
      <div>
        {/* Sky background indicator */}
        <div style={{
          background: skyColor(clockHour),
          borderRadius: 'var(--radius)',
          padding: '20px 16px',
          marginBottom: 16,
          transition: 'background 0.5s ease',
        }}>
          <AnalogClock
            hour={clockHour}
            minute={clockMinute}
            onMinuteDrag={handleMinuteDrag}
            radius={140}
          />
        </div>

        {/* Digital time display */}
        <div style={{ textAlign: 'center', marginBottom: 16 }}>
          <div style={{
            fontSize: 36, fontWeight: 900, color: 'var(--text)',
            letterSpacing: 2,
          }}>
            {String(displayHour).padStart(2, '0')}:{String(clockMinute).padStart(2, '0')} {period}
          </div>
          <div style={{
            fontSize: 20, fontWeight: 700, color: 'var(--purple)',
            marginTop: 4,
          }}>
            {cantoneseTime(clockHour, clockMinute)}
          </div>
        </div>

        {/* Quick adjust buttons */}
        <div style={{
          display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 12,
          flexWrap: 'wrap',
        }}>
          {[
            { label: '−1hr', delta: -60 },
            { label: '−5min', delta: -5 },
            { label: '−1min', delta: -1 },
            { label: '+1min', delta: 1 },
            { label: '+5min', delta: 5 },
            { label: '+1hr', delta: 60 },
          ].map(btn => (
            <button
              key={btn.label}
              onClick={() => adjustClock(btn.delta)}
              style={{
                padding: '8px 14px', fontSize: 13, fontWeight: 700,
                background: 'var(--bg-card)', color: 'var(--text)',
                border: '2px solid var(--blue-light)', borderRadius: 8,
                cursor: 'pointer', transition: 'transform 0.1s',
              }}
              onPointerDown={e => e.currentTarget.style.transform = 'scale(0.93)'}
              onPointerUp={e => e.currentTarget.style.transform = 'scale(1)'}
              onPointerLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Reset */}
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <button
            onClick={resetClock}
            style={{
              padding: '10px 20px', fontSize: 14, fontWeight: 700,
              background: 'var(--bg-card)', color: 'var(--text-light)',
              border: '2px solid var(--text-light)', borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            🔄 重設到 12:00
          </button>
        </div>

        {/* ═══ Elapsed Time Calculator ═══ */}
        <div style={{
          background: 'var(--bg-card)', borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)', padding: 20, marginBottom: 20,
        }}>
          <h3 style={{
            fontSize: 18, fontWeight: 800, marginBottom: 16,
            color: 'var(--text)',
          }}>
            ⏱️ 時間計算機
          </h3>

          {/* Start time card */}
          <div style={{
            background: '#FFF8E1', borderRadius: 12, padding: 16, marginBottom: 12,
            border: '2px solid var(--yellow)',
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#8B6914', marginBottom: 8 }}>
              🟠 開始時間
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
              <select
                value={startHour}
                onChange={e => setStartHour(Number(e.target.value))}
                style={{
                  padding: '8px 10px', fontSize: 16, fontWeight: 700,
                  border: '2px solid var(--yellow)', borderRadius: 8,
                  background: 'white', minWidth: 70,
                }}
              >
                {Array.from({ length: 12 }, (_, i) => i + 1).map(h => (
                  <option key={h} value={h}>{String(h).padStart(2, '0')}</option>
                ))}
              </select>
              <span style={{ fontSize: 18, fontWeight: 800 }}>:</span>
              <select
                value={startMinute}
                onChange={e => setStartMinute(Number(e.target.value))}
                style={{
                  padding: '8px 10px', fontSize: 16, fontWeight: 700,
                  border: '2px solid var(--yellow)', borderRadius: 8,
                  background: 'white', minWidth: 70,
                }}
              >
                {Array.from({ length: 60 }, (_, i) => i).map(m => (
                  <option key={m} value={m}>{String(m).padStart(2, '0')}</option>
                ))}
              </select>
              <select
                value={startPeriod}
                onChange={e => setStartPeriod(e.target.value)}
                style={{
                  padding: '8px 10px', fontSize: 14, fontWeight: 700,
                  border: '2px solid var(--yellow)', borderRadius: 8,
                  background: 'white',
                }}
              >
                <option value="AM">上午</option>
                <option value="PM">下午</option>
              </select>
            </div>
            <button
              onClick={() => { setStartFromClock(); confirmStartTime() }}
              style={{
                marginTop: 10, padding: '8px 16px', fontSize: 13, fontWeight: 700,
                background: 'var(--yellow)', color: '#8B6914', border: 'none',
                borderRadius: 8, cursor: 'pointer',
              }}
            >
              📌 用而家時間做開始
            </button>
          </div>

          {/* End time card (auto from clock) */}
          <div style={{
            background: '#EBF8FF', borderRadius: 12, padding: 16, marginBottom: 12,
            border: '2px solid var(--blue-light)',
          }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 8 }}>
              🔵 結束時間（時鐘當前時間）
            </div>
            <div style={{
              fontSize: 22, fontWeight: 900, color: 'var(--blue-dark)',
            }}>
              {String(displayHour).padStart(2, '0')}:{String(clockMinute).padStart(2, '0')} {period}
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-light)', marginTop: 4 }}>
              {cantoneseTime(clockHour, clockMinute)}
            </div>
          </div>

          {/* Calculation result */}
          {calcInfo ? (
            <div className="bounce-in" style={{
              background: 'linear-gradient(135deg, #F0FFF4, #E6FFFA)',
              borderRadius: 12, padding: 16, border: '2px solid var(--green)',
              marginBottom: 12,
            }}>
              <div style={{
                fontSize: 20, fontWeight: 900, color: 'var(--green-dark)',
                marginBottom: 8,
              }}>
                ⏱️ 經過咗 {calcInfo.hours} 小時 {String(calcInfo.minutes).padStart(2, '0')} 分
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-light)', fontWeight: 600 }}>
                {calcInfo.steps.map((step, i) => (
                  <div key={i} style={{ padding: '2px 0' }}>
                    {i + 1}. {step}
                  </div>
                ))}
              </div>
            </div>
          ) : startSet ? (
            <div style={{
              background: '#F7FAFC', borderRadius: 12, padding: 16,
              textAlign: 'center', color: 'var(--text-light)', fontWeight: 600,
              marginBottom: 12,
            }}>
              ⏱️ 移動時鐘睇吓經過咗幾耐...
            </div>
          ) : (
            <div style={{
              background: '#F7FAFC', borderRadius: 12, padding: 16,
              textAlign: 'center', color: 'var(--text-light)', fontWeight: 600,
              marginBottom: 12,
            }}>
              設定開始時間後，移動時鐘就會自動計時
            </div>
          )}

          {/* 24-hour timeline */}
          {startSet && (
            <TimelineBar
              startH={startH24}
              startM={startMinute}
              endH={clockHour}
              endM={clockMinute}
            />
          )}

          {/* Copy end → start */}
          <button
            onClick={copyEndToStart}
            style={{
              width: '100%', marginTop: 12, padding: '12px',
              fontSize: 14, fontWeight: 700,
              background: 'var(--bg-card)', color: 'var(--blue)',
              border: '2px solid var(--blue-light)', borderRadius: 8,
              cursor: 'pointer',
            }}
          >
            📌 設為新起點（結束→開始）
          </button>
        </div>
      </div>
    )
  }

  // ── Challenge Tab ──
  const renderChallenge = () => {
    // Not started
    if (!challengeStarted) {
      return (
        <div style={{ textAlign: 'center', paddingTop: 40 }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🏆</div>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 8 }}>
            時間闖關大挑戰
          </h2>
          <p style={{
            fontSize: 16, color: 'var(--text-light)', fontWeight: 600,
            marginBottom: 24, lineHeight: 1.6,
          }}>
            一共 20 關！三種題型：<br />
            🕐 撥指針 · 📖 讀時間 · 🧮 計時間
          </p>
          <button
            onClick={startChallenge}
            style={{
              padding: '16px 40px', fontSize: 20, fontWeight: 800,
              background: 'linear-gradient(135deg, var(--orange), var(--red))',
              color: 'white', border: 'none', borderRadius: 16,
              cursor: 'pointer', boxShadow: 'var(--shadow-big)',
            }}
          >
            🚀 開始挑戰！
          </button>
        </div>
      )
    }

    // Finished
    if (challengeFinished) {
      return (
        <div style={{ textAlign: 'center', paddingTop: 20 }}>
          <div className="bounce-in" style={{
            background: 'var(--bg-card)', borderRadius: 'var(--radius)',
            boxShadow: 'var(--shadow-big)', padding: '40px 20px',
          }}>
            <div style={{ fontSize: 64, marginBottom: 12 }}>🎉</div>
            <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 8 }}>
              時鐘達人！
            </h2>
            <p style={{ fontSize: 16, color: 'var(--text-light)', marginBottom: 16 }}>
              你通過晒全部 20 關！
            </p>
            <div style={{
              fontSize: 32, fontWeight: 900, color: '#8B6914',
              background: 'var(--yellow-light)',
              display: 'inline-block', padding: '12px 28px',
              borderRadius: 999, marginBottom: 12,
            }}>
              ⭐ +{challengeStars} 星星
            </div>
            <div style={{
              fontSize: 18, fontWeight: 700, color: 'var(--green-dark)',
              marginBottom: 24,
            }}>
              🎁 達人獎勵：+5 ⭐
            </div>
            {syncing && (
              <div style={{ fontSize: 14, color: 'var(--text-light)', marginBottom: 16 }}>
                ⏳ 儲存進度...
              </div>
            )}
            <Link
              to="/"
              className="home-btn"
              style={{ display: 'inline-block', marginTop: 8 }}
            >
              🏠 返回主頁
            </Link>
          </div>
        </div>
      )
    }

    // In progress
    const q = currentQuestion
    if (!q) return null

    const progressPct = (level / 20) * 100

    return (
      <div>
        {/* Progress bar */}
        <div style={{
          background: 'var(--bg-card)', borderRadius: 'var(--radius)',
          padding: 16, marginBottom: 16, boxShadow: 'var(--shadow)',
        }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            fontSize: 14, fontWeight: 700, color: 'var(--text-light)',
            marginBottom: 6,
          }}>
            <span>🏆 時間闖關</span>
            <span>第 {level + 1} / 20 關</span>
          </div>
          <div style={{
            height: 10, background: '#E2E8F0', borderRadius: 999,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%', width: `${progressPct}%`,
              background: 'linear-gradient(90deg, var(--orange), var(--red))',
              borderRadius: 999, transition: 'width 0.4s ease',
            }} />
          </div>
        </div>

        {/* Question card */}
        <div className="slide-up" key={level} style={{
          background: 'var(--bg-card)', borderRadius: 'var(--radius)',
          boxShadow: 'var(--shadow)', padding: 24, marginBottom: 16,
        }}>
          {/* Difficulty badge */}
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'center', marginBottom: 12,
          }}>
            <span style={{
              fontSize: 13, fontWeight: 700, color: 'var(--text-light)',
            }}>
              第 {level + 1} 關
            </span>
            <span style={{
              fontSize: 12, fontWeight: 700, padding: '4px 10px',
              borderRadius: 999,
              background: q.difficulty === 'easy' ? '#F0FFF4' :
                          q.difficulty === 'medium' ? '#FFF8E1' : '#FFEBEE',
              color: q.difficulty === 'easy' ? 'var(--green-dark)' :
                     q.difficulty === 'medium' ? '#8B6914' : '#C62828',
            }}>
              {q.difficulty === 'easy' ? '🟢 簡單' :
               q.difficulty === 'medium' ? '🟡 中等' : '🔴 困難'} +{q.stars}⭐
            </span>
          </div>

          {/* Question text */}
          <div style={{
            fontSize: 20, fontWeight: 700, lineHeight: 1.5,
            marginBottom: 20,
          }}>
            {q.question}
          </div>

          {/* ── set-clock type ── */}
          {q.type === 'set-clock' && (
            <div>
              <div style={{
                background: skyColor(clockHour),
                borderRadius: 12, padding: 12, marginBottom: 16,
              }}>
                <AnalogClock
                  hour={clockHour}
                  minute={clockMinute}
                  onMinuteDrag={handleMinuteDrag}
                  radius={120}
                />
              </div>
              <div style={{ textAlign: 'center', marginBottom: 12 }}>
                <span style={{
                  fontSize: 24, fontWeight: 900, color: 'var(--text)',
                }}>
                  {String(displayHour).padStart(2, '0')}:{String(clockMinute).padStart(2, '0')} {period}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 16, flexWrap: 'wrap' }}>
                {[
                  { label: '−15m', delta: -15 },
                  { label: '−5m', delta: -5 },
                  { label: '−1m', delta: -1 },
                  { label: '+1m', delta: 1 },
                  { label: '+5m', delta: 5 },
                  { label: '+15m', delta: 15 },
                ].map(btn => (
                  <button
                    key={btn.label}
                    onClick={() => adjustClock(btn.delta)}
                    disabled={challengeAnswered}
                    style={{
                      padding: '6px 12px', fontSize: 12, fontWeight: 700,
                      background: 'var(--bg)', color: 'var(--text)',
                      border: '2px solid var(--blue-light)', borderRadius: 6,
                      cursor: challengeAnswered ? 'default' : 'pointer',
                      opacity: challengeAnswered ? 0.5 : 1,
                    }}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              {!challengeAnswered && (
                <button
                  onClick={checkSetClock}
                  style={{
                    width: '100%', padding: 14, fontSize: 16, fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                    color: 'white', border: 'none', borderRadius: 10,
                    cursor: 'pointer',
                  }}
                >
                  ✅ 檢查答案
                </button>
              )}
            </div>
          )}

          {/* ── read-clock type ── */}
          {q.type === 'read-clock' && (
            <div>
              <div style={{
                background: 'linear-gradient(180deg, #87CEEB, #B0E0E6)',
                borderRadius: 12, padding: 12, marginBottom: 16,
              }}>
                <AnalogClock
                  hour={q.displayTime.hour}
                  minute={q.displayTime.minute}
                  radius={120}
                />
              </div>
              <div style={{
                display: 'grid', gap: 10,
              }}>
                {q.options.map((opt, idx) => {
                  const letters = ['A', 'B', 'C', 'D']
                  let btnStyle = {
                    display: 'flex', alignItems: 'center', gap: 12,
                    width: '100%', padding: '14px 16px',
                    fontSize: 17, fontWeight: 600,
                    background: 'var(--bg)', color: 'var(--text)',
                    border: '3px solid transparent',
                    borderRadius: 10,
                    cursor: challengeAnswered ? 'default' : 'pointer',
                    textAlign: 'left', transition: 'all 0.2s',
                  }

                  if (challengeAnswered) {
                    if (opt === q.answer) {
                      btnStyle = { ...btnStyle, background: '#E8F5E9', borderColor: 'var(--green)' }
                    } else if (opt === selectedOption) {
                      btnStyle = { ...btnStyle, background: '#FFEBEE', borderColor: 'var(--red)' }
                    }
                  }

                  return (
                    <button
                      key={idx}
                      style={btnStyle}
                      onClick={() => selectOption(opt)}
                      disabled={challengeAnswered}
                    >
                      <span style={{
                        width: 32, height: 32, display: 'flex',
                        alignItems: 'center', justifyContent: 'center',
                        borderRadius: '50%', fontSize: 14, fontWeight: 800,
                        background: challengeAnswered && opt === q.answer ? 'var(--green)' :
                                     challengeAnswered && opt === selectedOption ? 'var(--red)' :
                                     'var(--blue-light)',
                        color: 'white', flexShrink: 0,
                      }}>
                        {letters[idx]}
                      </span>
                      <span style={{ flex: 1 }}>{opt}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* ── calculate type ── */}
          {q.type === 'calculate' && (
            <div>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 12, marginBottom: 16,
              }}>
                <div style={{
                  background: '#FFF8E1', borderRadius: 10, padding: '12px 16px',
                  textAlign: 'center', border: '2px solid var(--yellow)',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: '#8B6914', marginBottom: 4 }}>
                    開始
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--text)' }}>
                    {String(q.startTime.hour).padStart(2,'0')}:{String(q.startTime.minute).padStart(2,'0')}
                  </div>
                </div>
                <span style={{ fontSize: 24, color: 'var(--text-light)' }}>→</span>
                <div style={{
                  background: '#EBF8FF', borderRadius: 10, padding: '12px 16px',
                  textAlign: 'center', border: '2px solid var(--blue-light)',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 4 }}>
                    結束
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 900, color: 'var(--text)' }}>
                    {String(q.endTime.hour).padStart(2,'0')}:{String(q.endTime.minute).padStart(2,'0')}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: 8, marginBottom: 16,
              }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-light)' }}>
                  =
                </span>
                <input
                  type="number"
                  min="0"
                  max="23"
                  placeholder="時"
                  value={calcInputH}
                  onChange={e => setCalcInputH(e.target.value)}
                  disabled={challengeAnswered}
                  style={{
                    width: 70, padding: '12px 8px', fontSize: 20, fontWeight: 800,
                    border: '3px solid var(--blue-light)', borderRadius: 10,
                    textAlign: 'center', outline: 'none',
                  }}
                />
                <span style={{ fontSize: 18, fontWeight: 800 }}>小時</span>
                <input
                  type="number"
                  min="0"
                  max="59"
                  placeholder="分"
                  value={calcInputM}
                  onChange={e => setCalcInputM(e.target.value)}
                  disabled={challengeAnswered}
                  style={{
                    width: 70, padding: '12px 8px', fontSize: 20, fontWeight: 800,
                    border: '3px solid var(--blue-light)', borderRadius: 10,
                    textAlign: 'center', outline: 'none',
                  }}
                />
                <span style={{ fontSize: 18, fontWeight: 800 }}>分</span>
              </div>

              {!challengeAnswered && (
                <button
                  onClick={checkCalculate}
                  style={{
                    width: '100%', padding: 14, fontSize: 16, fontWeight: 800,
                    background: 'linear-gradient(135deg, var(--green), var(--green-light))',
                    color: 'white', border: 'none', borderRadius: 10,
                    cursor: 'pointer',
                  }}
                >
                  ✅ 確認答案
                </button>
              )}
            </div>
          )}

          {/* Feedback */}
          {challengeAnswered && (
            <div className="bounce-in" style={{
              marginTop: 16, padding: 16, borderRadius: 10,
              textAlign: 'center', fontWeight: 700, fontSize: 16,
              background: challengeCorrect ? '#E8F5E9' : '#FFEBEE',
              border: `2px solid ${challengeCorrect ? 'var(--green)' : 'var(--red)'}`,
              color: challengeCorrect ? 'var(--green-dark)' : '#C62828',
            }}>
              {challengeCorrect ? (
                <div>
                  ✅ 答對了！+{q.stars}⭐
                </div>
              ) : (
                <div>
                  ❌ 答錯了...
                  {wrongAttempts < 2 && (
                    <div style={{ fontSize: 14, marginTop: 8, color: 'var(--orange)' }}>
                      💡 {q.hint}
                    </div>
                  )}
                </div>
              )}

              {/* Show explanation after 2 wrong attempts */}
              {showExplanation && !challengeCorrect && (
                <div style={{ marginTop: 12, fontSize: 14, color: 'var(--text)', textAlign: 'left' }}>
                  <div style={{ fontWeight: 800, color: 'var(--blue)', marginBottom: 6 }}>
                    📖 正確答案：
                  </div>
                  {q.explanationSteps.map((step, i) => (
                    <div key={i} style={{ padding: '2px 0', fontWeight: 600 }}>
                      {step}
                    </div>
                  ))}
                </div>
              )}

              {/* Show calculation steps for calculate type */}
              {challengeCorrect && q.type === 'calculate' && q.explanationSteps && (
                <div style={{ marginTop: 12, fontSize: 13, color: 'var(--text)', textAlign: 'left' }}>
                  <div style={{ fontWeight: 700, color: 'var(--blue-dark)', marginBottom: 4 }}>
                    📖 解題步驟：
                  </div>
                  {q.explanationSteps.map((step, i) => (
                    <div key={i} style={{ padding: '2px 0', fontWeight: 600 }}>
                      {step}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Next level button */}
        {challengeAnswered && (
          <button
            className="pop"
            onClick={nextLevel}
            style={{
              width: '100%', padding: 16, fontSize: 18, fontWeight: 800,
              background: level >= 19
                ? 'linear-gradient(135deg, var(--yellow), var(--orange))'
                : 'var(--blue)',
              color: 'white', border: 'none', borderRadius: 10,
              cursor: 'pointer',
            }}
          >
            {level >= 19 ? '🏆 睇結果！' : '下一關 →'}
          </button>
        )}
      </div>
    )
  }

  // ── Main page layout ──
  return (
    <div className="quiz-page">
      {/* Header */}
      <div className="quiz-header">
        <Link to="/" className="quiz-back-btn">← 離開</Link>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          fontSize: 14, fontWeight: 700, color: 'var(--text-light)',
        }}>
          ⭐ {userProfile?.totalStars || 0}
        </div>
      </div>

      <h2 style={{
        fontSize: 22, fontWeight: 900, textAlign: 'center', marginBottom: 20,
        color: 'var(--text)',
      }}>
        🕐 時鐘樂園
      </h2>

      {/* Tab bar */}
      <div style={{
        display: 'flex', gap: 0, marginBottom: 20,
        background: 'var(--bg-card)', borderRadius: 'var(--radius)',
        overflow: 'hidden', boxShadow: 'var(--shadow)',
      }}>
        <button
          onClick={() => setActiveTab('practice')}
          style={{
            flex: 1, padding: 14, fontSize: 15, fontWeight: 800,
            border: 'none', cursor: 'pointer',
            background: activeTab === 'practice'
              ? 'linear-gradient(135deg, var(--blue), var(--purple))'
              : 'transparent',
            color: activeTab === 'practice' ? 'white' : 'var(--text-light)',
            transition: 'all 0.2s',
          }}
        >
          🎯 時鐘練習
        </button>
        <button
          onClick={() => setActiveTab('challenge')}
          style={{
            flex: 1, padding: 14, fontSize: 15, fontWeight: 800,
            border: 'none', cursor: 'pointer',
            background: activeTab === 'challenge'
              ? 'linear-gradient(135deg, var(--orange), var(--red))'
              : 'transparent',
            color: activeTab === 'challenge' ? 'white' : 'var(--text-light)',
            transition: 'all 0.2s',
          }}
        >
          🏆 時間闖關
        </button>
      </div>

      {/* Tab content */}
      {activeTab === 'practice' ? renderPractice() : renderChallenge()}
    </div>
  )
}
