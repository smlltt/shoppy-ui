import Product from "@/app/components/products/product";
import { getProduct } from "@/app/getProducts";
import { getIdFromSlug } from "@/app/util/getIdFromSlug";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await getProduct(+getIdFromSlug(slug));

  return <Product product={product.data} />;
}
