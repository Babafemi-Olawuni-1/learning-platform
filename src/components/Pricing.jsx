import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaCheckCircle, FaInfinity, FaChartBar, FaChalkboardTeacher, FaVideo, FaArrowRight, FaBolt } from 'react-icons/fa'

const planFeatures = [
  { icon: FaInfinity, text: 'Unlimited quizzes across all subjects' },
  { icon: FaChartBar, text: 'Advanced performance analytics & insights' },
  { icon: FaChalkboardTeacher, text: 'Live tutor session access' },
  { icon: FaVideo, text: 'Recorded lessons — study anytime' },
  { icon: FaCheckCircle, text: 'Cambridge, JAMB, WAEC & more' },
  { icon: FaBolt, text: 'Priority question & answer support' },
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const cardRef = useRef(null)
  const cardInView = useInView(cardRef, { once: true, margin: '-60px' })

  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob absolute w-[400px] h-[400px] bg-[#FF6B6B]/15 -right-32 top-0" style={{ animationDelay: '2s' }} />
        <div className="blob absolute w-[300px] h-[300px] bg-[#6BCB77]/12 left-0 bottom-0" style={{ animationDelay: '4s' }} />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div ref={ref} className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block bg-[#FF6B6B]/12 text-[#FF6B6B] text-xs font-600 px-4 py-2 rounded-full mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl lg:text-5xl font-700 text-[#2D4059] mb-4"
          >
            Unlock everything for{' '}
            <span className="gradient-text">less than a textbook</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-[#2D4059]/60 text-lg font-400 max-w-md mx-auto"
          >
            Start free, upgrade when you're ready. No hidden fees.
          </motion.p>
        </div>

        {/* Pricing card */}
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="glass rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="grid md:grid-cols-2">
            {/* Left: pricing info */}
            <div className="p-10 relative overflow-hidden">
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2D4059] to-[#1a2d45]" />
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#FF6B6B]/20 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-[#6BCB77]/15 blur-2xl" />

              <div className="relative z-10">
                {/* Badge */}
                <span className="inline-flex items-center gap-1.5 bg-[#FFD93D]/20 text-[#FFD93D] text-xs font-600 px-3 py-1.5 rounded-full mb-6">
                  <FaBolt size={11} />
                  Most popular
                </span>

                <h3 className="text-2xl font-700 text-white mb-2">Unlimited Access</h3>
                <p className="text-white/60 text-sm font-400 mb-8">Everything you need, all in one plan.</p>

                {/* Price */}
                <div className="mb-3">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-6xl font-700 text-white leading-none">$9.99</span>
                    <span className="text-white/60 font-400 mb-2">/month</span>
                  </div>
                  <p className="text-white/50 text-xs font-400">or ₦3,500/mo · cancel anytime</p>
                </div>

                <motion.a
                  href="#signup"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-8 block text-center btn-gradient text-white font-600 py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2"
                >
                  Subscribe now
                  <FaArrowRight size={14} />
                </motion.a>

                <p className="text-white/40 text-xs text-center mt-4 font-400">
                  First 20 Qs per subject always free — no card required
                </p>
              </div>
            </div>

            {/* Right: features list */}
            <div className="p-10 flex flex-col justify-center">
              <p className="text-sm font-600 text-[#2D4059]/50 uppercase tracking-widest mb-6">
                Everything included
              </p>
              <ul className="space-y-4">
                {planFeatures.map((f) => {
                  const Icon = f.icon
                  return (
                    <li key={f.text} className="flex items-start gap-3">
                      <span className="w-8 h-8 rounded-xl bg-[#6BCB77]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={14} className="text-[#6BCB77]" />
                      </span>
                      <span className="text-[#2D4059]/80 text-sm font-400 leading-relaxed">{f.text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
