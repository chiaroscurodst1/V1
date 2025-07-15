import React from 'react';
import ProductGrid from '../components/ProductGrid';
import { products } from '../data/products';
import { Product, ProductColor } from '../types';

interface WomenPageProps {
  onAddToCart: (product: Product, color: ProductColor, size: string) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: Set<string>;
}

const WomenPage: React.FC<WomenPageProps> = ({ onAddToCart, onToggleFavorite, favorites }) => {
  const womenProducts = products.filter(product => product.gender === 'women' || product.gender === 'unisex');

  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Women's Collection"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Women's Collection</h1>
          <p className="text-xl md:text-2xl font-light">Elegance Meets Artistic Expression</p>
        </div>
      </div>

      <ProductGrid 
        products={womenProducts}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
        favorites={favorites}
        filters={{ gender: 'women' }}
        title="Women's Collection"
        subtitle="Explore our sophisticated range of artistic womenswear inspired by Renaissance masters and modern creativity"
      />
    </div>
  );
};

export default WomenPage;