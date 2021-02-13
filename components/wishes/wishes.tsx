//features
import Wish from '@/components/wishes/wish'

//types
import { WishItemProps, WishItemsProps } from '@/types/wish'

export default function Wishes({ wishes }: WishItemsProps) {
  if (!wishes) return null
  const wishListStyle = "grid grid-rows-1 gap-4 rounded-lg mb-3"

  return (
    <ul className={wishListStyle}>
      {wishes.map((wish: WishItemProps, i) => <Wish link={wish.link} name={wish.name} key={i} />)}
    </ul>
  )
}
