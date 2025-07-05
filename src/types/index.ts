import type { Product } from "./product";

export type { Product, ProductFilters, ProductContextType } from "./product";
export type {
  ApiResponse,
  ApiError,
  ProductsApiResponse,
  CategoriesApiResponse,
} from "./api";

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface LoadingSpinnerProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export interface StarRatingProps {
  rating: number;
  count: number;
  size?: string;
  showCount?: boolean;
}

export interface ProductCardProps {
  product: Product;
}
