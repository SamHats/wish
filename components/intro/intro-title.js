import { SITE_NAME } from '@/lib/constants'
export default function IntroTitle({children}) {
  return (
      <h1 className="text-7xl font-bold text-center tracking-tighter leading-tight">
        {children}
      </h1>
  )
}