import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext.jsx';
import { db } from '../../firebase/config.js';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { playSound } from '../../utils/soundEffects.js';
import { STAGES, TABLE_DATA } from '../../data/multiplicationData.js';

// ── Constants ──────────────────────────────────────────────────────
const MONSTERS_TO_WIN = 10;
const TOTAL_LIVES = 3;

const MONSTER_EMOJIS = ['👾', '👻', '🤖', '🦕', '🐲'];

const STAGE_CARDS = [
  {
    id: 1,
    emoji: '🌱',
    title: 'stage1',
    tables: [1, 2, 10],
    baseSpeed: 8,
    color: '#4CAF50',
  },
  {
    id: 2,
    emoji: '⚔️',
    title: 'stage2',
    tables: [3, 4, 5],
    baseSpeed: 6,
    color: '#FF9800',
  },
  {
    id: 3,
    emoji: '🔥',
    title: 'stage3',
    tables: [6, 7, 8, 9],
    baseSpeed: 4,
    color: '#f44336',
  },
];

const BASE_SPEED_MAP = { 1: 8, 2: 6, 3: 4 };

// ── Helper: generate a random monster equation for a stage ─────────
function generateMonster(stageId) {
  const stage = STAGE_CARDS.find((s) => s.id === stageId);
  if (!stage) return null;
  const tables = stage.tables;
  const a = tables[Math.floor(Math.random() * tables.length)];
  const b = Math.floor(Math.random() * 9) + 1; // 1-9
  const answer = a * b;
  const emoji = MONSTER_EMOJIS[Math.floor(Math.random() * MONSTER_EMOJIS.length)];
  return { a, b, answer, emoji, id: Date.now() + Math.random() };
}

// ── Stars calculation ──────────────────────────────────────────────
function calcStars(score) {
  if (score >= 100) return 5;
  if (score >= 60) return 3;
  if (score >= 30) return 2;
  return 1;
}

// ── Styles (CSS-in-JS) ─────────────────────────────────────────────
const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', 'PingFang SC', 'Microsoft YaHei', sans-serif",
    color: '#fff',
    padding: '16px',
    boxSizing: 'border-box',
    overflow: 'hidden',
    position: 'relative',
  },
  // ── Stage select ──
  stageSelectTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '24px',
    textShadow: '0 0 20px rgba(255,255,255,0.3)',
  },
  stageCardsRow: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  stageCard: {
    width: '220px',
    padding: '24px 16px',
    borderRadius: '16px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'transform 0.2s, box-shadow 0.2s',
    border: '2px solid rgba(255,255,255,0.15)',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
  },
  stageCardEmoji: {
    fontSize: '3rem',
  },
  stageCardTitle: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
  },
  stageCardDetail: {
    fontSize: '0.85rem',
    opacity: 0.75,
  },
  // ── Top bar ──
  topBar: {
    width: '100%',
    maxWidth: '500px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    fontSize: '1.1rem',
    fontWeight: 'bold',
  },
  hearts: {
    fontSize: '1.5rem',
    letterSpacing: '2px',
  },
  topBarStat: {
    display: 'flex',
    gap: '4px',
    alignItems: 'center',
  },
  // ── Monster area ──
  monsterArea: {
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    height: '320px',
    overflow: 'hidden',
    borderRadius: '16px',
    background: 'rgba(0,0,0,0.3)',
    border: '1px solid rgba(255,255,255,0.1)',
    margin: '8px 0',
  },
  monsterCard: {
    position: 'absolute',
    top: '-80px',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '160px',
    padding: '16px',
    borderRadius: '16px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    animation: 'monsterFall 8s linear forwards',
    zIndex: 2,
  },
  monsterEmoji: {
    fontSize: '3rem',
    marginBottom: '8px',
  },
  monsterEquation: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    background: 'rgba(0,0,0,0.3)',
    borderRadius: '8px',
    padding: '4px 8px',
  },
  monsterExploding: {
    animation: 'monsterExplode 0.5s ease-out forwards',
    transform: 'translateX(-50%)',
  },
  correctAnswerBanner: {
    position: 'absolute',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(255,0,0,0.85)',
    padding: '8px 16px',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    zIndex: 5,
    animation: 'fadeInOut 1s ease-in-out forwards',
  },
  fallLine: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    height: '4px',
    background: 'linear-gradient(90deg, transparent, #ff4444, transparent)',
    zIndex: 1,
  },
  // ── Keypad ──
  keypadContainer: {
    width: '100%',
    maxWidth: '500px',
    marginTop: '12px',
  },
  inputDisplay: {
    width: '100%',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '8px 0',
    minHeight: '48px',
    borderRadius: '12px',
    background: 'rgba(255,255,255,0.08)',
    marginBottom: '8px',
    letterSpacing: '4px',
  },
  keypadGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '10px',
  },
  keypadBtn: {
    width: '100%',
    height: '60px',
    fontSize: '1.6rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '14px',
    cursor: 'pointer',
    background: 'rgba(255,255,255,0.1)',
    color: '#fff',
    transition: 'background 0.15s, transform 0.1s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    userSelect: 'none',
    WebkitTapHighlightColor: 'transparent',
  },
  keypadBtnActive: {
    background: 'rgba(255,255,255,0.25)',
    transform: 'scale(0.95)',
  },
  keypadRow2: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginTop: '10px',
  },
  deleteBtn: {
    background: 'rgba(255,152,0,0.3)',
  },
  confirmBtn: {
    background: 'rgba(76,175,80,0.3)',
  },
  // ── Game over / Win overlay ──
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.8)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    padding: '24px',
    textAlign: 'center',
  },
  overlayTitle: {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  overlayScore: {
    fontSize: '1.5rem',
    marginBottom: '8px',
  },
  overlayStars: {
    fontSize: '3rem',
    margin: '16px 0',
  },
  overlayDetail: {
    fontSize: '1rem',
    opacity: 0.8,
    marginBottom: '8px',
  },
  overlayBtn: {
    marginTop: '20px',
    padding: '14px 40px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #667eea, #764ba2)',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 4px 20px rgba(102,126,234,0.4)',
  },
  // ── Keyframe injection ──
  '@keyframes monsterFall': {
    from: { top: '-80px' },
    to: { top: 'calc(100% - 10px)' },
  },
  '@keyframes monsterExplode': {
    '0%': { transform: 'translateX(-50%) scale(1) rotate(0deg)', opacity: 1 },
    '50%': { transform: 'translateX(-50%) scale(1.4) rotate(20deg)', opacity: 0.7 },
    '100%': { transform: 'translateX(-50%) scale(0) rotate(45deg)', opacity: 0 },
  },
  '@keyframes fadeInOut': {
    '0%': { opacity: 0 },
    '20%': { opacity: 1 },
    '80%': { opacity: 1 },
    '100%': { opacity: 0 },
  },
};

// ── Inject keyframes into document head ────────────────────────────
const keyframeCSS = `
@keyframes monsterFall {
  from { top: -100px; }
  to { top: calc(100% - 10px); }
}
@keyframes monsterExplode {
  0% { transform: translateX(-50%) scale(1) rotate(0deg); opacity: 1; }
  50% { transform: translateX(-50%) scale(1.4) rotate(20deg); opacity: 0.7; }
  100% { transform: translateX(-50%) scale(0) rotate(45deg); opacity: 0; }
}
@keyframes fadeInOut {
  0% { opacity: 0; }
  20% { opacity: 1; }
  80% { opacity: 1; }
  100% { opacity: 0; }
}
`;

if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.textContent = keyframeCSS;
  document.head.appendChild(styleEl);
}

// ── Component ──────────────────────────────────────────────────────
export default function MonsterPage() {
  const { user, userData } = useAuth();

  // Screen state: 'select' | 'playing' | 'gameover' | 'won'
  const [screen, setScreen] = useState('select');
  const [selectedStage, setSelectedStage] = useState(null);

  // Game state
  const [lives, setLives] = useState(TOTAL_LIVES);
  const [score, setScore] = useState(0);
  const [defeated, setDefeated] = useState(0);
  const [monster, setMonster] = useState(null);
  const [input, setInput] = useState('');
  const [exploding, setExploding] = useState(false);
  const [showCorrect, setShowCorrect] = useState(null);
  const [currentSpeed, setCurrentSpeed] = useState(8);
  const [bestEquation, setBestEquation] = useState('');

  const inputRef = useRef(null);
  const monsterTimerRef = useRef(null);
  const monsterRef = useRef(null);

  // ── Start game ──
  const startGame = useCallback((stageId) => {
    const stage = STAGE_CARDS.find((s) => s.id === stageId);
    setSelectedStage(stageId);
    setLives(TOTAL_LIVES);
    setScore(0);
    setDefeated(0);
    setInput('');
    setExploding(false);
    setShowCorrect(null);
    setCurrentSpeed(stage ? stage.baseSpeed : 8);
    setBestEquation('');
    setScreen('playing');

    const firstMonster = generateMonster(stageId);
    setMonster(firstMonster);
  }, []);

  // ── Handle monster reaching bottom ──
  const handleMonsterTimeout = useCallback(() => {
    if (!monster) return;
    // Monster reached the bottom
    const newLives = lives - 1;
    setLives(newLives);
    setShowCorrect(`${monster.a} × ${monster.b} = ${monster.answer}`);

    if (newLives <= 0) {
      // Game over
      setTimeout(() => {
        setScreen('gameover');
        playSound('complete');
      }, 1200);
    } else {
      // Show correct answer briefly, then next monster
      setTimeout(() => {
        setShowCorrect(null);
        const next = generateMonster(selectedStage);
        setMonster(next);
        setInput('');
      }, 1000);
    }
  }, [monster, lives, selectedStage]);

  // ── Set timer for monster fall ──
  useEffect(() => {
    if (screen !== 'playing' || !monster || exploding) return;
    const speedMs = currentSpeed * 1000;
    clearTimeout(monsterTimerRef.current);
    monsterTimerRef.current = setTimeout(handleMonsterTimeout, speedMs);
    return () => clearTimeout(monsterTimerRef.current);
  }, [screen, monster, currentSpeed, exploding, handleMonsterTimeout]);

  // ── Cleanup timer on unmount ──
  useEffect(() => {
    return () => clearTimeout(monsterTimerRef.current);
  }, []);

  // ── Keypad input ──
  const handleDigit = useCallback((d) => {
    if (screen !== 'playing' || exploding || showCorrect) return;
    setInput((prev) => (prev.length < 5 ? prev + d : prev));
  }, [screen, exploding, showCorrect]);

  const handleDelete = useCallback(() => {
    if (screen !== 'playing') return;
    setInput((prev) => prev.slice(0, -1));
  }, [screen]);

  const handleConfirm = useCallback(() => {
    if (screen !== 'playing' || !monster || !input || exploding || showCorrect) return;
    const userAnswer = parseInt(input, 10);
    const correct = userAnswer === monster.answer;

    if (correct) {
      playSound('correct');
      setExploding(true);
      const newDefeated = defeated + 1;
      const newScore = score + 10;

      // Track best equation (longest time/equation)
      const eqStr = `${monster.a} × ${monster.b} = ${monster.answer}`;
      setBestEquation((prev) => {
        if (!prev || eqStr.length > prev.length) return eqStr;
        return prev;
      });

      setTimeout(() => {
        setExploding(false);
        setDefeated(newDefeated);
        setScore(newScore);
        setInput('');

        if (newDefeated >= MONSTERS_TO_WIN) {
          // Won!
          setMonster(null);
          setScreen('won');
          playSound('complete');
          return;
        }

        // Speed increase every 5 monsters
        let newSpeed = currentSpeed;
        if (newDefeated % 5 === 0) {
          newSpeed = Math.max(2, currentSpeed - 0.5);
          setCurrentSpeed(newSpeed);
        }

        const next = generateMonster(selectedStage);
        setMonster(next);
      }, 500);
    } else {
      playSound('wrong');
      setInput('');
    }
  }, [
    screen, monster, input, exploding, showCorrect,
    defeated, score, currentSpeed, selectedStage,
  ]);

  // ── Keyboard support ──
  useEffect(() => {
    const handler = (e) => {
      if (screen !== 'playing') return;
      if (e.key >= '0' && e.key <= '9') {
        handleDigit(e.key);
      } else if (e.key === 'Backspace') {
        handleDelete();
      } else if (e.key === 'Enter') {
        handleConfirm();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [screen, handleDigit, handleDelete, handleConfirm]);

  // ── Save to Firestore ──
  const saveToFirestore = useCallback(
    async (won, stars) => {
      if (!user) return;
      try {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          'multiplication.monsterHighScore': increment(score),
          'multiplication.monsterLevelsCompleted': increment(won ? 1 : 0),
          'multiplication.totalMultStars': increment(stars),
          totalStars: increment(stars),
        });
      } catch (err) {
        console.error('Firestore save error:', err);
      }
    },
    [user, score],
  );

  // ── Save on game end ──
  useEffect(() => {
    if (screen === 'gameover' || screen === 'won') {
      const stars = calcStars(score);
      const won = screen === 'won';
      saveToFirestore(won, stars);
    }
  }, [screen, score, saveToFirestore]);

  // ── Replay ──
  const handleReplay = useCallback(() => {
    setScreen('select');
    setSelectedStage(null);
    setMonster(null);
    setInput('');
    setExploding(false);
    setShowCorrect(null);
  }, []);

  // ── Render ──
  // ── STAGE SELECT SCREEN ──
  if (screen === 'select') {
    return (
      <div style={styles.container}>
        <h1 style={styles.stageSelectTitle}>👾 打怪獸數學</h1>
        <div style={styles.stageCardsRow}>
          {STAGE_CARDS.map((stage) => (
            <div
              key={stage.id}
              style={{
                ...styles.stageCard,
                background: `linear-gradient(135deg, ${stage.color}33, ${stage.color}11)`,
                borderColor: stage.color,
              }}
              onClick={() => startGame(stage.id)}
            >
              <div style={styles.stageCardEmoji}>{stage.emoji}</div>
              <div style={styles.stageCardTitle}>第 {stage.id} 關</div>
              <div style={styles.stageCardDetail}>
                ×{stage.tables.join(', ×')}
              </div>
              <div style={styles.stageCardDetail}>
                ⏱ {stage.baseSpeed}s
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── PLAYING SCREEN ──
  const stars = calcStars(score);
  const monsterSpeed = `${currentSpeed}s`;

  return (
    <div style={styles.container}>
      {/* Top Bar */}
      <div style={styles.topBar}>
        <div style={styles.hearts}>
          {'❤️'.repeat(lives)}{'🖤'.repeat(TOTAL_LIVES - lives)}
        </div>
        <div style={styles.topBarStat}>
          🏆 {score}
        </div>
        <div style={styles.topBarStat}>
          👾 {defeated}/{MONSTERS_TO_WIN}
        </div>
      </div>

      {/* Monster Area */}
      <div style={styles.monsterArea}>
        <div style={styles.fallLine} />

        {monster && !exploding && (
          <div
            key={monster.id}
            style={{
              ...styles.monsterCard,
              animation: `monsterFall ${monsterSpeed} linear forwards`,
            }}
            ref={monsterRef}
          >
            <div style={styles.monsterEmoji}>{monster.emoji}</div>
            <div style={styles.monsterEquation}>
              {monster.a} × {monster.b} = ?
            </div>
          </div>
        )}

        {monster && exploding && (
          <div
            key={`explode-${monster.id}`}
            style={{
              ...styles.monsterCard,
              ...styles.monsterExploding,
              animation: 'monsterExplode 0.5s ease-out forwards',
            }}
          >
            <div style={styles.monsterEmoji}>{monster.emoji}</div>
            <div style={styles.monsterEquation}>
              {monster.a} × {monster.b} = {monster.answer}
            </div>
          </div>
        )}

        {showCorrect && (
          <div key={showCorrect} style={styles.correctAnswerBanner}>
            ✅ {showCorrect}
          </div>
        )}
      </div>

      {/* Keypad */}
      <div style={styles.keypadContainer}>
        <div style={styles.inputDisplay}>
          {input || '?'}
        </div>
        <div style={styles.keypadGrid}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
            <button
              key={d}
              style={styles.keypadBtn}
              onClick={() => handleDigit(String(d))}
              onTouchStart={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.25)';
                e.currentTarget.style.transform = 'scale(0.95)';
              }}
              onTouchEnd={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {d}
            </button>
          ))}
        </div>
        <div style={styles.keypadRow2}>
          <button
            style={{ ...styles.keypadBtn, ...styles.deleteBtn }}
            onClick={handleDelete}
          >
            ⌫
          </button>
          <button
            style={{ ...styles.keypadBtn, ...styles.confirmBtn }}
            onClick={handleConfirm}
          >
            ✅
          </button>
        </div>
        {/* Zero button below */}
        <div style={{ marginTop: '10px' }}>
          <button
            style={{ ...styles.keypadBtn, maxWidth: '180px', margin: '0 auto' }}
            onClick={() => handleDigit('0')}
          >
            0
          </button>
        </div>
      </div>

      {/* ── GAME OVER OVERLAY ── */}
      {screen === 'gameover' && (
        <div style={styles.overlay}>
          <div style={styles.overlayTitle}>💀 遊戲結束</div>
          <div style={styles.overlayScore}>🏆 得分：{score}</div>
          <div style={styles.overlayStars}>
            {'⭐'.repeat(stars)}{'☆'.repeat(5 - stars)}
          </div>
          {bestEquation && (
            <div style={styles.overlayDetail}>
              最難算式：{bestEquation}
            </div>
          )}
          <button style={styles.overlayBtn} onClick={handleReplay}>
            再玩一次
          </button>
        </div>
      )}

      {/* ── WON OVERLAY ── */}
      {screen === 'won' && (
        <div style={styles.overlay}>
          <div style={styles.overlayTitle}>🎉 你打贏咗！</div>
          <div style={styles.overlayScore}>🏆 得分：{score}</div>
          <div style={styles.overlayStars}>
            {'⭐'.repeat(stars)}{'☆'.repeat(5 - stars)}
          </div>
          {selectedStage < 3 && (
            <div style={styles.overlayDetail}>
              🔓 解鎖下一關！
            </div>
          )}
          <button style={styles.overlayBtn} onClick={handleReplay}>
            再玩一次
          </button>
        </div>
      )}
    </div>
  );
}
