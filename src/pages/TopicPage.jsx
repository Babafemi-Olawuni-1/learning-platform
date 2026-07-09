import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaArrowLeft, FaArrowRight, FaClock, FaCheckCircle,
  FaLightbulb, FaPlay, FaBookOpen
} from 'react-icons/fa'
import AppShell from '../components/layout/AppShell'

const lessonContent = {
  algebra: {
    name: 'Algebra',
    subject: 'Mathematics',
    subjectId: 'mathematics',
    time: '45 minutes',
    objectives: [
      'Solve linear and quadratic equations',
      'Simplify algebraic expressions and fractions',
      'Apply the quadratic formula and factorization',
      'Solve simultaneous equations using substitution and elimination',
    ],
    sections: [
      {
        title: '1. Introduction to Algebraic Expressions',
        body: 'An algebraic expression consists of variables (like x, y), constants (like 2, 7), and arithmetic operations. For example: 3x + 5, 2y² - 4y + 1.',
      },
      {
        title: '2. Solving Linear Equations',
        body: 'A linear equation has the form ax + b = c. To solve, isolate x by performing inverse operations on both sides.\n\nExample: 2x + 3 = 11 → 2x = 8 → x = 4',
      },
      {
        title: '3. Quadratic Equations',
        body: 'A quadratic equation has the form ax² + bx + c = 0. There are three methods to solve:\n• Factorization\n• Completing the square\n• Quadratic formula: x = (-b ± √(b²-4ac)) / 2a',
      },
      {
        title: '4. Worked Example',
        body: 'Solve: x² + 5x + 6 = 0\n\nUsing factorization: (x + 2)(x + 3) = 0\nSo x = -2 or x = -3\n\nVerification: (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓',
      },
    ],
    summary: [
      'Algebraic expressions use variables and constants with operations',
      'Linear equations: isolate the variable using inverse operations',
      'Quadratic equations can be solved by factorization or the quadratic formula',
      'Always verify your answers by substituting back',
    ],
    prevTopic: null,
    nextTopic: { id: 'trigonometry', name: 'Trigonometry' },
  },
  trigonometry: {
    name: 'Trigonometry',
    subject: 'Mathematics',
    subjectId: 'mathematics',
    time: '60 minutes',
    objectives: [
      'Understand sine, cosine, and tangent ratios',
      'Apply trigonometric identities',
      'Solve triangles using SOHCAHTOA',
      'Work with angles in degrees and radians',
    ],
    sections: [
      {
        title: '1. Basic Trigonometric Ratios',
        body: 'For a right-angled triangle with angle θ:\n• sin θ = Opposite / Hypotenuse\n• cos θ = Adjacent / Hypotenuse\n• tan θ = Opposite / Adjacent\n\nMemory aid: SOHCAHTOA',
      },
      {
        title: '2. Standard Angles',
        body: 'Key values to memorize:\n• sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3\n• sin 45° = √2/2, cos 45° = √2/2, tan 45° = 1\n• sin 60° = √3/2, cos 60° = ½, tan 60° = √3',
      },
    ],
    summary: ['SOHCAHTOA is the foundation of all trig ratios', 'Memorize standard angle values', 'The unit circle connects all trig functions'],
    prevTopic: { id: 'algebra', name: 'Algebra' },
    nextTopic: { id: 'calculus', name: 'Calculus' },
  },
}

export default function TopicPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const topic = lessonContent[id] || lessonContent.algebra

  return (
    <AppShell>
      <div className="p-6 max-w-4xl mx-auto space-y-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#2D4059]/45 font-400">
          <button onClick={() => navigate('/dashboard')} className="hover:text-[#FF6B6B] transition-colors">Dashboard</button>
          <span>/</span>
          <button onClick={() => navigate(`/subject/${topic.subjectId}`)} className="hover:text-[#FF6B6B] transition-colors">{topic.subject}</button>
          <span>/</span>
          <span className="text-[#2D4059] font-600">{topic.name}</span>
        </div>

        {/* Topic header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-7">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <span className="inline-block text-xs font-600 bg-[#FF6B6B]/12 text-[#FF6B6B] px-3 py-1 rounded-full mb-3">{topic.subject}</span>
              <h1 className="text-2xl font-700 text-[#2D4059] mb-2">{topic.name}</h1>
              <div className="flex items-center gap-3 text-xs text-[#2D4059]/50">
                <span className="flex items-center gap-1"><FaClock size={11} /> {topic.time}</span>
                <span className="flex items-center gap-1"><FaBookOpen size={11} /> {topic.sections.length} sections</span>
              </div>
            </div>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/quiz')}
              className="btn-gradient text-white font-600 text-sm px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-md">
              <FaPlay size={12} /> Start Quiz
            </motion.button>
          </div>

          {/* Learning objectives */}
          <div className="mt-6 p-4 rounded-2xl bg-[#6BCB77]/8 border border-[#6BCB77]/20">
            <p className="text-xs font-700 text-[#2D9442] uppercase tracking-widest mb-3">Learning Objectives</p>
            <ul className="space-y-2">
              {topic.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#2D4059]/75 font-400">
                  <FaCheckCircle size={12} className="text-[#6BCB77] flex-shrink-0 mt-0.5" /> {obj}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Lesson sections */}
        <div className="space-y-4">
          {topic.sections.map((sec, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
              className="glass rounded-2xl p-6">
              <h3 className="font-700 text-[#2D4059] text-base mb-3">{sec.title}</h3>
              <p className="text-sm text-[#2D4059]/70 font-400 leading-relaxed whitespace-pre-line">{sec.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-6 border border-[#FFD93D]/30">
          <div className="flex items-center gap-2 mb-4">
            <FaLightbulb className="text-[#FFD93D]" size={16} />
            <h3 className="font-700 text-[#2D4059] text-base">Key Takeaways</h3>
          </div>
          <ul className="space-y-2">
            {topic.summary.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-[#2D4059]/70 font-400">
                <span className="w-5 h-5 rounded-full bg-[#FFD93D]/20 text-[#B89A00] text-xs font-700 flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                {s}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Navigation */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex items-center justify-between gap-4">
          <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            onClick={() => topic.prevTopic ? navigate(`/topic/${topic.prevTopic.id}`) : navigate(`/subject/${topic.subjectId}`)}
            className="flex items-center gap-2 glass border border-[#2D4059]/15 text-[#2D4059] font-600 text-sm px-5 py-3 rounded-2xl hover:border-[#2D4059]/30 transition-all">
            <FaArrowLeft size={13} />
            {topic.prevTopic ? topic.prevTopic.name : 'Back to Subject'}
          </motion.button>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/quiz')}
            className="btn-gradient text-white font-600 text-sm px-6 py-3 rounded-2xl flex items-center gap-2 shadow-lg">
            <FaPlay size={13} /> Start Quiz Now
          </motion.button>
          {topic.nextTopic && (
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate(`/topic/${topic.nextTopic.id}`)}
              className="flex items-center gap-2 glass border border-[#2D4059]/15 text-[#2D4059] font-600 text-sm px-5 py-3 rounded-2xl hover:border-[#2D4059]/30 transition-all">
              {topic.nextTopic.name} <FaArrowRight size={13} />
            </motion.button>
          )}
        </motion.div>
      </div>
    </AppShell>
  )
}
