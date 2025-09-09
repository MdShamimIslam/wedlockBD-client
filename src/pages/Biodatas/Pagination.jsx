const Pagination = ({ totalPages, setPage, page }) => {
  const pages = [];

  // সবসময় 1 দেখাবে
  pages.push(1);

  // Left side ellipsis
  if (page > 3) {
    pages.push("ellipsis-left");
  }

  // Middle pages (current এর চারপাশে)
  const startPage = Math.max(2, page - 2);
  const endPage = Math.min(totalPages - 1, page + 2);

  for (let i = startPage; i <= endPage; i++) {
    if (i !== 1 && i !== totalPages) {
      pages.push(i);
    }
  }

  // Right side ellipsis
  if (page < totalPages - 2) {
    pages.push("ellipsis-right");
  }

  // সবসময় last page দেখাবে (যদি একাধিক থাকে)
  if (totalPages > 1) {
    pages.push(totalPages);
  }

  return (
    <div className="flex justify-center mt-12 space-x-2">
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
        className="px-3 py-2 rounded-lg border bg-white text-gray-700 disabled:opacity-50"
      >
        Prev
      </button>

      {pages.map((num, idx) =>
        num === "ellipsis-left" || num === "ellipsis-right" ? (
          <span key={`${num}-${idx}`} className="px-3 py-2 text-gray-500 select-none">
            ...
          </span>
        ) : (
          <button
            key={`page-${num}-${idx}`} 
            onClick={() => setPage(num)}
            className={`px-4 py-2 rounded-lg border transition-colors ${
              page === num
                ? "bg-slate-500 text-white font-semibold"
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
        className="px-3 py-2 rounded-lg border bg-white text-gray-700 disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
