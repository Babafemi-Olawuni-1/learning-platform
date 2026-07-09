import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaArrowRight, FaCheckCircle } from 'react-icons/fa'
import { Input, PasswordInput, Select } from '../components/ui/Input'
import { BtnPrimary } from '../components/ui/Button'
import Logo from '../components/ui/Logo'
import PageWrapper from '../components/ui/PageWrapper'
import { EXAMS } from '../utils/constants'

const perks = ['20 free questions per subject', 'AI performance analysis', 'Instant auto-grading', 'Access to tutors']

export default function RegisterPage() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirm: '', exam: '', terms: false })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Full name is required'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) e.email = 'Enter a valid email address'
    if (!form.phone.trim()) e.phone = 'Phone number is required'
    if (form.password.length < 8) e.password = 'Password must be at least 8 characters'
    if (!/[A-Z]/.test(form.password)) e.password = 'Must include at least one uppercase letter'
    if (!/[0-9]/.test(form.password)) e.password = 'Must include at least one number'
    if (form.password !== form.confirm) e.confirm = 'Passwords do not match'
    if (!form.exam) e.exam = 'Please select your exam type'
    if (!form.terms) e.terms = 'You must accept the terms'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length) { setErrors(e2); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); navigate('/verify-email') }, 1200)
  }

  return (
    <PageWrapper>
      {/* Blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute w-[400px] h-[400px] bg-[#FF6B6B]/15 -top-20 -right-20" />
        <div className="blob absolute w-[300px] h-[300px] bg-[#6BCB77]/12 bottom-0 left-0" style={{ animationDelay: '4s' }} />
      </div>

      <div className="min-h-screen flex relative z-10">
        {/* Left panel */}
        <div className="hidden lg:flex flex-col justify-between w-[420px] flex-shrink-0 bg-gradient-to-br from-[#2D4059] to-[#1a2d45] p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-60 h-60 rounded-full bg-[#FF6B6B]/15 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#6BCB77]/10 blur-2xl" />
          <div className="relative z-10">
            <Logo dark />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-700 text-white mb-3 leading-snug">Start your journey to better scores</h2>
            <p className="text-white/60 text-sm font-400 leading-relaxed mb-8">Join 12,000+ students already using Learn Booster to ace Cambridge, JAMB, WAEC and more.</p>
            <ul className="space-y-3">
              {perks.map(p => (
                <li key={p} className="flex items-center gap-3 text-sm text-white/80">
                  <FaCheckCircle className="text-[#6BCB77] flex-shrink-0" size={14} /> {p}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-white/30 text-xs relative z-10">No credit card required to start.</p>
        </div>

        {/* Form */}
        <div className="flex-1 flex items-center justify-center px-6 py-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="w-full max-w-md">
            <div className="lg:hidden mb-8"><Logo /></div>
            <div className="mb-8">
              <h1 className="text-3xl font-700 text-[#2D4059] mb-2">Create your account</h1>
              <p className="text-[#2D4059]/55 text-sm font-400">Free to start — no card needed.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input label="Full Name" placeholder="John Doe" value={form.name} onChange={e => set('name', e.target.value)} error={errors.name} icon={FaUser} required />
              <Input label="Email Address" type="email" placeholder="john@email.com" value={form.email} onChange={e => set('email', e.target.value)} error={errors.email} icon={FaEnvelope} required />
              <Input label="Phone Number" type="tel" placeholder="+234 800 000 0000" value={form.phone} onChange={e => set('phone', e.target.value)} error={errors.phone} icon={FaPhone} required />
              <Select label="Select Exam Type" value={form.exam} onChange={e => set('exam', e.target.value)} options={EXAMS} error={errors.exam} required />
              <PasswordInput label="Password" placeholder="Min. 8 chars, 1 number, 1 uppercase" value={form.password} onChange={e => set('password', e.target.value)} error={errors.password} required />
              <PasswordInput label="Confirm Password" placeholder="Re-enter your password" value={form.confirm} onChange={e => set('confirm', e.target.value)} error={errors.confirm} required />

              <label className="flex items-start gap-3 cursor-pointer">
                <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${form.terms ? 'bg-[#FF6B6B] border-[#FF6B6B]' : 'border-[#2D4059]/25'}`}
                  onClick={() => set('terms', !form.terms)}>
                  {form.terms && <FaCheckCircle className="text-white" size={11} />}
                </div>
                <span className="text-xs text-[#2D4059]/65 font-400 leading-relaxed">
                  I agree to the <a href="#" className="text-[#FF6B6B] hover:underline">Terms of Service</a> and <a href="#" className="text-[#FF6B6B] hover:underline">Privacy Policy</a>
                </span>
              </label>
              {errors.terms && <p className="text-xs text-red-500">{errors.terms}</p>}

              <BtnPrimary type="submit" fullWidth disabled={loading} className="py-3.5 rounded-2xl text-base mt-2">
                {loading ? (
                  <span className="flex items-center gap-2"><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Creating account…</span>
                ) : (<>Create Account <FaArrowRight size={14} /></>)}
              </BtnPrimary>
            </form>

            <p className="text-center text-sm text-[#2D4059]/55 mt-6 font-400">
              Already have an account?{' '}
              <Link to="/login" className="text-[#FF6B6B] font-600 hover:underline">Sign in</Link>
            </p>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  )
}
