import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaTrophy, FaRedo, FaArrowRight, FaCheckCircle,
  FaTimesCircle, FaChartBar, FaLightbulb
} from 'react-icons/fa'
import AppShell from '../components/layout/AppShell'
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts'
import { QUIZ_QUESTIONS } from '../utils/constants'

export default function ResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { answers = {}, questions = QUIZ_QUESTIONS } = location.state || {}

  const correct = questions.filter((q, i) => answers[i] === q.correct).length
  const total = questions.length
  const pct = Math.round((correct / total) * 100)
  const passed = pct >= 50

  const radialData = [{ name: 'Score', value: pct, fill: passed ? '#6BCB77' : '#FF6B6B' }]

  const weakTopics = ['Quadratic Equations', 'Logarithms']
  const strongTopics = ['Linear Equations', 'Geometry basics']

  return (
    <AppShell>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Hero result card */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}
          className="glass rounded-3xl p-8 relative overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${passed ? 'from-[#6BCB77]/10 to-transparent' : 'from-[#FF6B6B]/8 to-transparent'} pointer-events-none`} />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            {/* Radial score */}
            <div className="relative flex-shrink-0">
              <ResponsiveContainer width={160} height={160}>
                <RadialBarChart cx={80} cy={80} innerRadius={55} outerRadius={75} startAngle={90} endAngle={-270} data={radialData}>
                  <RadialBar dataKey="value" background={{ fill: '#2D4059', opacity: 0.06 }} cornerRadius={10} />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <p className="text-3xl font-700 text-[#2D4059]">{pct}%</p>
                <p className="text-xs text-[#2D4059]/50">{correct}/{total}</p>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                <h1 className="text-2xl font-700 text-[#2D4059]">
                  {passed ? 'Great job!' : 'Keep pushing!'}
                </h1>
                {passed
                  ? <span className="bg-[#6BCB77] text-white text-xs font-700 px-3 py-1 rounded-full">PASSED</span>
                  : <span className="bg-[#FF6B6B] text-white text-xs font-700 px-3 py-1 rounded-full">TRY AGAIN</span>}
              </div>
              <p className="text-sm text-[#2D4059]/60 font-400 mb-5">
                {passed
                  ? `You scored ${correct} out of ${total} — you're on the right track. Review your mistakes to reach 100%.`
                  : `You scored ${correct} out of ${total}. Study the topics below and retry — you'll improve fast.`}
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => navigate('/quiz')}
                  className="btn-gradient text-white font-600 text-sm px-5 py-2.5 rounded-2xl flex items-center gap-2 shadow-md">
                  <FaRedo size={13} /> Retry Quiz
                </motion.button>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => navigate('/ai-recommendations')}
                  className="bg-[#2D4059] text-white font-600 text-sm px-5 py-2.5 rounded-2xl flex items-center gap-2">
                  <FaLightbulb size={13} /> AI Recommendations <FaArrowRight size={12} />
                </motion.button>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center gap-3">
              <FaTrophy size={48} className={passed ? 'text-[#FFD93D]' : 'text-[#2D4059]/15'} />
              <p className="text-xs text-[#2D4059]/40 font-500">{passed ? 'Achievement!' : 'Next time'}</p>
            </div>
          </div>
        </motion.div>

        {/* Strengths & weaknesses */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaCheckCircle className="text-[#6BCB77]" size={16} />
              <h3 className="font-700 text-[#2D4059] text-sm">Strengths</h3>
            </div>
            <div className="space-y-2">
              {strongTopics.map(t => (
                <div key={t} className="flex items-center gap-3 p-3 rounded-xl bg-[#6BCB77]/10">
                  <div className="w-2 h-2 rounded-full bg-[#6BCB77]" />
                  <span className="text-sm text-[#2D4059] font-500">{t}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }}
            className="glass rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <FaTimesCircle className="text-[#FF6B6B]" size={16} />
              <h3 className="font-700 text-[#2D4059] text-sm">Needs Work</h3>
            </div>
            <div className="space-y-2">
              {weakTopics.map(t => (
                <div key={t} className="flex items-center gap-3 p-3 rounded-xl bg-[#FF6B6B]/10">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B6B]" />
                  <span className="text-sm text-[#2D4059] font-500">{t}</span>
                  <button onClick={() => navigate('/topic/algebra')}
                    className="ml-auto text-xs text-[#FF6B6B] font-600 hover:underline">Study</button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Question review */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="glass rounded-3xl p-6">
          <div className="flex items-center gap-2 mb-5">
            <FaChartBar className="text-[#FF6B6B]" size={15} />
            <h3 className="font-700 text-[#2D4059] text-base">Answer Review</h3>
          </div>
          <div className="space-y-4">
            {questions.slice(0, 5).map((q, i) => {
              const userAns = answers[i]
              const isCorrect = userAns === q.correct
              return (
                <div key={q.id} className={`rounded-2xl p-4 border-l-4 ${isCorrect ? 'border-[#6BCB77] bg-[#6BCB77]/6' : 'border-[#FF6B6B] bg-[#FF6B6B]/6'}`}>
                  <p className="text-sm font-600 text-[#2D4059] mb-2">Q{i + 1}. {q.question}</p>
                  {!isCorrect && userAns !== undefined && (
                    <p className="text-xs text-[#FF6B6B] font-500 mb-1">
                      Your answer: {q.options[userAns]}
                    </p>
                  )}
                  {!isCorrect && (
                    <p className="text-xs text-[#6BCB77] font-600 mb-2">
                      Correct: {q.options[q.correct]}
                    </p>
                  )}
                  <p className="text-xs text-[#2D4059]/60 font-400 leading-relaxed">{q.explanation}</p>
                </div>
              )
            })}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="text-center">
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/ai-recommendations')}
            className="btn-gradient text-white font-600 px-8 py-3.5 rounded-full shadow-xl flex items-center gap-2 mx-auto">
            Next Recommended Lesson <FaArrowRight size={14} />
          </motion.button>
        </motion.div>
      </div>
    </AppShell>
  )
}
