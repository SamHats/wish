//features
import IntroTitle from '@/components/intro/intro-title'
import IntroSub from '@/components/intro/intro-sub'

type props = {
  author: { name: string }
}

export default function PostHeader({ author }: props) {
  return (
    <>
      <IntroTitle>{author.name}'s Wishes</IntroTitle>
      <IntroSub>Wishes</IntroSub>
    </>
  )
}