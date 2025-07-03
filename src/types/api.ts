import type { Product } from './product';
export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export interface ApiError {
  message: string;
  status?: number;
  code?: string;
}

export type ProductsApiResponse = Product[];
export type CategoriesApiResponse = string[];