import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import CollectionsPreview from '../components/CollectionsPreview';
import ProductGrid from '../components/ProductGrid';
import Newsletter from '../components/Newsletter';
import { products } from '../data/products';
import { Product, ProductColor } from '../types';

interface HomePageProps {
  onAddToCart: (product: Product, color: ProductColor, size: string) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: Set<string>;
}

const HomePage: React.FC<HomePageProps> = ({ onAddToCart, onToggleFavorite, favorites }) => {
  // Show only featured products on homepage
  const featuredProducts = products.slice(0, 8);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <CollectionsPreview />
      <ProductGrid 
        products={featuredProducts}
        onAddToCart={onAddToCart}
        onToggleFavorite={onToggleFavorite}
        favorites={favorites}
        showFilters={false}
        title="Featured Pieces"
        subtitle="Handpicked selections from our latest collections"
      />
      <Newsletter />
    </main>
  );
};

export default HomePage;