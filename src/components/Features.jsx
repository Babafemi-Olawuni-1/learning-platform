import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import {
  FaBookOpen, FaChartLine, FaInfinity, FaChalkboardTeacher
} from 'react-icons/fa'

const features = [
  {
    icon: FaBookOpen,
    title: 'Lessons & Tests',
    desc: 'Structured lessons with instant auto-graded quizzes. Track your weak spots and review in detail.',
    color: '#FF6B6B',
    bg: '#FF6B6B',
    delay: 0,
  },
  {
    icon: FaChartLine,
    title: 'Adaptive Quizzing',
    desc: 'Performance-based next questions. You grow, the quiz adapts — pushing you right at your edge.',
    color: '#FFD93D',
    bg: '#FFD93D',
    delay: 0.1,
  },
  {
    icon: FaInfinity,
    title: 'Free + Subscribe',
    desc: 'First 20 questions per subject are completely free. Unlock unlimited tests with a subscription.',
    color: '#6BCB77',
    bg: '#6BCB77',
    delay: 0.2,
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Private Tutors',
    desc: 'Connect with expert teachers, join paid live sessions. We take a small commission — you keep most.',
    color: '#2D4059',
    bg: '#2D4059',
    delay: 0.3,
  },
]

function FeatureCard({ feature }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = feature.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: feature.delay, duration: 0.6, ease: 'easeOut' }}
      className="card-hover glass rounded-3xl p-7 relative overflow-hidden group cursor-default"
    >
      {/* Background accent */}
      <div
        className="absolute -top-8 -right-8 w-28 h-28 rounded-full opacity-10 transition-all duration-500 group-hover:opacity-20 group-hover:scale-125"
        style={{ backgroundColor: feature.bg }}
      />

      {/* Icon */}
      <div
        className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5 shadow-md"
        style={{ backgroundColor: `${feature.bg}20` }}
      >
        <Icon size={24} style={{ color: feature.color }} />
      </div>

      <h3 className="text-lg font-700 text-[#2D4059] mb-3">{feature.title}</h3>
      <p className="text-[#2D4059]/65 text-sm font-400 leading-relaxed">{feature.desc}</p>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-1 w-0 rounded-b-3xl transition-all duration-500 group-hover:w-full"
        style={{ backgroundColor: feature.bg }}
      />
    </motion.div>
  )
}

export default function Features() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div ref={ref} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#6BCB77]/15 text-[#2D9442] text-xs font-600 px-4 py-2 rounded-full mb-4"
          >
            Why Learn Booster?
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-700 text-[#2D4059] mb-4"
          >
            Everything you need to{' '}
            <span className="gradient-text">ace your exam</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#2D4059]/60 text-lg max-w-xl mx-auto font-400"
          >
            Built specifically for Cambridge, JAMB, and more — with tools that actually move the needle.
          </motion.p>
        </div>

        {/* Feature grid — asymmetric: 2 normal + 1 wide + 1 normal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} feature={f} />
          ))}
        </div>
      </div>
    </section>
  )
}
