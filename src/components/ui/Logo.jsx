import { Link } from 'react-router-dom'
import { FaRocket } from 'react-icons/fa'

export default function Logo({ dark = false, size = 'md' }) {
  const textSize = size === 'sm' ? 'text-base' : 'text-xl'
  const iconSize = size === 'sm' ? 14 : 18
  const iconPad = size === 'sm' ? 'p-1.5' : 'p-2'

  return (
    <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
      <span className={`bg-[#FF6B6B] text-white rounded-xl ${iconPad} transition-transform duration-300 group-hover:rotate-12`}>
        <FaRocket size={iconSize} />
      </span>
      <span className={`${textSize} font-700 ${dark ? 'text-white' : 'text-[#2D4059]'} tracking-tight`}>
        Learn <span className="text-[#FF6B6B]">Booster</span>
      </span>
    </Link>
  )
}
