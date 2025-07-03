import React, { type ChangeEvent } from 'react';
import { Search } from 'lucide-react';
import { useProducts } from '../../hooks/use-product';

const SearchBar: React.FC = () => {
  const { searchTerm, setSearchTerm } = useProducts();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="relative flex-1 max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        placeholder="Search products..."
        aria-label="Search products"
      />
    </div>
  );
};

export default SearchBar;