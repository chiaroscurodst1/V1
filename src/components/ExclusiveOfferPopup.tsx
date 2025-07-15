import React, { useState } from 'react';
import { X, Mail, Gift } from 'lucide-react';

interface ExclusiveOfferPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// Local storage keys for tracking popup state
const POPUP_SEEN_KEY = 'chiaroscuro_popup_seen';
const EMAIL_SUBMITTED_KEY = 'chiaroscuro_email_submitted';

// Helper functions for localStorage
const hasSeenPopup = () => {
  return localStorage.getItem(POPUP_SEEN_KEY) === 'true';
};

const hasSubmittedEmail = () => {
  return localStorage.getItem(EMAIL_SUBMITTED_KEY) === 'true';
};

const markPopupAsSeen = () => {
  localStorage.setItem(POPUP_SEEN_KEY, 'true');
};

const markEmailAsSubmitted = () => {
  localStorage.setItem(EMAIL_SUBMITTED_KEY, 'true');
};

const ExclusiveOfferPopup: React.FC<ExclusiveOfferPopupProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [showCode, setShowCode] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Don't show popup if user has already seen it or submitted email
  if (!isOpen || hasSeenPopup() || hasSubmittedEmail()) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mark email as submitted so popup won't show again
    markEmailAsSubmitted();
    setShowCode(true);
    setIsSubmitting(false);
  };

  const handleClose = () => {
    // Mark popup as seen when user closes it
    markPopupAsSeen();
    onClose();
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText('WELCOME5');
    // You could add a toast notification here
  };

  return (
    <div className="fixed inset-0 z-[10000] overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" onClick={handleClose} />
      
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full rounded-lg shadow-2xl relative animate-slide-up">
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-charcoal-400 hover:text-charcoal-600 transition-colors z-10"
          >
            <X size={24} />
          </button>

          {!showCode ? (
            // Email Signup Form
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-charcoal-900 to-charcoal-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="text-white" size={28} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-2">
                  Exclusive Welcome Offer
                </h2>
                <p className="text-charcoal-600">
                  Get 5% off your first order when you join our newsletter
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-charcoal-400" size={18} />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-10 pr-4 py-3 border border-charcoal-300 rounded-lg focus:outline-none focus:border-black transition-colors"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Getting Your Code...' : 'Get My 5% Discount'}
                </button>
              </form>

              <div className="mt-6 text-xs text-charcoal-500 space-y-1">
                <p>✓ Exclusive access to new collections</p>
                <p>✓ Behind-the-scenes content</p>
                <p>✓ No spam, unsubscribe anytime</p>
              </div>
            </div>
          ) : (
            // Success State with Discount Code
            <div className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="text-white" size={28} />
                </div>
                <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-2">
                  Welcome to the Family!
                </h2>
                <p className="text-charcoal-600">
                  Your exclusive discount code is ready
                </p>
              </div>

              <div className="bg-charcoal-50 border-2 border-dashed border-charcoal-300 rounded-lg p-6 mb-6">
                <p className="text-sm text-charcoal-600 mb-2">Your discount code:</p>
                <div className="text-2xl font-bold text-charcoal-900 tracking-wider mb-3">
                  WELCOME5
                </div>
                <button
                  onClick={handleCopyCode}
                  className="text-sm text-charcoal-700 hover:text-black transition-colors underline"
                >
                  Click to copy code
                </button>
              </div>

              <div className="space-y-3">
                <p className="text-sm text-charcoal-600">
                  Use this code at checkout to get <strong>5% off</strong> your first order
                </p>
                <button
                  onClick={handleClose}
                  className="w-full bg-black text-white py-3 rounded-lg text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors"
                >
                  Start Shopping
                </button>
              </div>

              <p className="text-xs text-charcoal-500 mt-4">
                Code expires in 30 days • Minimum order €50
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveOfferPopup;