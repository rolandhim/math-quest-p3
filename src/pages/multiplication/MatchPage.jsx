import React, { useState, useCallback, useEffect, useRef } from 'react';
import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../firebase/config.js';

/* ─── Configuration ─────────────────────────────────────── */
const TOTAL_QUESTIONS = 9;

const EMOJI_MAP = {
  1: '🍎', 2: '🍊', 3: '🍋', 4: '🍇', 5: '🍓',
  6: '🍒', 7: '🥝', 8: '🍑', 9: '🍌', 10: '🍉',
  11: '🍍', 12: '🥭',
};

const DISTRACTOR_STEPS = [2, 4, 6, 8];

const TABLE_LABELS = {
  1: '1', 2: '2', 3: '3', 4: '4', 5: '5',
  6: '6', 7: '7', 8: '8', 9: '9', 10: '10',
  11: '11', 12: '12',
};

/* ─── Sound helper ──────────────────────────────────────── */
function playSound(name) {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (name === 'correct') {
      osc.frequency.setValueAtTime(523, ctx.currentTime);       // C5
      osc.frequency.setValueAtTime(659, ctx.currentTime + 0.1); // E5
      osc.frequency.setValueAtTime(784, ctx.currentTime + 0.2); // G5
      gain.gain.setValueAtTime(0.25, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.4);
    } else if (name === 'wrong') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(180, ctx.currentTime);
      osc.frequency.setValueAtTime(140, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.3);
    } else if (name === 'finish') {
      const notes = [523, 659, 784, 1047];
      notes.forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        o.frequency.setValueAtTime(freq, ctx.currentTime + i * 0.15);
        g.gain.setValueAtTime(0.25, ctx.currentTime + i * 0.15);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.15 + 0.3);
        o.start(ctx.currentTime + i * 0.15);
        o.stop(ctx.currentTime + i * 0.15 + 0.3);
      });
    } else if (name === 'click') {
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);
      osc.start(ctx.currentTime);
      osc.stop(ctx.currentTime + 0.05);
    }
  } catch {
    /* audio not available */
  }
}

/* ─── Helpers ───────────────────────────────────────────── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateQuestions(selectedTables) {
  const questions = [];
  for (let t = 0; t < TOTAL_QUESTIONS; t++) {
    const table = selectedTables[t % selectedTables.length];
    const multiplier = Math.floor(Math.random() * 9) + 2; // 2–10
    questions.push({ a: table, b: multiplier, answer: table * multiplier });
  }
  return questions;
}

function generateOptions(correct) {
  const options = new Set([correct]);
  const signs = [1, -1, 1, -1, 1];
  const steps = DISTRACTOR_STEPS;

  // Pick 5 distinct distractors
  const shuffledSteps = shuffle(steps);
  for (let i = 0; i < shuffledSteps.length; i++) {
    if (options.size >= 6) break;
    const step = shuffledSteps[i];
    const sign = signs[i % signs.length];
    const distractor = correct + sign * step;
    if (distractor >= 2 && distractor <= correct * 2 && distractor !== correct) {
      options.add(distractor);
    }
  }

  // Fallback: fill with ±1, ±2, ±3 if we still don't have 6
  for (let i = 1; options.size < 6; i++) {
    if (correct + i >= 2) options.add(correct + i);
    if (options.size >= 6) break;
    if (correct - i >= 2) options.add(correct - i);
  }

  return shuffle([...options]);
}

function getStarRating(correctCount) {
  if (correctCount >= 9) return 5;
  if (correctCount >= 7) return 3;
  if (correctCount >= 5) return 2;
  return 1;
}

/* ─── Styles ────────────────────────────────────────────── */
const styles = {
  container: {
    maxWidth: 700,
    margin: '0 auto',
    padding: '24px 16px',
    fontFamily: '"Segoe UI", "Noto Sans TC", system-ui, sans-serif',
    color: '#1a1a2e',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  title: {
    fontSize: 28,
    fontWeight: 800,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  selectorContainer: {
    background: '#fff',
    borderRadius: 16,
    padding: 24,
    boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
    marginBottom: 24,
  },
  selectorLabel: {
    fontSize: 18,
    fontWeight: 700,
    marginBottom: 16,
    display: 'block',
  },
  checkboxGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: 8,
    marginBottom: 20,
  },
  checkboxItem: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 15,
    cursor: 'pointer',
  },
  startBtn: {
    display: 'block',
    width: '100%',
    padding: '14px 0',
    fontSize: 20,
    fontWeight: 700,
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    transition: 'opacity 0.2s',
  },
  startBtnDisabled: {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
  progressBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 20,
    fontSize: 16,
    fontWeight: 600,
  },
  starCount: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 18,
    marginLeft: 16,
  },
  equationArea: {
    textAlign: 'center',
    marginBottom: 16,
  },
  equationText: {
    fontSize: 42,
    fontWeight: 800,
    letterSpacing: 2,
    marginBottom: 8,
  },
  equationQuestion: {
    color: '#667eea',
  },
  emojiVisual: {
    fontSize: 20,
    lineHeight: 1.4,
    marginBottom: 20,
    padding: '12px 0',
  },
  cardsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
    maxWidth: 480,
    margin: '0 auto',
  },
  card: {
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
    fontWeight: 700,
    borderRadius: 12,
    cursor: 'pointer',
    border: '2.5px solid #e0e0e0',
    background: '#fff',
    transition: 'transform 0.15s, box-shadow 0.15s, border-color 0.15s',
    userSelect: 'none',
    position: 'relative',
  },
  cardDefault: {
    color: '#1a1a2e',
  },
  cardCorrect: {
    borderColor: '#4caf50',
    background: '#e8f5e9',
    color: '#2e7d32',
    transform: 'scale(1.1)',
  },
  cardWrong: {
    borderColor: '#f44336',
    background: '#ffebee',
    color: '#c62828',
    animation: 'shake 0.4s',
  },
  cardHidden: {
    visibility: 'hidden',
    pointerEvents: 'none',
  },
  cardHighlight: {
    borderColor: '#ff9800',
    background: '#fff8e1',
    color: '#e65100',
    boxShadow: '0 0 0 3px rgba(255,152,0,0.4)',
  },
  feedback: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 700,
    marginTop: 16,
    minHeight: 28,
  },
  feedbackCorrect: {
    color: '#2e7d32',
  },
  feedbackWrong: {
    color: '#c62828',
  },
  resultOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  resultCard: {
    background: '#fff',
    borderRadius: 24,
    padding: '32px 24px',
    textAlign: 'center',
    maxWidth: 360,
    width: '90%',
    boxShadow: '0 8px 40px rgba(0,0,0,0.2)',
  },
  resultTitle: {
    fontSize: 26,
    fontWeight: 800,
    marginBottom: 12,
  },
  resultStars: {
    fontSize: 48,
    marginBottom: 12,
  },
  resultScore: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  resultBtn: {
    display: 'inline-block',
    padding: '12px 32px',
    fontSize: 18,
    fontWeight: 700,
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    margin: '0 6px',
  },
  resultBtnSecondary: {
    background: '#e0e0e0',
    color: '#333',
  },
};

/* ─── Star Fly-out Component ───────────────────────────── */
function StarFlyout({ keyId }) {
  return (
    <div
      key={keyId}
      style={{
        position: 'fixed',
        top: '40%',
        left: '50%',
        fontSize: 48,
        pointerEvents: 'none',
        zIndex: 999,
        animation: 'starFly 0.8s ease-out forwards',
      }}
    >
      ⭐
    </div>
  );
}

/* ─── MatchPage Component ───────────────────────────────── */
export default function MatchPage() {
  /* Table selection state */
  const [selectedTables, setSelectedTables] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  /* Game state */
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [options, setOptions] = useState([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [starsEarned, setStarsEarned] = useState(0);
  const [cardStates, setCardStates] = useState({});     // { optionValue: 'default'|'correct'|'wrong'|'hidden'|'highlight' }
  const [feedback, setFeedback] = useState({ text: '', type: '' });
  const [attempts, setAttempts] = useState(0);           // per question
  const [showResult, setShowResult] = useState(false);
  const [highScore, setHighScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [starFlyouts, setStarFlyouts] = useState([]);

  const advancingRef = useRef(false);
  const starIdRef = useRef(0);

  /* Firestore ref for the combined key */
  const getHighScoreKey = useCallback(() => {
    if (!selectedTables.length) return '';
    return selectedTables.sort((a, b) => a - b).join('x');
  }, [selectedTables]);

  /* Fetch high score from Firestore */
  useEffect(() => {
    if (!gameStarted) return;
    const key = getHighScoreKey();
    if (!key) return;
    const loadHighScore = async () => {
      try {
        const ref = doc(collection(db, 'multiplication'), 'matchHighScores');
        const snap = await getDoc(ref);
        if (snap.exists() && snap.data()[key] != null) {
          setHighScore(snap.data()[key]);
        }
      } catch {
        /* silently fail */
      }
    };
    loadHighScore();
  }, [gameStarted, getHighScoreKey]);

  /* Save high score to Firestore */
  const saveHighScore = useCallback(async (score) => {
    const key = getHighScoreKey();
    if (!key) return;
    try {
      const ref = doc(collection(db, 'multiplication'), 'matchHighScores');
      const snap = await getDoc(ref);
      const current = snap.exists() ? snap.data() : {};
      if (!current[key] || score > current[key]) {
        await setDoc(ref, { ...current, [key]: score });
      }
    } catch {
      /* silently fail */
    }
  }, [getHighScoreKey]);

  /* Start game */
  const handleStart = useCallback(() => {
    if (selectedTables.length === 0) return;
    playSound('click');
    const qs = generateQuestions(selectedTables);
    setQuestions(qs);
    setCurrentIndex(0);
    setOptions(generateOptions(qs[0].answer));
    setCorrectCount(0);
    setStarsEarned(0);
    setCardStates({});
    setFeedback({ text: '', type: '' });
    setAttempts(0);
    setShowResult(false);
    setGameStarted(true);
    setStarFlyouts([]);
    setLoading(false);
  }, [selectedTables]);

  /* Advance to next question */
  const advanceQuestion = useCallback(() => {
    if (advancingRef.current) return;
    advancingRef.current = true;

    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex >= TOTAL_QUESTIONS) {
        // Game finished
        const finalStars = getStarRating(correctCount);
        setStarsEarned(finalStars);
        setShowResult(true);
        playSound('finish');
        saveHighScore(correctCount);
        advancingRef.current = false;
        return;
      }

      setCurrentIndex(nextIndex);
      setOptions(generateOptions(questions[nextIndex].answer));
      setCardStates({});
      setFeedback({ text: '', type: '' });
      setAttempts(0);
      advancingRef.current = false;
    }, 800);
  }, [currentIndex, correctCount, questions, saveHighScore]);

  /* Handle card click */
  const handleCardClick = useCallback((value) => {
    if (advancingRef.current) return;
    if (cardStates[value] === 'correct') return;
    if (cardStates[value] === 'wrong') return;

    const currentQ = questions[currentIndex];
    if (!currentQ) return;

    if (value === currentQ.answer) {
      // Correct
      playSound('correct');
      const newCorrectCount = correctCount + 1;
      setCorrectCount(newCorrectCount);

      // Mark card correct with animation
      setCardStates((prev) => ({ ...prev, [value]: 'correct' }));
      setFeedback({ text: '+1⭐', type: 'correct' });

      // Spawn star fly-out
      const id = ++starIdRef.current;
      setStarFlyouts((prev) => [...prev, id]);
      setTimeout(() => {
        setStarFlyouts((prev) => prev.filter((sid) => sid !== id));
      }, 800);

      // Auto-advance
      advanceQuestion();
    } else {
      // Wrong
      playSound('wrong');
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);

      // Shake the card
      setCardStates((prev) => ({ ...prev, [value]: 'wrong' }));
      setFeedback({ text: '再試試 💪', type: 'wrong' });

      // Hide card after 0.5s
      setTimeout(() => {
        setCardStates((prev) => ({ ...prev, [value]: 'hidden' }));

        // 2nd wrong = highlight correct answer
        if (newAttempts >= 2) {
          setCardStates((prev) => ({
            ...prev,
            [currentQ.answer]: 'highlight',
          }));
          setFeedback({
            text: `答案是 ${currentQ.answer} 💡`,
            type: 'wrong',
          });

          // Auto-advance after showing answer
          setTimeout(() => {
            advanceQuestion();
          }, 1500);
        }
      }, 500);
    }
  }, [cardStates, questions, currentIndex, correctCount, attempts, advanceQuestion]);

  /* Toggle table selection */
  const toggleTable = useCallback((table) => {
    if (gameStarted) return;
    setSelectedTables((prev) => {
      if (prev.includes(table)) {
        return prev.filter((t) => t !== table);
      }
      if (prev.length >= 3) return prev;
      return [...prev, table];
    });
  }, [gameStarted]);

  /* Return to table selection */
  const handleBackToMenu = useCallback(() => {
    setGameStarted(false);
    setSelectedTables([]);
    setQuestions([]);
    setCurrentIndex(0);
    setCorrectCount(0);
    setStarsEarned(0);
    setCardStates({});
    setFeedback({ text: '', type: '' });
    setAttempts(0);
    setShowResult(false);
    setStarFlyouts([]);
  }, []);

  /* Current question */
  const currentQ = questions[currentIndex];
  const isGameOver = showResult;
  const starRating = getStarRating(correctCount);

  /* Render emoji visual */
  const renderEmojiVisual = () => {
    if (!currentQ) return null;
    const emoji = EMOJI_MAP[currentQ.a] || '🍊';
    const rows = [];
    for (let i = 0; i < currentQ.b; i++) {
      rows.push(
        <span key={i}>
          {Array.from({ length: currentQ.a }, () => emoji).join('')}
          {i < currentQ.b - 1 && <br />}
        </span>
      );
    }
    return rows;
  };

  /* ─── Render ─────────────────────────────────────────── */
  return (
    <div style={styles.container}>
      {/* Inject keyframes */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-8px); }
          40% { transform: translateX(8px); }
          60% { transform: translateX(-5px); }
          80% { transform: translateX(5px); }
        }
        @keyframes starFly {
          0% { opacity: 1; transform: translate(-50%, 0) scale(0.5); }
          50% { opacity: 1; transform: translate(-50%, -80px) scale(1.3); }
          100% { opacity: 0; transform: translate(-50%, -160px) scale(0.8); }
        }
      `}</style>

      {/* Star fly-outs */}
      {starFlyouts.map((id) => (
        <StarFlyout key={id} keyId={id} />
      ))}

      {!gameStarted || isGameOver ? (
        /* ═══ TABLE SELECTOR + RESULT ═══ */
        <>
          <h1 style={styles.title}>🔢 對對碰乘法</h1>
          <p style={styles.subtitle}>選擇要練習的九九乘法表 (最多3個)</p>

          {isGameOver && (
            <div style={styles.resultOverlay}>
              <div style={styles.resultCard}>
                <div style={styles.resultTitle}>🎉 挑戰完成！</div>
                <div style={styles.resultStars}>
                  {Array.from({ length: starRating }, (_, i) => '⭐').join('')}
                  {starRating === 0 && '💪'}
                </div>
                <div style={styles.resultScore}>
                  答對 {correctCount} / {TOTAL_QUESTIONS} 題
                </div>
                {highScore > 0 && (
                  <div style={{ ...styles.resultScore, color: '#ff9800', fontWeight: 700 }}>
                    🏆 最高紀錄: {highScore} 題
                  </div>
                )}
                <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
                  <button
                    style={styles.resultBtn}
                    onClick={handleStart}
                  >
                    再玩一次
                  </button>
                  <button
                    style={{ ...styles.resultBtn, ...styles.resultBtnSecondary }}
                    onClick={handleBackToMenu}
                  >
                    返回選單
                  </button>
                </div>
              </div>
            </div>
          )}

          <div style={styles.selectorContainer}>
            <span style={styles.selectorLabel}>選擇乘法表</span>
            <div style={styles.checkboxGrid}>
              {Array.from({ length: 12 }, (_, i) => i + 1).map((num) => (
                <label key={num} style={styles.checkboxItem}>
                  <input
                    type="checkbox"
                    checked={selectedTables.includes(num)}
                    onChange={() => toggleTable(num)}
                    disabled={gameStarted}
                  />
                  {num}
                </label>
              ))}
            </div>

            {selectedTables.length > 0 && (
              <div style={{ marginBottom: 12, fontSize: 14, color: '#666' }}>
                已選擇: {selectedTables.sort((a, b) => a - b).join(', ')} 的乘法表
              </div>
            )}

            <button
              style={{
                ...styles.startBtn,
                ...(selectedTables.length === 0 || loading
                  ? styles.startBtnDisabled
                  : {}),
              }}
              disabled={selectedTables.length === 0 || loading}
              onClick={handleStart}
            >
              {loading ? '載入中...' : '🚀 開始挑戰！'}
            </button>
          </div>
        </>
      ) : (
        /* ═══ GAME SCREEN ═══ */
        <>
          {/* Progress bar */}
          <div style={styles.progressBar}>
            <span>第 {currentIndex + 1}/{TOTAL_QUESTIONS} 題</span>
            <span style={styles.starCount}>
              {'⭐'.repeat(getStarRating(correctCount))}
              <span style={{ fontSize: 14, fontWeight: 400, color: '#666' }}>
                ({correctCount})
              </span>
            </span>
          </div>

          {/* Progress dots */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 6,
            marginBottom: 20,
          }}>
            {Array.from({ length: TOTAL_QUESTIONS }, (_, i) => (
              <div
                key={i}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  background: i < currentIndex
                    ? '#4caf50'
                    : i === currentIndex
                      ? '#667eea'
                      : '#e0e0e0',
                  transition: 'background 0.3s',
                }}
              />
            ))}
          </div>

          {/* Equation */}
          {currentQ && (
            <div style={styles.equationArea}>
              <div style={styles.equationText}>
                <span style={styles.equationQuestion}>{currentQ.a}</span>
                {' × '}
                <span style={styles.equationQuestion}>{currentQ.b}</span>
                {' = ?'}
              </div>

              {/* Emoji visual */}
              <div style={styles.emojiVisual}>
                {renderEmojiVisual()}
              </div>
            </div>
          )}

          {/* Answer cards */}
          <div style={styles.cardsGrid}>
            {options.map((value) => {
              let cardStyle = { ...styles.card, ...styles.cardDefault };
              if (cardStates[value] === 'correct') {
                cardStyle = { ...cardStyle, ...styles.cardCorrect };
              } else if (cardStates[value] === 'wrong') {
                cardStyle = { ...cardStyle, ...styles.cardWrong };
              } else if (cardStates[value] === 'hidden') {
                cardStyle = { ...cardStyle, ...styles.cardHidden };
              } else if (cardStates[value] === 'highlight') {
                cardStyle = { ...cardStyle, ...styles.cardHighlight };
              }

              return (
                <div
                  key={value}
                  style={cardStyle}
                  onClick={() => handleCardClick(value)}
                >
                  {value}
                </div>
              );
            })}
          </div>

          {/* Feedback */}
          <div
            style={{
              ...styles.feedback,
              ...(feedback.type === 'correct'
                ? styles.feedbackCorrect
                : feedback.type === 'wrong'
                  ? styles.feedbackWrong
                  : {}),
            }}
          >
            {feedback.text}
          </div>
        </>
      )}
    </div>
  );
}
