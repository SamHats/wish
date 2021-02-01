//Layout
import Layout from '@/components/layout'
import Container from '@/components/container'

// Features
import IntroTitle from '@/components/intro/intro-title'
import BlockContent from '@sanity/block-content-to-react'

// Utils
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import { getLandingWithSlug, getLanding } from '@/lib/sanityApiLanding'

interface pageParams{
  landing: {
    slug: string,
    title: string,
    summary: [],
    body: [],
  },
}
export default function Index({ landing }: pageParams) {

  return (
    <Layout>
      <Head>
        <title>{CMS_NAME}</title>
      </Head>
      <Container>
        <IntroTitle>{landing.title}</IntroTitle>
        {landing.summary && 
          <h2 className="text-2xl text-center mb-8 text-gray-500">
            <BlockContent blocks={landing.summary} className="text-2xl text-center mb-8 text-gray-500"/>
          </h2>
        }
        {landing.body &&
          <p className="prose">
            <BlockContent blocks={landing.body} className="text-2xl text-center mb-8 text-gray-500"/>
          </p>
        }
      </Container>
    </Layout>
  )
}

export async function getStaticProps() {
  const data = await getLanding('/')
  return {
    props: {
      landing: data?.landing || null,
    },
  }
}

export async function getStaticPaths() {
  const landing = await getLandingWithSlug()
  return {
    paths:
      landing?.map(() => ({
        params: {
          slug: '/',
        },
      })) || [],
    fallback: true,
  }
}