"use server";

import { buyProductEndpoint } from "@/app/endpoints";
import { post } from "@/app/util/fetch";

export default async function checkout(productId: number) {
  return post(buyProductEndpoint(), { id: productId });
}
