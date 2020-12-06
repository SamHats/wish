export default function WishBody({ content }) {
  return (
    <div>
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="prose text-yellow-600"
      />
    </div>
  )
}