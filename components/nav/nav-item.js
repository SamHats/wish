// Features
import Link from 'next/link'

// Utilities
import { useRouter } from 'next/router'

export default function NavItem({label, src}) {
  const activeStyle = 'bg-purple-200 text-purple-800'

  const router = useRouter()
  let active = ''
  if (router.pathname === src.toLowerCase()) { active = activeStyle }

  return (
    <Link href={src}>
      <a className={`block w-full relative px-4 py-1 leading-6 sm:text-xl font-semibold rounded-full ${active}`}>{label}</a>
    </Link>
  )
}