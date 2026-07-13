import Image from "next/image";
import Link from "next/link";
import { Package, Star } from "lucide-react";

import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {

  const reviewCount = (product.id * 137).toLocaleString();

  // Calculate original price from discount percentage
  const originalPrice = (
    product.price /
    (1 - product.discountPercentage / 100)
  ).toFixed(2);

  return (
    <Link
      href={`/product/${product.id}`}
      className="group h-full"
    >
      <article
        className="
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-3xl
          border
          border-gray-200/70
          bg-white
          shadow-md
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-indigo-200
          hover:shadow-2xl
          hover:shadow-indigo-100/50
        "
      >
        {/* Image */}
        <div className="relative h-72 overflow-hidden bg-gray-50">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

          {/* Discount Badge */}
          {product.discountPercentage > 0 && (
            <span className="absolute left-4 top-4 rounded-full bg-rose-400 px-4 py-2 text-xs font-semibold text-white shadow-lg">
              {Math.round(product.discountPercentage)}% OFF
            </span>
          )}

          {/* Favorite */}
          <div className="absolute right-4 top-4">
            <FavoriteButton productId={product.id} />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5">
          {/* Category */}
          <span className="mb-3 inline-flex w-fit rounded-full bg-indigo-100 px-4 py-1 text-xs font-semibold capitalize text-indigo-700">
            {product.category}
          </span>

          {/* Title */}
          <h2
            className="
              truncate
              text-xl
              font-bold
              text-gray-900
              transition-colors
              group-hover:text-indigo-600
            "
            title={product.title}
          >
            {product.title}
          </h2>

          {/* Brand */}
          <p className="mb-4 mt-1 text-base text-gray-500">
            {product.brand}
          </p>

          {/* Rating & Stock */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 rounded-full bg-yellow-50 px-3 py-2">
              <Star
                size={15}
                className="fill-yellow-500 text-yellow-500"
              />

              <span className="font-medium">
                {product.rating.toFixed(1)}
              </span>

              <span className="text-xs text-gray-500">
                ({reviewCount})
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-green-50 px-3 py-2">
              <Package
                size={15}
                className="text-green-600"
              />

              <span className="text-sm font-medium text-green-700">
                {product.stock} left
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="mt-auto border-t border-gray-200 pt-4">
            <p className="text-xs uppercase tracking-widest text-gray-400">
              Price
            </p>

            <div className="mt-2 flex items-center gap-3">
              <span className="text-3xl font-bold text-indigo-600">
                ${product.price}
              </span>

              <span className="text-lg text-gray-400 line-through">
                ${originalPrice}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}