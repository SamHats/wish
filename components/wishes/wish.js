export default function Wish({ wish }) {
  const linkName = wish.name
  const linkSrc = wish.link
  return (
    <li className="text-yellow-700 text-base font-semibold px-6 py-2 border-b border-yellow-200 cursor-pointer">
      <a href={linkSrc} target="_blank" rel="noopener">🎁 {linkName}</a>
    </li>
  )
}