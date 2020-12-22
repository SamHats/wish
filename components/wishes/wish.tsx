//features
import { WishProps } from './wish-types'

export default function Wish({ link, name }: WishProps) {
  const itemStyle = "text-yellow-700 text-base font-semibold px-6 py-2 border-b border-yellow-200 cursor-pointer"

  return (
    <li className={itemStyle} >
      <a href={link} target="_blank" rel="noopener">🎁 {name}</a>
    </li>
  )
}