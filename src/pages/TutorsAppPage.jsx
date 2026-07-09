import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaSearch, FaStar, FaFilter, FaTimes, FaVideo,
  FaCalendarAlt, FaArrowRight, FaUserGraduate, FaClock
} from 'react-icons/fa'
import AppShell from '../components/layout/AppShell'

const tutors = [
  { id: 1, initials: 'AO', name: 'Adaeze Okonkwo', subject: 'Cambridge Mathematics', rating: 4.9, reviews: 128, sessions: 320, rate: '$18/hr', available: true, accent: '#FF6B6B', tags: ['A-Level', 'Pure Maths', 'Statistics'], bio: 'Former WAEC examiner with 8 years tutoring experience.' },
  { id: 2, initials: 'EB', name: 'Emeka Balogun', subject: 'JAMB Physics', rating: 4.8, reviews: 94, sessions: 210, rate: '$15/hr', available: true, accent: '#6BCB77', tags: ['UTME', 'Mechanics', 'Waves'], bio: 'MSc Physics graduate with proven results in JAMB prep.' },
  { id: 3, initials: 'FK', name: 'Fatima Kwankwaso', subject: 'Cambridge English', rating: 4.95, reviews: 176, sessions: 450, rate: '$20/hr', available: false, accent: '#FFD93D', tags: ['IELTS', 'Essay Writing', 'Comprehension'], bio: 'IELTS band 9 scorer. Expert in English literature and composition.' },
  { id: 4, initials: 'TI', name: 'Tunde Ige', subject: 'WAEC Chemistry', rating: 4.7, reviews: 63, sessions: 145, rate: '$14/hr', available: true, accent: '#2D4059', tags: ['Organic Chemistry', 'WAEC', 'NECO'], bio: 'BSc Chemistry with distinction. Specializes in exam technique.' },
  { id: 5, initials: 'NC', name: 'Ngozi Chukwu', subject: 'JAMB Mathematics', rating: 4.85, reviews: 112, sessions: 280, rate: '$16/hr', available: true, accent: '#FF9A3C', tags: ['UTME', 'Algebra', 'Calculus'], bio: 'Top-scoring JAMB Mathematics tutor with 95% student pass rate.' },
  { id: 6, initials: 'SO', name: 'Sola Omotayo', subject: 'IGCSE Biology', rating: 4.75, reviews: 88, sessions: 190, rate: '$17/hr', available: false, accent: '#6BCB77', tags: ['IGCSE', 'Genetics', 'Ecology'], bio: 'Cambridge-certified Biology teacher. Expert in IGCSE past papers.' },
]

function BookingModal({ tutor, onClose, onConfirm }) {
  const [date, setDate] = useState('')
  const [duration, setDuration] = useState('60')
  const [note, setNote] = useState('')

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={e => e.target === e.currentTarget && onClose()}>
      <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
        className="glass rounded-3xl p-7 w-full max-w-md shadow-2xl" style={{ backgroundColor: '#FDF8F0' }}>
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-700 text-[#2D4059] text-lg">Book a Session</h3>
          <button onClick={onClose} className="w-9 h-9 rounded-xl bg-[#2D4059]/8 flex items-center justify-center hover:bg-[#FF6B6B]/12 transition-all">
            <FaTimes size={14} className="text-[#2D4059]/60" />
          </button>
        </div>

        <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#2D4059]/4 mb-6">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-700" style={{ backgroundColor: tutor.accent }}>{tutor.initials}</div>
          <div>
            <p className="font-700 text-[#2D4059] text-sm">{tutor.name}</p>
            <p className="text-xs text-[#2D4059]/55">{tutor.subject} · {tutor.rate}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="text-xs font-600 text-[#2D4059] block mb-1.5">Select Date <span className="text-[#FF6B6B]">*</span></label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)}
              className="w-full bg-white/70 border border-[#2D4059]/15 rounded-xl px-4 py-3 text-sm text-[#2D4059] outline-none focus:border-[#FF6B6B] transition-colors" />
          </div>
          <div>
            <label className="text-xs font-600 text-[#2D4059] block mb-1.5">Session Duration</label>
            <div className="flex gap-2">
              {['30', '60', '90'].map(d => (
                <button key={d} onClick={() => setDuration(d)}
                  className={`flex-1 py-2.5 rounded-xl text-sm font-600 border-2 transition-all ${duration === d ? 'border-[#FF6B6B] bg-[#FF6B6B]/10 text-[#FF6B6B]' : 'border-[#2D4059]/15 text-[#2D4059]/60 hover:border-[#2D4059]/30'}`}>
                  {d} min
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="text-xs font-600 text-[#2D4059] block mb-1.5">Notes for Tutor</label>
            <textarea value={note} onChange={e => setNote(e.target.value)} rows={3}
              placeholder="Topics you need help with, exam date, etc."
              className="w-full bg-white/70 border border-[#2D4059]/15 rounded-xl px-4 py-3 text-sm text-[#2D4059] placeholder-[#2D4059]/30 outline-none focus:border-[#FF6B6B] transition-colors resize-none" />
          </div>
        </div>

        <div className="flex items-center justify-between mt-2 pt-4 border-t border-[#2D4059]/8">
          <p className="text-sm text-[#2D4059]/55">
            Total: <span className="font-700 text-[#2D4059]">${(parseInt(duration) / 60 * 18).toFixed(2)}</span>
          </p>
          <div className="flex gap-2">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} onClick={onClose}
              className="px-4 py-2.5 rounded-xl border border-[#2D4059]/20 text-sm font-600 text-[#2D4059]/60">
              Cancel
            </motion.button>
            <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={onConfirm}
              className="btn-gradient text-white text-sm font-600 px-5 py-2.5 rounded-xl flex items-center gap-2">
              Confirm Booking <FaArrowRight size={12} />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TutorsAppPage() {
  const [search, setSearch] = useState('')
  const [booking, setBooking] = useState(null)
  const [booked, setBooked] = useState(null)

  const filtered = tutors.filter(t =>
    t.name.toLowerCase().includes(search.toLowerCase()) ||
    t.subject.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <AppShell>
      <div className="p-6 max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }}
          className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-2xl font-700 text-[#2D4059] mb-1">Find a Tutor</h1>
            <p className="text-sm text-[#2D4059]/55 font-400">Connect with expert teachers. Live and recorded sessions available.</p>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-xl text-xs text-[#2D4059]/60">
            <FaVideo size={12} className="text-[#FF6B6B]" />
            Recorded sessions available
          </div>
        </motion.div>

        {/* Search + filter */}
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1 min-w-[200px] relative">
            <FaSearch size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#2D4059]/35" />
            <input value={search} onChange={e => setSearch(e.target.value)}
              placeholder="Search by name or subject…"
              className="w-full bg-white/70 border border-[#2D4059]/15 rounded-2xl pl-11 pr-4 py-3 text-sm text-[#2D4059] placeholder-[#2D4059]/30 outline-none focus:border-[#FF6B6B] transition-colors" />
          </div>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 glass border border-[#2D4059]/15 text-[#2D4059] font-600 text-sm px-4 py-3 rounded-2xl hover:border-[#2D4059]/30 transition-all">
            <FaFilter size={13} /> Filter
          </motion.button>
        </div>

        {/* Booked success toast */}
        <AnimatePresence>
          {booked && (
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              className="bg-[#6BCB77] text-white rounded-2xl px-5 py-4 flex items-center gap-3">
              <FaCalendarAlt size={16} />
              <p className="text-sm font-600">Session booked with {booked.name}! Check your dashboard for details.</p>
              <button onClick={() => setBooked(null)} className="ml-auto"><FaTimes size={14} /></button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Tutor grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((tutor, i) => (
            <motion.div key={tutor.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              className="card-hover glass rounded-3xl p-6 relative overflow-hidden group">
              {/* Available badge */}
              <div className={`absolute top-5 right-5 flex items-center gap-1.5 text-xs font-600 px-2.5 py-1 rounded-full ${tutor.available ? 'bg-[#6BCB77]/15 text-[#2D9442]' : 'bg-[#2D4059]/10 text-[#2D4059]/40'}`}>
                {tutor.available && <span className="w-1.5 h-1.5 rounded-full bg-[#6BCB77] live-dot" />}
                {tutor.available ? 'Available' : 'Booked'}
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-700 shadow-md flex-shrink-0"
                  style={{ backgroundColor: tutor.accent }}>{tutor.initials}</div>
                <div>
                  <p className="font-700 text-[#2D4059] text-sm">{tutor.name}</p>
                  <p className="text-xs text-[#2D4059]/55">{tutor.subject}</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, si) => <FaStar key={si} size={10} className={si < Math.floor(tutor.rating) ? 'star-filled' : 'text-[#2D4059]/15'} />)}
                    <span className="text-xs text-[#2D4059]/50 ml-1">{tutor.rating} ({tutor.reviews})</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-[#2D4059]/60 font-400 mb-4 leading-relaxed">{tutor.bio}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {tutor.tags.map(tag => (
                  <span key={tag} className="text-xs font-500 px-2.5 py-1 rounded-full"
                    style={{ backgroundColor: `${tutor.accent}18`, color: tutor.accent === '#FFD93D' ? '#8A7000' : tutor.accent }}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 text-xs text-[#2D4059]/45 mb-4">
                <span className="flex items-center gap-1"><FaUserGraduate size={11} /> {tutor.sessions} sessions</span>
                <span className="flex items-center gap-1"><FaClock size={11} /> {tutor.rate}</span>
              </div>

              <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                disabled={!tutor.available}
                onClick={() => setBooking(tutor)}
                className={`w-full py-2.5 rounded-2xl text-sm font-600 flex items-center justify-center gap-2 transition-all ${tutor.available ? 'btn-gradient text-white shadow-md' : 'bg-[#2D4059]/8 text-[#2D4059]/35 cursor-not-allowed'}`}>
                {tutor.available ? <><FaCalendarAlt size={12} /> Book Session</> : 'Not available'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="glass rounded-3xl p-12 text-center">
            <FaSearch size={32} className="text-[#2D4059]/15 mx-auto mb-3" />
            <p className="font-600 text-[#2D4059]">No tutors found</p>
            <p className="text-sm text-[#2D4059]/45">Try a different search term</p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {booking && (
          <BookingModal tutor={booking} onClose={() => setBooking(null)}
            onConfirm={() => { setBooked(booking); setBooking(null) }} />
        )}
      </AnimatePresence>
    </AppShell>
  )
}
