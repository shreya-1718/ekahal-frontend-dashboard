"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowUpDown,
  Check,
  ChevronDown,
} from "lucide-react";

export type SortOption =
  | "newest"
  | "price-low"
  | "price-high"
  | "rating"
  | "name-asc"
  | "name-desc";

interface Props {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const sortOptions: {
  value: SortOption;
  label: string;
}[] = [
  {
    value: "newest",
    label: "Newest First",
  },
  {
    value: "price-low",
    label: "Price: Low to High",
  },
  {
    value: "price-high",
    label: "Price: High to Low",
  },
  {
    value: "rating",
    label: "Highest Rated",
  },
  {
    value: "name-asc",
    label: "Name: A-Z",
  },
  {
    value: "name-desc",
    label: "Name: Z-A",
  },
];

export default function SortDropdown({
  value,
  onChange,
}: Props) {
  const [open, setOpen] = useState(false);

  const dropdownRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const selected =
    sortOptions.find(
      (option) => option.value === value
    ) || sortOptions[0];

  return (
    <div className="relative z-50" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          flex
          min-w-[220px]
          items-center
          justify-between
          gap-3
          rounded-xl
          border
          border-gray-200
          bg-white
          px-4
          py-2.5
          shadow-sm
          transition-all
          hover:border-indigo-300
          hover:shadow-md
        "
      >
        <div className="flex items-center gap-2">
          <ArrowUpDown
            size={16}
            className="text-indigo-600"
          />

          <span className="text-sm font-medium">
            {selected.label}
          </span>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div
          className="
absolute
right-0
top-full
z-[9999]
mt-2
w-full
overflow-hidden
rounded-2xl
border
border-gray-200
bg-white
shadow-2xl
"
        >
          {sortOptions.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className="
                flex
                w-full
                items-center
                justify-between
                px-4
                py-3
                text-left
                text-sm
                transition
                hover:bg-indigo-50
              "
            >
              <span>{option.label}</span>

              {value === option.value && (
                <Check
                  size={16}
                  className="text-indigo-600"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}