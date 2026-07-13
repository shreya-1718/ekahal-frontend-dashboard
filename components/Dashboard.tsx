"use client";

import { useEffect, useMemo, useState } from "react";
import { Grid3X3, Heart } from "lucide-react";

import { Product } from "@/types/product";
import { useFavorites } from "@/context/FavoriteContext";

import SearchBar from "./filters/SearchBar";
import CategoryFilter from "./filters/CategoryFilter";
import SortDropdown, { SortOption } from "./filters/SortDropdown";
import ProductGrid from "./product/ProductGrid";
import EmptyState from "./common/EmptyState";
import Pagination from "./common/Pagination";
import useScrolled from "@/hooks/useScrolled";

interface DashboardProps {
  products: Product[];
}

const PRODUCTS_PER_PAGE = 12;

export default function Dashboard({ products }: DashboardProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [showFavorites, setShowFavorites] = useState(false);
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [currentPage, setCurrentPage] = useState(1);
    const scrolled = useScrolled();
  const { favorites } = useFavorites();

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    // Search
    if (search.trim()) {
      data = data.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // Category
    if (category !== "All") {
      data = data.filter((product) => product.category === category);
    }

    // Favorites
    if (showFavorites) {
      data = data.filter((product) => favorites.includes(product.id));
    }

    // Sorting
    switch (sortBy) {
      case "price-low":
        data.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        data.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        data.sort((a, b) => b.rating - a.rating);
        break;

      case "name-asc":
        data.sort((a, b) => a.title.localeCompare(b.title));
        break;

      case "name-desc":
        data.sort((a, b) => b.title.localeCompare(a.title));
        break;

      default:
        break;
    }

    return data;
  }, [products, search, category, showFavorites, favorites, sortBy]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, showFavorites, sortBy]);

  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE,
  );

  return (
    <>
      <div
  className={`
    sticky
    top-20
    z-40
    mb-10
    rounded-3xl
    transition-all
    duration-300

    ${
      scrolled
        ? "bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 backdrop-blur-2xl shadow-2xl border border-gray-200 py-4 px-6"
        : "bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 backdrop-blur-xl shadow-xl border border-white/50 p-6"
    }
  `}
>
        {/* Top Controls */}

        <div className="grid gap-5 lg:grid-cols-[1fr_250px_auto]">
          <SearchBar value={search} onChange={setSearch} />

          <CategoryFilter
            categories={categories}
            value={category}
            onChange={setCategory}
          />

          {/* Favorite Toggle */}

          <div className="flex items-center justify-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-5">
            <Heart
              size={18}
              className={`transition-all duration-300 ${
                showFavorites ? "fill-red-500 text-red-500" : "text-gray-400"
              }`}
            />

            <span className="whitespace-nowrap text-sm font-medium">
              Favorites
            </span>

            <button
              type="button"
              onClick={() => setShowFavorites((prev) => !prev)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-all duration-300 ${
                showFavorites
                  ? "bg-gradient-to-r from-indigo-600 to-blue-500"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow transition-all duration-300 ${
                  showFavorites ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Bottom Controls */}

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2">
            <Grid3X3 size={16} className="text-indigo-600" />

            <span className="text-sm font-medium">
              Showing{" "}
              <span className="font-bold">{filteredProducts.length}</span>{" "}
              Products
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-white">Sort by</span>

            <SortDropdown value={sortBy} onChange={setSortBy} />
          </div>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <>
          <div className="relative z-0">
            <ProductGrid products={paginatedProducts} />
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalItems={filteredProducts.length}
            itemsPerPage={PRODUCTS_PER_PAGE}
            onPageChange={(page) => {
              setCurrentPage(page);

              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          />
        </>
      ) : (
        <EmptyState />
      )}
    </>
  );
}
