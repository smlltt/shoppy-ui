"use server";

import { productsEndpoint } from "@/app/endpoints";
import { post } from "@/app/util/fetch";
import { redirect } from "next/navigation";
import { ActionState } from "../models";
import { revalidateTag } from "next/cache";

export async function createProductAction(
  prevState: ActionState | null,
  data: FormData
) {
  const endpoint = productsEndpoint();
  const { error, message } = await post(endpoint, data);
  revalidateTag("products");
  if (error) {
    return {
      message,
      error,
    };
  }
  redirect("/");
}
