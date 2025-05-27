"use client";
import { Grid2 as Grid } from "@mui/material";
import Product from "../product";
import ProductsPagination from "./Pagination";
import { FC, useEffect } from "react";
import { IProduct } from "../interfaces";
import { io } from "socket.io-client";
import { API_URL } from "@/app/constants/api";
import { useRouter } from "next/navigation";

interface ProductsGridProps {
  products: { pagination: { total: number }; data: IProduct[] };
}

const ProductsGrid: FC<ProductsGridProps> = ({ products }) => {
  const { refresh } = useRouter();
  useEffect(() => {
    const socket = io(API_URL);
    socket.on("productUpdated", () => {
      //triggers refresh of products when some other user alters the product list (by adding a product or buying it)
      refresh();
    });

    return () => {
      socket.disconnect();
    };
  }, []);
  return (
    <>
      <Grid container spacing={2} sx={{ height: "80vh", overflow: "scroll" }}>
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

export default ProductsGrid;
