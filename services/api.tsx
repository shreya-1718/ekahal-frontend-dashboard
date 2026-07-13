import { Product ,ProductsResponse} from '@/types/product';

const BASE_URL = "https://dummyjson.com";

export async function getProducts(): Promise<ProductsResponse> {
  const response = await fetch(`${BASE_URL}/products?limit=100`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  return response.json();
}

export async function getProduct(id: string): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  return response.json();
}