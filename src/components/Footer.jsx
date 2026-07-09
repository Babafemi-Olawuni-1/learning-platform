import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaTwitter, FaInstagram, FaYoutube, FaArrowRight } from 'react-icons/fa'
import Logo from './ui/Logo'

const footerLinks = {
  Product: ['Features', 'Pricing', 'Tutors', 'How it works'],
  Exams: ['Cambridge A-Level', 'JAMB UTME', 'WAEC', 'NECO'],
  Company: ['About', 'Blog', 'Careers', 'Press'],
  Support: ['Help Center', 'Contact', 'Privacy Policy', 'Terms'],
}

const socials = [
  { icon: FaTwitter, label: 'Twitter', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' },
  { icon: FaYoutube, label: 'YouTube', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#2D4059] text-white">
      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-14 block" fill="#FDF8F0">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="mb-4"><Logo dark /></div>
            <p className="text-white/55 text-sm font-400 leading-relaxed max-w-xs mb-6">
              Adaptive exam prep for Cambridge, JAMB, WAEC, and beyond. Built to make studying actually work.
            </p>
            <div className="flex gap-2">
              <input type="email" placeholder="your@email.com"
                className="bg-white/10 border border-white/15 text-white placeholder-white/30 text-sm px-4 py-2.5 rounded-xl outline-none focus:border-[#FF6B6B] transition-colors w-full max-w-[180px]" />
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                className="bg-[#FF6B6B] text-white px-4 py-2.5 rounded-xl text-sm font-600 flex items-center gap-1.5 transition-all hover:shadow-lg">
                Join <FaArrowRight size={11} />
              </motion.button>
            </div>
            <p className="text-white/30 text-xs mt-2">Get study tips, free resources & updates.</p>
          </div>
          {Object.entries(footerLinks).map(([heading, items]) => (
            <div key={heading}>
              <h4 className="text-sm font-700 text-white/80 uppercase tracking-widest mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-white/50 text-sm font-400 hover:text-[#FFD93D] transition-colors duration-200">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Learn Booster. All rights reserved. Built with love for students worldwide.
          </p>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <motion.a key={label} href={href} aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }} whileTap={{ scale: 0.92 }}
                className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-[#FF6B6B] transition-colors duration-200">
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
