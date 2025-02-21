import { cookies } from "next/headers";
import { setAuthCookie } from "./setAuthCookie";

const getHeaders = async () => ({ Cookie: (await cookies()).toString() });

export const post = async (
  endpoint: string,
  data: FormData,
  shouldSetCookie?: boolean
) => {
  const headers = await getHeaders();
  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: JSON.stringify(Object.fromEntries(data)),
  });
  const parsedRes = await res?.json();

  if (!res.ok) {
    return {
      message: parsedRes.message || "Something went wrong",
      error: parsedRes.error || "Error",
    };
  }
  shouldSetCookie && setAuthCookie(res);

  return { error: "", message: "Success" };
};

export const get = async (endpoint: string) => {
  const headers = await getHeaders();
  console.log({ headers });
  const res = await fetch(endpoint, {
    headers,
  });
  return res.json();
};
