

const TPagination = ({ currentPage, totalPages, totalEntries, rowsPerPage, setCurrentPage, setRowsPerPage }) => {

    const handlePrev = () => {
      if (currentPage > 1) setCurrentPage(currentPage - 1);
    };
  
    const handleNext = () => {
      if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };
  
    return (
      <div className="flex flex-col md:flex-row md:items-center md:justify-between my-10 space-y-4 md:space-y-0">
        <p className="text-sm text-slate-600">
          Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
          {Math.min(currentPage * rowsPerPage, totalEntries)} of {totalEntries} entries
        </p>
  
        <div className="flex gap-2 md:gap-0 sm:flex-row sm:items-center sm:space-x-4 space-y-3 sm:space-y-0">
          <div className="flex items-center space-x-2 mt-3 md:mt-0">
            <p className="text-sm text-slate-600">Display</p>
            <select
              value={rowsPerPage}
              onChange={(e) => {
                setRowsPerPage(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="text-sm text-slate-900 border border-gray-300 rounded-md h-9 px-2 outline-none"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
            </select>
          </div>
          
          <ul className="flex justify-center items-center space-x-2 sm:space-x-3">
            <li
              onClick={handlePrev}
              className={`flex items-center justify-center shrink-0 w-9 h-9 rounded-md cursor-pointer ${
                currentPage === 1 ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-400"
                viewBox="0 0 55.753 55.753"
              >
                <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
              </svg>
            </li>
  
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex items-center justify-center shrink-0 px-3 h-9 rounded-md cursor-pointer border text-sm font-medium ${
                  page === currentPage
                    ? "bg-blue-500 border-blue-500 text-white"
                    : "border-gray-300 text-slate-900 hover:border-blue-500"
                }`}
              >
                {page}
              </li>
            ))}
  
            <li
              onClick={handleNext}
              className={`flex items-center justify-center shrink-0 w-9 h-9 rounded-md cursor-pointer ${
                currentPage === totalPages ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 fill-gray-400 rotate-180"
                viewBox="0 0 55.753 55.753"
              >
                <path d="M12.745 23.915c.283-.282.59-.52.913-.727L35.266 1.581a5.4 5.4 0 0 1 7.637 7.638L24.294 27.828l18.705 18.706a5.4 5.4 0 0 1-7.636 7.637L13.658 32.464a5.367 5.367 0 0 1-.913-.727 5.367 5.367 0 0 1-1.572-3.911 5.369 5.369 0 0 1 1.572-3.911z" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default TPagination;
  