// Layout
import Container from '@/components/container'
import Layout from '@/components/layout'
import Head from 'next/head'

// Features
import IntroTitle from '@/components/intro/intro-title'
import IntroSub from '@/components/intro/intro-sub'
import MoreWishes from '@/components/wishes/more-wishes'

// Utilities
import { getAllPosts } from '@/lib/api'

// Types
import Wish from '@/types/wish'
type Props = {
  allWishes: Wish[]
}

export default function Index({ allWishes }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>Wishes</title>
        </Head>
        <Container>
          <IntroTitle>Wishes</IntroTitle>
          <IntroSub>A bunch of wishes</IntroSub>
          {allWishes.length > 0 && <MoreWishes wishes={allWishes} />}
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