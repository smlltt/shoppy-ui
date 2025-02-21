"use server";

import { cookies } from "next/headers";
import { API_URL } from "./constants/api";
import { get } from "./util/fetch";
import { meEndpoint } from "./endpoints";

export const getMe = async () => {
  return get(meEndpoint);
};
