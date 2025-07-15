import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Product, ProductFilters, ProductColor } from '../types';
import { Filter, X } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product, color: ProductColor, size: string) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: Set<string>;
  filters?: ProductFilters;
  showFilters?: boolean;
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products, 
  onAddToCart, 
  onToggleFavorite,
  favorites,
  filters = {},
  showFilters = true,
  title = "New Arrivals",
  subtitle = "Discover our latest pieces where Renaissance artistry meets contemporary streetwear"
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(filters.category || 'All');
  const [selectedCollection, setSelectedCollection] = useState<string>(filters.collection || 'All');
  const [priceRange, setPriceRange] = useState<[number, number]>(filters.priceRange || [0, 400]);
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  
  const categories = ['All', 'T-Shirts', 'Hoodies', 'Blazers', 'Pants', 'Blouses', 'Jackets', 'Sweaters', 'Skirts', 'Coats', 'Sweatshirts', 'Dresses'];
  const collections = ['All', 'The Florence Drop', 'Light & Shadow', 'Canvas Series'];
  
  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const collectionMatch = selectedCollection === 'All' || product.collection === selectedCollection;
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const genderMatch = !filters.gender || product.gender === filters.gender || product.gender === 'unisex';
    
    return categoryMatch && collectionMatch && priceMatch && genderMatch;
  });

  // Sort products based on selected option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0; // Keep original order for 'featured'
    }
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-6">
          {title}
        </h2>
        <p className="text-xl text-charcoal-600 mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>
        
        {showFilters && (
          <>
            {/* Mobile Filter Button */}
            <div className="md:hidden mb-8">
              <button
                onClick={() => setShowFilterPanel(!showFilterPanel)}
                className="flex items-center space-x-2 bg-black text-white px-4 py-2 text-sm font-medium tracking-wide uppercase"
              >
                <Filter size={16} />
                <span>Filters</span>
              </button>
            </div>

            {/* Filter Panel */}
            <div className={`${showFilterPanel ? 'block' : 'hidden'} md:block mb-12`}>
              <div className="bg-charcoal-50 p-6 rounded-lg">
                <div className="grid md:grid-cols-4 gap-6">
                  {/* Category Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-charcoal-900 mb-3">Category</h3>
                    <div className="flex flex-wrap gap-2">
                      {categories.slice(0, 6).map((category) => (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`px-3 py-1 text-xs font-medium tracking-wide uppercase transition-colors ${
                            selectedCategory === category
                              ? 'bg-black text-white'
                              : 'bg-white text-charcoal-700 hover:bg-charcoal-200'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Collection Filter */}
                  <div>
                    <h3 className="text-sm font-medium text-charcoal-900 mb-3">Collection</h3>
                    <div className="flex flex-wrap gap-2">
                      {collections.map((collection) => (
                        <button
                          key={collection}
                          onClick={() => setSelectedCollection(collection)}
                          className={`px-3 py-1 text-xs font-medium tracking-wide uppercase transition-colors ${
                            selectedCollection === collection
                              ? 'bg-black text-white'
                              : 'bg-white text-charcoal-700 hover:bg-charcoal-200'
                          }`}
                        >
                          {collection}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h3 className="text-sm font-medium text-charcoal-900 mb-3">Price Range</h3>
                    <div className="space-y-2">
                      <input
                        type="range"
                        min="0"
                        max="400"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                      <div className="flex justify-between text-xs text-charcoal-600">
                        <span>€0</span>
                        <span>€{priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Sort By */}
                  <div>
                    <h3 className="text-sm font-medium text-charcoal-900 mb-3">Sort By</h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-3 py-2 text-xs font-medium tracking-wide uppercase bg-white text-charcoal-700 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="featured">Featured</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="name">Name: A to Z</option>
                    </select>
                  </div>
                </div>

                {/* Mobile Close Button */}
                <div className="md:hidden mt-4 text-center">
                  <button
                    onClick={() => setShowFilterPanel(false)}
                    className="flex items-center space-x-2 bg-charcoal-700 text-white px-4 py-2 text-sm font-medium tracking-wide uppercase mx-auto"
                  >
                    <X size={16} />
                    <span>Close Filters</span>
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            isFavorite={favorites.has(product.id)}
          />
        ))}
      </div>

      {sortedProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-xl text-charcoal-600">No products found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedCollection('All');
              setPriceRange([0, 400]);
              setSortBy('featured');
            }}
            className="mt-4 bg-black text-white px-6 py-3 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;