export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductFilters {
  searchTerm: string;
  selectedCategory: string;
}

export interface ProductContextType {
  products: Product[];
  allProducts: Product[];
  categories: string[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  favorites: number[];
  toggleFavorite: (productId: number) => void;
}