import React, { Children } from 'react'
import { useRouter } from 'next/router'

//features
import Link from 'next/link'

import { NavLinkProps } from './navTypes'

export default function NavLink({children, activeClassName, href, ...props }: NavLinkProps) {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child?.props.className || ''

  const className =
    asPath === href ? `${childClassName} ${activeClassName}`.trim()
      : childClassName

  return (
    <Link href={href} {...props}>
      {React.cloneElement(child, {className: className || null})}
    </Link>
  )
}