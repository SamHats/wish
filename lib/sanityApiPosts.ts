import { sanityClient } from '@/lib/sanity.server'

export async function getPostWithSlug() {
  const data = await sanityClient.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

const postFields = `
  name,
  title,
  date,
  body,
  'slug': slug.current,
  'author': author->{name, 'picture': picture.asset->url},
`

export async function getPost(slug: string) {
  const [post] = await Promise.all([
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] | order(_updatedAt desc) {
        ${postFields}
        content,
      }`,
        { slug }
      )
      .then((res) => res?.[0]),
  ])
  return { post }
}
