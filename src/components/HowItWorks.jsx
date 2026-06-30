import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPencilAlt, FaArrowRight, FaRocket, FaChartLine, FaStar } from 'react-icons/fa'

const steps = [
  {
    number: '01',
    icon: FaPencilAlt,
    title: 'Take a Quiz',
    desc: 'Pick your subject and exam type. Get 20 free questions — auto-graded the moment you submit. No waiting.',
    color: '#FF6B6B',
    delay: 0,
  },
  {
    number: '02',
    icon: FaChartLine,
    title: 'AI Analyzes Performance',
    desc: 'Our engine reads your results, spots patterns in your weak spots, and builds your next personalized question set.',
    color: '#FFD93D',
    delay: 0.15,
  },
  {
    number: '03',
    icon: FaRocket,
    title: 'Level Up or Subscribe',
    desc: 'Keep going free up to 20 Qs per subject. Unlock unlimited tests, advanced analytics, and live tutor sessions.',
    color: '#6BCB77',
    delay: 0.3,
  },
]

function StepCard({ step, isLast }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const Icon = step.icon

  return (
    <div className="flex flex-col md:flex-row items-start gap-0 md:gap-0 relative">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: step.delay, duration: 0.65, ease: 'easeOut' }}
        className="card-hover glass rounded-3xl p-8 flex-1 relative overflow-hidden group"
      >
        {/* Step number watermark */}
        <span
          className="absolute top-4 right-6 text-7xl font-700 opacity-5 select-none leading-none"
          style={{ color: step.color }}
        >
          {step.number}
        </span>

        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
          style={{ backgroundColor: `${step.color}20` }}
        >
          <Icon size={26} style={{ color: step.color }} />
        </div>

        {/* Step label */}
        <span
          className="text-xs font-700 tracking-widest uppercase mb-2 block"
          style={{ color: step.color }}
        >
          Step {step.number}
        </span>

        <h3 className="text-xl font-700 text-[#2D4059] mb-3">{step.title}</h3>
        <p className="text-[#2D4059]/65 text-sm font-400 leading-relaxed">{step.desc}</p>
      </motion.div>

      {/* Arrow connector */}
      {!isLast && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: step.delay + 0.4, duration: 0.4 }}
          className="hidden lg:flex items-center justify-center w-10 flex-shrink-0 self-center"
        >
          <FaArrowRight size={18} className="text-[#2D4059]/25" />
        </motion.div>
      )}
    </div>
  )
}

export default function HowItWorks() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2D4059]/3 to-[#FFD93D]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block bg-[#FFD93D]/20 text-[#B89A00] text-xs font-600 px-4 py-2 rounded-full mb-4"
          >
            How it works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-700 text-[#2D4059] mb-4"
          >
            Three steps to{' '}
            <span className="gradient-text-coral">smarter scores</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#2D4059]/60 text-lg max-w-lg mx-auto font-400"
          >
            No fluff, no bloat. Just a loop that actually works.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 items-stretch">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
