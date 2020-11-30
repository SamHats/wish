import Meta from '@/components/meta'

export default function Layout({children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen bg-gradient-to-r from-red-400 to-blue-500">
        <main className="py-10">{children}</main>
      </div>
    </>
  )
}