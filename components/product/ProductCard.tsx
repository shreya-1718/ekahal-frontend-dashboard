import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="overflow-hidden rounded-xl border bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
        <div className="relative h-56 w-full">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-2 p-4">
          <h2 className="line-clamp-1 text-lg font-semibold">
            {product.title}
          </h2>

          <p className="text-sm capitalize text-gray-500">
            {product.category}
          </p>

          <div className="flex items-center justify-between">
            <span className="font-bold text-blue-600">
              ${product.price}
            </span>

            <span>⭐ {product.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}