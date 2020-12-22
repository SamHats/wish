//types
type props = {
  children: React.ReactNode
}

export default function IntroTitle({children}: props) {
  return (
      <h1 className="text-7xl font-bold text-center tracking-tighter leading-tight">
        {children}
      </h1>
  )
}