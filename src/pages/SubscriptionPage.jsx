import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  FaCheckCircle, FaTimes, FaCrown, FaBolt,
  FaInfinity, FaChartBar, FaChalkboardTeacher,
  FaVideo, FaArrowRight, FaShieldAlt
} from 'react-icons/fa'
import AppShell from '../components/layout/AppShell'

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    sub: 'Forever free',
    color: '#2D4059',
    features: ['20 questions per subject', 'Basic analytics', 'Community forum', null, null, null],
    cta: 'Current Plan',
    disabled: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$9.99',
    sub: '/month · or ₦3,500/mo',
    color: '#FF6B6B',
    badge: 'Most Popular',
    features: ['Unlimited quizzes', 'AI performance analytics', 'Live tutor sessions', 'Downloadable notes', 'All exams covered', 'Priority support'],
    cta: 'Subscribe Now',
    disabled: false,
    highlight: true,
  },
  {
    id: 'school',
    name: 'School',
    price: '$49.99',
    sub: '/month · 5 accounts',
    color: '#6BCB77',
    features: ['5 student accounts', 'Admin dashboard', 'School analytics', 'Bulk content upload', 'All premium features', 'Dedicated support'],
    cta: 'Get School Plan',
    disabled: false,
  },
  {
    id: 'institution',
    name: 'Institution',
    price: '$99.99',
    sub: '/month · unlimited',
    color: '#FFD93D',
    features: ['Unlimited accounts', 'Institution branding', 'Custom content', 'Advanced reporting', 'API access', 'Onboarding support'],
    cta: 'Contact Us',
    disabled: false,
  },
]

const tableFeatures = [
  { label: 'Questions per subject', free: '20', premium: 'Unlimited', school: 'Unlimited', institution: 'Unlimited' },
  { label: 'AI recommendations', free: false, premium: true, school: true, institution: true },
  { label: 'Live tutor sessions', free: false, premium: true, school: true, institution: true },
  { label: 'Recorded lessons', free: false, premium: true, school: true, institution: true },
  { label: 'Downloadable notes', free: false, premium: true, school: true, institution: true },
  { label: 'Admin dashboard', free: false, premium: false, school: true, institution: true },
  { label: 'Custom branding', free: false, premium: false, school: false, institution: true },
  { label: 'API access', free: false, premium: false, school: false, institution: true },
]

export default function SubscriptionPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(null)

  return (
    <AppShell>
      <div className="p-6 max-w-6xl mx-auto space-y-8">

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
          <span className="inline-flex items-center gap-1.5 bg-[#FFD93D]/20 text-[#B89A00] text-xs font-700 px-3 py-1.5 rounded-full mb-4">
            <FaCrown size={11} /> Plans & Pricing
          </span>
          <h1 className="text-3xl font-700 text-[#2D4059] mb-2">Unlock your full potential</h1>
          <p className="text-[#2D4059]/55 text-sm font-400 max-w-md mx-auto">
            Start free, upgrade when you're ready. Cancel anytime, no questions asked.
          </p>
        </motion.div>

        {/* Current plan notice */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#2D4059]/8 flex items-center justify-center">
            <FaBolt size={16} className="text-[#2D4059]/50" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-700 text-[#2D4059]">You're on the Free Plan</p>
            <p className="text-xs text-[#2D4059]/50 font-400">You've used 18 of 20 free questions in Mathematics. Upgrade to keep learning.</p>
          </div>
          <div className="w-28">
            <div className="w-full h-2 bg-[#2D4059]/10 rounded-full">
              <div className="h-2 bg-[#FF6B6B] rounded-full" style={{ width: '90%' }} />
            </div>
            <p className="text-xs text-[#FF6B6B] font-600 mt-1">18/20 used</p>
          </div>
        </motion.div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((plan, i) => (
            <motion.div key={plan.id} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className={`glass rounded-3xl p-6 relative overflow-hidden transition-all duration-300 ${plan.highlight ? 'ring-2 ring-[#FF6B6B] shadow-2xl' : ''} ${selected === plan.id ? 'ring-2 ring-[#FFD93D]' : ''}`}
              onClick={() => !plan.disabled && setSelected(plan.id)}>
              {plan.badge && (
                <span className="absolute top-4 right-4 text-xs font-700 px-2.5 py-1 rounded-full" style={{ backgroundColor: plan.color, color: 'white' }}>{plan.badge}</span>
              )}
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: `${plan.color}18` }}>
                <FaCrown size={18} style={{ color: plan.color }} />
              </div>
              <h3 className="font-700 text-[#2D4059] text-base mb-1">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-700 text-[#2D4059]">{plan.price}</span>
              </div>
              <p className="text-xs text-[#2D4059]/45 mb-5">{plan.sub}</p>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((f, fi) => (
                  <li key={fi} className={`flex items-center gap-2 text-xs font-400 ${f ? 'text-[#2D4059]/70' : 'text-[#2D4059]/25'}`}>
                    {f
                      ? <FaCheckCircle size={12} style={{ color: plan.color }} className="flex-shrink-0" />
                      : <FaTimes size={12} className="text-[#2D4059]/20 flex-shrink-0" />}
                    {f || 'Not included'}
                  </li>
                ))}
              </ul>
              <motion.button whileHover={!plan.disabled ? { scale: 1.03 } : {}} whileTap={!plan.disabled ? { scale: 0.97 } : {}}
                disabled={plan.disabled}
                onClick={() => !plan.disabled && navigate('/dashboard')}
                className={`w-full py-2.5 rounded-2xl text-sm font-700 flex items-center justify-center gap-2 transition-all ${
                  plan.disabled ? 'bg-[#2D4059]/8 text-[#2D4059]/40 cursor-default' :
                  plan.highlight ? 'btn-gradient text-white shadow-md' :
                  'border-2 text-[#2D4059] hover:bg-[#2D4059]/5'
                }`}
                style={!plan.disabled && !plan.highlight ? { borderColor: `${plan.color}60` } : {}}>
                {plan.cta} {!plan.disabled && <FaArrowRight size={12} />}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Comparison table */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
          className="glass rounded-3xl overflow-hidden">
          <div className="p-5 border-b border-[#2D4059]/8">
            <h3 className="font-700 text-[#2D4059] text-base">Feature Comparison</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#2D4059]/8">
                  <th className="text-left px-5 py-3 text-xs font-700 text-[#2D4059]/50 uppercase tracking-wider">Feature</th>
                  {['Free', 'Premium', 'School', 'Institution'].map(p => (
                    <th key={p} className="text-center px-4 py-3 text-xs font-700 text-[#2D4059]">{p}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableFeatures.map((row, i) => (
                  <tr key={row.label} className={`border-b border-[#2D4059]/5 ${i % 2 === 0 ? 'bg-[#2D4059]/2' : ''}`}>
                    <td className="px-5 py-3 text-sm text-[#2D4059]/70 font-400">{row.label}</td>
                    {[row.free, row.premium, row.school, row.institution].map((val, vi) => (
                      <td key={vi} className="text-center px-4 py-3">
                        {typeof val === 'boolean'
                          ? val
                            ? <FaCheckCircle className="text-[#6BCB77] mx-auto" size={15} />
                            : <FaTimes className="text-[#2D4059]/20 mx-auto" size={13} />
                          : <span className="text-xs font-600 text-[#2D4059]">{val}</span>}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Trust badge */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-6 flex-wrap text-xs text-[#2D4059]/50 font-400">
          <span className="flex items-center gap-1.5"><FaShieldAlt className="text-[#6BCB77]" size={13} /> Secure payment</span>
          <span className="flex items-center gap-1.5"><FaCheckCircle className="text-[#6BCB77]" size={13} /> Cancel anytime</span>
          <span className="flex items-center gap-1.5"><FaInfinity className="text-[#FF6B6B]" size={13} /> Instant access</span>
        </motion.div>
      </div>
    </AppShell>
  )
}
