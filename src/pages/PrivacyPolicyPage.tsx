import React from 'react';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Privacy Policy"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl md:text-2xl font-light">Your Privacy, Our Commitment</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
            Last updated: January 15, 2025
          </p>
          <p className="text-charcoal-600 leading-relaxed">
            At Chiaroscuro District, we respect your privacy and are committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you visit our website 
            or make a purchase from us.
          </p>
        </div>

        {/* Information We Collect */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Database className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">Personal Information</h3>
              <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Billing and shipping addresses</li>
                <li>Payment information (processed securely by our payment providers)</li>
                <li>Account preferences and communication settings</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc list-inside text-charcoal-600 space-y-2">
                <li>IP address and browser information</li>
                <li>Device type and operating system</li>
                <li>Pages visited and time spent on our site</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Eye className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">How We Use Your Information</h2>
          </div>
          
          <ul className="list-disc list-inside text-charcoal-600 space-y-3">
            <li>Process and fulfill your orders</li>
            <li>Communicate with you about your purchases</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Improve our website and customer experience</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and ensure security</li>
          </ul>
        </section>

        {/* Data Protection */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Lock className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">Data Protection & Security</h2>
          </div>
          
          <div className="text-charcoal-600 space-y-4">
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against 
              unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>SSL encryption for all data transmission</li>
              <li>Secure payment processing through certified providers</li>
              <li>Regular security audits and updates</li>
              <li>Limited access to personal data on a need-to-know basis</li>
              <li>Staff training on data protection practices</li>
            </ul>
          </div>
        </section>

        {/* Your Rights */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Shield className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">Your Rights</h2>
          </div>
          
          <div className="text-charcoal-600 space-y-4">
            <p>Under GDPR and other applicable privacy laws, you have the right to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Access your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Delete your personal data</li>
              <li>Restrict processing of your data</li>
              <li>Data portability</li>
              <li>Object to processing</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </div>
        </section>

        {/* Cookies */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Cookies & Tracking</h2>
          <div className="text-charcoal-600 space-y-4">
            <p>
              We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
              and personalize content. You can control cookie settings through your browser preferences.
            </p>
            <p>
              Types of cookies we use include essential cookies for site functionality, analytics cookies to 
              understand site usage, and marketing cookies for personalized advertising (with your consent).
            </p>
          </div>
        </section>

        {/* Third Parties */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Third-Party Services</h2>
          <div className="text-charcoal-600 space-y-4">
            <p>
              We work with trusted third-party service providers to operate our business, including:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Payment processors (Stripe, PayPal)</li>
              <li>Shipping and logistics partners</li>
              <li>Email marketing services</li>
              <li>Analytics providers (Google Analytics)</li>
              <li>Customer support tools</li>
            </ul>
            <p>
              These partners are contractually bound to protect your data and use it only for the services they provide to us.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-charcoal-50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Contact Us</h2>
          <div className="text-charcoal-600 space-y-4">
            <p>
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="text-charcoal-700 mr-3" size={18} />
                <span>info@chiaro-district.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-charcoal-700 mr-3" size={18} />
                <span>+31 617711619</span>
              </div>
              <div className="flex items-start">
                <div className="text-charcoal-700 mr-3 mt-1">📍</div>
                <div>
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

export default PrivacyPolicyPage;