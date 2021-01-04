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
import WishBody from '@/components/wishes/wish-body'

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
  const wishContainerStyle = "p-8 bg-yellow-100"
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
              <section className={wishContainerStyle}>
                <Wishes wishes={wishPost.wishes} />
                <WishBody content={wishPost.content} />
              </section>
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

type Params = {
  params: {
    slug: string
  }
}
export const getStaticProps = async ({ params }: Params & GetStaticProps) => {
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
  const wishes = getAllPosts(['slug'])
  return {
    paths: wishes.map((wishes) => {
      return {
        params: {
          slug: wishes.slug,
        },
      }
    }),
    fallback: false,
  }
}