// Routing
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

// Layout
import Layout from '@/components/layout'
import Container from '@/components/container'

// Features
import PostHeader from '@/components/wishes/wish-header'
import PostTitle from '@/components/wishes/wish-title'
import Wishes from '@/components/wishes/wishes'

// Utilities
import { getPostBySlug, getAllPosts } from '@/lib/api'
import markdownToHtml from '@/lib/markdownToHtml'

// Types
import { GetStaticPaths, GetStaticProps } from 'next'
import { wishPostProps } from '@/components/wishes/wish-types'

export default function Post({ wishPost }: wishPostProps) {
  const router = useRouter()
  if (!router.isFallback && !wishPost?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{wishPost.title}</title>
                {wishPost.ogImage && <meta property="og:image" content={wishPost.ogImage.url} />}
              </Head>
              <PostHeader author={wishPost.author} />
              <Wishes wishes={wishPost.wishes} content={wishPost.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type PageProps = {
  params: {
    slug: string
  }
}
export const getStaticProps = async ({params}: PageProps & GetStaticProps) => {
  const wishPost = getPostBySlug(params.slug, [
    'title',
    'slug',
    'author',
    'content',
    'ogImage',
    'wishes'
  ])
  const content = await markdownToHtml(wishPost.content || '')
  return {
    props: {
      wishPost: {
        ...wishPost,
        content,
      },
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}