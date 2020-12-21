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

export default function Post({ wish, preview }) {
  const router = useRouter()
  if (!router.isFallback && !wish?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>{wish.title}</title>
                <meta property="og:image" content={wish.ogImage.url} />
              </Head>
              <PostHeader
                title={wish.title}
                author={wish.author}
              />
              <Wishes wishes={wish.wishes} content={wish.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const wish = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'wishes'
  ])
  const content = await markdownToHtml(wish.content || '')

  return {
    props: {
      wish: {
        ...wish,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}