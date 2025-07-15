import React, { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavigationProps {
  onOpenCart: () => void;
  onOpenFavorites: () => void;
  onOpenSearch: () => void;
  cartCount: number;
  favoritesCount: number;
  onNavigate?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ 
  onOpenCart, 
  onOpenFavorites, 
  onOpenSearch,
  cartCount, 
  favoritesCount,
  onNavigate 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = () => {
    onNavigate?.();
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="border-b border-charcoal-200 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-12 flex-1">
            <Link 
              to="/men" 
              onClick={handleNavClick}
              className={`transition-colors text-sm font-medium tracking-wide uppercase ${
                isActive('/men') ? 'text-black' : 'text-charcoal-700 hover:text-black'
              }`}
            >
              Man
            </Link>
            <Link 
              to="/women" 
              onClick={handleNavClick}
              className={`transition-colors text-sm font-medium tracking-wide uppercase ${
                isActive('/women') ? 'text-black' : 'text-charcoal-700 hover:text-black'
              }`}
            >
              Woman
            </Link>
            <Link 
              to="/collections" 
              onClick={handleNavClick}
              className={`transition-colors text-sm font-medium tracking-wide uppercase ${
                isActive('/collections') ? 'text-black' : 'text-charcoal-700 hover:text-black'
              }`}
            >
              Collections
            </Link>
            <Link 
              to="/journal" 
              onClick={handleNavClick}
              className={`transition-colors text-sm font-medium tracking-wide uppercase ${
                isActive('/journal') ? 'text-black' : 'text-charcoal-700 hover:text-black'
              }`}
            >
              Journal
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-charcoal-700 hover:text-black transition-colors mr-1"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Center Logo - Always centered */}
          <div className="absolute left-1/2 transform -translate-x-1/2 md:left-1/2 left-[35%]">
            <Link to="/" onClick={handleNavClick}>
              <h1 className="text-2xl md:text-3xl font-medium tracking-wider text-black" style={{ fontFamily: 'AppleMyungjo, serif' }}>
                chiaroscuro
              </h1>
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="flex items-center space-x-6 flex-1 justify-end">
            <button 
              onClick={onOpenSearch}
              className="text-charcoal-700 hover:text-black transition-colors"
            >
              <Search size={18} className="md:w-[22px] md:h-[22px]" />
            </button>
            <button 
              onClick={onOpenFavorites}
              className="text-charcoal-700 hover:text-black transition-colors relative"
            >
              <Heart size={18} className="md:w-[22px] md:h-[22px]" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-black text-white rounded-full w-3.5 h-3.5 md:w-5 md:h-5 flex items-center justify-center font-medium text-[9px] md:text-xs">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button 
              onClick={onOpenCart}
              className="text-charcoal-700 hover:text-black transition-colors relative"
            >
              <ShoppingBag size={18} className="md:w-[22px] md:h-[22px]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 md:-top-2 md:-right-2 bg-black text-white rounded-full w-3.5 h-3.5 md:w-5 md:h-5 flex items-center justify-center font-medium text-[9px] md:text-xs">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-charcoal-200 py-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/men" 
                onClick={handleNavClick}
                className={`transition-colors text-sm font-medium tracking-wide uppercase ${
                  isActive('/men') ? 'text-black' : 'text-charcoal-700 hover:text-black'
                }`}
              >
                Man
              </Link>
              <Link 
                to="/women" 
                onClick={handleNavClick}
                className={`transition-colors text-sm font-medium tracking-wide uppercase ${
                  isActive('/women') ? 'text-black' : 'text-charcoal-700 hover:text-black'
                }`}
              >
                Woman
              </Link>
              <Link 
                to="/collections" 
                onClick={handleNavClick}
                className={`transition-colors text-sm font-medium tracking-wide uppercase ${
                  isActive('/collections') ? 'text-black' : 'text-charcoal-700 hover:text-black'
                }`}
              >
                Collections
              </Link>
              <Link 
                to="/journal" 
                onClick={handleNavClick}
                className={`transition-colors text-sm font-medium tracking-wide uppercase ${
                  isActive('/journal') ? 'text-black' : 'text-charcoal-700 hover:text-black'
                }`}
              >
                Journal
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;