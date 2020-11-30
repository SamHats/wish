export default function Wish({ wish }) {
  const linkName = wish.name
  const linkSrc = wish.link
  return (
    <li>🎁 <a href={linkSrc} target="_blank" rel="noopener">{linkName}</a></li>
  )
}