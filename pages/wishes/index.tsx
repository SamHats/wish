// Layout
import Container from '@/components/container'
import Layout from '@/components/layout'
import Head from 'next/head'

// Features
import IntroTitle from '@/components/intro/intro-title'
import IntroSub from '@/components/intro/intro-sub'
import WishListing from '@/components/wishes/wish-listing'

// Utilities
import { getClient } from '@/lib/sanity.server'
import { wishListsQuery } from '@/lib/wishQueries'

//types
import { WishListsProps } from '@/types/wish'

export default function Index({ wishLists }: WishListsProps) {
  return (
    <Layout>
      <Head>
        <title>Wishes</title>
      </Head>
      <Container>
        <IntroTitle>Wishes</IntroTitle>
        <IntroSub>A bunch of wishes</IntroSub>
        {wishLists?.length > 0 && <WishListing wishLists={wishLists} />}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const wishLists = await getClient().fetch(wishListsQuery)
  return {
    props: { wishLists }
  }
}
