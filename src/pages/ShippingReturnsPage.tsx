import React from 'react';
import { Truck, RotateCcw, Package, Clock, CreditCard, Mail, Phone, MapPin } from 'lucide-react';

const ShippingReturnsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Shipping & Returns"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Shipping & Returns</h1>
          <p className="text-xl md:text-2xl font-light">Seamless Service, Worldwide</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Shipping Information */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <Truck className="text-charcoal-700 mr-3" size={28} />
            <h2 className="text-3xl font-serif font-bold text-charcoal-900">Shipping Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">Shipping Options</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-charcoal-200 pl-4">
                  <h4 className="font-medium text-charcoal-900">Standard Shipping</h4>
                  <p className="text-charcoal-600 text-sm">5-7 business days • FREE</p>
                  <p className="text-charcoal-600 text-sm">Always free worldwide</p>
                </div>
                <div className="border-l-4 border-charcoal-200 pl-4">
                  <h4 className="font-medium text-charcoal-900">Express Shipping</h4>
                  <p className="text-charcoal-600 text-sm">2-3 business days • €19.95</p>
                </div>
                <div className="border-l-4 border-charcoal-200 pl-4">
                  <h4 className="font-medium text-charcoal-900">Next Day Delivery</h4>
                  <p className="text-charcoal-600 text-sm">1 business day • €29.95</p>
                  <p className="text-charcoal-600 text-sm">Available in Netherlands, Belgium, Germany</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">International Shipping</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-200 pl-4">
                  <h4 className="font-medium text-charcoal-900">European Union</h4>
                  <p className="text-charcoal-600 text-sm">7-10 business days • FREE</p>
                  <p className="text-charcoal-600 text-sm">Always free worldwide</p>
                </div>
                <div className="border-l-4 border-blue-200 pl-4">
                  <h4 className="font-medium text-charcoal-900">United Kingdom</h4>
                  <p className="text-charcoal-600 text-sm">7-12 business days • FREE</p>
                </div>
                <div className="border-l-4 border-purple-200 pl-4">
                  <h4 className="font-medium text-charcoal-900">Rest of World</h4>
                  <p className="text-charcoal-600 text-sm">10-21 business days • FREE</p>
                  <p className="text-charcoal-600 text-sm">Customs duties may apply</p>
                </div>
              </div>
            </div>
          </div>

          {/* Processing Time */}
          <div className="bg-charcoal-50 rounded-lg p-8">
            <div className="flex items-center mb-4">
              <Clock className="text-charcoal-700 mr-3" size={20} />
              <h3 className="text-lg font-semibold text-charcoal-900">Processing Time</h3>
            </div>
            <p className="text-charcoal-600 leading-relaxed">
              All orders are processed within 1-2 business days. Orders placed on weekends or holidays 
              will be processed the next business day. You will receive a tracking number via email 
              once your order has shipped.
            </p>
          </div>
        </section>

        {/* Returns & Exchanges */}
        <section className="mb-20">
          <div className="flex items-center mb-8">
            <RotateCcw className="text-charcoal-700 mr-3" size={28} />
            <h2 className="text-3xl font-serif font-bold text-charcoal-900">Returns & Exchanges</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">Return Policy</h3>
              <div className="space-y-4 text-charcoal-600">
                <p>
                  We want you to love your Chiaroscuro District pieces. If you're not completely satisfied, 
                  you can return unworn items within 30 days of delivery for a full refund.
                </p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-800 mb-2">What can be returned:</h4>
                  <ul className="list-disc list-inside text-green-700 text-sm space-y-1">
                    <li>Unworn items with original tags</li>
                    <li>Items in original packaging</li>
                    <li>Items without damage or alterations</li>
                    <li>Items with production errors or defects</li>
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-medium text-red-800 mb-2">What cannot be returned:</h4>
                  <ul className="list-disc list-inside text-red-700 text-sm space-y-1">
                    <li>Worn or damaged items</li>
                    <li>Items without original tags</li>
                    <li>Custom or personalized items</li>
                    <li>Underwear and swimwear</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-charcoal-900 mb-4">How to Return</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-charcoal-900 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">1</div>
                  <div>
                    <h4 className="font-medium text-charcoal-900">Contact Us</h4>
                    <p className="text-charcoal-600 text-sm">Email info@chiaro-district.com with your order number</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-charcoal-900 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">2</div>
                  <div>
                    <h4 className="font-medium text-charcoal-900">Get Return Label</h4>
                    <p className="text-charcoal-600 text-sm">We'll send you a prepaid return label</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-charcoal-900 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">3</div>
                  <div>
                    <h4 className="font-medium text-charcoal-900">Pack & Ship</h4>
                    <p className="text-charcoal-600 text-sm">Pack items securely and drop off at any post office</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-charcoal-900 text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">4</div>
                  <div>
                    <h4 className="font-medium text-charcoal-900">Get Refund</h4>
                    <p className="text-charcoal-600 text-sm">Refund processed within 5-7 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Size Exchanges */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <Package className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">Size Exchanges</h2>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8">
            <h3 className="text-lg font-semibold text-blue-900 mb-4">Free Size Exchanges</h3>
            <p className="text-blue-800 mb-4">
              Need a different size? We offer free size exchanges within 30 days of purchase. 
              Simply follow the return process above and specify that you'd like an exchange.
            </p>
            <ul className="list-disc list-inside text-blue-700 space-y-2">
              <li>Free shipping both ways for size exchanges</li>
              <li>New item ships as soon as we receive your return</li>
              <li>Subject to availability</li>
              <li>One free exchange per item</li>
            </ul>
          </div>
        </section>

        {/* Refunds */}
        <section className="mb-20">
          <div className="flex items-center mb-6">
            <CreditCard className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">Refunds</h2>
          </div>
          
          <div className="text-charcoal-600 space-y-4">
            <p>
              Once we receive and inspect your return, we will send you an email to notify you that 
              we have received your returned item. We will also notify you of the approval or rejection 
              of your refund.
            </p>
            <p>
              If you are approved, then your refund will be processed, and a credit will automatically 
              be applied to your credit card or original method of payment, within 5-7 business days.
            </p>
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <h4 className="font-medium text-yellow-800 mb-2">Late or Missing Refunds</h4>
              <p className="text-yellow-700 text-sm">
                If you haven't received a refund yet, first check your bank account again. Then contact 
                your credit card company, as it may take some time before your refund is officially posted. 
                If you've done all of this and still have not received your refund, please contact us.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-charcoal-50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Need Help?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Customer Service</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="text-charcoal-700 mr-3" size={18} />
                  <span className="text-charcoal-600">info@chiaro-district.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-charcoal-700 mr-3" size={18} />
                  <span className="text-charcoal-600">+31 617711619</span>
                </div>
                <p className="text-sm text-charcoal-500">
                  Monday - Friday: 9:00 - 18:00 CET<br />
                  Response time: Within 24 hours
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Return Address</h3>
              <div className="flex items-start">
                <MapPin className="text-charcoal-700 mr-3 mt-1" size={18} />
                <div className="text-charcoal-600">
                  Chiaroscuro District Returns<br />
                  Prinsengracht 263<br />
                  1016 GV Amsterdam<br />
                  Netherlands
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingReturnsPage;