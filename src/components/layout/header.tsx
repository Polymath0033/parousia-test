import React from 'react';
import { Heart } from 'lucide-react';
import { useFavorites } from '../../hooks/use-favorites';

const Header: React.FC = () => {
  const { getFavoriteCount } = useFavorites();

  return (
    <header className="mb-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Product Dashboard
          </h1>
          <p className="text-gray-600">
            Discover and explore our product collection
          </p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <Heart className="w-4 h-4" />
            <span>Favorites</span>
          </div>
          <div className="text-2xl font-bold text-red-500">
            {getFavoriteCount()}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;