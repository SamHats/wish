import Meta from '@/components/meta'

export default function Layout({children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400">
        <div className="min-h-screen bg-hero-texture--topography bg-opacity-25">
          <main className="py-10">{children}</main>
        </div>
      </div>
    </>
  )
}