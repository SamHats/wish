import Avatar from '@/components/avatar'

export default function PostHeader({ date, author }) {
  return (
    <>
      <div className="md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div>
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  )
}