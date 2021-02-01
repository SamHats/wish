//routing
import { useRouter } from 'next/router'

//features
import ErrorPage from 'next/error'
import IntroTitle from '@/components/intro/intro-title'
import IntroSub from '@/components/intro/intro-sub'
const BlockContent = require('@sanity/block-content-to-react')

//layout
import Layout from '@/components/layout'
import Container from '@/components/container'

//utilites
import { getPostWithSlug, getPost } from '@/lib/sanityApiPosts'

type pageParams = {
  post: {
    slug: string,
    title: string,
    author: {
      name: string
    }
    body: [],
  },
}
export default function Post({ post }: pageParams) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <Layout>
      <Container>
        <IntroTitle>{post?.title}</IntroTitle>
        <IntroSub>{post?.author?.name}</IntroSub>
        <BlockContent blocks={post?.body} className="prose" />
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}
export async function getStaticProps({ params }: Params) {
  const data = await getPost(params.slug)
  return {
    props: {
      post: data?.post || null,
    },
  }
}
type pathParams = {
  post: {},
  slug: string
}
export async function getStaticPaths() {
  const allPosts = await getPostWithSlug()
  return {
    paths:
      allPosts?.map((post: pathParams) => ({
        params: {
          slug: post.slug,
        },
      })) || [],
    fallback: true,
  }
}
