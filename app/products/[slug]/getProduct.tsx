"use server";

import { get } from "@/app/util/fetch";
import { productEndpoint } from "@/app/endpoints";
import { IProduct } from "@/app/components/products/interfaces";

export const getProduct = async (id: number) => {
  return get<{ pagination: { total: number }; data: IProduct }>(
    productEndpoint(id),
    {
      // cache: "force-cache",
      next: { tags: [`product${id}`] },
    }
  );
};
