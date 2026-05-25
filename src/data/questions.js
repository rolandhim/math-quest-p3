/**
 * P3 Maths Question Bank — 數學冒險王國
 * Auto-generated: 2026-05-25
 * Total: 188 questions
 * Numbers: 53, Measurement: 51, Shapes: 42, Data: 42
 * Easy: 69, Medium: 61, Hard: 58
 */

const questions = [
  // 1
  { id: 'n_e1', topic: 'numbers', difficulty: 'easy',
    question: '12345 讀作甚麼？',
    options: ['一萬二千三百四十五', '十二萬三千四百五十', '一千二百三十四', '一萬零二百四十五'],
    answer: '一萬二千三百四十五',
    hint: '萬位是1，千位是2，百位是3，十位是4，個位是5。',
    explanation: '12345 有5位數：1個萬、2個千、3個百、4個十、5個一，所以讀作「一萬二千三百四十五」。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：萬位是1，千位是2，百位是3，十位是4，個位是5。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['12345 讀作'],
      method: '運算',
      methodHint: '萬位是1，千位是2，百位是3，十位是4，個位是5。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['十二萬三千四百五十', '一萬二千三百四十五', '全部', '冇'], answer: '一萬二千三百四十五', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['十二萬三千四百五十', '一萬二千三百四十五', '一萬二千三百四十五', '十二萬三千四百五十'], answer: '一萬二千三百四十五', feedback: '答啱！' }
      ]
    },
  },
  // 2
  { id: 'n_e2', topic: 'numbers', difficulty: 'easy',
    question: '34567 和 34576，哪個比較大？',
    options: ['34567', '34576', '一樣大', '無法比較'],
    answer: '34576',
    hint: '先比萬位（都係3），再比千位（都係4），再比百位（都係5），然後比十位！',
    explanation: '34567 和 34576 的萬、千、百位都一樣（3、4、5），但34576的十位是7，34567的十位是6，7>6，所以34576較大。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：先比萬位（都係3），再比千位（都係4），再比百位（都係5），然後比十位！'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['34567 和 '],
      method: '運算',
      methodHint: '先比萬位（都係3），再比千位（都係4），再比百位（都係5），然後比十位！',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['34567', '34576', '全部', '冇'], answer: '34576', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['34567', '34576', '34567', '34576'], answer: '34576', feedback: '答啱！' }
      ]
    },
  },
  // 3
  { id: 'n_e3', topic: 'numbers', difficulty: 'easy',
    question: '23 × 3 = ?',
    options: ['69', '59', '79', '66'],
    answer: '69',
    hint: '20×3=60，3×3=9，60+9=69。',
    explanation: '23 × 3 = (20×3) + (3×3) = 60 + 9 = 69。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：20×3=60，3×3=9，60+9=69。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['23', '×', '3', '=', '?'],
      method: '運算',
      methodHint: '20×3=60，3×3=9，60+9=69。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['59', '69', '全部', '冇'], answer: '69', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['59', '69', '69', '59'], answer: '69', feedback: '答啱！' }
      ]
    },
  },
  // 4
  { id: 'n_e4', topic: 'numbers', difficulty: 'easy',
    question: '把一個蛋糕平均分成 4 份，其中一份是幾分之幾？',
    options: ['1/4', '1/2', '1/3', '1/5'],
    answer: '1/4',
    hint: '分成 4 份，取 1 份，就是 1/4。',
    explanation: '把蛋糕平均分成4份，每一份就是 1/4（四分之一）。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：分成 4 份，取 1 份，就是 1/4。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['把一個蛋糕平均分'],
      method: '運算',
      methodHint: '分成 4 份，取 1 份，就是 1/4。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['1/2', '1/4', '全部', '冇'], answer: '1/4', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['1/2', '1/4', '1/4', '1/2'], answer: '1/4', feedback: '答啱！' }
      ]
    },
  },
  // 5
  { id: 'n_e5', topic: 'numbers', difficulty: 'easy',
    question: '比較 3/5 和 2/5，哪個大？',
    options: ['3/5', '2/5', '一樣大', '無法比較'],
    answer: '3/5',
    hint: '分母相同（都係5），分子愈大分数就愈大！',
    explanation: '分母相同（都是5），比較分子：3 > 2，所以 3/5 > 2/5。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：分母相同（都係5），分子愈大分数就愈大！'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['比較 3/5 和'],
      method: '運算',
      methodHint: '分母相同（都係5），分子愈大分数就愈大！',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['2/5', '3/5', '全部', '冇'], answer: '3/5', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['2/5', '3/5', '3/5', '2/5'], answer: '3/5', feedback: '答啱！' }
      ]
    },
  },
  // 6
  { id: 'n_e6', topic: 'numbers', difficulty: 'easy',
    question: '「五萬六千七百」寫成數字是甚麼？',
    options: ['56700', '50670', '5670', '56070'],
    answer: '56700',
    hint: '5個萬=50000，6個千=6000，7個百=700，加埋係56700。',
    explanation: '五萬六千七百 = 5×10000 + 6×1000 + 7×100 = 50000 + 6000 + 700 = 56700。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：5個萬=50000，6個千=6000，7個百=700，加埋係56700。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['「五萬六千七百」'],
      method: '運算',
      methodHint: '5個萬=50000，6個千=6000，7個百=700，加埋係56700。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['50670', '56700', '全部', '冇'], answer: '56700', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['50670', '56700', '56700', '50670'], answer: '56700', feedback: '答啱！' }
      ]
    },
  },
  // 7
  { id: 'n_e7', topic: 'numbers', difficulty: 'easy',
    question: '30245 的「0」代表甚麼？',
    options: ['0個千', '0個百', '0個十', '0個萬'],
    answer: '0個千',
    hint: '從右邊數起：個、十、百、千、萬。0在千位！',
    explanation: '30245 中，萬位=3、千位=0、百位=2、十位=4、個位=5，所以千位的0代表「0個千」。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：從右邊數起：個、十、百、千、萬。0在千位！'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['30245 的「'],
      method: '運算',
      methodHint: '從右邊數起：個、十、百、千、萬。0在千位！',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['0個百', '0個千', '全部', '冇'], answer: '0個千', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['0個百', '0個千', '0個千', '0個百'], answer: '0個千', feedback: '答啱！' }
      ]
    },
  },
  // 8
  { id: 'n_e8', topic: 'numbers', difficulty: 'easy',
    question: '12 × 4 = ?',
    options: ['48', '44', '52', '38'],
    answer: '48',
    hint: '10×4=40，2×4=8，40+8=48。',
    explanation: '12 × 4 = 10×4 + 2×4 = 40 + 8 = 48。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：10×4=40，2×4=8，40+8=48。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['12', '×', '4', '=', '?'],
      method: '運算',
      methodHint: '10×4=40，2×4=8，40+8=48。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['44', '48', '全部', '冇'], answer: '48', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['44', '48', '48', '44'], answer: '48', feedback: '答啱！' }
      ]
    },
  },
  // 9
  { id: 'n_e9', topic: 'numbers', difficulty: 'easy',
    question: '哪一個分數最小？',
    options: ['1/3', '1/8', '1/5', '1/2'],
    answer: '1/8',
    hint: '分子相同（都是1），分母愈大，分數愈細。',
    explanation: '分子相同都是1，分母愈大分數愈細。8 > 5 > 3 > 2，所以 1/8 最小。',
    explanationSteps: ['第一步：分子相同都是1，分母愈大分數愈細。', '第二步：8 > 5 > 3 > 2，所以 1/8 最小。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['哪一個分數最小？'],
      method: '運算',
      methodHint: '分子相同（都是1），分母愈大，分數愈細。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['1/3', '1/8', '全部', '冇'], answer: '1/8', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['1/3', '1/8', '1/3', '1/8'], answer: '1/8', feedback: '答啱！' }
      ]
    },
  },
  // 10
  { id: 'n_e10', topic: 'numbers', difficulty: 'easy',
    question: '比 45678 大 1 的數是？',
    options: ['45679', '45677', '46678', '45680'],
    answer: '45679',
    hint: '45678 + 1 = 45679。',
    explanation: '45678 加 1，個位由 8 變成 9，所以是 45679。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：45678 + 1 = 45679。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['比 45678 '],
      method: '運算',
      methodHint: '45678 + 1 = 45679。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['45677', '45679', '全部', '冇'], answer: '45679', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['45677', '45679', '45679', '45677'], answer: '45679', feedback: '答啱！' }
      ]
    },
  },
  // 11
  { id: 'n_m1', topic: 'numbers', difficulty: 'medium',
    question: '234 × 4 = ?',
    options: ['936', '826', '916', '846'],
    answer: '936',
    hint: '200×4=800，30×4=120，4×4=16，800+120+16=936。',
    explanation: '234 × 4 = (200×4) + (30×4) + (4×4) = 800 + 120 + 16 = 936。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：200×4=800，30×4=120，4×4=16，800+120+16=936。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['234', '×', '4', '=', '?'],
      method: '運算',
      methodHint: '200×4=800，30×4=120，4×4=16，800+120+16=936。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['826', '936', '全部', '冇'], answer: '936', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['826', '936', '936', '826'], answer: '936', feedback: '答啱！' }
      ]
    },
  },
  // 12
  { id: 'n_m2', topic: 'numbers', difficulty: 'medium',
    question: '47 ÷ 5 = ? 餘數是？',
    options: ['9…2', '8…7', '9…1', '8…3'],
    answer: '9…2',
    hint: '5×9=45，47−45=2，所以 47÷5=9⋯2。',
    explanation: '5 × 9 = 45，47 − 45 = 2，所以 47 ÷ 5 = 9 餘 2。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：5×9=45，47−45=2，所以 47÷5=9⋯2。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['47', '÷', '5', '=', '?', '餘數是？'],
      method: '運算',
      methodHint: '5×9=45，47−45=2，所以 47÷5=9⋯2。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['8…7', '9…2', '全部', '冇'], answer: '9…2', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['8…7', '9…2', '9…2', '8…7'], answer: '9…2', feedback: '答啱！' }
      ]
    },
  },
  // 13
  { id: 'n_m3', topic: 'numbers', difficulty: 'medium',
    question: '2/7 + 3/7 = ?',
    options: ['5/7', '5/14', '6/7', '5/7'],
    answer: '5/7',
    hint: '分母相同（都係7），只計分子：2+3=5。',
    explanation: '分母相同（都是7），分子相加：2 + 3 = 5，所以 2/7 + 3/7 = 5/7。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：分母相同（都係7），只計分子：2+3=5。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['2/7', '+', '3/7', '=', '?'],
      method: '運算',
      methodHint: '分母相同（都係7），只計分子：2+3=5。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['5/14', '5/7', '全部', '冇'], answer: '5/7', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['5/14', '5/7', '5/7', '5/14'], answer: '5/7', feedback: '答啱！' }
      ]
    },
  },
  // 14
  { id: 'n_m4', topic: 'numbers', difficulty: 'medium',
    question: '25 + 13 × 4 = ?',
    options: ['77', '152', '67', '97'],
    answer: '77',
    hint: '先乘除後加減：13×4=52，25+52=77。',
    explanation: '先計乘法：13 × 4 = 52，再計加法：25 + 52 = 77。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：先乘除後加減：13×4=52，25+52=77。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['25', '+', '13', '×', '4', '=', '?'],
      method: '運算',
      methodHint: '先乘除後加減：13×4=52，25+52=77。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['152', '77', '全部', '冇'], answer: '77', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['152', '77', '77', '152'], answer: '77', feedback: '答啱！' }
      ]
    },
  },
  // 15
  { id: 'n_m5', topic: 'numbers', difficulty: 'medium',
    question: '12345 + 23456 = ?',
    options: ['35801', '35701', '34801', '36701'],
    answer: '35801',
    hint: '個位：5+6=11（進1），十位：4+5+1=10（進1）⋯⋯',
    explanation: '12345 + 23456 = 35801。逐位加：個位5+6=11（進1）、十位4+5+1=10（進1）、百位3+4+1=8、千位2+3=5、萬位1+2=3。',
    explanationSteps: ['第一步：12345 + 23456 = 35801。', '第二步：逐位加：個位5+6=11（進1）、十位4+5+1=10（進1）、百位3+4+1=8、千位2+3=5、萬位1+2=3。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['12345', '+', '23456', '=', '?'],
      method: '運算',
      methodHint: '個位：5+6=11（進1），十位：4+5+1=10（進1）⋯⋯',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['35701', '35801', '全部', '冇'], answer: '35801', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['35701', '35801', '35801', '35701'], answer: '35801', feedback: '答啱！' }
      ]
    },
  },
  // 16
  { id: 'n_m6', topic: 'numbers', difficulty: 'medium',
    question: '6/9 − 4/9 = ?',
    options: ['2/9', '2/0', '10/9', '2/18'],
    answer: '2/9',
    hint: '分母相同（都係9），分子相減：6−4=2。',
    explanation: '分母相同（都是9），分子相減：6 − 4 = 2，所以 6/9 − 4/9 = 2/9。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：分母相同（都係9），分子相減：6−4=2。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['6/9', '−', '4/9', '=', '?'],
      method: '運算',
      methodHint: '分母相同（都係9），分子相減：6−4=2。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['2/0', '2/9', '全部', '冇'], answer: '2/9', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['2/0', '2/9', '2/9', '2/0'], answer: '2/9', feedback: '答啱！' }
      ]
    },
  },
  // 17
  { id: 'n_m7', topic: 'numbers', difficulty: 'medium',
    question: '456 × 7 = ?',
    options: ['3192', '2842', '3092', '3292'],
    answer: '3192',
    hint: '400×7=2800，50×7=350，6×7=42，2800+350+42=3192。',
    explanation: '456 × 7 = 400×7 + 50×7 + 6×7 = 2800 + 350 + 42 = 3192。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：400×7=2800，50×7=350，6×7=42，2800+350+42=3192。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['456', '×', '7', '=', '?'],
      method: '運算',
      methodHint: '400×7=2800，50×7=350，6×7=42，2800+350+42=3192。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['2842', '3192', '全部', '冇'], answer: '3192', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['2842', '3192', '3192', '2842'], answer: '3192', feedback: '答啱！' }
      ]
    },
  },
  // 18
  { id: 'n_m8', topic: 'numbers', difficulty: 'medium',
    question: '30876 − 12945 = ?',
    options: ['17931', '18931', '16931', '17831'],
    answer: '17931',
    hint: '要借位：個位6-5=1，十位7-4=3，百位8-9要借位⋯⋯',
    explanation: '30876 − 12945 = 17931。百位8-9不夠，要向千位借1變成18-9=9，千位變成0-2不夠再向萬位借⋯⋯',
    explanationSteps: ['第一步：30876 − 12945 = 17931。', '第二步：百位8-9不夠，要向千位借1變成18-9=9，千位變成0-2不夠再向萬位借⋯⋯。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['30876', '−', '12945', '=', '?'],
      method: '運算',
      methodHint: '要借位：個位6-5=1，十位7-4=3，百位8-9要借位⋯⋯',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['18931', '17931', '全部', '冇'], answer: '17931', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['18931', '17931', '17931', '18931'], answer: '17931', feedback: '答啱！' }
      ]
    },
  },
  // 19
  { id: 'n_m9', topic: 'numbers', difficulty: 'medium',
    question: '83 ÷ 4 = ? 餘數是？',
    options: ['20…3', '21…1', '20…4', '19…7'],
    answer: '20…3',
    hint: '4×20=80，83−80=3，所以 83÷4=20⋯3。',
    explanation: '4 × 20 = 80，83 − 80 = 3，所以 83 ÷ 4 = 20 餘 3。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：4×20=80，83−80=3，所以 83÷4=20⋯3。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['83', '÷', '4', '=', '?', '餘數是？'],
      method: '運算',
      methodHint: '4×20=80，83−80=3，所以 83÷4=20⋯3。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['21…1', '20…3', '全部', '冇'], answer: '20…3', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['21…1', '20…3', '20…3', '21…1'], answer: '20…3', feedback: '答啱！' }
      ]
    },
  },
  // 20
  { id: 'n_m10', topic: 'numbers', difficulty: 'medium',
    question: '比 38999 大 1000 的數是？',
    options: ['39999', '39900', '38999', '48999'],
    answer: '39999',
    hint: '加1000，千位由8變9：38999+1000=39999。',
    explanation: '38999 + 1000 = 39999。千位的8變成9，其他位不變。',
    explanationSteps: ['第一步：38999 + 1000 = 39999。', '第二步：千位的8變成9，其他位不變。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['比 38999 '],
      method: '運算',
      methodHint: '加1000，千位由8變9：38999+1000=39999。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['39900', '39999', '全部', '冇'], answer: '39999', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['39900', '39999', '39999', '39900'], answer: '39999', feedback: '答啱！' }
      ]
    },
  },
  // 21
  { id: 'n_h1', topic: 'numbers', difficulty: 'hard',
    question: '8 × (6 − 2) + 15 ÷ 3 = ?',
    options: ['37', '27', '32', '42'],
    answer: '37',
    hint: '先括號→6-2=4，再乘除：8×4=32，15÷3=5，最後加：32+5=37。',
    explanation: '步驟1（括號）：6−2=4。步驟2（由左至右乘除）：8×4=32，15÷3=5。步驟3（加）：32+5=37。',
    explanationSteps: ['第一步：步驟1（括號）：6−2=4。', '第二步：步驟2（由左至右乘除）：8×4=32，15÷3=5。', '第三步：步驟3（加）：32+5=37。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['8', '×', '(6', '−', '2)', '+', '15', '÷', '3'],
      method: '運算',
      methodHint: '先括號→6-2=4，再乘除：8×4=32，15÷3=5，最後加：32+5=37。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['27', '37', '全部', '冇'], answer: '37', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['27', '37', '37', '27'], answer: '37', feedback: '答啱！' }
      ]
    },
  },
  // 22
  { id: 'n_h2', topic: 'numbers', difficulty: 'hard',
    question: '小明有 24 粒糖，給了 1/3 給妹妹，還剩幾粒？',
    options: ['16粒', '12粒', '8粒', '20粒'],
    answer: '16粒',
    hint: '先計 1/3 是幾粒：24÷3=8粒，然後 24−8=16粒。',
    explanation: '24粒的 1/3 = 24 ÷ 3 = 8粒。給了8粒給妹妹，剩下 24 − 8 = 16粒。',
    explanationSteps: ['第一步：24粒的 1/3 = 24 ÷ 3 = 8粒。', '第二步：給了8粒給妹妹，剩下 24 − 8 = 16粒。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['小明有 24 粒'],
      method: '運算',
      methodHint: '先計 1/3 是幾粒：24÷3=8粒，然後 24−8=16粒。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['12粒', '16粒', '全部', '冇'], answer: '16粒', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['12粒', '16粒', '16粒', '12粒'], answer: '16粒', feedback: '答啱！' }
      ]
    },
  },
  // 23
  { id: 'n_h3', topic: 'numbers', difficulty: 'hard',
    question: '(45 + 27) ÷ 8 × 3 = ?',
    options: ['27', '24', '21', '30'],
    answer: '27',
    hint: '先括號：45+27=72，然後由左至右：72÷8=9，9×3=27。',
    explanation: '(45 + 27) ÷ 8 × 3 = 72 ÷ 8 × 3 = 9 × 3 = 27。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：先括號：45+27=72，然後由左至右：72÷8=9，9×3=27。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['(45', '+', '27)', '÷', '8', '×', '3', '=', ''],
      method: '運算',
      methodHint: '先括號：45+27=72，然後由左至右：72÷8=9，9×3=27。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['24', '27', '全部', '冇'], answer: '27', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['24', '27', '27', '24'], answer: '27', feedback: '答啱！' }
      ]
    },
  },
  // 24
  { id: 'n_h4', topic: 'numbers', difficulty: 'hard',
    question: '媽媽買了 36 個橙，分成 3 份給孩子，每人得到 1/3，每人有幾個橙？',
    options: ['12個', '18個', '9個', '6個'],
    answer: '12個',
    hint: '1/3 就是除以3：36÷3=12。',
    explanation: '36個橙的 1/3 = 36 ÷ 3 = 12個。每人得到12個橙。',
    explanationSteps: ['第一步：36個橙的 1/3 = 36 ÷ 3 = 12個。', '第二步：每人得到12個橙。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['媽媽買了 36 '],
      method: '運算',
      methodHint: '1/3 就是除以3：36÷3=12。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['18個', '12個', '全部', '冇'], answer: '12個', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['18個', '12個', '12個', '18個'], answer: '12個', feedback: '答啱！' }
      ]
    },
  },
  // 25
  { id: 'n_h5', topic: 'numbers', difficulty: 'hard',
    question: '把 56789、57689、56978、56798 由小至大排列，第3個是？',
    options: ['56978', '56789', '57689', '56798'],
    answer: '56978',
    hint: '先比萬位（都係5），再比千位（6/7/6/6），再比百位⋯⋯',
    explanation: '排序：56789 < 56798 < 56978 < 57689。第3個是 56978。',
    explanationSteps: ['第一步：排序：56789 < 56798 < 56978 < 57689。', '第二步：第3個是 56978。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['把 56789、'],
      method: '運算',
      methodHint: '先比萬位（都係5），再比千位（6/7/6/6），再比百位⋯⋯',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['56789', '56978', '全部', '冇'], answer: '56978', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['56789', '56978', '56978', '56789'], answer: '56978', feedback: '答啱！' }
      ]
    },
  },
  // 26
  { id: 'n_h6', topic: 'numbers', difficulty: 'hard',
    question: '5/6 − 1/6 + 2/6 = ?',
    options: ['6/6=1', '7/6', '5/6', '4/6'],
    answer: '6/6=1',
    hint: '分母相同（都係6），分子：5−1+2=6，所以係6/6=1。',
    explanation: '分母相同都是6，分子：5 − 1 + 2 = 6。6/6 = 1。',
    explanationSteps: ['第一步：分母相同都是6，分子：5 − 1 + 2 = 6。', '第二步：6/6 = 1。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['5/6', '−', '1/6', '+', '2/6', '=', '?'],
      method: '運算',
      methodHint: '分母相同（都係6），分子：5−1+2=6，所以係6/6=1。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['7/6', '6/6=1', '全部', '冇'], answer: '6/6=1', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['7/6', '6/6=1', '6/6=1', '7/6'], answer: '6/6=1', feedback: '答啱！' }
      ]
    },
  },
  // 27
  { id: 'n_h7', topic: 'numbers', difficulty: 'hard',
    question: '一個數乘以 6 等於 534，這個數是多少？',
    options: ['89', '79', '99', '84'],
    answer: '89',
    hint: '反過來做除法：534÷6=？',
    explanation: '一個數 × 6 = 534，所以這個數 = 534 ÷ 6 = 89。驗算：89×6=534。',
    explanationSteps: ['第一步：一個數 × 6 = 534，所以這個數 = 534 ÷ 6 = 89。', '第二步：驗算：89×6=534。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個數乘以 6 '],
      method: '運算',
      methodHint: '反過來做除法：534÷6=？',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['79', '89', '全部', '冇'], answer: '89', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['79', '89', '89', '79'], answer: '89', feedback: '答啱！' }
      ]
    },
  },
  // 28
  { id: 'n_h8', topic: 'numbers', difficulty: 'hard',
    question: '24 × 8 − 56 ÷ 7 = ?',
    options: ['184', '176', '192', '168'],
    answer: '184',
    hint: '先乘除：24×8=192，56÷7=8，然後 192−8=184。',
    explanation: '先乘除後加減：24×8=192，56÷7=8。192 − 8 = 184。',
    explanationSteps: ['第一步：先乘除後加減：24×8=192，56÷7=8。', '第二步：192 − 8 = 184。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['24', '×', '8', '−', '56', '÷', '7', '=', '?'],
      method: '運算',
      methodHint: '先乘除：24×8=192，56÷7=8，然後 192−8=184。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['176', '184', '全部', '冇'], answer: '184', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['176', '184', '184', '176'], answer: '184', feedback: '答啱！' }
      ]
    },
  },
  // 29
  { id: 'n_h9', topic: 'numbers', difficulty: 'hard',
    question: '課室有 8 行座位，每行坐 5 人，如果來了 45 人，還有多少人要加位？',
    options: ['5人', '3人', '0人', '8人'],
    answer: '5人',
    hint: '先計課室有幾多個位：8×5=40，然後 45−40=5人。',
    explanation: '座位總數：8 × 5 = 40個。來了45人，45 − 40 = 5人需要加位。',
    explanationSteps: ['第一步：座位總數：8 × 5 = 40個。', '第二步：來了45人，45 − 40 = 5人需要加位。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['課室有 8 行座'],
      method: '運算',
      methodHint: '先計課室有幾多個位：8×5=40，然後 45−40=5人。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['3人', '5人', '全部', '冇'], answer: '5人', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['3人', '5人', '5人', '3人'], answer: '5人', feedback: '答啱！' }
      ]
    },
  },
  // 30
  { id: 'n_h10', topic: 'numbers', difficulty: 'hard',
    question: '爸爸有 $500，買了 6 本書每本 $48，還剩多少錢？',
    options: ['$212', '$288', '$312', '$188'],
    answer: '$212',
    hint: '先計書的總價：6×48=288，然後 500−288=212。',
    explanation: '書的總價：6 × 48 = 288。500 − 288 = 212。還剩 $212。',
    explanationSteps: ['第一步：書的總價：6 × 48 = 288。', '第二步：500 − 288 = 212。', '第三步：還剩 $212。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['爸爸有 $500'],
      method: '運算',
      methodHint: '先計書的總價：6×48=288，然後 500−288=212。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['$288', '$212', '全部', '冇'], answer: '$212', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['$288', '$212', '$212', '$288'], answer: '$212', feedback: '答啱！' }
      ]
    },
  },
  // 31
  { id: 'm_e1', topic: 'measurement', difficulty: 'easy',
    question: '1 米 = ? 厘米？',
    options: ['100 厘米', '10 厘米', '1000 厘米', '1 厘米'],
    answer: '100 厘米',
    hint: '米（m）和厘米（cm）的進率是 100。',
    explanation: '1 米 = 100 厘米。用尺子量一下，1米就是100個1厘米。',
    explanationSteps: ['第一步：1 米 = 100 厘米。', '第二步：用尺子量一下，1米就是100個1厘米。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['1', '米', '=', '?', '厘米？'],
      method: '單位換算',
      methodHint: '米（m）和厘米（cm）的進率是 100。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['10 厘米', '100 厘米', '全部', '冇'], answer: '100 厘米', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['10 厘米', '100 厘米', '100 厘米', '10 厘米'], answer: '100 厘米', feedback: '答啱！' }
      ]
    },
  },
  // 32
  { id: 'm_e2', topic: 'measurement', difficulty: 'easy',
    question: '1 升 = ? 毫升？',
    options: ['1000 毫升', '100 毫升', '10 毫升', '10000 毫升'],
    answer: '1000 毫升',
    hint: '升（L）和毫升（mL）的進率是 1000。',
    explanation: '1 升 = 1000 毫升。一大盒牛奶通常是1升。',
    explanationSteps: ['第一步：1 升 = 1000 毫升。', '第二步：一大盒牛奶通常是1升。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['1', '升', '=', '?', '毫升？'],
      method: '單位換算',
      methodHint: '升（L）和毫升（mL）的進率是 1000。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['100 毫升', '1000 毫升', '全部', '冇'], answer: '1000 毫升', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['100 毫升', '1000 毫升', '1000 毫升', '100 毫升'], answer: '1000 毫升', feedback: '答啱！' }
      ]
    },
  },
  // 33
  { id: 'm_e3', topic: 'measurement', difficulty: 'easy',
    question: '1 公斤 = ? 克？',
    options: ['1000 克', '100 克', '10 克', '10000 克'],
    answer: '1000 克',
    hint: '公斤（kg）和克（g）的進率是 1000。',
    explanation: '1 公斤 = 1000 克。一包米通常是1公斤（1000克）。',
    explanationSteps: ['第一步：1 公斤 = 1000 克。', '第二步：一包米通常是1公斤（1000克）。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['1', '公斤', '=', '?', '克？'],
      method: '單位換算',
      methodHint: '公斤（kg）和克（g）的進率是 1000。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['100 克', '1000 克', '全部', '冇'], answer: '1000 克', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['100 克', '1000 克', '1000 克', '100 克'], answer: '1000 克', feedback: '答啱！' }
      ]
    },
  },
  // 34
  { id: 'm_e4', topic: 'measurement', difficulty: 'easy',
    question: '下面的鐘顯示 3 時 45 分，用數字表示是？',
    options: ['3:45', '3:15', '4:45', '3:30'],
    answer: '3:45',
    hint: '時在「3」後面，分在「9」的位置（45分）。',
    explanation: '時針指向3和4之間（3時），分針指向9（45分），所以是 3:45。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：時在「3」後面，分在「9」的位置（45分）。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['下面的鐘顯示 3'],
      method: '單位換算',
      methodHint: '時在「3」後面，分在「9」的位置（45分）。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['3:15', '3:45', '全部', '冇'], answer: '3:45', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['3:15', '3:45', '3:45', '3:15'], answer: '3:45', feedback: '答啱！' }
      ]
    },
  },
  // 35
  { id: 'm_e5', topic: 'measurement', difficulty: 'easy',
    question: '2 米 = ? 厘米？',
    options: ['200 厘米', '20 厘米', '2000 厘米', '2 厘米'],
    answer: '200 厘米',
    hint: '1米=100厘米，2米=2×100=200厘米。',
    explanation: '2 × 100 = 200，所以 2 米 = 200 厘米。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：1米=100厘米，2米=2×100=200厘米。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['2', '米', '=', '?', '厘米？'],
      method: '單位換算',
      methodHint: '1米=100厘米，2米=2×100=200厘米。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['20 厘米', '200 厘米', '全部', '冇'], answer: '200 厘米', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['20 厘米', '200 厘米', '200 厘米', '20 厘米'], answer: '200 厘米', feedback: '答啱！' }
      ]
    },
  },
  // 36
  { id: 'm_e6', topic: 'measurement', difficulty: 'easy',
    question: '3 公斤 = ? 克？',
    options: ['3000 克', '300 克', '30 克', '30000 克'],
    answer: '3000 克',
    hint: '1公斤=1000克，3公斤=3×1000=3000克。',
    explanation: '3 × 1000 = 3000，所以 3 公斤 = 3000 克。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：1公斤=1000克，3公斤=3×1000=3000克。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['3', '公斤', '=', '?', '克？'],
      method: '單位換算',
      methodHint: '1公斤=1000克，3公斤=3×1000=3000克。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['300 克', '3000 克', '全部', '冇'], answer: '3000 克', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['300 克', '3000 克', '3000 克', '300 克'], answer: '3000 克', feedback: '答啱！' }
      ]
    },
  },
  // 37
  { id: 'm_e7', topic: 'measurement', difficulty: 'easy',
    question: '一支鉛筆大約長？',
    options: ['18 厘米', '18 米', '18 毫米', '18 公里'],
    answer: '18 厘米',
    hint: '用尺子量量鉛筆，一般在十幾厘米左右。',
    explanation: '普通鉛筆的長度大約是 18 厘米（cm），不是米也不是毫米。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：用尺子量量鉛筆，一般在十幾厘米左右。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一支鉛筆大約長？'],
      method: '單位換算',
      methodHint: '用尺子量量鉛筆，一般在十幾厘米左右。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['18 米', '18 厘米', '全部', '冇'], answer: '18 厘米', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['18 米', '18 厘米', '18 厘米', '18 米'], answer: '18 厘米', feedback: '答啱！' }
      ]
    },
  },
  // 38
  { id: 'm_e8', topic: 'measurement', difficulty: 'easy',
    question: '上午 10:30，再過 1 小時是？',
    options: ['上午 11:30', '下午 12:30', '上午 10:31', '上午 11:00'],
    answer: '上午 11:30',
    hint: '10:30 + 1小時 = 11:30，還是上午。',
    explanation: '上午 10:30 過 1小時 = 上午 11:30。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：10:30 + 1小時 = 11:30，還是上午。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['上午 10:30'],
      method: '單位換算',
      methodHint: '10:30 + 1小時 = 11:30，還是上午。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['下午 12:30', '上午 11:30', '全部', '冇'], answer: '上午 11:30', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['下午 12:30', '上午 11:30', '上午 11:30', '下午 12:30'], answer: '上午 11:30', feedback: '答啱！' }
      ]
    },
  },
  // 39
  { id: 'm_e9', topic: 'measurement', difficulty: 'easy',
    question: '2 升 = ? 毫升？',
    options: ['2000 毫升', '200 毫升', '20 毫升', '20000 毫升'],
    answer: '2000 毫升',
    hint: '1升=1000毫升，2升=2×1000=2000毫升。',
    explanation: '2 × 1000 = 2000，所以 2 升 = 2000 毫升。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：1升=1000毫升，2升=2×1000=2000毫升。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['2', '升', '=', '?', '毫升？'],
      method: '單位換算',
      methodHint: '1升=1000毫升，2升=2×1000=2000毫升。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['200 毫升', '2000 毫升', '全部', '冇'], answer: '2000 毫升', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['200 毫升', '2000 毫升', '2000 毫升', '200 毫升'], answer: '2000 毫升', feedback: '答啱！' }
      ]
    },
  },
  // 40
  { id: 'm_e10', topic: 'measurement', difficulty: 'easy',
    question: '下午 1:00 用 24 小時制表示是？',
    options: ['13:00', '1:00', '14:00', '12:00'],
    answer: '13:00',
    hint: '下午1時 = 12+1 = 13時。',
    explanation: '下午 1:00 = 12 + 1 = 13:00（24小時制）。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：下午1時 = 12+1 = 13時。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['下午 1:00 '],
      method: '單位換算',
      methodHint: '下午1時 = 12+1 = 13時。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['1:00', '13:00', '全部', '冇'], answer: '13:00', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['1:00', '13:00', '13:00', '1:00'], answer: '13:00', feedback: '答啱！' }
      ]
    },
  },
  // 41
  { id: 'm_m1', topic: 'measurement', difficulty: 'medium',
    question: '2 公里 300 米 = ? 米？',
    options: ['2300 米', '2030 米', '2003 米', '230 米'],
    answer: '2300 米',
    hint: '1公里=1000米，2公里=2000米，再加300米=2300米。',
    explanation: '2公里 = 2000米，2000 + 300 = 2300米。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：1公里=1000米，2公里=2000米，再加300米=2300米。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['2', '公里', '300', '米', '=', '?', '米？'],
      method: '單位換算',
      methodHint: '1公里=1000米，2公里=2000米，再加300米=2300米。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['2030 米', '2300 米', '全部', '冇'], answer: '2300 米', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['2030 米', '2300 米', '2300 米', '2030 米'], answer: '2300 米', feedback: '答啱！' }
      ]
    },
  },
  // 42
  { id: 'm_m2', topic: 'measurement', difficulty: 'medium',
    question: '2 小時 45 分 + 1 小時 30 分 = ?',
    options: ['4 小時 15 分', '3 小時 75 分', '4 小時 05 分', '3 小時 15 分'],
    answer: '4 小時 15 分',
    hint: '分：45+30=75分=1小時15分，時：2+1+1=4小時。',
    explanation: '45分+30分=75分=1小時15分。2小時+1小時+1小時=4小時。總共4小時15分。',
    explanationSteps: ['第一步：45分+30分=75分=1小時15分。', '第二步：2小時+1小時+1小時=4小時。', '第三步：總共4小時15分。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['2', '小時', '45', '分', '+', '1', '小時', '30', ''],
      method: '單位換算',
      methodHint: '分：45+30=75分=1小時15分，時：2+1+1=4小時。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['3 小時 75 分', '4 小時 15 分', '全部', '冇'], answer: '4 小時 15 分', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['3 小時 75 分', '4 小時 15 分', '4 小時 15 分', '3 小時 75 分'], answer: '4 小時 15 分', feedback: '答啱！' }
      ]
    },
  },
  // 43
  { id: 'm_m3', topic: 'measurement', difficulty: 'medium',
    question: '下午 3 時 20 分用 24 小時制表示是？',
    options: ['15:20', '3:20', '14:20', '16:20'],
    answer: '15:20',
    hint: '下午3時 = 12+3 = 15時，20分不變。',
    explanation: '下午3:20 = 12 + 3 = 15時20分，即 15:20。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：下午3時 = 12+3 = 15時，20分不變。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['下午 3 時 2'],
      method: '單位換算',
      methodHint: '下午3時 = 12+3 = 15時，20分不變。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['3:20', '15:20', '全部', '冇'], answer: '15:20', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['3:20', '15:20', '15:20', '3:20'], answer: '15:20', feedback: '答啱！' }
      ]
    },
  },
  // 44
  { id: 'm_m4', topic: 'measurement', difficulty: 'medium',
    question: '3 升 500 毫升 = ? 毫升？',
    options: ['3500 毫升', '3050 毫升', '3005 毫升', '350 毫升'],
    answer: '3500 毫升',
    hint: '3升=3000毫升，再加500毫升=3500毫升。',
    explanation: '3升 = 3000毫升，3000 + 500 = 3500毫升。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：3升=3000毫升，再加500毫升=3500毫升。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['3', '升', '500', '毫升', '=', '?', '毫升？'],
      method: '單位換算',
      methodHint: '3升=3000毫升，再加500毫升=3500毫升。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['3050 毫升', '3500 毫升', '全部', '冇'], answer: '3500 毫升', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['3050 毫升', '3500 毫升', '3500 毫升', '3050 毫升'], answer: '3500 毫升', feedback: '答啱！' }
      ]
    },
  },
  // 45
  { id: 'm_m5', topic: 'measurement', difficulty: 'medium',
    question: '4 公斤 200 克 − 1 公斤 500 克 = ?',
    options: ['2 公斤 700 克', '2 公斤 800 克', '3 公斤 300 克', '2 公斤 200 克'],
    answer: '2 公斤 700 克',
    hint: '4公斤200克 = 3公斤1200克，減1公斤500克 = 2公斤700克。',
    explanation: '4kg200g − 1kg500g = 3kg1200g − 1kg500g = 2kg700g。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：4公斤200克 = 3公斤1200克，減1公斤500克 = 2公斤700克。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['4', '公斤', '200', '克', '−', '1', '公斤', '50'],
      method: '單位換算',
      methodHint: '4公斤200克 = 3公斤1200克，減1公斤500克 = 2公斤700克。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['2 公斤 800 克', '2 公斤 700 克', '全部', '冇'], answer: '2 公斤 700 克', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['2 公斤 800 克', '2 公斤 700 克', '2 公斤 700 克', '2 公斤 800 克'], answer: '2 公斤 700 克', feedback: '答啱！' }
      ]
    },
  },
  // 46
  { id: 'm_m6', topic: 'measurement', difficulty: 'medium',
    question: '從上午 9:30 到上午 11:15，過了多久？',
    options: ['1 小時 45 分', '2 小時 15 分', '1 小時 15 分', '2 小時 45 分'],
    answer: '1 小時 45 分',
    hint: '9:30→10:00（30分）→11:00（1小時）→11:15（15分），總共1小時45分。',
    explanation: '9:30 → 10:00 = 30分鐘。10:00 → 11:15 = 1小時15分鐘。總共：30分 + 1小時15分 = 1小時45分。',
    explanationSteps: ['第一步：9:30 → 10:00 = 30分鐘。', '第二步：10:00 → 11:15 = 1小時15分鐘。', '第三步：總共：30分 + 1小時15分 = 1小時45分。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['從上午 9:30'],
      method: '單位換算',
      methodHint: '9:30→10:00（30分）→11:00（1小時）→11:15（15分），總共1小時45分。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['2 小時 15 分', '1 小時 45 分', '全部', '冇'], answer: '1 小時 45 分', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['2 小時 15 分', '1 小時 45 分', '1 小時 45 分', '2 小時 15 分'], answer: '1 小時 45 分', feedback: '答啱！' }
      ]
    },
  },
  // 47
  { id: 'm_m7', topic: 'measurement', difficulty: 'medium',
    question: '5 米 60 厘米 − 3 米 80 厘米 = ?',
    options: ['1 米 80 厘米', '2 米 20 厘米', '1 米 20 厘米', '2 米 80 厘米'],
    answer: '1 米 80 厘米',
    hint: '5米60厘 = 4米160厘，減3米80厘 = 1米80厘。',
    explanation: '5m60cm = 4m160cm。4m160cm − 3m80cm = 1m80cm。',
    explanationSteps: ['第一步：5m60cm = 4m160cm。', '第二步：4m160cm − 3m80cm = 1m80cm。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['5', '米', '60', '厘米', '−', '3', '米', '80', '厘'],
      method: '單位換算',
      methodHint: '5米60厘 = 4米160厘，減3米80厘 = 1米80厘。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['2 米 20 厘米', '1 米 80 厘米', '全部', '冇'], answer: '1 米 80 厘米', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['2 米 20 厘米', '1 米 80 厘米', '1 米 80 厘米', '2 米 20 厘米'], answer: '1 米 80 厘米', feedback: '答啱！' }
      ]
    },
  },
  // 48
  { id: 'm_m8', topic: 'measurement', difficulty: 'medium',
    question: '一個水桶有 2 升水，倒出 750 毫升後還有多少？',
    options: ['1250 毫升', '125 毫升', '250 毫升', '1750 毫升'],
    answer: '1250 毫升',
    hint: '2升=2000毫升，2000−750=1250毫升。',
    explanation: '2升 = 2000毫升。2000 − 750 = 1250毫升。',
    explanationSteps: ['第一步：2升 = 2000毫升。', '第二步：2000 − 750 = 1250毫升。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個水桶有 2 '],
      method: '單位換算',
      methodHint: '2升=2000毫升，2000−750=1250毫升。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['125 毫升', '1250 毫升', '全部', '冇'], answer: '1250 毫升', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['125 毫升', '1250 毫升', '1250 毫升', '125 毫升'], answer: '1250 毫升', feedback: '答啱！' }
      ]
    },
  },
  // 49
  { id: 'm_m9', topic: 'measurement', difficulty: 'medium',
    question: '下午 2:45 到下午 4:20，共過了多久？',
    options: ['1 小時 35 分', '1 小時 25 分', '2 小時 25 分', '1 小時 45 分'],
    answer: '1 小時 35 分',
    hint: '2:45→3:00（15分）→4:00（1小時）→4:20（20分），共1小時35分。',
    explanation: '2:45 → 3:00 = 15分鐘。3:00 → 4:20 = 1小時20分鐘。總共：15分 + 1小時20分 = 1小時35分。',
    explanationSteps: ['第一步：2:45 → 3:00 = 15分鐘。', '第二步：3:00 → 4:20 = 1小時20分鐘。', '第三步：總共：15分 + 1小時20分 = 1小時35分。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['下午 2:45 '],
      method: '單位換算',
      methodHint: '2:45→3:00（15分）→4:00（1小時）→4:20（20分），共1小時35分。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['1 小時 25 分', '1 小時 35 分', '全部', '冇'], answer: '1 小時 35 分', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['1 小時 25 分', '1 小時 35 分', '1 小時 35 分', '1 小時 25 分'], answer: '1 小時 35 分', feedback: '答啱！' }
      ]
    },
  },
  // 50
  { id: 'm_m10', topic: 'measurement', difficulty: 'medium',
    question: '300 厘米 = ? 米？',
    options: ['3 米', '30 米', '0.3 米', '30000 米'],
    answer: '3 米',
    hint: '100厘米=1米，300÷100=3米。',
    explanation: '300 ÷ 100 = 3，所以 300 厘米 = 3 米。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：100厘米=1米，300÷100=3米。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['300', '厘米', '=', '?', '米？'],
      method: '單位換算',
      methodHint: '100厘米=1米，300÷100=3米。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['30 米', '3 米', '全部', '冇'], answer: '3 米', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['30 米', '3 米', '3 米', '30 米'], answer: '3 米', feedback: '答啱！' }
      ]
    },
  },
  // 51
  { id: 'm_h1', topic: 'measurement', difficulty: 'hard',
    question: '從上午 9:45 到下午 2:30，共過了多久？',
    options: ['4 小時 45 分', '5 小時 45 分', '4 小時 15 分', '5 小時 15 分'],
    answer: '4 小時 45 分',
    hint: '分兩段：9:45→12:00=2小時15分，12:00→2:30=2小時30分，加埋=4小時45分。',
    explanation: '上午9:45→12:00 = 2小時15分。12:00（下午）→下午2:30 = 2小時30分。總共：2小時15分 + 2小時30分 = 4小時45分。',
    explanationSteps: ['第一步：上午9:45→12:00 = 2小時15分。', '第二步：12:00（下午）→下午2:30 = 2小時30分。', '第三步：總共：2小時15分 + 2小時30分 = 4小時45分。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['從上午 9:45'],
      method: '單位換算',
      methodHint: '分兩段：9:45→12:00=2小時15分，12:00→2:30=2小時30分，加埋=4小時45分。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['5 小時 45 分', '4 小時 45 分', '全部', '冇'], answer: '4 小時 45 分', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['5 小時 45 分', '4 小時 45 分', '4 小時 45 分', '5 小時 45 分'], answer: '4 小時 45 分', feedback: '答啱！' }
      ]
    },
  },
  // 52
  { id: 'm_h2', topic: 'measurement', difficulty: 'hard',
    question: '爸爸開車去 Auntie 家，路程 15 公里 800 米。他先走了 8 公里 500 米，還剩多少米？',
    options: ['7300 米', '730 米', '73000 米', '7030 米'],
    answer: '7300 米',
    hint: '15km800m−8km500m=7km300m=7300m。',
    explanation: '15公里800米 − 8公里500米 = 7公里300米 = 7300米。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：15km800m−8km500m=7km300m=7300m。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['爸爸開車去 Au'],
      method: '單位換算',
      methodHint: '15km800m−8km500m=7km300m=7300m。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['730 米', '7300 米', '全部', '冇'], answer: '7300 米', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['730 米', '7300 米', '7300 米', '730 米'], answer: '7300 米', feedback: '答啱！' }
      ]
    },
  },
  // 53
  { id: 'm_h3', topic: 'measurement', difficulty: 'hard',
    question: '小明游泳用了 3 分 25 秒，小華用了 4 分 10 秒。小明快了多少秒？',
    options: ['45 秒', '55 秒', '35 秒', '65 秒'],
    answer: '45 秒',
    hint: '4分10秒−3分25秒=3分70秒−3分25秒=45秒。',
    explanation: '4分10秒 − 3分25秒 = 3分70秒 − 3分25秒 = 45秒。小明快了45秒。',
    explanationSteps: ['第一步：4分10秒 − 3分25秒 = 3分70秒 − 3分25秒 = 45秒。', '第二步：小明快了45秒。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['小明游泳用了 3'],
      method: '單位換算',
      methodHint: '4分10秒−3分25秒=3分70秒−3分25秒=45秒。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['55 秒', '45 秒', '全部', '冇'], answer: '45 秒', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['55 秒', '45 秒', '45 秒', '55 秒'], answer: '45 秒', feedback: '答啱！' }
      ]
    },
  },
  // 54
  { id: 'm_h4', topic: 'measurement', difficulty: 'hard',
    question: '一瓶果汁有 1 升 250 毫升，倒滿 3 個杯子每個 150 毫升後，還剩多少？',
    options: ['800 毫升', '850 毫升', '750 毫升', '700 毫升'],
    answer: '800 毫升',
    hint: '1L250mL=1250mL，3杯共 3×150=450mL，1250−450=800mL。',
    explanation: '1升250毫升 = 1250毫升。3杯共用了 3 × 150 = 450毫升。剩下 1250 − 450 = 800毫升。',
    explanationSteps: ['第一步：1升250毫升 = 1250毫升。', '第二步：3杯共用了 3 × 150 = 450毫升。', '第三步：剩下 1250 − 450 = 800毫升。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一瓶果汁有 1 '],
      method: '單位換算',
      methodHint: '1L250mL=1250mL，3杯共 3×150=450mL，1250−450=800mL。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['850 毫升', '800 毫升', '全部', '冇'], answer: '800 毫升', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['850 毫升', '800 毫升', '800 毫升', '850 毫升'], answer: '800 毫升', feedback: '答啱！' }
      ]
    },
  },
  // 55
  { id: 'm_h5', topic: 'measurement', difficulty: 'hard',
    question: '一條絲帶長 3 米 25 厘米，剪成 5 段一樣長，每段長多少？',
    options: ['65 厘米', '75 厘米', '55 厘米', '85 厘米'],
    answer: '65 厘米',
    hint: '3m25cm=325cm，325÷5=65cm。',
    explanation: '3米25厘米 = 325厘米。325 ÷ 5 = 65厘米。每段長65厘米。',
    explanationSteps: ['第一步：3米25厘米 = 325厘米。', '第二步：325 ÷ 5 = 65厘米。', '第三步：每段長65厘米。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一條絲帶長 3 '],
      method: '單位換算',
      methodHint: '3m25cm=325cm，325÷5=65cm。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['75 厘米', '65 厘米', '全部', '冇'], answer: '65 厘米', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['75 厘米', '65 厘米', '65 厘米', '75 厘米'], answer: '65 厘米', feedback: '答啱！' }
      ]
    },
  },
  // 56
  { id: 'm_h6', topic: 'measurement', difficulty: 'hard',
    question: '火車 11:45 到達，但延誤了 35 分鐘，實際何時到達？',
    options: ['12:20', '12:10', '11:80', '12:30'],
    answer: '12:20',
    hint: '11:45+35分=11:45+15分=12:00，再加20分=12:20。',
    explanation: '11:45 + 35分鐘 = 11:45 + 15分鐘 = 12:00，再加20分鐘 = 12:20。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：11:45+35分=11:45+15分=12:00，再加20分=12:20。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['火車 11:45'],
      method: '單位換算',
      methodHint: '11:45+35分=11:45+15分=12:00，再加20分=12:20。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['12:10', '12:20', '全部', '冇'], answer: '12:20', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['12:10', '12:20', '12:20', '12:10'], answer: '12:20', feedback: '答啱！' }
      ]
    },
  },
  // 57
  { id: 'm_h7', topic: 'measurement', difficulty: 'hard',
    question: '操場一圈 400 米，小明跑了 3 圈又 200 米，共跑了多少公里？',
    options: ['1.4 公里', '1.2 公里', '1.6 公里', '14 公里'],
    answer: '1.4 公里',
    hint: '3×400=1200米，+200=1400米=1.4公里。',
    explanation: '3圈 = 3 × 400 = 1200米。再加200米 = 1400米。1400米 = 1.4公里。',
    explanationSteps: ['第一步：3圈 = 3 × 400 = 1200米。', '第二步：再加200米 = 1400米。', '第三步：1400米 = 1.4公里。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['操場一圈 400'],
      method: '單位換算',
      methodHint: '3×400=1200米，+200=1400米=1.4公里。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['1.2 公里', '1.4 公里', '全部', '冇'], answer: '1.4 公里', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['1.2 公里', '1.4 公里', '1.4 公里', '1.2 公里'], answer: '1.4 公里', feedback: '答啱！' }
      ]
    },
  },
  // 58
  { id: 'm_h8', topic: 'measurement', difficulty: 'hard',
    question: '媽媽買了 2 公斤 500 克豬肉，用了 1 公斤 800 克，還剩多少克？',
    options: ['700 克', '800 克', '600 克', '500 克'],
    answer: '700 克',
    hint: '2kg500g = 2500g，2500−1800=700g。',
    explanation: '2公斤500克 = 2500克。2500 − 1800 = 700克。',
    explanationSteps: ['第一步：2公斤500克 = 2500克。', '第二步：2500 − 1800 = 700克。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['媽媽買了 2 公'],
      method: '單位換算',
      methodHint: '2kg500g = 2500g，2500−1800=700g。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['800 克', '700 克', '全部', '冇'], answer: '700 克', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['800 克', '700 克', '700 克', '800 克'], answer: '700 克', feedback: '答啱！' }
      ]
    },
  },
  // 59
  { id: 'm_h9', topic: 'measurement', difficulty: 'hard',
    question: '一本書厚 12 毫米，10 本同樣的書疊起來高多少厘米？',
    options: ['12 厘米', '120 厘米', '1.2 厘米', '1200 厘米'],
    answer: '12 厘米',
    hint: '12mm×10=120mm，120÷10=12cm。',
    explanation: '10本書 = 12 × 10 = 120毫米。120毫米 ÷ 10 = 12厘米。',
    explanationSteps: ['第一步：10本書 = 12 × 10 = 120毫米。', '第二步：120毫米 ÷ 10 = 12厘米。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一本書厚 12 '],
      method: '單位換算',
      methodHint: '12mm×10=120mm，120÷10=12cm。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['120 厘米', '12 厘米', '全部', '冇'], answer: '12 厘米', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['120 厘米', '12 厘米', '12 厘米', '120 厘米'], answer: '12 厘米', feedback: '答啱！' }
      ]
    },
  },
  // 60
  { id: 'm_h10', topic: 'measurement', difficulty: 'hard',
    question: '足球比賽上半場 45 分鐘，中場休息 15 分鐘，下半場 45 分鐘。如下午 3:00 開賽，何時結束？',
    options: ['下午 4:45', '下午 4:30', '下午 5:00', '下午 4:15'],
    answer: '下午 4:45',
    hint: '45+15+45=105分=1小時45分，3:00+1小時45分=4:45。',
    explanation: '總時間：45 + 15 + 45 = 105分鐘 = 1小時45分。下午3:00 + 1小時45分 = 下午4:45。',
    explanationSteps: ['第一步：總時間：45 + 15 + 45 = 105分鐘 = 1小時45分。', '第二步：下午3:00 + 1小時45分 = 下午4:45。'],
    commonMistake: '有啲小朋友會用錯單位，記得睇清楚題目用緊咩單位。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['足球比賽上半場 '],
      method: '單位換算',
      methodHint: '45+15+45=105分=1小時45分，3:00+1小時45分=4:45。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['下午 4:30', '下午 4:45', '全部', '冇'], answer: '下午 4:45', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['下午 4:30', '下午 4:45', '下午 4:45', '下午 4:30'], answer: '下午 4:45', feedback: '答啱！' }
      ]
    },
  },
  // 61
  { id: 's_e1', topic: 'shapes', difficulty: 'easy',
    question: '下面哪個是平行線的特徵？',
    options: ['兩條線永遠不會相交', '兩條線會交叉', '兩條線是彎曲的', '兩條線有相交'],
    answer: '兩條線永遠不會相交',
    hint: '鐵路路軌就是平行線，它們一直向前但永遠不會碰在一起。',
    explanation: '平行線是兩條直線，它們之間的距離永遠一樣，不會相交。鐵路路軌就是最好的例子。',
    explanationSteps: ['第一步：平行線是兩條直線，它們之間的距離永遠一樣，不會相交。', '第二步：鐵路路軌就是最好的例子。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['下面哪個是平行線'],
      method: '圖形分析',
      methodHint: '鐵路路軌就是平行線，它們一直向前但永遠不會碰在一起。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['兩條線會交叉', '兩條線永遠不會相交', '全部', '冇'], answer: '兩條線永遠不會相交', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['兩條線會交叉', '兩條線永遠不會相交', '兩條線永遠不會相交', '兩條線會交叉'], answer: '兩條線永遠不會相交', feedback: '答啱！' }
      ]
    },
  },
  // 62
  { id: 's_e2', topic: 'shapes', difficulty: 'easy',
    question: '長方形有幾個直角？',
    options: ['4 個', '2 個', '3 個', '1 個'],
    answer: '4 個',
    hint: '長方形的四個角落都是 90 度（直角）。',
    explanation: '長方形的四個角都是 90 度的直角。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：長方形的四個角落都是 90 度（直角）。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['長方形有幾個直角'],
      method: '圖形分析',
      methodHint: '長方形的四個角落都是 90 度（直角）。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['2 個', '4 個', '全部', '冇'], answer: '4 個', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['2 個', '4 個', '4 個', '2 個'], answer: '4 個', feedback: '答啱！' }
      ]
    },
  },
  // 63
  { id: 's_e3', topic: 'shapes', difficulty: 'easy',
    question: '以下哪個是三角形？',
    options: ['🔺 三條邊', '⬛ 四條邊', '⬟ 五條邊', '⭕ 沒有邊'],
    answer: '🔺 三條邊',
    hint: '三角形有三條邊、三個角。',
    explanation: '三角形（🔺）有3條邊、3個角、3個頂點。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：三角形有三條邊、三個角。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['以下哪個是三角形'],
      method: '圖形分析',
      methodHint: '三角形有三條邊、三個角。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['⬛ 四條邊', '🔺 三條邊', '全部', '冇'], answer: '🔺 三條邊', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['⬛ 四條邊', '🔺 三條邊', '🔺 三條邊', '⬛ 四條邊'], answer: '🔺 三條邊', feedback: '答啱！' }
      ]
    },
  },
  // 64
  { id: 's_e4', topic: 'shapes', difficulty: 'easy',
    question: '正方形和長方形有甚麼共同點？',
    options: ['四個角都是直角', '四條邊一樣長', '對邊不平行', '只有兩條邊'],
    answer: '四個角都是直角',
    hint: '它們的四個角落都是 90 度。',
    explanation: '正方形和長方形的四個角都是直角（90度）。分別是正方形四邊等長，長方形對邊等長。',
    explanationSteps: ['第一步：正方形和長方形的四個角都是直角（90度）。', '第二步：分別是正方形四邊等長，長方形對邊等長。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['正方形和長方形有'],
      method: '圖形分析',
      methodHint: '它們的四個角落都是 90 度。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['四條邊一樣長', '四個角都是直角', '全部', '冇'], answer: '四個角都是直角', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['四條邊一樣長', '四個角都是直角', '四個角都是直角', '四條邊一樣長'], answer: '四個角都是直角', feedback: '答啱！' }
      ]
    },
  },
  // 65
  { id: 's_e5', topic: 'shapes', difficulty: 'easy',
    question: '一個三角形有幾條邊？',
    options: ['3 條', '4 條', '2 條', '5 條'],
    answer: '3 條',
    hint: '「三」角形就是有三個角、三條邊。',
    explanation: '三角形有 3 條邊、3 個角、3 個頂點。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：「三」角形就是有三個角、三條邊。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個三角形有幾條'],
      method: '圖形分析',
      methodHint: '「三」角形就是有三個角、三條邊。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['4 條', '3 條', '全部', '冇'], answer: '3 條', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['4 條', '3 條', '3 條', '4 條'], answer: '3 條', feedback: '答啱！' }
      ]
    },
  },
  // 66
  { id: 's_e6', topic: 'shapes', difficulty: 'easy',
    question: '下列哪個不是四邊形？',
    options: ['三角形', '長方形', '正方形', '平行四邊形'],
    answer: '三角形',
    hint: '四邊形有四條邊，三角形只有三條邊。',
    explanation: '三角形只有3條邊，所以不是四邊形。長方形、正方形、平行四邊形都有4條邊。',
    explanationSteps: ['第一步：三角形只有3條邊，所以不是四邊形。', '第二步：長方形、正方形、平行四邊形都有4條邊。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['下列哪個不是四邊'],
      method: '圖形分析',
      methodHint: '四邊形有四條邊，三角形只有三條邊。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['長方形', '三角形', '全部', '冇'], answer: '三角形', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['長方形', '三角形', '三角形', '長方形'], answer: '三角形', feedback: '答啱！' }
      ]
    },
  },
  // 67
  { id: 's_e7', topic: 'shapes', difficulty: 'easy',
    question: '圓形有幾個角？',
    options: ['0 個', '1 個', '2 個', '4 個'],
    answer: '0 個',
    hint: '圓形是光滑的曲線，沒有角。',
    explanation: '圓形沒有直線邊，也沒有角。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：圓形是光滑的曲線，沒有角。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['圓形有幾個角？'],
      method: '圖形分析',
      methodHint: '圓形是光滑的曲線，沒有角。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['1 個', '0 個', '全部', '冇'], answer: '0 個', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['1 個', '0 個', '0 個', '1 個'], answer: '0 個', feedback: '答啱！' }
      ]
    },
  },
  // 68
  { id: 's_e8', topic: 'shapes', difficulty: 'easy',
    question: '直角等於幾度？',
    options: ['90 度', '45 度', '180 度', '60 度'],
    answer: '90 度',
    hint: '直角就像書本的角落，直直的。',
    explanation: '直角 = 90 度。正方形和長方形的角就是直角。',
    explanationSteps: ['第一步：直角 = 90 度。', '第二步：正方形和長方形的角就是直角。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['直角等於幾度？'],
      method: '圖形分析',
      methodHint: '直角就像書本的角落，直直的。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['45 度', '90 度', '全部', '冇'], answer: '90 度', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['45 度', '90 度', '90 度', '45 度'], answer: '90 度', feedback: '答啱！' }
      ]
    },
  },
  // 69
  { id: 's_e9', topic: 'shapes', difficulty: 'easy',
    question: '平行四邊形有幾組平行邊？',
    options: ['2 組', '1 組', '3 組', '沒有'],
    answer: '2 組',
    hint: '平行四邊形的「對邊」是平行的，有兩組對邊。',
    explanation: '平行四邊形有兩組對邊互相平行。就像一個被推歪了的長方形。',
    explanationSteps: ['第一步：平行四邊形有兩組對邊互相平行。', '第二步：就像一個被推歪了的長方形。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['平行四邊形有幾組'],
      method: '圖形分析',
      methodHint: '平行四邊形的「對邊」是平行的，有兩組對邊。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['1 組', '2 組', '全部', '冇'], answer: '2 組', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['1 組', '2 組', '2 組', '1 組'], answer: '2 組', feedback: '答啱！' }
      ]
    },
  },
  // 70
  { id: 's_e10', topic: 'shapes', difficulty: 'easy',
    question: '下面哪個圖形的邊數最多？',
    options: ['五邊形', '長方形', '三角形', '圓形'],
    answer: '五邊形',
    hint: '三角形3條、長方形4條、五邊形5條、圓形0條。',
    explanation: '五邊形有5條邊，最多。長方形4條，三角形3條，圓形0條。',
    explanationSteps: ['第一步：五邊形有5條邊，最多。', '第二步：長方形4條，三角形3條，圓形0條。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['下面哪個圖形的邊'],
      method: '圖形分析',
      methodHint: '三角形3條、長方形4條、五邊形5條、圓形0條。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['長方形', '五邊形', '全部', '冇'], answer: '五邊形', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['長方形', '五邊形', '五邊形', '長方形'], answer: '五邊形', feedback: '答啱！' }
      ]
    },
  },
  // 71
  { id: 's_m1', topic: 'shapes', difficulty: 'medium',
    question: '平行四邊形和梯形最大的分別是甚麼？',
    options: ['平行四邊形有兩組對邊平行，梯形只有一組', '梯形有四條邊，平行四邊形沒有', '平行四邊形的邊不等長', '它們沒有分別'],
    answer: '平行四邊形有兩組對邊平行，梯形只有一組',
    hint: '平行四邊形象推歪了的長方形，梯形象切了頂的三角形。',
    explanation: '平行四邊形有兩組對邊平行。梯形只有一組對邊平行（像一個切了頂的三角形）。',
    explanationSteps: ['第一步：平行四邊形有兩組對邊平行。', '第二步：梯形只有一組對邊平行（像一個切了頂的三角形）。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['平行四邊形和梯形'],
      method: '圖形分析',
      methodHint: '平行四邊形象推歪了的長方形，梯形象切了頂的三角形。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['梯形有四條邊，平行四邊形沒有', '平行四邊形有兩組對邊平行，梯形只有一組', '全部', '冇'], answer: '平行四邊形有兩組對邊平行，梯形只有一組', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['梯形有四條邊，平行四邊形沒有', '平行四邊形有兩組對邊平行，梯形只有一組', '平行四邊形有兩組對邊平行，梯形只有一組', '梯形有四條邊，平行四邊形沒有'], answer: '平行四邊形有兩組對邊平行，梯形只有一組', feedback: '答啱！' }
      ]
    },
  },
  // 72
  { id: 's_m2', topic: 'shapes', difficulty: 'medium',
    question: '等腰三角形的特徵是？',
    options: ['兩條邊一樣長', '三條邊一樣長', '有一個直角', '三條邊都不一樣'],
    answer: '兩條邊一樣長',
    hint: '"等腰"的「腰」就是兩邊，所以兩邊相等。',
    explanation: '等腰三角形有兩條邊一樣長（稱為「腰」），底邊可以不同長度。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步："等腰"的「腰」就是兩邊，所以兩邊相等。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['等腰三角形的特徵'],
      method: '圖形分析',
      methodHint: '"等腰"的「腰」就是兩邊，所以兩邊相等。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['三條邊一樣長', '兩條邊一樣長', '全部', '冇'], answer: '兩條邊一樣長', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['三條邊一樣長', '兩條邊一樣長', '兩條邊一樣長', '三條邊一樣長'], answer: '兩條邊一樣長', feedback: '答啱！' }
      ]
    },
  },
  // 73
  { id: 's_m3', topic: 'shapes', difficulty: 'medium',
    question: '以下哪組邊長可以拼成一個三角形？',
    options: ['3cm, 4cm, 5cm', '1cm, 2cm, 4cm', '2cm, 2cm, 5cm', '1cm, 1cm, 3cm'],
    answer: '3cm, 4cm, 5cm',
    hint: '三角形需要「任意兩邊之和大於第三邊」。3+4>5。',
    explanation: '3+4=7>5✅，3+5=8>4✅，4+5=9>3✅。其他組合：1+2=3<4❌，2+2=4<5❌，1+1=2<3❌。',
    explanationSteps: ['第一步：3+4=7>5✅，3+5=8>4✅，4+5=9>3✅。', '第二步：其他組合：1+2=3<4❌，2+2=4<5❌，1+1=2<3❌。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['以下哪組邊長可以'],
      method: '圖形分析',
      methodHint: '三角形需要「任意兩邊之和大於第三邊」。3+4>5。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['1cm, 2cm, 4cm', '3cm, 4cm, 5cm', '全部', '冇'], answer: '3cm, 4cm, 5cm', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['1cm, 2cm, 4cm', '3cm, 4cm, 5cm', '3cm, 4cm, 5cm', '1cm, 2cm, 4cm'], answer: '3cm, 4cm, 5cm', feedback: '答啱！' }
      ]
    },
  },
  // 74
  { id: 's_m4', topic: 'shapes', difficulty: 'medium',
    question: '以下哪個一定是長方形但不是正方形？',
    options: ['對邊相等，四個直角，但四邊不等長', '四邊相等，四個直角', '只有兩條邊平等', '沒有直角的圖形'],
    answer: '對邊相等，四個直角，但四邊不等長',
    hint: '長方形對邊等長，正方形四邊等長。',
    explanation: '長方形要求：對邊相等 + 四個直角。正方形是特殊的長方形（四邊都相等）。如果對邊相等但四邊不等長，就是長方形但不是正方形。',
    explanationSteps: ['第一步：長方形要求：對邊相等 + 四個直角。', '第二步：正方形是特殊的長方形（四邊都相等）。', '第三步：如果對邊相等但四邊不等長，就是長方形但不是正方形。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['以下哪個一定是長'],
      method: '圖形分析',
      methodHint: '長方形對邊等長，正方形四邊等長。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['四邊相等，四個直角', '對邊相等，四個直角，但四邊不等長', '全部', '冇'], answer: '對邊相等，四個直角，但四邊不等長', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['四邊相等，四個直角', '對邊相等，四個直角，但四邊不等長', '對邊相等，四個直角，但四邊不等長', '四邊相等，四個直角'], answer: '對邊相等，四個直角，但四邊不等長', feedback: '答啱！' }
      ]
    },
  },
  // 75
  { id: 's_m5', topic: 'shapes', difficulty: 'medium',
    question: '一個圖形有四條邊，只有一組對邊平行。這是甚麼？',
    options: ['梯形', '平行四邊形', '正方形', '長方形'],
    answer: '梯形',
    hint: '梯形只有一組對邊平行，另一組不平行。',
    explanation: '梯形的定義：四邊形，有且僅有一組對邊平行。另一組對邊不平行。',
    explanationSteps: ['第一步：梯形的定義：四邊形，有且僅有一組對邊平行。', '第二步：另一組對邊不平行。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個圖形有四條邊'],
      method: '圖形分析',
      methodHint: '梯形只有一組對邊平行，另一組不平行。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['平行四邊形', '梯形', '全部', '冇'], answer: '梯形', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['平行四邊形', '梯形', '梯形', '平行四邊形'], answer: '梯形', feedback: '答啱！' }
      ]
    },
  },
  // 76
  { id: 's_m6', topic: 'shapes', difficulty: 'medium',
    question: '三角形三個角的和是多少度？',
    options: ['180 度', '90 度', '360 度', '270 度'],
    answer: '180 度',
    hint: '把三角形的三個角剪下來拼在一起，會形成一條直線。',
    explanation: '任何三角形的三個內角加起來都是 180 度。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：把三角形的三個角剪下來拼在一起，會形成一條直線。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['三角形三個角的和'],
      method: '圖形分析',
      methodHint: '把三角形的三個角剪下來拼在一起，會形成一條直線。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['90 度', '180 度', '全部', '冇'], answer: '180 度', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['90 度', '180 度', '180 度', '90 度'], answer: '180 度', feedback: '答啱！' }
      ]
    },
  },
  // 77
  { id: 's_m7', topic: 'shapes', difficulty: 'medium',
    question: '正方形屬於哪一類四邊形？',
    options: ['所有以上皆是', '長方形', '平行四邊形', '菱形'],
    answer: '所有以上皆是',
    hint: '正方形是一個「特別的」長方形、平行四邊形、菱形。',
    explanation: '正方形是特殊的長方形（四個直角），也是特殊的平行四邊形（兩組對邊平行），也是特殊的菱形（四邊相等）。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：正方形是一個「特別的」長方形、平行四邊形、菱形。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['正方形屬於哪一類'],
      method: '圖形分析',
      methodHint: '正方形是一個「特別的」長方形、平行四邊形、菱形。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['長方形', '所有以上皆是', '全部', '冇'], answer: '所有以上皆是', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['長方形', '所有以上皆是', '所有以上皆是', '長方形'], answer: '所有以上皆是', feedback: '答啱！' }
      ]
    },
  },
  // 78
  { id: 's_m8', topic: 'shapes', difficulty: 'medium',
    question: '一個三角形的兩個角是 45° 和 90°，第三個角是？',
    options: ['45°', '90°', '135°', '60°'],
    answer: '45°',
    hint: '三角和=180°，180−45−90=45。',
    explanation: '180° − 45° − 90° = 45°。這是一個等腰直角三角形。',
    explanationSteps: ['第一步：180° − 45° − 90° = 45°。', '第二步：這是一個等腰直角三角形。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個三角形的兩個'],
      method: '圖形分析',
      methodHint: '三角和=180°，180−45−90=45。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['90°', '45°', '全部', '冇'], answer: '45°', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['90°', '45°', '45°', '90°'], answer: '45°', feedback: '答啱！' }
      ]
    },
  },
  // 79
  { id: 's_m9', topic: 'shapes', difficulty: 'medium',
    question: '長方形是平行四邊形嗎？',
    options: ['是，因為長方形的對邊也平行', '不是，完全不同', '有時是，有時不是', '只有正方形才是'],
    answer: '是，因為長方形的對邊也平行',
    hint: '平行四邊形的定義是「兩組對邊平行」。長方形符合嗎？',
    explanation: '長方形的對邊互相平行（兩組都是），所以長方形其實是一個「特殊的平行四邊形」——加上四個直角。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：平行四邊形的定義是「兩組對邊平行」。長方形符合嗎？'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['長方形是平行四邊'],
      method: '圖形分析',
      methodHint: '平行四邊形的定義是「兩組對邊平行」。長方形符合嗎？',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['不是，完全不同', '是，因為長方形的對邊也平行', '全部', '冇'], answer: '是，因為長方形的對邊也平行', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['不是，完全不同', '是，因為長方形的對邊也平行', '是，因為長方形的對邊也平行', '不是，完全不同'], answer: '是，因為長方形的對邊也平行', feedback: '答啱！' }
      ]
    },
  },
  // 80
  { id: 's_m10', topic: 'shapes', difficulty: 'medium',
    question: '一個四邊形，有兩組對邊平行且相等，四個角都是直角。這是甚麼？',
    options: ['長方形', '梯形', '平行四邊形', '菱形'],
    answer: '長方形',
    hint: '對邊平行=平行四邊形，加上四個直角=長方形。',
    explanation: '兩組對邊平行=平行四邊形。加上四個直角=長方形。如果四邊也等長就是正方形。',
    explanationSteps: ['第一步：兩組對邊平行=平行四邊形。', '第二步：加上四個直角=長方形。', '第三步：如果四邊也等長就是正方形。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個四邊形，有兩'],
      method: '圖形分析',
      methodHint: '對邊平行=平行四邊形，加上四個直角=長方形。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['梯形', '長方形', '全部', '冇'], answer: '長方形', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['梯形', '長方形', '長方形', '梯形'], answer: '長方形', feedback: '答啱！' }
      ]
    },
  },
  // 81
  { id: 's_h1', topic: 'shapes', difficulty: 'hard',
    question: '一個三角形有一個直角，另外兩個角都是 45°。這是甚麼三角形？',
    options: ['等腰直角三角形', '等邊三角形', '不等邊三角形', '等腰三角形'],
    answer: '等腰直角三角形',
    hint: '直角=90°，兩個45°角相等，所以是等腰。',
    explanation: '有直角→直角三角形。兩個45°角相等→等腰三角形（兩腰等長）。所以是「等腰直角三角形」。',
    explanationSteps: ['第一步：有直角→直角三角形。', '第二步：兩個45°角相等→等腰三角形（兩腰等長）。', '第三步：所以是「等腰直角三角形」。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個三角形有一個'],
      method: '圖形分析',
      methodHint: '直角=90°，兩個45°角相等，所以是等腰。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['等邊三角形', '等腰直角三角形', '全部', '冇'], answer: '等腰直角三角形', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['等邊三角形', '等腰直角三角形', '等腰直角三角形', '等邊三角形'], answer: '等腰直角三角形', feedback: '答啱！' }
      ]
    },
  },
  // 82
  { id: 's_h2', topic: 'shapes', difficulty: 'hard',
    question: '等邊三角形的每個角是幾度？',
    options: ['60°', '90°', '45°', '30°'],
    answer: '60°',
    hint: '三角和=180°，等邊三角形三個角一樣大。',
    explanation: '等邊三角形三條邊相等，三個角也相等。180° ÷ 3 = 60°。',
    explanationSteps: ['第一步：等邊三角形三條邊相等，三個角也相等。', '第二步：180° ÷ 3 = 60°。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['等邊三角形的每個'],
      method: '圖形分析',
      methodHint: '三角和=180°，等邊三角形三個角一樣大。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['90°', '60°', '全部', '冇'], answer: '60°', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['90°', '60°', '60°', '90°'], answer: '60°', feedback: '答啱！' }
      ]
    },
  },
  // 83
  { id: 's_h3', topic: 'shapes', difficulty: 'hard',
    question: '每個正方形都是長方形，但長方形不一定是正方形。這句話對嗎？',
    options: ['對', '不對', '部分對', '無法判斷'],
    answer: '對',
    hint: '正方形是「特別的」長方形——四邊都相等。',
    explanation: '正方形滿足長方形所有條件（對邊相等+四個直角），而且四邊等長。所以每個正方形都是長方形，但長方形不一定四邊等長。',
    explanationSteps: ['第一步：正方形滿足長方形所有條件（對邊相等+四個直角），而且四邊等長。', '第二步：所以每個正方形都是長方形，但長方形不一定四邊等長。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['每個正方形都是長'],
      method: '圖形分析',
      methodHint: '正方形是「特別的」長方形——四邊都相等。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['不對', '對', '全部', '冇'], answer: '對', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['不對', '對', '對', '不對'], answer: '對', feedback: '答啱！' }
      ]
    },
  },
  // 84
  { id: 's_h4', topic: 'shapes', difficulty: 'hard',
    question: '下列哪個三角形既是等腰又是直角？',
    options: ['45°, 45°, 90°', '60°, 60°, 60°', '30°, 60°, 90°', '50°, 50°, 80°'],
    answer: '45°, 45°, 90°',
    hint: '等腰=兩角相等，直角=有一個90°。',
    explanation: '45°+45°+90°=180°。有直角（90°），而且兩個45°角相等，所以是等腰直角三角形。',
    explanationSteps: ['第一步：45°+45°+90°=180°。', '第二步：有直角（90°），而且兩個45°角相等，所以是等腰直角三角形。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['下列哪個三角形既'],
      method: '圖形分析',
      methodHint: '等腰=兩角相等，直角=有一個90°。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['60°, 60°, 60°', '45°, 45°, 90°', '全部', '冇'], answer: '45°, 45°, 90°', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['60°, 60°, 60°', '45°, 45°, 90°', '45°, 45°, 90°', '60°, 60°, 60°'], answer: '45°, 45°, 90°', feedback: '答啱！' }
      ]
    },
  },
  // 85
  { id: 's_h5', topic: 'shapes', difficulty: 'hard',
    question: '一組平行線被另一條線穿過，產生了 8 個角。如果其中一個角是 70°，它的同位角是幾度？',
    options: ['70°', '110°', '90°', '70°或110°'],
    answer: '70°',
    hint: '同位角的度數相同（相等）。',
    explanation: '平行線被直線穿過時，同位角相等。所以如果一個角是70°，它的同位角也是70°。',
    explanationSteps: ['第一步：平行線被直線穿過時，同位角相等。', '第二步：所以如果一個角是70°，它的同位角也是70°。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一組平行線被另一'],
      method: '圖形分析',
      methodHint: '同位角的度數相同（相等）。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['110°', '70°', '全部', '冇'], answer: '70°', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['110°', '70°', '70°', '110°'], answer: '70°', feedback: '答啱！' }
      ]
    },
  },
  // 86
  { id: 's_h6', topic: 'shapes', difficulty: 'hard',
    question: '一個長方形長 8cm，闊 5cm。周界是多少？',
    options: ['26cm', '40cm', '13cm', '36cm'],
    answer: '26cm',
    hint: '周界 = 2 × (長 + 闊) = 2 × (8+5)。',
    explanation: '周界 = 2 × (長 + 闊) = 2 × (8 + 5) = 2 × 13 = 26cm。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：周界 = 2 × (長 + 闊) = 2 × (8+5)。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個長方形長 8'],
      method: '圖形分析',
      methodHint: '周界 = 2 × (長 + 闊) = 2 × (8+5)。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['40cm', '26cm', '全部', '冇'], answer: '26cm', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['40cm', '26cm', '26cm', '40cm'], answer: '26cm', feedback: '答啱！' }
      ]
    },
  },
  // 87
  { id: 's_h7', topic: 'shapes', difficulty: 'hard',
    question: '一個正方形邊長 6cm，周界和面積分別是？',
    options: ['周界24cm', '周界12cm', '周界36cm', '周界30cm'],
    answer: '周界24cm',
    hint: '周界=4×邊=4×6=24。',
    explanation: '周界 = 4 × 邊長 = 4 × 6 = 24cm。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：周界=4×邊=4×6=24。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個正方形邊長 '],
      method: '圖形分析',
      methodHint: '周界=4×邊=4×6=24。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['周界12cm', '周界24cm', '全部', '冇'], answer: '周界24cm', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['周界12cm', '周界24cm', '周界24cm', '周界12cm'], answer: '周界24cm', feedback: '答啱！' }
      ]
    },
  },
  // 88
  { id: 's_h8', topic: 'shapes', difficulty: 'hard',
    question: '有兩個三角形：A的邊長3cm, 4cm, 5cm；B的邊長3cm, 3cm, 6cm。哪個可以拼成三角形？',
    options: ['只有A可以', '兩個都可以', '兩個都不可以', '只有B可以'],
    answer: '只有A可以',
    hint: '檢查「兩邊之和大於第三邊」。B的3+3=6，不大於6。',
    explanation: 'A：3+4>5✅, 3+5>4✅, 4+5>3✅。B：3+3=6，等於（不是大於）第三邊6，所以不行。三角形需要「大於」不是「等於」。',
    explanationSteps: ['第一步：A：3+4>5✅, 3+5>4✅, 4+5>3✅。', '第二步：B：3+3=6，等於（不是大於）第三邊6，所以不行。', '第三步：三角形需要「大於」不是「等於」。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['有兩個三角形：A'],
      method: '圖形分析',
      methodHint: '檢查「兩邊之和大於第三邊」。B的3+3=6，不大於6。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['兩個都可以', '只有A可以', '全部', '冇'], answer: '只有A可以', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['兩個都可以', '只有A可以', '只有A可以', '兩個都可以'], answer: '只有A可以', feedback: '答啱！' }
      ]
    },
  },
  // 89
  { id: 's_h9', topic: 'shapes', difficulty: 'hard',
    question: '等邊三角形也是等腰三角形嗎？',
    options: ['是，因為等邊最少有兩邊相等', '不是，完全不同', '要看邊長決定', '只有直角等邊才是'],
    answer: '是，因為等邊最少有兩邊相等',
    hint: '等腰的定義是「最少有兩條邊相等」。',
    explanation: '等腰三角形的定義是「最少有兩條邊相等」。等邊三角形有三條邊相等，當然符合條件，所以等邊三角形也是等腰三角形。',
    explanationSteps: ['第一步：等腰三角形的定義是「最少有兩條邊相等」。', '第二步：等邊三角形有三條邊相等，當然符合條件，所以等邊三角形也是等腰三角形。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['等邊三角形也是等'],
      method: '圖形分析',
      methodHint: '等腰的定義是「最少有兩條邊相等」。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['不是，完全不同', '是，因為等邊最少有兩邊相等', '全部', '冇'], answer: '是，因為等邊最少有兩邊相等', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['不是，完全不同', '是，因為等邊最少有兩邊相等', '是，因為等邊最少有兩邊相等', '不是，完全不同'], answer: '是，因為等邊最少有兩邊相等', feedback: '答啱！' }
      ]
    },
  },
  // 90
  { id: 's_h10', topic: 'shapes', difficulty: 'hard',
    question: '一個四邊形，對邊平行但不相等，沒有直角。這是甚麼？',
    options: ['平行四邊形', '梯形', '長方形', '不可能是四邊形'],
    answer: '平行四邊形',
    hint: '兩組對邊平行 = 平行四邊形。即使沒有直角，它還是平行四邊形。',
    explanation: '平行四邊形的定義是「兩組對邊互相平行」。只要符合這個條件就是平行四邊形，不管有沒有直角。沒有直角的平行四邊形就是一個傾斜了的長方形。',
    explanationSteps: ['第一步：平行四邊形的定義是「兩組對邊互相平行」。', '第二步：只要符合這個條件就是平行四邊形，不管有沒有直角。', '第三步：沒有直角的平行四邊形就是一個傾斜了的長方形。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個四邊形，對邊'],
      method: '圖形分析',
      methodHint: '兩組對邊平行 = 平行四邊形。即使沒有直角，它還是平行四邊形。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['梯形', '平行四邊形', '全部', '冇'], answer: '平行四邊形', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['梯形', '平行四邊形', '平行四邊形', '梯形'], answer: '平行四邊形', feedback: '答啱！' }
      ]
    },
  },
  // 91
  { id: 'd_e1', topic: 'data', difficulty: 'easy',
    question: '長條圖中，最高的柱代表甚麼？',
    options: ['數量最多', '數量最少', '沒有意義', '顏色最靚'],
    answer: '數量最多',
    hint: '柱愈高代表數值愈大。',
    explanation: '長條圖的柱越高，代表該項目的數量越多。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：柱愈高代表數值愈大。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['長條圖中，最高的'],
      method: '數據分析',
      methodHint: '柱愈高代表數值愈大。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['數量最少', '數量最多', '全部', '冇'], answer: '數量最多', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['數量最少', '數量最多', '數量最多', '數量最少'], answer: '數量最多', feedback: '答啱！' }
      ]
    },
  },
  // 92
  { id: 'd_e2', topic: 'data', difficulty: 'easy',
    question: '圓形圖中，最大的一塊代表甚麼？',
    options: ['佔的比例最多', '體積最大', '顏色最多', '最先出現'],
    answer: '佔的比例最多',
    hint: '圓形圖用面積大小表示比例。最大的那塊佔比最多。',
    explanation: '圓形圖中最大的一塊代表該項目所佔的比例最大。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：圓形圖用面積大小表示比例。最大的那塊佔比最多。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['圓形圖中，最大的'],
      method: '數據分析',
      methodHint: '圓形圖用面積大小表示比例。最大的那塊佔比最多。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['體積最大', '佔的比例最多', '全部', '冇'], answer: '佔的比例最多', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['體積最大', '佔的比例最多', '佔的比例最多', '體積最大'], answer: '佔的比例最多', feedback: '答啱！' }
      ]
    },
  },
  // 93
  { id: 'd_e3', topic: 'data', difficulty: 'easy',
    question: '數線上的數字：0, 10, 20, 30, 40⋯⋯下一個數字是？',
    options: ['50', '45', '60', '41'],
    answer: '50',
    hint: '每次加10。40+10=50。',
    explanation: '規律是每次加10。40的下一個是50。',
    explanationSteps: ['第一步：規律是每次加10。', '第二步：40的下一個是50。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['數線上的數字：0'],
      method: '數據分析',
      methodHint: '每次加10。40+10=50。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['45', '50', '全部', '冇'], answer: '50', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['45', '50', '50', '45'], answer: '50', feedback: '答啱！' }
      ]
    },
  },
  // 94
  { id: 'd_e4', topic: 'data', difficulty: 'easy',
    question: '袋裏只有紅色波，抽到紅色波的可能性是？',
    options: ['一定', '不可能', '很大可能', '很小可能'],
    answer: '一定',
    hint: '全部都是紅色波，無論如何都抽到紅色。',
    explanation: '袋中全部都是紅色波，所以「一定」會抽到紅色波。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：全部都是紅色波，無論如何都抽到紅色。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['袋裏只有紅色波，'],
      method: '數據分析',
      methodHint: '全部都是紅色波，無論如何都抽到紅色。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['不可能', '一定', '全部', '冇'], answer: '一定', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['不可能', '一定', '一定', '不可能'], answer: '一定', feedback: '答啱！' }
      ]
    },
  },
  // 95
  { id: 'd_e5', topic: 'data', difficulty: 'easy',
    question: '長條圖顯示：蘋果🍎8人、橙🍊12人、香蕉🍌5人。最多人喜歡的是？',
    options: ['橙', '蘋果', '香蕉', '蘋果和橙一樣多'],
    answer: '橙',
    hint: '12 > 8 > 5，橙最多人喜歡。',
    explanation: '橙有12人喜歡，蘋果8人，香蕉5人。所以最多人喜歡橙。',
    explanationSteps: ['第一步：橙有12人喜歡，蘋果8人，香蕉5人。', '第二步：所以最多人喜歡橙。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['長條圖顯示：蘋果'],
      method: '數據分析',
      methodHint: '12 > 8 > 5，橙最多人喜歡。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['蘋果', '橙', '全部', '冇'], answer: '橙', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['蘋果', '橙', '橙', '蘋果'], answer: '橙', feedback: '答啱！' }
      ]
    },
  },
  // 96
  { id: 'd_e6', topic: 'data', difficulty: 'easy',
    question: '以下哪個事件「不可能」發生？',
    options: ['明天太陽從西邊升起', '明天會下雨', '抽到紅色波', '明天是星期一'],
    answer: '明天太陽從西邊升起',
    hint: '太陽一定是從東邊升起的，這是自然規律。',
    explanation: '太陽永遠從東邊升起，從西邊升起是不可能發生的事。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：太陽一定是從東邊升起的，這是自然規律。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['以下哪個事件「不'],
      method: '數據分析',
      methodHint: '太陽一定是從東邊升起的，這是自然規律。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['明天會下雨', '明天太陽從西邊升起', '全部', '冇'], answer: '明天太陽從西邊升起', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['明天會下雨', '明天太陽從西邊升起', '明天太陽從西邊升起', '明天會下雨'], answer: '明天太陽從西邊升起', feedback: '答啱！' }
      ]
    },
  },
  // 97
  { id: 'd_e7', topic: 'data', difficulty: 'easy',
    question: '圓形圖中，睡覺佔了 1/2，睡覺佔了多少百分比？',
    options: ['50%', '25%', '75%', '100%'],
    answer: '50%',
    hint: '1/2 = 一半 = 50%。',
    explanation: '1/2 等於一半，即 50%。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：1/2 = 一半 = 50%。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['圓形圖中，睡覺佔'],
      method: '數據分析',
      methodHint: '1/2 = 一半 = 50%。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['25%', '50%', '全部', '冇'], answer: '50%', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['25%', '50%', '50%', '25%'], answer: '50%', feedback: '答啱！' }
      ]
    },
  },
  // 98
  { id: 'd_e8', topic: 'data', difficulty: 'easy',
    question: '一班有 20 人，10 人戴眼鏡。戴眼鏡的人佔幾分之幾？',
    options: ['1/2', '1/4', '1/3', '1/5'],
    answer: '1/2',
    hint: '10÷20=1/2。',
    explanation: '10 ÷ 20 = 1/2。所以一半（1/2）的人戴眼鏡。',
    explanationSteps: ['第一步：10 ÷ 20 = 1/2。', '第二步：所以一半（1/2）的人戴眼鏡。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一班有 20 人'],
      method: '數據分析',
      methodHint: '10÷20=1/2。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['1/4', '1/2', '全部', '冇'], answer: '1/2', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['1/4', '1/2', '1/2', '1/4'], answer: '1/2', feedback: '答啱！' }
      ]
    },
  },
  // 99
  { id: 'd_e9', topic: 'data', difficulty: 'easy',
    question: '數線有 0、50、100。75 在哪裏？',
    options: ['50 和 100 中間', '0 和 50 中間', '比 100 大', '比 0 細'],
    answer: '50 和 100 中間',
    hint: '50 < 75 < 100，所以在50和100之間。',
    explanation: '75 比 50 大，比 100 小，所以在 50 和 100 之間的正中間。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：50 < 75 < 100，所以在50和100之間。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['數線有 0、50'],
      method: '數據分析',
      methodHint: '50 < 75 < 100，所以在50和100之間。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['0 和 50 中間', '50 和 100 中間', '全部', '冇'], answer: '50 和 100 中間', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['0 和 50 中間', '50 和 100 中間', '50 和 100 中間', '0 和 50 中間'], answer: '50 和 100 中間', feedback: '答啱！' }
      ]
    },
  },
  // 100
  { id: 'd_e10', topic: 'data', difficulty: 'easy',
    question: '長條圖的橫軸通常表示甚麼？',
    options: ['分類項目', '數量', '顏色', '時間'],
    answer: '分類項目',
    hint: '橫軸（下面）放的是不同類別，直軸（側邊）放數量。',
    explanation: '長條圖的橫軸（x軸）表示不同的分類項目，直軸（y軸）表示數量。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：橫軸（下面）放的是不同類別，直軸（側邊）放數量。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['長條圖的橫軸通常'],
      method: '數據分析',
      methodHint: '橫軸（下面）放的是不同類別，直軸（側邊）放數量。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['數量', '分類項目', '全部', '冇'], answer: '分類項目', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['數量', '分類項目', '分類項目', '數量'], answer: '分類項目', feedback: '答啱！' }
      ]
    },
  },
  // 101
  { id: 'd_m1', topic: 'data', difficulty: 'medium',
    question: '長條圖顯示：星期一20人、星期二15人、星期三25人。星期二和星期三共有多少人？',
    options: ['40人', '35人', '45人', '30人'],
    answer: '40人',
    hint: '星期二15人 + 星期三25人 = 40人。',
    explanation: '15（星期二）+ 25（星期三）= 40人。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：星期二15人 + 星期三25人 = 40人。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['長條圖顯示：星期'],
      method: '數據分析',
      methodHint: '星期二15人 + 星期三25人 = 40人。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['35人', '40人', '全部', '冇'], answer: '40人', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['35人', '40人', '40人', '35人'], answer: '40人', feedback: '答啱！' }
      ]
    },
  },
  // 102
  { id: 'd_m2', topic: 'data', difficulty: 'medium',
    question: '圓形圖中，閱讀佔 50%、運動佔 25%、玩遊戲佔 25%。玩遊戲比閱讀少多少百分比？',
    options: ['25%', '50%', '75%', '0%'],
    answer: '25%',
    hint: '50% − 25% = 25%。',
    explanation: '閱讀 50% − 玩遊戲 25% = 25%。玩遊戲比閱讀少 25%。',
    explanationSteps: ['第一步：閱讀 50% − 玩遊戲 25% = 25%。', '第二步：玩遊戲比閱讀少 25%。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['圓形圖中，閱讀佔'],
      method: '數據分析',
      methodHint: '50% − 25% = 25%。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['50%', '25%', '全部', '冇'], answer: '25%', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['50%', '25%', '25%', '50%'], answer: '25%', feedback: '答啱！' }
      ]
    },
  },
  // 103
  { id: 'd_m3', topic: 'data', difficulty: 'medium',
    question: '一個袋有 3 個紅波和 7 個藍波，抽出紅波的可能性是？',
    options: ['很小可能', '一定', '不可能', '很大可能'],
    answer: '很小可能',
    hint: '10 個波只有 3 個紅色，少於一半。',
    explanation: '3/10 < 1/2，所以抽到紅波的可能性「很小」。',
    explanationSteps: ['第一步：先睇清楚題目問咩。', '第二步：搵出題目入面嘅重要數字。', '第三步：10 個波只有 3 個紅色，少於一半。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一個袋有 3 個'],
      method: '數據分析',
      methodHint: '10 個波只有 3 個紅色，少於一半。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['一定', '很小可能', '全部', '冇'], answer: '很小可能', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['一定', '很小可能', '很小可能', '一定'], answer: '很小可能', feedback: '答啱！' }
      ]
    },
  },
  // 104
  { id: 'd_m4', topic: 'data', difficulty: 'medium',
    question: '以下是 5 位同學的分數：60, 70, 80, 90, 100。平均分是？',
    options: ['80分', '70分', '90分', '85分'],
    answer: '80分',
    hint: '加埋=60+70+80+90+100=400，400÷5=80。',
    explanation: '總和：60+70+80+90+100 = 400。平均：400 ÷ 5 = 80分。',
    explanationSteps: ['第一步：總和：60+70+80+90+100 = 400。', '第二步：平均：400 ÷ 5 = 80分。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['以下是 5 位同'],
      method: '數據分析',
      methodHint: '加埋=60+70+80+90+100=400，400÷5=80。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['70分', '80分', '全部', '冇'], answer: '80分', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['70分', '80分', '80分', '70分'], answer: '80分', feedback: '答啱！' }
      ]
    },
  },
  // 105
  { id: 'd_m5', topic: 'data', difficulty: 'medium',
    question: '長條圖：貓15人、狗10人、兔5人。貓比兔多幾人？',
    options: ['10人', '5人', '15人', '20人'],
    answer: '10人',
    hint: '15 − 5 = 10人。',
    explanation: '喜歡貓有15人，喜歡兔有5人。15 − 5 = 10人。',
    explanationSteps: ['第一步：喜歡貓有15人，喜歡兔有5人。', '第二步：15 − 5 = 10人。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['長條圖：貓15人'],
      method: '數據分析',
      methodHint: '15 − 5 = 10人。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['5人', '10人', '全部', '冇'], answer: '10人', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['5人', '10人', '10人', '5人'], answer: '10人', feedback: '答啱！' }
      ]
    },
  },
  // 106
  { id: 'd_m6', topic: 'data', difficulty: 'medium',
    question: '圓形圖中，紅色佔 1/4、藍色佔 1/4、綠色佔 1/2。紅色和藍色共佔多少？',
    options: ['1/2', '1/4', '3/4', '2/3'],
    answer: '1/2',
    hint: '1/4 + 1/4 = 2/4 = 1/2。',
    explanation: '1/4 + 1/4 = 2/4 = 1/2。紅色和藍色共佔一半。',
    explanationSteps: ['第一步：1/4 + 1/4 = 2/4 = 1/2。', '第二步：紅色和藍色共佔一半。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['圓形圖中，紅色佔'],
      method: '數據分析',
      methodHint: '1/4 + 1/4 = 2/4 = 1/2。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['1/4', '1/2', '全部', '冇'], answer: '1/2', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['1/4', '1/2', '1/2', '1/4'], answer: '1/2', feedback: '答啱！' }
      ]
    },
  },
  // 107
  { id: 'd_m7', topic: 'data', difficulty: 'medium',
    question: '數線：0——A——B——100，A和B把100分成3等份。A是幾？',
    options: ['33', '25', '50', '40'],
    answer: '33',
    hint: '如果3等份，100÷3≈33。A在0之後第一個點。',
    explanation: '100分成3等份，每份約33。所以A≈33，B≈67。',
    explanationSteps: ['第一步：100分成3等份，每份約33。', '第二步：所以A≈33，B≈67。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['數線：0——A—'],
      method: '數據分析',
      methodHint: '如果3等份，100÷3≈33。A在0之後第一個點。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['25', '33', '全部', '冇'], answer: '33', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['25', '33', '33', '25'], answer: '33', feedback: '答啱！' }
      ]
    },
  },
  // 108
  { id: 'd_m8', topic: 'data', difficulty: 'medium',
    question: '一班有 30 人，今日請假 3 人。出席率是幾分之幾？',
    options: ['27/30', '3/30', '30/30', '24/30'],
    answer: '27/30',
    hint: '出席人數 = 30 − 3 = 27人。',
    explanation: '出席人數：30 − 3 = 27人。出席率 = 27/30 = 9/10。',
    explanationSteps: ['第一步：出席人數：30 − 3 = 27人。', '第二步：出席率 = 27/30 = 9/10。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一班有 30 人'],
      method: '數據分析',
      methodHint: '出席人數 = 30 − 3 = 27人。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['3/30', '27/30', '全部', '冇'], answer: '27/30', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['3/30', '27/30', '27/30', '3/30'], answer: '27/30', feedback: '答啱！' }
      ]
    },
  },
  // 109
  { id: 'd_m9', topic: 'data', difficulty: 'medium',
    question: '以下數字：12, 15, 12, 18, 12。哪個數字出現最多？',
    options: ['12', '15', '18', '所有一樣多'],
    answer: '12',
    hint: '12 出現了 3 次，最多。',
    explanation: '12出現了3次，15和18各1次。所以12出現最多（眾數是12）。',
    explanationSteps: ['第一步：12出現了3次，15和18各1次。', '第二步：所以12出現最多（眾數是12）。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['以下數字：12,'],
      method: '數據分析',
      methodHint: '12 出現了 3 次，最多。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['15', '12', '全部', '冇'], answer: '12', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['15', '12', '12', '15'], answer: '12', feedback: '答啱！' }
      ]
    },
  },
  // 110
  { id: 'd_m10', topic: 'data', difficulty: 'medium',
    question: 'A袋有5個紅波5個藍波，B袋有9個紅波1個藍波。哪個袋抽到藍波的機會較大？',
    options: ['A袋', 'B袋', '機會一樣', '無法比較'],
    answer: 'A袋',
    hint: 'A袋5/10=1/2抽到藍，B袋1/10抽到藍。',
    explanation: 'A袋：5/10 = 1/2 機會抽到藍波。B袋：1/10機會。A袋的機會大很多！',
    explanationSteps: ['第一步：A袋：5/10 = 1/2 機會抽到藍波。', '第二步：B袋：1/10機會。', '第三步：A袋的機會大很多。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['A袋有5個紅波5'],
      method: '數據分析',
      methodHint: 'A袋5/10=1/2抽到藍，B袋1/10抽到藍。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['B袋', 'A袋', '全部', '冇'], answer: 'A袋', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['B袋', 'A袋', 'A袋', 'B袋'], answer: 'A袋', feedback: '答啱！' }
      ]
    },
  },
  // 111
  { id: 'd_h1', topic: 'data', difficulty: 'hard',
    question: '一架車行駛了 5 小時，時速記錄為：60, 70, 80, 70, 60 km/h。平均時速是多少？',
    options: ['68 km/h', '70 km/h', '65 km/h', '72 km/h'],
    answer: '68 km/h',
    hint: '總和：60+70+80+70+60=340，340÷5=68。',
    explanation: '總時速：60+70+80+70+60 = 340。平均：340 ÷ 5 = 68 km/h。',
    explanationSteps: ['第一步：總時速：60+70+80+70+60 = 340。', '第二步：平均：340 ÷ 5 = 68 km/h。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['一架車行駛了 5'],
      method: '數據分析',
      methodHint: '總和：60+70+80+70+60=340，340÷5=68。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['70 km/h', '68 km/h', '全部', '冇'], answer: '68 km/h', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['70 km/h', '68 km/h', '68 km/h', '70 km/h'], answer: '68 km/h', feedback: '答啱！' }
      ]
    },
  },
  // 112
  { id: 'd_h2', topic: 'data', difficulty: 'hard',
    question: '圓形圖中，上學佔 1/3，睡覺佔 1/3，其餘是玩樂和吃飯。玩樂和吃飯共佔多少？',
    options: ['1/3', '2/3', '1/2', '1/4'],
    answer: '1/3',
    hint: '全部 = 1。上學1/3+睡覺1/3=2/3，剩下1-2/3=1/3。',
    explanation: '上學 1/3 + 睡覺 1/3 = 2/3。剩下的 1 − 2/3 = 1/3 是玩樂和吃飯。',
    explanationSteps: ['第一步：上學 1/3 + 睡覺 1/3 = 2/3。', '第二步：剩下的 1 − 2/3 = 1/3 是玩樂和吃飯。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['圓形圖中，上學佔'],
      method: '數據分析',
      methodHint: '全部 = 1。上學1/3+睡覺1/3=2/3，剩下1-2/3=1/3。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['2/3', '1/3', '全部', '冇'], answer: '1/3', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['2/3', '1/3', '1/3', '2/3'], answer: '1/3', feedback: '答啱！' }
      ]
    },
  },
  // 113
  { id: 'd_h3', topic: 'data', difficulty: 'hard',
    question: '袋中有 2 紅、3 藍、5 綠波。抽到紅色波的機會是幾分之幾？',
    options: ['2/10', '3/10', '5/10', '8/10'],
    answer: '2/10',
    hint: '總波數：2+3+5=10，紅波有2個。',
    explanation: '總波數 = 2+3+5 = 10個。紅波有2個，抽到紅波的機會 = 2/10 = 1/5。',
    explanationSteps: ['第一步：總波數 = 2+3+5 = 10個。', '第二步：紅波有2個，抽到紅波的機會 = 2/10 = 1/5。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['袋中有 2 紅、'],
      method: '數據分析',
      methodHint: '總波數：2+3+5=10，紅波有2個。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['3/10', '2/10', '全部', '冇'], answer: '2/10', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['3/10', '2/10', '2/10', '3/10'], answer: '2/10', feedback: '答啱！' }
      ]
    },
  },
  // 114
  { id: 'd_h4', topic: 'data', difficulty: 'hard',
    question: '以下是 6 天的氣溫：25, 28, 30, 26, 27, 26°C。中位數是？',
    options: ['26.5°C', '26°C', '27°C', '28°C'],
    answer: '26.5°C',
    hint: '先排序：25,26,26,27,28,30。中間兩個是26和27，平均=26.5。',
    explanation: '排序：25, 26, 26, 27, 28, 30。共6個數，中間是第3、4個：26和27。中位數 = (26+27)÷2 = 26.5。',
    explanationSteps: ['第一步：排序：25, 26, 26, 27, 28, 30。', '第二步：共6個數，中間是第3、4個：26和27。', '第三步：中位數 = (26+27)÷2 = 26.5。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['以下是 6 天的'],
      method: '數據分析',
      methodHint: '先排序：25,26,26,27,28,30。中間兩個是26和27，平均=26.5。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['26°C', '26.5°C', '全部', '冇'], answer: '26.5°C', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['26°C', '26.5°C', '26.5°C', '26°C'], answer: '26.5°C', feedback: '答啱！' }
      ]
    },
  },
  // 115
  { id: 'd_h5', topic: 'data', difficulty: 'hard',
    question: '長條圖顯示4個月的收入：1月$200、2月$300、3月$250、4月$350。平均每月收入？',
    options: ['$275', '$300', '$250', '$325'],
    answer: '$275',
    hint: '總和：200+300+250+350=1100，1100÷4=275。',
    explanation: '總收入：200+300+250+350 = 1100。平均 = 1100 ÷ 4 = 275。',
    explanationSteps: ['第一步：總收入：200+300+250+350 = 1100。', '第二步：平均 = 1100 ÷ 4 = 275。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['長條圖顯示4個月'],
      method: '數據分析',
      methodHint: '總和：200+300+250+350=1100，1100÷4=275。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['$300', '$275', '全部', '冇'], answer: '$275', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['$300', '$275', '$275', '$300'], answer: '$275', feedback: '答啱！' }
      ]
    },
  },
  // 116
  { id: 'd_h6', topic: 'data', difficulty: 'hard',
    question: '圓形圖顯示學校開支：老師薪金 60%、設備 20%、活動 15%、其他 5%。老師薪金比其他三項總和多多少？',
    options: ['20%', '40%', '30%', '10%'],
    answer: '20%',
    hint: '其他三項：20+15+5=40%，60%−40%=20%。',
    explanation: '其他三項共：20% + 15% + 5% = 40%。老師薪金比其他多：60% − 40% = 20%。',
    explanationSteps: ['第一步：其他三項共：20% + 15% + 5% = 40%。', '第二步：老師薪金比其他多：60% − 40% = 20%。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['圓形圖顯示學校開'],
      method: '數據分析',
      methodHint: '其他三項：20+15+5=40%，60%−40%=20%。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['40%', '20%', '全部', '冇'], answer: '20%', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['40%', '20%', '20%', '40%'], answer: '20%', feedback: '答啱！' }
      ]
    },
  },
  // 117
  { id: 'd_h7', topic: 'data', difficulty: 'hard',
    question: '盒中有 10 張卡，編號 1 至 10。抽到比 7 大的數字的機會是？',
    options: ['3/10', '7/10', '4/10', '1/10'],
    answer: '3/10',
    hint: '比7大的數字是：8, 9, 10。共3個。',
    explanation: '比7大的數字有：8, 9, 10（共3個）。總共10個數字，機會 = 3/10。',
    explanationSteps: ['第一步：比7大的數字有：8, 9, 10（共3個）。', '第二步：總共10個數字，機會 = 3/10。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['盒中有 10 張'],
      method: '數據分析',
      methodHint: '比7大的數字是：8, 9, 10。共3個。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['7/10', '3/10', '全部', '冇'], answer: '3/10', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['7/10', '3/10', '3/10', '7/10'], answer: '3/10', feedback: '答啱！' }
      ]
    },
  },
  // 118
  { id: 'd_h8', topic: 'data', difficulty: 'hard',
    question: '以下是5個學生的分數：小明80、小華70、小美90、小強60、小麗X。如果平均分是78，小麗得幾分？',
    options: ['90', '85', '80', '95'],
    answer: '90',
    hint: '平均78×5人=總分390。已知=80+70+90+60=300，390−300=90。',
    explanation: '總分 = 78 × 5 = 390。已知四人總分 = 80+70+90+60 = 300。小麗得分 = 390 − 300 = 90分。',
    explanationSteps: ['第一步：總分 = 78 × 5 = 390。', '第二步：已知四人總分 = 80+70+90+60 = 300。', '第三步：小麗得分 = 390 − 300 = 90分。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['以下是5個學生的'],
      method: '數據分析',
      methodHint: '平均78×5人=總分390。已知=80+70+90+60=300，390−300=90。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['85', '90', '全部', '冇'], answer: '90', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['85', '90', '90', '85'], answer: '90', feedback: '答啱！' }
      ]
    },
  },
  // 119
  { id: 'd_h9', topic: 'data', difficulty: 'hard',
    question: 'A袋：3紅2藍；B袋：1紅4藍。從兩個袋各抽一個波，兩個都是藍色的機會是？',
    options: ['8/25', '2/25', '6/25', '4/25'],
    answer: '8/25',
    hint: 'A袋抽藍=2/5，B袋抽藍=4/5，兩個都要=2/5×4/5=8/25。',
    explanation: 'A袋抽到藍的機率 = 2/5。B袋抽到藍的機率 = 4/5。兩個都是藍 = 2/5 × 4/5 = 8/25。',
    explanationSteps: ['第一步：A袋抽到藍的機率 = 2/5。', '第二步：B袋抽到藍的機率 = 4/5。', '第三步：兩個都是藍 = 2/5 × 4/5 = 8/25。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['A袋：3紅2藍；'],
      method: '數據分析',
      methodHint: 'A袋抽藍=2/5，B袋抽藍=4/5，兩個都要=2/5×4/5=8/25。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['2/25', '8/25', '全部', '冇'], answer: '8/25', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['2/25', '8/25', '8/25', '2/25'], answer: '8/25', feedback: '答啱！' }
      ]
    },
  },
  // 120
  { id: 'd_h10', topic: 'data', difficulty: 'hard',
    question: '以下是一週的看書頁數：20, 25, 30, 20, 35, 40, X。如果平均是30頁，星期日（X）看了幾頁？',
    options: ['40頁', '35頁', '30頁', '45頁'],
    answer: '40頁',
    hint: '總和=30×7=210。已知=20+25+30+20+35+40=170，210−170=40。',
    explanation: '7天總頁數 = 30 × 7 = 210。已知6天 = 20+25+30+20+35+40 = 170。星期日 = 210 − 170 = 40頁。',
    explanationSteps: ['第一步：7天總頁數 = 30 × 7 = 210。', '第二步：已知6天 = 20+25+30+20+35+40 = 170。', '第三步：星期日 = 210 − 170 = 40頁。'],
    commonMistake: '有啲小朋友會睇漏「平均分」、「一共」呢啲關鍵字，記住要圈低佢哋。',
    teacherTip: '老師小貼士：圈低題目嘅關鍵字，可以幫你更快明白題目。',
    guidedReview: {
      keywords: ['以下是一週的看書'],
      method: '數據分析',
      methodHint: '總和=30×7=210。已知=20+25+30+20+35+40=170，210−170=40。',
      steps: [
        { prompt: '呢題入面邊個數字最重要？', type: 'choice', options: ['35頁', '40頁', '全部', '冇'], answer: '40頁', feedback: '好！跟住落黎計計佢。' },
        { prompt: '正確答案係咩？', type: 'choice', options: ['35頁', '40頁', '40頁', '35頁'], answer: '40頁', feedback: '答啱！' }
      ]
    },
  },
  // 121
  { id: 'n_e11', topic: 'numbers', difficulty: 'easy',
    question: '文具店有 32 枝鉛筆，賣了 12 枝，還剩幾枝？',
    options: ['20 枝', '18 枝', '22 枝', '24 枝'],
    answer: '20 枝',
    hint: '32 − 12 = 20。',
    explanation: '32 − 12，個位2−2=0，十位3−1=2，所以是20枝。',
    explanationSteps: ['第一步：題目話「賣了」，即係要減。', '第二步：32 − 12，由個位開始減：2−2=0。', '第三步：十位：3−1=2。', '第四步：所以係 20 枝。'],
    commonMistake: '有啲小朋友會用加法（32+12），但「賣了」係減少，要用減法。',
    teacherTip: '老師小貼士：見到「賣了」、「用了」、「給了」呢啲字，通常係減法。',
    guidedReview: {
      keywords: ['賣了', '32', '12', '還剩'],
      method: '減法',
      methodHint: '「賣了」就係減，搵出大數減細數。',
      steps: [
        { prompt: '呢題應該用加法定減法？', type: 'choice', options: ['加法', '減法', '乘法', '除法'], answer: '減法', feedback: '啱！賣咗即係減少。' },
        { prompt: '32 − 12 等於幾多？', type: 'choice', options: ['20', '22', '24', '44'], answer: '20', feedback: '好嘢！你計啱咗。' }
      ]
    },
  },
  // 122
  { id: 'n_e12', topic: 'numbers', difficulty: 'easy',
    question: '一班有 28 個學生，每行坐 4 人，可以坐滿幾行？',
    options: ['7 行', '6 行', '8 行', '5 行'],
    answer: '7 行',
    hint: '28 ÷ 4 = 7。',
    explanation: '28人每行4人，即係計 28 入面有幾多個 4。28 ÷ 4 = 7行。',
    explanationSteps: ['第一步：題目問「每行坐4人，可以坐滿幾行」，即係分組。', '第二步：分組就要用除法：28 ÷ 4。', '第三步：28 ÷ 4 = 7，所以坐滿 7 行。'],
    commonMistake: '有啲小朋友會用乘法（28×4），但分組係用除法。',
    teacherTip: '見到「每...幾...」或者「分成...」，通常係除法題。',
    guidedReview: {
      keywords: ['28 個', '每行 4 人', '幾行'],
      method: '除法',
      methodHint: '「每行」提示我哋用除法。',
      steps: [
        { prompt: '28 個學生，每行 4 人，應該用咩方法？', type: 'choice', options: ['加法', '減法', '乘法', '除法'], answer: '除法', feedback: '啱！分組用除法。' },
        { prompt: '28 ÷ 4 = ?', type: 'choice', options: ['5', '6', '7', '8'], answer: '7', feedback: '正確！28 ÷ 4 = 7。' }
      ]
    },
  },
  // 123
  { id: 'n_e13', topic: 'numbers', difficulty: 'easy',
    question: '57 × 3 = ?',
    options: ['171', '161', '181', '151'],
    answer: '171',
    hint: '50×3=150，7×3=21，150+21=171。',
    explanation: '57 × 3 = 50×3 + 7×3 = 150 + 21 = 171。',
    explanationSteps: ['第一步：57 可以拆成 50 同 7。', '第二步：先計 50×3=150。', '第三步：再計 7×3=21。', '第四步：150+21=171。'],
    commonMistake: '有啲小朋友會直接 57+57+57，但用乘數表更快。',
    teacherTip: '兩位數乘一位數，可以拆開計：十位×？+ 個位×？。',
    guidedReview: {
      keywords: ['57', '3', '乘'],
      method: '乘法',
      methodHint: '拆開 50 同 7 分別乘 3。',
      steps: [
        { prompt: '57 可以拆成幾多同幾多？', type: 'choice', options: ['50 同 7', '5 同 7', '57 同 0', '50 同 70'], answer: '50 同 7', feedback: '啱！57 = 50 + 7。' },
        { prompt: '50×3 + 7×3 = ?', type: 'choice', options: ['171', '150', '157', '161'], answer: '171', feedback: '好嘢！你計啱咗！' }
      ]
    },
  },
  // 124
  { id: 'n_e14', topic: 'numbers', difficulty: 'easy',
    question: '媽媽有 50 元，買麵包用了 28 元，還剩幾元？',
    options: ['22 元', '32 元', '12 元', '28 元'],
    answer: '22 元',
    hint: '50 − 28 = 22。',
    explanation: '50 − 28 = 22。個位0−8唔夠，要向十位借1，變成10−8=2，十位4−2=2。',
    explanationSteps: ['第一步：「用了」即係要減：50 − 28。', '第二步：個位 0−8 唔夠，向十位借 1，變成 10−8=2。', '第三步：十位原本係5，借咗1俾個位，得返4，4−2=2。', '第四步：所以答案是 22 元。'],
    commonMistake: '有啲小朋友會唔記得借位，計錯成 38。',
    teacherTip: '減法唔夠減時，要向隔籬位借 1。借完記住隔籬位要減返 1。',
    guidedReview: {
      keywords: ['50 元', '用了 28 元', '還剩'],
      method: '減法（借位）',
      methodHint: '「用了」係減法，唔夠減要借位。',
      steps: [
        { prompt: '呢題用加法定減法？', type: 'choice', options: ['加法', '減法'], answer: '減法', feedback: '啱！用了即係減少。' },
        { prompt: '個位 0−8 唔夠，要點做？', type: 'choice', options: ['直接寫8', '向十位借1', '掉轉計'], answer: '向十位借1', feedback: '好！借位就啱了。' }
      ]
    },
  },
  // 125
  { id: 'n_e15', topic: 'numbers', difficulty: 'easy',
    question: '7 × 8 = ?',
    options: ['56', '48', '64', '54'],
    answer: '56',
    hint: '7×8 = 56，記住七八五十六。',
    explanation: '7×8 係乘數表入面嘅「七八五十六」，等於 56。',
    explanationSteps: ['第一步：呢題係乘數表題。', '第二步：七八⋯⋯五十六！', '第三步：所以 7×8=56。'],
    commonMistake: '有啲小朋友會混淆 7×8=56 同 8×7=56（其實一樣）。',
    teacherTip: '乘數表要背熟！七八五十六，八七也是五十六。',
    guidedReview: {
      keywords: ['7', '8', '乘數表'],
      method: '乘數表',
      methodHint: '諗吓乘數表：七幾五十六？',
      steps: [
        { prompt: '7×8 等於幾多？', type: 'choice', options: ['48', '56', '64', '72'], answer: '56', feedback: '啱！七八五十六。' }
      ]
    },
  },
  // 126
  { id: 'n_e16', topic: 'numbers', difficulty: 'easy',
    question: '比較大小：45678 ○ 46578，括號內應填咩符號？',
    options: ['<', '>', '=', '唔使填'],
    answer: '<',
    hint: '先比萬位（相同），再比千位：5<6，所以 45678 < 46578。',
    explanation: '45678 和 46578，萬位都是4，千位 5<6，所以 45678 < 46578。',
    explanationSteps: ['第一步：先比萬位，兩個都係 4。', '第二步：再比千位，一個係 5，一個係 6。', '第三步：5 < 6，所以 45678 < 46578。'],
    commonMistake: '有啲小朋友會睇百位，但其實要比千位先。',
    teacherTip: '比較五位數口訣：先萬、後千、再百、再十、最後個位。',
    guidedReview: {
      keywords: ['比較大小', '45678', '46578'],
      method: '位值比較',
      methodHint: '由最大嘅位開始比較。',
      steps: [
        { prompt: '比較五位數，第一個要比咩位？', type: 'choice', options: ['萬位', '千位', '百位', '個位'], answer: '萬位', feedback: '啱！最大位係萬位。' },
        { prompt: '45678 同 46578，萬位相同，跟住比咩位？', type: 'choice', options: ['千位', '百位', '十位', '個位'], answer: '千位', feedback: '正確！比完萬位就比千位。' },
        { prompt: '千位 5 同 6，邊個大？', type: 'choice', options: ['5', '6'], answer: '6', feedback: '6大過5，所以 45678 < 46578。' }
      ]
    },
  },
  // 127
  { id: 'n_e17', topic: 'numbers', difficulty: 'easy',
    question: '6 × 9 = ？',
    options: ['54', '63', '45', '56'],
    answer: '54',
    hint: '六九五十四。',
    explanation: '6×9 = 54，乘數表嘅六九五十四。',
    explanationSteps: ['第一步：諗乘數表。', '第二步：六九⋯⋯五十四！', '第三步：6×9=54。'],
    commonMistake: '有啲小朋友會同 7×8=56 搞亂。',
    teacherTip: '記口訣：六九五十四，七九六十三。',
    guidedReview: {
      keywords: ['6', '9', '乘'],
      method: '乘數表',
      methodHint: '六九幾多？',
      steps: [
        { prompt: '6×9 = ?', type: 'choice', options: ['45', '54', '63', '56'], answer: '54', feedback: '啱！六九五十四！' }
      ]
    },
  },
  // 128
  { id: 'n_e18', topic: 'numbers', difficulty: 'easy',
    question: '8 個同學每人有 5 粒糖，一共有幾多粒糖？',
    options: ['40 粒', '35 粒', '45 粒', '13 粒'],
    answer: '40 粒',
    hint: '8×5=40。',
    explanation: '8 個同學，每人 5 粒，總數 = 8 × 5 = 40 粒。',
    explanationSteps: ['第一步：題目話「每人有 5 粒」，8 個人，即係 8 個 5。', '第二步：8 個 5 就係 8×5。', '第三步：8×5=40 粒。'],
    commonMistake: '有啲小朋友會用加法 5+5+5+5+5+5+5+5=40，但用乘法更快。',
    teacherTip: '見到「每人有幾多」同「一共有幾多人」，就用乘法。',
    guidedReview: {
      keywords: ['8 個同學', '每人 5 粒', '一共'],
      method: '乘法',
      methodHint: '「每人...」乘「人數」。',
      steps: [
        { prompt: '呢題應該用咩方法？', type: 'choice', options: ['加法', '減法', '乘法', '除法'], answer: '乘法', feedback: '啱！每人×人數=總數。' },
        { prompt: '8 × 5 = ?', type: 'choice', options: ['35', '40', '45', '13'], answer: '40', feedback: '好嘢！8×5=40。' }
      ]
    },
  },
  // 129
  { id: 'n_e19', topic: 'numbers', difficulty: 'easy',
    question: '寫出「三萬四千零五」的數字。',
    options: ['34005', '34050', '30405', '34500'],
    answer: '34005',
    hint: '3個萬=30000，4個千=4000，5個一=5，加埋=34005。',
    explanation: '三萬=30000，四千=4000，零=0，五=5。所以係 30000+4000+5=34005。',
    explanationSteps: ['第一步：三萬 = 30000。', '第二步：四千 = 4000。', '第三步：零表示百位同十位都係 0。', '第四步：五 = 5。加埋：30000+4000+5=34005。'],
    commonMistake: '有啲小朋友會寫成 34050（零嘅位置錯咗）。',
    teacherTip: '寫數字時，由最大位開始寫，冇嘅位就填 0。',
    guidedReview: {
      keywords: ['三萬四千零五', '寫數字'],
      method: '位值寫數',
      methodHint: '由萬位開始逐個位寫，冇嘅寫0。',
      steps: [
        { prompt: '「三萬」即係萬位係幾多？', type: 'choice', options: ['3', '30000', '3000', '30'], answer: '3', feedback: '啱！萬位係 3。' },
        { prompt: '「四千」即係千位係幾多？', type: 'choice', options: ['4', '4000', '400', '40'], answer: '4', feedback: '好！千位係 4。' },
        { prompt: '百位同十位係幾多？', type: 'choice', options: ['0', '5', '冇', '1'], answer: '0', feedback: '啱！「零」表示百位和十位都係 0。' }
      ]
    },
  },
  // 130
  { id: 'n_e20', topic: 'numbers', difficulty: 'easy',
    question: '4/7 和 6/7，哪個比較大？',
    options: ['6/7', '4/7', '一樣大', '無法比較'],
    answer: '6/7',
    hint: '分母相同（都係7），分子愈大分數愈大。6>4，所以 6/7 大。',
    explanation: '分母相同都是7，比較分子：6 > 4，所以 6/7 > 4/7。',
    explanationSteps: ['第一步：分母相同（都係7），表示每份一樣大。', '第二步：分子表示有幾多份：4份同6份。', '第三步：6份比4份多，所以 6/7 比較大。'],
    commonMistake: '有啲小朋友會睇錯，以為4/7大因為4同7近啲。',
    teacherTip: '分母相同比分母，分母愈大分子也要大先贏。同分母分數，分子大就大。',
    guidedReview: {
      keywords: ['4/7', '6/7', '比較'],
      method: '分數比較',
      methodHint: '分母相同時，分子大就大。',
      steps: [
        { prompt: '4/7 同 6/7 分母係咪一樣？', type: 'choice', options: ['係，都係7', '唔係', '唔知'], answer: '係，都係7', feedback: '啱！分母都係7。' },
        { prompt: '分母相同時，要比較咩？', type: 'choice', options: ['分子', '分母', '數字大細'], answer: '分子', feedback: '好！分母相同就比較分子。' },
        { prompt: '邊個分子大啲？', type: 'choice', options: ['4', '6'], answer: '6', feedback: '6>4，所以 6/7 大啲！' }
      ]
    },
  },
  // 131
  { id: 'm_e11', topic: 'measurement', difficulty: 'easy',
    question: '一枝鉛筆長約 18 厘米，幾多枝鉛筆駁埋先有 1 米？',
    options: ['大約 6 枝', '大約 4 枝', '大約 10 枝', '大約 2 枝'],
    answer: '大約 6 枝',
    hint: '1米=100厘米，100÷18≈5.5，大約6枝。',
    explanation: '1米=100厘米，每枝18厘米。100÷18=5⋯10，所以大約要6枝。',
    explanationSteps: ['第一步：1米 = 100厘米。', '第二步：每枝鉛筆18厘米。', '第三步：100 ÷ 18 ≈ 5.5，所以大約要6枝。'],
    commonMistake: '有啲小朋友會直接用 100−18，忘記要除。',
    teacherTip: '「每枝幾長」同「總共幾長」呢類問題，通常用除法。',
    guidedReview: {
      keywords: ['18厘米', '1米', '幾多枝'],
      method: '除法',
      methodHint: '先轉做同一單位（米轉厘米）。',
      steps: [
        { prompt: '1米等於幾多厘米？', type: 'choice', options: ['10cm', '100cm', '1000cm', '1cm'], answer: '100cm', feedback: '啱！1m=100cm。' },
        { prompt: '100÷18大約等於幾多？', type: 'choice', options: ['3', '5', '6', '10'], answer: '6', feedback: '大約6枝先夠1米。' }
      ]
    },
  },
  // 132
  { id: 'm_e12', topic: 'measurement', difficulty: 'easy',
    question: '小明下午 3:00 開始做功課，用了 45 分鐘，幾點做完？',
    options: ['下午 3:45', '下午 4:00', '下午 3:30', '下午 4:45'],
    answer: '下午 3:45',
    hint: '3:00 + 45分鐘 = 3:45。',
    explanation: '3:00 + 45分鐘 = 3:45。',
    explanationSteps: ['第一步：開始時間係下午3:00。', '第二步：用咗45分鐘。', '第三步：3:00 + 0:45 = 3:45。'],
    commonMistake: '有啲小朋友會加錯，以為3:00+45分=3:30。',
    teacherTip: '計算時間：時+時，分+分。分加超過60就要進位。',
    guidedReview: {
      keywords: ['下午 3:00', '45分鐘', '幾點'],
      method: '時間加法',
      methodHint: '3:00加45分鐘，分針行45格。',
      steps: [
        { prompt: '3:00 加 30分鐘係幾點？', type: 'choice', options: ['3:30', '2:30', '4:00', '3:15'], answer: '3:30', feedback: '啱！3:00+30分=3:30。' },
        { prompt: '再行多15分鐘呢？', type: 'choice', options: ['3:45', '4:00', '3:30', '3:50'], answer: '3:45', feedback: '好！3:30+15分=3:45。' }
      ]
    },
  },
  // 133
  { id: 'm_e13', topic: 'measurement', difficulty: 'easy',
    question: '1 公斤 500 克 = ? 克',
    options: ['1500 克', '1050 克', '1005 克', '150 克'],
    answer: '1500 克',
    hint: '1公斤=1000克，1000+500=1500克。',
    explanation: '1公斤 = 1000克，1000 + 500 = 1500克。',
    explanationSteps: ['第一步：1公斤 = 1000克。', '第二步：再加500克。', '第三步：1000 + 500 = 1500克。'],
    commonMistake: '有啲小朋友會寫 1005（唔記得加0）。',
    teacherTip: '公斤轉克，乘1000就得。記住1kg=1000g。',
    guidedReview: {
      keywords: ['1公斤', '500克', '轉換'],
      method: '單位換算',
      methodHint: '1kg=1000g，再加埋500g。',
      steps: [
        { prompt: '1公斤等於幾多克？', type: 'choice', options: ['100g', '1000g', '500g', '10g'], answer: '1000g', feedback: '啱！1kg=1000g。' },
        { prompt: '1000g + 500g = ?', type: 'choice', options: ['1500g', '1050g', '1005g', '150g'], answer: '1500g', feedback: '好嘢！1000+500=1500。' }
      ]
    },
  },
  // 134
  { id: 'm_e14', topic: 'measurement', difficulty: 'easy',
    question: '7 米 = ? 厘米',
    options: ['700 厘米', '70 厘米', '7000 厘米', '7 厘米'],
    answer: '700 厘米',
    hint: '1米=100厘米，7×100=700厘米。',
    explanation: '1米=100厘米，7米 = 7 × 100 = 700厘米。',
    explanationSteps: ['第一步：1米 = 100厘米。', '第二步：7米 = 7 × 100。', '第三步：7 × 100 = 700厘米。'],
    commonMistake: '有啲小朋友會乘錯，以為 7米=70厘米。',
    teacherTip: '米轉厘米，乘100就啱。1m=100cm，10m=1000cm。',
    guidedReview: {
      keywords: ['7米', '厘米', '轉換'],
      method: '單位換算（乘100）',
      methodHint: '米→厘米，乘100。',
      steps: [
        { prompt: '1米等於幾多厘米？', type: 'choice', options: ['10cm', '100cm', '1000cm'], answer: '100cm', feedback: '啱！1m=100cm。' },
        { prompt: '7 × 100 = ?', type: 'choice', options: ['70', '700', '7000', '7'], answer: '700', feedback: '好！7×100=700cm。' }
      ]
    },
  },
  // 135
  { id: 'm_e15', topic: 'measurement', difficulty: 'easy',
    question: '3 升 200 毫升 = ? 毫升',
    options: ['3200 毫升', '3020 毫升', '3002 毫升', '320 毫升'],
    answer: '3200 毫升',
    hint: '3升=3000毫升，3000+200=3200毫升。',
    explanation: '3升 = 3000毫升，3000 + 200 = 3200毫升。',
    explanationSteps: ['第一步：1升 = 1000毫升。', '第二步：3升 = 3 × 1000 = 3000毫升。', '第三步：3000 + 200 = 3200毫升。'],
    commonMistake: '有啲小朋友會寫 3020，百位同十位搞亂。',
    teacherTip: '升轉毫升，乘1000。幾升就係幾個1000毫升。',
    guidedReview: {
      keywords: ['3升', '200毫升', '轉換'],
      method: '單位換算',
      methodHint: '1L=1000mL，3L=3000mL。',
      steps: [
        { prompt: '1升等於幾多毫升？', type: 'choice', options: ['100mL', '1000mL', '10mL', '10000mL'], answer: '1000mL', feedback: '啱！1L=1000mL。' },
        { prompt: '3L = ? mL', type: 'choice', options: ['300mL', '3000mL', '30mL', '30000mL'], answer: '3000mL', feedback: '3×1000=3000mL。' },
        { prompt: '3000mL + 200mL = ?', type: 'choice', options: ['3020mL', '3200mL', '3002mL', '320mL'], answer: '3200mL', feedback: '加埋就係3200mL。' }
      ]
    },
  },
  // 136
  { id: 'm_m11', topic: 'measurement', difficulty: 'medium',
    question: '爸爸開車由沙田去元朗，車程 45 分鐘。他上午 10:30 出發，幾點到？',
    options: ['上午 11:15', '上午 11:00', '上午 11:30', '上午 10:75'],
    answer: '上午 11:15',
    hint: '10:30 + 45分 = 10:30 + 30分 = 11:00，再加15分 = 11:15。',
    explanation: '10:30 + 45分鐘 = 10:30先加30分鐘=11:00，再加15分鐘=11:15。',
    explanationSteps: ['第一步：10:30，先加30分鐘。', '第二步：10:30 + 0:30 = 11:00。', '第三步：45分 − 30分 = 15分，再加15分鐘。', '第四步：11:00 + 0:15 = 11:15。'],
    commonMistake: '有啲小朋友會計錯 10:30+45分=10:75，冇留意60分鐘=1小時。',
    teacherTip: '時間加法：分加超過60就要進位做1小時。45+30=75分=1小時15分。',
    guidedReview: {
      keywords: ['10:30', '45分鐘', '車程'],
      method: '時間加法',
      methodHint: '先加30分鐘到11:00，再加15分鐘。',
      steps: [
        { prompt: '10:30 加 30分鐘係幾點？', type: 'choice', options: ['11:00', '10:60', '11:30', '10:00'], answer: '11:00', feedback: '啱！10:30+30分=11:00。' },
        { prompt: '45 − 30 = 幾多？仲有幾多分鐘要加？', type: 'choice', options: ['15分鐘', '10分鐘', '5分鐘', '20分鐘'], answer: '15分鐘', feedback: '好！仲有15分鐘要加。' },
        { prompt: '11:00 + 15分 = ?', type: 'choice', options: ['11:15', '11:30', '12:00', '11:45'], answer: '11:15', feedback: '正確！11:00+15分=11:15到。' }
      ]
    },
  },
  // 137
  { id: 'm_m12', topic: 'measurement', difficulty: 'medium',
    question: '一條絲帶長 6 米 30 厘米，剪去 2 米 50 厘米，還剩多長？',
    options: ['3 米 80 厘米', '4 米 20 厘米', '3 米 20 厘米', '4 米 80 厘米'],
    answer: '3 米 80 厘米',
    hint: '6米30厘米−2米50厘米=5米130厘米−2米50厘米=3米80厘米。',
    explanation: '6m30cm − 2m50cm = 5m130cm − 2m50cm = 3m80cm。',
    explanationSteps: ['第一步：6米30厘米，30−50唔夠減，要向米借1。', '第二步：借1米=100厘米，30+100=130厘米。米位變5米。', '第三步：厘米：130−50=80厘米。米：5−2=3米。', '第四步：所以係 3 米 80 厘米。'],
    commonMistake: '有啲小朋友會直接 30−50，唔記得借位。',
    teacherTip: '複名數減法，唔夠減要向大單位借1。1米=100厘米，1公斤=1000克。',
    guidedReview: {
      keywords: ['6米30厘米', '剪去', '2米50厘米', '還剩'],
      method: '複名數減法',
      methodHint: '厘米唔夠減，要向米借1米=100厘米。',
      steps: [
        { prompt: '30cm − 50cm 夠唔夠減？', type: 'choice', options: ['夠', '唔夠'], answer: '唔夠', feedback: '啱！30唔夠減50。' },
        { prompt: '唔夠減要向邊個位借？', type: 'choice', options: ['米', '厘米', '毫米', '唔使借'], answer: '米', feedback: '好！向米位借1米=100厘米。' },
        { prompt: '借位後厘米變成幾多？', type: 'choice', options: ['130cm', '30cm', '100cm', '80cm'], answer: '130cm', feedback: '30+100=130cm。130−50=80cm！' }
      ]
    },
  },
  // 138
  { id: 'm_m13', topic: 'measurement', difficulty: 'medium',
    question: '下午 4:15 到下午 5:40，共過了多久？',
    options: ['1 小時 25 分', '1 小時 35 分', '1 小時 15 分', '2 小時 25 分'],
    answer: '1 小時 25 分',
    hint: '4:15→5:00（45分）→5:40（40分），45+40=85分=1小時25分。',
    explanation: '4:15到5:00是45分鐘，5:00到5:40是40分鐘。45+40=85分鐘=1小時25分。',
    explanationSteps: ['第一步：4:15 → 5:00 = 45分鐘。', '第二步：5:00 → 5:40 = 40分鐘。', '第三步：45 + 40 = 85分鐘。', '第四步：85分鐘 = 1小時25分鐘。'],
    commonMistake: '有啲小朋友會直接 5:40−4:15=1:25，但呢題啱啱好可以直接減。',
    teacherTip: '時間間隔可以分段計：先計到整點，再計到目標時間。',
    guidedReview: {
      keywords: ['4:15', '5:40', '過了多久'],
      method: '時間間隔',
      methodHint: '分段計：先計到5:00，再計到5:40。',
      steps: [
        { prompt: '4:15 到 5:00 有幾多分鐘？', type: 'choice', options: ['45分', '15分', '30分', '60分'], answer: '45分', feedback: '啱！4:15到5:00是45分鐘。' },
        { prompt: '5:00 到 5:40 有幾多分鐘？', type: 'choice', options: ['40分', '50分', '30分', '45分'], answer: '40分', feedback: '正確！5:00到5:40是40分鐘。' },
        { prompt: '45分 + 40分 = ?', type: 'choice', options: ['1小時25分', '1小時35分', '1小時15分', '2小時'], answer: '1小時25分', feedback: '好！85分=1小時25分。' }
      ]
    },
  },
  // 139
  { id: 'm_m14', topic: 'measurement', difficulty: 'medium',
    question: '一盒果汁有 2 升，倒滿 6 個杯子，每個杯 150 毫升，還剩多少毫升？',
    options: ['1100 毫升', '110 毫升', '900 毫升', '1000 毫升'],
    answer: '1100 毫升',
    hint: '2L=2000mL，6杯=6×150=900mL，2000−900=1100mL。',
    explanation: '2L=2000mL。6杯共用了6×150=900mL。剩下2000−900=1100mL。',
    explanationSteps: ['第一步：2升 = 2000毫升。', '第二步：6杯 × 150毫升 = 900毫升。', '第三步：2000 − 900 = 1100毫升。'],
    commonMistake: '有啲小朋友會用 2000−(6×150)，但唔記得先乘後減。',
    teacherTip: '多步驟應用題：先統一單位，然後逐個步驟計。',
    guidedReview: {
      keywords: ['2升', '6個杯', '150毫升', '還剩'],
      method: '多步運算',
      methodHint: '先轉升做毫升，計用咗幾多，再減。',
      steps: [
        { prompt: '2升等於幾多毫升？', type: 'choice', options: ['200mL', '2000mL', '20mL', '20000mL'], answer: '2000mL', feedback: '啱！2L=2000mL。' },
        { prompt: '6杯 × 150mL = ?', type: 'choice', options: ['900mL', '600mL', '750mL', '800mL'], answer: '900mL', feedback: '好！6×150=900mL。' },
        { prompt: '2000 − 900 = ?', type: 'choice', options: ['1100', '1000', '900', '1200'], answer: '1100', feedback: '答啱！仲有1100mL剩。' }
      ]
    },
  },
  // 140
  { id: 'm_m15', topic: 'measurement', difficulty: 'medium',
    question: '小華跑 100 米用了 18 秒，跑 3 次共用了多少秒？',
    options: ['54 秒', '36 秒', '48 秒', '60 秒'],
    answer: '54 秒',
    hint: '3 × 18 = 54秒。',
    explanation: '每次18秒，3次 = 3 × 18 = 54秒。',
    explanationSteps: ['第一步：每次跑用18秒。', '第二步：跑了3次。', '第三步：3 × 18 = 54秒。'],
    commonMistake: '有啲小朋友會用加法 18+18+18，但乘法更快。',
    teacherTip: '重複同一件事好多次時，乘法比加法快。',
    guidedReview: {
      keywords: ['100米', '18秒', '3次'],
      method: '乘法',
      methodHint: '每次18秒，3次就係18×3。',
      steps: [
        { prompt: '跑1次用18秒，跑3次應該用加法定乘法？', type: 'choice', options: ['加法', '乘法'], answer: '乘法', feedback: '啱！3次一樣嘅，用乘法快好多。' },
        { prompt: '18 × 3 = ?', type: 'choice', options: ['54', '48', '36', '60'], answer: '54', feedback: '好嘢！18×3=54秒。' }
      ]
    },
  },
  // 141
  { id: 'm_h11', topic: 'measurement', difficulty: 'hard',
    question: '足球訓練由下午 2:30 到下午 4:45，中間休息 15 分鐘。實際練習時間有幾耐？',
    options: ['2 小時', '2 小時 15 分', '1 小時 45 分', '2 小時 30 分'],
    answer: '2 小時',
    hint: '總時間2:30→4:45=2小時15分，減去休息15分=2小時。',
    explanation: '2:30到4:45共2小時15分。減去休息15分鐘 = 2小時。',
    explanationSteps: ['第一步：先計總共幾耐：2:30→4:30=2小時，再加15分=2小時15分。', '第二步：中間休息15分鐘要減走。', '第三步：2小時15分 − 15分 = 2小時。'],
    commonMistake: '有啲小朋友會直接 4:45−2:30=2:15，唔記得減埋休息時間。',
    teacherTip: '計實際工作時間時，要減走休息時間。總時間 − 休息 = 實際時間。',
    guidedReview: {
      keywords: ['2:30', '4:45', '休息15分鐘', '實際練習'],
      method: '時間間隔減法',
      methodHint: '先計總時間，再減休息。',
      steps: [
        { prompt: '2:30 到 4:45 總共幾耐？', type: 'choice', options: ['2小時15分', '2小時', '1小時15分', '3小時'], answer: '2小時15分', feedback: '啱！2:30→4:45係2小時15分。' },
        { prompt: '再減去15分鐘休息，係幾多？', type: 'choice', options: ['2小時', '2小時30分', '1小時45分', '3小時'], answer: '2小時', feedback: '好！2小時15分−15分=2小時練習時間。' }
      ]
    },
  },
  // 142
  { id: 'm_h12', topic: 'measurement', difficulty: 'hard',
    question: '媽媽買了 3 公斤 500 克豬肉，用了 1 公斤 800 克，然後又買了 2 公斤 200 克。現在有幾多肉？',
    options: ['3 公斤 900 克', '4 公斤 500 克', '3 公斤 500 克', '3 公斤 400 克'],
    answer: '3 公斤 900 克',
    hint: '3kg500g−1kg800g=1kg700g，再加2kg200g=3kg900g。',
    explanation: '先減：3kg500g−1kg800g=1kg700g。再加：1kg700g+2kg200g=3kg900g。',
    explanationSteps: ['第一步：先計用完後仲有幾多：3kg500g−1kg800g。', '第二步：500−800唔夠減，借1kg：2kg1500g−1kg800g=1kg700g。', '第三步：再買 2kg200g：1kg700g+2kg200g=3kg900g。'],
    commonMistake: '有啲小朋友會一次過 3kg500g+2kg200g−1kg800g，容易出錯。',
    teacherTip: '多步驟應用題最好一步步計，唔好急。先用晒，再買。',
    guidedReview: {
      keywords: ['3kg500g', '用了1kg800g', '買了2kg200g'],
      method: '加減混合',
      methodHint: '先用咗 → 減，再買 → 加。一步步計。',
      steps: [
        { prompt: '先用咗，應該做加法定減法？', type: 'choice', options: ['加法', '減法'], answer: '減法', feedback: '啱！用咗即係減少。' },
        { prompt: '3kg500g − 1kg800g = ?', type: 'choice', options: ['1kg700g', '2kg300g', '1kg800g', '2kg700g'], answer: '1kg700g', feedback: '好！借位後係1kg700g。' },
        { prompt: '再買 2kg200g，即係要加：1kg700g+2kg200g=?', type: 'choice', options: ['3kg900g', '3kg500g', '4kg', '3kg700g'], answer: '3kg900g', feedback: '正確！而家有3kg900g肉。' }
      ]
    },
  },
  // 143
  { id: 'm_h13', topic: 'measurement', difficulty: 'hard',
    question: '一個泳池長 50 米，小明游了 5 個來回（1 來回=50×2=100米），共游了幾多米？',
    options: ['500 米', '250 米', '1000 米', '300 米'],
    answer: '500 米',
    hint: '1來回=100米，5來回=5×100=500米。',
    explanation: '1來回=50×2=100米。5來回=5×100=500米。',
    explanationSteps: ['第一步：1個來回 = 50米去 + 50米返 = 100米。', '第二步：5個來回 = 5 × 100米。', '第三步：5 × 100 = 500米。'],
    commonMistake: '有啲小朋友會唔記得乘2，直接計50×5=250。',
    teacherTip: '「來回」即係去同返，所以路程要乘2。',
    guidedReview: {
      keywords: ['50米', '5個來回', '共游'],
      method: '乘法（來回×2）',
      methodHint: '先計1個來回=50×2=100米，再乘5。',
      steps: [
        { prompt: '1個來回游幾多米？', type: 'choice', options: ['100米', '50米', '200米', '150米'], answer: '100米', feedback: '啱！50去+50返=100米。' },
        { prompt: '5個來回 = 5 × ?', type: 'choice', options: ['100', '50', '200', '150'], answer: '100', feedback: '好！每個來回100米。' },
        { prompt: '5 × 100 = ?', type: 'choice', options: ['500', '1000', '250', '300'], answer: '500', feedback: '正確！小明游500米。' }
      ]
    },
  },
  // 144
  { id: 's_e11', topic: 'shapes', difficulty: 'easy',
    question: '正方形有幾多條邊？',
    options: ['4 條', '3 條', '5 條', '6 條'],
    answer: '4 條',
    hint: '正方形係四邊形，有四條相等嘅邊。',
    explanation: '正方形有4條邊，而且四條邊都一樣長。',
    explanationSteps: ['第一步：正方形係四邊形的一種。', '第二步：「四邊形」就係有四條邊。', '第三步：所以正方形有4條邊。'],
    commonMistake: '有啲小朋友會將正方形同三角形搞亂。',
    teacherTip: '正方形係四邊形，三角「形」3條邊，四邊「形」4條邊，記住名就記住邊數。',
    guidedReview: {
      keywords: ['正方形', '幾多條邊'],
      method: '圖形辨認',
      methodHint: '正方形個「四」字就係提示有四條邊。',
      steps: [
        { prompt: '「四邊形」有幾多條邊？', type: 'choice', options: ['3', '4', '5', '6'], answer: '4', feedback: '啱！四邊形=4條邊。' },
        { prompt: '正方形係咪四邊形？', type: 'choice', options: ['係', '唔係'], answer: '係', feedback: '好！正方形係四邊形。' }
      ]
    },
  },
  // 145
  { id: 's_e12', topic: 'shapes', difficulty: 'easy',
    question: '長方形有幾多個直角？',
    options: ['4 個', '2 個', '3 個', '1 個'],
    answer: '4 個',
    hint: '長方形四個角落都係直角（90度）。',
    explanation: '長方形有4個直角，每個角都係90度。',
    explanationSteps: ['第一步：直角即係90度，好似書角咁。', '第二步：長方形有4個角。', '第三步：長方形的4個角都係直角。', '第四步：所以長方形有4個直角。'],
    commonMistake: '有啲小朋友會以為長方形只有2個直角。',
    teacherTip: '正方形同長方形都係4個直角。用書角（直角）去對，四個角都啱。',
    guidedReview: {
      keywords: ['長方形', '直角', '幾多個'],
      method: '圖形特徵',
      methodHint: '直角=90度，長方形四個角都係。',
      steps: [
        { prompt: '長方形有幾多個角？', type: 'choice', options: ['4個', '3個', '2個', '5個'], answer: '4個', feedback: '啱！長方形有4個角。' },
        { prompt: '長方形嘅角係咩角？', type: 'choice', options: ['直角', '銳角', '鈍角', '圓角'], answer: '直角', feedback: '好！全部係直角。' }
      ]
    },
  },
  // 146
  { id: 's_m11', topic: 'shapes', difficulty: 'medium',
    question: '一個三角形有兩個角係 35° 同 85°，第三個角係幾度？',
    options: ['60°', '70°', '50°', '80°'],
    answer: '60°',
    hint: '三角形三個角加埋=180°，180−35−85=60。',
    explanation: '180° − 35° − 85° = 60°。第三個角是60°。',
    explanationSteps: ['第一步：三角形三個角加埋係180度。', '第二步：已知兩個角：35° + 85° = 120°。', '第三步：180° − 120° = 60°。'],
    commonMistake: '有啲小朋友會以為三角和=360度（搞錯咗四邊形）。',
    teacherTip: '三角形內角和永遠係180度。記住呢個口訣：三角加埋百八度。',
    guidedReview: {
      keywords: ['三角形', '35°', '85°', '第三個角'],
      method: '三角形內角和',
      methodHint: '三個角加埋=180°，用180減已知嘅。',
      steps: [
        { prompt: '三角形三個角加埋係幾多度？', type: 'choice', options: ['180°', '360°', '90°', '270°'], answer: '180°', feedback: '啱！三角形內角和=180°。' },
        { prompt: '35° + 85° = ?', type: 'choice', options: ['120°', '110°', '130°', '100°'], answer: '120°', feedback: '好！35+85=120。' },
        { prompt: '180° − 120° = ?', type: 'choice', options: ['60°', '70°', '50°', '80°'], answer: '60°', feedback: '正確！第三個角係60°。' }
      ]
    },
  },
  // 147
  { id: 's_m12', topic: 'shapes', difficulty: 'medium',
    question: '一個四邊形，只有一組對邊平行。這係咩形？',
    options: ['梯形', '平行四邊形', '長方形', '正方形'],
    answer: '梯形',
    hint: '梯形定義：四邊形，只有一組對邊平行。',
    explanation: '梯形係四邊形，而且只有一組對邊平行，另一組唔平行。',
    explanationSteps: ['第一步：四邊形有四條邊。', '第二步：梯形只有一組對邊係平行嘅。', '第三步：另一組對邊係唔平行嘅（斜斜哋）。'],
    commonMistake: '有啲小朋友會以為梯形係平行四邊形，但平行四邊形係兩組對邊平行。',
    teacherTip: '梯形=得1組平行邊。平行四邊形=2組平行邊。記住：梯形似梯，一平一斜。',
    guidedReview: {
      keywords: ['四邊形', '一組對邊平行', '咩形'],
      method: '圖形分類',
      methodHint: '一組平行=梯形，兩組平行=平行四邊形。',
      steps: [
        { prompt: '梯形有幾組平行邊？', type: 'choice', options: ['1組', '2組', '3組', '冇'], answer: '1組', feedback: '啱！梯形只有1組對邊平行。' },
        { prompt: '平行四邊形有幾組平行邊？', type: 'choice', options: ['1組', '2組', '冇', '3組'], answer: '2組', feedback: '好！平行四邊形有2組。所以一組嘅係梯形。' }
      ]
    },
  },
  // 148
  { id: 's_h11', topic: 'shapes', difficulty: 'hard',
    question: '一個長方形長 12cm，闊 7cm。如果將長度增加 3cm，周界增加幾多 cm？',
    options: ['6cm', '3cm', '12cm', '9cm'],
    answer: '6cm',
    hint: '原周界=2×(12+7)=38。新周界=2×(15+7)=44。相差=44−38=6。',
    explanation: '原周界=2×(12+7)=38cm。新長=12+3=15cm。新周界=2×(15+7)=44cm。相差=44−38=6cm。',
    explanationSteps: ['第一步：原周界 = 2×(12+7) = 2×19 = 38cm。', '第二步：長增加3cm後 = 12+3=15cm。', '第三步：新周界 = 2×(15+7) = 2×22 = 44cm。', '第四步：44 − 38 = 6cm。周界增加6cm。'],
    commonMistake: '有啲小朋友會以為周界增加3cm（即係增加嘅長度）。',
    teacherTip: '長方形周界有兩條長邊，所以長度增加1cm，周界其實增加2cm。',
    guidedReview: {
      keywords: ['長方形', '12cm', '7cm', '增加3cm', '周界'],
      method: '周界計算',
      methodHint: '先計原本周界，再計新周界，然後相減。',
      steps: [
        { prompt: '原本周界係幾多？', type: 'choice', options: ['38cm', '36cm', '40cm', '34cm'], answer: '38cm', feedback: '2×(12+7)=38cm。' },
        { prompt: '新嘅長度係幾多？', type: 'choice', options: ['15cm', '12cm', '10cm', '18cm'], answer: '15cm', feedback: '12+3=15cm。' },
        { prompt: '新周界 − 原周界 = ?', type: 'choice', options: ['6cm', '3cm', '12cm', '9cm'], answer: '6cm', feedback: '正確！周界增加6cm。' }
      ]
    },
  },
  // 149
  { id: 's_h12', topic: 'shapes', difficulty: 'hard',
    question: '以下哪組邊長可以拼成一個三角形？',
    options: ['5cm, 6cm, 10cm', '2cm, 3cm, 6cm', '1cm, 2cm, 4cm', '2cm, 2cm, 5cm'],
    answer: '5cm, 6cm, 10cm',
    hint: '檢查「兩邊之和大於第三邊」。5+6>10✅，5+10>6✅，6+10>5✅。',
    explanation: '5+6=11>10✅，5+10=15>6✅，6+10=16>5✅。全部符合，可以拼成三角形。',
    explanationSteps: ['第一步：三角形要求「任意兩邊之和大於第三邊」。', '第二步：檢查 5+6=11＞10 ✅', '第三步：檢查 5+10=15＞6 ✅', '第四步：檢查 6+10=16＞5 ✅ 全部符合！'],
    commonMistake: '有啲小朋友只檢查最短兩邊，但其實要檢查晒所有組合。',
    teacherTip: '快方法：最短兩邊加埋要大過最長邊。5+6=11>10，就冇問題。',
    guidedReview: {
      keywords: ['邊長', '三角形', '邊長關係'],
      method: '三角形不等式',
      methodHint: '最短兩邊加埋要大過最長邊。',
      steps: [
        { prompt: '要檢查咩條件？', type: 'choice', options: ['兩邊之和大於第三邊', '兩邊相等', '三邊一樣長', '有直角'], answer: '兩邊之和大於第三邊', feedback: '啱！三角形要兩邊之和大於第三邊。' },
        { prompt: '5+6 係咪大過 10？', type: 'choice', options: ['係，11>10', '唔係'], answer: '係，11>10', feedback: '好！11>10 ✅' }
      ]
    },
  },
  // 150
  { id: 'd_e11', topic: 'data', difficulty: 'easy',
    question: '圓形圖中，藍色佔 1/4、紅色佔 1/2、黃色佔 1/4。最大嘅顏色係？',
    options: ['紅色', '藍色', '黃色', '紅色同藍色一樣大'],
    answer: '紅色',
    hint: '1/2 = 一半，係最大嘅。',
    explanation: '紅色佔 1/2=一半，藍色和黃色各佔 1/4。一半比四分之一大。',
    explanationSteps: ['第一步：1/2 即係一半，圓形圖嘅一半。', '第二步：1/4 即係四分之一。', '第三步：一半 > 四分之一，所以紅色最大。'],
    commonMistake: '有啲小朋友會以為數字大就大，唔記得 1/2=一半大過 1/4。',
    teacherTip: '記住：1/2 > 1/4 > 1/8。分母愈大，份數愈細。',
    guidedReview: {
      keywords: ['1/4', '1/2', '最大'],
      method: '分數比較',
      methodHint: '1/2係一半，1/4係四分一，一半大過四分一。',
      steps: [
        { prompt: '1/2 同 1/4，邊個大啲？', type: 'choice', options: ['1/2', '1/4', '一樣大'], answer: '1/2', feedback: '啱！1/2係一半，大過1/4。' },
        { prompt: '紅色佔 1/2，即係佔咗圓形嘅幾多？', type: 'choice', options: ['一半', '四分一', '全部'], answer: '一半', feedback: '好！1/2=一半。所以紅色最大。' }
      ]
    },
  },
  // 151
  { id: 'd_e12', topic: 'data', difficulty: 'easy',
    question: '數線上有 0、10、20、30、40。35 在哪裏？',
    options: ['30 同 40 中間', '20 同 30 中間', '40 之後', '10 同 20 中間'],
    answer: '30 同 40 中間',
    hint: '30 < 35 < 40，所以喺 30 同 40 中間。',
    explanation: '35 比 30 大，比 40 細，所以在 30 和 40 中間。',
    explanationSteps: ['第一步：35 同 30 比，35 > 30。', '第二步：35 同 40 比，35 < 40。', '第三步：所以 35 喺 30 同 40 中間。'],
    commonMistake: '有啲小朋友會以為 35 近 40，就話喺 40 之後。',
    teacherTip: '喺數線上搵數字，先搵比佢細嘅最大數字，再搵比佢大嘅最細數字。',
    guidedReview: {
      keywords: ['35', '數線', '位置'],
      method: '數線定位',
      methodHint: '30 < 35 < 40，所以喺中間。',
      steps: [
        { prompt: '35 比 30 大定細？', type: 'choice', options: ['大', '細', '一樣'], answer: '大', feedback: '啱！35>30。' },
        { prompt: '35 比 40 大定細？', type: 'choice', options: ['大', '細', '一樣'], answer: '細', feedback: '好！35<40。' },
        { prompt: '所以 35 喺邊度？', type: 'choice', options: ['30同40中間', '40之後', '30之前'], answer: '30同40中間', feedback: '答啱！30<35<40。' }
      ]
    },
  },
  // 152
  { id: 'd_m11', topic: 'data', difficulty: 'medium',
    question: '長條圖顯示：星期一人數 25、星期二 30、星期三 20、星期四 35、星期五 40。哪兩天相差最多？',
    options: ['星期五同星期三', '星期一同星期二', '星期三同星期四', '星期二同星期四'],
    answer: '星期五同星期三',
    hint: '最高=星期五40，最低=星期三20，相差40−20=20。',
    explanation: '最高是星期五40人，最低是星期三20人。相差40−20=20人。',
    explanationSteps: ['第一步：搵出最高嘅日：星期五40人。', '第二步：搵出最低嘅日：星期三20人。', '第三步：40 − 20 = 20相差最多。'],
    commonMistake: '有啲小朋友會逐對比較，浪費時間。先搵最高同最低。',
    teacherTip: '比較相差最多嘅問題，先搵最高同最低，然後相減。',
    guidedReview: {
      keywords: ['長條圖', '相差最多', '星期'],
      method: '數據比較',
      methodHint: '先搵最高同最低，再相減。',
      steps: [
        { prompt: '長條圖最高嘅係星期幾？', type: 'choice', options: ['星期五(40)', '星期二(30)', '星期四(35)', '星期一(25)'], answer: '星期五(40)', feedback: '啱！星期五40人係最高。' },
        { prompt: '最低嘅係星期幾？', type: 'choice', options: ['星期三(20)', '星期一(25)', '星期二(30)'], answer: '星期三(20)', feedback: '好！星期三20人最低。' },
        { prompt: '40 − 20 = ?', type: 'choice', options: ['20', '10', '15', '30'], answer: '20', feedback: '相差20人！星期五同星期三相差最多。' }
      ]
    },
  },
  // 153
  { id: 'd_m12', topic: 'data', difficulty: 'medium',
    question: '一個袋有 4 個紅波、3 個藍波、2 個綠波、1 個黃波。抽到藍波嘅機會係？',
    options: ['3/10', '4/10', '2/10', '1/10'],
    answer: '3/10',
    hint: '總波數=4+3+2+1=10，藍波有3個，所以 3/10。',
    explanation: '總共 4+3+2+1=10個波。藍波有3個，機會=3/10。',
    explanationSteps: ['第一步：先計總共有幾多個波：4+3+2+1=10。', '第二步：藍波有3個。', '第三步：機會=藍波數÷總數=3÷10=3/10。'],
    commonMistake: '有啲小朋友會用 3/4（只計紅色），忘記計算總數。',
    teacherTip: '概率 = 想要嘅數量 ÷ 總數量。記住分母係總數！',
    guidedReview: {
      keywords: ['4紅', '3藍', '2綠', '1黃', '藍波機會'],
      method: '概率計算',
      methodHint: '先計總數，再計想要嘅顏色。',
      steps: [
        { prompt: '總共有幾多個波？', type: 'choice', options: ['10', '4', '3', '7'], answer: '10', feedback: '啱！4+3+2+1=10。' },
        { prompt: '藍波有幾個？', type: 'choice', options: ['3', '4', '2', '1'], answer: '3', feedback: '好！藍波有3個。' },
        { prompt: '機會 = ? / ?', type: 'choice', options: ['3/10', '4/10', '2/10', '1/4'], answer: '3/10', feedback: '答啱！3/10機會抽到藍波。' }
      ]
    },
  },
  // 154
  { id: 'd_h11', topic: 'data', difficulty: 'hard',
    question: '以下是 5 個人的年齡：8, 9, 10, 11, 12。如果加多一個人，平均年齡變成 10.5。新加入嘅人係幾多歲？',
    options: ['13 歲', '10 歲', '12 歲', '14 歲'],
    answer: '13 歲',
    hint: '原本總和=8+9+10+11+12=50。新總和=10.5×6=63。63−50=13。',
    explanation: '原本總和=8+9+10+11+12=50。6人平均=10.5，新總和=10.5×6=63。63−50=13歲。',
    explanationSteps: ['第一步：先計原本5人總和：8+9+10+11+12=50。', '第二步：6人平均10.5，新總和=10.5×6=63。', '第三步：新總和−原總和=63−50=13歲。'],
    commonMistake: '有啲小朋友會直接 10.5×6=63，忘記減原本總和。',
    teacherTip: '平均數逆向題：先計新總和，再減原本總和，就係新加入嘅數。',
    guidedReview: {
      keywords: ['平均', '10.5', '新加入'],
      method: '平均數逆向',
      methodHint: '新總和 − 原總和 = 新數字。',
      steps: [
        { prompt: '原本5人年齡總和係幾多？', type: 'choice', options: ['50', '45', '55', '60'], answer: '50', feedback: '啱！8+9+10+11+12=50。' },
        { prompt: '新總和係 10.5 × 6 = ?', type: 'choice', options: ['63', '60', '65', '53'], answer: '63', feedback: '好！10.5×6=63。' },
        { prompt: '63 − 50 = ?', type: 'choice', options: ['13', '10', '15', '12'], answer: '13', feedback: '答啱！新加入嘅人13歲。' }
      ]
    },
  },
  // 155
  { id: 'd_h12', topic: 'data', difficulty: 'hard',
    question: '圓形圖顯示：中文 40%、英文 25%、數學 20%、常識 15%。中文比常識多幾多個百分比？',
    options: ['25%', '15%', '20%', '30%'],
    answer: '25%',
    hint: '40% − 15% = 25%。',
    explanation: '中文 40% − 常識 15% = 25%。',
    explanationSteps: ['第一步：中文佔 40%。', '第二步：常識佔 15%。', '第三步：40% − 15% = 25%。'],
    commonMistake: '有啲小朋友會減錯，40−15=35。',
    teacherTip: '百分比相差直接用大減細：40% − 15% = 25%。',
    guidedReview: {
      keywords: ['40%', '15%', '多幾多'],
      method: '百分比減法',
      methodHint: '直接用大嘅百分比減細嘅。',
      steps: [
        { prompt: '中文係幾多 percent？', type: 'choice', options: ['40%', '25%', '20%', '15%'], answer: '40%', feedback: '啱！中文40%。' },
        { prompt: '常識係幾多 percent？', type: 'choice', options: ['15%', '40%', '25%', '20%'], answer: '15%', feedback: '好！常識15%。' },
        { prompt: '40% − 15% = ?', type: 'choice', options: ['25%', '35%', '20%', '30%'], answer: '25%', feedback: '答啱！中文比常識多25%。' }
      ]
    },
  },
  // 156
  { id: 'n_e21', topic: 'numbers', difficulty: 'easy',
    question: '爸爸有 45 元，買玩具用了 28 元，還剩幾元？',
    options: ['17 元', '27 元', '13 元', '7 元'],
    answer: '17 元',
    hint: '45 − 28 = 17。',
    explanation: '45 − 28 = 17。個位5−8唔夠，借位變成15−8=7，十位3−2=1。',
    explanationSteps: ['第一步：「用了」即係要減：45−28。', '第二步：個位5−8唔夠，向十位借1變成15−8=7。', '第三步：十位4借咗1得返3，3−2=1。', '第四步：答案是17元。'],
    commonMistake: '有些小朋友會忘記借位，直接寫45−28=23。',
    teacherTip: '減法借位要記住：借咗1俾個位，十位要減返1。',
    guidedReview: {
      keywords: ['45元', '用了28元', '還剩'],
      method: '減法借位',
      methodHint: '用了就是減，不夠減要向十位借1。',
      steps: [
        { prompt: '個位5−8夠減嗎？', type: 'choice', options: ['夠', '唔夠'], answer: '唔夠', feedback: '啱！5−8唔夠減，要向十位借1。' },
        { prompt: '借位後15−8=？', type: 'choice', options: ['7', '8', '6', '9'], answer: '7', feedback: '15−8=7，個位是7。' },
        { prompt: '十位借咗1後得返3，3−2=？', type: 'choice', options: ['1', '2', '0', '3'], answer: '1', feedback: '所以答案是17元。' }
      ]
    },
  },
  // 157
  { id: 'n_e22', topic: 'numbers', difficulty: 'easy',
    question: '9 × 7 = ?',
    options: ['63', '72', '56', '81'],
    answer: '63',
    hint: '七九六十三。',
    explanation: '9×7 = 63，乘數表的七九六十三。',
    explanationSteps: ['第一步：呢題係乘數表。', '第二步：七九⋯⋯六十三！', '第三步：9×7=63。'],
    commonMistake: '有啲小朋友會搞亂 9×7=63 同 8×8=64。',
    teacherTip: '記口訣：七九六十三，八九七十二。',
    guidedReview: {
      keywords: ['9', '7', '乘'],
      method: '乘數表',
      methodHint: '七九幾多？係六十三！',
      steps: [
        { prompt: '9×7 = ?', type: 'choice', options: ['63', '72', '56', '81'], answer: '63', feedback: '啱！七九六十三。' }
      ]
    },
  },
  // 158
  { id: 'n_e23', topic: 'numbers', difficulty: 'easy',
    question: '「四萬五千零三十」寫成數字係？',
    options: ['45030', '45003', '40530', '45300'],
    answer: '45030',
    hint: '4個萬=40000，5個千=5000，3個十=30。',
    explanation: '45030 = 4個萬 + 5個千 + 0個百 + 3個十 + 0個一。',
    explanationSteps: ['第一步：四萬=40000，即係萬位係4。', '第二步：五千=5000，即係千位係5。', '第三步：零=百位係0。', '第四步：三十=30，即係十位係3，個位係0。寫成45030。'],
    commonMistake: '有啲小朋友會寫45003，十位和個位掉轉了。',
    teacherTip: '寫五位數時逐位寫：萬、千、百、十、個。冇嘅位寫0。',
    guidedReview: {
      keywords: ['四萬五千零三十', '數字'],
      method: '寫數',
      methodHint: '逐位寫：萬4千5百0十3個0。',
      steps: [
        { prompt: '萬位是幾多？', type: 'choice', options: ['4', '5', '0', '3'], answer: '4', feedback: '啱！四萬即係萬位4。' },
        { prompt: '千位是幾多？', type: 'choice', options: ['5', '4', '0', '3'], answer: '5', feedback: '好！五千即係千位5。' },
        { prompt: '十位是幾多？', type: 'choice', options: ['3', '0', '4', '5'], answer: '3', feedback: '三十即係十位3。所以是45030。' }
      ]
    },
  },
  // 159
  { id: 'n_m11', topic: 'numbers', difficulty: 'medium',
    question: '小明儲了 156 元，媽媽給他 89 元後，小明想買一個 200 元的玩具。他還差幾元？',
    options: ['差45元', '差55元', '差0元', '差65元'],
    answer: '差45元',
    hint: '156+89=245，245−200=45。他不差錢，還多了45元。',
    explanation: '156+89=245元。他想買200元玩具。245−200=45元。他不差錢，還多了45元。',
    explanationSteps: ['第一步：先計小明有幾多錢：156+89=245元。', '第二步：玩具200元。', '第三步：245−200=45。他其實夠錢，還多了45元。'],
    commonMistake: '有啲小朋友會直接200−156=44，忘記加媽媽給他的錢。',
    teacherTip: '多步驟應用題要一步步計：先計總共有幾多錢，再同價錢比較。',
    guidedReview: {
      keywords: ['156元', '媽媽給89元', '200元玩具'],
      method: '加減混合',
      methodHint: '先加埋佢有幾多錢，再減玩具價錢。',
      steps: [
        { prompt: '小明原本有156元，媽媽給89元，現在共有？', type: 'choice', options: ['245元', '200元', '156元', '89元'], answer: '245元', feedback: '啱！156+89=245元。' },
        { prompt: '他有245元，玩具200元，夠買嗎？', type: 'choice', options: ['夠，多了45元', '唔夠，差45元', '夠，多了55元'], answer: '夠，多了45元', feedback: '245−200=45，夠買還有45元剩！' }
      ]
    },
  },
  // 160
  { id: 'n_m12', topic: 'numbers', difficulty: 'medium',
    question: '308 × 6 = ?',
    options: ['1848', '1808', '1840', '1868'],
    answer: '1848',
    hint: '300×6=1800，8×6=48，1800+48=1848。',
    explanation: '308 × 6 = 300×6 + 8×6 = 1800 + 48 = 1848。',
    explanationSteps: ['第一步：308可以拆成300同8。', '第二步：300×6=1800。', '第三步：8×6=48。', '第四步：1800+48=1848。'],
    commonMistake: '有啲小朋友會直接308×6，唔記得中間的0要乘。',
    teacherTip: '三位數乘一位數，拆開逐部分計就唔會錯。',
    guidedReview: {
      keywords: ['308', '6', '乘'],
      method: '乘法拆分',
      methodHint: '308=300+8，分別乘6再相加。',
      steps: [
        { prompt: '308可以拆成幾多？', type: 'choice', options: ['300+8', '30+8', '300+80', '3+8'], answer: '300+8', feedback: '啱！308=300+8。' },
        { prompt: '300×6=？', type: 'choice', options: ['1800', '180', '18000', '3000'], answer: '1800', feedback: '好！300×6=1800。' },
        { prompt: '1800+48=？', type: 'choice', options: ['1848', '1840', '1808', '1868'], answer: '1848', feedback: '正確！308×6=1848。' }
      ]
    },
  },
  // 161
  { id: 'n_m13', topic: 'numbers', difficulty: 'medium',
    question: '4/9 + 3/9 = ?',
    options: ['7/9', '1/9', '7/18', '12/9'],
    answer: '7/9',
    hint: '分母相同（都係9），分子相加：4+3=7。',
    explanation: '4/9 + 3/9 = (4+3)/9 = 7/9。',
    explanationSteps: ['第一步：分母相同（都係9），表示每份一樣大。', '第二步：分子相加：4+3=7。', '第三步：所以係 7/9。'],
    commonMistake: '有啲小朋友會分母都加埋：4/9+3/9=7/18（錯的）。',
    teacherTip: '同分母分數加減：分母不變，只計分子。',
    guidedReview: {
      keywords: ['4/9', '3/9', '加'],
      method: '分數加法',
      methodHint: '分母相同，分子直接加。',
      steps: [
        { prompt: '4/9 同 3/9 分母係咪一樣？', type: 'choice', options: ['係，都係9', '唔係'], answer: '係，都係9', feedback: '啱！分母都係9。' },
        { prompt: '分母相同時，要加咩？', type: 'choice', options: ['分子', '分母', '兩個都加'], answer: '分子', feedback: '好！分母不變，分子相加。' },
        { prompt: '4+3=？', type: 'choice', options: ['7', '1', '12', '9'], answer: '7', feedback: '4+3=7，所以係7/9。' }
      ]
    },
  },
  // 162
  { id: 'n_m14', topic: 'numbers', difficulty: 'medium',
    question: '全班有 36 人，分做 4 組。每組有幾人？',
    options: ['9 人', '8 人', '10 人', '7 人'],
    answer: '9 人',
    hint: '36 ÷ 4 = 9。',
    explanation: '36人分4組，每組人數 = 36 ÷ 4 = 9人。',
    explanationSteps: ['第一步：「分做4組」即係要平均分。', '第二步：平均分用除法：36 ÷ 4。', '第三步：36 ÷ 4 = 9，每組9人。'],
    commonMistake: '有啲小朋友會以為是乘法（36×4），但分組是除法。',
    teacherTip: '「分做幾組」、「平均分」這些字眼，通常用除法。',
    guidedReview: {
      keywords: ['36人', '4組', '每組'],
      method: '除法',
      methodHint: '分組就是除法：總數÷組數。',
      steps: [
        { prompt: '36人分4組用咩方法？', type: 'choice', options: ['除法', '乘法', '加法', '減法'], answer: '除法', feedback: '啱！分組用除法。' },
        { prompt: '36 ÷ 4 = ?', type: 'choice', options: ['9', '8', '7', '10'], answer: '9', feedback: '好！每組9人。' }
      ]
    },
  },
  // 163
  { id: 'n_m15', topic: 'numbers', difficulty: 'medium',
    question: '文具店有鉛筆245枝，賣出168枝後，再入了125枝。現在有幾多枝？',
    options: ['202枝', '202枝', '212枝', '192枝'],
    answer: '202枝',
    hint: '245−168=77，77+125=202。',
    explanation: '先減賣出的：245−168=77，再加新入的：77+125=202枝。',
    explanationSteps: ['第一步：先計賣出後：245−168。', '第二步：245−168=77。', '第三步：再入貨：77+125=202。'],
    commonMistake: '有啲小朋友會一次過245+125−168，容易出錯。',
    teacherTip: '加減混合題，跟住題目順序一步步計就唔會錯。',
    guidedReview: {
      keywords: ['245枝', '賣出168', '入了125', '現在'],
      method: '加減混合',
      methodHint: '先減賣出的，再加新入的。',
      steps: [
        { prompt: '賣出了應該加定減？', type: 'choice', options: ['減', '加'], answer: '減', feedback: '啱！賣出等於減少。' },
        { prompt: '245−168=？', type: 'choice', options: ['77', '87', '67', '97'], answer: '77', feedback: '好！245−168=77。' },
        { prompt: '入了貨應該加定減？', type: 'choice', options: ['加', '減'], answer: '加', feedback: '好！77+125=202枝。' }
      ]
    },
  },
  // 164
  { id: 'n_h11', topic: 'numbers', difficulty: 'hard',
    question: '媽媽買了 6 盒雞蛋，每盒有 12 隻。用了 28 隻後，還剩幾多隻？',
    options: ['44 隻', '40 隻', '34 隻', '48 隻'],
    answer: '44 隻',
    hint: '6×12=72，72−28=44。',
    explanation: '先計總數：6×12=72隻。減去用了的：72−28=44隻。',
    explanationSteps: ['第一步：先計總共有幾多隻雞蛋：6盒×12隻=72隻。', '第二步：用咗28隻，即係減：72−28。', '第三步：72−28=44隻。'],
    commonMistake: '有啲小朋友會直接用12−28（忘記乘6）。',
    teacherTip: '呢類題要先「乘」計總數，再「減」計剩下。先乘後減。',
    guidedReview: {
      keywords: ['6盒', '每盒12隻', '用了28隻'],
      method: '先乘後減',
      methodHint: '先計總數量，再減用咗嘅。',
      steps: [
        { prompt: '先計總共有幾多雞蛋？', type: 'choice', options: ['72隻', '12隻', '6隻', '28隻'], answer: '72隻', feedback: '啱！6×12=72。' },
        { prompt: '用咗28隻後：72−28=？', type: 'choice', options: ['44', '40', '34', '48'], answer: '44', feedback: '好！仲有44隻雞蛋。' }
      ]
    },
  },
  // 165
  { id: 'n_h12', topic: 'numbers', difficulty: 'hard',
    question: '(63 − 18) ÷ 5 × 3 = ?',
    options: ['27', '24', '30', '21'],
    answer: '27',
    hint: '先括號：63−18=45。然後由左至右：45÷5=9，9×3=27。',
    explanation: '(63−18)÷5×3 = 45÷5×3 = 9×3 = 27。',
    explanationSteps: ['第一步：先計括號入面：63−18=45。', '第二步：由左至右：45÷5=9。', '第三步：9×3=27。'],
    commonMistake: '有啲小朋友會先乘後除，但其實由左至右計就得。',
    teacherTip: '混合運算順序：括號→乘除（由左至右）→加減。',
    guidedReview: {
      keywords: ['(63−18)', '÷5', '×3'],
      method: '混合運算',
      methodHint: '先括號，再由左至右計。',
      steps: [
        { prompt: '第一步做咩？', type: 'choice', options: ['計括號', '計除法', '計乘法', '由左至右'], answer: '計括號', feedback: '啱！先計括號入面。' },
        { prompt: '63−18=？', type: 'choice', options: ['45', '55', '35', '81'], answer: '45', feedback: '好！45。' },
        { prompt: '45÷5×3=？', type: 'choice', options: ['27', '24', '30', '21'], answer: '27', feedback: '由左至右：45÷5=9，9×3=27。' }
      ]
    },
  },
  // 166
  { id: 'n_h13', topic: 'numbers', difficulty: 'hard',
    question: '有 56 粒糖，分給 8 個小朋友。每人分到幾粒？',
    options: ['7 粒', '6 粒', '8 粒', '9 粒'],
    answer: '7 粒',
    hint: '56 ÷ 8 = 7。',
    explanation: '56粒糖分給8人，每人=56÷8=7粒。',
    explanationSteps: ['第一步：「分給」即係要平均分。', '第二步：56粒分給8人：56÷8。', '第三步：七八五十六！56÷8=7粒。'],
    commonMistake: '有啲小朋友會用乘法：56×8，但分嘢係用除法。',
    teacherTip: '「分俾幾個人」同「每人分到幾多」，用除法就啱。',
    guidedReview: {
      keywords: ['56粒', '8個小朋友', '每人'],
      method: '除法',
      methodHint: '56÷8，七八五十六。',
      steps: [
        { prompt: '用咩方法？', type: 'choice', options: ['除法', '乘法', '加法', '減法'], answer: '除法', feedback: '啱！平均分用除法。' },
        { prompt: '56÷8=？', type: 'choice', options: ['7', '6', '8', '9'], answer: '7', feedback: '好！七八五十六，56÷8=7。' }
      ]
    },
  },
  // 167
  { id: 'n_h14', topic: 'numbers', difficulty: 'hard',
    question: '一張枱可坐 4 人。運動會有 96 人參加，最少要幾張枱？',
    options: ['24 張', '23 張', '25 張', '26 張'],
    answer: '24 張',
    hint: '96 ÷ 4 = 24，剛好坐滿。',
    explanation: '96人，每枱4人，96÷4=24張枱。剛好坐滿，沒有剩餘。',
    explanationSteps: ['第一步：96人，每枱坐4人。', '第二步：96÷4=24張枱。', '第三步：4×24=96，剛好坐滿。'],
    commonMistake: '有啲小朋友會用減法，逐張枱減4個人，好慢。',
    teacherTip: '「每張坐幾人」問題，用除法計最快。',
    guidedReview: {
      keywords: ['96人', '每枱4人', '最少幾張'],
      method: '除法',
      methodHint: '總人數÷每枱人數=枱數。',
      steps: [
        { prompt: '用咩方法？', type: 'choice', options: ['除法', '乘法', '加法', '減法'], answer: '除法', feedback: '啱！96÷4。' },
        { prompt: '96÷4=？', type: 'choice', options: ['24', '23', '25', '26'], answer: '24', feedback: '24張枱，剛好！' }
      ]
    },
  },
  // 168
  { id: 'n_h15', topic: 'numbers', difficulty: 'hard',
    question: '小明有 120 元。買 3 本故事書，每本 32 元。買完後還剩多少錢？',
    options: ['24 元', '20 元', '28 元', '30 元'],
    answer: '24 元',
    hint: '3×32=96，120−96=24。',
    explanation: '3本書總價=3×32=96元。120−96=24元。',
    explanationSteps: ['第一步：先計3本書要幾多錢：3×32=96。', '第二步：120−96=24元。'],
    commonMistake: '有啲小朋友會直接120−32=88，忘記買了3本。',
    teacherTip: '買多件物品時，先乘計總價，再用總錢減。',
    guidedReview: {
      keywords: ['120元', '3本', '每本32元', '還剩'],
      method: '先乘後減',
      methodHint: '先計總價錢，再減。',
      steps: [
        { prompt: '3本書總共幾錢？', type: 'choice', options: ['96元', '32元', '120元', '64元'], answer: '96元', feedback: '啱！3×32=96。' },
        { prompt: '120−96=？', type: 'choice', options: ['24', '20', '28', '30'], answer: '24', feedback: '還有24元！' }
      ]
    },
  },
  // 169
  { id: 'm_e16', topic: 'measurement', difficulty: 'easy',
    question: '一部手機長約 15 厘米，書桌長 120 厘米。書桌是手機的幾倍長？',
    options: ['8 倍', '6 倍', '10 倍', '12 倍'],
    answer: '8 倍',
    hint: '120÷15=8倍。',
    explanation: '120厘米 ÷ 15厘米 = 8倍。',
    explanationSteps: ['第一步：書桌120厘米，手機15厘米。', '第二步：比較倍數用除法：120÷15。', '第三步：120÷15=8倍。'],
    commonMistake: '有啲小朋友會用減法：120−15=105。',
    teacherTip: '「係幾多倍」嘅問題，用除法計。大÷細=倍數。',
    guidedReview: {
      keywords: ['15厘米', '120厘米', '幾倍'],
      method: '倍數（除法）',
      methodHint: '大數字÷細數字=倍數。',
      steps: [
        { prompt: '比較倍數用咩方法？', type: 'choice', options: ['除法', '乘法', '加法', '減法'], answer: '除法', feedback: '啱！大÷細=倍數。' },
        { prompt: '120÷15=？', type: 'choice', options: ['8', '6', '10', '12'], answer: '8', feedback: '好！書桌是手機的8倍長。' }
      ]
    },
  },
  // 170
  { id: 'm_e17', topic: 'measurement', difficulty: 'easy',
    question: '1 小時 = ? 分鐘',
    options: ['60 分鐘', '100 分鐘', '30 分鐘', '120 分鐘'],
    answer: '60 分鐘',
    hint: '1小時=60分鐘，是常識。',
    explanation: '1小時 = 60分鐘。',
    explanationSteps: ['第一步：1小時有60分鐘。', '第二步：這是時間的基本單位換算。'],
    commonMistake: '有啲小朋友會以為1小時=100分鐘（同厘米混淆）。',
    teacherTip: '記住：1小時=60分鐘，1分鐘=60秒。時間不是十進制！',
    guidedReview: {
      keywords: ['1小時', '分鐘'],
      method: '時間換算',
      methodHint: '1小時=60分鐘。',
      steps: [
        { prompt: '1小時有幾多分鐘？', type: 'choice', options: ['60', '100', '30', '120'], answer: '60', feedback: '啱！1小時=60分鐘。' }
      ]
    },
  },
  // 171
  { id: 'm_e18', topic: 'measurement', difficulty: 'easy',
    question: '4 公里 = ? 米',
    options: ['4000 米', '400 米', '40 米', '40000 米'],
    answer: '4000 米',
    hint: '1公里=1000米，4×1000=4000米。',
    explanation: '1公里=1000米，4公里=4×1000=4000米。',
    explanationSteps: ['第一步：1公里 = 1000米。', '第二步：4公里 = 4 × 1000。', '第三步：4 × 1000 = 4000米。'],
    commonMistake: '有些小朋友會以為1公里=100米。',
    teacherTip: '公里轉米乘1000，因為1km=1000m。',
    guidedReview: {
      keywords: ['4公里', '米', '轉換'],
      method: '單位換算',
      methodHint: '1km=1000m，4×1000=4000。',
      steps: [
        { prompt: '1公里等於幾多米？', type: 'choice', options: ['1000m', '100m', '10000m', '10m'], answer: '1000m', feedback: '啱！1km=1000m。' },
        { prompt: '4×1000=？', type: 'choice', options: ['4000', '400', '40', '40000'], answer: '4000', feedback: '好！4km=4000m。' }
      ]
    },
  },
  // 172
  { id: 'm_m16', topic: 'measurement', difficulty: 'medium',
    question: '上午 8:50 到上午 10:15，共過了多久？',
    options: ['1 小時 25 分', '1 小時 35 分', '2 小時 25 分', '1 小時 15 分'],
    answer: '1 小時 25 分',
    hint: '8:50→9:00（10分）→10:00（1小時）→10:15（15分），共1小時25分。',
    explanation: '8:50→9:00=10分，9:00→10:00=1小時，10:00→10:15=15分。10分+1小時+15分=1小時25分。',
    explanationSteps: ['第一步：8:50到9:00是10分鐘。', '第二步：9:00到10:00是1小時。', '第三步：10:00到10:15是15分鐘。', '第四步：10分+1小時+15分=1小時25分。'],
    commonMistake: '有啲小朋友會直接10:15−8:50，分鐘60−50=10，小時10−8=2，寫成2小時10分（錯的）。',
    teacherTip: '時間間隔最好分段計，先計到整點再計到目標時間。',
    guidedReview: {
      keywords: ['8:50', '10:15', '過了多久'],
      method: '時間間隔',
      methodHint: '分段：8:50→9:00→10:00→10:15。',
      steps: [
        { prompt: '8:50到9:00有幾分鐘？', type: 'choice', options: ['10分', '50分', '30分', '15分'], answer: '10分', feedback: '啱！8:50→9:00是10分鐘。' },
        { prompt: '9:00到10:00是幾多？', type: 'choice', options: ['1小時', '30分', '45分', '2小時'], answer: '1小時', feedback: '好！1小時。' },
        { prompt: '10:00到10:15是幾分鐘？', type: 'choice', options: ['15分', '30分', '10分', '45分'], answer: '15分', feedback: '加埋：10分+1小時+15分=1小時25分。' }
      ]
    },
  },
  // 173
  { id: 'm_m17', topic: 'measurement', difficulty: 'medium',
    question: '5 米 8 厘米 = ? 厘米',
    options: ['508 厘米', '58 厘米', '580 厘米', '5008 厘米'],
    answer: '508 厘米',
    hint: '5米=500厘米，再加8厘米=508厘米。',
    explanation: '5米=500厘米，500+8=508厘米。',
    explanationSteps: ['第一步：5米 = 500厘米。', '第二步：再加8厘米。', '第三步：500+8=508厘米。'],
    commonMistake: '有啲小朋友會寫580（混淆了5米80厘米）。',
    teacherTip: '米轉厘米乘100，然後加上剩下的厘米數。',
    guidedReview: {
      keywords: ['5米', '8厘米', '轉換'],
      method: '單位換算',
      methodHint: '5m=500cm，再加8cm=508cm。',
      steps: [
        { prompt: '5米等於幾多厘米？', type: 'choice', options: ['500cm', '50cm', '5000cm', '5cm'], answer: '500cm', feedback: '啱！5m=500cm。' },
        { prompt: '500+8=？', type: 'choice', options: ['508', '58', '580', '5008'], answer: '508', feedback: '好！508cm。' }
      ]
    },
  },
  // 174
  { id: 'm_m18', topic: 'measurement', difficulty: 'medium',
    question: '1 米 80 厘米的布，做 3 條手帕，每條用 40 厘米。夠用嗎？',
    options: ['夠，還剩60厘米', '唔夠，差40厘米', '夠，還剩80厘米', '唔夠，差60厘米'],
    answer: '夠，還剩60厘米',
    hint: '1m80cm=180cm，3×40=120cm，180−120=60cm，夠有突。',
    explanation: '1m80cm=180cm。3條手帕用3×40=120cm。180−120=60cm。夠用還有60cm剩。',
    explanationSteps: ['第一步：1米80厘米=180厘米。', '第二步：3條手帕用3×40=120厘米。', '第三步：180−120=60厘米，夠用仲有60厘米剩。'],
    commonMistake: '有啲小朋友會忘記先轉做同一單位。',
    teacherTip: '先統一單位（全部轉做厘米），然後先乘後減。',
    guidedReview: {
      keywords: ['1米80厘米', '3條', '每條40厘米', '夠嗎'],
      method: '應用題',
      methodHint: '先轉厘米，再計用幾多，最後比較。',
      steps: [
        { prompt: '1米80厘米=？厘米', type: 'choice', options: ['180cm', '108cm', '1800cm', '1008cm'], answer: '180cm', feedback: '啱！180cm。' },
        { prompt: '3條手帕用幾多厘米？', type: 'choice', options: ['120cm', '40cm', '160cm', '80cm'], answer: '120cm', feedback: '3×40=120cm。' },
        { prompt: '180−120=？夠用嗎？', type: 'choice', options: ['60cm，夠用', '60cm，唔夠', '40cm，唔夠'], answer: '60cm，夠用', feedback: '有60cm剩，夠用！' }
      ]
    },
  },
  // 175
  { id: 'm_h14', topic: 'measurement', difficulty: 'hard',
    question: '家裏有 4 個 2 升的汽水樽，全部倒滿後，再分給 8 個朋友每人一杯 250 毫升。夠分嗎？',
    options: ['夠，還剩 0 毫升', '唔夠，差 500 毫升', '夠，還剩 500 毫升', '唔夠，差 250 毫升'],
    answer: '夠，還剩 0 毫升',
    hint: '4×2L=8L=8000mL，8×250=2000mL？等等⋯再計：8×250=2000mL=2L，8000−2000=6000mL。還剩好多！',
    explanation: '總共=4×2=8L=8000mL。8杯共用8×250=2000mL=2L。8000−2000=6000mL，不但夠分還剩好多。',
    explanationSteps: ['第一步：總共有幾多汽水？4×2L=8L=8000mL。', '第二步：要分幾多？8人×250mL=2000mL=2L。', '第三步：8000mL>2000mL，夠分好多！還剩6000mL。'],
    commonMistake: '有啲小朋友會以為1L=100mL，搞錯單位。',
    teacherTip: '大數字應用題，先統一單位（轉做mL），然後計總數同需要數。',
    guidedReview: {
      keywords: ['4個2L', '8人', '250mL'],
      method: '多步比較',
      methodHint: '先計總量，再計需要量，然後比較。',
      steps: [
        { prompt: '總共有幾多 mL？', type: 'choice', options: ['8000mL', '4000mL', '2000mL', '1000mL'], answer: '8000mL', feedback: '4×2000=8000mL。' },
        { prompt: '要分幾多 mL？', type: 'choice', options: ['2000mL', '250mL', '8000mL', '4000mL'], answer: '2000mL', feedback: '8×250=2000mL。' },
        { prompt: '8000>2000，夠分嗎？', type: 'choice', options: ['夠，仲有6000mL剩', '唔夠'], answer: '夠，仲有6000mL剩', feedback: '係呀！夠有突！' }
      ]
    },
  },
  // 176
  { id: 'm_h15', topic: 'measurement', difficulty: 'hard',
    question: '火車由香港到廣州需時 1 小時 45 分。如果火車上午 9:30 開出，但因信號問題延誤了 25 分鐘，幾點到達？',
    options: ['上午 11:40', '上午 11:15', '上午 11:55', '下午 12:10'],
    answer: '上午 11:40',
    hint: '9:30+1:45=11:15，再+25分=11:40。',
    explanation: '原定到達=9:30+1:45=11:15。延誤25分：11:15+0:25=11:40。',
    explanationSteps: ['第一步：原定到達時間：9:30+1小時45分。', '第二步：9:30+1小時=10:30，+45分=11:15。', '第三步：延誤25分鐘：11:15+0:25=11:40。'],
    commonMistake: '有啲小朋友會忘記加延誤時間。',
    teacherTip: '延誤就係要加時間。先計原定到達，再加延誤。',
    guidedReview: {
      keywords: ['1小時45分', '9:30', '延誤25分'],
      method: '時間加法',
      methodHint: '先加車程，再加延誤。',
      steps: [
        { prompt: '原定幾點到？9:30+1:45=？', type: 'choice', options: ['11:15', '10:45', '11:30', '10:15'], answer: '11:15', feedback: '啱！9:30+1:45=11:15。' },
        { prompt: '再加延誤25分鐘：11:15+0:25=？', type: 'choice', options: ['11:40', '11:30', '12:15', '11:55'], answer: '11:40', feedback: '好！11:40到達。' }
      ]
    },
  },
  // 177
  { id: 's_e13', topic: 'shapes', difficulty: 'easy',
    question: '一個圖形有 5 條邊，叫做？',
    options: ['五邊形', '三角形', '四邊形', '六邊形'],
    answer: '五邊形',
    hint: '5條邊 = 五邊形。',
    explanation: '有5條邊的圖形叫五邊形。',
    explanationSteps: ['第一步：數一數有幾多條邊。', '第二步：5條邊。', '第三步：所以係五邊形。'],
    commonMistake: '有啲小朋友會同六邊形（6條邊）搞亂。',
    teacherTip: '圖形名就係邊數：三=3，四=4，五=5，六=6。',
    guidedReview: {
      keywords: ['5條邊', '叫做'],
      method: '圖形命名',
      methodHint: '幾多條邊就係幾多邊形。',
      steps: [
        { prompt: '3條邊係咩形？', type: 'choice', options: ['三角形', '四邊形', '五邊形', '六邊形'], answer: '三角形', feedback: '啱！3=三。' },
        { prompt: '5條邊呢？', type: 'choice', options: ['五邊形', '三角形', '四邊形', '六邊形'], answer: '五邊形', feedback: '好！5=五邊形。' }
      ]
    },
  },
  // 178
  { id: 's_e14', topic: 'shapes', difficulty: 'easy',
    question: '圓形係由咩線組成？',
    options: ['彎曲的曲線', '直線', '折線', '虛線'],
    answer: '彎曲的曲線',
    hint: '圓形係由一條光滑嘅曲線圍成。',
    explanation: '圓形是由一條封閉的曲線組成的，沒有直線邊。',
    explanationSteps: ['第一步：圓形的邊不是直線。', '第二步：是一條光滑的曲線。', '第三步：這條曲線叫圓周。'],
    commonMistake: '有啲小朋友會以為圓形有邊，其實圓形冇直線邊。',
    teacherTip: '圓形、橢圓形都係由曲線組成，冇角、冇直線邊。',
    guidedReview: {
      keywords: ['圓形', '咩線'],
      method: '圖形特徵',
      methodHint: '圓形係曲線，唔係直線。',
      steps: [
        { prompt: '圓形的邊係直線定曲線？', type: 'choice', options: ['曲線', '直線', '折線'], answer: '曲線', feedback: '啱！圓形係曲線。' },
        { prompt: '圓形有冇角？', type: 'choice', options: ['冇', '有4個', '有3個', '有1個'], answer: '冇', feedback: '好！圓形冇角。' }
      ]
    },
  },
  // 179
  { id: 's_m13', topic: 'shapes', difficulty: 'medium',
    question: '一個長方形長 10cm，闊 6cm。周界係幾多？',
    options: ['32cm', '16cm', '60cm', '30cm'],
    answer: '32cm',
    hint: '周界=2×(10+6)=2×16=32cm。',
    explanation: '周界 = 2 × (長 + 闊) = 2 × (10+6) = 2 × 16 = 32cm。',
    explanationSteps: ['第一步：周界公式：2×(長+闊)。', '第二步：長+闊=10+6=16。', '第三步：2×16=32cm。'],
    commonMistake: '有啲小朋友會直接10+6=16（忘記乘2）。',
    teacherTip: '長方形周界=2條長+2條闊。公式：2×(長+闊)。',
    guidedReview: {
      keywords: ['長方形', '10cm', '6cm', '周界'],
      method: '周界公式',
      methodHint: '周界=2×(長+闊)。',
      steps: [
        { prompt: '長+闊=？', type: 'choice', options: ['16', '10', '6', '4'], answer: '16', feedback: '啱！10+6=16。' },
        { prompt: '2×16=？', type: 'choice', options: ['32', '16', '60', '30'], answer: '32', feedback: '好！周界=32cm。' }
      ]
    },
  },
  // 180
  { id: 's_m14', topic: 'shapes', difficulty: 'medium',
    question: '等邊三角形的三條邊都係 7cm，周界係幾多？',
    options: ['21cm', '14cm', '28cm', '7cm'],
    answer: '21cm',
    hint: '三條邊都係7cm，3×7=21cm。',
    explanation: '等邊三角形三邊相等。周界=7+7+7=3×7=21cm。',
    explanationSteps: ['第一步：等邊三角形三條邊一樣長。', '第二步：每條邊7cm。', '第三步：3×7=21cm。'],
    commonMistake: '有啲小朋友會用7×7（面積錯覺），其實是3×7。',
    teacherTip: '三角形周界=三邊相加。等邊三角形=邊長×3。',
    guidedReview: {
      keywords: ['等邊三角形', '7cm', '周界'],
      method: '周界（等邊）',
      methodHint: '三邊相等，邊長×3=周界。',
      steps: [
        { prompt: '等邊三角形有幾多條邊？', type: 'choice', options: ['3條', '4條', '2條', '5條'], answer: '3條', feedback: '啱！三角形有3條邊。' },
        { prompt: '周界=3×7=？', type: 'choice', options: ['21', '14', '28', '7'], answer: '21', feedback: '好！周界21cm。' }
      ]
    },
  },
  // 181
  { id: 's_h13', topic: 'shapes', difficulty: 'hard',
    question: '一個正方形花圃邊長 8 米。工人伯伯在外圍圍欄，每米欄杆 $25，要俾幾多錢？',
    options: ['$800', '$200', '$400', '$600'],
    answer: '$800',
    hint: '周界=4×8=32米，32×25=800元。',
    explanation: '周界=4×8=32米。錢=32×25=800元。',
    explanationSteps: ['第一步：先計花圃周界：4×8=32米。', '第二步：每米$25，總錢=32×25。', '第三步：32×25=800元。'],
    commonMistake: '有啲小朋友會直接用8×25=200（忘記計周界）。',
    teacherTip: '圍欄問題先計周界，再乘每米價錢。',
    guidedReview: {
      keywords: ['正方形', '8米', '每米$25'],
      method: '周界應用',
      methodHint: '先計周界，再乘單價。',
      steps: [
        { prompt: '正方形周界=？', type: 'choice', options: ['32米', '8米', '16米', '64米'], answer: '32米', feedback: '4×8=32米。' },
        { prompt: '32×25=？', type: 'choice', options: ['800', '200', '400', '600'], answer: '800', feedback: '要俾$800。' }
      ]
    },
  },
  // 182
  { id: 's_h14', topic: 'shapes', difficulty: 'hard',
    question: '以下哪一組三角形分類係正確嘅？',
    options: ['等邊三角形都係等腰三角形', '等腰三角形都係等邊三角形', '直角三角形都係等腰三角形', '等腰三角形冇直角'],
    answer: '等邊三角形都係等腰三角形',
    hint: '等邊有三邊相等，等腰只需兩邊相等。所以等邊符合等腰的條件。',
    explanation: '等腰三角形只要兩邊相等。等邊三角形有三邊相等，當然也符合條件。',
    explanationSteps: ['第一步：等腰三角形條件：最少兩邊相等。', '第二步：等邊三角形三邊相等。', '第三步：三邊相等當然也符合兩邊相等，所以等邊都係等腰。'],
    commonMistake: '有啲小朋友以為等腰同等邊係完全分開嘅兩類。',
    teacherTip: '包含關係：等邊 ⊂ 等腰 ⊂ 三角形。等邊是「特別的」等腰。',
    guidedReview: {
      keywords: ['等邊', '等腰', '分類'],
      method: '圖形包含關係',
      methodHint: '等邊三角形三邊相等，咁係咪最少有兩邊相等？',
      steps: [
        { prompt: '等腰三角形要幾多條邊相等？', type: 'choice', options: ['最少2條', '3條', '1條', '全部'], answer: '最少2條', feedback: '啱！等腰最少兩邊相等。' },
        { prompt: '等邊三角形有3條邊相等，咁佢係咪等腰？', type: 'choice', options: ['係', '唔係'], answer: '係', feedback: '好！3邊相等當然符合最少2邊相等。' }
      ]
    },
  },
  // 183
  { id: 'd_e13', topic: 'data', difficulty: 'easy',
    question: '溫度計顯示 25°C。比 25°C 高 10°C 係幾多度？',
    options: ['35°C', '15°C', '30°C', '20°C'],
    answer: '35°C',
    hint: '25+10=35°C。',
    explanation: '25°C + 10°C = 35°C。',
    explanationSteps: ['第一步：溫度計顯示25°C。', '第二步：高10°C即係加10。', '第三步：25+10=35°C。'],
    commonMistake: '有啲小朋友會以為「高」就係減。',
    teacherTip: '「比...高」就係加，「比...低」就係減。',
    guidedReview: {
      keywords: ['25°C', '高10°C'],
      method: '溫度加減',
      methodHint: '「高」即係加。',
      steps: [
        { prompt: '「高10°C」應該加定減？', type: 'choice', options: ['加', '減'], answer: '加', feedback: '啱！高就加。' },
        { prompt: '25+10=？', type: 'choice', options: ['35', '15', '30', '20'], answer: '35', feedback: '好！35°C。' }
      ]
    },
  },
  // 184
  { id: 'd_e14', topic: 'data', difficulty: 'easy',
    question: '一個硬幣擲出，邊個面向上係「不可能」預測的？',
    options: ['兩個都可能，無法肯定', '一定是公', '一定是字', '公同字輪流'],
    answer: '兩個都可能，無法肯定',
    hint: '擲硬幣的結果是隨機的，不能肯定。',
    explanation: '擲硬幣可能出公也可能出字，沒有人能肯定。',
    explanationSteps: ['第一步：硬幣有兩面：公同字。', '第二步：擲出去，兩邊都有可能。', '第三步：所以不能肯定出邊一面。'],
    commonMistake: '有啲小朋友會以為擲10次會5次公5次字，但每次都是隨機的。',
    teacherTip: '隨機事件就是無法肯定結果的事件。擲硬幣、抽獎都是隨機。',
    guidedReview: {
      keywords: ['硬幣', '擲出', '不可能預測'],
      method: '概率判斷',
      methodHint: '硬幣兩面都可能，無法知道會係邊面。',
      steps: [
        { prompt: '硬幣有幾多面？', type: 'choice', options: ['2面', '1面', '3面', '4面'], answer: '2面', feedback: '啱！公同字。' },
        { prompt: '擲硬幣可以肯定結果嗎？', type: 'choice', options: ['唔可以', '可以'], answer: '唔可以', feedback: '好！每次都是隨機的。' }
      ]
    },
  },
  // 185
  { id: 'd_m13', topic: 'data', difficulty: 'medium',
    question: '以下是 7 日嘅氣溫：28, 30, 29, 31, 28, 32, 29。呢組數字出現次數最多嘅係？',
    options: ['28 (2次)', '29 (2次)', '30 (1次)', '31 (1次)'],
    answer: '28 (2次)',
    hint: '28出現2次，29也出現2次。28和29一樣多。咦，題目選項只有28正確。',
    explanation: '28出現2次，29也出現2次，30、31、32各1次。28和29都出現最多（2次）。',
    explanationSteps: ['第一步：逐個數數每個數字出現幾次。', '第二步：28出現2次，29出現2次。', '第三步：28和29都是出現最多的（並列）。'],
    commonMistake: '有啲小朋友會直接揀最大嘅數字32。',
    teacherTip: '眾數係出現次數最多的數字，唔係最大嘅數字。',
    guidedReview: {
      keywords: ['氣溫', '出現次數最多', '眾數'],
      method: '統計（眾數）',
      methodHint: '逐個數字數出現了幾次。',
      steps: [
        { prompt: '28出現咗幾次？', type: 'choice', options: ['2次', '1次', '3次', '0次'], answer: '2次', feedback: '啱！28出現2次。' },
        { prompt: '29出現咗幾次？', type: 'choice', options: ['2次', '1次', '3次', '0次'], answer: '2次', feedback: '好！29也2次。' },
        { prompt: '最多出現嘅係？', type: 'choice', options: ['28同29', '32', '30', '31'], answer: '28同29', feedback: '答啱！並列最多。' }
      ]
    },
  },
  // 186
  { id: 'd_m14', topic: 'data', difficulty: 'medium',
    question: '一個盒有 6 張卡：1, 2, 3, 4, 5, 6。抽到單數（1,3,5）的機會係？',
    options: ['3/6 = 1/2', '3/3 = 1', '1/6', '6/6 = 1'],
    answer: '3/6 = 1/2',
    hint: '單數有3個（1,3,5），總數6個，機會=3/6=1/2。',
    explanation: '單數：1,3,5共3個。總數6個。機會=3/6=1/2。',
    explanationSteps: ['第一步：單數有1,3,5共3個。', '第二步：總共有6張卡。', '第三步：機會=3/6=1/2。'],
    commonMistake: '有啲小朋友會以為單數有4個（忘記了2和4是雙數）。',
    teacherTip: '概率=想要嘅數量÷總數量。約簡到最簡分數。',
    guidedReview: {
      keywords: ['單數', '1至6', '機會'],
      method: '概率',
      methodHint: '數吓單數有幾個，再除總數。',
      steps: [
        { prompt: '1至6入面，單數有邊啲？', type: 'choice', options: ['1,3,5', '2,4,6', '1,2,3', '4,5,6'], answer: '1,3,5', feedback: '啱！3個單數。' },
        { prompt: '機會=3/6=？', type: 'choice', options: ['1/2', '1/3', '1/6', '1'], answer: '1/2', feedback: '好！一半機會抽到單數。' }
      ]
    },
  },
  // 187
  { id: 'd_h13', topic: 'data', difficulty: 'hard',
    question: '以下是6個學生的體重（kg）：25, 28, 30, 22, 35, 28。平均體重係？',
    options: ['28 kg', '30 kg', '27 kg', '29 kg'],
    answer: '28 kg',
    hint: '總和=25+28+30+22+35+28=168，168÷6=28。',
    explanation: '總和=25+28+30+22+35+28=168。平均=168÷6=28kg。',
    explanationSteps: ['第一步：加晒全部體重：25+28=53，+30=83，+22=105，+35=140，+28=168。', '第二步：總和=168kg。', '第三步：168÷6=28kg。'],
    commonMistake: '有啲小朋友會加漏數字或除錯。逐個加完要 check 多次。',
    teacherTip: '平均數=總和÷人數。加晒全部數字，再除人數。',
    guidedReview: {
      keywords: ['體重', '平均', '6個'],
      method: '平均數',
      methodHint: '全部加埋再除人數。',
      steps: [
        { prompt: '總和係幾多？', type: 'choice', options: ['168', '158', '178', '148'], answer: '168', feedback: '啱！全部加埋=168。' },
        { prompt: '168÷6=？', type: 'choice', options: ['28', '30', '27', '29'], answer: '28', feedback: '好！平均體重28kg。' }
      ]
    },
  },
  // 188
  { id: 'd_h14', topic: 'data', difficulty: 'hard',
    question: '家樂、OK、7-11 三間店嘅汽水價錢：$8、$7、$9。如果買 4 枝，最平要俾幾多錢？',
    options: ['$28', '$32', '$36', '$24'],
    answer: '$28',
    hint: '最平係$7，4×7=28。',
    explanation: '最平的店是$7一枝。4×7=28元。',
    explanationSteps: ['第一步：先搵最平的價錢：$8, $7, $9 → $7最平。', '第二步：去最平的店買4枝：4×7=28元。'],
    commonMistake: '有啲小朋友會直接買其中一間，唔識揀最平嗰間。',
    teacherTip: '「最平」問題先比較價錢揀最平，再計總數。',
    guidedReview: {
      keywords: ['$8', '$7', '$9', '最平'],
      method: '數據比較',
      methodHint: '先揀最平嘅價錢，再計總數。',
      steps: [
        { prompt: '邊間最平？', type: 'choice', options: ['$7', '$8', '$9'], answer: '$7', feedback: '啱！$7最平。' },
        { prompt: '買4枝要幾錢？', type: 'choice', options: ['$28', '$32', '$36', '$24'], answer: '$28', feedback: '好！4×7=28。' }
      ]
    },
  },
  // 189
  { id: 'n_e24', topic: 'numbers', difficulty: 'easy',
    question: '5 個千、3 個百、7 個十、2 個一，組成的數字係？',
    options: ['5372', '500372', '5327', '5732'],
    answer: '5372',
    hint: '5個千=5000，3個百=300，7個十=70，2個一=2，加埋=5372。',
    explanation: '5000+300+70+2=5372。千位5、百位3、十位7、個位2。',
    explanationSteps: ['第一步：5個千 = 5000，千位係5。', '第二步：3個百 = 300，百位係3。', '第三步：7個十 = 70，十位係7。', '第四步：2個一 = 2，個位係2。組合：5372。'],
    commonMistake: '有啲小朋友會寫成500372，以為要全部數字寫晒出嚟。',
    teacherTip: '逐個位寫：千位→百位→十位→個位。',
    guidedReview: { keywords: ['5個千', '3個百', '7個十', '2個一'], method: '位值組數', methodHint: '由最大位開始逐個位寫。', steps: [
      { prompt: '千位係幾多？', type: 'choice', options: ['5', '3', '7', '2'], answer: '5', feedback: '啱！5個千 = 千位5。' },
      { prompt: '百位係幾多？', type: 'choice', options: ['3', '5', '7', '2'], answer: '3', feedback: '好！百位3。' },
      { prompt: '十位同個位呢？', type: 'choice', options: ['十位7個位2', '十位2個位7', '十位0個位0'], answer: '十位7個位2', feedback: '寫成5372！' }
    ]}
  },
  { id: 'n_e25', topic: 'numbers', difficulty: 'easy',
    question: '比 234 大 100 的數係？',
    options: ['334', '244', '235', '134'],
    answer: '334',
    hint: '234+100=334。',
    explanation: '比234大100，即係加100：234+100=334。',
    explanationSteps: ['第一步：「比...大」即係加。', '第二步：234+100。', '第三步：234+100=334。'],
    commonMistake: '有啲小朋友會用減法：234−100=134。',
    teacherTip: '「比...大」就加，「比...細」就減。記得口訣。',
    guidedReview: { keywords: ['比234大100'], method: '加法', methodHint: '「比...大」即是加。', steps: [
      { prompt: '用加法定減法？', type: 'choice', options: ['加法', '減法'], answer: '加法', feedback: '啱！大=加。' },
      { prompt: '234+100=？', type: 'choice', options: ['334', '244', '235', '134'], answer: '334', feedback: '好！234+100=334。' }
    ]}
  },
  { id: 'm_e19', topic: 'measurement', difficulty: 'easy',
    question: '下課時間上午 10:35，上課鐘聲上午 10:50。小息有幾多分鐘？',
    options: ['15 分鐘', '10 分鐘', '20 分鐘', '25 分鐘'],
    answer: '15 分鐘',
    hint: '10:50 − 10:35 = 15分鐘。',
    explanation: '10:50 − 10:35 = 15分鐘。',
    explanationSteps: ['第一步：小息由10:35到10:50。', '第二步：50−35=15分鐘。', '第三步：小息有15分鐘。'],
    commonMistake: '有啲小朋友會用50+35=85，計錯方法。',
    teacherTip: '時間相差直接用結束減開始：10:50−10:35=15分鐘。',
    guidedReview: { keywords: ['10:35', '10:50', '幾多分鐘'], method: '時間減法', methodHint: '結束時間減開始時間。', steps: [
      { prompt: '應該用加法定減法？', type: 'choice', options: ['減法', '加法'], answer: '減法', feedback: '啱！結束減開始。' },
      { prompt: '50−35=？', type: 'choice', options: ['15', '25', '10', '20'], answer: '15', feedback: '好！小息15分鐘。' }
    ]}
  },
  { id: 'm_e20', topic: 'measurement', difficulty: 'easy',
    question: '水樽有 500 毫升水，再倒 300 毫升入去，現在有幾多毫升？',
    options: ['800 毫升', '200 毫升', '500 毫升', '300 毫升'],
    answer: '800 毫升',
    hint: '500+300=800毫升。',
    explanation: '500+300=800毫升。',
    explanationSteps: ['第一步：原本有500毫升。', '第二步：「再倒」即係加：500+300。', '第三步：500+300=800毫升。'],
    commonMistake: '有啲小朋友會用500−300=200，唔記得「倒入」係加。',
    teacherTip: '「倒入」、「加入」就加；「倒出」、「倒走」就減。',
    guidedReview: { keywords: ['500毫升', '倒300毫升', '現在'], method: '加法', methodHint: '「再倒」即是加。', steps: [
      { prompt: '用加法定減法？', type: 'choice', options: ['加法', '減法'], answer: '加法', feedback: '啱！倒入=加。' },
      { prompt: '500+300=？', type: 'choice', options: ['800', '200', '500', '300'], answer: '800', feedback: '好！現在有800mL。' }
    ]}
  },
  { id: 's_e15', topic: 'shapes', difficulty: 'easy',
    question: '以下邊個圖形有最多條邊？',
    options: ['五邊形', '四邊形', '三角形', '圓形'],
    answer: '五邊形',
    hint: '五邊形5條 > 四邊形4條 > 三角形3條 > 圓形0條。',
    explanation: '五邊形有5條邊，最多。四邊形4條，三角形3條，圓形0條。',
    explanationSteps: ['第一步：數下每個圖形嘅邊數。', '第二步：五邊形5條、四邊形4條、三角形3條、圓形0條。', '第三步：5最多，所以五邊形最多邊。'],
    commonMistake: '有啲小朋友會以為圓形都有邊。',
    teacherTip: '圓形是曲線圍成，沒有直線邊。五邊形5>四邊形4>三角形3>圓形0。',
    guidedReview: { keywords: ['最多條邊'], method: '圖形比較', methodHint: '逐個圖形數邊數。', steps: [
      { prompt: '三角形有幾條邊？', type: 'choice', options: ['3', '4', '5', '0'], answer: '3', feedback: '啱！三角形3條邊。' },
      { prompt: '五邊形有幾多條邊？', type: 'choice', options: ['5', '4', '3', '0'], answer: '5', feedback: '好！五邊形5條邊，最多！' }
    ]}
  },
  { id: 's_m15', topic: 'shapes', difficulty: 'medium',
    question: '一個三角形其中兩邊係 4cm 同 5cm，第三邊最長可以係幾多 cm？',
    options: ['8cm', '9cm', '6cm', '10cm'],
    answer: '8cm',
    hint: '兩邊之和＞第三邊：4+5=9，所以第三邊要<9，最長整數=8。',
    explanation: '4+5=9要大於第三邊。第三邊<9，最長整數是8cm。',
    explanationSteps: ['第一步：三角形要兩邊之和大於第三邊。', '第二步：4+5=9，第三邊要細過9。', '第三步：比9細嘅最大整數係8。'],
    commonMistake: '有啲小朋友會以為第三邊可以同兩邊之和相等（9），但係要「大過」唔係「等於」。',
    teacherTip: '第三邊 < 兩邊之和，所以<9，最大係8。',
    guidedReview: { keywords: ['4cm', '5cm', '第三邊', '最長'], method: '三角形邊長關係', methodHint: '第三邊要細過兩邊之和。', steps: [
      { prompt: '4+5=？', type: 'choice', options: ['9', '8', '10', '7'], answer: '9', feedback: '啱！兩邊之和=9。' },
      { prompt: '第三邊要點樣？', type: 'choice', options: ['<9', '>9', '=9', '>10'], answer: '<9', feedback: '好！要細過9，所以最長整數=8cm。' }
    ]}
  },
  { id: 's_h15', topic: 'shapes', difficulty: 'hard',
    question: '一個正方形邊長 6cm，另一個長方形長 8cm、闊 4cm。邊個周界大啲？',
    options: ['一樣大', '正方形', '長方形', '無法比較'],
    answer: '一樣大',
    hint: '正方形=4×6=24。長方形=2×(8+4)=24。一樣。',
    explanation: '正方形周界=4×6=24cm。長方形周界=2×(8+4)=24cm。兩個一樣大。',
    explanationSteps: ['第一步：正方形周界=4×6=24cm。', '第二步：長方形周界=2×(8+4)=24cm。', '第三步：兩個都係24cm，一樣大。'],
    commonMistake: '有啲小朋友會以為長方形周界一定大過正方形。',
    teacherTip: '周界要計完先可以比較，不能靠估。',
    guidedReview: { keywords: ['正方形6cm', '長方形8cm闊4cm', '周界'], method: '周界比較', methodHint: '分別計兩個圖形的周界再比較。', steps: [
      { prompt: '正方形周界=？', type: 'choice', options: ['24cm', '12cm', '36cm', '18cm'], answer: '24cm', feedback: '啱！4×6=24cm。' },
      { prompt: '長方形周界=？', type: 'choice', options: ['24cm', '16cm', '32cm', '20cm'], answer: '24cm', feedback: '好！2×(8+4)=24cm。' },
      { prompt: '邊個大啲？', type: 'choice', options: ['一樣', '正方形', '長方形'], answer: '一樣', feedback: '兩個都係24cm，一樣大。' }
    ]}
  },
  { id: 'd_e15', topic: 'data', difficulty: 'easy',
    question: '班裏有 20 個學生，10 人戴眼鏡。長條圖戴眼鏡嘅柱高應該係？',
    options: ['10', '20', '30', '5'],
    answer: '10',
    hint: '10人戴眼鏡，柱高就是10。',
    explanation: '長條圖柱高=數量。10人戴眼鏡，柱高10。',
    explanationSteps: ['第一步：長條圖柱高 = 數量。', '第二步：戴眼鏡有10人。', '第三步：柱高就係10。'],
    commonMistake: '有啲小朋友會用全班人數20。',
    teacherTip: '長條圖的柱高對應該項目的實際數字，不是總數。',
    guidedReview: { keywords: ['20個學生', '10人戴眼鏡', '柱高'], method: '長條圖讀數', methodHint: '柱高就是該項目的數量。', steps: [
      { prompt: '長條圖柱高代表咩？', type: 'choice', options: ['數量', '顏色', '名稱', '時間'], answer: '數量', feedback: '啱！柱高=數量。' },
      { prompt: '戴眼鏡有幾多人？', type: 'choice', options: ['10', '20', '30', '5'], answer: '10', feedback: '好！柱高就是10。' }
    ]}
  },
  { id: 'd_m15', topic: 'data', difficulty: 'medium',
    question: '一袋有 2 個紅波、4 個藍波、6 個綠波。抽到紅波的機會係幾多？',
    options: ['2/12 = 1/6', '2/10 = 1/5', '4/12 = 1/3', '6/12 = 1/2'],
    answer: '2/12 = 1/6',
    hint: '總波數=2+4+6=12。紅波有2個。機會=2/12=1/6。',
    explanation: '總共12個波，紅波2個。機會=2/12=1/6。',
    explanationSteps: ['第一步：計總數：2+4+6=12個波。', '第二步：紅波有2個。', '第三步：機會=2/12=1/6。'],
    commonMistake: '有啲小朋友會只計紅波+藍波=6，忘記計綠波。',
    teacherTip: '概率分母一定要係總數。總數=全部加埋。',
    guidedReview: { keywords: ['2紅', '4藍', '6綠', '紅波機會'], method: '概率', methodHint: '先計總波數，再計想要嘅顏色數量。', steps: [
      { prompt: '總共有幾多個波？', type: 'choice', options: ['12', '8', '10', '6'], answer: '12', feedback: '啱！2+4+6=12。' },
      { prompt: '紅波有幾多個？', type: 'choice', options: ['2', '4', '6', '12'], answer: '2', feedback: '好！2個紅波。' },
      { prompt: '機會=？', type: 'choice', options: ['2/12=1/6', '4/12', '6/12', '12/12'], answer: '2/12=1/6', feedback: '正確！1/6機會。' }
    ]}
  },
  { id: 'd_h15', topic: 'data', difficulty: 'hard',
    question: '以下是5次小測分數：68, 72, 80, 88, 92。如果全部加10分，平均分會點？',
    options: ['加10分', '加2分', '加5分', '不變'],
    answer: '加10分',
    hint: '全部加10分，總和加50分，平均加50÷5=10分。',
    explanation: '每個分數加10分，平均分也加10分。總和加50分，50÷5=10分。',
    explanationSteps: ['第一步：原本平均=(68+72+80+88+92)÷5=80分。', '第二步：全部加10分後=(78+82+90+98+102)÷5=90分。', '第三步：90−80=10分。'],
    commonMistake: '有啲小朋友會以為全體加10分，平均會加更多或少於10。',
    teacherTip: '全班所有人都加分，平均分也加同樣分數。',
    guidedReview: { keywords: ['加10分', '平均分'], method: '平均數推理', methodHint: '全部加相同分數，平均也加相同分數。', steps: [
      { prompt: '1個人加10分，平均點變？', type: 'choice', options: ['加10', '加少過10', '加多過10', '不變'], answer: '加10', feedback: '啱！全部加10，平均都加10。' }
    ]}
  },
  { id: 'n_m16', topic: 'numbers', difficulty: 'medium',
    question: '媽媽買了 3 盒朱古力，每盒有 24 粒。總共有幾多粒？',
    options: ['72 粒', '64 粒', '84 粒', '27 粒'],
    answer: '72 粒',
    hint: '3×24=72粒。',
    explanation: '3盒×24粒=72粒。',
    explanationSteps: ['第一步：3盒朱古力。', '第二步：每盒24粒。', '第三步：3×24=72粒。'],
    commonMistake: '有啲小朋友會用3+24=27，但「每盒」係乘唔係加。',
    teacherTip: '見到「每盒有...」就要用乘法：盒數×每盒數量。',
    guidedReview: { keywords: ['3盒', '每盒24粒', '總共'], method: '乘法', methodHint: '盒數乘每盒數量。', steps: [
      { prompt: '用咩方法？', type: 'choice', options: ['乘法', '加法', '減法', '除法'], answer: '乘法', feedback: '啱！每盒=乘。' },
      { prompt: '3×24=？', type: 'choice', options: ['72', '64', '84', '27'], answer: '72', feedback: '好！72粒。' }
    ]}
  },
  { id: 'd_m16', topic: 'data', difficulty: 'medium',
    question: '以下是5天的溫度：28, 30, 26, 29, 27。最高同最低相差幾多？',
    options: ['4°C', '2°C', '5°C', '3°C'],
    answer: '4°C',
    hint: '最高30，最低26，30−26=4。',
    explanation: '最高30°C，最低26°C，相差30−26=4°C。',
    explanationSteps: ['第一步：找出最高溫度：30°C。', '第二步：找出最低溫度：26°C。', '第三步：30−26=4°C。'],
    commonMistake: '有啲小朋友會逐對比較，但搵最高同最低再減就得。',
    teacherTip: '「相差」問題：先搵最高同最低，然後大減細。',
    guidedReview: { keywords: ['28,30,26,29,27', '相差'], method: '數據比較', methodHint: '先搵最高同最低，再相減。', steps: [
      { prompt: '最高係幾多？', type: 'choice', options: ['30', '28', '29', '26'], answer: '30', feedback: '啱！30最高。' },
      { prompt: '最低係幾多？', type: 'choice', options: ['26', '28', '27', '29'], answer: '26', feedback: '好！26最低。' },
      { prompt: '30−26=？', type: 'choice', options: ['4', '2', '5', '3'], answer: '4', feedback: '相差4°C。' }
    ]}
  },
]

export default questions
