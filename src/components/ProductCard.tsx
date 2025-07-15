import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Product, ProductColor } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, color: ProductColor, size: string) => void;
  onToggleFavorite: (productId: string) => void;
  isFavorite: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onAddToCart, 
  onToggleFavorite,
  isFavorite 
}) => {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);
  const [showSizeSelector, setShowSizeSelector] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedColor, selectedSize);
  };

  return (
    <div className="group relative">
      <div className="aspect-square bg-charcoal-50 overflow-hidden relative">
        <img 
          src={selectedColor.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Overlay with actions */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col space-y-3">
            {showSizeSelector ? (
              <div className="bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium mb-2">Select Size:</p>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-2 text-xs border transition-colors ${
                        selectedSize === size
                          ? 'bg-black text-white border-black'
                          : 'bg-white text-black border-gray-300 hover:border-black'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 bg-black text-white px-4 py-2 text-xs font-medium tracking-wide uppercase hover:bg-gray-800 transition-colors flex items-center justify-center space-x-1"
                  >
                    <ShoppingBag size={14} />
                    <span>Add to Cart</span>
                  </button>
                  <button 
                    onClick={() => setShowSizeSelector(false)}
                    className="px-3 py-2 text-xs border border-gray-300 hover:border-black transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowSizeSelector(true)}
                  className="bg-white text-black px-6 py-3 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-100 transition-colors flex items-center space-x-2"
                >
                  <ShoppingBag size={16} />
                  <span>Add to Cart</span>
                </button>
                <button 
                  onClick={() => onToggleFavorite(product.id)}
                  className={`p-3 transition-colors ${
                    isFavorite ? 'bg-black text-white' : 'bg-white text-black hover:bg-charcoal-100'
                  }`}
                >
                  <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-6 space-y-3">
        <h3 className="text-lg font-medium text-charcoal-900">{product.name}</h3>
        <p className="text-sm text-charcoal-600 font-light">{product.collection}</p>
        
        {/* Color Selector */}
        <div className="flex space-x-2">
          {product.colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setSelectedColor(color)}
              className={`w-6 h-6 rounded-full border-2 transition-all ${
                selectedColor.name === color.name
                  ? 'border-black scale-110'
                  : 'border-gray-300 hover:border-gray-500'
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
        
        <p className="text-lg font-medium text-charcoal-900">€{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;