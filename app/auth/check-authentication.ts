import { cookies } from "next/headers";

export const checkAuthentication = async () => {
  return !!(await cookies()).get("Authentication")?.value;
};
