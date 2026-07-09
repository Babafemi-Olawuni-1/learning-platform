import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaClock, FaFlag, FaArrowLeft, FaArrowRight, FaCheckCircle, FaPaperPlane } from 'react-icons/fa'
import AppShell from '../components/layout/AppShell'
import { QUIZ_QUESTIONS } from '../utils/constants'

const TOTAL_TIME = 30 * 60 // 30 minutes in seconds

export default function QuizPage() {
  const navigate = useNavigate()
  const questions = QUIZ_QUESTIONS
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState({})
  const [flagged, setFlagged] = useState(new Set())
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (submitted) return
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) { clearInterval(timer); handleSubmit(); return 0 }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [submitted])

  const fmt = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  const handleSelect = (optIdx) => {
    if (submitted) return
    setAnswers(a => ({ ...a, [current]: optIdx }))
  }

  const toggleFlag = () => {
    setFlagged(f => {
      const n = new Set(f)
      n.has(current) ? n.delete(current) : n.add(current)
      return n
    })
  }

  const handleSubmit = useCallback(() => {
    setSubmitted(true)
    setTimeout(() => navigate('/result', { state: { answers, questions } }), 400)
  }, [answers, questions, navigate])

  const q = questions[current]
  const answered = Object.keys(answers).length
  const pct = Math.round((answered / questions.length) * 100)
  const urgent = timeLeft < 300

  const getCircleStatus = (i) => {
    if (flagged.has(i)) return 'flagged'
    if (answers[i] !== undefined) return 'answered'
    if (i === current) return 'current'
    return 'unanswered'
  }

  return (
    <AppShell>
      <div className="p-4 md:p-6 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
          className="glass rounded-2xl px-5 py-3 mb-5 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3 text-sm">
            <span className="font-700 text-[#2D4059]">Mathematics</span>
            <span className="text-[#2D4059]/30">•</span>
            <span className="text-[#2D4059]/60 font-400">Algebra</span>
            <span className="text-[#2D4059]/30">•</span>
            <span className="font-600 text-[#FF6B6B]">Q {current + 1} of {questions.length}</span>
          </div>
          <div className={`flex items-center gap-2 font-700 text-lg ${urgent ? 'text-red-500' : 'text-[#2D4059]'}`}>
            <FaClock size={16} className={urgent ? 'text-red-500' : 'text-[#2D4059]/50'} />
            {fmt(timeLeft)}
          </div>
        </motion.div>

        {/* Progress bar */}
        <div className="w-full h-2 bg-[#2D4059]/8 rounded-full mb-5">
          <motion.div animate={{ width: `${pct}%` }} transition={{ duration: 0.4 }}
            className="h-2 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-5">
          {/* Question card */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div key={current}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="glass rounded-3xl p-7">
                <div className="flex items-start justify-between mb-6">
                  <span className="text-xs font-700 text-[#FF6B6B] bg-[#FF6B6B]/12 px-3 py-1.5 rounded-full">
                    Question {current + 1}
                  </span>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                    onClick={toggleFlag}
                    className={`flex items-center gap-1.5 text-xs font-600 px-3 py-1.5 rounded-full transition-all ${flagged.has(current) ? 'bg-[#FFD93D]/20 text-[#B89A00]' : 'bg-[#2D4059]/8 text-[#2D4059]/50 hover:bg-[#FFD93D]/15'}`}>
                    <FaFlag size={11} />
                    {flagged.has(current) ? 'Flagged' : 'Flag'}
                  </motion.button>
                </div>

                <p className="text-base font-600 text-[#2D4059] leading-relaxed mb-7">{q.question}</p>

                <div className="space-y-3">
                  {q.options.map((opt, i) => {
                    const selected = answers[current] === i
                    return (
                      <motion.button key={i} onClick={() => handleSelect(i)}
                        whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                        className={`w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all duration-200 border-2 ${
                          selected
                            ? 'border-[#FF6B6B] bg-[#FF6B6B]/10 text-[#2D4059]'
                            : 'border-transparent bg-[#2D4059]/5 text-[#2D4059] hover:border-[#2D4059]/20 hover:bg-[#2D4059]/8'
                        }`}>
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-700 flex-shrink-0 transition-all ${selected ? 'bg-[#FF6B6B] text-white' : 'bg-[#2D4059]/12 text-[#2D4059]'}`}>
                          {['A','B','C','D'][i]}
                        </span>
                        <span className="text-sm font-400 flex-1">{opt}</span>
                        {selected && <FaCheckCircle className="text-[#FF6B6B] flex-shrink-0" size={16} />}
                      </motion.button>
                    )
                  })}
                </div>

                {/* Nav buttons */}
                <div className="flex items-center justify-between mt-7">
                  <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                    disabled={current === 0}
                    onClick={() => setCurrent(c => c - 1)}
                    className="flex items-center gap-2 text-sm font-600 text-[#2D4059]/60 px-4 py-2.5 rounded-xl hover:bg-[#2D4059]/8 transition-all disabled:opacity-30 disabled:cursor-not-allowed">
                    <FaArrowLeft size={13} /> Previous
                  </motion.button>
                  {current < questions.length - 1 ? (
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      onClick={() => setCurrent(c => c + 1)}
                      className="btn-gradient text-white text-sm font-600 px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-md">
                      Next <FaArrowRight size={13} />
                    </motion.button>
                  ) : (
                    <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                      onClick={handleSubmit}
                      className="bg-[#2D4059] text-white text-sm font-600 px-5 py-2.5 rounded-xl flex items-center gap-2">
                      <FaPaperPlane size={13} /> Submit Test
                    </motion.button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigator panel */}
          <div className="flex flex-col gap-4">
            <div className="glass rounded-2xl p-5">
              <p className="text-xs font-700 text-[#2D4059]/60 uppercase tracking-widest mb-4">Question Navigator</p>
              <div className="grid grid-cols-5 gap-2 mb-5">
                {questions.map((_, i) => {
                  const st = getCircleStatus(i)
                  return (
                    <motion.button key={i} onClick={() => setCurrent(i)}
                      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                      className={`w-10 h-10 rounded-xl text-xs font-700 transition-all ${
                        st === 'current' ? 'bg-[#FF6B6B] text-white shadow-md' :
                        st === 'answered' ? 'bg-[#6BCB77]/20 text-[#2D9442] border border-[#6BCB77]/40' :
                        st === 'flagged' ? 'bg-[#FFD93D]/25 text-[#B89A00] border border-[#FFD93D]/50' :
                        'bg-[#2D4059]/8 text-[#2D4059]/50 hover:bg-[#2D4059]/15'
                      }`}>
                      {i + 1}
                    </motion.button>
                  )
                })}
              </div>
              <div className="space-y-2">
                {[['bg-[#6BCB77]/20 border border-[#6BCB77]/40', 'Answered'], ['bg-[#FFD93D]/25 border border-[#FFD93D]/50', 'Flagged'], ['bg-[#FF6B6B]', 'Current'], ['bg-[#2D4059]/8', 'Not visited']].map(([cls, lbl]) => (
                  <div key={lbl} className="flex items-center gap-2 text-xs text-[#2D4059]/55">
                    <div className={`w-5 h-5 rounded-md ${cls}`} />
                    {lbl}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5 text-center">
              <p className="text-2xl font-700 text-[#2D4059]">{answered}/{questions.length}</p>
              <p className="text-xs text-[#2D4059]/45 mb-4">Questions answered</p>
              <div className="w-full h-2 bg-[#2D4059]/8 rounded-full mb-4">
                <motion.div animate={{ width: `${pct}%` }} className="h-2 rounded-full bg-[#6BCB77]" />
              </div>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={handleSubmit}
                className="w-full bg-[#2D4059] text-white text-sm font-600 py-3 rounded-2xl flex items-center justify-center gap-2">
                <FaPaperPlane size={13} /> Submit Test
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
