export default function Spinner() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl border bg-white p-4"
        >
          <div className="h-48 rounded bg-gray-200" />
          <div className="mt-4 h-4 rounded bg-gray-200" />
          <div className="mt-2 h-4 w-2/3 rounded bg-gray-200" />
        </div>
      ))}
    </div>
  );
}