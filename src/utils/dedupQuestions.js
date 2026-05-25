/**
 * Deduplicate questions by ID. Keeps the first occurrence.
 * Run: node src/utils/dedupQuestions.js
 */
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const inputPath = path.resolve(__dirname, '../data/questions.js')

const raw = fs.readFileSync(inputPath, 'utf-8')
// Extract the array content
const match = raw.match(/const questions\s*=\s*(\[[\s\S]*\])\s*\nexport default questions/)
if (!match) {
  console.error('Could not parse questions array')
  process.exit(1)
}

// eslint-disable-next-line no-eval
const questions = eval(match[1])

console.log(`Total before dedup: ${questions.length}`)

// Dedup by id
const seen = new Set()
const deduped = []
const removed = []
questions.forEach(q => {
  if (seen.has(q.id)) {
    removed.push(q.id)
  } else {
    seen.add(q.id)
    deduped.push(q)
  }
})

console.log(`Removed ${removed.length} duplicates: ${removed.join(', ')}`)
console.log(`Total after dedup: ${deduped.length}`)

// Write back
const output = raw.replace(
  /const questions\s*=\s*(\[[\s\S]*\])\s*\nexport default questions/,
  `const questions = ${JSON.stringify(deduped, null, 2)}\n\nexport default questions`
)

fs.writeFileSync(inputPath, output, 'utf-8')
console.log('✅ Written deduplicated questions.js')
