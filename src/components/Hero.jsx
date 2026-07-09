import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaCloudSun, FaClock, FaArrowRight, FaPlayCircle,
  FaCheckCircle, FaStar, FaChartLine, FaBolt
} from 'react-icons/fa'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.65, ease: 'easeOut' } })
}

function QuizMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }} animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
      className="glass rounded-3xl p-6 shadow-2xl w-full max-w-sm mx-auto"
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-600 text-[#2D4059]">Cambridge Maths · Q 7/20</span>
        <span className="text-xs font-500 text-[#FF6B6B]">65% done</span>
      </div>
      <div className="w-full h-2 bg-[#2D4059]/10 rounded-full mb-5">
        <div className="h-2 bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] rounded-full" style={{ width: '65%' }} />
      </div>
      <p className="text-sm font-600 text-[#2D4059] mb-4 leading-relaxed">Solve for x: 3x² + 5x - 2 = 0</p>
      {[
        { label: 'A', text: 'x = ⅓ or x = -2', correct: true },
        { label: 'B', text: 'x = -⅓ or x = 2', correct: false },
        { label: 'C', text: 'x = ½ or x = -2', correct: false },
      ].map((opt) => (
        <div key={opt.label} className={`flex items-center gap-3 p-3 rounded-xl mb-2 text-sm font-500 cursor-pointer transition-all duration-200 ${opt.correct ? 'bg-[#6BCB77]/20 border-2 border-[#6BCB77] text-[#2D9442]' : 'bg-[#2D4059]/5 border-2 border-transparent text-[#2D4059] hover:border-[#FF6B6B]/40'}`}>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-700 ${opt.correct ? 'bg-[#6BCB77] text-white' : 'bg-[#2D4059]/10 text-[#2D4059]'}`}>{opt.label}</span>
          {opt.text}
          {opt.correct && <FaCheckCircle className="ml-auto text-[#6BCB77]" size={14} />}
        </div>
      ))}
      <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#2D4059]/10">
        <div className="flex items-center gap-1.5 text-xs text-[#2D4059]/60"><FaChartLine size={12} /><span>Accuracy: 82%</span></div>
        <div className="flex items-center gap-1.5 text-xs text-[#FF6B6B] font-600"><FaBolt size={11} /><span>Streak x3</span></div>
      </div>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute w-[500px] h-[500px] bg-[#FF6B6B]/20 -top-32 -left-32" style={{ animationDelay: '0s' }} />
        <div className="blob absolute w-[400px] h-[400px] bg-[#FFD93D]/25 top-40 right-0" style={{ animationDelay: '3s' }} />
        <div className="blob absolute w-[350px] h-[350px] bg-[#6BCB77]/20 bottom-0 left-1/3" style={{ animationDelay: '6s' }} />
      </div>
      <div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
            className="inline-flex items-center gap-2 bg-[#FF6B6B]/10 border border-[#FF6B6B]/30 text-[#FF6B6B] text-xs font-600 px-4 py-2 rounded-full mb-6">
            <FaStar size={11} /> 20 free questions per subject — no card needed
          </motion.div>
          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-5xl lg:text-6xl font-700 text-[#2D4059] leading-tight mb-5">
            Learn smart,{' '}<span className="gradient-text">level up faster</span>
          </motion.h1>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-[#2D4059]/70 text-lg font-400 leading-relaxed mb-8 max-w-lg">
            Adaptive quizzes · auto-graded · track your progress. Cambridge &amp; JAMB prep, built for you.
          </motion.p>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className="flex flex-wrap gap-4 mb-10">
            <Link to="/register">
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="btn-gradient text-white font-600 px-7 py-3.5 rounded-full shadow-lg flex items-center gap-2 cursor-pointer">
                Get Started <FaArrowRight size={14} />
              </motion.span>
            </Link>
            <a href="#how-it-works">
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
                className="btn-outline text-[#2D4059] font-600 px-7 py-3.5 rounded-full flex items-center gap-2 cursor-pointer">
                <FaPlayCircle size={16} /> How it works
              </motion.span>
            </a>
          </motion.div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className="flex items-center gap-4 flex-wrap">
            <div className="flex -space-x-2">
              {['#FF6B6B','#6BCB77','#FFD93D','#2D4059'].map((c, i) => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-700" style={{ backgroundColor: c }}>
                  {['A','K','T','M'][i]}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 mb-0.5">{[...Array(5)].map((_,i)=><FaStar key={i} size={12} className="star-filled"/>)}</div>
              <p className="text-xs text-[#2D4059]/60 font-400">Loved by <span className="font-600 text-[#2D4059]">12,000+</span> students</p>
            </div>
          </motion.div>
        </div>
        <div className="relative flex justify-center">
          <QuizMockup />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.6 }}
            className="float-y absolute -bottom-4 -left-4 md:-left-10 glass rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3 text-xs">
            <FaCloudSun size={22} className="text-[#FFD93D]" />
            <div>
              <p className="font-600 text-[#2D4059]">76°F · Mostly cloudy</p>
              <div className="flex items-center gap-1 text-[#2D4059]/60 mt-0.5"><FaClock size={10} /><span>7:55 AM · 6/30/2026</span></div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1.2, duration: 0.5 }}
            className="float-x absolute -top-4 -right-2 md:-right-6 glass rounded-2xl px-4 py-3 shadow-xl">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#6BCB77]/20 flex items-center justify-center"><FaChartLine size={14} className="text-[#6BCB77]" /></div>
              <div><p className="text-xs font-700 text-[#2D4059]">Score improved</p><p className="text-lg font-700 text-[#6BCB77]">+24%</p></div>
            </div>
          </motion.div>
          <div className="absolute w-16 h-16 rounded-full border-4 border-[#FFD93D]/40 top-16 -left-8 float-y" style={{ animationDelay: '1s' }} />
          <div className="absolute w-8 h-8 rounded-full bg-[#FF6B6B]/25 bottom-16 -right-4 float-x" style={{ animationDelay: '2s' }} />
          <div className="absolute w-12 h-12 rounded-xl rotate-12 bg-[#6BCB77]/20 top-2 right-16 float-y" style={{ animationDelay: '0.5s' }} />
        </div>
      </div>
    </section>
  )
}
