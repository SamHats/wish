//features
import Wish from '@/components/wishes/wish'

//types
import { WishesProps } from './wish-types'

export default function Wishes({ wishes }: WishesProps) {
  if (!wishes) return null
  const wishListStyle = "grid grid-rows-1 gap-4 rounded-lg mb-3"

  return (
    <ul className={wishListStyle}>
      {wishes.map((wish, i) => <Wish link={wish.link} name={wish.name} key={i} />)}
    </ul>
  )
}