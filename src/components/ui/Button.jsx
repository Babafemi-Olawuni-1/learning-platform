import { motion } from 'framer-motion'

export function BtnPrimary({ children, onClick, type = 'button', disabled = false, className = '', fullWidth = false }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.03 } : {}}
      whileTap={!disabled ? { scale: 0.97 } : {}}
      className={`btn-gradient text-white font-600 px-6 py-3 rounded-2xl shadow-md flex items-center justify-center gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.button>
  )
}

export function BtnOutline({ children, onClick, type = 'button', className = '', fullWidth = false }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`btn-outline text-[#2D4059] font-600 px-6 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all duration-200 ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.button>
  )
}

export function BtnGhost({ children, onClick, type = 'button', className = '' }) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`text-[#2D4059] font-500 px-4 py-2 rounded-xl hover:bg-[#2D4059]/8 transition-all duration-200 flex items-center gap-2 ${className}`}
    >
      {children}
    </motion.button>
  )
}
