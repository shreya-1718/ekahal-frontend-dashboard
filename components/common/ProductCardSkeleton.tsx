export default function ProductCardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-3xl border bg-white shadow-md">
      <div className="h-72 bg-gray-200" />

      <div className="space-y-4 p-5">
        <div className="h-6 w-24 rounded-full bg-gray-200" />

        <div className="h-6 w-4/5 rounded bg-gray-200" />

        <div className="h-5 w-1/2 rounded bg-gray-200" />

        <div className="flex justify-between">
          <div className="h-8 w-24 rounded-full bg-gray-200" />

          <div className="h-8 w-20 rounded-full bg-gray-200" />
        </div>

        <div className="mt-4 h-12 rounded bg-gray-200" />
      </div>
    </div>
  );
}