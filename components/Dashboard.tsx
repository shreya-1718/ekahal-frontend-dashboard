"use client";

import { useMemo, useState } from "react";
import { Product } from "@/types/product";
import SearchBar from "./filters/SearchBar";
import CategoryFilter from "./filters/CategoryFilter";
import ProductGrid from "./product/ProductGrid";

interface DashboardProps {
  products: Product[];
}

export default function Dashboard({ products }: DashboardProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((product) => product.category))];
  }, [products]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [products, search, category]);

  return (
    <>
      <div className="mb-8 rounded-xl border bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 md:flex-row">
          <SearchBar value={search} onChange={setSearch} />

          <CategoryFilter
            categories={categories}
            value={category}
            onChange={setCategory}
          />
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Showing{" "}
          <span className="font-semibold">{filteredProducts.length}</span>{" "}
          products
        </p>
      </div>

      <ProductGrid products={filteredProducts} />
    </>
  );
}
