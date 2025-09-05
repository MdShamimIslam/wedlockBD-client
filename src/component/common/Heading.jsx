const Heading = ({title, desc}) => {
  return (
    <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 ">{title}</h2>
        <p className="lg:text-lg text-gray-600 max-w-2xl mx-auto"> {desc}</p>
    </div>
  )
}

export default Heading;