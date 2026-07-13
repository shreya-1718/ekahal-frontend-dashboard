import Dashboard from "@/components/Dashboard";
import Hero from "@/components/layout/Hero";
import Navbar from "@/components/layout/Navbar";
import { getProducts } from "@/services/api";

export default async function Home() {
  const data = await getProducts();

  return (
    <>
      <Navbar />

      {/* <Hero /> */}

      <main className="mx-auto mt-6 max-w-[1500px] px-8 pb-12">
        <Dashboard products={data.products} />
      </main>
    </>
  );
}