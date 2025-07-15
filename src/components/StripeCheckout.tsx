import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { Lock, CreditCard, AlertCircle, CheckCircle } from 'lucide-react';
import { CartItem } from '../types';

// Initialize Stripe (you'll need to replace with your publishable key)
const stripePromise = loadStripe('pk_test_51234567890abcdef...');

interface StripeCheckoutProps {
  items: CartItem[];
  total: number;
  discount: number;
  appliedPromo: {code: string, discount: number} | null;
  shippingInfo: any;
  onSuccess: () => void;
  onBack: () => void;
}

const CheckoutForm: React.FC<{
  items: CartItem[];
  total: number;
  discount: number;
  appliedPromo: {code: string, discount: number} | null;
  shippingInfo: any;
  onSuccess: () => void;
  onBack: () => void;
}> = ({ items, total, discount, appliedPromo, shippingInfo, onSuccess, onBack }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState<string | null>(null);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);
    setPaymentError(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setPaymentError('Card element not found');
      setIsProcessing(false);
      return;
    }

    try {
      // Create payment method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: `${shippingInfo.firstName} ${shippingInfo.lastName}`,
          email: shippingInfo.email,
          address: {
            line1: shippingInfo.address,
            city: shippingInfo.city,
            postal_code: shippingInfo.postalCode,
            country: shippingInfo.country === 'Netherlands' ? 'NL' : 'US',
          },
        },
      });

      if (error) {
        setPaymentError(error.message || 'Payment failed');
        setIsProcessing(false);
        return;
      }

      // In a real app, you would send the payment method to your backend
      // For demo purposes, we'll simulate a successful payment
      await new Promise(resolve => setTimeout(resolve, 2000));

      setPaymentSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 1500);

    } catch (err) {
      setPaymentError('Payment processing failed. Please try again.');
      setIsProcessing(false);
    }
  };

  if (paymentSuccess) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-charcoal-900 mb-4">
          Payment Successful!
        </h3>
        <p className="text-charcoal-600">
          Processing your order...
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex items-center space-x-2 mb-6">
        <Lock size={16} className="text-green-600" />
        <span className="text-sm text-charcoal-600">Secure SSL encrypted payment</span>
      </div>

      {/* Stripe Card Element */}
      <div>
        <label className="block text-sm font-medium text-charcoal-900 mb-2">
          Card Information *
        </label>
        <div className="border border-charcoal-300 rounded-lg p-4 focus-within:border-black transition-colors">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#374151',
                  '::placeholder': {
                    color: '#9CA3AF',
                  },
                },
                invalid: {
                  color: '#EF4444',
                },
              },
              hidePostalCode: true,
            }}
          />
        </div>
      </div>

      {/* Payment Error */}
      {paymentError && (
        <div className="flex items-center space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle size={16} className="text-red-600" />
          <span className="text-sm text-red-700">{paymentError}</span>
        </div>
      )}

      {/* Order Summary */}
      <div className="bg-charcoal-50 rounded-lg p-4">
        <h4 className="font-medium text-charcoal-900 mb-3">Order Summary</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-charcoal-600">Subtotal</span>
            <span className="text-charcoal-900">€{(total + discount - (total > 100 ? 0 : 9.95)).toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-charcoal-600">Shipping</span>
            <span className="text-charcoal-900">
              {total > 100 ? 'FREE' : '€9.95'}
            </span>
          </div>
          {discount > 0 && (
            <div className="flex justify-between text-green-600">
              <span>Discount ({appliedPromo?.code})</span>
              <span>-€{discount.toFixed(2)}</span>
            </div>
          )}
          <div className="flex justify-between font-medium text-lg pt-2 border-t">
            <span className="text-charcoal-900">Total</span>
            <span className="text-charcoal-900">€{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={onBack}
          disabled={isProcessing}
          className="flex-1 border border-charcoal-300 text-charcoal-700 py-3 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-50 transition-colors disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!stripe || isProcessing}
          className="flex-1 bg-black text-white py-3 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <CreditCard size={16} />
              <span>Pay €{total.toFixed(2)}</span>
            </>
          )}
        </button>
      </div>

      {/* Security Notice */}
      <div className="text-xs text-charcoal-500 text-center space-y-1">
        <p>Your payment information is secure and encrypted</p>
        <p>Powered by Stripe • PCI DSS compliant</p>
      </div>
    </form>
  );
};

const StripeCheckout: React.FC<StripeCheckoutProps> = (props) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm {...props} />
    </Elements>
  );
};

export default StripeCheckout;