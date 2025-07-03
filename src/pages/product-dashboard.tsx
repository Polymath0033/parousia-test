import React from 'react';
import { useProducts } from '../hooks/use-product';
import LoadingSpinner from '../components/ui/loading-spinner';
import ErrorMessage from '../components/ui/error-message';
import Header from '../components/layout/header';
import SearchBar from '../components/filters/search-bar';
import CategoryFilter from '../components/filters/category-filter';
import ProductCard from '../components/product/product-card';
import type { Product } from '../types';

const ProductDashboard: React.FC = () => {
  const { products, loading, error, searchTerm, selectedCategory } = useProducts();

  if (loading) {
    return <LoadingSpinner message="Loading products..." />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }

  const hasActiveFilters = Boolean(searchTerm || selectedCategory);
  const resultsText = hasActiveFilters 
    ? `Showing ${products.length} result${products.length !== 1 ? 's' : ''}`
    : `${products.length} product${products.length !== 1 ? 's' : ''}`;

  const renderProductGrid = (): React.ReactElement => {
    if (products.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            No products found matching your criteria.
          </p>
          {hasActiveFilters && (
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your search or filter settings.
            </p>
          )}
        </div>
      );
    }

    return (
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        role="grid"
        aria-label="Products"
      >
        {products.map((product: Product) => (
          <div key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Header />

       
        <section className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <SearchBar />
            <div className="w-full sm:w-64">
              <CategoryFilter />
            </div>
          </div>
          
          {hasActiveFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600" role="status" aria-live="polite">
                {resultsText}
                {searchTerm && (
                  <> for "<span className="font-semibold">{searchTerm}</span>"</>
                )}
                {selectedCategory && (
                  <> in <span className="font-semibold">{selectedCategory}</span></>
                )}
              </p>
            </div>
          )}
        </section>

        
        <main>
          {renderProductGrid()}
        </main>
      </div>
    </div>
  );
};

export default ProductDashboard;