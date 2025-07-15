import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import SearchModal from './components/SearchModal';
import CheckoutModal from './components/CheckoutModal';
import LoadingScreen from './components/LoadingScreen';
import HomePage from './pages/HomePage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import CollectionsPage from './pages/CollectionsPage';
import JournalPage from './pages/JournalPage';
import AboutPage from './pages/AboutPage';
import SustainabilityPage from './pages/SustainabilityPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';
import ShippingReturnsPage from './pages/ShippingReturnsPage';
import ExclusiveOfferPopup from './components/ExclusiveOfferPopup';
import { usePageLoading } from './hooks/usePageLoading';
import { products } from './data/products';
import { Product, CartItem, ProductColor } from './types';

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [showOfferPopup, setShowOfferPopup] = useState(false);
  
  const { isLoading, startLoading, isInitialLoad } = usePageLoading();

  // Show offer popup after initial loading is complete
  React.useEffect(() => {
    if (!isLoading && !isInitialLoad && !localStorage.getItem('chiaroscuro_popup_seen') && !localStorage.getItem('chiaroscuro_email_submitted')) {
      // Small delay to ensure smooth transition after loading screen
      const timer = setTimeout(() => {
        setShowOfferPopup(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isLoading, isInitialLoad]);

  const addToCart = (product: Product, color: ProductColor, size: string) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => 
        item.product.id === product.id && 
        item.selectedColor.name === color.name && 
        item.selectedSize === size
      );
      
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id && 
          item.selectedColor.name === color.name && 
          item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      
      return [...prev, { product, quantity: 1, selectedColor: color, selectedSize: size }];
    });
  };

  const updateQuantity = (productId: string, color: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, color, size);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.product.id === productId && 
        item.selectedColor.name === color && 
        item.selectedSize === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const removeFromCart = (productId: string, color: string, size: string) => {
    setCartItems(prev => prev.filter(item => 
      !(item.product.id === productId && 
        item.selectedColor.name === color && 
        item.selectedSize === size)
    ));
  };

  const toggleFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(productId)) {
        newFavorites.delete(productId);
      } else {
        newFavorites.add(productId);
      }
      return newFavorites;
    });
  };

  const removeFavorite = (productId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      newFavorites.delete(productId);
      return newFavorites;
    });
  };

  const favoriteProducts = products.filter(product => favorites.has(product.id));
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <LoadingScreen isLoading={isLoading} />
      
      <div className={`min-h-screen bg-white transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Header />
        <Navigation 
          onOpenCart={() => setIsCartOpen(true)}
          onOpenFavorites={() => setIsFavoritesOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
          onNavigate={startLoading}
          cartCount={cartCount}
          favoritesCount={favorites.size}
        />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            } 
          />
          <Route 
            path="/men" 
            element={
              <MenPage 
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            } 
          />
          <Route 
            path="/women" 
            element={
              <WomenPage 
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            } 
          />
          <Route 
            path="/collections" 
            element={
              <CollectionsPage 
                onAddToCart={addToCart}
                onToggleFavorite={toggleFavorite}
                favorites={favorites}
              />
            } 
          />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/journal/:postId" element={<JournalPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
          <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
        </Routes>

        <Footer />

        <Cart 
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeFromCart}
          onCheckout={() => {
            setIsCartOpen(false);
            setIsCheckoutOpen(true);
          }}
        />

        <Favorites 
          isOpen={isFavoritesOpen}
          onClose={() => setIsFavoritesOpen(false)}
          favorites={favoriteProducts}
          onRemoveFavorite={removeFavorite}
          onAddToCart={(product) => addToCart(product, product.colors[0], product.sizes[0])}
        />

        <SearchModal 
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
          onAddToCart={addToCart}
          onToggleFavorite={toggleFavorite}
          favorites={favorites}
        />

        <CheckoutModal 
          isOpen={isCheckoutOpen}
          onClose={() => {
            setIsCheckoutOpen(false);
            // Clear cart after successful checkout
            clearCart();
          }}
          items={cartItems}
          onAddToCart={addToCart}
        />

        <ExclusiveOfferPopup 
          isOpen={showOfferPopup}
          onClose={() => setShowOfferPopup(false)}
        />
      </div>
    </Router>
  );
}

export default App;