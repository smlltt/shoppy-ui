"use client";

import { FC } from "react";
import { IProduct } from "../interfaces";
import { Button, Stack } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import Image from "next/image";
import { API_URL } from "@/app/constants/api";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import checkout from "@/app/checkout/actions/checkout";
import getStripe from "@/app/checkout/stripe";

interface ProductDetailsProps {
  product?: IProduct;
}

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  {
    /* alrernative approach */
  }
  // const [state, formAction] = useActionState<ActionState, FormData>(
  //   buyProductAction,
  //   null
  // );

  // const { register } = useForm<{ id: number }>({
  //   defaultValues: {
  //     id: product?.id,
  //   },
  // });

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleCheckout = async () => {
    const session = await checkout(product.id);
    const stripe = await getStripe();
    await stripe?.redirectToCheckout({ sessionId: session.data.id });
  };
  return (
    <>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h2" gutterBottom>
            {product.name}
          </Typography>
          <Typography gutterBottom>{product.description}</Typography>
          <Typography gutterBottom>$ {product.price}</Typography>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
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
        </Grid>
      </Grid>
      {/* alrernative approach */}
      {/* <form action={formAction}>
        <input type="hidden" {...register("id")} />
        <Button variant="outlined" type="submit">
          Buy
        </Button>
      </form> */}

      <Button variant="outlined" onClick={handleCheckout}>
        Buy
      </Button>

      {/* {state?.error && parseError(state?.message)} */}
    </>
  );
};

export default ProductDetails;
