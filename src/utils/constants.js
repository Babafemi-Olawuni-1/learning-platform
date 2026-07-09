export const COLORS = {
  cream: '#FDF8F0',
  coral: '#FF6B6B',
  yellow: '#FFD93D',
  mint: '#6BCB77',
  navy: '#2D4059',
  navyLight: '#3d5a7a',
  orange: '#FF9A3C',
}

export const EXAMS = ['WAEC', 'JAMB', 'NECO', 'IGCSE', 'Cambridge']

export const SUBJECTS = [
  { id: 'mathematics', name: 'Mathematics', icon: '∑', color: '#FF6B6B', progress: 62, lessons: 24, quizzes: 18 },
  { id: 'english', name: 'English Language', icon: 'A', color: '#6BCB77', progress: 78, lessons: 20, quizzes: 15 },
  { id: 'physics', name: 'Physics', icon: '⚡', color: '#FFD93D', progress: 45, lessons: 22, quizzes: 16 },
  { id: 'chemistry', name: 'Chemistry', icon: '⚗', color: '#2D4059', progress: 30, lessons: 20, quizzes: 14 },
  { id: 'biology', name: 'Biology', icon: '🧬', color: '#FF9A3C', progress: 55, lessons: 18, quizzes: 12 },
  { id: 'economics', name: 'Economics', icon: '$', color: '#6BCB77', progress: 20, lessons: 16, quizzes: 10 },
]

export const TOPICS = {
  mathematics: [
    { id: 'algebra', name: 'Algebra', progress: 80, lessons: 6, questions: 40 },
    { id: 'trigonometry', name: 'Trigonometry', progress: 45, lessons: 5, questions: 35 },
    { id: 'calculus', name: 'Calculus', progress: 0, lessons: 7, questions: 50 },
    { id: 'statistics', name: 'Statistics', progress: 60, lessons: 4, questions: 30 },
    { id: 'geometry', name: 'Geometry', progress: 30, lessons: 5, questions: 38 },
  ],
  english: [
    { id: 'comprehension', name: 'Comprehension', progress: 85, lessons: 5, questions: 30 },
    { id: 'essay-writing', name: 'Essay Writing', progress: 70, lessons: 4, questions: 20 },
    { id: 'grammar', name: 'Grammar & Usage', progress: 65, lessons: 6, questions: 45 },
    { id: 'vocabulary', name: 'Vocabulary', progress: 50, lessons: 3, questions: 40 },
  ],
  physics: [
    { id: 'mechanics', name: 'Mechanics', progress: 55, lessons: 6, questions: 42 },
    { id: 'waves', name: 'Waves & Sound', progress: 40, lessons: 4, questions: 30 },
    { id: 'electricity', name: 'Electricity', progress: 20, lessons: 5, questions: 35 },
    { id: 'optics', name: 'Optics', progress: 0, lessons: 4, questions: 28 },
  ],
}

export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Solve for x: 3x² + 5x - 2 = 0',
    options: ['x = ⅓ or x = -2', 'x = -⅓ or x = 2', 'x = ½ or x = -2', 'x = -½ or x = 2'],
    correct: 0,
    explanation: 'Using the quadratic formula: x = (-5 ± √(25+24)) / 6 = (-5 ± 7) / 6. So x = ⅓ or x = -2.',
  },
  {
    id: 2,
    question: 'What is the value of sin(30°)?',
    options: ['½', '√2/2', '√3/2', '1'],
    correct: 0,
    explanation: 'sin(30°) = ½. This is one of the standard trigonometric values you must memorize.',
  },
  {
    id: 3,
    question: 'Differentiate f(x) = x³ + 2x² - 5x + 3',
    options: ["f'(x) = 3x² + 4x - 5", "f'(x) = 3x² + 2x - 5", "f'(x) = x² + 4x - 5", "f'(x) = 3x³ + 4x - 5"],
    correct: 0,
    explanation: 'Using power rule: d/dx(xⁿ) = nxⁿ⁻¹. So 3x² + 4x - 5.',
  },
  {
    id: 4,
    question: 'The sum of angles in a triangle is:',
    options: ['180°', '360°', '90°', '270°'],
    correct: 0,
    explanation: 'The interior angles of any triangle always sum to 180°.',
  },
  {
    id: 5,
    question: 'What is the area of a circle with radius 7cm? (π = 22/7)',
    options: ['154 cm²', '144 cm²', '176 cm²', '168 cm²'],
    correct: 0,
    explanation: 'Area = πr² = (22/7) × 7² = (22/7) × 49 = 154 cm².',
  },
  {
    id: 6,
    question: 'Simplify: log₂(8) + log₂(4)',
    options: ['5', '6', '4', '7'],
    correct: 0,
    explanation: 'log₂(8) = 3, log₂(4) = 2. Sum = 5.',
  },
  {
    id: 7,
    question: 'If the mean of 5, 8, x, 12, 10 is 9, find x.',
    options: ['10', '11', '9', '8'],
    correct: 0,
    explanation: '(5+8+x+12+10)/5 = 9 → 35+x = 45 → x = 10.',
  },
  {
    id: 8,
    question: 'What is cos(60°)?',
    options: ['½', '√3/2', '√2/2', '1'],
    correct: 0,
    explanation: 'cos(60°) = ½. Standard trigonometric value.',
  },
]
