import { FC } from "react";
import { IProduct } from "../interfaces";
import { Card, Typography } from "@mui/material";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = async ({ product }) => {
  return (
    <Card sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h5" sx={{ pb: 2 }}>
        {product.name}
      </Typography>
      <Typography>{product.description}</Typography>
      <Typography>{`$ ${product.price}`}</Typography>
    </Card>
  );
};

export default Product;
