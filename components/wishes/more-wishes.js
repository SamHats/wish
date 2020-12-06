import WishPreview from '@/components/wishes/wish-preview'

export default function MoreWishes({ wishes }) {
  return (
    <section>
      <div>
        {wishes.map((wish) => (
          <WishPreview
            key={wish.slug}
            title={wish.title}
            coverImage={wish.coverImage}
            date={wish.date}
            author={wish.author}
            slug={wish.slug}
            excerpt={wish.excerpt}
          />
        ))}
      </div>
    </section>
  )
}