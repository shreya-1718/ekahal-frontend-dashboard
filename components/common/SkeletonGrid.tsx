import ProductCardSkeleton from "./ProductCardSkeleton";

export default function SkeletonGrid() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
}