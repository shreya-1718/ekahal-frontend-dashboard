"use client";

import { SlidersHorizontal } from "lucide-react";

interface Props {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
}

export default function CategoryFilter({
  categories,
  value,
  onChange,
}: Props) {
  return (
    <div className="relative">

      <SlidersHorizontal
        size={18}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <select
        value={value}
        onChange={(e) =>
          onChange(e.target.value)
        }
        className="
        h-14
        w-full
        appearance-none
        rounded-2xl
        border
        border-gray-200
        bg-gray-50
        pl-14
        pr-6
        outline-none
        transition-all
        focus:border-indigo-500
        focus:bg-white
        focus:ring-4
        focus:ring-indigo-100
      "
      >
        {categories.map((category) => (
          <option
            key={category}
            value={category}
          >
            {category}
          </option>
        ))}
      </select>

    </div>
  );
}