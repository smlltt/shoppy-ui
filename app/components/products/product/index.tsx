import { FC } from "react";
import { IProduct } from "../interfaces";
import { Card, Stack, Typography } from "@mui/material";
import Image from "next/image";
import { API_URL } from "@/app/constants/api";
import ImageIcon from "@mui/icons-material/Image";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = async ({ product }) => {
  console.log(
    "src",
    product.hasImage && `${API_URL}/products/${product.id}.jpg`
  );
  return (
    <Card
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 1,
        height: "55vh",
      }}
    >
      <Typography variant="h5" sx={{ pb: 2 }}>
        {product.name}
      </Typography>
      {product.hasImage ? (
        <Stack className="justify-center items-center h-full">
          <Image
            width={200}
            height={200}
            src={`${API_URL}/products/${product.id}.jpg`}
            alt={`${product.name} image`}
            unoptimized
          />
        </Stack>
      ) : (
        <Stack className="justify-center items-center h-full">
          <ImageIcon sx={{ fontSize: 200 }} />
        </Stack>
      )}
      <Typography>{product.description}</Typography>
      <Typography>{`$ ${product.price}`}</Typography>
    </Card>
  );
};

export default Product;
