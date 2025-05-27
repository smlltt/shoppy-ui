import { getProducts } from "@/app/getProducts";
import { FC } from "react";
import ProductsGrid from "./grid";

interface ProductsProps {
  page?: number;
}

const Products: FC<ProductsProps> = async ({ page }) => {
  const products = await getProducts(page ? page - 1 : 0, "available");
  return <ProductsGrid products={products} />;
};

export default Products;
