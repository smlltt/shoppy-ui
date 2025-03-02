import { cookies } from "next/headers";
import { AUTHENTICATION_COOKIE } from "./consts";

export const checkAuthentication = async () => {
  return !!(await cookies()).get(AUTHENTICATION_COOKIE)?.value;
};
