"use cache";

import { getFreaturedProducts } from "@/lib/products/product-select";

export const generateStaticParams = async () => {
  const products = await getFreaturedProducts();
  return products.map((product) => ({ id: product.id.toString() }));
};

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <h1>Product {id}</h1>
    </div>
  );
}
