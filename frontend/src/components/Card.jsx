const Card = ({title, description}) => {
  return (
    <div className="border-2 border-gray-600 bg-gray-200 h-40 w-72 rounded-xl font-serif hover:shadow-lg">
      <h2 className="px-4 py-1 font-bold tracking-wide">{title}</h2>
      <div className="h-0.5 bg-gray-400 w-full"></div>
      <p className="px-4 py-1 overflow-hidden tracking-wider">{description}</p>
    </div>
  )
}
export default Card