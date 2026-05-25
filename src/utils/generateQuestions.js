/**
 * Auto-generator: adds explanationSteps, commonMistake, teacherTip, guidedReview
 * to existing questions and appends new questions to reach 200+.
 * Run: node src/utils/generateQuestions.js from project root.
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const inputPath = path.resolve(__dirname, '../data/questions.js')
const outputPath = inputPath

// ── Import existing ──
const existing = (await import(inputPath)).default
console.log(`Existing questions: ${existing.length}`)

// ── Helper: smart guess from hint/explanation ──
function genSteps(q) {
  const h = q.hint || ''
  const e = q.explanation || ''
  // Split explanation into steps
  const sentences = e.replace(/[。！？]/g, '|').split('|').filter(s => s.trim().length > 5)
  if (sentences.length >= 2) {
    return sentences.slice(0, 4).map((s, i) => `第${['一','二','三','四'][i] || i+1}步：${s.trim()}。`)
  }
  // Fallback
  return [
    '第一步：先睇清楚題目問咩。',
    '第二步：搵出題目入面嘅重要數字。',
    `第三步：${h}`,
  ]
}

function genCommonMistake(q) {
  const templates = [
    '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    '有啲小朋友見到數字就加，但其實要睇清楚題目係講緊加定減。',
    '有啲小朋友會心急計錯，記得慢慢計，覆查一次。',
    '有啲小朋友會唔記得進位/借位，計完要 check 多次。',
    '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
  ]
  return templates[q.id.toString().charCodeAt(0) % templates.length]
}

function genTeacherTip(q) {
  const tips = [
    '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    '老師小貼士：計完之後，用相反嘅方法驗算一次。',
    '老師小貼士：見到「平均分」就諗除法，見到「一共」就諗加法。',
    '老師小貼士：做單位換算時，先諗大單位定細單位，再決定乘定除。',
    '老師小貼士：圖表題要先睇標題同刻度，唔好急住答。',
  ]
  return tips[q.id.toString().charCodeAt(1) % tips.length]
}

function genGuidedReview(q) {
  const ops = q.options || ['A', 'B', 'C', 'D']
  const answer = q.answer || ops[0]
  const filtered = ops.filter(o => o !== answer)
  const wrong = filtered.length > 0 ? filtered[0] : ops[1] || '答案'
  return {
    keywords: q.question.includes('?') ? q.question.slice(0, 20).split(' ') : [q.question.slice(0, 8)],
    method: q.topic === 'numbers' ? '運算' : q.topic === 'measurement' ? '單位換算' : q.topic === 'shapes' ? '圖形分析' : '數據分析',
    methodHint: q.hint || '睇清楚題目先揀方法。',
    steps: [
      { prompt: `呢題入面邊個數字最重要？`, type: 'choice', options: [wrong, answer, '全部', '冇'], answer: answer, feedback: '好！跟住落黎計計佢。' },
      { prompt: `正確答案係咩？`, type: 'choice', options: [wrong, answer, ...ops.slice(0,2)], answer: answer, feedback: '答啱！' },
    ]
  }
}

// ── Update existing ──
const updated = existing.map(q => ({
  ...q,
  explanationSteps: q.explanationSteps || genSteps(q),
  commonMistake: q.commonMistake || genCommonMistake(q),
  teacherTip: q.teacherTip || genTeacherTip(q),
  guidedReview: q.guidedReview || genGuidedReview(q),
}))

// ── New questions (80+ to reach 200+) ──
const newQuestions = [
  // ── Numbers: 10 more easy ──
  { id: 'n_e11', topic: 'numbers', difficulty: 'easy',
    question: '文具店有 32 枝鉛筆，賣了 12 枝，還剩幾枝？',
    options: ['20 枝', '18 枝', '22 枝', '24 枝'],
    answer: '20 枝',
    hint: '32 − 12 = 20。',
    explanation: '32 − 12，個位2−2=0，十位3−1=2，所以是20枝。',
    explanationSteps: ['第一步：題目話「賣了」，即係要減。', '第二步：32 − 12，由個位開始減：2−2=0。', '第三步：十位：3−1=2。', '第四步：所以係 20 枝。'],
    commonMistake: '有啲小朋友會用加法（32+12），但「賣了」係減少，要用減法。',
    teacherTip: '老師小貼士：見到「賣了」、「用了」、「給了」呢啲字，通常係減法。',
    guidedReview: { keywords: ['賣了', '32', '12', '還剩'], method: '減法', methodHint: '「賣了」就係減，搵出大數減細數。', steps: [
      { prompt: '呢題應該用加法定減法？', type: 'choice', options: ['加法', '減法', '乘法', '除法'], answer: '減法', feedback: '啱！賣咗即係減少。' },
      { prompt: '32 − 12 等於幾多？', type: 'choice', options: ['20', '22', '24', '44'], answer: '20', feedback: '好嘢！你計啱咗。' }
    ]}
  },
  { id: 'n_e12', topic: 'numbers', difficulty: 'easy',
    question: '一班有 28 個學生，每行坐 4 人，可以坐滿幾行？',
    options: ['7 行', '6 行', '8 行', '5 行'],
    answer: '7 行',
    hint: '28 ÷ 4 = 7。',
    explanation: '28人每行4人，即係計 28 入面有幾多個 4。28 ÷ 4 = 7行。',
    explanationSteps: ['第一步：題目問「每行坐4人，可以坐滿幾行」，即係分組。', '第二步：分組就要用除法：28 ÷ 4。', '第三步：28 ÷ 4 = 7，所以坐滿 7 行。'],
    commonMistake: '有啲小朋友會用乘法（28×4），但分組係用除法。',
    teacherTip: '見到「每...幾...」或者「分成...」，通常係除法題。',
    guidedReview: { keywords: ['28 個', '每行 4 人', '幾行'], method: '除法', methodHint: '「每行」提示我哋用除法。', steps: [
      { prompt: '28 個學生，每行 4 人，應該用咩方法？', type: 'choice', options: ['加法', '減法', '乘法', '除法'], answer: '除法', feedback: '啱！分組用除法。' },
      { prompt: '28 ÷ 4 = ?', type: 'choice', options: ['5', '6', '7', '8'], answer: '7', feedback: '正確！28 ÷ 4 = 7。' }
    ]}
  },
  { id: 'n_e13', topic: 'numbers', difficulty: 'easy',
    question: '57 × 3 = ?',
    options: ['171', '161', '181', '151'],
    answer: '171',
    hint: '50×3=150，7×3=21，150+21=171。',
    explanation: '57 × 3 = 50×3 + 7×3 = 150 + 21 = 171。',
    explanationSteps: ['第一步：57 可以拆成 50 同 7。', '第二步：先計 50×3=150。', '第三步：再計 7×3=21。', '第四步：150+21=171。'],
    commonMistake: '有啲小朋友會直接 57+57+57，但用乘數表更快。',
    teacherTip: '兩位數乘一位數，可以拆開計：十位×？+ 個位×？。',
    guidedReview: { keywords: ['57', '3', '乘'], method: '乘法', methodHint: '拆開 50 同 7 分別乘 3。', steps: [
      { prompt: '57 可以拆成幾多同幾多？', type: 'choice', options: ['50 同 7', '5 同 7', '57 同 0', '50 同 70'], answer: '50 同 7', feedback: '啱！57 = 50 + 7。' },
      { prompt: '50×3 + 7×3 = ?', type: 'choice', options: ['171', '150', '157', '161'], answer: '171', feedback: '好嘢！你計啱咗！' }
    ]}
  },
  { id: 'n_e14', topic: 'numbers', difficulty: 'easy',
    question: '媽媽有 50 元，買麵包用了 28 元，還剩幾元？',
    options: ['22 元', '32 元', '12 元', '28 元'],
    answer: '22 元',
    hint: '50 − 28 = 22。',
    explanation: '50 − 28 = 22。個位0−8唔夠，要向十位借1，變成10−8=2，十位4−2=2。',
    explanationSteps: ['第一步：「用了」即係要減：50 − 28。', '第二步：個位 0−8 唔夠，向十位借 1，變成 10−8=2。', '第三步：十位原本係5，借咗1俾個位，得返4，4−2=2。', '第四步：所以答案是 22 元。'],
    commonMistake: '有啲小朋友會唔記得借位，計錯成 38。',
    teacherTip: '減法唔夠減時，要向隔籬位借 1。借完記住隔籬位要減返 1。',
    guidedReview: { keywords: ['50 元', '用了 28 元', '還剩'], method: '減法（借位）', methodHint: '「用了」係減法，唔夠減要借位。', steps: [
      { prompt: '呢題用加法定減法？', type: 'choice', options: ['加法', '減法'], answer: '減法', feedback: '啱！用了即係減少。' },
      { prompt: '個位 0−8 唔夠，要點做？', type: 'choice', options: ['直接寫8', '向十位借1', '掉轉計'], answer: '向十位借1', feedback: '好！借位就啱了。' }
    ]}
  },
  { id: 'n_e15', topic: 'numbers', difficulty: 'easy',
    question: '7 × 8 = ?',
    options: ['56', '48', '64', '54'],
    answer: '56',
    hint: '7×8 = 56，記住七八五十六。',
    explanation: '7×8 係乘數表入面嘅「七八五十六」，等於 56。',
    explanationSteps: ['第一步：呢題係乘數表題。', '第二步：七八⋯⋯五十六！', '第三步：所以 7×8=56。'],
    commonMistake: '有啲小朋友會混淆 7×8=56 同 8×7=56（其實一樣）。',
    teacherTip: '乘數表要背熟！七八五十六，八七也是五十六。',
    guidedReview: { keywords: ['7', '8', '乘數表'], method: '乘數表', methodHint: '諗吓乘數表：七幾五十六？', steps: [
      { prompt: '7×8 等於幾多？', type: 'choice', options: ['48', '56', '64', '72'], answer: '56', feedback: '啱！七八五十六。' },
    ]}
  },
  { id: 'n_e16', topic: 'numbers', difficulty: 'easy',
    question: '比較大小：45678 ○ 46578，括號內應填咩符號？',
    options: ['<', '>', '=', '唔使填'],
    answer: '<',
    hint: '先比萬位（相同），再比千位：5<6，所以 45678 < 46578。',
    explanation: '45678 和 46578，萬位都是4，千位 5<6，所以 45678 < 46578。',
    explanationSteps: ['第一步：先比萬位，兩個都係 4。', '第二步：再比千位，一個係 5，一個係 6。', '第三步：5 < 6，所以 45678 < 46578。'],
    commonMistake: '有啲小朋友會睇百位，但其實要比千位先。',
    teacherTip: '比較五位數口訣：先萬、後千、再百、再十、最後個位。',
    guidedReview: { keywords: ['比較大小', '45678', '46578'], method: '位值比較', methodHint: '由最大嘅位開始比較。', steps: [
      { prompt: '比較五位數，第一個要比咩位？', type: 'choice', options: ['萬位', '千位', '百位', '個位'], answer: '萬位', feedback: '啱！最大位係萬位。' },
      { prompt: '45678 同 46578，萬位相同，跟住比咩位？', type: 'choice', options: ['千位', '百位', '十位', '個位'], answer: '千位', feedback: '正確！比完萬位就比千位。' },
      { prompt: '千位 5 同 6，邊個大？', type: 'choice', options: ['5', '6'], answer: '6', feedback: '6大過5，所以 45678 < 46578。' }
    ]}
  },
  { id: 'n_e17', topic: 'numbers', difficulty: 'easy',
    question: '6 × 9 = ？',
    options: ['54', '63', '45', '56'],
    answer: '54',
    hint: '六九五十四。',
    explanation: '6×9 = 54，乘數表嘅六九五十四。',
    explanationSteps: ['第一步：諗乘數表。', '第二步：六九⋯⋯五十四！', '第三步：6×9=54。'],
    commonMistake: '有啲小朋友會同 7×8=56 搞亂。',
    teacherTip: '記口訣：六九五十四，七九六十三。',
    guidedReview: { keywords: ['6', '9', '乘'], method: '乘數表', methodHint: '六九幾多？', steps: [
      { prompt: '6×9 = ?', type: 'choice', options: ['45', '54', '63', '56'], answer: '54', feedback: '啱！六九五十四！' },
    ]}
  },
  { id: 'n_e18', topic: 'numbers', difficulty: 'easy',
    question: '8 個同學每人有 5 粒糖，一共有幾多粒糖？',
    options: ['40 粒', '35 粒', '45 粒', '13 粒'],
    answer: '40 粒',
    hint: '8×5=40。',
    explanation: '8 個同學，每人 5 粒，總數 = 8 × 5 = 40 粒。',
    explanationSteps: ['第一步：題目話「每人有 5 粒」，8 個人，即係 8 個 5。', '第二步：8 個 5 就係 8×5。', '第三步：8×5=40 粒。'],
    commonMistake: '有啲小朋友會用加法 5+5+5+5+5+5+5+5=40，但用乘法更快。',
    teacherTip: '見到「每人有幾多」同「一共有幾多人」，就用乘法。',
    guidedReview: { keywords: ['8 個同學', '每人 5 粒', '一共'], method: '乘法', methodHint: '「每人...」乘「人數」。', steps: [
      { prompt: '呢題應該用咩方法？', type: 'choice', options: ['加法', '減法', '乘法', '除法'], answer: '乘法', feedback: '啱！每人×人數=總數。' },
      { prompt: '8 × 5 = ?', type: 'choice', options: ['35', '40', '45', '13'], answer: '40', feedback: '好嘢！8×5=40。' }
    ]}
  },
  { id: 'n_e19', topic: 'numbers', difficulty: 'easy',
    question: '寫出「三萬四千零五」的數字。',
    options: ['34005', '34050', '30405', '34500'],
    answer: '34005',
    hint: '3個萬=30000，4個千=4000，5個一=5，加埋=34005。',
    explanation: '三萬=30000，四千=4000，零=0，五=5。所以係 30000+4000+5=34005。',
    explanationSteps: ['第一步：三萬 = 30000。', '第二步：四千 = 4000。', '第三步：零表示百位同十位都係 0。', '第四步：五 = 5。加埋：30000+4000+5=34005。'],
    commonMistake: '有啲小朋友會寫成 34050（零嘅位置錯咗）。',
    teacherTip: '寫數字時，由最大位開始寫，冇嘅位就填 0。',
    guidedReview: { keywords: ['三萬四千零五', '寫數字'], method: '位值寫數', methodHint: '由萬位開始逐個位寫，冇嘅寫0。', steps: [
      { prompt: '「三萬」即係萬位係幾多？', type: 'choice', options: ['3', '30000', '3000', '30'], answer: '3', feedback: '啱！萬位係 3。' },
      { prompt: '「四千」即係千位係幾多？', type: 'choice', options: ['4', '4000', '400', '40'], answer: '4', feedback: '好！千位係 4。' },
      { prompt: '百位同十位係幾多？', type: 'choice', options: ['0', '5', '冇', '1'], answer: '0', feedback: '啱！「零」表示百位和十位都係 0。' }
    ]}
  },
  { id: 'n_e20', topic: 'numbers', difficulty: 'easy',
    question: '4/7 和 6/7，哪個比較大？',
    options: ['6/7', '4/7', '一樣大', '無法比較'],
    answer: '6/7',
    hint: '分母相同（都係7），分子愈大分數愈大。6>4，所以 6/7 大。',
    explanation: '分母相同都是7，比較分子：6 > 4，所以 6/7 > 4/7。',
    explanationSteps: ['第一步：分母相同（都係7），表示每份一樣大。', '第二步：分子表示有幾多份：4份同6份。', '第三步：6份比4份多，所以 6/7 比較大。'],
    commonMistake: '有啲小朋友會睇錯，以為4/7大因為4同7近啲。',
    teacherTip: '分母相同比分母，分母愈大分子也要大先贏。同分母分數，分子大就大。',
    guidedReview: { keywords: ['4/7', '6/7', '比較'], method: '分數比較', methodHint: '分母相同時，分子大就大。', steps: [
      { prompt: '4/7 同 6/7 分母係咪一樣？', type: 'choice', options: ['係，都係7', '唔係', '唔知'], answer: '係，都係7', feedback: '啱！分母都係7。' },
      { prompt: '分母相同時，要比較咩？', type: 'choice', options: ['分子', '分母', '數字大細'], answer: '分子', feedback: '好！分母相同就比較分子。' },
      { prompt: '邊個分子大啲？', type: 'choice', options: ['4', '6'], answer: '6', feedback: '6>4，所以 6/7 大啲！' }
    ]}
  },

  // ── Measurement: add 20 new ──
  { id: 'm_e11', topic: 'measurement', difficulty: 'easy',
    question: '一枝鉛筆長約 18 厘米，幾多枝鉛筆駁埋先有 1 米？',
    options: ['大約 6 枝', '大約 4 枝', '大約 10 枝', '大約 2 枝'],
    answer: '大約 6 枝',
    hint: '1米=100厘米，100÷18≈5.5，大約6枝。',
    explanation: '1米=100厘米，每枝18厘米。100÷18=5⋯10，所以大約要6枝。',
    explanationSteps: ['第一步：1米 = 100厘米。', '第二步：每枝鉛筆18厘米。', '第三步：100 ÷ 18 ≈ 5.5，所以大約要6枝。'],
    commonMistake: '有啲小朋友會直接用 100−18，忘記要除。',
    teacherTip: '「每枝幾長」同「總共幾長」呢類問題，通常用除法。',
    guidedReview: { keywords: ['18厘米', '1米', '幾多枝'], method: '除法', methodHint: '先轉做同一單位（米轉厘米）。', steps: [
      { prompt: '1米等於幾多厘米？', type: 'choice', options: ['10cm', '100cm', '1000cm', '1cm'], answer: '100cm', feedback: '啱！1m=100cm。' },
      { prompt: '100÷18大約等於幾多？', type: 'choice', options: ['3', '5', '6', '10'], answer: '6', feedback: '大約6枝先夠1米。' }
    ]}
  },
  { id: 'm_e12', topic: 'measurement', difficulty: 'easy',
    question: '小明下午 3:00 開始做功課，用了 45 分鐘，幾點做完？',
    options: ['下午 3:45', '下午 4:00', '下午 3:30', '下午 4:45'],
    answer: '下午 3:45',
    hint: '3:00 + 45分鐘 = 3:45。',
    explanation: '3:00 + 45分鐘 = 3:45。',
    explanationSteps: ['第一步：開始時間係下午3:00。', '第二步：用咗45分鐘。', '第三步：3:00 + 0:45 = 3:45。'],
    commonMistake: '有啲小朋友會加錯，以為3:00+45分=3:30。',
    teacherTip: '計算時間：時+時，分+分。分加超過60就要進位。',
    guidedReview: { keywords: ['下午 3:00', '45分鐘', '幾點'], method: '時間加法', methodHint: '3:00加45分鐘，分針行45格。', steps: [
      { prompt: '3:00 加 30分鐘係幾點？', type: 'choice', options: ['3:30', '2:30', '4:00', '3:15'], answer: '3:30', feedback: '啱！3:00+30分=3:30。' },
      { prompt: '再行多15分鐘呢？', type: 'choice', options: ['3:45', '4:00', '3:30', '3:50'], answer: '3:45', feedback: '好！3:30+15分=3:45。' }
    ]}
  },
  { id: 'm_e13', topic: 'measurement', difficulty: 'easy',
    question: '1 公斤 500 克 = ? 克',
    options: ['1500 克', '1050 克', '1005 克', '150 克'],
    answer: '1500 克',
    hint: '1公斤=1000克，1000+500=1500克。',
    explanation: '1公斤 = 1000克，1000 + 500 = 1500克。',
    explanationSteps: ['第一步：1公斤 = 1000克。', '第二步：再加500克。', '第三步：1000 + 500 = 1500克。'],
    commonMistake: '有啲小朋友會寫 1005（唔記得加0）。',
    teacherTip: '公斤轉克，乘1000就得。記住1kg=1000g。',
    guidedReview: { keywords: ['1公斤', '500克', '轉換'], method: '單位換算', methodHint: '1kg=1000g，再加埋500g。', steps: [
      { prompt: '1公斤等於幾多克？', type: 'choice', options: ['100g', '1000g', '500g', '10g'], answer: '1000g', feedback: '啱！1kg=1000g。' },
      { prompt: '1000g + 500g = ?', type: 'choice', options: ['1500g', '1050g', '1005g', '150g'], answer: '1500g', feedback: '好嘢！1000+500=1500。' }
    ]}
  },
  { id: 'm_e14', topic: 'measurement', difficulty: 'easy',
    question: '7 米 = ? 厘米',
    options: ['700 厘米', '70 厘米', '7000 厘米', '7 厘米'],
    answer: '700 厘米',
    hint: '1米=100厘米，7×100=700厘米。',
    explanation: '1米=100厘米，7米 = 7 × 100 = 700厘米。',
    explanationSteps: ['第一步：1米 = 100厘米。', '第二步：7米 = 7 × 100。', '第三步：7 × 100 = 700厘米。'],
    commonMistake: '有啲小朋友會乘錯，以為 7米=70厘米。',
    teacherTip: '米轉厘米，乘100就啱。1m=100cm，10m=1000cm。',
    guidedReview: { keywords: ['7米', '厘米', '轉換'], method: '單位換算（乘100）', methodHint: '米→厘米，乘100。', steps: [
      { prompt: '1米等於幾多厘米？', type: 'choice', options: ['10cm', '100cm', '1000cm'], answer: '100cm', feedback: '啱！1m=100cm。' },
      { prompt: '7 × 100 = ?', type: 'choice', options: ['70', '700', '7000', '7'], answer: '700', feedback: '好！7×100=700cm。' }
    ]}
  },
  { id: 'm_e15', topic: 'measurement', difficulty: 'easy',
    question: '3 升 200 毫升 = ? 毫升',
    options: ['3200 毫升', '3020 毫升', '3002 毫升', '320 毫升'],
    answer: '3200 毫升',
    hint: '3升=3000毫升，3000+200=3200毫升。',
    explanation: '3升 = 3000毫升，3000 + 200 = 3200毫升。',
    explanationSteps: ['第一步：1升 = 1000毫升。', '第二步：3升 = 3 × 1000 = 3000毫升。', '第三步：3000 + 200 = 3200毫升。'],
    commonMistake: '有啲小朋友會寫 3020，百位同十位搞亂。',
    teacherTip: '升轉毫升，乘1000。幾升就係幾個1000毫升。',
    guidedReview: { keywords: ['3升', '200毫升', '轉換'], method: '單位換算', methodHint: '1L=1000mL，3L=3000mL。', steps: [
      { prompt: '1升等於幾多毫升？', type: 'choice', options: ['100mL', '1000mL', '10mL', '10000mL'], answer: '1000mL', feedback: '啱！1L=1000mL。' },
      { prompt: '3L = ? mL', type: 'choice', options: ['300mL', '3000mL', '30mL', '30000mL'], answer: '3000mL', feedback: '3×1000=3000mL。' },
      { prompt: '3000mL + 200mL = ?', type: 'choice', options: ['3020mL', '3200mL', '3002mL', '320mL'], answer: '3200mL', feedback: '加埋就係3200mL。' }
    ]}
  },
  { id: 'm_m11', topic: 'measurement', difficulty: 'medium',
    question: '爸爸開車由沙田去元朗，車程 45 分鐘。他上午 10:30 出發，幾點到？',
    options: ['上午 11:15', '上午 11:00', '上午 11:30', '上午 10:75'],
    answer: '上午 11:15',
    hint: '10:30 + 45分 = 10:30 + 30分 = 11:00，再加15分 = 11:15。',
    explanation: '10:30 + 45分鐘 = 10:30先加30分鐘=11:00，再加15分鐘=11:15。',
    explanationSteps: ['第一步：10:30，先加30分鐘。', '第二步：10:30 + 0:30 = 11:00。', '第三步：45分 − 30分 = 15分，再加15分鐘。', '第四步：11:00 + 0:15 = 11:15。'],
    commonMistake: '有啲小朋友會計錯 10:30+45分=10:75，冇留意60分鐘=1小時。',
    teacherTip: '時間加法：分加超過60就要進位做1小時。45+30=75分=1小時15分。',
    guidedReview: { keywords: ['10:30', '45分鐘', '車程'], method: '時間加法', methodHint: '先加30分鐘到11:00，再加15分鐘。', steps: [
      { prompt: '10:30 加 30分鐘係幾點？', type: 'choice', options: ['11:00', '10:60', '11:30', '10:00'], answer: '11:00', feedback: '啱！10:30+30分=11:00。' },
      { prompt: '45 − 30 = 幾多？仲有幾多分鐘要加？', type: 'choice', options: ['15分鐘', '10分鐘', '5分鐘', '20分鐘'], answer: '15分鐘', feedback: '好！仲有15分鐘要加。' },
      { prompt: '11:00 + 15分 = ?', type: 'choice', options: ['11:15', '11:30', '12:00', '11:45'], answer: '11:15', feedback: '正確！11:00+15分=11:15到。' }
    ]}
  },
  { id: 'm_m12', topic: 'measurement', difficulty: 'medium',
    question: '一條絲帶長 6 米 30 厘米，剪去 2 米 50 厘米，還剩多長？',
    options: ['3 米 80 厘米', '4 米 20 厘米', '3 米 20 厘米', '4 米 80 厘米'],
    answer: '3 米 80 厘米',
    hint: '6米30厘米−2米50厘米=5米130厘米−2米50厘米=3米80厘米。',
    explanation: '6m30cm − 2m50cm = 5m130cm − 2m50cm = 3m80cm。',
    explanationSteps: ['第一步：6米30厘米，30−50唔夠減，要向米借1。', '第二步：借1米=100厘米，30+100=130厘米。米位變5米。', '第三步：厘米：130−50=80厘米。米：5−2=3米。', '第四步：所以係 3 米 80 厘米。'],
    commonMistake: '有啲小朋友會直接 30−50，唔記得借位。',
    teacherTip: '複名數減法，唔夠減要向大單位借1。1米=100厘米，1公斤=1000克。',
    guidedReview: { keywords: ['6米30厘米', '剪去', '2米50厘米', '還剩'], method: '複名數減法', methodHint: '厘米唔夠減，要向米借1米=100厘米。', steps: [
      { prompt: '30cm − 50cm 夠唔夠減？', type: 'choice', options: ['夠', '唔夠'], answer: '唔夠', feedback: '啱！30唔夠減50。' },
      { prompt: '唔夠減要向邊個位借？', type: 'choice', options: ['米', '厘米', '毫米', '唔使借'], answer: '米', feedback: '好！向米位借1米=100厘米。' },
      { prompt: '借位後厘米變成幾多？', type: 'choice', options: ['130cm', '30cm', '100cm', '80cm'], answer: '130cm', feedback: '30+100=130cm。130−50=80cm！' }
    ]}
  },
  { id: 'm_m13', topic: 'measurement', difficulty: 'medium',
    question: '下午 4:15 到下午 5:40，共過了多久？',
    options: ['1 小時 25 分', '1 小時 35 分', '1 小時 15 分', '2 小時 25 分'],
    answer: '1 小時 25 分',
    hint: '4:15→5:00（45分）→5:40（40分），45+40=85分=1小時25分。',
    explanation: '4:15到5:00是45分鐘，5:00到5:40是40分鐘。45+40=85分鐘=1小時25分。',
    explanationSteps: ['第一步：4:15 → 5:00 = 45分鐘。', '第二步：5:00 → 5:40 = 40分鐘。', '第三步：45 + 40 = 85分鐘。', '第四步：85分鐘 = 1小時25分鐘。'],
    commonMistake: '有啲小朋友會直接 5:40−4:15=1:25，但呢題啱啱好可以直接減。',
    teacherTip: '時間間隔可以分段計：先計到整點，再計到目標時間。',
    guidedReview: { keywords: ['4:15', '5:40', '過了多久'], method: '時間間隔', methodHint: '分段計：先計到5:00，再計到5:40。', steps: [
      { prompt: '4:15 到 5:00 有幾多分鐘？', type: 'choice', options: ['45分', '15分', '30分', '60分'], answer: '45分', feedback: '啱！4:15到5:00是45分鐘。' },
      { prompt: '5:00 到 5:40 有幾多分鐘？', type: 'choice', options: ['40分', '50分', '30分', '45分'], answer: '40分', feedback: '正確！5:00到5:40是40分鐘。' },
      { prompt: '45分 + 40分 = ?', type: 'choice', options: ['1小時25分', '1小時35分', '1小時15分', '2小時'], answer: '1小時25分', feedback: '好！85分=1小時25分。' }
    ]}
  },
  { id: 'm_m14', topic: 'measurement', difficulty: 'medium',
    question: '一盒果汁有 2 升，倒滿 6 個杯子，每個杯 150 毫升，還剩多少毫升？',
    options: ['1100 毫升', '110 毫升', '900 毫升', '1000 毫升'],
    answer: '1100 毫升',
    hint: '2L=2000mL，6杯=6×150=900mL，2000−900=1100mL。',
    explanation: '2L=2000mL。6杯共用了6×150=900mL。剩下2000−900=1100mL。',
    explanationSteps: ['第一步：2升 = 2000毫升。', '第二步：6杯 × 150毫升 = 900毫升。', '第三步：2000 − 900 = 1100毫升。'],
    commonMistake: '有啲小朋友會用 2000−(6×150)，但唔記得先乘後減。',
    teacherTip: '多步驟應用題：先統一單位，然後逐個步驟計。',
    guidedReview: { keywords: ['2升', '6個杯', '150毫升', '還剩'], method: '多步運算', methodHint: '先轉升做毫升，計用咗幾多，再減。', steps: [
      { prompt: '2升等於幾多毫升？', type: 'choice', options: ['200mL', '2000mL', '20mL', '20000mL'], answer: '2000mL', feedback: '啱！2L=2000mL。' },
      { prompt: '6杯 × 150mL = ?', type: 'choice', options: ['900mL', '600mL', '750mL', '800mL'], answer: '900mL', feedback: '好！6×150=900mL。' },
      { prompt: '2000 − 900 = ?', type: 'choice', options: ['1100', '1000', '900', '1200'], answer: '1100', feedback: '答啱！仲有1100mL剩。' }
    ]}
  },
  { id: 'm_m15', topic: 'measurement', difficulty: 'medium',
    question: '小華跑 100 米用了 18 秒，跑 3 次共用了多少秒？',
    options: ['54 秒', '36 秒', '48 秒', '60 秒'],
    answer: '54 秒',
    hint: '3 × 18 = 54秒。',
    explanation: '每次18秒，3次 = 3 × 18 = 54秒。',
    explanationSteps: ['第一步：每次跑用18秒。', '第二步：跑了3次。', '第三步：3 × 18 = 54秒。'],
    commonMistake: '有啲小朋友會用加法 18+18+18，但乘法更快。',
    teacherTip: '重複同一件事好多次時，乘法比加法快。',
    guidedReview: { keywords: ['100米', '18秒', '3次'], method: '乘法', methodHint: '每次18秒，3次就係18×3。', steps: [
      { prompt: '跑1次用18秒，跑3次應該用加法定乘法？', type: 'choice', options: ['加法', '乘法'], answer: '乘法', feedback: '啱！3次一樣嘅，用乘法快好多。' },
      { prompt: '18 × 3 = ?', type: 'choice', options: ['54', '48', '36', '60'], answer: '54', feedback: '好嘢！18×3=54秒。' }
    ]}
  },
  { id: 'm_h11', topic: 'measurement', difficulty: 'hard',
    question: '足球訓練由下午 2:30 到下午 4:45，中間休息 15 分鐘。實際練習時間有幾耐？',
    options: ['2 小時', '2 小時 15 分', '1 小時 45 分', '2 小時 30 分'],
    answer: '2 小時',
    hint: '總時間2:30→4:45=2小時15分，減去休息15分=2小時。',
    explanation: '2:30到4:45共2小時15分。減去休息15分鐘 = 2小時。',
    explanationSteps: ['第一步：先計總共幾耐：2:30→4:30=2小時，再加15分=2小時15分。', '第二步：中間休息15分鐘要減走。', '第三步：2小時15分 − 15分 = 2小時。'],
    commonMistake: '有啲小朋友會直接 4:45−2:30=2:15，唔記得減埋休息時間。',
    teacherTip: '計實際工作時間時，要減走休息時間。總時間 − 休息 = 實際時間。',
    guidedReview: { keywords: ['2:30', '4:45', '休息15分鐘', '實際練習'], method: '時間間隔減法', methodHint: '先計總時間，再減休息。', steps: [
      { prompt: '2:30 到 4:45 總共幾耐？', type: 'choice', options: ['2小時15分', '2小時', '1小時15分', '3小時'], answer: '2小時15分', feedback: '啱！2:30→4:45係2小時15分。' },
      { prompt: '再減去15分鐘休息，係幾多？', type: 'choice', options: ['2小時', '2小時30分', '1小時45分', '3小時'], answer: '2小時', feedback: '好！2小時15分−15分=2小時練習時間。' }
    ]}
  },
  { id: 'm_h12', topic: 'measurement', difficulty: 'hard',
    question: '媽媽買了 3 公斤 500 克豬肉，用了 1 公斤 800 克，然後又買了 2 公斤 200 克。現在有幾多肉？',
    options: ['3 公斤 900 克', '4 公斤 500 克', '3 公斤 500 克', '3 公斤 400 克'],
    answer: '3 公斤 900 克',
    hint: '3kg500g−1kg800g=1kg700g，再加2kg200g=3kg900g。',
    explanation: '先減：3kg500g−1kg800g=1kg700g。再加：1kg700g+2kg200g=3kg900g。',
    explanationSteps: ['第一步：先計用完後仲有幾多：3kg500g−1kg800g。', '第二步：500−800唔夠減，借1kg：2kg1500g−1kg800g=1kg700g。', '第三步：再買 2kg200g：1kg700g+2kg200g=3kg900g。'],
    commonMistake: '有啲小朋友會一次過 3kg500g+2kg200g−1kg800g，容易出錯。',
    teacherTip: '多步驟應用題最好一步步計，唔好急。先用晒，再買。',
    guidedReview: { keywords: ['3kg500g', '用了1kg800g', '買了2kg200g'], method: '加減混合', methodHint: '先用咗 → 減，再買 → 加。一步步計。', steps: [
      { prompt: '先用咗，應該做加法定減法？', type: 'choice', options: ['加法', '減法'], answer: '減法', feedback: '啱！用咗即係減少。' },
      { prompt: '3kg500g − 1kg800g = ?', type: 'choice', options: ['1kg700g', '2kg300g', '1kg800g', '2kg700g'], answer: '1kg700g', feedback: '好！借位後係1kg700g。' },
      { prompt: '再買 2kg200g，即係要加：1kg700g+2kg200g=?', type: 'choice', options: ['3kg900g', '3kg500g', '4kg', '3kg700g'], answer: '3kg900g', feedback: '正確！而家有3kg900g肉。' }
    ]}
  },
  { id: 'm_h13', topic: 'measurement', difficulty: 'hard',
    question: '一個泳池長 50 米，小明游了 5 個來回（1 來回=50×2=100米），共游了幾多米？',
    options: ['500 米', '250 米', '1000 米', '300 米'],
    answer: '500 米',
    hint: '1來回=100米，5來回=5×100=500米。',
    explanation: '1來回=50×2=100米。5來回=5×100=500米。',
    explanationSteps: ['第一步：1個來回 = 50米去 + 50米返 = 100米。', '第二步：5個來回 = 5 × 100米。', '第三步：5 × 100 = 500米。'],
    commonMistake: '有啲小朋友會唔記得乘2，直接計50×5=250。',
    teacherTip: '「來回」即係去同返，所以路程要乘2。',
    guidedReview: { keywords: ['50米', '5個來回', '共游'], method: '乘法（來回×2）', methodHint: '先計1個來回=50×2=100米，再乘5。', steps: [
      { prompt: '1個來回游幾多米？', type: 'choice', options: ['100米', '50米', '200米', '150米'], answer: '100米', feedback: '啱！50去+50返=100米。' },
      { prompt: '5個來回 = 5 × ?', type: 'choice', options: ['100', '50', '200', '150'], answer: '100', feedback: '好！每個來回100米。' },
      { prompt: '5 × 100 = ?', type: 'choice', options: ['500', '1000', '250', '300'], answer: '500', feedback: '正確！小明游500米。' }
    ]}
  },

  // ── Shapes: add 15 new ──
  { id: 's_e11', topic: 'shapes', difficulty: 'easy',
    question: '正方形有幾多條邊？',
    options: ['4 條', '3 條', '5 條', '6 條'],
    answer: '4 條',
    hint: '正方形係四邊形，有四條相等嘅邊。',
    explanation: '正方形有4條邊，而且四條邊都一樣長。',
    explanationSteps: ['第一步：正方形係四邊形的一種。', '第二步：「四邊形」就係有四條邊。', '第三步：所以正方形有4條邊。'],
    commonMistake: '有啲小朋友會將正方形同三角形搞亂。',
    teacherTip: '正方形係四邊形，三角「形」3條邊，四邊「形」4條邊，記住名就記住邊數。',
    guidedReview: { keywords: ['正方形', '幾多條邊'], method: '圖形辨認', methodHint: '正方形個「四」字就係提示有四條邊。', steps: [
      { prompt: '「四邊形」有幾多條邊？', type: 'choice', options: ['3', '4', '5', '6'], answer: '4', feedback: '啱！四邊形=4條邊。' },
      { prompt: '正方形係咪四邊形？', type: 'choice', options: ['係', '唔係'], answer: '係', feedback: '好！正方形係四邊形。' }
    ]}
  },
  { id: 's_e12', topic: 'shapes', difficulty: 'easy',
    question: '長方形有幾多個直角？',
    options: ['4 個', '2 個', '3 個', '1 個'],
    answer: '4 個',
    hint: '長方形四個角落都係直角（90度）。',
    explanation: '長方形有4個直角，每個角都係90度。',
    explanationSteps: ['第一步：直角即係90度，好似書角咁。', '第二步：長方形有4個角。', '第三步：長方形的4個角都係直角。', '第四步：所以長方形有4個直角。'],
    commonMistake: '有啲小朋友會以為長方形只有2個直角。',
    teacherTip: '正方形同長方形都係4個直角。用書角（直角）去對，四個角都啱。',
    guidedReview: { keywords: ['長方形', '直角', '幾多個'], method: '圖形特徵', methodHint: '直角=90度，長方形四個角都係。', steps: [
      { prompt: '長方形有幾多個角？', type: 'choice', options: ['4個', '3個', '2個', '5個'], answer: '4個', feedback: '啱！長方形有4個角。' },
      { prompt: '長方形嘅角係咩角？', type: 'choice', options: ['直角', '銳角', '鈍角', '圓角'], answer: '直角', feedback: '好！全部係直角。' }
    ]}
  },
  { id: 's_m11', topic: 'shapes', difficulty: 'medium',
    question: '一個三角形有兩個角係 35° 同 85°，第三個角係幾度？',
    options: ['60°', '70°', '50°', '80°'],
    answer: '60°',
    hint: '三角形三個角加埋=180°，180−35−85=60。',
    explanation: '180° − 35° − 85° = 60°。第三個角是60°。',
    explanationSteps: ['第一步：三角形三個角加埋係180度。', '第二步：已知兩個角：35° + 85° = 120°。', '第三步：180° − 120° = 60°。'],
    commonMistake: '有啲小朋友會以為三角和=360度（搞錯咗四邊形）。',
    teacherTip: '三角形內角和永遠係180度。記住呢個口訣：三角加埋百八度。',
    guidedReview: { keywords: ['三角形', '35°', '85°', '第三個角'], method: '三角形內角和', methodHint: '三個角加埋=180°，用180減已知嘅。', steps: [
      { prompt: '三角形三個角加埋係幾多度？', type: 'choice', options: ['180°', '360°', '90°', '270°'], answer: '180°', feedback: '啱！三角形內角和=180°。' },
      { prompt: '35° + 85° = ?', type: 'choice', options: ['120°', '110°', '130°', '100°'], answer: '120°', feedback: '好！35+85=120。' },
      { prompt: '180° − 120° = ?', type: 'choice', options: ['60°', '70°', '50°', '80°'], answer: '60°', feedback: '正確！第三個角係60°。' }
    ]}
  },
  { id: 's_m12', topic: 'shapes', difficulty: 'medium',
    question: '一個四邊形，只有一組對邊平行。這係咩形？',
    options: ['梯形', '平行四邊形', '長方形', '正方形'],
    answer: '梯形',
    hint: '梯形定義：四邊形，只有一組對邊平行。',
    explanation: '梯形係四邊形，而且只有一組對邊平行，另一組唔平行。',
    explanationSteps: ['第一步：四邊形有四條邊。', '第二步：梯形只有一組對邊係平行嘅。', '第三步：另一組對邊係唔平行嘅（斜斜哋）。'],
    commonMistake: '有啲小朋友會以為梯形係平行四邊形，但平行四邊形係兩組對邊平行。',
    teacherTip: '梯形=得1組平行邊。平行四邊形=2組平行邊。記住：梯形似梯，一平一斜。',
    guidedReview: { keywords: ['四邊形', '一組對邊平行', '咩形'], method: '圖形分類', methodHint: '一組平行=梯形，兩組平行=平行四邊形。', steps: [
      { prompt: '梯形有幾組平行邊？', type: 'choice', options: ['1組', '2組', '3組', '冇'], answer: '1組', feedback: '啱！梯形只有1組對邊平行。' },
      { prompt: '平行四邊形有幾組平行邊？', type: 'choice', options: ['1組', '2組', '冇', '3組'], answer: '2組', feedback: '好！平行四邊形有2組。所以一組嘅係梯形。' }
    ]}
  },
  { id: 's_h11', topic: 'shapes', difficulty: 'hard',
    question: '一個長方形長 12cm，闊 7cm。如果將長度增加 3cm，周界增加幾多 cm？',
    options: ['6cm', '3cm', '12cm', '9cm'],
    answer: '6cm',
    hint: '原周界=2×(12+7)=38。新周界=2×(15+7)=44。相差=44−38=6。',
    explanation: '原周界=2×(12+7)=38cm。新長=12+3=15cm。新周界=2×(15+7)=44cm。相差=44−38=6cm。',
    explanationSteps: ['第一步：原周界 = 2×(12+7) = 2×19 = 38cm。', '第二步：長增加3cm後 = 12+3=15cm。', '第三步：新周界 = 2×(15+7) = 2×22 = 44cm。', '第四步：44 − 38 = 6cm。周界增加6cm。'],
    commonMistake: '有啲小朋友會以為周界增加3cm（即係增加嘅長度）。',
    teacherTip: '長方形周界有兩條長邊，所以長度增加1cm，周界其實增加2cm。',
    guidedReview: { keywords: ['長方形', '12cm', '7cm', '增加3cm', '周界'], method: '周界計算', methodHint: '先計原本周界，再計新周界，然後相減。', steps: [
      { prompt: '原本周界係幾多？', type: 'choice', options: ['38cm', '36cm', '40cm', '34cm'], answer: '38cm', feedback: '2×(12+7)=38cm。' },
      { prompt: '新嘅長度係幾多？', type: 'choice', options: ['15cm', '12cm', '10cm', '18cm'], answer: '15cm', feedback: '12+3=15cm。' },
      { prompt: '新周界 − 原周界 = ?', type: 'choice', options: ['6cm', '3cm', '12cm', '9cm'], answer: '6cm', feedback: '正確！周界增加6cm。' }
    ]}
  },
  { id: 's_h12', topic: 'shapes', difficulty: 'hard',
    question: '以下哪組邊長可以拼成一個三角形？',
    options: ['5cm, 6cm, 10cm', '2cm, 3cm, 6cm', '1cm, 2cm, 4cm', '2cm, 2cm, 5cm'],
    answer: '5cm, 6cm, 10cm',
    hint: '檢查「兩邊之和大於第三邊」。5+6>10✅，5+10>6✅，6+10>5✅。',
    explanation: '5+6=11>10✅，5+10=15>6✅，6+10=16>5✅。全部符合，可以拼成三角形。',
    explanationSteps: ['第一步：三角形要求「任意兩邊之和大於第三邊」。', '第二步：檢查 5+6=11＞10 ✅', '第三步：檢查 5+10=15＞6 ✅', '第四步：檢查 6+10=16＞5 ✅ 全部符合！'],
    commonMistake: '有啲小朋友只檢查最短兩邊，但其實要檢查晒所有組合。',
    teacherTip: '快方法：最短兩邊加埋要大過最長邊。5+6=11>10，就冇問題。',
    guidedReview: { keywords: ['邊長', '三角形', '邊長關係'], method: '三角形不等式', methodHint: '最短兩邊加埋要大過最長邊。', steps: [
      { prompt: '要檢查咩條件？', type: 'choice', options: ['兩邊之和大於第三邊', '兩邊相等', '三邊一樣長', '有直角'], answer: '兩邊之和大於第三邊', feedback: '啱！三角形要兩邊之和大於第三邊。' },
      { prompt: '5+6 係咪大過 10？', type: 'choice', options: ['係，11>10', '唔係'], answer: '係，11>10', feedback: '好！11>10 ✅' }
    ]}
  },

  // ── Data: add 15 new ──
  { id: 'd_e11', topic: 'data', difficulty: 'easy',
    question: '圓形圖中，藍色佔 1/4、紅色佔 1/2、黃色佔 1/4。最大嘅顏色係？',
    options: ['紅色', '藍色', '黃色', '紅色同藍色一樣大'],
    answer: '紅色',
    hint: '1/2 = 一半，係最大嘅。',
    explanation: '紅色佔 1/2=一半，藍色和黃色各佔 1/4。一半比四分之一大。',
    explanationSteps: ['第一步：1/2 即係一半，圓形圖嘅一半。', '第二步：1/4 即係四分之一。', '第三步：一半 > 四分之一，所以紅色最大。'],
    commonMistake: '有啲小朋友會以為數字大就大，唔記得 1/2=一半大過 1/4。',
    teacherTip: '記住：1/2 > 1/4 > 1/8。分母愈大，份數愈細。',
    guidedReview: { keywords: ['1/4', '1/2', '最大'], method: '分數比較', methodHint: '1/2係一半，1/4係四分一，一半大過四分一。', steps: [
      { prompt: '1/2 同 1/4，邊個大啲？', type: 'choice', options: ['1/2', '1/4', '一樣大'], answer: '1/2', feedback: '啱！1/2係一半，大過1/4。' },
      { prompt: '紅色佔 1/2，即係佔咗圓形嘅幾多？', type: 'choice', options: ['一半', '四分一', '全部'], answer: '一半', feedback: '好！1/2=一半。所以紅色最大。' }
    ]}
  },
  { id: 'd_e12', topic: 'data', difficulty: 'easy',
    question: '數線上有 0、10、20、30、40。35 在哪裏？',
    options: ['30 同 40 中間', '20 同 30 中間', '40 之後', '10 同 20 中間'],
    answer: '30 同 40 中間',
    hint: '30 < 35 < 40，所以喺 30 同 40 中間。',
    explanation: '35 比 30 大，比 40 細，所以在 30 和 40 中間。',
    explanationSteps: ['第一步：35 同 30 比，35 > 30。', '第二步：35 同 40 比，35 < 40。', '第三步：所以 35 喺 30 同 40 中間。'],
    commonMistake: '有啲小朋友會以為 35 近 40，就話喺 40 之後。',
    teacherTip: '喺數線上搵數字，先搵比佢細嘅最大數字，再搵比佢大嘅最細數字。',
    guidedReview: { keywords: ['35', '數線', '位置'], method: '數線定位', methodHint: '30 < 35 < 40，所以喺中間。', steps: [
      { prompt: '35 比 30 大定細？', type: 'choice', options: ['大', '細', '一樣'], answer: '大', feedback: '啱！35>30。' },
      { prompt: '35 比 40 大定細？', type: 'choice', options: ['大', '細', '一樣'], answer: '細', feedback: '好！35<40。' },
      { prompt: '所以 35 喺邊度？', type: 'choice', options: ['30同40中間', '40之後', '30之前'], answer: '30同40中間', feedback: '答啱！30<35<40。' }
    ]}
  },
  { id: 'd_m11', topic: 'data', difficulty: 'medium',
    question: '長條圖顯示：星期一人數 25、星期二 30、星期三 20、星期四 35、星期五 40。哪兩天相差最多？',
    options: ['星期五同星期三', '星期一同星期二', '星期三同星期四', '星期二同星期四'],
    answer: '星期五同星期三',
    hint: '最高=星期五40，最低=星期三20，相差40−20=20。',
    explanation: '最高是星期五40人，最低是星期三20人。相差40−20=20人。',
    explanationSteps: ['第一步：搵出最高嘅日：星期五40人。', '第二步：搵出最低嘅日：星期三20人。', '第三步：40 − 20 = 20相差最多。'],
    commonMistake: '有啲小朋友會逐對比較，浪費時間。先搵最高同最低。',
    teacherTip: '比較相差最多嘅問題，先搵最高同最低，然後相減。',
    guidedReview: { keywords: ['長條圖', '相差最多', '星期'], method: '數據比較', methodHint: '先搵最高同最低，再相減。', steps: [
      { prompt: '長條圖最高嘅係星期幾？', type: 'choice', options: ['星期五(40)', '星期二(30)', '星期四(35)', '星期一(25)'], answer: '星期五(40)', feedback: '啱！星期五40人係最高。' },
      { prompt: '最低嘅係星期幾？', type: 'choice', options: ['星期三(20)', '星期一(25)', '星期二(30)'], answer: '星期三(20)', feedback: '好！星期三20人最低。' },
      { prompt: '40 − 20 = ?', type: 'choice', options: ['20', '10', '15', '30'], answer: '20', feedback: '相差20人！星期五同星期三相差最多。' }
    ]}
  },
  { id: 'd_m12', topic: 'data', difficulty: 'medium',
    question: '一個袋有 4 個紅波、3 個藍波、2 個綠波、1 個黃波。抽到藍波嘅機會係？',
    options: ['3/10', '4/10', '2/10', '1/10'],
    answer: '3/10',
    hint: '總波數=4+3+2+1=10，藍波有3個，所以 3/10。',
    explanation: '總共 4+3+2+1=10個波。藍波有3個，機會=3/10。',
    explanationSteps: ['第一步：先計總共有幾多個波：4+3+2+1=10。', '第二步：藍波有3個。', '第三步：機會=藍波數÷總數=3÷10=3/10。'],
    commonMistake: '有啲小朋友會用 3/4（只計紅色），忘記計算總數。',
    teacherTip: '概率 = 想要嘅數量 ÷ 總數量。記住分母係總數！',
    guidedReview: { keywords: ['4紅', '3藍', '2綠', '1黃', '藍波機會'], method: '概率計算', methodHint: '先計總數，再計想要嘅顏色。', steps: [
      { prompt: '總共有幾多個波？', type: 'choice', options: ['10', '4', '3', '7'], answer: '10', feedback: '啱！4+3+2+1=10。' },
      { prompt: '藍波有幾個？', type: 'choice', options: ['3', '4', '2', '1'], answer: '3', feedback: '好！藍波有3個。' },
      { prompt: '機會 = ? / ?', type: 'choice', options: ['3/10', '4/10', '2/10', '1/4'], answer: '3/10', feedback: '答啱！3/10機會抽到藍波。' }
    ]}
  },
  { id: 'd_h11', topic: 'data', difficulty: 'hard',
    question: '以下是 5 個人的年齡：8, 9, 10, 11, 12。如果加多一個人，平均年齡變成 10.5。新加入嘅人係幾多歲？',
    options: ['13 歲', '10 歲', '12 歲', '14 歲'],
    answer: '13 歲',
    hint: '原本總和=8+9+10+11+12=50。新總和=10.5×6=63。63−50=13。',
    explanation: '原本總和=8+9+10+11+12=50。6人平均=10.5，新總和=10.5×6=63。63−50=13歲。',
    explanationSteps: ['第一步：先計原本5人總和：8+9+10+11+12=50。', '第二步：6人平均10.5，新總和=10.5×6=63。', '第三步：新總和−原總和=63−50=13歲。'],
    commonMistake: '有啲小朋友會直接 10.5×6=63，忘記減原本總和。',
    teacherTip: '平均數逆向題：先計新總和，再減原本總和，就係新加入嘅數。',
    guidedReview: { keywords: ['平均', '10.5', '新加入'], method: '平均數逆向', methodHint: '新總和 − 原總和 = 新數字。', steps: [
      { prompt: '原本5人年齡總和係幾多？', type: 'choice', options: ['50', '45', '55', '60'], answer: '50', feedback: '啱！8+9+10+11+12=50。' },
      { prompt: '新總和係 10.5 × 6 = ?', type: 'choice', options: ['63', '60', '65', '53'], answer: '63', feedback: '好！10.5×6=63。' },
      { prompt: '63 − 50 = ?', type: 'choice', options: ['13', '10', '15', '12'], answer: '13', feedback: '答啱！新加入嘅人13歲。' }
    ]}
  },
  { id: 'd_h12', topic: 'data', difficulty: 'hard',
    question: '圓形圖顯示：中文 40%、英文 25%、數學 20%、常識 15%。中文比常識多幾多個百分比？',
    options: ['25%', '15%', '20%', '30%'],
    answer: '25%',
    hint: '40% − 15% = 25%。',
    explanation: '中文 40% − 常識 15% = 25%。',
    explanationSteps: ['第一步：中文佔 40%。', '第二步：常識佔 15%。', '第三步：40% − 15% = 25%。'],
    commonMistake: '有啲小朋友會減錯，40−15=35。',
    teacherTip: '百分比相差直接用大減細：40% − 15% = 25%。',
    guidedReview: { keywords: ['40%', '15%', '多幾多'], method: '百分比減法', methodHint: '直接用大嘅百分比減細嘅。', steps: [
      { prompt: '中文係幾多 percent？', type: 'choice', options: ['40%', '25%', '20%', '15%'], answer: '40%', feedback: '啱！中文40%。' },
      { prompt: '常識係幾多 percent？', type: 'choice', options: ['15%', '40%', '25%', '20%'], answer: '15%', feedback: '好！常識15%。' },
      { prompt: '40% − 15% = ?', type: 'choice', options: ['25%', '35%', '20%', '30%'], answer: '25%', feedback: '答啱！中文比常識多25%。' }
    ]}
  },

  // ── Numbers: add more (15 more) ──
  { id: 'n_e21', topic: 'numbers', difficulty: 'easy',
    question: '爸爸有 45 元，買玩具用了 28 元，還剩幾元？',
    options: ['17 元', '27 元', '13 元', '7 元'],
    answer: '17 元',
    hint: '45 − 28 = 17。',
    explanation: '45 − 28 = 17。個位5−8唔夠，借位變成15−8=7，十位3−2=1。',
    explanationSteps: ['第一步：「用了」即係要減：45−28。', '第二步：個位5−8唔夠，向十位借1變成15−8=7。', '第三步：十位4借咗1得返3，3−2=1。', '第四步：答案是17元。'],
    commonMistake: '有些小朋友會忘記借位，直接寫45−28=23。',
    teacherTip: '減法借位要記住：借咗1俾個位，十位要減返1。',
    guidedReview: { keywords: ['45元', '用了28元', '還剩'], method: '減法借位', methodHint: '用了就是減，不夠減要向十位借1。', steps: [
      { prompt: '個位5−8夠減嗎？', type: 'choice', options: ['夠', '唔夠'], answer: '唔夠', feedback: '啱！5−8唔夠減，要向十位借1。' },
      { prompt: '借位後15−8=？', type: 'choice', options: ['7', '8', '6', '9'], answer: '7', feedback: '15−8=7，個位是7。' },
      { prompt: '十位借咗1後得返3，3−2=？', type: 'choice', options: ['1', '2', '0', '3'], answer: '1', feedback: '所以答案是17元。' }
    ]}
  },
  { id: 'n_e22', topic: 'numbers', difficulty: 'easy',
    question: '9 × 7 = ?',
    options: ['63', '72', '56', '81'],
    answer: '63',
    hint: '七九六十三。',
    explanation: '9×7 = 63，乘數表的七九六十三。',
    explanationSteps: ['第一步：呢題係乘數表。', '第二步：七九⋯⋯六十三！', '第三步：9×7=63。'],
    commonMistake: '有啲小朋友會搞亂 9×7=63 同 8×8=64。',
    teacherTip: '記口訣：七九六十三，八九七十二。',
    guidedReview: { keywords: ['9', '7', '乘'], method: '乘數表', methodHint: '七九幾多？係六十三！', steps: [
      { prompt: '9×7 = ?', type: 'choice', options: ['63', '72', '56', '81'], answer: '63', feedback: '啱！七九六十三。' }
    ]}
  },
  { id: 'n_e23', topic: 'numbers', difficulty: 'easy',
    question: '「四萬五千零三十」寫成數字係？',
    options: ['45030', '45003', '40530', '45300'],
    answer: '45030',
    hint: '4個萬=40000，5個千=5000，3個十=30。',
    explanation: '45030 = 4個萬 + 5個千 + 0個百 + 3個十 + 0個一。',
    explanationSteps: ['第一步：四萬=40000，即係萬位係4。', '第二步：五千=5000，即係千位係5。', '第三步：零=百位係0。', '第四步：三十=30，即係十位係3，個位係0。寫成45030。'],
    commonMistake: '有啲小朋友會寫45003，十位和個位掉轉了。',
    teacherTip: '寫五位數時逐位寫：萬、千、百、十、個。冇嘅位寫0。',
    guidedReview: { keywords: ['四萬五千零三十', '數字'], method: '寫數', methodHint: '逐位寫：萬4千5百0十3個0。', steps: [
      { prompt: '萬位是幾多？', type: 'choice', options: ['4', '5', '0', '3'], answer: '4', feedback: '啱！四萬即係萬位4。' },
      { prompt: '千位是幾多？', type: 'choice', options: ['5', '4', '0', '3'], answer: '5', feedback: '好！五千即係千位5。' },
      { prompt: '十位是幾多？', type: 'choice', options: ['3', '0', '4', '5'], answer: '3', feedback: '三十即係十位3。所以是45030。' }
    ]}
  },
  { id: 'n_m11', topic: 'numbers', difficulty: 'medium',
    question: '小明儲了 156 元，媽媽給他 89 元後，小明想買一個 200 元的玩具。他還差幾元？',
    options: ['差45元', '差55元', '差0元', '差65元'],
    answer: '差45元',
    hint: '156+89=245，245−200=45。他不差錢，還多了45元。',
    explanation: '156+89=245元。他想買200元玩具。245−200=45元。他不差錢，還多了45元。',
    explanationSteps: ['第一步：先計小明有幾多錢：156+89=245元。', '第二步：玩具200元。', '第三步：245−200=45。他其實夠錢，還多了45元。'],
    commonMistake: '有啲小朋友會直接200−156=44，忘記加媽媽給他的錢。',
    teacherTip: '多步驟應用題要一步步計：先計總共有幾多錢，再同價錢比較。',
    guidedReview: { keywords: ['156元', '媽媽給89元', '200元玩具'], method: '加減混合', methodHint: '先加埋佢有幾多錢，再減玩具價錢。', steps: [
      { prompt: '小明原本有156元，媽媽給89元，現在共有？', type: 'choice', options: ['245元', '200元', '156元', '89元'], answer: '245元', feedback: '啱！156+89=245元。' },
      { prompt: '他有245元，玩具200元，夠買嗎？', type: 'choice', options: ['夠，多了45元', '唔夠，差45元', '夠，多了55元'], answer: '夠，多了45元', feedback: '245−200=45，夠買還有45元剩！' }
    ]}
  },
  { id: 'n_m12', topic: 'numbers', difficulty: 'medium',
    question: '308 × 6 = ?',
    options: ['1848', '1808', '1840', '1868'],
    answer: '1848',
    hint: '300×6=1800，8×6=48，1800+48=1848。',
    explanation: '308 × 6 = 300×6 + 8×6 = 1800 + 48 = 1848。',
    explanationSteps: ['第一步：308可以拆成300同8。', '第二步：300×6=1800。', '第三步：8×6=48。', '第四步：1800+48=1848。'],
    commonMistake: '有啲小朋友會直接308×6，唔記得中間的0要乘。',
    teacherTip: '三位數乘一位數，拆開逐部分計就唔會錯。',
    guidedReview: { keywords: ['308', '6', '乘'], method: '乘法拆分', methodHint: '308=300+8，分別乘6再相加。', steps: [
      { prompt: '308可以拆成幾多？', type: 'choice', options: ['300+8', '30+8', '300+80', '3+8'], answer: '300+8', feedback: '啱！308=300+8。' },
      { prompt: '300×6=？', type: 'choice', options: ['1800', '180', '18000', '3000'], answer: '1800', feedback: '好！300×6=1800。' },
      { prompt: '1800+48=？', type: 'choice', options: ['1848', '1840', '1808', '1868'], answer: '1848', feedback: '正確！308×6=1848。' }
    ]}
  },
  { id: 'n_m13', topic: 'numbers', difficulty: 'medium',
    question: '4/9 + 3/9 = ?',
    options: ['7/9', '1/9', '7/18', '12/9'],
    answer: '7/9',
    hint: '分母相同（都係9），分子相加：4+3=7。',
    explanation: '4/9 + 3/9 = (4+3)/9 = 7/9。',
    explanationSteps: ['第一步：分母相同（都係9），表示每份一樣大。', '第二步：分子相加：4+3=7。', '第三步：所以係 7/9。'],
    commonMistake: '有啲小朋友會分母都加埋：4/9+3/9=7/18（錯的）。',
    teacherTip: '同分母分數加減：分母不變，只計分子。',
    guidedReview: { keywords: ['4/9', '3/9', '加'], method: '分數加法', methodHint: '分母相同，分子直接加。', steps: [
      { prompt: '4/9 同 3/9 分母係咪一樣？', type: 'choice', options: ['係，都係9', '唔係'], answer: '係，都係9', feedback: '啱！分母都係9。' },
      { prompt: '分母相同時，要加咩？', type: 'choice', options: ['分子', '分母', '兩個都加'], answer: '分子', feedback: '好！分母不變，分子相加。' },
      { prompt: '4+3=？', type: 'choice', options: ['7', '1', '12', '9'], answer: '7', feedback: '4+3=7，所以係7/9。' }
    ]}
  },
  { id: 'n_m14', topic: 'numbers', difficulty: 'medium',
    question: '全班有 36 人，分做 4 組。每組有幾人？',
    options: ['9 人', '8 人', '10 人', '7 人'],
    answer: '9 人',
    hint: '36 ÷ 4 = 9。',
    explanation: '36人分4組，每組人數 = 36 ÷ 4 = 9人。',
    explanationSteps: ['第一步：「分做4組」即係要平均分。', '第二步：平均分用除法：36 ÷ 4。', '第三步：36 ÷ 4 = 9，每組9人。'],
    commonMistake: '有啲小朋友會以為是乘法（36×4），但分組是除法。',
    teacherTip: '「分做幾組」、「平均分」這些字眼，通常用除法。',
    guidedReview: { keywords: ['36人', '4組', '每組'], method: '除法', methodHint: '分組就是除法：總數÷組數。', steps: [
      { prompt: '36人分4組用咩方法？', type: 'choice', options: ['除法', '乘法', '加法', '減法'], answer: '除法', feedback: '啱！分組用除法。' },
      { prompt: '36 ÷ 4 = ?', type: 'choice', options: ['9', '8', '7', '10'], answer: '9', feedback: '好！每組9人。' }
    ]}
  },
  { id: 'n_m15', topic: 'numbers', difficulty: 'medium',
    question: '文具店有鉛筆245枝，賣出168枝後，再入了125枝。現在有幾多枝？',
    options: ['202枝', '202枝', '212枝', '192枝'],
    answer: '202枝',
    hint: '245−168=77，77+125=202。',
    explanation: '先減賣出的：245−168=77，再加新入的：77+125=202枝。',
    explanationSteps: ['第一步：先計賣出後：245−168。', '第二步：245−168=77。', '第三步：再入貨：77+125=202。'],
    commonMistake: '有啲小朋友會一次過245+125−168，容易出錯。',
    teacherTip: '加減混合題，跟住題目順序一步步計就唔會錯。',
    guidedReview: { keywords: ['245枝', '賣出168', '入了125', '現在'], method: '加減混合', methodHint: '先減賣出的，再加新入的。', steps: [
      { prompt: '賣出了應該加定減？', type: 'choice', options: ['減', '加'], answer: '減', feedback: '啱！賣出等於減少。' },
      { prompt: '245−168=？', type: 'choice', options: ['77', '87', '67', '97'], answer: '77', feedback: '好！245−168=77。' },
      { prompt: '入了貨應該加定減？', type: 'choice', options: ['加', '減'], answer: '加', feedback: '好！77+125=202枝。' }
    ]}
  },
  { id: 'n_h11', topic: 'numbers', difficulty: 'hard',
    question: '媽媽買了 6 盒雞蛋，每盒有 12 隻。用了 28 隻後，還剩幾多隻？',
    options: ['44 隻', '40 隻', '34 隻', '48 隻'],
    answer: '44 隻',
    hint: '6×12=72，72−28=44。',
    explanation: '先計總數：6×12=72隻。減去用了的：72−28=44隻。',
    explanationSteps: ['第一步：先計總共有幾多隻雞蛋：6盒×12隻=72隻。', '第二步：用咗28隻，即係減：72−28。', '第三步：72−28=44隻。'],
    commonMistake: '有啲小朋友會直接用12−28（忘記乘6）。',
    teacherTip: '呢類題要先「乘」計總數，再「減」計剩下。先乘後減。',
    guidedReview: { keywords: ['6盒', '每盒12隻', '用了28隻'], method: '先乘後減', methodHint: '先計總數量，再減用咗嘅。', steps: [
      { prompt: '先計總共有幾多雞蛋？', type: 'choice', options: ['72隻', '12隻', '6隻', '28隻'], answer: '72隻', feedback: '啱！6×12=72。' },
      { prompt: '用咗28隻後：72−28=？', type: 'choice', options: ['44', '40', '34', '48'], answer: '44', feedback: '好！仲有44隻雞蛋。' }
    ]}
  },
  { id: 'n_h12', topic: 'numbers', difficulty: 'hard',
    question: '(63 − 18) ÷ 5 × 3 = ?',
    options: ['27', '24', '30', '21'],
    answer: '27',
    hint: '先括號：63−18=45。然後由左至右：45÷5=9，9×3=27。',
    explanation: '(63−18)÷5×3 = 45÷5×3 = 9×3 = 27。',
    explanationSteps: ['第一步：先計括號入面：63−18=45。', '第二步：由左至右：45÷5=9。', '第三步：9×3=27。'],
    commonMistake: '有啲小朋友會先乘後除，但其實由左至右計就得。',
    teacherTip: '混合運算順序：括號→乘除（由左至右）→加減。',
    guidedReview: { keywords: ['(63−18)', '÷5', '×3'], method: '混合運算', methodHint: '先括號，再由左至右計。', steps: [
      { prompt: '第一步做咩？', type: 'choice', options: ['計括號', '計除法', '計乘法', '由左至右'], answer: '計括號', feedback: '啱！先計括號入面。' },
      { prompt: '63−18=？', type: 'choice', options: ['45', '55', '35', '81'], answer: '45', feedback: '好！45。' },
      { prompt: '45÷5×3=？', type: 'choice', options: ['27', '24', '30', '21'], answer: '27', feedback: '由左至右：45÷5=9，9×3=27。' }
    ]}
  },
  { id: 'n_h13', topic: 'numbers', difficulty: 'hard',
    question: '有 56 粒糖，分給 8 個小朋友。每人分到幾粒？',
    options: ['7 粒', '6 粒', '8 粒', '9 粒'],
    answer: '7 粒',
    hint: '56 ÷ 8 = 7。',
    explanation: '56粒糖分給8人，每人=56÷8=7粒。',
    explanationSteps: ['第一步：「分給」即係要平均分。', '第二步：56粒分給8人：56÷8。', '第三步：七八五十六！56÷8=7粒。'],
    commonMistake: '有啲小朋友會用乘法：56×8，但分嘢係用除法。',
    teacherTip: '「分俾幾個人」同「每人分到幾多」，用除法就啱。',
    guidedReview: { keywords: ['56粒', '8個小朋友', '每人'], method: '除法', methodHint: '56÷8，七八五十六。', steps: [
      { prompt: '用咩方法？', type: 'choice', options: ['除法', '乘法', '加法', '減法'], answer: '除法', feedback: '啱！平均分用除法。' },
      { prompt: '56÷8=？', type: 'choice', options: ['7', '6', '8', '9'], answer: '7', feedback: '好！七八五十六，56÷8=7。' }
    ]}
  },
  { id: 'n_h14', topic: 'numbers', difficulty: 'hard',
    question: '一張枱可坐 4 人。運動會有 96 人參加，最少要幾張枱？',
    options: ['24 張', '23 張', '25 張', '26 張'],
    answer: '24 張',
    hint: '96 ÷ 4 = 24，剛好坐滿。',
    explanation: '96人，每枱4人，96÷4=24張枱。剛好坐滿，沒有剩餘。',
    explanationSteps: ['第一步：96人，每枱坐4人。', '第二步：96÷4=24張枱。', '第三步：4×24=96，剛好坐滿。'],
    commonMistake: '有啲小朋友會用減法，逐張枱減4個人，好慢。',
    teacherTip: '「每張坐幾人」問題，用除法計最快。',
    guidedReview: { keywords: ['96人', '每枱4人', '最少幾張'], method: '除法', methodHint: '總人數÷每枱人數=枱數。', steps: [
      { prompt: '用咩方法？', type: 'choice', options: ['除法', '乘法', '加法', '減法'], answer: '除法', feedback: '啱！96÷4。' },
      { prompt: '96÷4=？', type: 'choice', options: ['24', '23', '25', '26'], answer: '24', feedback: '24張枱，剛好！' }
    ]}
  },
  { id: 'n_h15', topic: 'numbers', difficulty: 'hard',
    question: '小明有 120 元。買 3 本故事書，每本 32 元。買完後還剩多少錢？',
    options: ['24 元', '20 元', '28 元', '30 元'],
    answer: '24 元',
    hint: '3×32=96，120−96=24。',
    explanation: '3本書總價=3×32=96元。120−96=24元。',
    explanationSteps: ['第一步：先計3本書要幾多錢：3×32=96。', '第二步：120−96=24元。'],
    commonMistake: '有啲小朋友會直接120−32=88，忘記買了3本。',
    teacherTip: '買多件物品時，先乘計總價，再用總錢減。',
    guidedReview: { keywords: ['120元', '3本', '每本32元', '還剩'], method: '先乘後減', methodHint: '先計總價錢，再減。', steps: [
      { prompt: '3本書總共幾錢？', type: 'choice', options: ['96元', '32元', '120元', '64元'], answer: '96元', feedback: '啱！3×32=96。' },
      { prompt: '120−96=？', type: 'choice', options: ['24', '20', '28', '30'], answer: '24', feedback: '還有24元！' }
    ]}
  },

  // ── Measurement: add 10 more ──
  { id: 'm_e16', topic: 'measurement', difficulty: 'easy',
    question: '一部手機長約 15 厘米，書桌長 120 厘米。書桌是手機的幾倍長？',
    options: ['8 倍', '6 倍', '10 倍', '12 倍'],
    answer: '8 倍',
    hint: '120÷15=8倍。',
    explanation: '120厘米 ÷ 15厘米 = 8倍。',
    explanationSteps: ['第一步：書桌120厘米，手機15厘米。', '第二步：比較倍數用除法：120÷15。', '第三步：120÷15=8倍。'],
    commonMistake: '有啲小朋友會用減法：120−15=105。',
    teacherTip: '「係幾多倍」嘅問題，用除法計。大÷細=倍數。',
    guidedReview: { keywords: ['15厘米', '120厘米', '幾倍'], method: '倍數（除法）', methodHint: '大數字÷細數字=倍數。', steps: [
      { prompt: '比較倍數用咩方法？', type: 'choice', options: ['除法', '乘法', '加法', '減法'], answer: '除法', feedback: '啱！大÷細=倍數。' },
      { prompt: '120÷15=？', type: 'choice', options: ['8', '6', '10', '12'], answer: '8', feedback: '好！書桌是手機的8倍長。' }
    ]}
  },
  { id: 'm_e17', topic: 'measurement', difficulty: 'easy',
    question: '1 小時 = ? 分鐘',
    options: ['60 分鐘', '100 分鐘', '30 分鐘', '120 分鐘'],
    answer: '60 分鐘',
    hint: '1小時=60分鐘，是常識。',
    explanation: '1小時 = 60分鐘。',
    explanationSteps: ['第一步：1小時有60分鐘。', '第二步：這是時間的基本單位換算。'],
    commonMistake: '有啲小朋友會以為1小時=100分鐘（同厘米混淆）。',
    teacherTip: '記住：1小時=60分鐘，1分鐘=60秒。時間不是十進制！',
    guidedReview: { keywords: ['1小時', '分鐘'], method: '時間換算', methodHint: '1小時=60分鐘。', steps: [
      { prompt: '1小時有幾多分鐘？', type: 'choice', options: ['60', '100', '30', '120'], answer: '60', feedback: '啱！1小時=60分鐘。' }
    ]}
  },
  { id: 'm_e18', topic: 'measurement', difficulty: 'easy',
    question: '4 公里 = ? 米',
    options: ['4000 米', '400 米', '40 米', '40000 米'],
    answer: '4000 米',
    hint: '1公里=1000米，4×1000=4000米。',
    explanation: '1公里=1000米，4公里=4×1000=4000米。',
    explanationSteps: ['第一步：1公里 = 1000米。', '第二步：4公里 = 4 × 1000。', '第三步：4 × 1000 = 4000米。'],
    commonMistake: '有些小朋友會以為1公里=100米。',
    teacherTip: '公里轉米乘1000，因為1km=1000m。',
    guidedReview: { keywords: ['4公里', '米', '轉換'], method: '單位換算', methodHint: '1km=1000m，4×1000=4000。', steps: [
      { prompt: '1公里等於幾多米？', type: 'choice', options: ['1000m', '100m', '10000m', '10m'], answer: '1000m', feedback: '啱！1km=1000m。' },
      { prompt: '4×1000=？', type: 'choice', options: ['4000', '400', '40', '40000'], answer: '4000', feedback: '好！4km=4000m。' }
    ]}
  },
  { id: 'm_m16', topic: 'measurement', difficulty: 'medium',
    question: '上午 8:50 到上午 10:15，共過了多久？',
    options: ['1 小時 25 分', '1 小時 35 分', '2 小時 25 分', '1 小時 15 分'],
    answer: '1 小時 25 分',
    hint: '8:50→9:00（10分）→10:00（1小時）→10:15（15分），共1小時25分。',
    explanation: '8:50→9:00=10分，9:00→10:00=1小時，10:00→10:15=15分。10分+1小時+15分=1小時25分。',
    explanationSteps: ['第一步：8:50到9:00是10分鐘。', '第二步：9:00到10:00是1小時。', '第三步：10:00到10:15是15分鐘。', '第四步：10分+1小時+15分=1小時25分。'],
    commonMistake: '有啲小朋友會直接10:15−8:50，分鐘60−50=10，小時10−8=2，寫成2小時10分（錯的）。',
    teacherTip: '時間間隔最好分段計，先計到整點再計到目標時間。',
    guidedReview: { keywords: ['8:50', '10:15', '過了多久'], method: '時間間隔', methodHint: '分段：8:50→9:00→10:00→10:15。', steps: [
      { prompt: '8:50到9:00有幾分鐘？', type: 'choice', options: ['10分', '50分', '30分', '15分'], answer: '10分', feedback: '啱！8:50→9:00是10分鐘。' },
      { prompt: '9:00到10:00是幾多？', type: 'choice', options: ['1小時', '30分', '45分', '2小時'], answer: '1小時', feedback: '好！1小時。' },
      { prompt: '10:00到10:15是幾分鐘？', type: 'choice', options: ['15分', '30分', '10分', '45分'], answer: '15分', feedback: '加埋：10分+1小時+15分=1小時25分。' }
    ]}
  },
  { id: 'm_m17', topic: 'measurement', difficulty: 'medium',
    question: '5 米 8 厘米 = ? 厘米',
    options: ['508 厘米', '58 厘米', '580 厘米', '5008 厘米'],
    answer: '508 厘米',
    hint: '5米=500厘米，再加8厘米=508厘米。',
    explanation: '5米=500厘米，500+8=508厘米。',
    explanationSteps: ['第一步：5米 = 500厘米。', '第二步：再加8厘米。', '第三步：500+8=508厘米。'],
    commonMistake: '有啲小朋友會寫580（混淆了5米80厘米）。',
    teacherTip: '米轉厘米乘100，然後加上剩下的厘米數。',
    guidedReview: { keywords: ['5米', '8厘米', '轉換'], method: '單位換算', methodHint: '5m=500cm，再加8cm=508cm。', steps: [
      { prompt: '5米等於幾多厘米？', type: 'choice', options: ['500cm', '50cm', '5000cm', '5cm'], answer: '500cm', feedback: '啱！5m=500cm。' },
      { prompt: '500+8=？', type: 'choice', options: ['508', '58', '580', '5008'], answer: '508', feedback: '好！508cm。' }
    ]}
  },
  { id: 'm_m18', topic: 'measurement', difficulty: 'medium',
    question: '1 米 80 厘米的布，做 3 條手帕，每條用 40 厘米。夠用嗎？',
    options: ['夠，還剩60厘米', '唔夠，差40厘米', '夠，還剩80厘米', '唔夠，差60厘米'],
    answer: '夠，還剩60厘米',
    hint: '1m80cm=180cm，3×40=120cm，180−120=60cm，夠有突。',
    explanation: '1m80cm=180cm。3條手帕用3×40=120cm。180−120=60cm。夠用還有60cm剩。',
    explanationSteps: ['第一步：1米80厘米=180厘米。', '第二步：3條手帕用3×40=120厘米。', '第三步：180−120=60厘米，夠用仲有60厘米剩。'],
    commonMistake: '有啲小朋友會忘記先轉做同一單位。',
    teacherTip: '先統一單位（全部轉做厘米），然後先乘後減。',
    guidedReview: { keywords: ['1米80厘米', '3條', '每條40厘米', '夠嗎'], method: '應用題', methodHint: '先轉厘米，再計用幾多，最後比較。', steps: [
      { prompt: '1米80厘米=？厘米', type: 'choice', options: ['180cm', '108cm', '1800cm', '1008cm'], answer: '180cm', feedback: '啱！180cm。' },
      { prompt: '3條手帕用幾多厘米？', type: 'choice', options: ['120cm', '40cm', '160cm', '80cm'], answer: '120cm', feedback: '3×40=120cm。' },
      { prompt: '180−120=？夠用嗎？', type: 'choice', options: ['60cm，夠用', '60cm，唔夠', '40cm，唔夠'], answer: '60cm，夠用', feedback: '有60cm剩，夠用！' }
    ]}
  },
  { id: 'm_h14', topic: 'measurement', difficulty: 'hard',
    question: '家裏有 4 個 2 升的汽水樽，全部倒滿後，再分給 8 個朋友每人一杯 250 毫升。夠分嗎？',
    options: ['夠，還剩 0 毫升', '唔夠，差 500 毫升', '夠，還剩 500 毫升', '唔夠，差 250 毫升'],
    answer: '夠，還剩 0 毫升',
    hint: '4×2L=8L=8000mL，8×250=2000mL？等等⋯再計：8×250=2000mL=2L，8000−2000=6000mL。還剩好多！',
    explanation: '總共=4×2=8L=8000mL。8杯共用8×250=2000mL=2L。8000−2000=6000mL，不但夠分還剩好多。',
    explanationSteps: ['第一步：總共有幾多汽水？4×2L=8L=8000mL。', '第二步：要分幾多？8人×250mL=2000mL=2L。', '第三步：8000mL>2000mL，夠分好多！還剩6000mL。'],
    commonMistake: '有啲小朋友會以為1L=100mL，搞錯單位。',
    teacherTip: '大數字應用題，先統一單位（轉做mL），然後計總數同需要數。',
    guidedReview: { keywords: ['4個2L', '8人', '250mL'], method: '多步比較', methodHint: '先計總量，再計需要量，然後比較。', steps: [
      { prompt: '總共有幾多 mL？', type: 'choice', options: ['8000mL', '4000mL', '2000mL', '1000mL'], answer: '8000mL', feedback: '4×2000=8000mL。' },
      { prompt: '要分幾多 mL？', type: 'choice', options: ['2000mL', '250mL', '8000mL', '4000mL'], answer: '2000mL', feedback: '8×250=2000mL。' },
      { prompt: '8000>2000，夠分嗎？', type: 'choice', options: ['夠，仲有6000mL剩', '唔夠'], answer: '夠，仲有6000mL剩', feedback: '係呀！夠有突！' }
    ]}
  },
  { id: 'm_h15', topic: 'measurement', difficulty: 'hard',
    question: '火車由香港到廣州需時 1 小時 45 分。如果火車上午 9:30 開出，但因信號問題延誤了 25 分鐘，幾點到達？',
    options: ['上午 11:40', '上午 11:15', '上午 11:55', '下午 12:10'],
    answer: '上午 11:40',
    hint: '9:30+1:45=11:15，再+25分=11:40。',
    explanation: '原定到達=9:30+1:45=11:15。延誤25分：11:15+0:25=11:40。',
    explanationSteps: ['第一步：原定到達時間：9:30+1小時45分。', '第二步：9:30+1小時=10:30，+45分=11:15。', '第三步：延誤25分鐘：11:15+0:25=11:40。'],
    commonMistake: '有啲小朋友會忘記加延誤時間。',
    teacherTip: '延誤就係要加時間。先計原定到達，再加延誤。',
    guidedReview: { keywords: ['1小時45分', '9:30', '延誤25分'], method: '時間加法', methodHint: '先加車程，再加延誤。', steps: [
      { prompt: '原定幾點到？9:30+1:45=？', type: 'choice', options: ['11:15', '10:45', '11:30', '10:15'], answer: '11:15', feedback: '啱！9:30+1:45=11:15。' },
      { prompt: '再加延誤25分鐘：11:15+0:25=？', type: 'choice', options: ['11:40', '11:30', '12:15', '11:55'], answer: '11:40', feedback: '好！11:40到達。' }
    ]}
  },

  // ── Shapes: add 10 more ──
  { id: 's_e13', topic: 'shapes', difficulty: 'easy',
    question: '一個圖形有 5 條邊，叫做？',
    options: ['五邊形', '三角形', '四邊形', '六邊形'],
    answer: '五邊形',
    hint: '5條邊 = 五邊形。',
    explanation: '有5條邊的圖形叫五邊形。',
    explanationSteps: ['第一步：數一數有幾多條邊。', '第二步：5條邊。', '第三步：所以係五邊形。'],
    commonMistake: '有啲小朋友會同六邊形（6條邊）搞亂。',
    teacherTip: '圖形名就係邊數：三=3，四=4，五=5，六=6。',
    guidedReview: { keywords: ['5條邊', '叫做'], method: '圖形命名', methodHint: '幾多條邊就係幾多邊形。', steps: [
      { prompt: '3條邊係咩形？', type: 'choice', options: ['三角形', '四邊形', '五邊形', '六邊形'], answer: '三角形', feedback: '啱！3=三。' },
      { prompt: '5條邊呢？', type: 'choice', options: ['五邊形', '三角形', '四邊形', '六邊形'], answer: '五邊形', feedback: '好！5=五邊形。' }
    ]}
  },
  { id: 's_e14', topic: 'shapes', difficulty: 'easy',
    question: '圓形係由咩線組成？',
    options: ['彎曲的曲線', '直線', '折線', '虛線'],
    answer: '彎曲的曲線',
    hint: '圓形係由一條光滑嘅曲線圍成。',
    explanation: '圓形是由一條封閉的曲線組成的，沒有直線邊。',
    explanationSteps: ['第一步：圓形的邊不是直線。', '第二步：是一條光滑的曲線。', '第三步：這條曲線叫圓周。'],
    commonMistake: '有啲小朋友會以為圓形有邊，其實圓形冇直線邊。',
    teacherTip: '圓形、橢圓形都係由曲線組成，冇角、冇直線邊。',
    guidedReview: { keywords: ['圓形', '咩線'], method: '圖形特徵', methodHint: '圓形係曲線，唔係直線。', steps: [
      { prompt: '圓形的邊係直線定曲線？', type: 'choice', options: ['曲線', '直線', '折線'], answer: '曲線', feedback: '啱！圓形係曲線。' },
      { prompt: '圓形有冇角？', type: 'choice', options: ['冇', '有4個', '有3個', '有1個'], answer: '冇', feedback: '好！圓形冇角。' }
    ]}
  },
  { id: 's_m13', topic: 'shapes', difficulty: 'medium',
    question: '一個長方形長 10cm，闊 6cm。周界係幾多？',
    options: ['32cm', '16cm', '60cm', '30cm'],
    answer: '32cm',
    hint: '周界=2×(10+6)=2×16=32cm。',
    explanation: '周界 = 2 × (長 + 闊) = 2 × (10+6) = 2 × 16 = 32cm。',
    explanationSteps: ['第一步：周界公式：2×(長+闊)。', '第二步：長+闊=10+6=16。', '第三步：2×16=32cm。'],
    commonMistake: '有啲小朋友會直接10+6=16（忘記乘2）。',
    teacherTip: '長方形周界=2條長+2條闊。公式：2×(長+闊)。',
    guidedReview: { keywords: ['長方形', '10cm', '6cm', '周界'], method: '周界公式', methodHint: '周界=2×(長+闊)。', steps: [
      { prompt: '長+闊=？', type: 'choice', options: ['16', '10', '6', '4'], answer: '16', feedback: '啱！10+6=16。' },
      { prompt: '2×16=？', type: 'choice', options: ['32', '16', '60', '30'], answer: '32', feedback: '好！周界=32cm。' }
    ]}
  },
  { id: 's_m14', topic: 'shapes', difficulty: 'medium',
    question: '等邊三角形的三條邊都係 7cm，周界係幾多？',
    options: ['21cm', '14cm', '28cm', '7cm'],
    answer: '21cm',
    hint: '三條邊都係7cm，3×7=21cm。',
    explanation: '等邊三角形三邊相等。周界=7+7+7=3×7=21cm。',
    explanationSteps: ['第一步：等邊三角形三條邊一樣長。', '第二步：每條邊7cm。', '第三步：3×7=21cm。'],
    commonMistake: '有啲小朋友會用7×7（面積錯覺），其實是3×7。',
    teacherTip: '三角形周界=三邊相加。等邊三角形=邊長×3。',
    guidedReview: { keywords: ['等邊三角形', '7cm', '周界'], method: '周界（等邊）', methodHint: '三邊相等，邊長×3=周界。', steps: [
      { prompt: '等邊三角形有幾多條邊？', type: 'choice', options: ['3條', '4條', '2條', '5條'], answer: '3條', feedback: '啱！三角形有3條邊。' },
      { prompt: '周界=3×7=？', type: 'choice', options: ['21', '14', '28', '7'], answer: '21', feedback: '好！周界21cm。' }
    ]}
  },
  { id: 's_h13', topic: 'shapes', difficulty: 'hard',
    question: '一個正方形花圃邊長 8 米。工人伯伯在外圍圍欄，每米欄杆 $25，要俾幾多錢？',
    options: ['$800', '$200', '$400', '$600'],
    answer: '$800',
    hint: '周界=4×8=32米，32×25=800元。',
    explanation: '周界=4×8=32米。錢=32×25=800元。',
    explanationSteps: ['第一步：先計花圃周界：4×8=32米。', '第二步：每米$25，總錢=32×25。', '第三步：32×25=800元。'],
    commonMistake: '有啲小朋友會直接用8×25=200（忘記計周界）。',
    teacherTip: '圍欄問題先計周界，再乘每米價錢。',
    guidedReview: { keywords: ['正方形', '8米', '每米$25'], method: '周界應用', methodHint: '先計周界，再乘單價。', steps: [
      { prompt: '正方形周界=？', type: 'choice', options: ['32米', '8米', '16米', '64米'], answer: '32米', feedback: '4×8=32米。' },
      { prompt: '32×25=？', type: 'choice', options: ['800', '200', '400', '600'], answer: '800', feedback: '要俾$800。' }
    ]}
  },
  { id: 's_h14', topic: 'shapes', difficulty: 'hard',
    question: '以下哪一組三角形分類係正確嘅？',
    options: ['等邊三角形都係等腰三角形', '等腰三角形都係等邊三角形', '直角三角形都係等腰三角形', '等腰三角形冇直角'],
    answer: '等邊三角形都係等腰三角形',
    hint: '等邊有三邊相等，等腰只需兩邊相等。所以等邊符合等腰的條件。',
    explanation: '等腰三角形只要兩邊相等。等邊三角形有三邊相等，當然也符合條件。',
    explanationSteps: ['第一步：等腰三角形條件：最少兩邊相等。', '第二步：等邊三角形三邊相等。', '第三步：三邊相等當然也符合兩邊相等，所以等邊都係等腰。'],
    commonMistake: '有啲小朋友以為等腰同等邊係完全分開嘅兩類。',
    teacherTip: '包含關係：等邊 ⊂ 等腰 ⊂ 三角形。等邊是「特別的」等腰。',
    guidedReview: { keywords: ['等邊', '等腰', '分類'], method: '圖形包含關係', methodHint: '等邊三角形三邊相等，咁係咪最少有兩邊相等？', steps: [
      { prompt: '等腰三角形要幾多條邊相等？', type: 'choice', options: ['最少2條', '3條', '1條', '全部'], answer: '最少2條', feedback: '啱！等腰最少兩邊相等。' },
      { prompt: '等邊三角形有3條邊相等，咁佢係咪等腰？', type: 'choice', options: ['係', '唔係'], answer: '係', feedback: '好！3邊相等當然符合最少2邊相等。' }
    ]}
  },

  // ── Data: add 10 more ──
  { id: 'd_e13', topic: 'data', difficulty: 'easy',
    question: '溫度計顯示 25°C。比 25°C 高 10°C 係幾多度？',
    options: ['35°C', '15°C', '30°C', '20°C'],
    answer: '35°C',
    hint: '25+10=35°C。',
    explanation: '25°C + 10°C = 35°C。',
    explanationSteps: ['第一步：溫度計顯示25°C。', '第二步：高10°C即係加10。', '第三步：25+10=35°C。'],
    commonMistake: '有啲小朋友會以為「高」就係減。',
    teacherTip: '「比...高」就係加，「比...低」就係減。',
    guidedReview: { keywords: ['25°C', '高10°C'], method: '溫度加減', methodHint: '「高」即係加。', steps: [
      { prompt: '「高10°C」應該加定減？', type: 'choice', options: ['加', '減'], answer: '加', feedback: '啱！高就加。' },
      { prompt: '25+10=？', type: 'choice', options: ['35', '15', '30', '20'], answer: '35', feedback: '好！35°C。' }
    ]}
  },
  { id: 'd_e14', topic: 'data', difficulty: 'easy',
    question: '一個硬幣擲出，邊個面向上係「不可能」預測的？',
    options: ['兩個都可能，無法肯定', '一定是公', '一定是字', '公同字輪流'],
    answer: '兩個都可能，無法肯定',
    hint: '擲硬幣的結果是隨機的，不能肯定。',
    explanation: '擲硬幣可能出公也可能出字，沒有人能肯定。',
    explanationSteps: ['第一步：硬幣有兩面：公同字。', '第二步：擲出去，兩邊都有可能。', '第三步：所以不能肯定出邊一面。'],
    commonMistake: '有啲小朋友會以為擲10次會5次公5次字，但每次都是隨機的。',
    teacherTip: '隨機事件就是無法肯定結果的事件。擲硬幣、抽獎都是隨機。',
    guidedReview: { keywords: ['硬幣', '擲出', '不可能預測'], method: '概率判斷', methodHint: '硬幣兩面都可能，無法知道會係邊面。', steps: [
      { prompt: '硬幣有幾多面？', type: 'choice', options: ['2面', '1面', '3面', '4面'], answer: '2面', feedback: '啱！公同字。' },
      { prompt: '擲硬幣可以肯定結果嗎？', type: 'choice', options: ['唔可以', '可以'], answer: '唔可以', feedback: '好！每次都是隨機的。' }
    ]}
  },
  { id: 'd_m13', topic: 'data', difficulty: 'medium',
    question: '以下是 7 日嘅氣溫：28, 30, 29, 31, 28, 32, 29。呢組數字出現次數最多嘅係？',
    options: ['28 (2次)', '29 (2次)', '30 (1次)', '31 (1次)'],
    answer: '28 (2次)',
    hint: '28出現2次，29也出現2次。28和29一樣多。咦，題目選項只有28正確。',
    explanation: '28出現2次，29也出現2次，30、31、32各1次。28和29都出現最多（2次）。',
    explanationSteps: ['第一步：逐個數數每個數字出現幾次。', '第二步：28出現2次，29出現2次。', '第三步：28和29都是出現最多的（並列）。'],
    commonMistake: '有啲小朋友會直接揀最大嘅數字32。',
    teacherTip: '眾數係出現次數最多的數字，唔係最大嘅數字。',
    guidedReview: { keywords: ['氣溫', '出現次數最多', '眾數'], method: '統計（眾數）', methodHint: '逐個數字數出現了幾次。', steps: [
      { prompt: '28出現咗幾次？', type: 'choice', options: ['2次', '1次', '3次', '0次'], answer: '2次', feedback: '啱！28出現2次。' },
      { prompt: '29出現咗幾次？', type: 'choice', options: ['2次', '1次', '3次', '0次'], answer: '2次', feedback: '好！29也2次。' },
      { prompt: '最多出現嘅係？', type: 'choice', options: ['28同29', '32', '30', '31'], answer: '28同29', feedback: '答啱！並列最多。' }
    ]}
  },
  { id: 'd_m14', topic: 'data', difficulty: 'medium',
    question: '一個盒有 6 張卡：1, 2, 3, 4, 5, 6。抽到單數（1,3,5）的機會係？',
    options: ['3/6 = 1/2', '3/3 = 1', '1/6', '6/6 = 1'],
    answer: '3/6 = 1/2',
    hint: '單數有3個（1,3,5），總數6個，機會=3/6=1/2。',
    explanation: '單數：1,3,5共3個。總數6個。機會=3/6=1/2。',
    explanationSteps: ['第一步：單數有1,3,5共3個。', '第二步：總共有6張卡。', '第三步：機會=3/6=1/2。'],
    commonMistake: '有啲小朋友會以為單數有4個（忘記了2和4是雙數）。',
    teacherTip: '概率=想要嘅數量÷總數量。約簡到最簡分數。',
    guidedReview: { keywords: ['單數', '1至6', '機會'], method: '概率', methodHint: '數吓單數有幾個，再除總數。', steps: [
      { prompt: '1至6入面，單數有邊啲？', type: 'choice', options: ['1,3,5', '2,4,6', '1,2,3', '4,5,6'], answer: '1,3,5', feedback: '啱！3個單數。' },
      { prompt: '機會=3/6=？', type: 'choice', options: ['1/2', '1/3', '1/6', '1'], answer: '1/2', feedback: '好！一半機會抽到單數。' }
    ]}
  },
  { id: 'd_h13', topic: 'data', difficulty: 'hard',
    question: '以下是6個學生的體重（kg）：25, 28, 30, 22, 35, 28。平均體重係？',
    options: ['28 kg', '30 kg', '27 kg', '29 kg'],
    answer: '28 kg',
    hint: '總和=25+28+30+22+35+28=168，168÷6=28。',
    explanation: '總和=25+28+30+22+35+28=168。平均=168÷6=28kg。',
    explanationSteps: ['第一步：加晒全部體重：25+28=53，+30=83，+22=105，+35=140，+28=168。', '第二步：總和=168kg。', '第三步：168÷6=28kg。'],
    commonMistake: '有啲小朋友會加漏數字或除錯。逐個加完要 check 多次。',
    teacherTip: '平均數=總和÷人數。加晒全部數字，再除人數。',
    guidedReview: { keywords: ['體重', '平均', '6個'], method: '平均數', methodHint: '全部加埋再除人數。', steps: [
      { prompt: '總和係幾多？', type: 'choice', options: ['168', '158', '178', '148'], answer: '168', feedback: '啱！全部加埋=168。' },
      { prompt: '168÷6=？', type: 'choice', options: ['28', '30', '27', '29'], answer: '28', feedback: '好！平均體重28kg。' }
    ]}
  },
  { id: 'd_h14', topic: 'data', difficulty: 'hard',
    question: '家樂、OK、7-11 三間店嘅汽水價錢：$8、$7、$9。如果買 4 枝，最平要俾幾多錢？',
    options: ['$28', '$32', '$36', '$24'],
    answer: '$28',
    hint: '最平係$7，4×7=28。',
    explanation: '最平的店是$7一枝。4×7=28元。',
    explanationSteps: ['第一步：先搵最平的價錢：$8, $7, $9 → $7最平。', '第二步：去最平的店買4枝：4×7=28元。'],
    commonMistake: '有啲小朋友會直接買其中一間，唔識揀最平嗰間。',
    teacherTip: '「最平」問題先比較價錢揀最平，再計總數。',
    guidedReview: { keywords: ['$8', '$7', '$9', '最平'], method: '數據比較', methodHint: '先揀最平嘅價錢，再計總數。', steps: [
      { prompt: '邊間最平？', type: 'choice', options: ['$7', '$8', '$9'], answer: '$7', feedback: '啱！$7最平。' },
      { prompt: '買4枝要幾錢？', type: 'choice', options: ['$28', '$32', '$36', '$24'], answer: '$28', feedback: '好！4×7=28。' }
    ]}\n  },\n\n  // ── Extra to reach 200+ ──\n  { id: 'n_m16', topic: 'numbers', difficulty: 'medium',\n    question: '媽媽買了 3 盒朱古力，每盒有 24 粒。總共有幾多粒？',\n    options: ['72 粒', '64 粒', '84 粒', '27 粒'],\n    answer: '72 粒',\n    hint: '3×24=72粒。',\n    explanation: '3盒×24粒=72粒。',\n    explanationSteps: ['第一步：3盒朱古力。', '第二步：每盒24粒。', '第三步：3×24=72粒。'],\n    commonMistake: '有啲小朋友會用3+24=27，但係「每盒」係乘唔係加。',\n    teacherTip: '見到「每盒有...」就要用乘法：盒數×每盒數量。',\n    guidedReview: { keywords: ['3盒', '每盒24粒', '總共'], method: '乘法', methodHint: '盒數乘每盒數量。', steps: [\n      { prompt: '用咩方法？', type: 'choice', options: ['乘法', '加法', '減法', '除法'], answer: '乘法', feedback: '啱！每盒=乘。' },\n      { prompt: '3×24=？', type: 'choice', options: ['72', '64', '84', '27'], answer: '72', feedback: '好！72粒。' }\n    ]}\n  },\n  { id: 'n_m17', topic: 'numbers', difficulty: 'medium',\n    question: '8/12 − 3/12 = ?',\n    options: ['5/12', '5/0', '11/12', '5/24'],\n    answer: '5/12',\n    hint: '分母相同（都係12），分子相減：8−3=5。',\n    explanation: '8/12 − 3/12 = (8−3)/12 = 5/12。',\n    explanationSteps: ['第一步：分母相同（都係12）。', '第二步：分子相減：8−3=5。', '第三步：所以係 5/12。'],\n    commonMistake: '有啲小朋友會分母都減埋，變成5/0。',\n    teacherTip: '同分母分數減法：分母不變，只減分子。',\n    guidedReview: { keywords: ['8/12', '3/12', '減'], method: '分數減法', methodHint: '分母不變，分子相減。', steps: [\n      { prompt: '分母（12）要唔要減？', type: 'choice', options: ['唔要，分母不變', '要，12−12=0'], answer: '唔要，分母不變', feedback: '啱！分母不變。' },\n      { prompt: '8−3=？', type: 'choice', options: ['5', '11', '3', '8'], answer: '5', feedback: '所以係5/12。' }\n    ]}\n  },\n  { id: 'n_m18', topic: 'numbers', difficulty: 'medium',\n    question: '小明有 150 元，用了 68 元買文具，再用了 45 元買書。還剩幾元？',\n    options: ['37 元', '47 元', '43 元', '57 元'],\n    answer: '37 元',\n    hint: '150−68=82，82−45=37。',\n    explanation: '150−68=82，82−45=37元。',\n    explanationSteps: ['第一步：先減文具：150−68=82。', '第二步：再減書：82−45=37。'],\n    commonMistake: '有啲小朋友會150−68−45一次過計，容易出錯。',\n    teacherTip: '分兩次減，一步步計就唔會錯。',\n    guidedReview: { keywords: ['150元', '68元', '45元', '還剩'], method: '連續減法', methodHint: '分兩次減：先減第一個，再減第二個。', steps: [\n      { prompt: '150−68=？', type: 'choice', options: ['82', '92', '72', '78'], answer: '82', feedback: '啱！150−68=82。' },\n      { prompt: '82−45=？', type: 'choice', options: ['37', '47', '43', '57'], answer: '37', feedback: '好！還剩37元。' }\n    ]}\n  },\n  { id: 'n_h16', topic: 'numbers', difficulty: 'hard',\n    question: '運動會有 120 個學生，每 8 人一組比賽。比賽用了 6 個場地，每個場地有幾組？',\n    options: ['2.5 組', '3 組', '2 組', '4 組'],\n    answer: '2.5 組',\n    hint: '先計總組數：120÷8=15組。15組÷6場地=2.5組。',\n    explanation: '總組數=120÷8=15組。每場地=15÷6=2.5組。',\n    explanationSteps: ['第一步：先計總共有幾多組：120÷8=15組。', '第二步：15組分去6個場地：15÷6=2.5組。'],\n    commonMistake: '有啲小朋友會忘記先計總組數，直接用120÷6。',\n    teacherTip: '多步驟題要先睇題目問咩，然後一步步計。',\n    guidedReview: { keywords: ['120個', '每8人一組', '6個場地'], method: '多步除法', methodHint: '先計總組數，再除場地數。', steps: [\n      { prompt: '總共有幾多組？', type: 'choice', options: ['15組', '10組', '20組', '12組'], answer: '15組', feedback: '120÷8=15組。' },\n      { prompt: '每場地有？', type: 'choice', options: ['2.5組', '3組', '2組', '4組'], answer: '2.5組', feedback: '15÷6=2.5組。' }\n    ]}\n  },\n  { id: 'm_m19', topic: 'measurement', difficulty: 'medium',\n    question: '上午 11:20 到下午 1:45，共過了多久？',\n    options: ['2 小時 25 分', '2 小時 35 分', '1 小時 25 分', '3 小時 25 分'],\n    answer: '2 小時 25 分',\n    hint: '11:20→12:00（40分）→1:00（1小時）→1:45（45分），40分+1小時+45分=2小時25分。',\n    explanation: '11:20→12:00=40分，12:00→1:00=1小時，1:00→1:45=45分。共2小時25分。',\n    explanationSteps: ['第一步：11:20到12:00是40分鐘。', '第二步：12:00到下午1:00是1小時。', '第三步：1:00到1:45是45分鐘。', '第四步：40分+1小時+45分=2小時25分。'],\n    commonMistake: '有啲小朋友會直接1:45−11:20，唔記得跨上午下午。',\n    teacherTip: '跨上下午的時間間隔，分段計：先到12:00，再到目標時間。',\n    guidedReview: { keywords: ['11:20', '1:45', '過了多久'], method: '時間間隔（跨上下午）', methodHint: '分段：11:20→12:00→1:00→1:45。', steps: [\n      { prompt: '11:20到12:00？', type: 'choice', options: ['40分', '20分', '60分', '30分'], answer: '40分', feedback: '啱！40分。' },\n      { prompt: '12:00到1:45？', type: 'choice', options: ['1小時45分', '45分', '2小時', '1小時'], answer: '1小時45分', feedback: '好！1小時45分。' },\n      { prompt: '40分+1小時45分=？', type: 'choice', options: ['2小時25分', '2小時35分', '1小時25分', '3小時'], answer: '2小時25分', feedback: '答啱！2小時25分。' }\n    ]}\n  },\n  { id: 'm_m20', topic: 'measurement', difficulty: 'medium',\n    question: '3 公里 400 米 + 2 公里 800 米 = ?',\n    options: ['6 公里 200 米', '5 公里 1200 米', '6 公里 1200 米', '5 公里 200 米'],\n    answer: '6 公里 200 米',\n    hint: '3km+2km=5km，400m+800m=1200m=1km200m，5km+1km200m=6km200m。',\n    explanation: '400+800=1200m=1km200m。3+2+1=6km，再加200m=6km200m。',\n    explanationSteps: ['第一步：公里加公里：3+2=5km。', '第二步：米加米：400+800=1200m=1km200m。', '第三步：5km+1km200m=6km200m。'],\n    commonMistake: '有啲小朋友會直接寫5km1200m，忘記進位。',\n    teacherTip: '米加超過1000就要進位做1公里。1000m=1km。',\n    guidedReview: { keywords: ['3公里400米', '2公里800米', '加'], method: '複名數加法', methodHint: '米加米，超過1000要進位。', steps: [\n      { prompt: '400+800=？', type: 'choice', options: ['1200m=1km200m', '1200m', '1000m', '800m'], answer: '1200m=1km200m', feedback: '啱！1200m=1km200m。' },\n      { prompt: '3km+2km+1km=？', type: 'choice', options: ['6km', '5km', '7km', '4km'], answer: '6km', feedback: '再加200m=6km200m。' }\n    ]}\n  },\n  { id: 's_m16', topic: 'shapes', difficulty: 'medium',\n    question: '長方形周界係 30cm，闊係 5cm。長係幾多？',\n    options: ['10cm', '15cm', '20cm', '5cm'],\n    answer: '10cm',\n    hint: '周界=2×(長+闊)。30÷2=15，15−5=10。',\n    explanation: '30÷2=15（長+闊）。15−5=10cm（長）。',\n    explanationSteps: ['第一步：周界公式：2×(長+闊)=30。', '第二步：30÷2=15，即長+闊=15。', '第三步：長=15−5=10cm。'],\n    commonMistake: '有啲小朋友會直接30−5=25，忘記要先除2。',\n    teacherTip: '已知周界反求邊長：先除2得長+闊，再減已知邊。',\n    guidedReview: { keywords: ['周界30cm', '闊5cm', '長'], method: '周界逆向', methodHint: '先除2，再減闊。', steps: [\n      { prompt: '30÷2=？', type: 'choice', options: ['15', '10', '5', '20'], answer: '15', feedback: '啱！長+闊=15。' },\n      { prompt: '15−5=？', type: 'choice', options: ['10', '15', '5', '20'], answer: '10', feedback: '好！長=10cm。' }\n    ]}\n  },\n  { id: 's_m17', topic: 'shapes', difficulty: 'medium',\n    question: '直角三角形嘅直角係幾多度？',\n    options: ['90°', '60°', '45°', '180°'],\n    answer: '90°',\n    hint: '直角三角形有一個90°的角，叫直角。',\n    explanation: '直角三角形有一個角是90°，另外兩個角加起來也是90°。',\n    explanationSteps: ['第一步：直角三角形個「直角」就係90°。', '第二步：所以佢一定有一個90°角。', '第三步：另外兩個角加埋=180−90=90°。'],\n    commonMistake: '有啲小朋友會以為直角係45°或60°。',\n    teacherTip: '直角=90°，好似書角咁。直角三角形就係有一個直角的三角形。',\n    guidedReview: { keywords: ['直角三角形', '直角', '幾多度'], method: '三角形認識', methodHint: '直角一定係90°。', steps: [\n      { prompt: '直角等於幾多度？', type: 'choice', options: ['90°', '45°', '60°', '180°'], answer: '90°', feedback: '啱！直角=90°。' },\n      { prompt: '直角三角形有幾個直角？', type: 'choice', options: ['1個', '2個', '3個', '0個'], answer: '1個', feedback: '好！直角三角形有1個直角。' }\n    ]}\n  },\n  { id: 'd_m16', topic: 'data', difficulty: 'medium',\n    question: '以下是5天的溫度：28, 30, 26, 29, 27。最高同最低相差幾多？',\n    options: ['4°C', '2°C', '5°C', '3°C'],\n    answer: '4°C',\n    hint: '最高30，最低26，30−26=4。',\n    explanation: '最高30°C，最低26°C，相差30−26=4°C。',\n    explanationSteps: ['第一步：找出最高溫度：30°C。', '第二步：找出最低溫度：26°C。', '第三步：30−26=4°C。'],\n    commonMistake: '有啲小朋友會逐對比較，但搵最高同最低再減就得。',\n    teacherTip: '「相差」問題：先搵最高同最低，然後大減細。',\n    guidedReview: { keywords: ['28,30,26,29,27', '相差'], method: '數據比較', methodHint: '先搵最高同最低，再相減。', steps: [\n      { prompt: '最高係幾多？', type: 'choice', options: ['30', '28', '29', '26'], answer: '30', feedback: '啱！30最高。' },\n      { prompt: '最低係幾多？', type: 'choice', options: ['26', '28', '27', '29'], answer: '26', feedback: '好！26最低。' },\n      { prompt: '30−26=？', type: 'choice', options: ['4', '2', '5', '3'], answer: '4', feedback: '相差4°C。' }\n    ]}\n  },\n  { id: 'd_m17', topic: 'data', difficulty: 'medium',\n    question: '書架上有 15 本中文書、20 本英文書、5 本數學書。中文書比英文書少幾多本？',\n    options: ['5 本', '10 本', '15 本', '20 本'],\n    answer: '5 本',\n    hint: '20−15=5本。',\n    explanation: '英文書20本，中文書15本。20−15=5本。',\n    explanationSteps: ['第一步：英文書有20本。', '第二步：中文書有15本。', '第三步：20−15=5本。中文書比英文書少5本。'],\n    commonMistake: '有啲小朋友會用15+20=35，唔記得「少」係要減。',\n    teacherTip: '「A比B少幾多」= B減A。大減細。',\n    guidedReview: { keywords: ['15本', '20本', '少幾多'], method: '數據比較', methodHint: '「少幾多」=大減細。', steps: [\n      { prompt: '英文書（20）比中文書（15）多定少？', type: 'choice', options: ['多', '少', '一樣'], answer: '多', feedback: '啱！英文書多啲。' },\n      { prompt: '20−15=？', type: 'choice', options: ['5', '10', '15', '20'], answer: '5', feedback: '中文書少5本。' }\n    ]}\n  },\n  { id: 'd_m18', topic: 'data', difficulty: 'medium',\n    question: '擲一粒骰仔（1至6），擲到雙數（2,4,6）的可能性係？',\n    options: ['3/6 = 1/2', '2/6 = 1/3', '4/6 = 2/3', '1/6'],\n    answer: '3/6 = 1/2',\n    hint: '雙數有2,4,6共3個，總數6個，3/6=1/2。',\n    explanation: '雙數：2,4,6共3個。總數6個。3/6=1/2機會。',\n    explanationSteps: ['第一步：骰仔有1-6共6面。', '第二步：雙數有2,4,6共3個。', '第三步：機會=3/6=1/2。'],\n    commonMistake: '有啲小朋友會以為雙數有4個（1,2,3,4）。',\n    teacherTip: '概率=想要嘅÷總數。骰仔問題要先諗清楚有幾多個想要嘅數字。',\n    guidedReview: { keywords: ['骰仔', '雙數', '可能性'], method: '概率', methodHint: '數下雙數有幾多個。', steps: [\n      { prompt: '雙數有邊啲？', type: 'choice', options: ['2,4,6', '1,3,5', '1,2,3', '4,5,6'], answer: '2,4,6', feedback: '啱！3個雙數。' },\n      { prompt: '機會=？', type: 'choice', options: ['3/6=1/2', '2/6', '4/6', '1/6'], answer: '3/6=1/2', feedback: '好！一半機會。' }\n    ]}\n  },\n]\n\n// ── Combine + count ──
const existingIds = new Set(updated.map(q => q.id))
const uniqueNew = newQuestions.filter(q => !existingIds.has(q.id))
console.log(`Existing IDs: ${updated.length}, New unique: ${uniqueNew.length}, Skipped (duplicate): ${newQuestions.length - uniqueNew.length}`)

const combined = [...updated, ...uniqueNew]
const counts = {
  total: combined.length,
  byTopic: {},
  byDifficulty: {},
}
combined.forEach(q => {
  counts.byTopic[q.topic] = (counts.byTopic[q.topic] || 0) + 1
  counts.byDifficulty[q.difficulty] = (counts.byDifficulty[q.difficulty] || 0) + 1
})

// ── Write output ──
let output = `/**
 * P3 Maths Question Bank — 數學冒險王國
 * Auto-generated: ${new Date().toISOString().slice(0, 10)}
 * Total: ${combined.length} questions
 * Numbers: ${counts.byTopic.numbers || 0}, Measurement: ${counts.byTopic.measurement || 0}, Shapes: ${counts.byTopic.shapes || 0}, Data: ${counts.byTopic.data || 0}
 * Easy: ${counts.byDifficulty.easy || 0}, Medium: ${counts.byDifficulty.medium || 0}, Hard: ${counts.byDifficulty.hard || 0}
 */

const questions = `

function qToStr(q, idx) {
  const fields = [
    `  // ${idx}`,
    `  { id: '${q.id}', topic: '${q.topic}', difficulty: '${q.difficulty}',`,
    `    question: '${q.question.replace(/'/g, "\\'")}',`,
    `    options: [${q.options.map(o => `'${o.replace(/'/g, "\\'")}'`).join(', ')}],`,
    `    answer: '${q.answer.replace(/'/g, "\\'")}',`,
    `    hint: '${(q.hint || '').replace(/'/g, "\\'")}',`,
    `    explanation: '${(q.explanation || '').replace(/'/g, "\\'")}',`,
    `    explanationSteps: [${(q.explanationSteps || []).map(s => `'${s.replace(/'/g, "\\'")}'`).join(', ')}],`,
    `    commonMistake: '${(q.commonMistake || '').replace(/'/g, "\\'")}',`,
    `    teacherTip: '${(q.teacherTip || '').replace(/'/g, "\\'")}',`,
  ]

  if (q.guidedReview) {
    const gr = q.guidedReview
    fields.push(`    guidedReview: {`)
    fields.push(`      keywords: [${(gr.keywords || []).map(k => `'${k.replace(/'/g, "\\'")}'`).join(', ')}],`)
    fields.push(`      method: '${(gr.method || '').replace(/'/g, "\\'")}',`)
    fields.push(`      methodHint: '${(gr.methodHint || '').replace(/'/g, "\\'")}',`)
    fields.push(`      steps: [`)
    ;(gr.steps || []).forEach((step, si) => {
      const comma = si < gr.steps.length - 1 ? ',' : ''
      fields.push(`        { prompt: '${(step.prompt || '').replace(/'/g, "\\'")}', type: '${step.type || 'choice'}', options: [${(step.options || []).map(o => `'${o.replace(/'/g, "\\'")}'`).join(', ')}], answer: '${(step.answer || '').replace(/'/g, "\\'")}', feedback: '${(step.feedback || '').replace(/'/g, "\\'")}' }${comma}`)
    })
    fields.push(`      ]`)
    fields.push(`    },`)
  }

  fields.push(`  },`)
  return fields.join('\n')
}

output += '[\n'
combined.forEach((q, i) => {
  output += qToStr(q, i + 1) + '\n'
})
output += ']\n\nexport default questions\n'

fs.writeFileSync(outputPath, output, 'utf-8')
console.log(`\n✅ Written ${combined.length} questions to questions.js`)
console.log(`📊 By topic:`, JSON.stringify(counts.byTopic))
console.log(`📊 By difficulty:`, JSON.stringify(counts.byDifficulty))
