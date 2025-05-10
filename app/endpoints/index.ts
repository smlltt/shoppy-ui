import { API_URL } from "../constants/api";

export const signUpEndpoint = `${API_URL}/users/`;
export const loginEndpoint = `${API_URL}/auth/login/local`;
export const productsEndpoint = (page?: number) =>
  `${API_URL}/products${page ? `?page=${page}` : ""}`;
export const productEndpoint = (id: number) => `${API_URL}/products/${id}`;
export const uploadProductImageEndpoint = (id: number) =>
  `${API_URL}/products/${id}/image`;
export const meEndpoint = `${API_URL}/users/me`;
