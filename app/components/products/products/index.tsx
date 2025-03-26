import { getProducts } from "@/app/getProducts";
import { Grid2 as Grid } from "@mui/material";
import Product from "../product";
import ProductsPagination from "./Pagination";
import { FC } from "react";

interface ProductsProps {
  page?: number;
}

const Products: FC<ProductsProps> = async ({ page }) => {
  const products = await getProducts(page ? page - 1 : 0);

  return (
    <>
      <Grid container spacing={2}>
        {products.data.map((product) => (
          <Grid key={product.id} size={[12, 6, 6, 4]}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
      <ProductsPagination total={products.pagination.total} />
    </>
  );
};

export default Products;
