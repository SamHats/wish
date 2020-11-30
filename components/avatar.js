export default function Avatar({ name, picture }) {
  return (
    <div className="flex items-center">
      {picture && <img src={picture} className="w-12 h-12 rounded-full mr-4" alt={name} />}
      <div className="text-1xl lg:text-4xl leading-none font-extrabold text-gray-900 tracking-tight">{name}'s Wishes</div>
    </div>
  )
}