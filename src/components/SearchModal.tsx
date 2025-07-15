import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { products } from '../data/products';
import { Product, ProductColor } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, color: ProductColor, size: string) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: Set<string>;
}

const SearchModal: React.FC<SearchModalProps> = ({ 
  isOpen, 
  onClose, 
  onAddToCart, 
  onToggleFavorite, 
  favorites 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    const timer = setTimeout(() => {
      const results = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.collection.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute top-0 left-0 right-0 bg-white shadow-xl max-h-[80vh] overflow-hidden">
        <div className="p-4 border-b">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400" size={20} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                autoFocus
              />
            </div>
            <button onClick={onClose} className="text-charcoal-400 hover:text-charcoal-600">
              <X size={24} />
            </button>
          </div>
        </div>
        
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          {isSearching ? (
            <div className="text-center py-8">
              <div className="animate-spin w-6 h-6 border-2 border-charcoal-300 border-t-black rounded-full mx-auto"></div>
              <p className="text-charcoal-600 mt-2">Searching...</p>
            </div>
          ) : searchQuery && searchResults.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-charcoal-600">No products found for "{searchQuery}"</p>
            </div>
          ) : searchResults.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {searchResults.map((product) => (
                <div key={product.id} className="border border-charcoal-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-32 object-cover rounded mb-3"
                  />
                  <h3 className="font-medium text-charcoal-900 mb-1">{product.name}</h3>
                  <p className="text-sm text-charcoal-600 mb-2">{product.collection}</p>
                  <p className="font-medium text-charcoal-900 mb-3">€{product.price}</p>
                  <button
                    onClick={() => {
                      onAddToCart(product, product.colors[0], product.sizes[0]);
                      onClose();
                    }}
                    className="w-full bg-black text-white py-2 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <Search className="w-12 h-12 text-charcoal-300 mx-auto mb-4" />
              <p className="text-charcoal-600">Start typing to search products...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;