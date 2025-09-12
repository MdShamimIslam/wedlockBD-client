import { Filter } from "lucide-react";

const FilterSidebar = ({filters={}, handleFilterChange, showFilters, clearFilters, divisions=[], occupations=[], total}) => {
  return (
    <div className={`lg:w-1/4 ${showFilters ? "block" : "hidden lg:block"}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-4">

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center">
                  <Filter className="h-6 w-6 mr-2 text-primary-500" />
                  Filters
                </h3>
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-primary-500 hover:text-primary-600 font-medium text-sm"
                >
                  Clear All
                </button>
              </div>

              {/* Age Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Age Range: {filters?.ageRange[0]} - {filters?.ageRange[1]}
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="18"
                    max="60"
                    value={filters.ageRange[0]}
                    onChange={(e) =>
                      handleFilterChange("ageRange", [
                        parseInt(e.target.value),
                        filters.ageRange[1],
                      ])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <input
                    type="range"
                    min="18"
                    max="60"
                    value={filters.ageRange[1]}
                    onChange={(e) =>
                      handleFilterChange("ageRange", [
                        filters.ageRange[0],
                        parseInt(e.target.value),
                      ])
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Biodata Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Biodata Type
                </label>
                <div className="space-y-2">
                  {["", "Male", "Female"].map((type) => (
                    <label key={type} className="flex items-center">
                      <input
                        type="radio"
                        name="biodataType"
                        value={type}
                        checked={filters.biodataType === type}
                        onChange={(e) =>
                          handleFilterChange("biodataType", e.target.value)
                        }
                        className="mr-2 text-primary-500"
                      />
                      <span className="text-gray-700">
                        {type === "" ? "All" : type}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Division */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                 Present Division
                </label>
                <select
                  value={filters.division}
                  onChange={(e) =>
                    handleFilterChange("division", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Divisions</option>
                  {divisions.map((division) => (
                    <option key={division} value={division}>
                      {division}
                    </option>
                  ))}
                </select>
              </div>

              {/* Occupation */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Occupation
                </label>
                <select
                  value={filters.occupation}
                  onChange={(e) =>
                    handleFilterChange("occupation", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Occupations</option>
                  {occupations.map((occupation) => (
                    <option key={occupation} value={occupation}>
                      {occupation}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Sort By
                </label>
                <select
                  value={filters.sortBy}
                  onChange={(e) =>
                    handleFilterChange("sortBy", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Default</option>
                  <option value="ageAsc">Age: Low to High</option>
                  <option value="ageDesc">Age: High to Low</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-pink-500 font-semibold text-center">
                  {total} profiles found
                </p>
              </div>
            </div>
          </div>
  )
}

export default FilterSidebar;