"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  totalItems,
  itemsPerPage,
  onPageChange,
}: PaginationProps) {
  const startItem =
    totalItems === 0
      ? 0
      : (currentPage - 1) * itemsPerPage + 1;

  const endItem = Math.min(
    currentPage * itemsPerPage,
    totalItems
  );

  const getPages = (): (number | string)[] => {
    if (totalPages <= 7) {
      return Array.from(
        { length: totalPages },
        (_, i) => i + 1
      );
    }

    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }

    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  const pages = getPages();

  return (
    <div
      className="
        mt-10
        rounded-3xl
        border
        border-gray-200
        bg-white
        p-4
        shadow-sm
        md:p-6
      "
    >
      {/* Top Row */}

      <div
        className="
          flex
          flex-col
          gap-4
          md:flex-row
          md:items-center
          md:justify-between
        "
      >
        <p className="text-center text-sm text-gray-500 md:text-left">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {startItem}-{endItem}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">
            {totalItems}
          </span>{" "}
          products
        </p>

        {/* Mobile Pagination */}

        <div className="flex items-center justify-between gap-3 md:hidden">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="
              flex
              items-center
              gap-1
              rounded-xl
              border
              border-gray-200
              px-3
              py-2
              text-sm
              font-medium
              transition
              hover:bg-gray-100
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <ChevronLeft size={16} />
          </button>

          <div className="rounded-xl bg-gray-100 px-4 py-2 text-sm font-semibold">
            {currentPage} / {totalPages}
          </div>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="
              flex
              items-center
              gap-1
              rounded-xl
              border
              border-gray-200
              px-3
              py-2
              text-sm
              font-medium
              transition
              hover:bg-gray-100
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Desktop Pagination */}

        <div className="hidden items-center gap-2 md:flex">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-gray-200
              px-4
              py-2
              text-sm
              font-medium
              transition
              hover:bg-gray-100
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            <ChevronLeft size={16} />
            Previous
          </button>

          {pages.map((page, index) =>
            typeof page === "number" ? (
              <button
                key={`page-${page}`}
                onClick={() => onPageChange(page)}
                className={`h-10 w-10 rounded-xl text-sm font-medium transition ${
                  currentPage === page
                    ? "bg-indigo-600 text-white shadow-md"
                    : "border border-gray-200 bg-white hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ) : (
              <span
                key={`ellipsis-${index}`}
                className="px-2 text-gray-400"
              >
                ...
              </span>
            )
          )}

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              border
              border-gray-200
              px-4
              py-2
              text-sm
              font-medium
              transition
              hover:bg-gray-100
              disabled:cursor-not-allowed
              disabled:opacity-40
            "
          >
            Next
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}