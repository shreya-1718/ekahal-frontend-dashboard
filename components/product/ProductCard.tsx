import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";
import FavoriteButton from "./FavoriteButton";

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

  <div className="absolute right-3 top-3">
    <FavoriteButton productId={product.id} />
  </div>
</div>

        <div className="space-y-2 p-4">
          <h2 className="line-clamp-1 text-lg font-semibold">
            {product.title}
          </h2>

          <p className="text-sm capitalize text-gray-500">
            {product.category}
          </p>

          
        </div>
      </div>
    </Link>
  );
}