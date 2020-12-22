//types
type props = {
  children: React.ReactNode
}

export default function IntroSub({children}: props) {
  return (
      <h2 className="text-2xl text-center mb-8 text-gray-500">
        {children}
      </h2>
  )
}