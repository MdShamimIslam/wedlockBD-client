import { SlidersHorizontal } from "lucide-react";

const MobileFilter = ({showFilters, setShowFilters}) => {
  return (
    <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setShowFilters(!showFilters)}
              className="w-full bg-white p-4 rounded-lg shadow-md flex items-center justify-center space-x-2 border border-gray-200"
            >
              <SlidersHorizontal className="h-5 w-5 text-primary-500" />
              <span className="font-semibold text-gray-700">Filters</span>
            </button>
          </div>
  )
}

export default MobileFilter;