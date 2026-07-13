import Navbar from "@/components/layout/Navbar";
import Dashboard from "@/components/Dashboard";
import { getProducts } from "@/services/api";

export default async function Home() {
  const data = await getProducts();

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <Dashboard products={data.products} />
      </main>
    </>
  );
}