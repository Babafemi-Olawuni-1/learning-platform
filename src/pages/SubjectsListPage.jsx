import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaArrowRight, FaBook, FaCheckCircle } from 'react-icons/fa'
import AppShell from '../components/layout/AppShell'
import { SUBJECTS } from '../utils/constants'

export default function SubjectsListPage() {
  const navigate = useNavigate()
  return (
    <AppShell>
      <div className="p-6 max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: -15 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="text-2xl font-700 text-[#2D4059] mb-1">Your Subjects</h1>
          <p className="text-sm text-[#2D4059]/55">Select a subject to continue learning.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SUBJECTS.map((subj, i) => (
            <motion.div key={subj.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => navigate(`/subject/${subj.id}`)}
              className="glass rounded-3xl p-6 card-hover cursor-pointer group">
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-xl font-700 shadow-md" style={{ backgroundColor: subj.color }}>{subj.icon}</div>
                <div>
                  <h3 className="font-700 text-[#2D4059] text-base">{subj.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-[#2D4059]/45 mt-0.5">
                    <span className="flex items-center gap-1"><FaBook size={10} /> {subj.lessons} lessons</span>
                    <span className="flex items-center gap-1"><FaCheckCircle size={10} className="text-[#6BCB77]" /> {subj.quizzes} quizzes</span>
                  </div>
                </div>
                <FaArrowRight size={14} className="ml-auto text-[#2D4059]/20 group-hover:text-[#FF6B6B] transition-colors" />
              </div>
              <div className="w-full h-2.5 bg-[#2D4059]/8 rounded-full">
                <motion.div initial={{ width: 0 }} animate={{ width: `${subj.progress}%` }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.8 }}
                  className="h-2.5 rounded-full" style={{ backgroundColor: subj.color }} />
              </div>
              <p className="text-xs text-[#2D4059]/45 mt-1.5 font-500">{subj.progress}% complete</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AppShell>
  )
}
