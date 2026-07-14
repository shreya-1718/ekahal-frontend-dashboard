"use client";

import { useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  title: string;
}

export default function ProductGallery({
  images,
  title,
}: Props) {
  const [selectedImage, setSelectedImage] = useState(
    images[0]
  );

  return (
    <div className="space-y-6">
      {/* Main Image */}

      <div className="relative aspect-square overflow-hidden rounded-3xl border bg-white shadow-lg">
        <Image
          src={selectedImage}
          alt={title}
          fill
          priority
          className="object-contain p-10 transition-all duration-500 hover:scale-105"
        />
      </div>

      {/* Dots */}

      <div className="flex justify-center gap-2">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              selectedImage === image
                ? "w-8 bg-indigo-600"
                : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Thumbnails */}

      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square overflow-hidden rounded-2xl border-2 transition-all ${
              selectedImage === image
                ? "border-indigo-600 shadow-lg"
                : "border-transparent hover:border-indigo-300"
            }`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-2"
            />
          </button>
        ))}
      </div>
    </div>
  );
}