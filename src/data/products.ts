import type { Product } from "@/types/content";

export const products: Product[] = [];
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
