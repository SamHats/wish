type props = {
  children: React.ReactNode
}

export default function PostTitle({ children }: props) {
  const titleStyle = "text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left"

  return (
    <h1 className={titleStyle} >
      {children}
    </h1>
  )
}