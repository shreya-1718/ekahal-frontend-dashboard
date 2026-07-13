export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-blue-600">
          Product Dashboard
        </h1>

        <div className="text-sm font-medium">
          Favorites ❤️ 0
        </div>
      </div>
    </header>
  );
}