import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaEnvelopeOpen, FaArrowRight, FaRedo } from 'react-icons/fa'
import { BtnPrimary } from '../components/ui/Button'
import Logo from '../components/ui/Logo'
import PageWrapper from '../components/ui/PageWrapper'

export default function VerifyEmailPage() {
  const navigate = useNavigate()
  const [code, setCode] = useState(['', '', '', '', '', ''])
  const [loading, setLoading] = useState(false)
  const [resent, setResent] = useState(false)
  const inputs = useRef([])

  const handleChange = (i, val) => {
    if (!/^\d?$/.test(val)) return
    const next = [...code]
    next[i] = val
    setCode(next)
    if (val && i < 5) inputs.current[i + 1]?.focus()
  }

  const handleKeyDown = (i, e) => {
    if (e.key === 'Backspace' && !code[i] && i > 0) inputs.current[i - 1]?.focus()
  }

  const handleVerify = () => {
    if (code.join('').length < 6) return
    setLoading(true)
    setTimeout(() => { setLoading(false); navigate('/dashboard') }, 1200)
  }

  const handleResend = () => {
    setResent(true)
    setTimeout(() => setResent(false), 4000)
  }

  const filled = code.every(c => c !== '')

  return (
    <PageWrapper>
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="blob absolute w-[400px] h-[400px] bg-[#6BCB77]/15 -top-20 -left-20" />
        <div className="blob absolute w-[300px] h-[300px] bg-[#FFD93D]/12 bottom-0 right-0" style={{ animationDelay: '3s' }} />
      </div>

      <div className="min-h-screen flex items-center justify-center px-6 py-12 relative z-10">
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}
          className="w-full max-w-md">
          <div className="mb-8 flex justify-center"><Logo /></div>

          <div className="glass rounded-3xl p-10 shadow-2xl text-center">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.2 }}
              className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#6BCB77]/20 to-[#6BCB77]/5 flex items-center justify-center mx-auto mb-6">
              <FaEnvelopeOpen size={32} className="text-[#6BCB77]" />
            </motion.div>

            <h1 className="text-2xl font-700 text-[#2D4059] mb-2">Check your email</h1>
            <p className="text-[#2D4059]/55 text-sm font-400 leading-relaxed mb-8">
              We sent a 6-digit verification code to <span className="font-600 text-[#2D4059]">john@email.com</span>
            </p>

            <div className="flex items-center justify-center gap-3 mb-8">
              {code.map((digit, i) => (
                <input
                  key={i}
                  ref={el => inputs.current[i] = el}
                  type="text" inputMode="numeric" maxLength={1} value={digit}
                  onChange={e => handleChange(i, e.target.value)}
                  onKeyDown={e => handleKeyDown(i, e)}
                  className={`w-12 h-14 text-center text-xl font-700 rounded-2xl border-2 outline-none transition-all duration-200 ${
                    digit ? 'border-[#FF6B6B] bg-[#FF6B6B]/8 text-[#2D4059]' : 'border-[#2D4059]/15 bg-white/70 text-[#2D4059]'
                  } focus:border-[#FF6B6B] focus:shadow-[0_0_0_3px_rgba(255,107,107,0.12)]`}
                />
              ))}
            </div>

            <BtnPrimary fullWidth disabled={!filled || loading} onClick={handleVerify} className="py-3.5 rounded-2xl text-base mb-5">
              {loading
                ? <span className="flex items-center gap-2"><svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/></svg> Verifying…</span>
                : <><span>Verify Email</span> <FaArrowRight size={14} /></>}
            </BtnPrimary>

            <motion.button onClick={handleResend} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 mx-auto text-sm text-[#2D4059]/55 hover:text-[#FF6B6B] transition-colors font-500">
              <FaRedo size={12} className={resent ? 'text-[#6BCB77]' : ''} />
              {resent ? <span className="text-[#6BCB77]">Code sent!</span> : 'Resend code'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  )
}
