import { useState, useCallback, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext.jsx'
import { db } from '../../firebase/config.js'
import { doc, updateDoc, increment, getDoc } from 'firebase/firestore'
import { playSound } from '../../utils/soundEffects.js'

/* ══════════════════════════════════════════════════════════════════
   PICTURE DEFINITIONS — Each has 10 SVG regions
   ══════════════════════════════════════════════════════════════════ */

const PICTURES = {
  rocket: {
    id: 'rocket',
    emoji: '🚀',
    name: '火箭',
    viewBox: '0 0 300 400',
    regions: [
      { id: 'R1', color: '#FF6B6B', label: '機身主體' },
      { id: 'R2', color: '#4ECDC4', label: '機身中段' },
      { id: 'R3', color: '#FFE66D', label: '窗戶' },
      { id: 'R4', color: '#FF8C42', label: '左翼' },
      { id: 'R5', color: '#FF8C42', label: '右翼' },
      { id: 'R6', color: '#95E1D3', label: '左火焰' },
      { id: 'R7', color: '#95E1D3', label: '右火焰' },
      { id: 'R8', color: '#F38181', label: '頂錐' },
      { id: 'R9', color: '#AA96DA', label: '尾翼左' },
      { id: 'R10', color: '#AA96DA', label: '尾翼右' },
    ],
    render(colors) {
      return (
        <svg viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg">
          {/* 左火焰 */}
          <ellipse data-region="R6" cx="120" cy="330" rx="30" ry="50"
            fill={colors.R6 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 右火焰 */}
          <ellipse data-region="R7" cx="180" cy="330" rx="30" ry="50"
            fill={colors.R7 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 左翼 */}
          <polygon data-region="R4" points="100,180 60,280 100,260"
            fill={colors.R4 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 右翼 */}
          <polygon data-region="R5" points="200,180 240,280 200,260"
            fill={colors.R5 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 尾翼左 */}
          <polygon data-region="R9" points="100,260 70,310 100,290"
            fill={colors.R9 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 尾翼右 */}
          <polygon data-region="R10" points="200,260 230,310 200,290"
            fill={colors.R10 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 機身主體 */}
          <ellipse data-region="R1" cx="150" cy="220" rx="60" ry="100"
            fill={colors.R1 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 機身中段 */}
          <rect data-region="R2" x="110" y="160" width="80" height="60" rx="8"
            fill={colors.R2 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 窗戶 */}
          <circle data-region="R3" cx="150" cy="190" r="20"
            fill={colors.R3 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 頂錐 */}
          <polygon data-region="R8" points="150,60 110,160 190,160"
            fill={colors.R8 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
        </svg>
      )
    },
  },
  dinosaur: {
    id: 'dinosaur',
    emoji: '🦕',
    name: '恐龍',
    viewBox: '0 0 400 300',
    regions: [
      { id: 'R1', color: '#6BCB77', label: '身體' },
      { id: 'R2', color: '#4CAF50', label: '頭部' },
      { id: 'R3', color: '#FFE66D', label: '眼睛' },
      { id: 'R4', color: '#388E3C', label: '尾巴' },
      { id: 'R5', color: '#FF8C42', label: '前腳' },
      { id: 'R6', color: '#FF8C42', label: '後腳' },
      { id: 'R7', color: '#81C784', label: '背部棘刺' },
      { id: 'R8', color: '#81C784', label: '背部棘刺' },
      { id: 'R9', color: '#A5D6A7', label: '肚皮' },
      { id: 'R10', color: '#FFAB91', label: '嘴巴' },
    ],
    render(colors) {
      return (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          {/* 尾巴 */}
          <path data-region="R4" d="M60,160 Q20,140 50,120 Q70,110 90,140"
            fill={colors.R4 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 後腳 */}
          <rect data-region="R6" x="130" y="210" width="35" height="50" rx="8"
            fill={colors.R6 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 前腳 */}
          <rect data-region="R5" x="230" y="210" width="35" height="50" rx="8"
            fill={colors.R5 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 身體 */}
          <ellipse data-region="R1" cx="170" cy="170" rx="90" ry="55"
            fill={colors.R1 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 肚皮 */}
          <ellipse data-region="R9" cx="170" cy="190" rx="60" ry="30"
            fill={colors.R9 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 頭部 */}
          <ellipse data-region="R2" cx="280" cy="140" rx="55" ry="45"
            fill={colors.R2 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 眼睛 */}
          <circle data-region="R3" cx="300" cy="130" r="10"
            fill={colors.R3 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 嘴巴 */}
          <path data-region="R10" d="M290,160 Q310,170 320,155"
            fill={colors.R10 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 背部棘刺 */}
          <polygon data-region="R7" points="140,105 160,60 180,115"
            fill={colors.R7 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          <polygon data-region="R8" points="180,105 200,55 220,115"
            fill={colors.R8 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
        </svg>
      )
    },
  },
  unicorn: {
    id: 'unicorn',
    emoji: '🦄',
    name: '獨角獸',
    viewBox: '0 0 400 400',
    regions: [
      { id: 'R1', color: '#FCBAD3', label: '身體' },
      { id: 'R2', color: '#FF9A9E', label: '頭部' },
      { id: 'R3', color: '#FFE66D', label: '眼睛' },
      { id: 'R4', color: '#FFD700', label: '獨角' },
      { id: 'R5', color: '#A18CD1', label: '鬃毛' },
      { id: 'R6', color: '#FBC2EB', label: '尾巴' },
      { id: 'R7', color: '#FF6B6B', label: '前腳' },
      { id: 'R8', color: '#FF6B6B', label: '後腳' },
      { id: 'R9', color: '#95E1D3', label: '翅膀' },
      { id: 'R10', color: '#F38181', label: '肚皮' },
    ],
    render(colors) {
      return (
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          {/* 尾巴 */}
          <path data-region="R6" d="M80,180 Q30,150 50,110 Q70,80 90,130"
            fill={colors.R6 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 後腳 */}
          <rect data-region="R8" x="120" y="270" width="35" height="60" rx="10"
            fill={colors.R8 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 前腳 */}
          <rect data-region="R7" x="230" y="270" width="35" height="60" rx="10"
            fill={colors.R7 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 身體 */}
          <ellipse data-region="R1" cx="180" cy="220" rx="80" ry="60"
            fill={colors.R1 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 肚皮 */}
          <ellipse data-region="R10" cx="180" cy="245" rx="55" ry="30"
            fill={colors.R10 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 翅膀 */}
          <path data-region="R9" d="M200,170 Q250,100 280,140 Q260,170 220,180"
            fill={colors.R9 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 頭部 */}
          <ellipse data-region="R2" cx="280" cy="180" rx="50" ry="45"
            fill={colors.R2 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 眼睛 */}
          <circle data-region="R3" cx="300" cy="170" r="10"
            fill={colors.R3 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 獨角 */}
          <polygon data-region="R4" points="290,130 285,60 305,60 300,135"
            fill={colors.R4 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 鬃毛 */}
          <path data-region="R5" d="M260,150 Q240,130 255,110 Q270,100 275,140"
            fill={colors.R5 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
        </svg>
      )
    },
  },
  castle: {
    id: 'castle',
    emoji: '🏰',
    name: '城堡',
    viewBox: '0 0 400 400',
    regions: [
      { id: 'R1', color: '#A18CD1', label: '主塔' },
      { id: 'R2', color: '#FBC2EB', label: '左塔' },
      { id: 'R3', color: '#FCBAD3', label: '右塔' },
      { id: 'R4', color: '#FFE66D', label: '城門' },
      { id: 'R5', color: '#95E1D3', label: '左窗' },
      { id: 'R6', color: '#95E1D3', label: '右窗' },
      { id: 'R7', color: '#FF8C42', label: '城牆' },
      { id: 'R8', color: '#F38181', label: '塔頂左' },
      { id: 'R9', color: '#F38181', label: '塔頂右' },
      { id: 'R10', color: '#FFD700', label: '旗幟' },
    ],
    render(colors) {
      return (
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          {/* 城牆 */}
          <rect data-region="R7" x="60" y="220" width="280" height="140" rx="4"
            fill={colors.R7 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 左塔 */}
          <rect data-region="R2" x="60" y="140" width="60" height="80" rx="4"
            fill={colors.R2 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 右塔 */}
          <rect data-region="R3" x="280" y="140" width="60" height="80" rx="4"
            fill={colors.R3 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 主塔 */}
          <rect data-region="R1" x="150" y="100" width="100" height="120" rx="4"
            fill={colors.R1 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 塔頂左 */}
          <polygon data-region="R8" points="60,140 90,90 120,140"
            fill={colors.R8 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 塔頂右 */}
          <polygon data-region="R9" points="280,140 310,90 340,140"
            fill={colors.R9 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 城門 */}
          <path data-region="R4" d="M170,360 Q170,310 200,300 Q230,310 230,360"
            fill={colors.R4 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 左窗 */}
          <circle data-region="R5" cx="90" cy="180" r="12"
            fill={colors.R5 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 右窗 */}
          <circle data-region="R6" cx="310" cy="180" r="12"
            fill={colors.R6 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 旗幟 */}
          <polygon data-region="R10" points="200,60 200,100 230,80"
            fill={colors.R10 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
        </svg>
      )
    },
  },
  whale: {
    id: 'whale',
    emoji: '🐳',
    name: '鯨魚',
    viewBox: '0 0 400 300',
    regions: [
      { id: 'R1', color: '#4A90D9', label: '身體' },
      { id: 'R2', color: '#357ABD', label: '頭部' },
      { id: 'R3', color: '#FFFFFF', label: '肚皮' },
      { id: 'R4', color: '#FFE66D', label: '眼睛' },
      { id: 'R5', color: '#7BB3E8', label: '背鰭' },
      { id: 'R6', color: '#7BB3E8', label: '尾鰭' },
      { id: 'R7', color: '#95E1D3', label: '噴水' },
      { id: 'R8', color: '#95E1D3', label: '噴水' },
      { id: 'R9', color: '#F38181', label: '胸鰭' },
      { id: 'R10', color: '#FF9A9E', label: '嘴巴' },
    ],
    render(colors) {
      return (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          {/* 尾鰭 */}
          <path data-region="R6" d="M40,150 Q10,110 30,80 Q50,100 60,130"
            fill={colors.R6 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 身體 */}
          <ellipse data-region="R1" cx="200" cy="160" rx="130" ry="70"
            fill={colors.R1 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 肚皮 */}
          <ellipse data-region="R3" cx="200" cy="185" rx="90" ry="35"
            fill={colors.R3 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 頭部 */}
          <ellipse data-region="R2" cx="310" cy="150" rx="60" ry="55"
            fill={colors.R2 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 眼睛 */}
          <circle data-region="R4" cx="330" cy="135" r="10"
            fill={colors.R4 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 嘴巴 */}
          <path data-region="R10" d="M340,165 Q350,175 340,185"
            fill={colors.R10 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 背鰭 */}
          <polygon data-region="R5" points="180,80 210,50 240,90"
            fill={colors.R5 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 胸鰭 */}
          <ellipse data-region="R9" cx="250" cy="210" rx="30" ry="12" transform="rotate(-20,250,210)"
            fill={colors.R9 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 噴水 */}
          <ellipse data-region="R7" cx="290" cy="70" rx="15" ry="25"
            fill={colors.R7 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          <ellipse data-region="R8" cx="310" cy="55" rx="10" ry="18"
            fill={colors.R8 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
        </svg>
      )
    },
  },
  bigstar: {
    id: 'bigstar',
    emoji: '⭐',
    name: '大星星',
    viewBox: '0 0 400 400',
    regions: [
      { id: 'R1', color: '#FFD700', label: '星尖上' },
      { id: 'R2', color: '#FFE66D', label: '星尖左上' },
      { id: 'R3', color: '#FFE66D', label: '星尖右上' },
      { id: 'R4', color: '#FFC107', label: '星尖左下' },
      { id: 'R5', color: '#FFC107', label: '星尖右下' },
      { id: 'R6', color: '#FFB300', label: '星體中央' },
      { id: 'R7', color: '#FF8F00', label: '星體左' },
      { id: 'R8', color: '#FF8F00', label: '星體右' },
      { id: 'R9', color: '#FFE082', label: '左眼' },
      { id: 'R10', color: '#FFE082', label: '右眼' },
    ],
    render(colors) {
      return (
        <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          {/* 星尖上 */}
          <polygon data-region="R1" points="200,30 180,130 220,130"
            fill={colors.R1 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 星尖左上 */}
          <polygon data-region="R2" points="70,130 160,150 140,190"
            fill={colors.R2 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 星尖右上 */}
          <polygon data-region="R3" points="330,130 240,150 260,190"
            fill={colors.R3 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 星尖左下 */}
          <polygon data-region="R4" points="100,320 160,240 140,210"
            fill={colors.R4 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 星尖右下 */}
          <polygon data-region="R5" points="300,320 240,240 260,210"
            fill={colors.R5 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 星體中央 */}
          <polygon data-region="R6" points="200,130 260,190 240,240 160,240 140,190"
            fill={colors.R6 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 星體左 */}
          <polygon data-region="R7" points="140,190 160,240 100,320 80,260"
            fill={colors.R7 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 星體右 */}
          <polygon data-region="R8" points="260,190 240,240 300,320 320,260"
            fill={colors.R8 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 左眼 */}
          <circle data-region="R9" cx="175" cy="195" r="12"
            fill={colors.R9 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
          {/* 右眼 */}
          <circle data-region="R10" cx="225" cy="195" r="12"
            fill={colors.R10 || '#E0E0E0'} stroke="#999" strokeWidth="1.5" />
        </svg>
      )
    },
  },
}

const PICTURE_LIST = Object.values(PICTURES)

/* ══════════════════════════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════════════════════════ */

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generateQuestion() {
  const a = Math.floor(Math.random() * 10) + 1 // 1–10
  const b = Math.floor(Math.random() * 10) + 1 // 1–10
  const answer = a * b
  const options = new Set([answer])
  while (options.size < 4) {
    const distractor = answer + (Math.floor(Math.random() * 10) - 5)
    if (distractor >= 1 && distractor !== answer) options.add(distractor)
  }
  return {
    text: `${a} × ${b} = ?`,
    answer,
    options: shuffle([...options]),
  }
}

function getRegionQuestions() {
  const questions = []
  for (let i = 0; i < 10; i++) {
    questions.push(generateQuestion())
  }
  return questions
}

/* ══════════════════════════════════════════════════════════════════
   STYLES
   ══════════════════════════════════════════════════════════════════ */

const s = {
  container: {
    maxWidth: 800,
    margin: '0 auto',
    padding: '16px',
    fontFamily: '"Segoe UI", "Noto Sans TC", system-ui, sans-serif',
    color: '#1a1a2e',
    minHeight: '100vh',
    boxSizing: 'border-box',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  backBtn: {
    fontSize: 14,
    fontWeight: 700,
    color: '#7f8c8d',
    background: 'none',
    border: '2px solid #7f8c8d',
    borderRadius: 10,
    padding: '8px 16px',
    cursor: 'pointer',
    textDecoration: 'none',
  },
  title: {
    fontSize: 24,
    fontWeight: 900,
    textAlign: 'center',
  },
  /* ── Picture Selector Grid ── */
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 12,
    marginBottom: 20,
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    padding: '16px 12px',
    textAlign: 'center',
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    cursor: 'pointer',
    transition: 'transform 0.15s, box-shadow 0.15s',
    border: '3px solid transparent',
  },
  cardActive: {
    borderColor: '#667eea',
    boxShadow: '0 0 0 3px rgba(102,126,234,0.25)',
    transform: 'scale(1.02)',
  },
  cardEmoji: {
    fontSize: 36,
    marginBottom: 4,
  },
  cardName: {
    fontSize: 14,
    fontWeight: 800,
    marginBottom: 4,
  },
  cardProgress: {
    fontSize: 12,
    color: '#7f8c8d',
    fontWeight: 600,
    marginBottom: 4,
  },
  progressBarWrap: {
    width: '100%',
    height: 6,
    background: '#E8E8E8',
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 999,
    background: 'linear-gradient(90deg, #667eea, #764ba2)',
    transition: 'width 0.4s ease',
  },
  /* ── Coloring Screen ── */
  coloringArea: {
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  svgWrapper: {
    flex: '0 0 60%',
    background: '#fff',
    borderRadius: 16,
    padding: 12,
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
  },
  svgInner: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  questionCard: {
    flex: 1,
    background: '#fff',
    borderRadius: 16,
    padding: 20,
    boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  questionText: {
    fontSize: 28,
    fontWeight: 800,
    color: '#667eea',
    marginBottom: 16,
  },
  optionGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 10,
  },
  optionBtn: {
    padding: '14px 8px',
    fontSize: 22,
    fontWeight: 700,
    border: '3px solid #e0e0e0',
    borderRadius: 12,
    background: '#f8f8ff',
    cursor: 'pointer',
    transition: 'all 0.15s',
    color: '#1a1a2e',
  },
  feedback: {
    fontSize: 18,
    fontWeight: 700,
    marginTop: 12,
    minHeight: 28,
  },
  feedbackCorrect: {
    color: '#2e7d32',
  },
  feedbackWrong: {
    color: '#c62828',
  },
  /* ── Completion ── */
  completion: {
    textAlign: 'center',
    padding: '40px 16px',
  },
  completionEmoji: {
    fontSize: 64,
    marginBottom: 12,
  },
  completionTitle: {
    fontSize: 28,
    fontWeight: 900,
    marginBottom: 8,
  },
  completionStars: {
    fontSize: 48,
    marginBottom: 16,
  },
  saveBtn: {
    display: 'inline-block',
    padding: '14px 32px',
    fontSize: 18,
    fontWeight: 700,
    border: 'none',
    borderRadius: 12,
    cursor: 'pointer',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    marginBottom: 12,
  },
  homeBtn: {
    display: 'block',
    width: '100%',
    padding: '14px',
    fontSize: 16,
    fontWeight: 700,
    color: '#7f8c8d',
    background: '#fff',
    border: '2px solid #7f8c8d',
    borderRadius: 12,
    cursor: 'pointer',
    marginTop: 8,
  },
  /* ── Region progress in coloring mode ── */
  regionProgress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    marginBottom: 12,
    flexWrap: 'wrap',
  },
  regionDot: {
    width: 16,
    height: 16,
    borderRadius: '50%',
    border: '2px solid #ccc',
    transition: 'all 0.3s',
  },
  regionDotActive: {
    borderColor: '#ff9800',
    boxShadow: '0 0 0 3px rgba(255,152,0,0.4)',
    animation: 'pulse-glow 1s ease-in-out infinite',
  },
}

/* ══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ══════════════════════════════════════════════════════════════════ */

export default function ColoringPage() {
  const { currentUser, userProfile, refreshProfile } = useAuth()
  const navigate = useNavigate()

  /* ── State ── */
  const [selectedPicture, setSelectedPicture] = useState(null)  // picture object or null
  const [regionColors, setRegionColors] = useState({})          // { R1: '#FF6B6B', ... }
  const [currentRegionIndex, setCurrentRegionIndex] = useState(0)
  const [regionQuestions, setRegionQuestions] = useState([])    // 10 questions
  const [currentQuestion, setCurrentQuestion] = useState(null)
  const [answerState, setAnswerState] = useState('')            // '', 'correct', 'wrong'
  const [completed, setCompleted] = useState(false)
  const [syncing, setSyncing] = useState(false)

  /* ── Firestore progress ── */
  const [pictureProgress, setPictureProgress] = useState({})
  const svgRef = useRef(null)

  // Load picture progress from Firestore
  useEffect(() => {
    if (!currentUser) return
    const loadProgress = async () => {
      try {
        const ref = doc(db, 'users', currentUser.uid)
        const snap = await getDoc(ref)
        if (snap.exists()) {
          const data = snap.data()
          const coloringProgress = data?.multiplication?.coloringProgress || {}
          setPictureProgress(coloringProgress)
        }
      } catch {
        // silent
      }
    }
    loadProgress()
  }, [currentUser])

  /* ── Select picture & start coloring ── */
  const handleSelectPicture = useCallback((picture) => {
    playSound('click')
    const questions = getRegionQuestions()
    setSelectedPicture(picture)
    setRegionColors({})
    setCurrentRegionIndex(0)
    setRegionQuestions(questions)
    setCurrentQuestion(questions[0])
    setAnswerState('')
    setCompleted(false)
    setSyncing(false)
  }, [])

  /* ── Handle answer click ── */
  const handleAnswer = useCallback((selectedValue) => {
    if (!currentQuestion || answerState === 'correct') return

    if (selectedValue === currentQuestion.answer) {
      // Correct!
      playSound('correct')
      setAnswerState('correct')

      const regionId = selectedPicture.regions[currentRegionIndex].id
      const color = selectedPicture.regions[currentRegionIndex].color
      setRegionColors((prev) => ({ ...prev, [regionId]: color }))

      // Delay then advance
      setTimeout(() => {
        const nextIndex = currentRegionIndex + 1
        if (nextIndex >= 10) {
          // All regions colored
          setCompleted(true)
          playSound('complete')
          // Save progress to Firestore
          handleSaveProgress(selectedPicture.id, 10)
        } else {
          setCurrentRegionIndex(nextIndex)
          setCurrentQuestion(regionQuestions[nextIndex])
          setAnswerState('')
        }
      }, 800)
    } else {
      // Wrong
      playSound('wrong')
      setAnswerState('wrong')
      setTimeout(() => setAnswerState(''), 600)
    }
  }, [currentQuestion, answerState, currentRegionIndex, selectedPicture, regionQuestions])

  /* ── Save progress to Firestore ── */
  const handleSaveProgress = useCallback(async (pictureId, coloredCount) => {
    if (!currentUser || syncing) return
    setSyncing(true)
    try {
      const userRef = doc(db, 'users', currentUser.uid)
      await updateDoc(userRef, {
        [`multiplication.coloringProgress.${pictureId}`]: coloredCount,
        [`multiplication.coloringCompleted`]: increment(coloredCount >= 10 ? 1 : 0),
        [`multiplication.totalMultStars`]: increment(5),
        totalStars: increment(5),
      })
      await refreshProfile()
      setPictureProgress((prev) => ({ ...prev, [pictureId]: coloredCount }))
    } catch (err) {
      console.error('Failed to save coloring progress', err)
    }
    setSyncing(false)
  }, [currentUser, syncing, refreshProfile])

  /* ── Save partial progress ── */
  // Firestore saves on each correct answer (throttled)
  const lastSaveRef = useRef(0)
  useEffect(() => {
    if (!selectedPicture || currentRegionIndex === 0) return
    const now = Date.now()
    if (now - lastSaveRef.current < 3000) return // throttle to every 3s
    lastSaveRef.current = now
    const coloredCount = Object.keys(regionColors).length
    if (coloredCount > 0 && coloredCount < 10) {
      // Save partial progress silently
      const doSave = async () => {
        if (!currentUser) return
        try {
          const userRef = doc(db, 'users', currentUser.uid)
          await updateDoc(userRef, {
            [`multiplication.coloringProgress.${selectedPicture.id}`]: coloredCount,
          })
          setPictureProgress((prev) => ({ ...prev, [selectedPicture.id]: coloredCount }))
        } catch { /* silent */ }
      }
      doSave()
    }
  }, [currentRegionIndex, regionColors, selectedPicture, currentUser])

  /* ── Download SVG as image ── */
  const handleDownload = useCallback(() => {
    if (!svgRef.current) return
    const svgEl = svgRef.current
    const svgData = new XMLSerializer().serializeToString(svgEl)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const img = new window.Image()

    img.onload = () => {
      canvas.width = img.width
      canvas.height = img.height
      ctx.drawImage(img, 0, 0)
      const link = document.createElement('a')
      link.download = `${selectedPicture.name}_填色.png`
      link.href = canvas.toDataURL('image/png')
      link.click()
    }

    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    img.src = url
  }, [selectedPicture])

  /* ── Back to selector ── */
  const handleBackToSelector = useCallback(() => {
    setSelectedPicture(null)
    setRegionColors({})
    setCurrentRegionIndex(0)
    setRegionQuestions([])
    setCurrentQuestion(null)
    setAnswerState('')
    setCompleted(false)
  }, [])

  /* ══════════════════════════════════════════════════════════════
     RENDER: Picture Selector
     ══════════════════════════════════════════════════════════════ */
  if (!selectedPicture) {
    return (
      <div style={s.container}>
        <div style={s.header}>
          <button style={s.backBtn} onClick={() => navigate('/multiplication')}>
            ← 返回
          </button>
          <h2 style={s.title}>🎨 填色書</h2>
          <div style={{ width: 80 }} />
        </div>

        <div style={s.grid}>
          {PICTURE_LIST.map((pic) => {
            const colored = pictureProgress[pic.id] || 0
            const isActive = colored === 10
            return (
              <div
                key={pic.id}
                style={{
                  ...s.card,
                  ...(isActive ? s.cardActive : {}),
                  opacity: colored === 10 ? 0.85 : 1,
                }}
                onClick={() => handleSelectPicture(pic)}
              >
                <div style={s.cardEmoji}>{pic.emoji}</div>
                <div style={s.cardName}>{pic.name}</div>
                <div style={s.cardProgress}>
                  {isActive ? '✅ 已完成!' : `${colored}/10 填色`}
                </div>
                <div style={s.progressBarWrap}>
                  <div
                    style={{
                      ...s.progressBarFill,
                      width: `${(colored / 10) * 100}%`,
                    }}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER: Completion
     ══════════════════════════════════════════════════════════════ */
  if (completed) {
    return (
      <div style={s.container}>
        <div style={s.completion}>
          {/* Render completed SVG */}
          <div style={{
            maxWidth: 300,
            margin: '0 auto 20px',
            background: '#fff',
            borderRadius: 16,
            padding: 12,
            boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
          }}>
            {selectedPicture.render(regionColors)}
          </div>

          <div style={s.completionEmoji}>🎉</div>
          <div style={s.completionTitle}>你完成咗一幅畫！</div>
          <div style={s.completionStars}>⭐⭐⭐⭐⭐</div>

          <button
            style={s.saveBtn}
            onClick={handleDownload}
            disabled={syncing}
          >
            📸 儲存圖畫
          </button>

          <button
            style={{
              ...s.homeBtn,
              display: 'inline-block',
              width: 'auto',
              margin: '0 6px',
              padding: '14px 24px',
            }}
            onClick={handleBackToSelector}
          >
            🔙 揀另一幅畫
          </button>

          <button
            style={{
              ...s.homeBtn,
              display: 'inline-block',
              width: 'auto',
              margin: '0 6px',
              padding: '14px 24px',
            }}
            onClick={() => navigate('/multiplication')}
          >
            🏠 返回
          </button>
        </div>
      </div>
    )
  }

  /* ══════════════════════════════════════════════════════════════
     RENDER: Coloring Screen
     ══════════════════════════════════════════════════════════════ */
  const currentRegion = selectedPicture.regions[currentRegionIndex]
  const coloredCount = Object.keys(regionColors).length

  return (
    <div style={s.container}>
      {/* Header */}
      <div style={s.header}>
        <button style={s.backBtn} onClick={handleBackToSelector}>
          ← 揀畫
        </button>
        <h2 style={s.title}>
          {selectedPicture.emoji} {selectedPicture.name}
        </h2>
        <div style={{ fontSize: 16, fontWeight: 700, color: '#667eea' }}>
          {coloredCount}/10
        </div>
      </div>

      {/* Region progress dots */}
      <div style={s.regionProgress}>
        {selectedPicture.regions.map((reg, i) => {
          const isColored = regionColors[reg.id] != null
          const isActive = i === currentRegionIndex
          return (
            <div
              key={reg.id}
              style={{
                ...s.regionDot,
                background: isColored ? reg.color : '#E0E0E0',
                ...(isActive ? s.regionDotActive : {}),
              }}
              title={`區域 ${i + 1}: ${reg.label}`}
            />
          )
        })}
      </div>

      {/* Coloring Area */}
      <div style={s.coloringArea}>
        {/* Left: SVG */}
        <div style={s.svgWrapper}>
          <div ref={svgRef} style={s.svgInner}>
            {selectedPicture.render(regionColors)}
          </div>
        </div>

        {/* Right: Question Card */}
        <div style={s.questionCard}>
          {currentQuestion ? (
            <>
              <div style={s.questionText}>
                {currentQuestion.text}
              </div>
              <div style={s.optionGrid}>
                {currentQuestion.options.map((opt, i) => {
                  let btnStyle = { ...s.optionBtn }
                  if (answerState === 'correct' && opt === currentQuestion.answer) {
                    btnStyle = {
                      ...btnStyle,
                      borderColor: '#4caf50',
                      background: '#e8f5e9',
                      color: '#2e7d32',
                      transform: 'scale(1.05)',
                    }
                  } else if (answerState === 'wrong' && opt === currentQuestion.answer) {
                    // Show the correct answer highlighted
                    btnStyle = {
                      ...btnStyle,
                      borderColor: '#4caf50',
                      background: '#e8f5e9',
                      color: '#2e7d32',
                    }
                  }
                  return (
                    <button
                      key={i}
                      style={btnStyle}
                      onClick={() => handleAnswer(opt)}
                      disabled={answerState === 'correct'}
                    >
                      {opt}
                    </button>
                  )
                })}
              </div>
              <div
                style={{
                  ...s.feedback,
                  ...(answerState === 'correct' ? s.feedbackCorrect : {}),
                  ...(answerState === 'wrong' ? s.feedbackWrong : {}),
                }}
              >
                {answerState === 'correct' && '✅ 答啱！'}
                {answerState === 'wrong' && '再試試 💪'}
              </div>
            </>
          ) : (
            <div style={{ fontSize: 18, color: '#7f8c8d', fontWeight: 600 }}>
              準備問題...
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
