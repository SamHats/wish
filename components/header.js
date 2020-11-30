import { SITE_NAME } from '@/lib/constants'
import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-10">
      <Link href="/">
        <a className="hover:underline">{SITE_NAME}</a>
      </Link>
    </h2>
  )
}