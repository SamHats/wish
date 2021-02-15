export interface PostProps {
  title: string,
  slug: string,
  id?: string,
}

export interface PostsProps {
  posts: PostProps[]
}
