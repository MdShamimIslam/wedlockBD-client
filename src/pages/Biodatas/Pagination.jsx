const Pagination = ({totalPages, setPage, page}) => {
  return (
    <div className="flex justify-center mt-12 space-x-2">
                {[...Array(totalPages).keys()].map((num) => (
                  <button
                    type="button"
                    key={num}
                    onClick={() => setPage(num + 1)}
                    className={`px-4 py-2 rounded-lg border ${
                      page === num + 1
                        ? "bg-slate-500 text-white"
                        : "bg-white text-gray-700"
                    }`}
                  >
                    {num + 1}
                  </button>
                ))}
              </div>
  )
}

export default Pagination;