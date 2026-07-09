import { useParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaArrowLeft, FaArrowRight, FaBook, FaCheckCircle,
  FaLock, FaDownload, FaChalkboardTeacher, FaPlay
} from 'react-icons/fa'
import AppShell from '../components/layout/AppShell'
import { SUBJECTS, TOPICS } from '../utils/constants'

const tabs = ['Overview', 'Topics', 'Progress', 'Mock Exams']

export default function SubjectPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Topics')

  const subject = SUBJECTS.find(s => s.id === id) || SUBJECTS[0]
  const topics = TOPICS[subject.id] || TOPICS.mathematics

  return (
    <AppShell>
      <div className="p-6 max-w-5xl mx-auto space-y-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#2D4059]/45 font-400">
          <button onClick={() => navigate('/dashboard')} className="hover:text-[#FF6B6B] transition-colors flex items-center gap-1"><FaArrowLeft size={10} /> Dashboard</button>
          <span>/</span>
          <span className="text-[#2D4059] font-600">{subject.name}</span>
        </div>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="glass rounded-3xl p-7 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#FF6B6B]/5 pointer-events-none" />
          <div className="relative z-10 flex items-start justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-700 shadow-lg"
                style={{ backgroundColor: subject.color }}>{subject.icon}</div>
              <div>
                <h1 className="text-2xl font-700 text-[#2D4059] mb-1">{subject.name}</h1>
                <div className="flex items-center gap-4 text-xs text-[#2D4059]/55">
                  <span className="flex items-center gap-1"><FaBook size={11} /> {subject.lessons} Lessons</span>
                  <span className="flex items-center gap-1"><FaCheckCircle size={11} className="text-[#6BCB77]" /> {subject.quizzes} Quizzes</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 glass border border-[#2D4059]/15 text-[#2D4059] font-600 text-sm px-4 py-2.5 rounded-xl hover:border-[#2D4059]/30 transition-all">
                <FaDownload size={13} /> Notes
              </motion.button>
              <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                onClick={() => navigate('/tutors-app')}
                className="flex items-center gap-2 bg-[#2D4059] text-white font-600 text-sm px-4 py-2.5 rounded-xl">
                <FaChalkboardTeacher size={13} /> Find Tutor
              </motion.button>
            </div>
          </div>
          {/* Progress bar */}
          <div className="relative z-10 mt-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-600 text-[#2D4059]">Overall Progress</p>
              <p className="text-xs font-700" style={{ color: subject.color }}>{subject.progress}%</p>
            </div>
            <div className="w-full h-2.5 bg-[#2D4059]/8 rounded-full">
              <motion.div initial={{ width: 0 }} animate={{ width: `${subject.progress}%` }}
                transition={{ delay: 0.3, duration: 0.9 }}
                className="h-2.5 rounded-full" style={{ backgroundColor: subject.color }} />
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex gap-1 glass rounded-2xl p-1.5 w-fit">
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-sm font-600 transition-all duration-200 ${activeTab === tab ? 'bg-[#FF6B6B] text-white shadow-sm' : 'text-[#2D4059]/55 hover:text-[#2D4059]'}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Topics list */}
        {activeTab === 'Topics' && (
          <div className="space-y-3">
            {topics.map((topic, i) => (
              <motion.div key={topic.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="glass rounded-2xl p-5 card-hover group cursor-pointer"
                onClick={() => navigate(`/topic/${topic.id}`)}>
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${topic.progress === 0 ? 'bg-[#2D4059]/8' : 'bg-[#FF6B6B]/12'}`}>
                    {topic.progress === 0 ? <FaLock size={14} className="text-[#2D4059]/30" /> : <FaPlay size={14} className="text-[#FF6B6B]" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-600 text-[#2D4059] text-sm">{topic.name}</p>
                      {topic.progress === 100 && <FaCheckCircle size={13} className="text-[#6BCB77]" />}
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[#2D4059]/45">
                      <span>{topic.lessons} lessons</span>
                      <span>{topic.questions} practice questions</span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 mr-3">
                    <p className="text-sm font-700 text-[#2D4059]">{topic.progress}%</p>
                    <p className="text-xs text-[#2D4059]/40">complete</p>
                  </div>
                  <div className="w-24 flex-shrink-0">
                    <div className="w-full h-2 bg-[#2D4059]/8 rounded-full">
                      <motion.div initial={{ width: 0 }} animate={{ width: `${topic.progress}%` }}
                        transition={{ delay: 0.4 + i * 0.08, duration: 0.7 }}
                        className="h-2 rounded-full bg-[#FF6B6B]" />
                    </div>
                  </div>
                  <FaArrowRight size={13} className="text-[#2D4059]/20 group-hover:text-[#FF6B6B] transition-colors flex-shrink-0" />
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'Overview' && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass rounded-3xl p-7">
            <h3 className="font-700 text-[#2D4059] text-lg mb-4">About {subject.name}</h3>
            <p className="text-[#2D4059]/65 text-sm font-400 leading-relaxed mb-5">
              This comprehensive course covers all major topics required for your exam. Each lesson includes detailed explanations, worked examples, and practice questions aligned to past papers.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[['Total Lessons', subject.lessons], ['Practice Questions', subject.lessons * 12], ['Mock Exams', 4]].map(([k, v]) => (
                <div key={k} className="text-center p-4 rounded-2xl bg-[#2D4059]/4">
                  <p className="text-2xl font-700 text-[#2D4059]">{v}</p>
                  <p className="text-xs text-[#2D4059]/50 mt-1">{k}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {(activeTab === 'Progress' || activeTab === 'Mock Exams') && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="glass rounded-3xl p-10 text-center">
            <FaBook size={40} className="text-[#2D4059]/15 mx-auto mb-4" />
            <p className="font-600 text-[#2D4059] mb-2">{activeTab} coming soon</p>
            <p className="text-sm text-[#2D4059]/45">We're building this section. Check back shortly.</p>
          </motion.div>
        )}
      </div>
    </AppShell>
  )
}
