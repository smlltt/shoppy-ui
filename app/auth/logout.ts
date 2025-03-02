"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { AUTHENTICATION_COOKIE } from "./consts";
import { openPaths, privatePaths } from "../constants/routes";

export const logout = async () => {
  (await cookies()).delete(AUTHENTICATION_COOKIE);
  redirect(openPaths.login);
};
