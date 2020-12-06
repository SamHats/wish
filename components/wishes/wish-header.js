import IntroTitle from '@/components/intro/intro-title'
import IntroSub from '@/components/intro/intro-sub'

export default function PostHeader({ author }) {
  return (
    <>
      <IntroTitle>{author.name}'s Wishes</IntroTitle>
      <IntroSub>Wishes</IntroSub>
    </>
  )
}