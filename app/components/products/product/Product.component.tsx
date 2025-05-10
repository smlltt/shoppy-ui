"use client";

import { Card, Typography } from "@mui/material";
import { FC, ReactNode } from "react";
import { IProduct } from "../interfaces";
import { useRouter } from "next/navigation";
import { privatePaths } from "@/app/constants/routes";
import { slugify } from "@/app/util/slugify";

interface ProductComponentProps {
  product: IProduct;
  children: ReactNode;
}

const ProductComponent: FC<ProductComponentProps> = ({ product, children }) => {
  const router = useRouter();
  return (
    <Card
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        height: "55vh",
        cursor: "pointer",
      }}
      onClick={() =>
        router.push(
          privatePaths.productDetails(`${product.id}--${slugify(product.name)}`)
        )
      }
    >
      <Typography variant="h5" sx={{ pb: 2 }}>
        {product.name}
      </Typography>
      {children}

      <Typography>{product.description}</Typography>
      <Typography>{`$ ${product.price}`}</Typography>
    </Card>
  );
};

export default ProductComponent;
