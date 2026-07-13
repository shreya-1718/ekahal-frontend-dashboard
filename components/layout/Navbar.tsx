"use client";

import { Heart, ShoppingBag } from "lucide-react";
import { useFavorites } from "@/context/FavoriteContext";

export default function Navbar() {
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-8">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 p-4 text-white shadow-lg shadow-blue-300/40">
            <ShoppingBag size={22} />
          </div>

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Product Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              Discover products from different categories
            </p>
          </div>

        </div>

      </div>
    </header>
  );
}