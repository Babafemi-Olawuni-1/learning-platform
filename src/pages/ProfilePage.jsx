import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaCamera, FaUser, FaEnvelope, FaPhone, FaTrophy,
  FaShieldAlt, FaBell, FaCreditCard, FaSave, FaCheckCircle
} from 'react-icons/fa'
import AppShell from '../components/layout/AppShell'
import { Input } from '../components/ui/Input'
import { BtnPrimary } from '../components/ui/Button'
import { EXAMS } from '../utils/constants'

const tabs = ['Profile', 'Achievements', 'Security', 'Notifications', 'Billing']

const achievements = [
  { name: '7-Day Streak', icon: '🔥', desc: 'Studied 7 days in a row', earned: true, color: '#FF6B6B' },
  { name: 'First Quiz', icon: '📝', desc: 'Completed your first quiz', earned: true, color: '#6BCB77' },
  { name: 'Top Scorer', icon: '🏆', desc: 'Scored 90%+ on a quiz', earned: true, color: '#FFD93D' },
  { name: '30-Day Streak', icon: '⚡', desc: 'Studied 30 days in a row', earned: false, color: '#2D4059' },
  { name: 'Subject Master', icon: '🎓', desc: 'Complete a full subject', earned: false, color: '#FF9A3C' },
  { name: 'Tutor Connect', icon: '👩‍🏫', desc: 'Booked your first tutor', earned: false, color: '#6BCB77' },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Profile')
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({ name: 'John Doe', email: 'john@example.com', phone: '+234 800 123 4567', exam: 'JAMB' })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSave = () => { setSaved(true); setTimeout(() => setSaved(false), 2500) }

  return (
    <AppShell>
      <div className="p-6 max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-7 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/8 to-transparent pointer-events-none" />
          <div className="relative z-10 flex items-center gap-5">
            <div className="relative flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#FF9A3C] flex items-center justify-center text-white text-2xl font-700 shadow-lg">JD</div>
              <button className="absolute -bottom-1 -right-1 w-8 h-8 rounded-xl bg-[#2D4059] flex items-center justify-center text-white shadow-md hover:bg-[#FF6B6B] transition-colors">
                <FaCamera size={12} />
              </button>
            </div>
            <div>
              <h1 className="text-xl font-700 text-[#2D4059]">John Doe</h1>
              <p className="text-sm text-[#2D4059]/55 mb-2">john@example.com · Free Plan</p>
              <span className="text-xs font-600 bg-[#6BCB77]/15 text-[#2D9442] px-3 py-1 rounded-full">JAMB Student</span>
            </div>
            <div className="ml-auto hidden sm:flex items-center gap-4">
              {[['7', 'Day Streak'], ['4', 'Subjects'], ['68%', 'Avg Score']].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <p className="text-xl font-700 text-[#2D4059]">{val}</p>
                  <p className="text-xs text-[#2D4059]/45">{lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 glass rounded-2xl p-1.5 overflow-x-auto">
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 rounded-xl text-sm font-600 transition-all whitespace-nowrap ${activeTab === tab ? 'bg-[#FF6B6B] text-white shadow-sm' : 'text-[#2D4059]/55 hover:text-[#2D4059]'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Profile tab */}
        {activeTab === 'Profile' && (
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="glass rounded-3xl p-7">
            <h3 className="font-700 text-[#2D4059] text-base mb-6">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
              <Input label="Full Name" value={form.name} onChange={e => set('name', e.target.value)} icon={FaUser} />
              <Input label="Email Address" type="email" value={form.email} onChange={e => set('email', e.target.value)} icon={FaEnvelope} />
              <Input label="Phone Number" type="tel" value={form.phone} onChange={e => set('phone', e.target.value)} icon={FaPhone} />
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-600 text-[#2D4059]">Exam Type</label>
                <select value={form.exam} onChange={e => set('exam', e.target.value)}
                  className="w-full bg-white/70 border border-[#2D4059]/15 rounded-xl px-4 py-3 text-sm text-[#2D4059] outline-none focus:border-[#FF6B6B] transition-colors appearance-none">
                  {EXAMS.map(e => <option key={e} value={e}>{e}</option>)}
                </select>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <BtnPrimary onClick={handleSave} className="px-6">
                <FaSave size={14} /> Save Changes
              </BtnPrimary>
              {saved && (
                <motion.span initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }}
                  className="flex items-center gap-1.5 text-sm text-[#6BCB77] font-600">
                  <FaCheckCircle size={14} /> Saved!
                </motion.span>
              )}
            </div>
          </motion.div>
        )}

        {/* Achievements tab */}
        {activeTab === 'Achievements' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass rounded-3xl p-7">
            <h3 className="font-700 text-[#2D4059] text-base mb-6 flex items-center gap-2">
              <FaTrophy className="text-[#FFD93D]" size={16} /> Achievements & Badges
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {achievements.map((ach, i) => (
                <motion.div key={ach.name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.06 }}
                  className={`rounded-2xl p-5 text-center transition-all ${ach.earned ? 'bg-gradient-to-br from-white/60 to-white/30 shadow-md' : 'bg-[#2D4059]/4 opacity-50'}`}>
                  <div className={`text-3xl mb-3 ${!ach.earned && 'grayscale opacity-40'}`}>{ach.icon}</div>
                  <p className={`text-sm font-700 mb-1 ${ach.earned ? 'text-[#2D4059]' : 'text-[#2D4059]/50'}`}>{ach.name}</p>
                  <p className="text-xs text-[#2D4059]/45 font-400">{ach.desc}</p>
                  {ach.earned && <span className="inline-block mt-2 text-xs font-600 text-[#6BCB77]">Earned</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Other tabs placeholder */}
        {['Security', 'Notifications', 'Billing'].includes(activeTab) && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass rounded-3xl p-10 text-center">
            {activeTab === 'Security' && <FaShieldAlt size={40} className="text-[#2D4059]/15 mx-auto mb-4" />}
            {activeTab === 'Notifications' && <FaBell size={40} className="text-[#2D4059]/15 mx-auto mb-4" />}
            {activeTab === 'Billing' && <FaCreditCard size={40} className="text-[#2D4059]/15 mx-auto mb-4" />}
            <p className="font-600 text-[#2D4059] mb-2">{activeTab} Settings</p>
            <p className="text-sm text-[#2D4059]/45">This section is fully functional in the production build.</p>
          </motion.div>
        )}
      </div>
    </AppShell>
  )
}
