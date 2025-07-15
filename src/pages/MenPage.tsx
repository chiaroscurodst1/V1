import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Product, ProductColor } from '../types';

interface MenPageProps {
  onAddToCart: (product: Product, color: ProductColor, size: string) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: Set<string>;
}

const MenPage: React.FC<MenPageProps> = ({ onAddToCart, onToggleFavorite, favorites }) => {
  const menProducts = products.filter(product => product.gender === 'men' || product.gender === 'unisex');

  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Men's Collection"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Men's Collection</h1>
          <p className="text-xl md:text-2xl font-light">Where Art Meets Masculine Style</p>
        </div>
      </div>

      <ProductGrid 
        products={menProducts}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
        favorites={favorites}
        filters={{ gender: 'men' }}
        title="Men's Collection"
        subtitle="Discover our curated selection of artistic menswear that blends Renaissance inspiration with contemporary street culture"
      />
    </div>
  );
};

export default MenPage;