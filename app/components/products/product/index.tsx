import { FC } from "react";
import { IProduct } from "../interfaces";
import ProductComponent from "./Product.component";
import { Stack } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import Image from "next/image";
import { API_URL } from "@/app/constants/api";

interface ProductProps {
  product: IProduct;
}

const Product: FC<ProductProps> = async ({ product }) => {
  return (
    <ProductComponent product={product}>
      {product.hasImage ? (
        <Stack className="justify-center items-center h-full">
          <Image
            width={200}
            height={200}
            src={`${API_URL}/images/products/${product.id}.jpg`}
            alt={`${product.name} image`}
            unoptimized
          />
        </Stack>
      ) : (
        <Stack className="justify-center items-center h-full">
          <ImageIcon sx={{ fontSize: 200 }} />
        </Stack>
      )}
    </ProductComponent>
  );
};

export default Product;
