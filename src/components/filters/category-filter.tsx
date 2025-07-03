import React, { type ChangeEvent } from 'react';
import { Filter } from 'lucide-react';
import { useProducts } from '../../hooks/use-product';

const CategoryFilter: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory } = useProducts();

  const handleCategoryChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setSelectedCategory(event.target.value);
  };

  const formatCategoryName = (category: string): string => {
    return category.charAt(0).toUpperCase() + category.slice(1);
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Filter className="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        className="block w-full pl-10 pr-8 py-2 border border-gray-300 rounded-md leading-5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
        aria-label="Filter by category"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {formatCategoryName(category)}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
};

export default CategoryFilter;