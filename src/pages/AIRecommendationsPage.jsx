import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaBolt, FaArrowRight, FaBook, FaClock,
  FaChartLine, FaCalendarAlt, FaRedo, FaCheckCircle
} from 'react-icons/fa'
import AppShell from '../components/layout/AppShell'

const lessons = [
  { title: 'Quadratic Equations Deep Dive', time: '25 min', topic: 'algebra', difficulty: 'Medium', improvement: '+18%' },
  { title: 'Logarithms & Indices', time: '30 min', topic: 'algebra', difficulty: 'Hard', improvement: '+12%' },
  { title: 'Simultaneous Equations', time: '20 min', topic: 'algebra', difficulty: 'Easy', improvement: '+8%' },
]

const quizzes = [
  { title: 'Quadratic Equations Practice', questions: 15, difficulty: 'Medium', color: '#FFD93D' },
  { title: 'Logarithms Mastery Quiz', questions: 10, difficulty: 'Hard', color: '#FF6B6B' },
  { title: 'Algebra Mixed Review', questions: 20, difficulty: 'Easy', color: '#6BCB77' },
]

const weekPlan = [
  { day: 'Mon', tasks: ['Quadratic Equations Lesson', 'Practice Quiz (10 Qs)'] },
  { day: 'Tue', tasks: ['Logarithms Introduction', 'Review yesterday\'s mistakes'] },
  { day: 'Wed', tasks: ['Simultaneous Equations', 'Full topic quiz'] },
  { day: 'Thu', tasks: ['Trigonometry basics', 'Mixed algebra quiz'] },
  { day: 'Fri', tasks: ['Mock exam simulation', 'Review full week'] },
]

const diffColors = { Easy: '#6BCB77', Medium: '#FFD93D', Hard: '#FF6B6B' }
const diffBg = { Easy: '#6BCB77', Medium: '#FFD93D', Hard: '#FF6B6B' }

export default function AIRecommendationsPage() {
  const navigate = useNavigate()

  return (
    <AppShell>
      <div className="p-6 max-w-5xl mx-auto space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-7 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6BCB77]/10 via-transparent to-[#FFD93D]/8 pointer-events-none" />
          <div className="relative z-10 flex items-start justify-between flex-wrap gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-[#6BCB77]/15 text-[#2D9442] text-xs font-700 px-3 py-1.5 rounded-full mb-3">
                <FaBolt size={11} /> AI Learning Report
              </span>
              <h1 className="text-2xl font-700 text-[#2D4059] mb-2">Your Personalized Study Plan</h1>
              <p className="text-sm text-[#2D4059]/60 font-400 max-w-lg">
                Based on your latest quiz performance, our AI has identified focus areas. Complete these 3 lessons to improve your score by an estimated <span className="font-700 text-[#6BCB77]">+38%</span>.
              </p>
            </div>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 glass border border-[#2D4059]/15 text-[#2D4059] font-600 text-sm px-4 py-2.5 rounded-xl">
              <FaRedo size={12} /> Generate New Plan
            </motion.button>
          </div>
        </motion.div>

        {/* Weakness analysis */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-6 border-l-4 border-[#FF6B6B]">
          <div className="flex items-center gap-2 mb-3">
            <FaChartLine className="text-[#FF6B6B]" size={15} />
            <h3 className="font-700 text-[#2D4059] text-base">Weakness Analysis</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { topic: 'Quadratic Equations', score: 40, color: '#FF6B6B' },
              { topic: 'Logarithms', score: 35, color: '#FF6B6B' },
              { topic: 'Trigonometry', score: 55, color: '#FFD93D' },
              { topic: 'Statistics', score: 70, color: '#6BCB77' },
            ].map(item => (
              <div key={item.topic} className="p-3 rounded-xl bg-[#2D4059]/4">
                <p className="text-xs font-600 text-[#2D4059] mb-2 leading-snug">{item.topic}</p>
                <p className="text-xl font-700" style={{ color: item.color }}>{item.score}%</p>
                <div className="w-full h-1.5 bg-[#2D4059]/10 rounded-full mt-2">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${item.score}%` }}
                    transition={{ delay: 0.4, duration: 0.7 }}
                    className="h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recommended lessons */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
            <h3 className="font-700 text-[#2D4059] text-base mb-4 flex items-center gap-2">
              <FaBook size={14} className="text-[#FF6B6B]" /> Recommended Lessons
            </h3>
            <div className="space-y-3">
              {lessons.map((l, i) => (
                <motion.div key={l.title} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="glass rounded-2xl p-4 card-hover group cursor-pointer"
                  onClick={() => navigate(`/topic/${l.topic}`)}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6B6B]/12 flex items-center justify-center flex-shrink-0">
                      <FaBook size={15} className="text-[#FF6B6B]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-600 text-[#2D4059] text-sm truncate">{l.title}</p>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="text-xs text-[#2D4059]/45 flex items-center gap-1"><FaClock size={10} /> {l.time}</span>
                        <span className="text-xs font-600 px-2 py-0.5 rounded-full" style={{ backgroundColor: `${diffBg[l.difficulty]}20`, color: diffColors[l.difficulty] }}>{l.difficulty}</span>
                      </div>
                    </div>
                    <span className="text-xs font-700 text-[#6BCB77] bg-[#6BCB77]/12 px-2 py-1 rounded-lg flex-shrink-0">{l.improvement}</span>
                    <FaArrowRight size={12} className="text-[#2D4059]/20 group-hover:text-[#FF6B6B] transition-colors flex-shrink-0" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Recommended quizzes */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <h3 className="font-700 text-[#2D4059] text-base mb-4 flex items-center gap-2">
              <FaChartLine size={14} className="text-[#6BCB77]" /> Recommended Quizzes
            </h3>
            <div className="space-y-3">
              {quizzes.map((q, i) => (
                <motion.div key={q.title} initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.07 }}
                  className="glass rounded-2xl p-4 card-hover group cursor-pointer"
                  onClick={() => navigate('/quiz')}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${q.color}18` }}>
                      <FaCheckCircle size={15} style={{ color: q.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="font-600 text-[#2D4059] text-sm">{q.title}</p>
                      <p className="text-xs text-[#2D4059]/45 mt-0.5">{q.questions} questions</p>
                    </div>
                    <span className="text-xs font-600 px-2 py-0.5 rounded-full" style={{ backgroundColor: `${q.color}20`, color: q.color === '#FFD93D' ? '#B89A00' : q.color }}>{q.difficulty}</span>
                    <FaArrowRight size={12} className="text-[#2D4059]/20 group-hover:text-[#FF6B6B] transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Weekly study plan */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="glass rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <FaCalendarAlt className="text-[#2D4059]" size={15} />
            <h3 className="font-700 text-[#2D4059] text-base">Weekly Study Plan</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {weekPlan.map((day, i) => (
              <motion.div key={day.day} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.06 }}
                className="rounded-2xl p-4 bg-[#2D4059]/4">
                <p className="text-sm font-700 text-[#FF6B6B] mb-3">{day.day}</p>
                <ul className="space-y-1.5">
                  {day.tasks.map(t => (
                    <li key={t} className="text-xs text-[#2D4059]/65 font-400 leading-snug flex items-start gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-[#2D4059]/30 flex-shrink-0 mt-1.5" />{t}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex justify-center">
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/topic/algebra')}
            className="btn-gradient text-white font-600 px-8 py-3.5 rounded-full shadow-xl flex items-center gap-2">
            Start First Lesson <FaArrowRight size={14} />
          </motion.button>
        </motion.div>
      </div>
    </AppShell>
  )
}
