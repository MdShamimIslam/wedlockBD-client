import NoProfiles from "./NoProfiles";
import Pagination from "./Pagination";
import ProfileBiodataCard from "./ProfileBiodataCard";
import SkeletonCard from "./SkeletonCard";

const Biodata = ({isLoading, isFetching, limit, biodatas, totalPages, setPage, page}) => {
  return (
    <div className="lg:w-3/4">
      {(isLoading || isFetching) && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: limit }).map((_, idx) => (
              <SkeletonCard key={idx} />
            ))}
          </div>
        )}

      {(isLoading || isFetching) && <p className="text-center py-12">Loading profiles...</p>}

      {!isLoading && biodatas.length === 0 && <NoProfiles/> }

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {biodatas.map((biodata) => <ProfileBiodataCard key={biodata._id} biodata={biodata} /> )}
      </div>

      {totalPages > 1 && <Pagination {...{totalPages, setPage, page}} /> }

    </div>
  )
}

export default Biodata;