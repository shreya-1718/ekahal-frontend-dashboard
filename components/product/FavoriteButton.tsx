"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/context/FavoriteContext";

interface Props {
  productId: number;
}

export default function FavoriteButton({
  productId,
}: Props) {
  const { isFavorite, toggleFavorite } = useFavorites();

  const favorite = isFavorite(productId);

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        toggleFavorite(productId);
      }}
      className="transition hover:scale-110"
    >
      <Heart
        size={22}
        className={
          favorite
            ? "fill-red-500 text-red-500"
            : "text-gray-400"
        }
      />
    </button>
  );
}