//routing
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

//layout
import Layout from '@/components/layout'
import Container from '@/components/container'

//features
import IntroTitle from '@/components/intro/intro-title'
import IntroSub from '@/components/intro/intro-sub'
import Wishes from '@/components/wishes/wishes'

//utilities
import { getClient, sanityClient } from '@/lib/sanity.server'
import { wishQuery, wishIdQuery } from '@/lib/wishQueries'

//types
import { WishObjectProps } from '@/types/wish'

export default function Post({ wish }: WishObjectProps) {
  const router = useRouter()
  if (!router.isFallback && !wish.id) {
    return <ErrorPage statusCode={404} />
  }
  const wishContainerStyle = "p-8 bg-yellow-100"
  return (
    <Layout>
      <Container>
        {router.isFallback ? (
          <p>Loading…</p>
        ) : (
          <>
            <article>
              <Head>
                <title>{wish.title}</title>
              </Head>
              <IntroTitle>{wish.title}</IntroTitle>
              <IntroSub>Wish List</IntroSub>
              <section className={wishContainerStyle}>
                <Wishes wishes={wish.wishItems} />
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
    id: string
  }
}
export async function getStaticProps({ params }: Params) {
  const wish = await getClient().fetch(wishQuery, {
    id: params.id,
  })
  return {
    props: { wish },
  }
}

export async function getStaticPaths() {
  const wishLists = await sanityClient.fetch(wishIdQuery)
  return {
    paths: wishLists.map((id: string) => ({ params: { id } })),
    fallback: true,
  }
}
