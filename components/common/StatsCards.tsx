"use client";

import { Package, Heart, Star, Layers3 } from "lucide-react";

interface Props {
  totalProducts: number;
  favoriteCount: number;
  totalCategories: number;
  averageRating: number;
}

const cards = [
  {
    title: "Products",
    key: "products",
    icon: Package,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Favorites",
    key: "favorites",
    icon: Heart,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    title: "Avg Rating",
    key: "rating",
    icon: Star,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Categories",
    key: "categories",
    icon: Layers3,
    gradient: "from-emerald-500 to-green-600",
  },
];

export default function StatsCards({
  totalProducts,
  favoriteCount,
  totalCategories,
  averageRating,
}: Props) {
  const values = {
    products: totalProducts,
    favorites: favoriteCount,
    rating: averageRating.toFixed(1),
    categories: totalCategories,
  };

  return (
    <div className="mb-4 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.key}
            className="group overflow-hidden rounded-3xl border border-white/50 bg-white p-4 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>

                <h2 className="mt-2 text-3xl font-bold">
                  {values[card.key as keyof typeof values]}
                </h2>
              </div>

              <div
                className={`rounded-2xl bg-gradient-to-r ${card.gradient} p-4 text-white shadow-lg`}
              >
                <Icon size={24} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
