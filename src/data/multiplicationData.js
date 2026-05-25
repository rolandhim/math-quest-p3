export const STAGES = {
  stage1: { tables: [1, 2, 10], label: '第一關：入門', color: 'green', speed: 'slow' },
  stage2: { tables: [5, 3, 4], label: '第二關：打基礎', color: 'blue', speed: 'medium' },
  stage3: { tables: [6, 7, 8, 9], label: '第三關：進階', color: 'purple', speed: 'fast' },
}

export const TABLE_DATA = {
  1: {
    facts: Array.from({ length: 9 }, (_, i) => ({ multiplicand: i + 1, product: i + 1 })),
    color: '#FFD700',
    emoji: '🌟',
    song: [
      '一一如一', '一二如二', '一三如三', '一四如四', '一五如五',
      '一六如六', '一七如七', '一八如八', '一九如九',
    ],
  },
  2: {
    facts: Array.from({ length: 9 }, (_, i) => ({ multiplicand: i + 1, product: (i + 1) * 2 })),
    color: '#FF6B6B',
    emoji: '🍎',
    song: [
      '二一得二', '二二得四', '二三得六', '二四得八', '二五一十',
      '二六十二', '二七十四', '二八十六', '二九十八',
    ],
  },
  3: {
    facts: Array.from({ length: 9 }, (_, i) => ({ multiplicand: i + 1, product: (i + 1) * 3 })),
    color: '#FF8C42',
    emoji: '🍊',
    song: [
      '三一得三', '三二得六', '三三得九', '三四十二', '三五十五',
      '三六十八', '三七廿一', '三八廿四', '三九廿七',
    ],
  },
  4: {
    facts: Array.from({ length: 9 }, (_, i) => ({ multiplicand: i + 1, product: (i + 1) * 4 })),
    color: '#FFD93D',
    emoji: '🍋',
    song: [
      '四一得四', '四二得八', '四三十二', '四四十六', '四五二十',
      '四六廿四', '四七廿八', '四八卅二', '四九卅六',
    ],
  },
  5: {
    facts: Array.from({ length: 9 }, (_, i) => ({ multiplicand: i + 1, product: (i + 1) * 5 })),
    color: '#6BCB77',
    emoji: '🍀',
    song: [
      '五一得五', '五二一十', '五三十五', '五四二十', '五五廿五',
      '五六三十', '五七卅五', '五八四十', '五九四十五',
    ],
  },
  6: {
    facts: Array.from({ length: 9 }, (_, i) => ({ multiplicand: i + 1, product: (i + 1) * 6 })),
    color: '#4A90D9',
    emoji: '💎',
    song: [
      '六一得六', '六二十二', '六三十八', '六四廿四', '六五三十',
      '六六卅六', '六七四十二', '六八四十八', '六九四十五',
    ],
  },
  7: {
    facts: Array.from({ length: 9 }, (_, i) => ({ multiplicand: i + 1, product: (i + 1) * 7 })),
    color: '#9B59B6',
    emoji: '🍇',
    song: [
      '七一得七', '七二十四', '七三廿一', '七四廿八', '七五卅五',
      '七六四十二', '七七四十九', '七八五十六', '七九六十三',
    ],
  },
  8: {
    facts: Array.from({ length: 9 }, (_, i) => ({ multiplicand: i + 1, product: (i + 1) * 8 })),
    color: '#E91E63',
    emoji: '🍒',
    song: [
      '八一得八', '八二十六', '八三廿四', '八四卅二', '八五四十',
      '八六四十八', '八七五十六', '八八六十四', '八九七十二',
    ],
  },
  9: {
    facts: Array.from({ length: 9 }, (_, i) => ({ multiplicand: i + 1, product: (i + 1) * 9 })),
    color: '#FF9800',
    emoji: '🍑',
    song: [
      '九一得九', '九二十八', '九三廿七', '九四卅六', '九五四十五',
      '九六五十四', '九七六十三', '九八七十二', '九九八十一',
    ],
  },
  10: {
    facts: Array.from({ length: 9 }, (_, i) => ({ multiplicand: i + 1, product: (i + 1) * 10 })),
    color: '#00BCD4',
    emoji: '💫',
    song: [
      '十一得十', '十二十二', '十三十三', '十四四十', '十五五十',
      '十六六十', '十七七十', '十八八十', '十九九十',
    ],
  },
}
