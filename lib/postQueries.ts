const postFields = `
  "id": _id,
  "slug": slug.current,
  title,
`

export const postsQuery = `
*[_type == "post"] {
  ${postFields}
}`

export const postQuery = `
*[_type == "post" && _id == $id][0] {
  wishItems,
  "author": author._ref,
  ${postFields}
}`
