import { Search } from "lucide-react";

const Hero = ({searchInput, setSearchInput}) => {
  return (
    <section className="bg-gradient-to-r from-black via-black-600 to-blue-800 py-16 rounded-xl ">
    <div className="px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
        Find Your Perfect Match
      </h1>
      <p className="lg:text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
        Explore verified profiles and take the first step towards a lifelong
        journey.
      </p>

      {/* Search */}
      <div className="max-w-2xl mx-auto relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search by name, occupation, or location..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="w-full pl-12 pr-4 py-3 md:py-4 rounded-full text-sm md:text-base border-0 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-30 shadow-lg"
        />
      </div>
    </div>
  </section>
  )
}

export default Hero;