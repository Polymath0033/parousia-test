import { useProducts } from './use-product';

interface UseFavoritesReturn {
  favorites: number[];
  toggleFavorite: (productId: number) => void;
  isFavorite: (productId: number) => boolean;
  getFavoriteCount: () => number;
  hasFavorites: boolean;
}

export const useFavorites = (): UseFavoritesReturn => {
  const { favorites, toggleFavorite } = useProducts();

  const isFavorite = (productId: number): boolean => {
    return favorites.includes(productId);
  };
  
  const getFavoriteCount = (): number => {
    return favorites.length;
  };

  const hasFavorites = favorites.length > 0;

  return {
    favorites,
    toggleFavorite,
    isFavorite,
    getFavoriteCount,
    hasFavorites
  };
};