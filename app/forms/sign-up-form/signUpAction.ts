"use server";

export type State = {
  status: string;
  message: string;
  error?: string;
} | null;

export async function signUpAction(prevState: State | null, data: FormData) {
  console.log("server action", data);

  return {
    status: "success",
    message: `Welcome, ${data.get("email")} ${data.get("password")}!`,
  };
}
