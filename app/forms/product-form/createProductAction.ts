"use server";

import { productsEndpoint } from "@/app/endpoints";
import { post } from "@/app/util/fetch";
import { redirect } from "next/navigation";
import { ActionState } from "../models";

export async function createProductAction(
  prevState: ActionState | null,
  data: FormData
) {
  const { error, message } = await post(productsEndpoint, data);
  if (error) {
    return {
      message,
      error,
    };
  }
  redirect("/");
}
