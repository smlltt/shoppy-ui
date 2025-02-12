"use server";

import { signUpEndpoint } from "@/app/endpoints";
import { redirect } from "next/navigation";

export type State = {
  status: string;
  message: string | string[];
  error?: string;
} | null;

export async function signUpAction(prevState: State | null, data: FormData) {
  const res = await fetch(signUpEndpoint, { method: "POST", body: data });
  const parsedRes = await res.json();
  if (!res.ok) {
    return {
      status: "error",
      message: parsedRes.message,
      error: parsedRes.error,
    };
  }
  redirect("/");
}
