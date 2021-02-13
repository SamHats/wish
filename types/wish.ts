export interface WishProps {
  title: string,
  slug: string,
  id: string,
  wishItems: [],
}

export interface WishObjectProps {
  wish: WishProps,
}

export interface WishListsProps {
  wishLists: WishProps[]
}

export interface WishItemProps {
  link: string,
  name: string,
}

export interface WishItemsProps {
  wishes: WishItemProps[],
}

export interface WishLinkProps {
  id: string,
  title: string,
}

export interface WishLinksProps {
  wishLists: WishLinkProps[],
}
