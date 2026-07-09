import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Chisom Okafor',
    exam: 'JAMB 2025',
    score: '312 / 400',
    avatar: 'CO',
    color: '#FF6B6B',
    text: 'Learn Booster completely changed how I study. The adaptive quizzes found my weak spots in Physics — things I didn\'t even know I was struggling with. I went from 240 to 312 in 6 weeks.',
    rating: 5,
    delay: 0,
  },
  {
    name: 'Tunde Adeyemi',
    exam: 'Cambridge A-Level',
    score: 'A* Mathematics',
    avatar: 'TA',
    color: '#6BCB77',
    text: 'The tutor sessions are genuinely world-class. My tutor Adaeze walked me through every topic systematically. The recorded sessions meant I could revisit lessons at 2am before exams.',
    rating: 5,
    delay: 0.12,
  },
  {
    name: 'Amaka Nwosu',
    exam: 'WAEC 2025',
    score: '7 A1s',
    avatar: 'AN',
    color: '#FFD93D',
    text: 'I started with the free 20 questions and was hooked immediately. The instant grading and AI explanations saved me so much time. The subscription is honestly worth every naira.',
    rating: 5,
    delay: 0.24,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D4059]/3 to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="text-center mb-16">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block bg-[#FFD93D]/20 text-[#B89A00] text-xs font-600 px-4 py-2 rounded-full mb-4">
            Student stories
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-700 text-[#2D4059] mb-4">
            Real results from <span className="gradient-text">real students</span>
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
            className="text-[#2D4059]/60 text-lg max-w-lg mx-auto font-400">
            12,000+ students have used Learn Booster to hit their target scores.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => {
            const tRef = useRef(null)
            const tInView = useInView(tRef, { once: true, margin: '-60px' })
            return (
              <motion.div key={t.name} ref={tRef}
                initial={{ opacity: 0, y: 50 }} animate={tInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: t.delay, duration: 0.6, ease: 'easeOut' }}
                className="card-hover glass rounded-3xl p-7 relative overflow-hidden">
                <FaQuoteLeft className="text-[#2D4059]/8 absolute top-5 right-5" size={36} />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-700 shadow-md flex-shrink-0"
                    style={{ backgroundColor: t.color }}>{t.avatar}</div>
                  <div>
                    <p className="font-700 text-[#2D4059] text-sm">{t.name}</p>
                    <p className="text-xs text-[#2D4059]/55">{t.exam}</p>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-xs font-700 text-[#2D4059]">{t.score}</p>
                    <div className="flex gap-0.5 mt-0.5">
                      {[...Array(t.rating)].map((_, i) => <FaStar key={i} size={10} className="star-filled" />)}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-[#2D4059]/70 font-400 leading-relaxed italic">"{t.text}"</p>
                <div className="absolute bottom-0 left-0 h-1 w-full rounded-b-3xl" style={{ background: `linear-gradient(90deg, ${t.color}60, transparent)` }} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
