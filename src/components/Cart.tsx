import React from 'react';
import { X, Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, color: string, size: string, quantity: number) => void;
  onRemoveItem: (productId: string, color: string, size: string) => void;
  onCheckout: () => void;
}

const Cart: React.FC<CartProps> = ({ 
  isOpen, 
  onClose, 
  items, 
  onUpdateQuantity, 
  onRemoveItem,
  onCheckout
}) => {
  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.95;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <div className="flex items-center space-x-2">
              <ShoppingBag size={20} />
              <h2 className="text-lg font-medium">Shopping Cart ({items.length})</h2>
            </div>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>
          
          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="w-16 h-16 text-charcoal-300 mx-auto mb-4" />
                <p className="text-charcoal-600 mb-2">Your cart is empty</p>
                <p className="text-sm text-charcoal-500">Add some items to get started</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}-${index}`} className="flex space-x-4 pb-6 border-b border-charcoal-100 last:border-b-0">
                    <div className="relative">
                      <img 
                        src={item.selectedColor.image} 
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg bg-gray-100"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-charcoal-900 mb-1">{item.product.name}</h3>
                      <p className="text-sm text-charcoal-600 mb-2">{item.product.collection}</p>
                      <div className="flex items-center space-x-3 text-xs text-charcoal-500 mb-3">
                        <div className="flex items-center space-x-1">
                          <div 
                            className="w-3 h-3 rounded-full border border-gray-300"
                            style={{ backgroundColor: item.selectedColor.hex }}
                          />
                          <span>{item.selectedColor.name}</span>
                        </div>
                        <span>•</span>
                        <span>Size {item.selectedSize}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedColor.name, item.selectedSize, item.quantity - 1)}
                            className="p-1 rounded-full hover:bg-charcoal-100 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.product.id, item.selectedColor.name, item.selectedSize, item.quantity + 1)}
                            className="p-1 rounded-full hover:bg-charcoal-100 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="font-medium text-charcoal-900">€{(item.product.price * item.quantity).toFixed(2)}</span>
                          <button 
                            onClick={() => onRemoveItem(item.product.id, item.selectedColor.name, item.selectedSize)}
                            className="p-1 text-red-400 hover:text-red-600 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Cart Summary & Checkout */}
          {items.length > 0 && (
            <div className="border-t bg-charcoal-50 p-6">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal-600">Subtotal</span>
                  <span className="text-charcoal-900">€{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-charcoal-600">Shipping</span>
                  <span className="text-charcoal-900">
                    {shipping === 0 ? 'FREE' : `€${shipping.toFixed(2)}`}
                  </span>
                </div>
                {subtotal < 100 && (
                  <p className="text-xs text-charcoal-500">
                    Add €{(100 - subtotal).toFixed(2)} more for free shipping
                  </p>
                )}
                <div className="flex justify-between font-medium text-lg pt-3 border-t">
                  <span className="text-charcoal-900">Total</span>
                  <span className="text-charcoal-900">€{total.toFixed(2)}</span>
                </div>
              </div>
              <button 
                onClick={onCheckout}
                className="w-full bg-black text-white py-4 text-sm font-medium tracking-wide uppercase hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight size={16} />
              </button>
              <p className="text-xs text-charcoal-500 text-center mt-3">
                Secure checkout • Free returns • 30-day guarantee
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;