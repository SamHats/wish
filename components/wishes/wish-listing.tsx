//features
import WishLink from '@/components/wishes/wish-link'

//types
import { WishLinkProps, WishLinksProps } from '@/types/wish'

export default function WishListing({ wishLists }: WishLinksProps) {
  return (
    <section>
      {wishLists.map((wishLink: WishLinkProps) => (
        <WishLink
          key={wishLink.id}
          title={wishLink.title}
          id={`./wishes/${wishLink.id}`}
        />
      ))}
    </section>
  )
}
