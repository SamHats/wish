import React, { Children } from 'react'

//features
import { useRouter } from 'next/router'
import Link from 'next/link'

//types
import { NavLinkProps } from './nav-types'

export default function NavLink({children, activeClassName, href, ...props }: NavLinkProps) {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child?.props.className || ''

  let className = null
  if (asPath === href) {
    className = `${childClassName} ${activeClassName}`.trim()
  } else className = childClassName

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {className})}
    </Link>
  )
}