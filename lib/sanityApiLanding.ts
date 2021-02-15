import { sanityClient } from '@/lib/sanity.server'

const landingFields = `
  title,
  summary,
  body,
  'slug': slug.current,
`

export async function getLanding(slug: string) {
  const [landing] = await Promise.all([
    sanityClient
      .fetch(
        `*[_type == "landing"] {${landingFields}}`,
        { slug }
      )
      .then((res) => res?.[0]),
  ])
  return { landing }
}
