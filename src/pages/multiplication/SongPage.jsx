import { useState, useRef, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { doc, updateDoc, arrayUnion, increment } from 'firebase/firestore'
import { db } from '../../firebase/config.js'
import { useAuth } from '../../context/AuthContext.jsx'
import { TABLE_DATA } from '../../data/multiplicationData.js'

/* ── Generate song cards for a given table ── */
function buildCards(tableNum) {
  const info = TABLE_DATA[tableNum]
  if (!info) return []
  const cards = []
  for (let i = 0; i < info.song.length; i++) {
    const multiplicand = i + 1
    const fact = info.facts[i]
    cards.push({
      index: i,
      lyric: info.song[i],
      equation: `${tableNum} × ${multiplicand} = ${fact.product}`,
      emoji: info.emoji,
      rows: tableNum,
      cols: multiplicand,
    })
  }
  return cards
}

/* ── Known tables (1–10) ── */
const ALL_TABLES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* ════════════════════════════════════════════════════════════
   Emoji Grid Component
   ════════════════════════════════════════════════════════════ */
function EmojiGrid({ emoji, rows, cols }) {
  const grid = []
  for (let r = 0; r < rows; r++) {
    const row = []
    for (let c = 0; c < cols; c++) {
      row.push(emoji)
    }
    grid.push(row)
  }
  return (
    <div className="song-emoji-grid">
      {grid.map((row, ri) => (
        <div key={ri} className="song-emoji-row">
          {row.map((e, ci) => (
            <span key={ci} className="song-emoji-item">{e}</span>
          ))}
        </div>
      ))}
    </div>
  )
}

/* ════════════════════════════════════════════════════════════
   Song Card Component (slides in from bottom)
   ════════════════════════════════════════════════════════════ */
function SongCard({ card, visible }) {
  return (
    <div className={`song-card ${visible ? 'song-card-visible' : 'song-card-hidden'}`}>
      <div className="song-card-lyric">{card.lyric}</div>
      <div className="song-card-equation">{card.equation}</div>
      <EmojiGrid emoji={card.emoji} rows={card.rows} cols={card.cols} />
    </div>
  )
}

/* ════════════════════════════════════════════════════════════
   Main SongPage Component
   ════════════════════════════════════════════════════════════ */
export default function SongPage() {
  const { currentUser, userProfile, refreshProfile } = useAuth()
  const navigate = useNavigate()

  const [selectedTable, setSelectedTable] = useState(null)
  const [cards, setCards] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1500) // ms
  const [speechOn, setSpeechOn] = useState(true)
  const [completed, setCompleted] = useState(false)
  const [syncing, setSyncing] = useState(false)

  const timerRef = useRef(null)
  const speechRef = useRef(null)
  const cardRef = useRef(null)

  // Check which tables are mastered
  const masteredTables = userProfile?.masteredTables || []

  /* ── Select a multiplication table ── */
  const handleSelectTable = useCallback((tableNum) => {
    // Cancel any existing playback
    if (timerRef.current) clearTimeout(timerRef.current)
    if (speechRef.current) {
      window.speechSynthesis?.cancel()
    }
    setSelectedTable(tableNum)
    setCards(buildCards(tableNum))
    setCurrentIndex(0)
    setPlaying(true)
    setCompleted(false)
    setSyncing(false)
  }, [])

  /* ── Speak the current lyric ── */
  const speakLyric = useCallback((lyric) => {
    if (!speechOn) return
    if (!window.speechSynthesis) return
    // Cancel any ongoing speech
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(lyric)
    utterance.lang = 'zh-HK'
    utterance.rate = 0.9
    window.speechSynthesis.speak(utterance)
    speechRef.current = utterance
  }, [speechOn])

  /* ── Advance to next card ── */
  const advanceCard = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = prev + 1
      if (next >= cards.length) {
        setPlaying(false)
        setCompleted(true)
        return prev
      }
      return next
    })
  }, [cards.length])

  /* ── Auto-advance timer ── */
  useEffect(() => {
    if (!playing || cards.length === 0) {
      if (timerRef.current) clearTimeout(timerRef.current)
      return
    }

    timerRef.current = setTimeout(() => {
      advanceCard()
    }, speed)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [playing, currentIndex, speed, cards.length, advanceCard])

  /* ── Speak when card changes ── */
  useEffect(() => {
    if (cards.length > 0 && currentIndex < cards.length) {
      speakLyric(cards[currentIndex].lyric)
    }
  }, [currentIndex, cards, speakLyric])

  /* ── Cleanup on unmount ── */
  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (speechRef.current) window.speechSynthesis?.cancel()
    }
  }, [])

  /* ── Play / Pause toggle ── */
  const togglePlay = useCallback(() => {
    if (completed) {
      // Restart
      setCurrentIndex(0)
      setCompleted(false)
      setPlaying(true)
      return
    }
    setPlaying((prev) => !prev)
  }, [completed])

  /* ── Restart ── */
  const handleRestart = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (speechRef.current) window.speechSynthesis?.cancel()
    setCurrentIndex(0)
    setPlaying(true)
    setCompleted(false)
  }, [])

  /* ── Toggle speed ── */
  const toggleSpeed = useCallback(() => {
    setSpeed((prev) => (prev === 1500 ? 800 : 1500))
  }, [])

  /* ── Toggle speech ── */
  const toggleSpeech = useCallback(() => {
    setSpeechOn((prev) => {
      if (prev) {
        window.speechSynthesis?.cancel()
      }
      return !prev
    })
  }, [])

  /* ── Save progress to Firestore ── */
  const saveToFirestore = useCallback(async () => {
    if (!currentUser || !selectedTable || syncing) return
    setSyncing(true)
    try {
      const userRef = doc(db, 'users', currentUser.uid)
      await updateDoc(userRef, {
        masteredTables: arrayUnion(selectedTable),
        totalMultStars: increment(1),
        totalStars: increment(1),
      })
      await refreshProfile()
    } catch (err) {
      console.error('Failed to save song progress', err)
    }
    setSyncing(false)
  }, [currentUser, selectedTable, syncing, refreshProfile])

  /* ── When completed, award star ── */
  useEffect(() => {
    if (completed && selectedTable && !userProfile?.masteredTables?.includes(selectedTable)) {
      saveToFirestore()
    }
  }, [completed, selectedTable, userProfile, saveToFirestore])

  const currentCard = cards[currentIndex]
  const isFast = speed === 800

  // Determine the title for the table selector
  const stageTitle = (() => {
    if (selectedTable == null) return '🎵 乘法歌謠'
    return `🎵 ${selectedTable} 的乘法歌謠`
  })()

  /* ══════════════════════════════════════════════════
     Render
     ══════════════════════════════════════════════════ */
  return (
    <div className="song-page">
      {/* ── Header ── */}
      <div className="song-header">
        <button className="song-back-btn" onClick={() => navigate('/')}>
          ← 返回
        </button>
        <h2 className="song-title">{stageTitle}</h2>
      </div>

      {/* ── Table Selector ── */}
      <div className="song-table-selector">
        {ALL_TABLES.map((num) => {
          const info = TABLE_DATA[num]
          const mastered = masteredTables.includes(num)
          return (
            <button
              key={num}
              className={`song-table-btn ${selectedTable === num ? 'song-table-active' : ''} ${mastered ? 'song-table-mastered' : ''}`}
              style={{
                '--table-color': info?.color || '#ccc',
              }}
              onClick={() => handleSelectTable(num)}
              title={`${num} 的乘法表${mastered ? ' ✅ 已掌握' : ''}`}
            >
              <span className="song-table-emoji">{info?.emoji || '📚'}</span>
              <span className="song-table-num">{num}</span>
              {mastered && <span className="song-table-check">✅</span>}
            </button>
          )
        })}
      </div>

      {/* ── Song Display Area ── */}
      {selectedTable ? (
        <>
          <div className="song-display-area">
            {currentCard && !completed ? (
              <SongCard key={currentIndex} card={currentCard} visible={true} />
            ) : completed ? (
              <div className="song-completed">
                <div className="song-completed-icon">🎉</div>
                <div className="song-completed-text">
                  你識晒 {selectedTable} 的乘法表！
                </div>
                {!syncing && !masteredTables.includes(selectedTable) && (
                  <div className="song-completed-stars">
                    ⭐ +1 星星！
                  </div>
                )}
                {masteredTables.includes(selectedTable) && (
                  <div className="song-completed-mastered">
                    ✅ 已經掌握咗啦！
                  </div>
                )}
                <div className="song-completed-progress">
                  已掌握：{masteredTables.length} / 10 個乘法表
                </div>
                <button
                  className="song-replay-btn"
                  onClick={handleRestart}
                >
                  🔄 再聽一次
                </button>
                <button
                  className="song-home-btn"
                  onClick={() => navigate('/')}
                >
                  🏠 返回主頁
                </button>
              </div>
            ) : (
              <div className="song-empty">
                <div className="song-empty-icon">🎤</div>
                <div className="song-empty-text">揀一個乘法表開始學歌謠啦！</div>
              </div>
            )}
          </div>

          {/* ── Controls ── */}
          {!completed && currentCard && (
            <div className="song-controls">
              <button className="song-ctrl-btn" onClick={handleRestart} title="重新開始">
                ⏮️
              </button>
              <button className="song-ctrl-btn song-ctrl-play" onClick={togglePlay} title={playing ? '暫停' : '播放'}>
                {playing ? '⏸️' : completed ? '🔄' : '▶️'}
              </button>
              <button className="song-ctrl-btn" onClick={toggleSpeed} title={isFast ? '慢速' : '快速'}>
                {isFast ? '🐇' : '🐢'}
              </button>
              <button
                className={`song-ctrl-btn ${speechOn ? '' : 'song-ctrl-off'}`}
                onClick={toggleSpeech}
                title={speechOn ? '關閉語音' : '開啟語音'}
              >
                {speechOn ? '🔊' : '🔇'}
              </button>
            </div>
          )}

          {/* ── Progress dots ── */}
          {!completed && cards.length > 0 && (
            <div className="song-progress-dots">
              {cards.map((_, i) => (
                <span
                  key={i}
                  className={`song-dot ${i === currentIndex ? 'song-dot-active' : ''} ${i < currentIndex ? 'song-dot-done' : ''}`}
                />
              ))}
            </div>
          )}
        </>
      ) : (
        <div className="song-empty">
          <div className="song-empty-icon">🎤</div>
          <div className="song-empty-text">揀一個乘法表開始學歌謠啦！</div>
        </div>
      )}
    </div>
  )
}
