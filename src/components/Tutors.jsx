import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaStar, FaVideo, FaUserGraduate, FaArrowRight } from 'react-icons/fa'

const tutors = [
  {
    initials: 'AO',
    name: 'Adaeze Okonkwo',
    subject: 'Cambridge Mathematics',
    rating: 4.9,
    reviews: 128,
    sessions: '320+ sessions',
    accent: '#FF6B6B',
    tags: ['A-Level', 'Pure Maths', 'Statistics'],
    available: true,
    delay: 0,
  },
  {
    initials: 'EB',
    name: 'Emeka Balogun',
    subject: 'JAMB Physics',
    rating: 4.8,
    reviews: 94,
    sessions: '210+ sessions',
    accent: '#6BCB77',
    tags: ['UTME', 'Mechanics', 'Waves'],
    available: true,
    delay: 0.12,
  },
  {
    initials: 'FK',
    name: 'Fatima Kwankwaso',
    subject: 'Cambridge English',
    rating: 4.95,
    reviews: 176,
    sessions: '450+ sessions',
    accent: '#FFD93D',
    tags: ['IELTS', 'Essay Writing', 'Comprehension'],
    available: false,
    delay: 0.24,
  },
]

function TutorCard({ tutor }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: tutor.delay, duration: 0.6, ease: 'easeOut' }}
      className="card-hover glass rounded-3xl p-7 relative overflow-hidden group"
    >
      {/* Available badge */}
      <div className={`absolute top-5 right-5 flex items-center gap-1.5 text-xs font-600 px-2.5 py-1 rounded-full ${
        tutor.available
          ? 'bg-[#6BCB77]/15 text-[#2D9442]'
          : 'bg-[#2D4059]/10 text-[#2D4059]/50'
      }`}>
        {tutor.available && <span className="w-1.5 h-1.5 rounded-full bg-[#6BCB77] live-dot" />}
        {tutor.available ? 'Available' : 'Booked'}
      </div>

      {/* Avatar */}
      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-xl font-700 shadow-lg flex-shrink-0"
          style={{ backgroundColor: tutor.accent }}
        >
          {tutor.initials}
        </div>
        <div>
          <h3 className="font-700 text-[#2D4059] text-base">{tutor.name}</h3>
          <p className="text-sm text-[#2D4059]/60 font-400">{tutor.subject}</p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} size={11} className={i < Math.floor(tutor.rating) ? 'star-filled' : 'text-[#2D4059]/20'} />
            ))}
            <span className="text-xs text-[#2D4059]/60 ml-1">{tutor.rating} ({tutor.reviews})</span>
          </div>
        </div>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {tutor.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-500 px-3 py-1 rounded-full"
            style={{ backgroundColor: `${tutor.accent}18`, color: tutor.accent === '#FFD93D' ? '#8A7000' : tutor.accent }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Sessions count */}
      <div className="flex items-center gap-2 text-xs text-[#2D4059]/55 mb-5">
        <FaUserGraduate size={12} />
        <span>{tutor.sessions} completed</span>
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        disabled={!tutor.available}
        className={`w-full py-3 rounded-2xl text-sm font-600 flex items-center justify-center gap-2 transition-all duration-200 ${
          tutor.available
            ? 'btn-gradient text-white shadow-md'
            : 'bg-[#2D4059]/10 text-[#2D4059]/40 cursor-not-allowed'
        }`}
      >
        {tutor.available ? (
          <>Join session <FaArrowRight size={12} /></>
        ) : (
          'Session full'
        )}
      </motion.button>
    </motion.div>
  )
}

export default function Tutors() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="tutors" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="inline-block bg-[#FF6B6B]/12 text-[#FF6B6B] text-xs font-600 px-4 py-2 rounded-full mb-4"
            >
              Expert tutors
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-700 text-[#2D4059]"
            >
              Meet your{' '}
              <span className="gradient-text">perfect tutor</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-2 glass rounded-2xl px-5 py-3 text-sm text-[#2D4059]/70"
          >
            <FaVideo size={14} className="text-[#FF6B6B]" />
            <span className="font-500">Recorded sessions available</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutors.map((tutor) => (
            <TutorCard key={tutor.name} tutor={tutor} />
          ))}
        </div>

        {/* View all tutors link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-10"
        >
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 text-[#FF6B6B] font-600 text-sm hover:gap-3 transition-all duration-200"
          >
            Browse all tutors <FaArrowRight size={12} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
