"use server";

import { get } from "./util/fetch";
import { productsEndpoint } from "./endpoints";
import { IProduct } from "./components/products/interfaces";

export const getProducts = async (
  page: number,
  status?: "available" | "unavailable"
) => {
  return get<{ pagination: { total: number }; data: IProduct[] }>(
    productsEndpoint(page, status),
    {
      // cache: "force-cache",
      next: { tags: ["products"] },
    }
  );
};
