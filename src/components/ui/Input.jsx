import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

export function Input({ label, type = 'text', placeholder, value, onChange, error, icon: Icon, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-600 text-[#2D4059]">
          {label} {required && <span className="text-[#FF6B6B]">*</span>}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2D4059]/40">
            <Icon size={16} />
          </span>
        )}
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-white/70 border rounded-xl px-4 py-3 text-sm text-[#2D4059] placeholder-[#2D4059]/35 outline-none transition-all duration-200 focus:border-[#FF6B6B] focus:shadow-[0_0_0_3px_rgba(255,107,107,0.12)] ${Icon ? 'pl-10' : ''} ${error ? 'border-red-400 bg-red-50/30' : 'border-[#2D4059]/15'}`}
        />
      </div>
      {error && <p className="text-xs text-red-500 font-400">{error}</p>}
    </div>
  )
}

export function PasswordInput({ label, placeholder, value, onChange, error, required }) {
  const [show, setShow] = useState(false)
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-600 text-[#2D4059]">
          {label} {required && <span className="text-[#FF6B6B]">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={show ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-white/70 border rounded-xl px-4 py-3 pr-11 text-sm text-[#2D4059] placeholder-[#2D4059]/35 outline-none transition-all duration-200 focus:border-[#FF6B6B] focus:shadow-[0_0_0_3px_rgba(255,107,107,0.12)] ${error ? 'border-red-400 bg-red-50/30' : 'border-[#2D4059]/15'}`}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#2D4059]/40 hover:text-[#2D4059] transition-colors"
        >
          {show ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500 font-400">{error}</p>}
    </div>
  )
}

export function Select({ label, value, onChange, options, error, required }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-600 text-[#2D4059]">
          {label} {required && <span className="text-[#FF6B6B]">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        className={`w-full bg-white/70 border rounded-xl px-4 py-3 text-sm text-[#2D4059] outline-none transition-all duration-200 focus:border-[#FF6B6B] focus:shadow-[0_0_0_3px_rgba(255,107,107,0.12)] appearance-none cursor-pointer ${error ? 'border-red-400' : 'border-[#2D4059]/15'}`}
      >
        <option value="">Select an option</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
      {error && <p className="text-xs text-red-500 font-400">{error}</p>}
    </div>
  )
}
