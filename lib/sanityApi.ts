import client from './sanity'

const getClient = () => (client)

export async function getPostWithSlug() {
  const data = await client.fetch(`*[_type == "post"]{ 'slug': slug.current }`)
  return data
}

const postFields = `
  name,
  title,
  date,
  body,
  'slug': slug.current,
  'coverImage': coverImage.asset->url,
  'author': author->{name, 'picture': picture.asset->url},
`

export async function getPost(slug: string) {
  const curClient = getClient()
  const [post] = await Promise.all([
    curClient
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