"use client";

import { useEffect, useMemo, useState } from "react";
import {
  Grid3X3,
  Heart,
} from "lucide-react";

import { Product } from "@/types/product";
import { useFavorites } from "@/context/FavoriteContext";

import SearchBar from "./filters/SearchBar";
import CategoryFilter from "./filters/CategoryFilter";
import SortDropdown, { SortOption } from "./filters/SortDropdown";
import ProductGrid from "./product/ProductGrid";
import EmptyState from "./common/EmptyState";
import Pagination from "./common/Pagination";
import useScrolled from "@/hooks/useScrolled";
import SkeletonGrid from "./common/SkeletonGrid";
import ActiveFilters from "./common/ActiveFilters";
import ResetFiltersButton from "./common/ResetFiltersButton";
import StatsCards from "./common/StatsCards";
import ScrollToTop from "./common/ScrollToTop";

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
  const [loading, setLoading] = useState(true);

  const scrolled = useScrolled();
  const { favorites } = useFavorites();

  const hasFilters =
    search ||
    category !== "All" ||
    showFavorites;

  const categories = useMemo(() => {
    return [
      "All",
      ...new Set(products.map((p) => p.category)),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    let data = [...products];

    if (search.trim()) {
      data = data.filter((product) =>
        product.title
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (category !== "All") {
      data = data.filter(
        (product) =>
          product.category === category
      );
    }

    if (showFavorites) {
      data = data.filter((product) =>
        favorites.includes(product.id)
      );
    }

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
        data.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
        break;

      case "name-desc":
        data.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
        break;
    }

    return data;
  }, [
    products,
    favorites,
    search,
    category,
    showFavorites,
    sortBy,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, showFavorites, sortBy]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const paginatedProducts =
    filteredProducts.slice(
      (currentPage - 1) *
        PRODUCTS_PER_PAGE,
      currentPage *
        PRODUCTS_PER_PAGE
    );

  return (
    <>
      <StatsCards
        totalProducts={products.length}
        favoriteCount={favorites.length}
        totalCategories={categories.length - 1}
        averageRating={
          products.reduce(
            (sum, p) => sum + p.rating,
            0
          ) / products.length
        }
      />

      <div
        className={`sticky top-16 md:top-20 z-40 mb-8 rounded-3xl transition-all duration-300 ${
          scrolled
            ? "border border-gray-200 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 px-4 py-4 shadow-2xl backdrop-blur-xl md:px-6"
            : "border border-white/50 bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 p-4 shadow-xl backdrop-blur-xl md:p-6"
        }`}
      >
        {/* Top Controls */}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-[1fr_260px_auto]">
          <SearchBar
            value={search}
            onChange={setSearch}
          />

          <CategoryFilter
            categories={categories}
            value={category}
            onChange={setCategory}
          />

          <div className="flex items-center justify-between rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 md:justify-center md:gap-3">
            <div className="flex items-center gap-2">
              <Heart
                size={18}
                className={`${
                  showFavorites ? "fill-red-500 text-red-500" : "text-gray-400"
                }`}
              />

              <span className="font-medium text-sm">
                Favorites
              </span>
            </div>

            <button
              onClick={() =>
                setShowFavorites((p) => !p)
              }
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition ${
                showFavorites
                  ? "bg-gradient-to-r from-indigo-600 to-blue-500"
                  : "bg-gray-300"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 rounded-full bg-white shadow transition ${
                  showFavorites
                    ? "translate-x-6"
                    : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Bottom */}

        <div className="mt-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2">
              <Grid3X3
                size={16}
                className="text-indigo-600"
              />

              <span className="text-sm font-medium">
                Showing{" "}
                <strong>
                  {filteredProducts.length}
                </strong>{" "}
                Products
              </span>
            </div>

            <ActiveFilters
              search={search}
              category={category}
              showFavorites={showFavorites}
              clearSearch={() => setSearch("")}
              clearCategory={() =>
                setCategory("All")
              }
              clearFavorites={() =>
                setShowFavorites(false)
              }
            />

            {hasFilters && (
              <ResetFiltersButton
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setShowFavorites(false);
                  setSortBy("newest");
                }}
              />
            )}
          </div>

          <div className="flex w-full items-center justify-between gap-3 xl:w-auto xl:justify-end">
            <span className="text-sm font-medium text-white">
              Sort by
            </span>

            <div className="w-full max-w-xs xl:w-auto">
              <SortDropdown
                value={sortBy}
                onChange={setSortBy}
              />
            </div>
          </div>
        </div>
      </div>

      {filteredProducts.length ? (
        <>
          {loading ? (
            <SkeletonGrid />
          ) : (
            <ProductGrid
              products={paginatedProducts}
            />
          )}

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

      <ScrollToTop />
    </>
  );
}