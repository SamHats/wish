type props = {
  content: string
}

export default function WishBody({ content }: props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: content }}
      className="prose text-yellow-600"
    />
  )
}