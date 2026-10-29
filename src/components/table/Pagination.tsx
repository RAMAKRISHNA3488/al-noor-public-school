import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalEntries: number;
  entriesPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalEntries,
  entriesPerPage,
  onPageChange
}) => {
  const totalPages = Math.max(1, Math.ceil(totalEntries / entriesPerPage));

  const startEntry = totalEntries === 0 ? 0 : (currentPage - 1) * entriesPerPage + 1;
  const endEntry = Math.min(currentPage * entriesPerPage, totalEntries);

  // Helper to generate page numbers with ellipsis for large numbers (like 1,064 entries)
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > 3) {
        pages.push('...');
      }

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="table-footer">
      <div>
        Showing {startEntry.toLocaleString()} to {endEntry.toLocaleString()} of {totalEntries.toLocaleString()} entries
      </div>

      <div className="pagination-group">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-btn"
          title="Previous Page"
        >
          Previous
        </button>

        {getPageNumbers().map((page, index) => {
          if (page === '...') {
            return (
              <span key={`dots-${index}`} style={{ padding: '0 6px', color: '#888888' }}>
                ...
              </span>
            );
          }

          const pageNum = Number(page);
          const isActive = pageNum === currentPage;

          return (
            <button
              key={pageNum}
              onClick={() => onPageChange(pageNum)}
              className={`page-btn ${isActive ? 'active' : ''}`}
            >
              {pageNum}
            </button>
          );
        })}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages || totalEntries === 0}
          className="page-btn"
          title="Next Page"
        >
          Next
        </button>
      </div>
    </div>
  );
};
