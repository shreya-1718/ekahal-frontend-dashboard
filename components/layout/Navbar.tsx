"use client";

import { ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 md:h-20 max-w-[1500px] items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-4">
          <div className="rounded-xl md:rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-500 p-3 md:p-4 text-white shadow-lg shadow-blue-300/40">
            <ShoppingBag size={22} />
          </div>

          <div>
            <h1 className="text-lg md:text-2xl font-bold tracking-tight">
              Product Dashboard
            </h1>

            <p className="hidden md:block text-sm text-gray-500">
              Discover products from different categories
            </p>
          </div>
        </div>
        <button
          className="
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    border-gray-200
    bg-gradient-to-br
    from-indigo-50
    to-blue-50
    shadow-sm
    transition-all
    duration-300
    hover:scale-105
    hover:border-indigo-300
    hover:shadow-lg
  "
        >
          <User size={22} className="text-indigo-600" strokeWidth={2.2} />
        </button>
      </div>
    </header>
  );
}
