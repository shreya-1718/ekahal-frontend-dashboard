"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Package, Star, BadgePercent } from "lucide-react";
import { useState } from "react";

import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";

interface Props {
  product: Product;
}

export default function ProductDetails({
  product,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(
    product.images[0] || product.thumbnail
  );

  return (
    <main className="mx-auto max-w-[1500px] px-8 py-10">

      <Link
        href="/"
        className="mb-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 shadow transition hover:shadow-lg"
      >
        <ArrowLeft size={18} />
        Back to Products
      </Link>

      <div className="grid gap-12 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <div className="relative h-[550px] overflow-hidden rounded-3xl bg-white shadow-xl">

            <Image
              src={selectedImage}
              alt={product.title}
              fill
              className="object-contain p-10"
            />

            <div className="absolute right-6 top-6 rounded-full">
              <FavoriteButton productId={product.id} />
            </div>

          </div>

          {/* Gallery */}

          <div className="mt-5 flex gap-4 overflow-x-auto">

            {product.images.map((img) => (

              <button
                key={img}
                onClick={() => setSelectedImage(img)}
                className={`relative h-24 w-24 overflow-hidden rounded-2xl border transition

                ${
                  selectedImage === img
                    ? "border-indigo-500 ring-2 ring-indigo-200"
                    : "border-gray-200"
                }`}
              >
                <Image
                  src={img}
                  alt=""
                  fill
                  className="object-cover"
                />
              </button>

            ))}

          </div>

        </div>

        {/* RIGHT */}

        <div>

          <div className="flex flex-wrap gap-3">

            <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
              {product.category}
            </span>

            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              {product.brand}
            </span>

          </div>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            {product.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {product.description}
          </p>

          {/* Rating */}

          <div className="mt-8 flex gap-4">

            <div className="flex items-center gap-2 rounded-xl bg-yellow-50 px-5 py-3">

              <Star
                className="fill-yellow-500 text-yellow-500"
                size={20}
              />

              {product.rating}

            </div>

            <div className="flex items-center gap-2 rounded-xl bg-rose-50 px-5 py-3">

              <BadgePercent
                className="text-rose-500"
                size={20}
              />

              {Math.round(product.discountPercentage)}% OFF

            </div>

          </div>

          {/* Price */}

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-indigo-600 to-blue-600 p-8 text-white">

            <p className="text-sm uppercase tracking-widest opacity-80">
              Price
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              ${product.price}
            </h2>

          </div>

          {/* Stock */}

          <div className="mt-10 rounded-3xl bg-white p-6 shadow-lg">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Package className="text-green-600" />

                <span className="font-semibold">
                  Stock Available
                </span>

              </div>

              <span className="font-bold text-green-600">
                {product.stock}
              </span>

            </div>

            <div className="mt-4 h-3 rounded-full bg-gray-200">

              <div
                className="h-3 rounded-full bg-green-500"
                style={{
                  width: `${Math.min(product.stock,100)}%`,
                }}
              />

            </div>

          </div>

          {/* CTA */}

          <button
            className="
            mt-10
            w-full
            rounded-2xl
            bg-gradient-to-r
            from-indigo-600
            to-blue-600
            py-5
            text-lg
            font-semibold
            text-white
            shadow-xl
            transition-all
            duration-300
            hover:scale-[1.02]
          "
          >
            Buy Now
          </button>

        </div>

      </div>

    </main>
  );
}