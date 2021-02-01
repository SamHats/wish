import client from './sanity'

const getClient = () => (client)

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
