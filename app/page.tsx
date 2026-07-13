import Navbar from "@/components/layout/Navbar";
import ProductGrid from "@/components/product/ProductGrid";
import { getProducts } from "@/services/api";

export default async function Home() {
  const data = await getProducts();

  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        <ProductGrid products={data.products} />
      </main>
    </>
  );
}