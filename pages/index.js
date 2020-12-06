//Layout
import Layout from '@/components/layout'
import Container from '@/components/container'

// Features
import IntroTitle from '@/components/intro/intro-title'
import IntroSub from '@/components/intro/intro-sub'

// Utils
import Head from 'next/head'
import { CMS_NAME } from '@/lib/constants'
import Link from 'next/link'

export default function Index() {
  return (
    <>
      <Layout>
        <Head>
          <title>{CMS_NAME}</title>
        </Head>
      <Container>
          <IntroTitle>Sam.</IntroTitle>
          <IntroSub>A statically generated site using{' '}
          <a href="https://nextjs.org/" className="underline hover:text-success duration-200 transition-colors">Next.js</a>{' '}
          and styled with{' '}
          <a href="https://tailwindcss.com" className="underline hover:text-success duration-200 transition-colors">Tailwind css</a>
          </IntroSub>
          <Link href="/wishes"><a className="bg-blue-100 text-blue-700 text-base font-semibold px-6 py-2 rounded-lg cursor-pointer">Wishes</a></Link>
        </Container>
      </Layout>
    </>
  )
}