//features
import WishLink from '@/components/wishes/wish-link'

//types
import { WishLinksProps } from '@/components/wishes/wish-types'

export default function WishListing({ allWishes }: WishLinksProps) {
  return (
    <section>
      {allWishes.map((wishLink) => (
        <WishLink
          key={wishLink.slug}
          title={wishLink.title}
          slug={wishLink.slug}
        />
      ))}
    </section>
  )
}