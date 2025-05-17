"use server";

import { productsEndpoint, uploadProductImageEndpoint } from "@/app/endpoints";
import { getHeaders, post } from "@/app/util/fetch";
import { redirect } from "next/navigation";
import { ActionState } from "../models";
import { revalidateTag } from "next/cache";

export async function createProductAction(
  prevState: ActionState | null,
  data: FormData
) {
  const endpoint = productsEndpoint();
  const { error, message, data: product } = await post(endpoint, data);
  const productImage = data.get("image");
  if (productImage instanceof File && !error) {
    await uploadProductImage(product.id, productImage);
  }
  revalidateTag("products");
  if (error) {
    return {
      message,
      error,
    };
  }
  redirect("/");
}

export async function uploadProductImage(productId: number, file: File) {
  const formData = new FormData();
  formData.append("image", file);
  const headers = await getHeaders();
  await fetch(uploadProductImageEndpoint(productId), {
    body: formData,
    method: "POST",
    headers,
  });
}
