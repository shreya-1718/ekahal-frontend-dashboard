import { X } from "lucide-react";

interface Props {
  search: string;
  category: string;
  showFavorites: boolean;
  clearSearch: () => void;
  clearCategory: () => void;
  clearFavorites: () => void;
}

export default function ActiveFilters({
  search,
  category,
  showFavorites,
  clearSearch,
  clearCategory,
  clearFavorites,
}: Props) {
  return (
    <div className=" flex flex-wrap gap-3">
      {search && (
        <button
          onClick={clearSearch}
          className="flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm cursor-pointer"
        >
          Search: {search}
          <X size={15} />
        </button>
      )}

      {category !== "All" && (
        <button
          onClick={clearCategory}
          className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm cursor-pointer"
        >
          {category}

          <X size={15} />
        </button>
      )}

      {showFavorites && (
        <button
          onClick={clearFavorites}
          className="flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm cursor-pointer"
        >
          Favorites
          <X size={15} />
        </button>
      )}
    </div>
  );
}
