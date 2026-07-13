"use client";

import { Search, X } from "lucide-react";

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">
      {/* Search Icon */}
      <Search
        size={18}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search products..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          h-14
          w-full
          rounded-2xl
          border
          border-gray-200
          bg-gray-50
          pl-14
          pr-14
          text-gray-700
          outline-none
          transition-all
          duration-300
          focus:border-indigo-500
          focus:bg-white
          focus:ring-4
          focus:ring-indigo-100
        "
      />

      {/* Clear Button */}
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            text-gray-400
            transition-all
            hover:bg-gray-200
            hover:text-gray-700
          "
          aria-label="Clear search"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}