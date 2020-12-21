//features
import NavLink from './nav-link'

//types
import { NavItemProps } from './navTypes'

export default function NavItem({label, src}: NavItemProps) {
  const linkStyle = 'block w-full relative px-4 py-1 leading-6 sm:text-xl font-semibold rounded-full'
  const activeStyle = 'bg-purple-200 text-purple-800'
  
  return (
    <NavLink href={src} activeClassName={activeStyle} >
      <a className={linkStyle}>
        {label}
      </a>
    </NavLink>
  )
}