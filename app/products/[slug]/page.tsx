import { getProduct } from "./getProduct";
import { getIdFromSlug } from "@/app/util/getIdFromSlug";
import ProductDetails from "@/app/components/products/details";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const product = await getProduct(+getIdFromSlug(slug));
  return <ProductDetails product={product.data} />;
}
