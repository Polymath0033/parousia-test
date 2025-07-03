import React, { createContext, useState, useEffect, useMemo, useCallback,type ReactNode } from 'react';
import {apiService} from '../services/api';
import { getFavorites, saveFavorites } from '../utils/storage';
import type { Product, ProductContextType } from '../types';

export const ProductContext = createContext<ProductContextType | undefined>(undefined);

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [favorites, setFavorites] = useState<number[]>(() => getFavorites());

 
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setLoading(true);
        setError(null);
        
        const [productsData, categoriesData] = await Promise.all([
          apiService.fetchProducts(),
          apiService.fetchCategories()
        ]);

        setProducts(productsData);
        setCategories(categoriesData);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    saveFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = useCallback((productId: number): void => {
    setFavorites(prev => 
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  }, []);

  // Filtered products with memoization
  const filteredProducts = useMemo((): Product[] => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const contextValue: ProductContextType = useMemo(() => ({
    products: filteredProducts,
    allProducts: products,
    categories,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    favorites,
    toggleFavorite
  }), [
    filteredProducts,
    products,
    categories,
    loading,
    error,
    searchTerm,
    selectedCategory,
    favorites,
    toggleFavorite
  ]);

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};