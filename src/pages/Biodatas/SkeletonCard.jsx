const SkeletonCard = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
      <div className="w-full h-64 bg-gray-200" />
      <div className="p-6 space-y-4">
        <div className="h-5 bg-gray-200 rounded w-2/3" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="flex space-x-2">
          <div className="flex-1 h-10 bg-gray-200 rounded" />
          <div className="w-10 h-10 bg-gray-200 rounded" />
        </div>
      </div>
    </div>
  );

export default SkeletonCard;