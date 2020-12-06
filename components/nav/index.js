// Features
import NavItem from './nav-item'

// Utilities
import { NAV } from '@/lib/nav'

export default function Nav({className}) {
  return (
    <div className={className}>
      <ul className="inline-flex bg-white rounded-full shadow-lg p-2 mb-8">
        {NAV.map((item, i) => (
          <li key={i}><NavItem label={item.label} src={item.src} /></li>)
        )}
      </ul>
    </div>
  )
}