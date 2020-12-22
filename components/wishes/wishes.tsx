//features
import Wish from '@/components/wishes/wish'
import WishBody from '@/components/wishes/wish-body'

//types
import { WishesProps, ContentProps } from './wish-types'

export default function Wishes({ wishes, content }: WishesProps & ContentProps) {
  if (!wishes) return null
  return (
      <div className="p-8 bg-yellow-100">
        <ul className="grid grid-rows-1 gap-4 rounded-lg mb-3">
          {wishes.map((wish, i) => <Wish link={wish.link} name={wish.name} key={i} />)}
        </ul>
        <WishBody content={content} />
      </div>
  )
}