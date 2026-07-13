"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/context/FavoriteContext";

export default function Navbar() {
  const { favorites } = useFavorites();

  return (
    <header className="sticky top-0 z-20 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Product Dashboard
        </h1>

        <div className="flex items-center gap-2">
          <Heart
            className="fill-red-500 text-red-500"
            size={20}
          />

          <span className="font-semibold">
            {favorites.length}
          </span>
        </div>
      </div>
    </header>
  );
}