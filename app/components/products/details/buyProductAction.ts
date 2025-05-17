"use server";

import { buyProductEndpoint } from "@/app/endpoints";
import { post } from "@/app/util/fetch";
import { ActionState } from "@/app/forms/models";
import { redirect } from "next/navigation";

export async function buyProductAction(
  prevState: ActionState | null,
  data: FormData
) {
  const endpoint = buyProductEndpoint();
  const {
    error,
    message,
    data: checkoutSesstionInitResponse,
  } = await post(endpoint, data);
  if (error) {
    return {
      message,
      error,
    };
  }
  redirect(checkoutSesstionInitResponse.url);
}
