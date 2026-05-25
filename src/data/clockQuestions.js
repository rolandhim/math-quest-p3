/**
 * Clock Playground — 時鐘樂園
 * 20+ questions for the clock challenge game mode
 */

const clockQuestions = [
  // ═══════════════════════════════════════════
  // Type 1: set-clock (撥針題) — Q1-Q7
  // ═══════════════════════════════════════════
  {
    id: 'clock-001', type: 'set-clock', difficulty: 'easy',
    question: '請將時鐘撥到上午 8:00',
    targetTime: { hour: 8, minute: 0, period: 'AM' },
    hint: '8點正，分針指向12，時針指向8。',
    explanation: '上午8:00，時針指向8，分針指向12。朝早8點鐘。',
    explanationSteps: ['8點正，時針指向8，分針指向12。', '上午等於AM，即係朝早。'],
    stars: 2,
  },
  {
    id: 'clock-002', type: 'set-clock', difficulty: 'easy',
    question: '請將時鐘撥到下午 3:00',
    targetTime: { hour: 15, minute: 0, period: 'PM' },
    hint: '下午3點正，分針指向12，時針指向3。',
    explanation: '下午3:00，時針指向3，分針指向12。下晝3點鐘。',
    explanationSteps: ['3點正，時針指向3，分針指向12。', '下午等於PM，即係下晝。'],
    stars: 2,
  },
  {
    id: 'clock-003', type: 'set-clock', difficulty: 'easy',
    question: '請將時鐘撥到上午 6:30',
    targetTime: { hour: 6, minute: 30, period: 'AM' },
    hint: '6點半，分針指向6（30分），時針在6同7中間。',
    explanation: '上午6:30，時針在6和7之間，分針指向6。朝早6點半。',
    explanationSteps: ['6:30即係6點半。', '分針指向6 = 30分。', '時針在6同7嘅中間。'],
    stars: 2,
  },
  {
    id: 'clock-004', type: 'set-clock', difficulty: 'medium',
    question: '請將時鐘撥到上午 10:15',
    targetTime: { hour: 10, minute: 15, period: 'AM' },
    hint: '10點15分，分針指向3（15分），時針在10超過少少。',
    explanation: '上午10:15，時針在10過了少少，分針指向3 = 15分。',
    explanationSteps: ['10:15即係10點15分。', '分針指向3 = 15分。', '時針啱啱過咗10。'],
    stars: 2,
  },
  {
    id: 'clock-005', type: 'set-clock', difficulty: 'medium',
    question: '請將時鐘撥到下午 1:45',
    targetTime: { hour: 13, minute: 45, period: 'PM' },
    hint: '1點45分，分針指向9（45分），時針接近2。',
    explanation: '下午1:45，時針接近2，分針指向9 = 45分。',
    explanationSteps: ['1:45即係1點45分。', '分針指向9 = 45分。', '時針就快到2。', '下晝1點45分。'],
    stars: 2,
  },
  {
    id: 'clock-006', type: 'set-clock', difficulty: 'hard',
    question: '請將時鐘撥到下午 4:20',
    targetTime: { hour: 16, minute: 20, period: 'PM' },
    hint: '4點20分，分針指向4（20分），時針在4超過少少。',
    explanation: '下午4:20，時針過了4些少，分針指向4 = 20分。',
    explanationSteps: ['4:20即係4點20分。', '分針指向4 = 20分。', '時針啱啱過咗4。'],
    stars: 2,
  },
  {
    id: 'clock-007', type: 'set-clock', difficulty: 'hard',
    question: '請將時鐘撥到上午 11:55',
    targetTime: { hour: 11, minute: 55, period: 'AM' },
    hint: '11點55分，分針指向11（55分），時針好接近12。',
    explanation: '上午11:55，時針幾乎到12，分針指向11 = 55分。就快中午。',
    explanationSteps: ['11:55即係11點55分。', '分針指向11 = 55分。', '時針差少少就到12。', '快到中午12點。'],
    stars: 2,
  },

  // ═══════════════════════════════════════════
  // Type 2: read-clock (讀時題) — Q8-Q13
  // ═══════════════════════════════════════════
  {
    id: 'clock-008', type: 'read-clock', difficulty: 'easy',
    question: '時針指向12，分針指向12，係咩時間？',
    displayTime: { hour: 12, minute: 0 },
    options: ['12:00 中午', '6:00 朝早', '3:00 下晝', '12:30 中午'],
    answer: '12:00 中午',
    hint: '時針同分針都指向12，係12點正。',
    explanation: '中午12:00，時針和分針都指向12。',
    explanationSteps: ['時針指向12：12點。', '分針指向12：0分。', '所以係12:00正午。'],
    stars: 1,
  },
  {
    id: 'clock-009', type: 'read-clock', difficulty: 'easy',
    question: '時針指向3，分針指向6，係咩時間？',
    displayTime: { hour: 3, minute: 30 },
    options: ['3:30', '3:06', '6:30', '3:00'],
    answer: '3:30',
    hint: '時針指向3，分針指向6（30分）。',
    explanation: '時針指向3，分針指向6 = 30分，所以係3:30。',
    explanationSteps: ['時針指向3：3點。', '分針指向6：30分。', '所以係3:30（3點半）。'],
    stars: 1,
  },
  {
    id: 'clock-010', type: 'read-clock', difficulty: 'medium',
    question: '時針在9同10中間，分針指向2（10分），係咩時間？',
    displayTime: { hour: 9, minute: 10 },
    options: ['9:10', '10:10', '9:02', '9:50'],
    answer: '9:10',
    hint: '時針在9同10中間 = 9點，分針指向2 = 10分。',
    explanation: '時針在9同10之間 = 9點多，分針指向2 = 10分。所以係9:10。',
    explanationSteps: ['時針在9同10中間：9點幾。', '分針指向2：10分。', '所以係9:10。'],
    stars: 1,
  },
  {
    id: 'clock-011', type: 'read-clock', difficulty: 'medium',
    question: '時針在8同9之間好接近9，分針指向11（55分），係咩時間？',
    displayTime: { hour: 8, minute: 55 },
    options: ['8:55', '9:55', '8:11', '9:00'],
    answer: '8:55',
    hint: '時針接近9 = 8點幾，分針指向11 = 55分。',
    explanation: '時針接近9表示8點多，分針指向11 = 55分。所以係8:55。',
    explanationSteps: ['時針好接近9：8點55分。', '分針指向11：55分。', '所以係8:55，快到9點。'],
    stars: 1,
  },
  {
    id: 'clock-012', type: 'read-clock', difficulty: 'hard',
    question: '時針在1同2中間，分針指向8（40分），係咩時間？',
    displayTime: { hour: 1, minute: 40 },
    options: ['1:40', '2:40', '1:08', '1:20'],
    answer: '1:40',
    hint: '時針在1同2中間 = 1點幾，分針指向8 = 40分。',
    explanation: '時針在1和2之間 = 1點多，分針指向8 = 40分。所以係1:40。',
    explanationSteps: ['時針在1同2中間：1點幾。', '分針指向8：40分。', '所以係1:40。'],
    stars: 1,
  },
  {
    id: 'clock-013', type: 'read-clock', difficulty: 'hard',
    question: '時針在4同5中間偏後，分針指向3（15分），係咩時間？',
    displayTime: { hour: 4, minute: 15 },
    options: ['4:15', '5:15', '4:03', '3:15'],
    answer: '4:15',
    hint: '時針剛過4 = 4點幾，分針指向3 = 15分。',
    explanation: '時針剛過4 = 4點多，分針指向3 = 15分。所以係4:15。',
    explanationSteps: ['時針啱啱過咗4：4點幾。', '分針指向3：15分。', '所以係4:15（4點一個字）。'],
    stars: 1,
  },

  // ═══════════════════════════════════════════
  // Type 3: calculate (時間計算題) — Q14-Q20
  // ═══════════════════════════════════════════
  {
    id: 'clock-014', type: 'calculate', difficulty: 'easy',
    question: '小明下午 2:00 開始做功課，做到下午 2:45 先做完。佢做咗幾耐功課？',
    startTime: { hour: 14, minute: 0 },
    endTime: { hour: 14, minute: 45 },
    answer: { hours: 0, minutes: 45 },
    hint: '2:00到2:45，分鐘45−0=45，小時2−2=0。',
    explanation: '結束時間減開始時間。45分−0分=45分，2時−2時=0時。做咗45分鐘。',
    explanationSteps: [
      '第一步：計分鐘 — 45分 − 0分 = 45分',
      '第二步：計小時 — 2時 − 2時 = 0小時',
      '合埋：0小時45分 = 45分鐘 ✅'
    ],
    stars: 3,
  },
  {
    id: 'clock-015', type: 'calculate', difficulty: 'easy',
    question: '小美由下午 3:00 睇電視睇到下午 4:00。佢睇咗幾耐電視？',
    startTime: { hour: 15, minute: 0 },
    endTime: { hour: 16, minute: 0 },
    answer: { hours: 1, minutes: 0 },
    hint: '4−3=1小時。',
    explanation: '4:00 − 3:00 = 1小時。',
    explanationSteps: [
      '第一步：計小時 — 4時 − 3時 = 1小時',
      '第二步：分鐘 — 0分 − 0分 = 0分',
      '合埋：1小時0分 = 1小時 ✅'
    ],
    stars: 3,
  },
  {
    id: 'clock-016', type: 'calculate', difficulty: 'medium',
    question: '哥哥上午 9:45 開始溫書，溫到上午 11:20。佢溫咗幾耐書？',
    startTime: { hour: 9, minute: 45 },
    endTime: { hour: 11, minute: 20 },
    answer: { hours: 1, minutes: 35 },
    hint: '20分唔夠減45分，要借位！借1小時=60分，60+20−45=35分。11−1−9=1小時。',
    explanation: '分鐘唔夠減，要先借位：20+60−45=35分。小時：11−1−9=1小時。溫咗1小時35分。',
    explanationSteps: [
      '第一步：計分鐘 — 20分 < 45分，唔夠減要借位！',
      '借1小時 = 60分，60 + 20 − 45 = 35分',
      '第二步：計小時（借咗1個） — 11 − 1 − 9 = 1小時',
      '合埋：1小時35分 ✅'
    ],
    stars: 3,
  },
  {
    id: 'clock-017', type: 'calculate', difficulty: 'medium',
    question: '足球訓練由上午 8:30 到上午 10:15。訓練咗幾耐？',
    startTime: { hour: 8, minute: 30 },
    endTime: { hour: 10, minute: 15 },
    answer: { hours: 1, minutes: 45 },
    hint: '15−30唔夠減要借位！60+15−30=45分。10−1−8=1小時。',
    explanation: '分鐘借位：60+15−30=45分。小時：10−1−8=1小時。訓練咗1小時45分。',
    explanationSteps: [
      '第一步：計分鐘 — 15分 < 30分，唔夠減！',
      '借1小時 = 60分，60 + 15 − 30 = 45分',
      '第二步：計小時（借咗1個） — 10 − 1 − 8 = 1小時',
      '合埋：1小時45分 ✅'
    ],
    stars: 3,
  },
  {
    id: 'clock-018', type: 'calculate', difficulty: 'medium',
    question: '午餐由中午 12:00 開始，食到下午 1:30。午餐時間有幾耐？',
    startTime: { hour: 12, minute: 0 },
    endTime: { hour: 13, minute: 30 },
    answer: { hours: 1, minutes: 30 },
    hint: '30−0=30分，13−12=1小時。',
    explanation: '30分−0分=30分。13時−12時=1小時。午餐有1小時30分。',
    explanationSteps: [
      '第一步：計分鐘 — 30分 − 0分 = 30分',
      '第二步：計小時 — 13時 − 12時 = 1小時',
      '合埋：1小時30分 ✅'
    ],
    stars: 3,
  },
  {
    id: 'clock-019', type: 'calculate', difficulty: 'hard',
    question: '爸爸由上午 11:30 出門，到下午 1:00 先返到屋企。爸爸出咗門口幾耐？',
    startTime: { hour: 11, minute: 30 },
    endTime: { hour: 13, minute: 0 },
    answer: { hours: 1, minutes: 30 },
    hint: '先由11:30到12:00（30分），再由12:00到1:00（1小時），共1小時30分。',
    explanation: '分段計：11:30→12:00=30分，12:00→13:00=1小時。共1小時30分。',
    explanationSteps: [
      '第一步：由11:30到12:00 — 30分',
      '第二步：由12:00到1:00 — 1小時',
      '合埋：30分 + 1小時 = 1小時30分 ✅',
      '貼士：跨上下午可以分段計，先計到12:00。'
    ],
    stars: 3,
  },
  {
    id: 'clock-020', type: 'calculate', difficulty: 'hard',
    question: '小華下午 4:50 開始練琴，練到下午 6:15。佢練咗幾耐琴？',
    startTime: { hour: 16, minute: 50 },
    endTime: { hour: 18, minute: 15 },
    answer: { hours: 1, minutes: 25 },
    hint: '15−50唔夠減要借位！60+15−50=25分。18−1−16=1小時。',
    explanation: '分鐘：60+15−50=25分。小時：18−1−16=1小時。練咗1小時25分。',
    explanationSteps: [
      '第一步：計分鐘 — 15分 < 50分，唔夠減要借位！',
      '借1小時 = 60分，60 + 15 − 50 = 25分',
      '第二步：計小時（借咗1個） — 18 − 1 − 16 = 1小時',
      '合埋：1小時25分 ✅'
    ],
    stars: 3,
  },
]

export default clockQuestions
