import { useContext } from 'react';
import { ProductContext } from '../context/product-context';
import type { ProductContextType } from '../types';

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  
  return context;
};