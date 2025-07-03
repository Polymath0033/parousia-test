import type { Product, ProductsApiResponse, CategoriesApiResponse, ApiError } from '../types';

const API_BASE_URL = 'https://fakestoreapi.com';

class ApiService {
  private handleResponse = async <T>(response: Response): Promise<T> => {
    if (!response.ok) {
      const error: ApiError = {
        message: `HTTP error! status: ${response.status}`,
        status: response.status,
        code: response.statusText
      };
      console.error('API Error:', error);
      throw error;
    }
    console.log('API Response:', response);
    return response.json();
  }

 fetchProducts = async (): Promise<Product[]> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products`);
      console.log('API Response:', response);
      return this.handleResponse<Product[]>(response);
    } catch (error) {
      throw new Error(`Failed to fetch products: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

    async fetchCategories(): Promise<string[]> {
        try {
        const response = await fetch(`${API_BASE_URL}/products/categories`);
        return this.handleResponse<CategoriesApiResponse>(response);
        } catch (error) {
        throw new Error(`Failed to fetch categories: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
   fetchProductsByCategory = async (category: string): Promise<Product[]> => {
      try {
        const response = await fetch(`${API_BASE_URL}/products/category/${encodeURIComponent(category)}`);
        return this.handleResponse<Product[]>(response);
      } catch (error) {
        throw new Error(`Failed to fetch products for category "${category}": ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    }

  fetchProductById = async (id: number): Promise<Product> => {
    try {
      const response = await fetch(`${API_BASE_URL}/products/${id}`);
      return this.handleResponse<Product>(response);
    } catch (error) {
      throw new Error(`Failed to fetch product with id ${id}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
  }



// Export singleton instance
export const apiService = new ApiService();