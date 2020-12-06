import Link from 'next/link'

export default function WishPreview({
  title,
  slug,
}) {
  return (
    <div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/wishes/${slug}`} href="/wishes/[slug]">
          <a className="bg-blue-100 text-blue-700 text-base font-semibold px-6 py-2 rounded-lg cursor-pointer">{title}</a>
        </Link>
      </h3>
    </div>
  )
}