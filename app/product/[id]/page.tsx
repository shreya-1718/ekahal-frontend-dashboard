import { getProduct } from "@/services/api";
import ProductDetails from "@/components/product/ProductDetails";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: Props) {
  const { id } = await params;

  const product = await getProduct(id);

  return <ProductDetails product={product} />;
}