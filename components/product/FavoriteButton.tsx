"use client";

import { Heart } from "lucide-react";
import { useFavorites } from "@/context/FavoriteContext";
import { toast } from "sonner";


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

if (favorite) {
  toast.success("Removed from Favorites");
} else {
  toast.success("❤️ Added to Favorites");
}
      }}
      className="transition hover:scale-110"
    >
      <Heart
  size={22}
  className={`
      transition-all
      duration-300
      ${
        favorite
          ? "fill-red-500 text-red-500 scale-125"
          : "text-gray-400 scale-100"
      }
      hover:scale-110
      active:scale-150
  `}
/>
    </button>
  );
}