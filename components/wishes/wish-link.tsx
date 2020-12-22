//features
import Link from 'next/link'

//types
import { WishLinkProps } from './wish-types'

export default function WishLink({ title, slug }: WishLinkProps) {
  const titleStyle = "text-3xl mb-3 leading-snug"
  const linkStyle = "bg-blue-100 text-blue-700 text-base font-semibold px-6 py-2 rounded-lg cursor-pointer"

  return (
    <div>
      <h3 className={titleStyle}>
        <Link as={`/wishes/${slug}`} href="/wishes/[slug]">
          <a className={linkStyle}>{title}</a>
        </Link>
      </h3>
    </div>
  )
}