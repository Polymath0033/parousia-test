import React, { type MouseEvent,type KeyboardEvent } from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../../hooks/use-favorites';
import StarRating from '../ui/star-rating';
import type { ProductCardProps } from '../../types';

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const isProductFavorite = isFavorite(product.id);

  const handleFavoriteClick = (event: MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault();
    toggleFavorite(product.id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>): void => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleFavorite(product.id);
    }
  };

  const formatPrice = (price: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 focus-within:ring-2 focus-within:ring-blue-500">
      <div className="relative">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain bg-gray-50 p-4"
          loading="lazy"
        />
        <button
          onClick={handleFavoriteClick}
          onKeyDown={handleKeyDown}
          className="absolute top-2 right-2 p-2 rounded-full bg-white shadow-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          aria-label={isProductFavorite ? 'Remove from favorites' : 'Add to favorites'}
          type="button"
        >
          <Heart
            className={`w-5 h-5 ${
              isProductFavorite 
                ? 'fill-red-500 text-red-500' 
                : 'text-gray-400 hover:text-red-500'
            } transition-colors`}
          />
        </button>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h3>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-2xl font-bold text-green-600">
            {formatPrice(product.price)}
          </span>
        </div>
        
        <StarRating 
          rating={product.rating.rate} 
          count={product.rating.count} 
        />
        
        <div className="mt-2">
          <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;