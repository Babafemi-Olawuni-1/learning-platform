import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqs = [
  {
    q: 'Is Learn Booster really free to start?',
    a: 'Yes — completely. You get 20 free questions per subject with no credit card required. That\'s real practice questions, auto-graded instantly, with AI explanations. When you\'re ready to go unlimited, our subscription is just $9.99/month.',
  },
  {
    q: 'Which exams does Learn Booster cover?',
    a: 'We currently cover WAEC, JAMB (UTME), NECO, IGCSE, and Cambridge A-Level. Our question bank is built from past papers and curated by experienced teachers, ensuring every question is exam-relevant.',
  },
  {
    q: 'How does the AI adaptive quizzing work?',
    a: 'After each quiz, our AI engine analyzes which topics you got right, partially right, or wrong. It then tailors your next question set to focus more on weak areas while maintaining your strengths — so you\'re always learning at exactly the right level.',
  },
  {
    q: 'Can I book a tutor session without a subscription?',
    a: 'Yes! Tutor sessions are available to all users including free plan users. You pay per session directly. Premium subscribers get priority booking and discounted session rates.',
  },
  {
    q: 'What happens when I finish my 20 free questions?',
    a: 'You\'ll see a clear upgrade prompt with your performance summary. Your progress and data are never lost. You can subscribe instantly for $9.99/month or ₦3,500/month to unlock unlimited questions, AI reports, and all premium features.',
  },
]

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="glass rounded-2xl overflow-hidden">
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group">
        <span className="font-600 text-[#2D4059] text-sm pr-4 leading-relaxed">{faq.q}</span>
        <span className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open ? 'bg-[#FF6B6B] text-white' : 'bg-[#2D4059]/8 text-[#2D4059]/50 group-hover:bg-[#FF6B6B]/15 group-hover:text-[#FF6B6B]'}`}>
          {open ? <FaMinus size={11} /> : <FaPlus size={11} />}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
            <p className="px-6 pb-5 text-sm text-[#2D4059]/65 font-400 leading-relaxed border-t border-[#2D4059]/8 pt-4">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-24">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref} className="text-center mb-12">
          <motion.span initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            className="inline-block bg-[#6BCB77]/15 text-[#2D9442] text-xs font-600 px-4 py-2 rounded-full mb-4">
            Got questions?
          </motion.span>
          <motion.h2 initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 }}
            className="text-4xl font-700 text-[#2D4059] mb-4">
            Frequently asked <span className="gradient-text-coral">questions</span>
          </motion.h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => <FAQItem key={i} faq={faq} index={i} />)}
        </div>
      </div>
    </section>
  )
}
