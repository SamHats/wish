//features
import Link from 'next/link'

//types
import { WishLinkProps } from '@/types/wish'

export default function WishLink({ title, id }: WishLinkProps) {
  const titleStyle = "text-3xl mb-3 leading-snug"
  const linkStyle = "bg-blue-100 text-blue-700 text-base font-semibold px-6 py-2 rounded-lg cursor-pointer"

  return (
    <div className={titleStyle}>
      <Link href={`/${id}`}>
        <a className={linkStyle}>{title}</a>
      </Link>
    </div>
  )
}
