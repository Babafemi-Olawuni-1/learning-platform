import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaEnvelope, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { Input, PasswordInput } from '../components/ui/Input'
import { BtnPrimary } from '../components/ui/Button'
import Logo from '../components/ui/Logo'
import PageWrapper from '../components/ui/PageWrapper'

const benefits = ['Unlimited adaptive quizzes', 'AI performance insights', 'Live & recorded tutor sessions', 'Cambridge, JAMB, WAEC & NECO']

export default function LoginPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '', remember: false })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = {}
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errs.email = 'Enter a valid email'
    if (!form.password) errs.password = 'Password is required'
    if (Object.keys(errs).length) { setErrors(errs); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); navigate('/dashboard') }, 1000)
  }

  return (
    <PageWrapper>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute w-[500px] h-[500px] bg-[#FFD93D]/12 -top-32 -right-32" />
        <div className="blob absolute w-[350px] h-[350px] bg-[#FF6B6B]/12 bottom-0 -left-20" style={{ animationDelay: '5s' }} />
      </div>

      <div className="min-h-screen flex relative z-10">
        {/* Left panel */}
        <div className="hidden lg:flex flex-col justify-between w-[420px] flex-shrink-0 bg-gradient-to-br from-[#FF6B6B] to-[#FF9A3C] p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#FFD93D]/20 blur-2xl" />
          <div className="relative z-10"><Logo dark /></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-700 text-white mb-3 leading-snug">Welcome back, champion</h2>
            <p className="text-white/75 text-sm font-400 leading-relaxed mb-8">Pick up right where you left off. Your progress is waiting.</p>
            <ul className="space-y-3">
              {benefits.map(b => (
                <li key={b} className="flex items-center gap-3 text-sm text-white/90">
                  <FaCheckCircle className="text-white/70 flex-shrink-0" size={14} /> {b}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-white/40 text-xs relative z-10">Trusted by 12,000+ students.</p>
        </div>

        {/* Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="w-full max-w-md">
            <div className="lg:hidden mb-8"><Logo /></div>
            <div className="mb-8">
              <h1 className="text-3xl font-700 text-[#2D4059] mb-2">Sign in to Learn Booster</h1>
              <p className="text-[#2D4059]/55 text-sm font-400">Continue your learning streak today.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Email Address" type="email" placeholder="john@email.com" value={form.email} onChange={e => set('email', e.target.value)} error={errors.email} icon={FaEnvelope} required />
              <PasswordInput label="Password" placeholder="Your password" value={form.password} onChange={e => set('password', e.target.value)} error={errors.password} required />

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${form.remember ? 'bg-[#FF6B6B] border-[#FF6B6B]' : 'border-[#2D4059]/25'}`}
                    onClick={() => set('remember', !form.remember)}>
                    {form.remember && <FaCheckCircle className="text-white" size={11} />}
                  </div>
                  <span className="text-sm text-[#2D4059]/65 font-400">Remember me</span>
                </label>
                <Link to="/forgot-password" className="text-sm text-[#FF6B6B] font-500 hover:underline">Forgot password?</Link>
              </div>

              <BtnPrimary type="submit" fullWidth disabled={loading} className="py-3.5 rounded-2xl text-base mt-2">
                {loading
                  ? <span className="flex items-center gap-2"><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Signing in…</span>
                  : <><span>Sign In</span> <FaArrowRight size={14} /></>}
              </BtnPrimary>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-[#2D4059]/10" /></div>
              <div className="relative flex justify-center"><span className="bg-[#FDF8F0] px-3 text-xs text-[#2D4059]/40 font-500">or continue with</span></div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {['Google', 'Facebook'].map(provider => (
                <motion.button key={provider} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                  className="glass border border-[#2D4059]/12 rounded-2xl py-3 text-sm font-600 text-[#2D4059] flex items-center justify-center gap-2 hover:border-[#2D4059]/25 transition-all">
                  {provider}
                </motion.button>
              ))}
            </div>

            <p className="text-center text-sm text-[#2D4059]/55 font-400">
              Don't have an account?{' '}
              <Link to="/register" className="text-[#FF6B6B] font-600 hover:underline">Sign up free</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
