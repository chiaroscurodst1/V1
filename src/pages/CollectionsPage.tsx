import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import { products, collections } from '../data/products';
import { Product, ProductColor } from '../types';
import { ArrowRight } from 'lucide-react';

interface CollectionsPageProps {
  onAddToCart: (product: Product, color: ProductColor, size: string) => void;
  onToggleFavorite: (productId: string) => void;
  favorites: Set<string>;
}

const CollectionsPage: React.FC<CollectionsPageProps> = ({ onAddToCart, onToggleFavorite, favorites }) => {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  if (selectedCollection) {
    const collectionProducts = products.filter(product => product.collection === selectedCollection);
    const collection = collections.find(c => c.name === selectedCollection);
    
    return (
      <div className="min-h-screen bg-white pt-8">
        {/* Collection Hero */}
        <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
          <div className="absolute inset-0">
            <img 
              src={collection?.image}
              alt={collection?.name}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <button 
              onClick={() => setSelectedCollection(null)}
              className="text-sm uppercase tracking-wide mb-4 hover:underline"
            >
              ← Back to Collections
            </button>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">{collection?.name}</h1>
            <p className="text-xl md:text-2xl font-light">{collection?.description}</p>
          </div>
        </div>

        <ProductGrid 
          products={collectionProducts}
          onAddToCart={onAddToCart}
          onToggleFavorite={onToggleFavorite}
          favorites={favorites}
          filters={{ collection: selectedCollection }}
          title={collection?.name || ''}
          subtitle={collection?.description || ''}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Collections"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Collections</h1>
          <p className="text-xl md:text-2xl font-light">Curated Capsules of Artistic Expression</p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {collections.map((collection) => (
            <div 
              key={collection.id} 
              className="group cursor-pointer"
              onClick={() => setSelectedCollection(collection.name)}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm font-medium flex items-center">
                    Explore Collection <ArrowRight size={16} className="ml-2" />
                  </p>
                </div>
              </div>
              <h3 className="text-2xl font-serif font-semibold text-charcoal-900 mb-3 group-hover:text-black transition-colors">
                {collection.name}
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                {collection.description}
              </p>
            </div>
          ))}
        </div>

        {/* All Products */}
        <div className="border-t border-charcoal-200 pt-16">
          <ProductGrid 
            products={products}
            onAddToCart={onAddToCart}
            onToggleFavorite={onToggleFavorite}
            favorites={favorites}
            title="All Collections"
            subtitle="Browse our complete range of artistic fashion pieces"
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionsPage;