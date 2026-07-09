import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaFire, FaBook, FaCheckCircle, FaCrown,
  FaArrowRight, FaBolt, FaChalkboardTeacher,
  FaChartLine, FaTrophy, FaClock, FaCalendarAlt
} from 'react-icons/fa'
import AppShell from '../components/layout/AppShell'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart
} from 'recharts'
import { SUBJECTS } from '../utils/constants'

const weeklyData = [
  { day: 'Mon', score: 65 }, { day: 'Tue', score: 72 }, { day: 'Wed', score: 68 },
  { day: 'Thu', score: 80 }, { day: 'Fri', score: 77 }, { day: 'Sat', score: 85 }, { day: 'Sun', score: 91 },
]

const recentActivities = [
  { icon: FaCheckCircle, color: '#6BCB77', label: 'Completed Algebra Quiz', sub: 'Score: 17/20 · 85%', time: '2h ago' },
  { icon: FaBook, color: '#FF6B6B', label: 'Studied Trigonometry Lesson', sub: 'Topic 3 of 5 · 45 mins', time: '5h ago' },
  { icon: FaChartLine, color: '#FFD93D', label: 'AI Report Generated', sub: 'Weak area: Quadratic equations', time: '5h ago' },
  { icon: FaTrophy, color: '#FF9A3C', label: 'Achievement Unlocked', sub: '7-day learning streak', time: '1d ago' },
]

const upcomingExams = [
  { name: 'JAMB UTME', date: 'Aug 15, 2025', days: 38, color: '#FF6B6B' },
  { name: 'WAEC May/June', date: 'May 5, 2025', days: 6, color: '#FFD93D' },
]

function StatCard({ icon: Icon, label, value, sub, color, delay }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay, duration: 0.5 }}
      className="glass rounded-2xl p-5 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${color}18` }}>
          <Icon size={18} style={{ color }} />
        </div>
        <span className="text-xs text-[#2D4059]/40 font-500 bg-[#2D4059]/5 px-2 py-1 rounded-lg">{sub}</span>
      </div>
      <p className="text-2xl font-700 text-[#2D4059] mb-1">{value}</p>
      <p className="text-xs text-[#2D4059]/55 font-400">{label}</p>
    </motion.div>
  )
}

export default function DashboardPage() {
  const navigate = useNavigate()

  return (
    <AppShell>
      <div className="p-6 space-y-6 max-w-7xl mx-auto">

        {/* Welcome banner */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-6 relative overflow-hidden flex items-center justify-between">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FF6B6B]/8 to-transparent pointer-events-none" />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <p className="text-xl font-700 text-[#2D4059]">Good morning, John</p>
              <FaFire className="text-[#FF6B6B]" size={20} />
            </div>
            <p className="text-sm text-[#2D4059]/55 font-400">You're on a <span className="font-700 text-[#FF6B6B]">7-day streak</span> — keep it going!</p>
          </div>
          <div className="hidden sm:flex items-center gap-3 relative z-10">
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/quiz')}
              className="btn-gradient text-white font-600 text-sm px-5 py-2.5 rounded-2xl shadow-md flex items-center gap-2">
              <FaBolt size={13} /> Take a Quiz
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/subscription')}
              className="bg-[#2D4059] text-white font-600 text-sm px-5 py-2.5 rounded-2xl flex items-center gap-2">
              <FaCrown size={13} /> Upgrade Plan
            </motion.button>
          </div>
        </motion.div>

        {/* Stats cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard icon={FaCrown} label="Current Plan" value="Free" sub="Upgrade" color="#FF6B6B" delay={0} />
          <StatCard icon={FaFire} label="Learning Streak" value="7 Days" sub="Personal best" color="#FF9A3C" delay={0.08} />
          <StatCard icon={FaBook} label="Subjects Enrolled" value="4" sub="Active" color="#6BCB77" delay={0.16} />
          <StatCard icon={FaCheckCircle} label="Quiz Completion" value="68%" sub="This week" color="#FFD93D" delay={0.24} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Weekly score chart */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="lg:col-span-2 glass rounded-3xl p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="font-700 text-[#2D4059] text-base">Weekly Performance</h3>
                <p className="text-xs text-[#2D4059]/45 mt-0.5">Quiz scores this week</p>
              </div>
              <span className="text-xs font-600 text-[#6BCB77] bg-[#6BCB77]/12 px-3 py-1.5 rounded-full">+12% vs last week</span>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <AreaChart data={weeklyData} margin={{ top: 5, right: 5, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#2D4059" strokeOpacity={0.05} />
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: '#2D4059', opacity: 0.5 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: '#2D4059', opacity: 0.5 }} axisLine={false} tickLine={false} domain={[40, 100]} />
                <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.9)', border: 'none', borderRadius: 12, boxShadow: '0 8px 30px rgba(45,64,89,0.12)', fontSize: 12 }} />
                <Area type="monotone" dataKey="score" stroke="#FF6B6B" strokeWidth={2.5} fill="url(#scoreGrad)" dot={{ fill: '#FF6B6B', strokeWidth: 0, r: 4 }} activeDot={{ r: 6 }} />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Upcoming exams */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            className="glass rounded-3xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <FaCalendarAlt size={15} className="text-[#FF6B6B]" />
              <h3 className="font-700 text-[#2D4059] text-base">Upcoming Exams</h3>
            </div>
            <div className="space-y-4">
              {upcomingExams.map(ex => (
                <div key={ex.name} className="rounded-2xl p-4" style={{ backgroundColor: `${ex.color}10` }}>
                  <div className="flex items-start justify-between mb-2">
                    <p className="font-700 text-[#2D4059] text-sm">{ex.name}</p>
                    <span className="text-xs font-700 px-2 py-0.5 rounded-full" style={{ backgroundColor: ex.color, color: 'white' }}>{ex.days}d</span>
                  </div>
                  <p className="text-xs text-[#2D4059]/55 flex items-center gap-1"><FaClock size={10} /> {ex.date}</p>
                  <div className="mt-3 h-1.5 rounded-full bg-[#2D4059]/10">
                    <div className="h-1.5 rounded-full transition-all" style={{ width: `${Math.min(100 - ex.days * 2, 100)}%`, backgroundColor: ex.color }} />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Continue learning */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-700 text-[#2D4059] text-base">Continue Learning</h3>
            <button onClick={() => navigate('/subjects')} className="text-xs text-[#FF6B6B] font-600 flex items-center gap-1 hover:gap-2 transition-all">View all <FaArrowRight size={10} /></button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SUBJECTS.slice(0, 3).map((subj, i) => (
              <motion.div key={subj.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.06 }}
                onClick={() => navigate(`/subject/${subj.id}`)}
                className="glass rounded-2xl p-5 card-hover cursor-pointer group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-700 text-base" style={{ backgroundColor: subj.color }}>{subj.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-600 text-[#2D4059] text-sm truncate">{subj.name}</p>
                    <p className="text-xs text-[#2D4059]/45">{subj.lessons} lessons</p>
                  </div>
                  <FaArrowRight size={13} className="text-[#2D4059]/20 group-hover:text-[#FF6B6B] transition-colors" />
                </div>
                <div className="w-full h-2 bg-[#2D4059]/8 rounded-full">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${subj.progress}%` }} transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                    className="h-2 rounded-full" style={{ backgroundColor: subj.color }} />
                </div>
                <p className="text-xs text-[#2D4059]/45 mt-1.5 font-500">{subj.progress}% complete</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* AI recommended */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}
            className="glass rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6BCB77]/8 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-1.5 bg-[#6BCB77]/15 text-[#2D9442] text-xs font-600 px-3 py-1.5 rounded-full mb-4">
                <FaBolt size={10} /> AI Recommended
              </span>
              <h3 className="font-700 text-[#2D4059] text-base mb-1">Quadratic Equations</h3>
              <p className="text-xs text-[#2D4059]/55 mb-4 font-400">You scored 40% on this topic. 3 focused lessons can improve your score by ~35%.</p>
              <div className="flex items-center gap-3">
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => navigate('/topic/algebra')}
                  className="btn-gradient text-white text-xs font-600 px-4 py-2 rounded-xl flex items-center gap-1.5">
                  Start Lesson <FaArrowRight size={11} />
                </motion.button>
                <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  onClick={() => navigate('/ai-recommendations')}
                  className="text-xs font-600 text-[#2D4059]/55 px-4 py-2 rounded-xl hover:bg-[#2D4059]/6 transition-all">
                  View full report
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Recent activities */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="glass rounded-3xl p-6">
            <h3 className="font-700 text-[#2D4059] text-base mb-5">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivities.map((act, i) => {
                const Icon = act.icon
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${act.color}18` }}>
                      <Icon size={14} style={{ color: act.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-600 text-[#2D4059] truncate">{act.label}</p>
                      <p className="text-xs text-[#2D4059]/45 truncate">{act.sub}</p>
                    </div>
                    <span className="text-xs text-[#2D4059]/35 flex-shrink-0">{act.time}</span>
                  </div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { label: 'Take a Quiz', icon: FaBolt, color: '#FF6B6B', path: '/quiz' },
            { label: 'Find a Tutor', icon: FaChalkboardTeacher, color: '#6BCB77', path: '/tutors-app' },
            { label: 'Upgrade Plan', icon: FaCrown, color: '#FFD93D', path: '/subscription' },
          ].map(a => {
            const Icon = a.icon
            return (
              <motion.button key={a.label} whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                onClick={() => navigate(a.path)}
                className="glass rounded-2xl p-4 flex flex-col items-center gap-2 card-hover cursor-pointer">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${a.color}18` }}>
                  <Icon size={18} style={{ color: a.color }} />
                </div>
                <span className="text-xs font-600 text-[#2D4059] text-center">{a.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </AppShell>
  )
}
