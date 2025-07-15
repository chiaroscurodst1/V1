import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-serif font-medium tracking-wider mb-4">
              chiaroscuro
            </h3>
            <p className="text-charcoal-400 mb-6 max-w-md leading-relaxed">
              Where Renaissance artistry meets modern streetwear. Sustainable fashion 
              for creatives, aesthetes, and conscious consumers.
            </p>
            <div className="text-charcoal-400 mb-6 space-y-2">
              <p className="flex items-center">
                <Mail size={16} className="mr-2" />
                info@chiaro-district.com
              </p>
              <p className="flex items-center">
                <span className="w-4 h-4 mr-2 flex items-center justify-center text-xs">📞</span>
                +31 617711619
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-charcoal-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-charcoal-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-charcoal-400">
              <li><a href="#" className="hover:text-white transition-colors">Man</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Woman</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Collections</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium tracking-wide uppercase mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-charcoal-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/sustainability" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="/journal" className="hover:text-white transition-colors">Journal</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-charcoal-800 pt-8">
          {/* Payment Methods */}
          <div className="mb-6">
            <h4 className="text-sm font-medium tracking-wide uppercase mb-4 text-center">We Accept</h4>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {/* iDEAL */}
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center h-10 w-16">
                <svg viewBox="0 0 40 24" className="h-4 w-auto">
                  <rect width="40" height="24" fill="#CC0066" rx="4"/>
                  <text x="20" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">iDEAL</text>
                </svg>
              </div>
              
              {/* American Express */}
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center h-10 w-16">
                <svg viewBox="0 0 40 24" className="h-4 w-auto">
                  <rect width="40" height="24" fill="#006FCF" rx="4"/>
                  <text x="20" y="16" textAnchor="middle" fill="white" fontSize="6" fontWeight="bold">AMEX</text>
                </svg>
              </div>
              
              {/* Apple Pay */}
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center h-10 w-16">
                <svg viewBox="0 0 40 24" className="h-4 w-auto">
                  <rect width="40" height="24" fill="#000000" rx="4"/>
                  <path d="M12 8c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm4 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" fill="white"/>
                  <text x="20" y="18" textAnchor="middle" fill="white" fontSize="5">Pay</text>
                </svg>
              </div>
              
              {/* Google Pay */}
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center h-10 w-16">
                <svg viewBox="0 0 40 24" className="h-4 w-auto">
                  <rect width="40" height="24" fill="#4285F4" rx="4"/>
                  <circle cx="12" cy="12" r="3" fill="white"/>
                  <circle cx="20" cy="12" r="3" fill="white"/>
                  <circle cx="28" cy="12" r="3" fill="white"/>
                </svg>
              </div>
              
              {/* Maestro */}
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center h-10 w-16">
                <svg viewBox="0 0 40 24" className="h-4 w-auto">
                  <circle cx="15" cy="12" r="8" fill="#0099DF"/>
                  <circle cx="25" cy="12" r="8" fill="#ED0006"/>
                </svg>
              </div>
              
              {/* Visa */}
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center h-10 w-16">
                <svg viewBox="0 0 40 24" className="h-4 w-auto">
                  <rect width="40" height="24" fill="#1A1F71" rx="4"/>
                  <text x="20" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">VISA</text>
                </svg>
              </div>
              
              {/* PayPal */}
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center h-10 w-16">
                <svg viewBox="0 0 40 24" className="h-4 w-auto">
                  <rect width="40" height="24" fill="#003087" rx="4"/>
                  <path d="M8 8h6c2 0 3 1 3 3s-1 3-3 3h-3l-1 4h-2l2-10zm18 0h6c2 0 3 1 3 3s-1 3-3 3h-3l-1 4h-2l2-10z" fill="#009CDE"/>
                </svg>
              </div>
              
              {/* UnionPay */}
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center h-10 w-16">
                <svg viewBox="0 0 40 24" className="h-4 w-auto">
                  <rect width="40" height="24" fill="#E21836" rx="4"/>
                  <circle cx="12" cy="12" r="4" fill="white"/>
                  <circle cx="28" cy="12" r="4" fill="white"/>
                </svg>
              </div>
              
              {/* Mastercard */}
              <div className="bg-white rounded px-3 py-2 flex items-center justify-center h-10 w-16">
                <svg viewBox="0 0 40 24" className="h-4 w-auto">
                  <circle cx="15" cy="12" r="8" fill="#FF5F00"/>
                  <circle cx="25" cy="12" r="8" fill="#EB001B"/>
                  <path d="M20 6c1.5 1.5 2.5 3.5 2.5 6s-1 4.5-2.5 6c-1.5-1.5-2.5-3.5-2.5-6s1-4.5 2.5-6z" fill="#FF5F00"/>
                </svg>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-charcoal-500 mb-4 md:mb-0">
            © 2025 Chiaroscuro District. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-charcoal-500">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/shipping-returns" className="hover:text-white transition-colors">Shipping & Returns</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;