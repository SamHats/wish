const wishFields = `
  "id": _id,
  "slug": slug.current,
  title,
`

export const wishListsQuery = `
*[_type == "wishList"] {
  ${wishFields}
}`

export const wishQuery = `
*[_type == "wishList" && _id == $id][0] {
  wishItems,
  "author": author._ref,
  ${wishFields}
}`

export const wishIdQuery = `
*[_type == "wishList" && defined(_id)][]._id
`
