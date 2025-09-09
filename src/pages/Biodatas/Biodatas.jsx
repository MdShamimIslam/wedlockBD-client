import { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import Hero from "./Hero";
import MobileFilter from "./MobileFilter";
import FilterSidebar from "./FilterSidebar";
import Biodata from "./Biodata";
import { Helmet } from "react-helmet-async";
import useBiodatas from "../../hooks/useBiodatas";

const Biodatas = () => {
  const [filters, setFilters] = useState({ ageRange: [18, 50], biodataType: "", division: "", occupation: "", search: "", sortBy: "" });
  const [searchInput, setSearchInput] = useState(""); 
  const [debouncedSearch] = useDebounce(searchInput, 500);
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 6;


  useEffect(() => {
    setFilters((prev) => ({ ...prev, search: debouncedSearch }));
    setPage(1); 
  }, [debouncedSearch]);

  const {biodatas,total,totalPages,isLoading, isFetching} = useBiodatas({filters,page,limit})

  const divisions = [...new Set(biodatas.map((b) => b.present_division_name))];
  const occupations = [...new Set(biodatas.map((b) => b.occupation))];

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({ ...prev, [filterType]: value }));
    setPage(1);
  };

  const clearFilters = () => {
    setFilters({
      ageRange: [18, 50],
      biodataType: "",
      division: "",
      occupation: "",
      search: "",
      sortBy: "",
    });
    setSearchInput("");
    setPage(1);
  };

  return (
   <>
    <Helmet>
          <title>Biodatas | WedlockBD</title>
    </Helmet>
    <div className="my-8 md:my-12 lg:my-16 p-3 lg:p-0">
      <Hero {...{searchInput,setSearchInput}}/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <MobileFilter {...{showFilters, setShowFilters}} />
          <FilterSidebar {...{filters, handleFilterChange, showFilters, clearFilters, divisions, occupations, total}}/>
          <Biodata {...{isLoading, isFetching, limit, biodatas, totalPages, setPage, page}}/>
        </div>
      </div>
    </div>
   </>
  );
};

export default Biodatas;
