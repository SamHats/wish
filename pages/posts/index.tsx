// Layout
import Container from '@/components/container'
import Layout from '@/components/layout'
import Head from 'next/head'

// Features
import IntroTitle from '@/components/intro/intro-title'
import IntroSub from '@/components/intro/intro-sub'
import PostListing from '@/components/posts/post-listing'

// Utilities
import { getClient } from '@/lib/sanity.server'
import { postsQuery } from '@/lib/postQueries'

//types
import { PostsProps } from '@/types/post'

export default function Index({ posts }: PostsProps) {
  return (
    <Layout>
      <Head>
        <title>Posts</title>
      </Head>
      <Container>
        <IntroTitle>Posts</IntroTitle>
        <IntroSub>Some stuff I'll never post about</IntroSub>
        {posts?.length > 0 && <PostListing posts={posts} />}
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = await getClient().fetch(postsQuery)
  return {
    props: { posts }
  }
}
