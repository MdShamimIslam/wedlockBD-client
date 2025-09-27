import { useState, useMemo } from "react";

const usePagination = (data = [], defaultRowsPerPage = 10) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const totalEntries = data.length;
  const totalPages = Math.ceil(totalEntries / rowsPerPage);

  const currentData = useMemo(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    return data.slice(startIndex, endIndex);
  }, [data, currentPage, rowsPerPage]);

  return { currentPage, setCurrentPage, rowsPerPage, setRowsPerPage, totalPages, totalEntries, currentData };
};

export default usePagination;
