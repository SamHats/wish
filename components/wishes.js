import Wish from '@/components/wish'

export default function Wishes({ wishes }) {
  if(!wishes && wishes.length === 1) return null
  return (
      <div className="mb-3">
        <h3 className="sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-orange-600 mb-3">Wishes</h3>
        <ul>
          {wishes.map((wish, i) => <Wish wish={wish} key={i} />)}
        </ul>
      </div>
  )
}