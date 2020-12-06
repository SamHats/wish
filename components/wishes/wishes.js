import Wish from '@/components/wishes/wish'
import WishBody from '@/components/wishes/wish-body'

export default function Wishes({ wishes, content }) {
  if (!wishes && wishes.length === 1) return null
  return (
      <div className="p-8 bg-yellow-100">
        <ul className="grid grid-rows-1 gap-4 rounded-lg mb-3">
          {wishes.map((wish, i) => <Wish wish={wish} key={i} />)}
        </ul>
        <WishBody content={content} />
      </div>
  )
}