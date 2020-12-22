export type WishLinkProps = {
  title: string
  slug: string
}
export type WishLinksProps = {
  allWishes: WishLinkProps[]
}

export type WishProps = {
  name: string
  link: string
}
export type WishesProps = {
  wishes: WishProps[]
}

export type ContentProps = {
  content: string
}

export type wishPostProps = {
  wishPost: {
    author: { name: string }
    title: string
    wishes: WishesProps
    content: string
    slug: string
    ogImage?: { url: string }
  }
}