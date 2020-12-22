// Layout
import Container from '@/components/container'
import Layout from '@/components/layout'
import Head from 'next/head'

// Features
import IntroTitle from '@/components/intro/intro-title'
import IntroSub from '@/components/intro/intro-sub'
import WishListing from '@/components/wishes/wish-listing'

// Utilities
import { getAllPosts } from '@/lib/api'

// Types
import { WishLinksProps } from '@/components/wishes/wish-types'

export default function Index({ allWishes }: WishLinksProps) {
  return (
    <>
      <Layout>
        <Head>
          <title>Wishes</title>
        </Head>
        <Container>
          <IntroTitle>Wishes</IntroTitle>
          <IntroSub>A bunch of wishes</IntroSub>
          {allWishes.length > 0 && <WishListing allWishes={allWishes} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allWishes = getAllPosts([
    'title',
    'slug',
  ])

  return {
    props: { allWishes },
  }
}