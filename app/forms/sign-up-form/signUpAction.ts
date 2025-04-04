"use server";

import { signUpEndpoint } from "@/app/endpoints";
import { post } from "@/app/util/fetch";
import { redirect } from "next/navigation";
import { ActionState } from "../models";

export async function signUpAction(
  prevState: ActionState | null,
  data: FormData
) {
  const { error, message } = await post(signUpEndpoint, data);
  if (error) {
    return {
      message,
      error,
    };
  }
  redirect("/");
}
