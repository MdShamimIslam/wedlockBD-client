const Pagination = ({ totalPages, setPage, page }) => {
  const pages = [];

  if (totalPages <= 4) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (page > 3) {
      pages.push("ellipsis-left");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < totalPages - 2) {
      pages.push("ellipsis-right");
    }

    pages.push(totalPages);
  }

  return (
    <div className="flex justify-center mt-8 flex-wrap gap-1 sm:gap-2">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border bg-white text-gray-700 text-sm sm:text-base disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((num, idx) =>
        num === "ellipsis-left" || num === "ellipsis-right" ? (
          <span
            key={`${num}-${idx}`}
            className="px-2 sm:px-3 py-1.5 text-gray-500 select-none"
          >
            ...
          </span>
        ) : (
          <button
            key={`page-${num}-${idx}`}
            onClick={() => setPage(num)}
            className={`px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg border text-sm sm:text-base transition-colors duration-150 ${
              page === num
                ? "bg-slate-500 text-white font-semibold border-slate-500"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {num}
          </button>
        )
      )}

      <button
        onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={page === totalPages}
        className="px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border bg-white text-gray-700 text-sm sm:text-base disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
