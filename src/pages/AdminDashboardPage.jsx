import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTachometerAlt, FaUsers, FaBook, FaChalkboardTeacher,
  FaCreditCard, FaChartBar, FaPlus, FaEdit, FaTrash,
  FaUpload, FaEye, FaBars, FaTimes, FaSearch,
  FaCheckCircle, FaRocket, FaSignOutAlt, FaDollarSign,
  FaFileImport, FaFilter
} from 'react-icons/fa'
import Logo from '../components/ui/Logo'
import {
  BarChart, Bar, LineChart, Line, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart
} from 'recharts'

const adminNav = [
  { icon: FaTachometerAlt, label: 'Dashboard', id: 'dashboard' },
  { icon: FaUsers, label: 'Students', id: 'students' },
  { icon: FaBook, label: 'Questions', id: 'questions' },
  { icon: FaChalkboardTeacher, label: 'Tutors', id: 'tutors' },
  { icon: FaCreditCard, label: 'Subscriptions', id: 'subscriptions' },
  { icon: FaDollarSign, label: 'Revenue', id: 'revenue' },
  { icon: FaChartBar, label: 'Analytics', id: 'analytics' },
]

const revenueData = [
  { month: 'Jan', revenue: 4200 }, { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 7200 }, { month: 'Apr', revenue: 6900 },
  { month: 'May', revenue: 9100 }, { month: 'Jun', revenue: 11400 },
  { month: 'Jul', revenue: 13200 },
]

const studentGrowth = [
  { month: 'Jan', students: 820 }, { month: 'Feb', students: 1240 },
  { month: 'Mar', students: 1890 }, { month: 'Apr', students: 2560 },
  { month: 'May', students: 3400 }, { month: 'Jun', students: 5100 },
  { month: 'Jul', students: 7300 },
]

const sampleQuestions = [
  { id: 1, subject: 'Mathematics', topic: 'Algebra', difficulty: 'Medium', question: 'Solve for x: 3x² + 5x - 2 = 0', correct: 'x = ⅓ or x = -2' },
  { id: 2, subject: 'Physics', topic: 'Mechanics', difficulty: 'Hard', question: 'A car decelerates at 4 m/s². Find the braking distance from 20 m/s.', correct: '50 m' },
  { id: 3, subject: 'English', topic: 'Grammar', difficulty: 'Easy', question: 'Choose the correct form: "Neither of the boys ___ ready."', correct: 'was' },
  { id: 4, subject: 'Chemistry', topic: 'Organic', difficulty: 'Medium', question: 'What is the IUPAC name of CH₃CH₂OH?', correct: 'Ethanol' },
  { id: 5, subject: 'Mathematics', topic: 'Trigonometry', difficulty: 'Easy', question: 'What is sin(30°)?', correct: '½' },
]

const sampleStudents = [
  { id: 1, name: 'Chisom Okafor', email: 'chisom@email.com', exam: 'JAMB', plan: 'Premium', score: 82, joined: 'Jun 12, 2025' },
  { id: 2, name: 'Tunde Adeyemi', email: 'tunde@email.com', exam: 'Cambridge', plan: 'Free', score: 71, joined: 'Jun 18, 2025' },
  { id: 3, name: 'Amaka Nwosu', email: 'amaka@email.com', exam: 'WAEC', plan: 'Premium', score: 91, joined: 'Jul 1, 2025' },
  { id: 4, name: 'Emeka Eze', email: 'emeka@email.com', exam: 'NECO', plan: 'Free', score: 58, joined: 'Jul 5, 2025' },
]

const diffColor = { Easy: '#6BCB77', Medium: '#FFD93D', Hard: '#FF6B6B' }
const planColor = { Premium: '#FF6B6B', Free: '#2D4059', School: '#6BCB77', Institution: '#FFD93D' }

function AdminSidebar({ active, setActive, collapsed, setCollapsed, mobileOpen, setMobileOpen }) {
  const navigate = useNavigate()
  const content = (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-5 border-b border-white/10 flex-shrink-0">
        {!collapsed && <Logo dark size="sm" />}
        {collapsed && <span className="bg-[#FF6B6B] text-white rounded-xl p-1.5 mx-auto"><FaRocket size={14} /></span>}
        <button onClick={() => { setCollapsed(!collapsed); setMobileOpen(false) }}
          className="text-white/40 hover:text-white transition-colors ml-auto hidden md:block">
          {collapsed ? <FaBars size={14} /> : <FaTimes size={14} />}
        </button>
        <button onClick={() => setMobileOpen(false)} className="text-white/40 hover:text-white md:hidden"><FaTimes size={18} /></button>
      </div>
      <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
        {adminNav.map(item => {
          const Icon = item.icon
          return (
            <button key={item.id} onClick={() => { setActive(item.id); setMobileOpen(false) }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all w-full text-left ${active === item.id ? 'bg-[#FF6B6B] text-white' : 'text-white/50 hover:bg-white/8 hover:text-white'}`}>
              <Icon size={16} className="flex-shrink-0" />
              {!collapsed && <span className="text-sm font-500 whitespace-nowrap">{item.label}</span>}
            </button>
          )
        })}
      </nav>
      <div className="border-t border-white/10 p-3">
        <button onClick={() => navigate('/')}
          className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-white/40 hover:text-white text-xs font-500">
          <FaSignOutAlt size={13} />{!collapsed && 'Exit Admin'}
        </button>
      </div>
    </div>
  )
  return (
    <>
      <motion.aside animate={{ width: collapsed ? 68 : 220 }} transition={{ duration: 0.22 }}
        className="hidden md:flex flex-col h-full bg-[#1a2d45] flex-shrink-0 overflow-hidden">
        {content}
      </motion.aside>
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
            <motion.aside initial={{ x: -240 }} animate={{ x: 0 }} exit={{ x: -240 }}
              transition={{ duration: 0.26 }}
              className="fixed left-0 top-0 bottom-0 w-60 bg-[#1a2d45] z-50 md:hidden flex flex-col">
              {content}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default function AdminDashboardPage() {
  const [active, setActive] = useState('dashboard')
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex h-screen overflow-hidden bg-[#FDF8F0]">
      <AdminSidebar active={active} setActive={setActive} collapsed={collapsed}
        setCollapsed={setCollapsed} mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white/70 backdrop-blur-xl border-b border-[#2D4059]/8 px-6 py-4 flex items-center justify-between">
          <button onClick={() => setMobileOpen(true)} className="md:hidden text-[#2D4059]"><FaBars size={20} /></button>
          <div><p className="text-base font-700 text-[#2D4059]">Admin Dashboard</p>
          <p className="text-xs text-[#2D4059]/45">Manage Learn Booster platform</p></div>
          <div className="flex items-center gap-3">
            <span className="text-xs font-600 bg-[#6BCB77]/15 text-[#2D9442] px-3 py-1.5 rounded-full">Admin</span>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          {active === 'dashboard' && <DashboardView />}
          {active === 'students' && <StudentsView />}
          {active === 'questions' && <QuestionsView />}
          {active === 'tutors' && <PlaceholderView title="Tutors" />}
          {active === 'subscriptions' && <PlaceholderView title="Subscriptions" />}
          {active === 'revenue' && <PlaceholderView title="Revenue" />}
          {active === 'analytics' && <PlaceholderView title="Analytics" />}
        </main>
      </div>
    </div>
  )
}

function DashboardView() {
  const stats = [
    { label: 'Total Students', value: '12,480', change: '+18%', color: '#FF6B6B', icon: FaUsers },
    { label: 'Active Tutors', value: '284', change: '+7%', color: '#6BCB77', icon: FaChalkboardTeacher },
    { label: 'Monthly Revenue', value: '$13,200', change: '+23%', color: '#FFD93D', icon: FaDollarSign },
    { label: 'Active Subscriptions', value: '3,891', change: '+31%', color: '#2D4059', icon: FaCreditCard },
  ]
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon
          return (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/70 shadow-sm">
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${s.color}18` }}>
                  <Icon size={17} style={{ color: s.color }} />
                </div>
                <span className="text-xs font-600 text-[#6BCB77] bg-[#6BCB77]/12 px-2 py-0.5 rounded-full">{s.change}</span>
              </div>
              <p className="text-2xl font-700 text-[#2D4059] mb-0.5">{s.value}</p>
              <p className="text-xs text-[#2D4059]/50">{s.label}</p>
            </motion.div>
          )
        })}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/70">
          <h3 className="font-700 text-[#2D4059] text-sm mb-4">Monthly Revenue (USD)</h3>
          <ResponsiveContainer width="100%" height={180}>
            <AreaChart data={revenueData} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
              <defs><linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FF6B6B" stopOpacity={0.2} />
                <stop offset="95%" stopColor="#FF6B6B" stopOpacity={0} />
              </linearGradient></defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D4059" strokeOpacity={0.05} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#2D4059', opacity: 0.5 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#2D4059', opacity: 0.5 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: 12, fontSize: 12 }} formatter={(v) => [`$${v.toLocaleString()}`, 'Revenue']} />
              <Area type="monotone" dataKey="revenue" stroke="#FF6B6B" strokeWidth={2.5} fill="url(#revGrad)" dot={{ fill: '#FF6B6B', r: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/70">
          <h3 className="font-700 text-[#2D4059] text-sm mb-4">Student Growth</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={studentGrowth} margin={{ top: 5, right: 5, bottom: 0, left: -10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2D4059" strokeOpacity={0.05} />
              <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#2D4059', opacity: 0.5 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: '#2D4059', opacity: 0.5 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: 'rgba(255,255,255,0.95)', border: 'none', borderRadius: 12, fontSize: 12 }} />
              <Bar dataKey="students" fill="#6BCB77" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
        className="bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-white/70">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-700 text-[#2D4059] text-sm">Quick Actions</h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { label: 'Add Question', icon: FaPlus, color: '#FF6B6B' },
            { label: 'Create Lesson', icon: FaBook, color: '#6BCB77' },
            { label: 'Approve Tutor', icon: FaChalkboardTeacher, color: '#FFD93D' },
            { label: 'Upload Content', icon: FaUpload, color: '#2D4059' },
          ].map(a => {
            const Icon = a.icon
            return (
              <motion.button key={a.label} whileHover={{ scale: 1.03, y: -2 }} whileTap={{ scale: 0.97 }}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-[#2D4059]/10 hover:border-[#2D4059]/25 transition-all bg-white/40">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${a.color}18` }}>
                  <Icon size={16} style={{ color: a.color }} />
                </div>
                <span className="text-xs font-600 text-[#2D4059]">{a.label}</span>
              </motion.button>
            )
          })}
        </div>
      </motion.div>
    </div>
  )
}

function StudentsView() {
  const [search, setSearch] = useState('')
  const filtered = sampleStudents.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) || s.email.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="space-y-5 max-w-6xl mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="font-700 text-[#2D4059] text-lg">Students</h2>
        <div className="flex gap-3">
          <div className="relative">
            <FaSearch size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2D4059]/35" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search students…"
              className="bg-white/70 border border-[#2D4059]/15 rounded-xl pl-9 pr-4 py-2.5 text-sm text-[#2D4059] outline-none focus:border-[#FF6B6B] transition-colors w-52" />
          </div>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-[#FF6B6B] text-white text-xs font-600 px-4 py-2.5 rounded-xl">
            <FaFilter size={11} /> Filter
          </motion.button>
        </div>
      </div>
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/70 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#2D4059]/8">
              {['Student', 'Exam', 'Plan', 'Avg Score', 'Joined', 'Actions'].map(h => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-700 text-[#2D4059]/50 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((s, i) => (
              <tr key={s.id} className={`border-b border-[#2D4059]/5 hover:bg-[#FF6B6B]/3 transition-colors ${i % 2 === 0 ? 'bg-white/20' : ''}`}>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF9A3C] flex items-center justify-center text-white text-xs font-700">
                      {s.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-600 text-[#2D4059]">{s.name}</p>
                      <p className="text-xs text-[#2D4059]/45">{s.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4"><span className="text-xs font-600 text-[#2D4059] bg-[#2D4059]/8 px-2 py-1 rounded-lg">{s.exam}</span></td>
                <td className="px-5 py-4">
                  <span className="text-xs font-700 px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: planColor[s.plan] || '#2D4059' }}>{s.plan}</span>
                </td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1.5 bg-[#2D4059]/10 rounded-full">
                      <div className="h-1.5 rounded-full bg-[#6BCB77]" style={{ width: `${s.score}%` }} />
                    </div>
                    <span className="text-xs font-600 text-[#2D4059]">{s.score}%</span>
                  </div>
                </td>
                <td className="px-5 py-4 text-xs text-[#2D4059]/50">{s.joined}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-lg bg-[#2D4059]/8 flex items-center justify-center hover:bg-[#6BCB77]/15 transition-colors"><FaEye size={11} className="text-[#2D4059]/50" /></button>
                    <button className="w-7 h-7 rounded-lg bg-[#2D4059]/8 flex items-center justify-center hover:bg-[#FFD93D]/20 transition-colors"><FaEdit size={11} className="text-[#2D4059]/50" /></button>
                    <button className="w-7 h-7 rounded-lg bg-[#2D4059]/8 flex items-center justify-center hover:bg-[#FF6B6B]/15 transition-colors"><FaTrash size={11} className="text-[#FF6B6B]/60" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function QuestionsView() {
  const [showForm, setShowForm] = useState(false)
  const [search, setSearch] = useState('')
  const [form, setForm] = useState({ subject: '', topic: '', difficulty: 'Easy', question: '', optA: '', optB: '', optC: '', optD: '', correct: 'A', explanation: '' })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const filtered = sampleQuestions.filter(q =>
    q.question.toLowerCase().includes(search.toLowerCase()) || q.subject.toLowerCase().includes(search.toLowerCase())
  )
  return (
    <div className="space-y-5 max-w-6xl mx-auto">
      <div className="flex items-center justify-between flex-wrap gap-3">
        <h2 className="font-700 text-[#2D4059] text-lg">Question Bank</h2>
        <div className="flex gap-3">
          <div className="relative">
            <FaSearch size={13} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2D4059]/35" />
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search questions…"
              className="bg-white/70 border border-[#2D4059]/15 rounded-xl pl-9 pr-4 py-2.5 text-sm text-[#2D4059] outline-none focus:border-[#FF6B6B] transition-colors w-52" />
          </div>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-[#2D4059]/10 text-[#2D4059] text-xs font-600 px-4 py-2.5 rounded-xl hover:bg-[#2D4059]/20 transition-all">
            <FaFileImport size={11} /> Import CSV
          </motion.button>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            onClick={() => setShowForm(!showForm)}
            className="flex items-center gap-2 bg-[#FF6B6B] text-white text-xs font-600 px-4 py-2.5 rounded-xl">
            <FaPlus size={11} /> Add Question
          </motion.button>
        </div>
      </div>
      <AnimatePresence>
        {showForm && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="bg-white/70 rounded-2xl p-6 border border-[#FF6B6B]/20 shadow-lg">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-700 text-[#2D4059]">Create New Question</h3>
              <button onClick={() => setShowForm(false)} className="w-8 h-8 rounded-xl bg-[#2D4059]/8 flex items-center justify-center hover:bg-[#FF6B6B]/15 transition-colors"><FaTimes size={13} className="text-[#2D4059]/50" /></button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              {[['Subject', 'subject', ['Mathematics', 'Physics', 'English', 'Chemistry', 'Biology']],
                ['Topic', 'topic', ['Algebra', 'Mechanics', 'Grammar', 'Organic Chemistry']],
                ['Difficulty', 'difficulty', ['Easy', 'Medium', 'Hard']]].map(([label, key, opts]) => (
                <div key={key}>
                  <label className="text-xs font-600 text-[#2D4059] block mb-1.5">{label}</label>
                  <select value={form[key]} onChange={e => set(key, e.target.value)}
                    className="w-full bg-white/70 border border-[#2D4059]/15 rounded-xl px-3 py-2.5 text-sm text-[#2D4059] outline-none focus:border-[#FF6B6B] transition-colors">
                    <option value="">Select {label}</option>
                    {opts.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>
            <div className="mb-4">
              <label className="text-xs font-600 text-[#2D4059] block mb-1.5">Question Text</label>
              <textarea value={form.question} onChange={e => set('question', e.target.value)} rows={2} placeholder="Enter the full question text…"
                className="w-full bg-white/70 border border-[#2D4059]/15 rounded-xl px-4 py-3 text-sm text-[#2D4059] placeholder-[#2D4059]/30 outline-none focus:border-[#FF6B6B] transition-colors resize-none" />
            </div>
            <div className="grid grid-cols-2 gap-3 mb-4">
              {['A', 'B', 'C', 'D'].map(opt => (
                <div key={opt}>
                  <label className="text-xs font-600 text-[#2D4059] block mb-1.5">Option {opt}</label>
                  <input value={form[`opt${opt}`]} onChange={e => set(`opt${opt}`, e.target.value)} placeholder={`Option ${opt}`}
                    className="w-full bg-white/70 border border-[#2D4059]/15 rounded-xl px-3 py-2.5 text-sm text-[#2D4059] outline-none focus:border-[#FF6B6B] transition-colors" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
              <div>
                <label className="text-xs font-600 text-[#2D4059] block mb-1.5">Correct Answer</label>
                <select value={form.correct} onChange={e => set('correct', e.target.value)}
                  className="w-full bg-white/70 border border-[#2D4059]/15 rounded-xl px-3 py-2.5 text-sm text-[#2D4059] outline-none focus:border-[#FF6B6B] transition-colors">
                  {['A', 'B', 'C', 'D'].map(o => <option key={o} value={o}>Option {o}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-600 text-[#2D4059] block mb-1.5">Explanation</label>
                <input value={form.explanation} onChange={e => set('explanation', e.target.value)} placeholder="Why this answer is correct…"
                  className="w-full bg-white/70 border border-[#2D4059]/15 rounded-xl px-3 py-2.5 text-sm text-[#2D4059] outline-none focus:border-[#FF6B6B] transition-colors" />
              </div>
            </div>
            <div className="flex gap-3">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => setShowForm(false)}
                className="flex items-center gap-2 bg-[#FF6B6B] text-white text-sm font-600 px-5 py-2.5 rounded-xl">
                <FaCheckCircle size={13} /> Save Question
              </motion.button>
              <motion.button whileHover={{ scale: 1.02 }} onClick={() => setShowForm(false)}
                className="text-sm font-600 text-[#2D4059]/50 px-4 py-2.5 rounded-xl hover:bg-[#2D4059]/8 transition-all">Cancel</motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl border border-white/70 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#2D4059]/8">
              {['Subject', 'Topic', 'Difficulty', 'Question', 'Correct Answer', 'Actions'].map(h => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-700 text-[#2D4059]/50 uppercase tracking-wider">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((q, i) => (
              <tr key={q.id} className={`border-b border-[#2D4059]/5 hover:bg-[#FF6B6B]/3 transition-colors ${i % 2 === 0 ? 'bg-white/20' : ''}`}>
                <td className="px-5 py-4 text-xs font-600 text-[#2D4059]">{q.subject}</td>
                <td className="px-5 py-4 text-xs text-[#2D4059]/60">{q.topic}</td>
                <td className="px-5 py-4">
                  <span className="text-xs font-700 px-2.5 py-1 rounded-full text-white" style={{ backgroundColor: diffColor[q.difficulty] || '#2D4059' }}>{q.difficulty}</span>
                </td>
                <td className="px-5 py-4 text-xs text-[#2D4059]/70 max-w-xs truncate">{q.question}</td>
                <td className="px-5 py-4 text-xs font-600 text-[#6BCB77]">{q.correct}</td>
                <td className="px-5 py-4">
                  <div className="flex items-center gap-2">
                    <button className="w-7 h-7 rounded-lg bg-[#2D4059]/8 flex items-center justify-center hover:bg-[#6BCB77]/15 transition-colors"><FaEye size={11} className="text-[#2D4059]/50" /></button>
                    <button className="w-7 h-7 rounded-lg bg-[#2D4059]/8 flex items-center justify-center hover:bg-[#FFD93D]/20 transition-colors"><FaEdit size={11} className="text-[#2D4059]/50" /></button>
                    <button className="w-7 h-7 rounded-lg bg-[#2D4059]/8 flex items-center justify-center hover:bg-[#FF6B6B]/15 transition-colors"><FaTrash size={11} className="text-[#FF6B6B]/60" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function PlaceholderView({ title }) {
  return (
    <div className="flex items-center justify-center h-80">
      <div className="text-center">
        <FaChartBar size={48} className="text-[#2D4059]/10 mx-auto mb-4" />
        <p className="font-700 text-[#2D4059] text-lg mb-2">{title}</p>
        <p className="text-sm text-[#2D4059]/45">This section is fully wired in the production build.</p>
      </div>
    </div>
  )
}
