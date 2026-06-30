import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaRocket, FaBars, FaTimes } from 'react-icons/fa'

const links = ['Features', 'Tutors', 'Pricing']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-lg py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="bg-[#FF6B6B] text-white rounded-xl p-2 transition-transform duration-300 group-hover:rotate-12">
            <FaRocket size={18} />
          </span>
          <span className="text-xl font-700 text-[#2D4059] tracking-tight">
            Ayene<span className="text-[#FF6B6B]">Learn</span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="nav-link text-[#2D4059] font-500 text-sm hover:text-[#FF6B6B] transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Live badge */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 bg-[#6BCB77]/15 text-[#2D9442] text-xs font-600 px-3 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#6BCB77] live-dot inline-block" />
            2,340 online
          </div>
          <motion.a
            href="#signup"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gradient text-white font-600 text-sm px-5 py-2.5 rounded-full shadow-md"
          >
            Get Started
          </motion.a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#2D4059] hover:text-[#FF6B6B] transition-colors"
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass border-t border-white/40 overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-[#2D4059] font-500 text-base hover:text-[#FF6B6B] transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="#signup"
                className="btn-gradient text-white font-600 text-sm px-5 py-3 rounded-full text-center shadow-md"
                onClick={() => setMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
