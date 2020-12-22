export type WishLinkProps = {
  title: string
  slug: string
}
export type WishLinksProps = {
  allWishes: WishLinkProps[]
}

export type WishProps = {
  link: string
  name: string
}
export type WishesProps = {
  wishes: WishProps[]
}

export type ContentProps = {
  content: string
}