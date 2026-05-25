/**
 * Validate the question bank structure and completeness.
 * Run: node src/utils/validateQuestions.js
 * Expected to be run from project root.
 */

import questions from '../data/questions.js'

const REQUIRED_FIELDS = [
  'id', 'topic', 'difficulty', 'question', 'options', 'answer',
  'hint', 'explanation', 'explanationSteps', 'commonMistake', 'teacherTip',
]

const GUIDED_REVIEW_FIELDS = ['keywords', 'method', 'methodHint', 'steps']
const STEP_FIELDS = ['prompt', 'type', 'options', 'answer', 'feedback']

const TOPICS = ['numbers', 'measurement', 'shapes', 'data']
const DIFFICULTIES = ['easy', 'medium', 'hard']
const MIN_TOTAL = 200

const errors = []
const warnings = []

// ── 1. Total count ──
if (questions.length < MIN_TOTAL) {
  errors.push(`題目總數不足：${questions.length} / ${MIN_TOTAL}`)
} else {
  console.log(`✅ 題目總數：${questions.length}（>= ${MIN_TOTAL}）`)
}

// ── 2. Topic distribution ──
const topics = {}
TOPICS.forEach((t) => (topics[t] = 0))
const difficulties = {}
DIFFICULTIES.forEach((d) => (difficulties[d] = 0))
const ids = new Set()

questions.forEach((q, i) => {
  const idx = i + 1

  // Check required fields
  REQUIRED_FIELDS.forEach((field) => {
    if (q[field] === undefined || q[field] === null || q[field] === '') {
      errors.push(`#${idx} (id=${q.id})：缺少 required field "${field}"`)
    }
  })

  // Check topic
  if (!TOPICS.includes(q.topic)) {
    errors.push(`#${idx} (id=${q.id})：無效 topic "${q.topic}"`)
  } else {
    topics[q.topic]++
  }

  // Check difficulty
  if (!DIFFICULTIES.includes(q.difficulty)) {
    errors.push(`#${idx} (id=${q.id})：無效 difficulty "${q.difficulty}"`)
  } else {
    difficulties[q.difficulty]++
  }

  // Check answer in options
  if (q.options && q.answer && !q.options.includes(q.answer)) {
    errors.push(`#${idx} (id=${q.id})：answer "${q.answer}" 唔在 options 入面 [${q.options.join(', ')}]`)
  }

  // Check duplicate IDs
  if (ids.has(q.id)) {
    errors.push(`#${idx}：重複 id "${q.id}"`)
  }
  ids.add(q.id)

  // Check guidedReview
  if (q.guidedReview) {
    GUIDED_REVIEW_FIELDS.forEach((field) => {
      if (q.guidedReview[field] === undefined || q.guidedReview[field] === null) {
        warnings.push(`#${idx} (id=${q.id})：guidedReview 缺少 "${field}"`)
      }
    })

    // Check steps
    if (Array.isArray(q.guidedReview.steps)) {
      q.guidedReview.steps.forEach((step, si) => {
        STEP_FIELDS.forEach((sf) => {
          if (step[sf] === undefined || step[sf] === null) {
            warnings.push(`#${idx} (id=${q.id})：guidedReview.step[${si}] 缺少 "${sf}"`)
          }
        })
        if (step.options && step.answer && !step.options.includes(step.answer)) {
          errors.push(`#${idx} (id=${q.id})：guidedReview.step[${si}] answer 唔在 options 入面`)
        }
      })
    } else {
      warnings.push(`#${idx} (id=${q.id})：guidedReview.steps 唔係 array`)
    }
  } else {
    warnings.push(`#${idx} (id=${q.id})：缺少 guidedReview`)
  }

  // Check explanationSteps
  if (!Array.isArray(q.explanationSteps) || q.explanationSteps.length < 2) {
    warnings.push(`#${idx} (id=${q.id})：explanationSteps 少於 2 步`)
  }
})

// ── Topic summary ──
console.log('\n📊 主題分佈：')
TOPICS.forEach((t) => {
  const ok = t === 'numbers' ? topics[t] >= 60 :
             t === 'measurement' ? topics[t] >= 50 :
             topics[t] >= 45
  console.log(`  ${ok ? '✅' : '❌'} ${t}: ${topics[t]}題`)
  if (!ok) warnings.push(`${t} 題數不足：${topics[t]}`)
})

console.log('\n📊 難度分佈：')
DIFFICULTIES.forEach((d) => {
  console.log(`  ${d}: ${difficulties[d]}題`)
})

// ── Summary ──
console.log('\n═══════════════════════════════════')
if (errors.length > 0) {
  console.log(`❌ 錯誤 (${errors.length} 個)：`)
  errors.slice(0, 20).forEach((e) => console.log(`  - ${e}`))
  if (errors.length > 20) console.log(`  ... 仲有 ${errors.length - 20} 個錯誤`)
} else {
  console.log('✅ 0 個錯誤')
}

if (warnings.length > 0) {
  console.log(`\n⚠️ 警告 (${warnings.length} 個)：`)
  warnings.slice(0, 20).forEach((w) => console.log(`  - ${w}`))
  if (warnings.length > 20) console.log(`  ... 仲有 ${warnings.length - 20} 個警告`)
} else {
  console.log('✅ 0 個警告')
}

// Exit code
process.exit(errors.length > 0 ? 1 : 0)
