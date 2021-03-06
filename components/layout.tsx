//features
import Meta from '@/components/meta'
import Nav from '@/components/nav'

//types
type props = {
  children: React.ReactNode
}

export default function Layout({children}: props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
        <div className="min-h-screen bg-hero-texture--topography bg-opacity-25 pt-8">
          <Nav className="container mx-auto text-center" />
          <div className="container mx-md m-auto max-w-4xl px-2">
            <main className="bg-white rounded-lg shadow-lg p-8 py-10">{children}</main>
          </div>
        </div>
      </div>
    </>
  )
}