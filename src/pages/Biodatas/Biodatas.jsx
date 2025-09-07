import { useState } from 'react';
import { Search, Filter, MapPin, Briefcase, Eye, Heart, User, Calendar, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const Biodatas = () => {
  const [filters, setFilters] = useState({ 
    ageRange: [18, 50], 
    biodataType: '', 
    division: '', 
    occupation: '', 
    search: '', 
    sortBy: '' 
  });
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 6;

  const axiosPublic = useAxiosPublic();

  const { data, isLoading } = useQuery({
    queryKey: ["biodatas", filters, page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas`,{
        params: {
          search: filters.search,
          division: filters.division,
          occupation: filters.occupation,
          biodataType: filters.biodataType,
          minAge: filters.ageRange[0],
          maxAge: filters.ageRange[1],
          sortBy: filters.sortBy,
          page,
          limit
        }
      });
      return res.data;
    },
  });

  const biodatas = data?.biodatas || [];
  const total = data?.total || 0;
  const totalPages = Math.ceil(total / limit);

  // unique divisions & occupations from API result
  const divisions = [...new Set(biodatas.map(b => b.present_division_name))];
  const occupations = [...new Set(biodatas.map(b => b.occupation))];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
    setPage(1); // reset page to 1 when filters change
  };


  const clearFilters = () => {
    setFilters({
      ageRange: [18, 50],
      biodataType: '',
      division: '',
      occupation: '',
      search: '',
      sortBy: ''
    });
    setPage(1);
  };

  if (isLoading) {
    return <p className="text-center py-12">Loading profiles...</p>;
  }

  return (
    <div className="my-8 md:my-12 lg:my-16 p-3 lg:p-0">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black via-black-600 to-blue-800 py-16 rounded-xl ">
        <div className="px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            Find Your Perfect Match
          </h1>
          <p className="lg:text-lg text-white opacity-90 mb-8 max-w-2xl mx-auto">
            Explore verified profiles and take the first step towards a lifelong journey.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name, occupation, or location..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 rounded-full text-sm md:text-base  border-0 focus:ring-4 focus:ring-white focus:ring-opacity-30 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
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

          {/* Filter Sidebar */}
          <div className={`lg:w-1/4 ${showFilters ? 'block' : 'hidden lg:block'}`}>
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
                  Age Range: {filters.ageRange[0]} - {filters.ageRange[1]}
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="18"
                    max="60"
                    value={filters.ageRange[0]}
                    onChange={(e) => handleFilterChange('ageRange', [parseInt(e.target.value), filters.ageRange[1]])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <input
                    type="range"
                    min="18"
                    max="60"
                    value={filters.ageRange[1]}
                    onChange={(e) => handleFilterChange('ageRange', [filters.ageRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Biodata Type */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Biodata Type</label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="biodataType"
                      value=""
                      checked={filters.biodataType === ''}
                      onChange={(e) => handleFilterChange('biodataType', e.target.value)}
                      className="mr-2 text-primary-500"
                    />
                    <span className="text-gray-700">All</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="biodataType"
                      value="Male"
                      checked={filters.biodataType === 'Male'}
                      onChange={(e) => handleFilterChange('biodataType', e.target.value)}
                      className="mr-2 text-primary-500"
                    />
                    <span className="text-gray-700">Male</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="biodataType"
                      value="Female"
                      checked={filters.biodataType === 'Female'}
                      onChange={(e) => handleFilterChange('biodataType', e.target.value)}
                      className="mr-2 text-primary-500"
                    />
                    <span className="text-gray-700">Female</span>
                  </label>
                </div>
              </div>

              {/* Division */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Division</label>
                <select
                  value={filters.division}
                  onChange={(e) => handleFilterChange('division', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Divisions</option>
                  {divisions.map(division => (
                    <option key={division} value={division}>{division}</option>
                  ))}
                </select>
              </div>

              {/* Occupation */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Occupation</label>
                <select
                  value={filters.occupation}
                  onChange={(e) => handleFilterChange('occupation', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">All Occupations</option>
                  {occupations.map(occupation => (
                    <option key={occupation} value={occupation}>{occupation}</option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-3">Sort By</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">Default</option>
                  <option value="ageAsc">Age: Low to High</option>
                  <option value="ageDesc">Age: High to Low</option>
                </select>
              </div>

              {/* Results Count */}
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-pink-700 font-semibold text-center">
                  {total} profiles found
                </p>
              </div>
            </div>
          </div>

          {/* Biodata Cards */}
          <div className="lg:w-3/4">
            {biodatas.length === 0 ? (
              <div className="text-center py-16">
                <User className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-600 mb-2">No profiles found</h3>
                <p className="text-gray-500">Try adjusting your filters to see more results</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {biodatas.map((biodata) => (
                  <div
                    key={biodata._id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group"
                  >
                    {/* Profile Image */}
                    <div className="relative">
                      <img
                        src={biodata.profile_image}
                        alt={biodata.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ID: {biodata.biodata_id}
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          biodata.biodata_type === 'Male' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-pink-100 text-pink-800'
                        }`}>
                          {biodata.biodata_type}
                        </span>
                      </div>
                    </div>

                    {/* Profile Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">{biodata.name}</h3>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          <span className="font-semibold">{biodata.age}</span>
                        </div>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-gray-600">
                          <MapPin className="h-4 w-4 mr-2 text-primary-500" />
                          <span>{biodata.present_division_name}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Briefcase className="h-4 w-4 mr-2 text-primary-500" />
                          <span>{biodata.occupation}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Link
                          to={`/biodata/${biodata._id}`}
                          className="flex-1 bg-gradient-to-r from-pink-500 to-blue-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transition-all duration-300 flex items-center justify-center space-x-2"
                        >
                          <Eye className="h-4 w-4" />
                          <span>View Profile</span>
                        </Link>
                        <button className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-lg transition-colors duration-200">
                          <Heart className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-12 space-x-2">
                {[...Array(totalPages).keys()].map(num => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => setPage(num + 1)}
                    className={`px-4 py-2 rounded-lg border ${
                      page === num + 1 ? 'bg-slate-500 text-white' : 'bg-white text-gray-700'
                    }`}
                  >
                    {num + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
