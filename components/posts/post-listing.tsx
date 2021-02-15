//features
import PostLink from '@/components/posts/post-link'

//types
import { PostProps, PostsProps } from '@/types/post'

export default function PostListing({ posts }: PostsProps) {
  return (
    <section>
      {posts.map((post: PostProps) => (
        <PostLink
          key={post.id}
          title={post.title}
          slug={post.slug}
        />
      ))}
    </section>
  )
}
