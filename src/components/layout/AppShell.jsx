import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FaTachometerAlt, FaBook, FaChalkboardTeacher, FaCreditCard,
  FaUser, FaCog, FaBars, FaTimes, FaBell, FaRocket,
  FaSignOutAlt, FaChartLine
} from 'react-icons/fa'
import Logo from '../ui/Logo'

const navItems = [
  { icon: FaTachometerAlt, label: 'Dashboard', path: '/dashboard' },
  { icon: FaBook, label: 'Subjects', path: '/subjects' },
  { icon: FaChalkboardTeacher, label: 'Tutors', path: '/tutors-app' },
  { icon: FaChartLine, label: 'Progress', path: '/dashboard' },
  { icon: FaCreditCard, label: 'Subscription', path: '/subscription' },
  { icon: FaUser, label: 'Profile', path: '/profile' },
  { icon: FaCog, label: 'Settings', path: '/profile' },
]

function NavItem({ item, collapsed, onClick }) {
  const location = useLocation()
  const active = location.pathname === item.path
  const Icon = item.icon

  return (
    <Link
      to={item.path}
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group relative ${
        active
          ? 'bg-[#FF6B6B] text-white shadow-md'
          : 'text-[#2D4059]/60 hover:bg-[#2D4059]/6 hover:text-[#2D4059]'
      }`}
    >
      <Icon size={17} className="flex-shrink-0" />
      <AnimatePresence>
        {!collapsed && (
          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: 'auto' }}
            exit={{ opacity: 0, width: 0 }}
            className="text-sm font-500 whitespace-nowrap overflow-hidden"
          >
            {item.label}
          </motion.span>
        )}
      </AnimatePresence>
      {active && <span className="absolute right-3 w-1.5 h-1.5 rounded-full bg-white/70" />}
    </Link>
  )
}

export default function AppShell({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#FDF8F0' }}>
      {/* Sidebar — desktop */}
      <motion.aside
        animate={{ width: collapsed ? 72 : 240 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="hidden md:flex flex-col h-full bg-white/80 backdrop-blur-xl border-r border-[#2D4059]/8 flex-shrink-0 overflow-hidden shadow-sm"
      >
        {/* Logo area */}
        <div className="flex items-center justify-between px-4 py-5 border-b border-[#2D4059]/8">
          {!collapsed && <Logo size="sm" />}
          {collapsed && (
            <span className="bg-[#FF6B6B] text-white rounded-xl p-1.5 mx-auto">
              <FaRocket size={14} />
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`text-[#2D4059]/40 hover:text-[#FF6B6B] transition-colors ${collapsed ? 'mx-auto' : ''}`}
          >
            {collapsed ? <FaBars size={15} /> : <FaTimes size={15} />}
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 px-3 py-4 flex flex-col gap-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavItem key={item.label} item={item} collapsed={collapsed} />
          ))}
        </nav>

        {/* User info + logout */}
        <div className="border-t border-[#2D4059]/8 p-3">
          <div className={`flex items-center gap-3 p-2 rounded-xl ${collapsed ? 'justify-center' : ''}`}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#FF9A3C] flex items-center justify-center text-white text-xs font-700 flex-shrink-0">
              JD
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-xs font-600 text-[#2D4059] truncate">John Doe</p>
                <p className="text-xs text-[#2D4059]/45 truncate">Free Plan</p>
              </div>
            )}
          </div>
          <button
            onClick={() => navigate('/')}
            className={`flex items-center gap-2 w-full mt-2 px-3 py-2 rounded-xl text-[#2D4059]/50 hover:text-[#FF6B6B] hover:bg-[#FF6B6B]/8 transition-all duration-200 text-xs font-500 ${collapsed ? 'justify-center' : ''}`}
          >
            <FaSignOutAlt size={13} />
            {!collapsed && 'Sign out'}
          </button>
        </div>
      </motion.aside>

      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/30 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="fixed left-0 top-0 bottom-0 w-64 bg-white z-50 md:hidden flex flex-col shadow-2xl"
            >
              <div className="flex items-center justify-between px-5 py-5 border-b border-[#2D4059]/8">
                <Logo size="sm" />
                <button onClick={() => setMobileOpen(false)} className="text-[#2D4059]/50">
                  <FaTimes size={18} />
                </button>
              </div>
              <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
                {navItems.map((item) => (
                  <NavItem key={item.label} item={item} collapsed={false} onClick={() => setMobileOpen(false)} />
                ))}
              </nav>
              <div className="border-t border-[#2D4059]/8 p-3">
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 w-full px-3 py-2 rounded-xl text-[#2D4059]/50 hover:text-[#FF6B6B] text-xs font-500"
                >
                  <FaSignOutAlt size={13} /> Sign out
                </button>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar */}
        <header className="bg-white/70 backdrop-blur-xl border-b border-[#2D4059]/8 px-6 py-4 flex items-center justify-between flex-shrink-0">
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-[#2D4059]/60 hover:text-[#2D4059]"
          >
            <FaBars size={20} />
          </button>
          <div className="hidden md:block">
            <p className="text-base font-600 text-[#2D4059]">Welcome back, John</p>
            <p className="text-xs text-[#2D4059]/45">Keep up the great work today</p>
          </div>
          <div className="flex items-center gap-3 ml-auto">
            <div className="flex items-center gap-1.5 bg-[#6BCB77]/15 text-[#2D9442] text-xs font-600 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6BCB77] live-dot" />
              Free Plan
            </div>
            <button className="relative w-9 h-9 rounded-xl bg-[#2D4059]/6 flex items-center justify-center text-[#2D4059]/60 hover:bg-[#FF6B6B]/10 hover:text-[#FF6B6B] transition-all">
              <FaBell size={15} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#FF6B6B]" />
            </button>
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FF6B6B] to-[#FF9A3C] flex items-center justify-center text-white text-xs font-700">
              JD
            </div>
          </div>
        </header>

        {/* Scrollable page content */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
