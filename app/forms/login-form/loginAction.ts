"use server";

import { loginEndpoint, signUpEndpoint } from "@/app/endpoints";
import { post } from "@/app/util/fetch";
import { redirect } from "next/navigation";
import { ActionState } from "../models";

export async function loginAction(
  prevState: ActionState | null,
  data: FormData
) {
  const { error, message } = await post(loginEndpoint, data, true);
  if (error) {
    return {
      message,
      error,
    };
  }
  redirect("/");
}
