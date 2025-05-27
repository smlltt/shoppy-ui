import { API_URL } from "../constants/api";

export const signUpEndpoint = `${API_URL}/users/`;
export const loginEndpoint = `${API_URL}/auth/login/local`;
export const productsEndpoint = (
  page?: number,
  status?: "available" | "unavailable"
) =>
  `${API_URL}/products${page ? `?page=${page}&status=${status || ""}` : `${status ? `?status=${status}` : ""}`}`;
export const productEndpoint = (id: number) => `${API_URL}/products/${id}`;
export const uploadProductImageEndpoint = (id: number) =>
  `${API_URL}/products/${id}/image`;
export const meEndpoint = `${API_URL}/users/me`;
export const buyProductEndpoint = () => `${API_URL}/checkout/session`;
