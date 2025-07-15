import React, { useState } from 'react';
import { X, Tag, Plus } from 'lucide-react';
import { CartItem, Product, ProductColor } from '../types';
import { products } from '../data/products';
import StripeCheckout from './StripeCheckout';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onAddToCart: (product: Product, color: ProductColor, size: string) => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ 
  isOpen, 
  onClose, 
  items,
  onAddToCart
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState<{code: string, discount: number} | null>(null);
  const [promoError, setPromoError] = useState('');
  const [currentStep, setCurrentStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  
  const [shippingInfo, setShippingInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Netherlands'
  });

  const subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 9.95;
  const discount = appliedPromo ? (subtotal * appliedPromo.discount / 100) : 0;
  const total = subtotal + shipping - discount;

  // Get recommended products (exclude items already in cart)
  const cartProductIds = items.map(item => item.product.id);
  const recommendedProducts = products
    .filter(product => !cartProductIds.includes(product.id))
    .slice(0, 3);

  const handlePromoCode = () => {
    setPromoError('');
    
    // Valid promo codes
    const validCodes = {
      'WELCOME5': 5,
      'SAVE10': 10,
      'FIRST15': 15
    };

    if (validCodes[promoCode.toUpperCase() as keyof typeof validCodes]) {
      setAppliedPromo({
        code: promoCode.toUpperCase(),
        discount: validCodes[promoCode.toUpperCase() as keyof typeof validCodes]
      });
      setPromoCode('');
    } else {
      setPromoError('Invalid promo code');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('payment');
  };

  const handlePaymentSuccess = () => {
    setCurrentStep('confirmation');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-lg shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">
              {currentStep === 'shipping' && 'Shipping Information'}
              {currentStep === 'payment' && 'Payment Details'}
              {currentStep === 'confirmation' && 'Order Confirmation'}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
              <X size={24} />
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 p-6">
            {/* Left Column - Form */}
            <div>
              {currentStep === 'shipping' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-900 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.firstName}
                        onChange={(e) => setShippingInfo({...shippingInfo, firstName: e.target.value})}
                        className="w-full px-3 py-2 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-900 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.lastName}
                        onChange={(e) => setShippingInfo({...shippingInfo, lastName: e.target.value})}
                        className="w-full px-3 py-2 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-charcoal-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={shippingInfo.email}
                      onChange={(e) => setShippingInfo({...shippingInfo, email: e.target.value})}
                      className="w-full px-3 py-2 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-900 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      value={shippingInfo.address}
                      onChange={(e) => setShippingInfo({...shippingInfo, address: e.target.value})}
                      className="w-full px-3 py-2 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-charcoal-900 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.city}
                        onChange={(e) => setShippingInfo({...shippingInfo, city: e.target.value})}
                        className="w-full px-3 py-2 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-charcoal-900 mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        value={shippingInfo.postalCode}
                        onChange={(e) => setShippingInfo({...shippingInfo, postalCode: e.target.value})}
                        className="w-full px-3 py-2 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-charcoal-900 mb-2">
                      Country *
                    </label>
                    <select
                      value={shippingInfo.country}
                      onChange={(e) => setShippingInfo({...shippingInfo, country: e.target.value})}
                      className="w-full px-3 py-2 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                    >
                      <option value="Netherlands">Netherlands</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Germany">Germany</option>
                      <option value="France">France</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black text-white py-3 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors"
                  >
                    Continue to Payment
                  </button>
                </form>
              )}

              {currentStep === 'payment' && (
                <StripeCheckout
                  items={items}
                  total={total}
                  discount={discount}
                  appliedPromo={appliedPromo}
                  shippingInfo={shippingInfo}
                  onSuccess={handlePaymentSuccess}
                  onBack={() => setCurrentStep('shipping')}
                />
              )}

              {currentStep === 'confirmation' && (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-4">
                    Order Confirmed!
                  </h3>
                  <p className="text-charcoal-600 mb-6">
                    Thank you for your purchase. You'll receive a confirmation email shortly.
                  </p>
                  <p className="text-sm text-charcoal-500 mb-8">
                    Order #CD-{Date.now().toString().slice(-6)}
                  </p>
                  <button
                    onClick={() => {
                      // Clear cart after successful order
                      onClose();
                      // In a real app, you'd also clear the cart state
                    }}
                    className="bg-black text-white px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              )}
            </div>

            {/* Right Column - Order Summary */}
            <div className="bg-charcoal-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Order Summary</h3>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {items.map((item, index) => (
                  <div key={`${item.product.id}-${item.selectedColor.name}-${item.selectedSize}-${index}`} className="flex space-x-3">
                    <img 
                      src={item.selectedColor.image} 
                      alt={item.product.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-charcoal-900">{item.product.name}</p>
                      <p className="text-xs text-charcoal-600">{item.selectedColor.name} • Size {item.selectedSize}</p>
                      <p className="text-xs text-charcoal-600">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium text-charcoal-900">€{(item.product.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              {currentStep !== 'confirmation' && (
                <div className="mb-6">
                  <div className="flex space-x-2 mb-2">
                    <div className="flex-1 relative">
                      <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400" size={16} />
                      <input
                        type="text"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        placeholder="Promo code"
                        className="w-full pl-9 pr-3 py-2 text-sm border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <button
                      onClick={handlePromoCode}
                      className="px-4 py-2 bg-charcoal-700 text-white text-sm font-medium hover:bg-charcoal-800 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && <p className="text-xs text-red-600">{promoError}</p>}
                  {appliedPromo && (
                    <p className="text-xs text-green-600">
                      Code "{appliedPromo.code}" applied - {appliedPromo.discount}% off
                    </p>
                  )}
                </div>
              )}

              {/* Order Totals */}
              <div className="space-y-2 mb-6 pt-4 border-t">
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
                {discount > 0 && (
                  <div className="flex justify-between text-sm text-green-600">
                    <span>Discount ({appliedPromo?.code})</span>
                    <span>-€{discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between font-medium text-lg pt-2 border-t">
                  <span className="text-charcoal-900">Total</span>
                  <span className="text-charcoal-900">€{total.toFixed(2)}</span>
                </div>
              </div>

              {/* Product Recommendations */}
              {currentStep !== 'confirmation' && recommendedProducts.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-charcoal-900 mb-3">You might also like</h4>
                  <div className="space-y-3">
                    {recommendedProducts.map((product) => (
                      <div key={product.id} className="flex space-x-3 p-3 bg-white rounded border">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-medium text-charcoal-900">{product.name}</p>
                          <p className="text-xs text-charcoal-600">€{product.price}</p>
                        </div>
                        <button
                          onClick={() => onAddToCart(product, product.colors[0], product.sizes[0])}
                          className="p-1 text-charcoal-600 hover:text-black transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;