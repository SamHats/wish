import client from './sanity'

const getClient = () => (client)

export async function getLandingWithSlug() {
  const data = await client.fetch(`*[_type == "landing"] {'slug': slug.current }`)
  return data
}

const landingFields = `
  title,
  summary,
  body,
  'slug': slug.current,
`

export async function getLanding(slug: string) {
  const curClient = getClient()
  const [landing] = await Promise.all([
    curClient
      .fetch(
        `*[_type == "landing"] {${landingFields}}`,
        { slug }
      )
      .then((res) => res?.[0]),
  ])
  return { landing }
}