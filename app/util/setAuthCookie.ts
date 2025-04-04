import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { AUTHENTICATION_COOKIE } from "../auth/consts";

export const setAuthCookie = async (response: Response) => {
  const cookieHeader = response.headers.get("Set-Cookie");
  if (cookieHeader) {
    const token = cookieHeader.split(";")[0].split("=")[1];
    const cookieStore = await cookies();
    cookieStore.set({
      name: AUTHENTICATION_COOKIE,
      value: token,
      secure: true,
      httpOnly: true,
      expires: new Date(jwtDecode(token).exp! * 1000),
    });
  }
};
