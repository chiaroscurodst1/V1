import React from 'react';
import { FileText, ShoppingCart, Shield, AlertTriangle, Scale, Mail, Phone } from 'lucide-react';

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Terms of Service"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Terms of Service</h1>
          <p className="text-xl md:text-2xl font-light">Our Agreement with You</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-12">
          <p className="text-lg text-charcoal-600 leading-relaxed mb-6">
            Last updated: January 15, 2025
          </p>
          <p className="text-charcoal-600 leading-relaxed">
            Welcome to Chiaroscuro District. These Terms of Service ("Terms") govern your use of our website 
            and the purchase of our products. By accessing our site or making a purchase, you agree to be bound by these Terms.
          </p>
        </div>

        {/* General Terms */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <FileText className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">General Terms</h2>
          </div>
          
          <div className="text-charcoal-600 space-y-4">
            <p>
              By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions.
            </p>
            <p>
              We reserve the right to update, change or replace any part of these Terms of Service by posting updates and/or changes to our website. It is your responsibility to check this page periodically for changes.
            </p>
            <p>
              Any new features or tools which are added to the current store shall also be subject to the Terms of Service.
            </p>
          </div>
        </section>

        {/* Online Store Terms */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <ShoppingCart className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">Online Store Terms</h2>
          </div>
          
          <div className="text-charcoal-600 space-y-4">
            <p>
              By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence, or that you are the age of majority in your state or province of residence and you have given us your consent to allow any of your minor dependents to use this site.
            </p>
            <p>
              You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction.
            </p>
            <p>
              You must not transmit any worms or viruses or any code of a destructive nature.
            </p>
          </div>
        </section>

        {/* Products & Services */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Products & Services</h2>
          <div className="text-charcoal-600 space-y-4">
            <p>
              Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
            </p>
            <p>
              We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
            </p>
            <p>
              We reserve the right, but are not obligated, to limit the sales of our products or Services to any person, geographic region or jurisdiction.
            </p>
          </div>
        </section>

        {/* Accuracy of Information */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <AlertTriangle className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">Accuracy of Information</h2>
          </div>
          
          <div className="text-charcoal-600 space-y-4">
            <p>
              We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information.
            </p>
            <p>
              This site may contain certain historical information. Historical information, necessarily, is not current and is provided for your reference only.
            </p>
          </div>
        </section>

        {/* Prohibited Uses */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Shield className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">Prohibited Uses</h2>
          </div>
          
          <div className="text-charcoal-600 space-y-4">
            <p>You may not use our site or service:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
              <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances</li>
              <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
              <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
              <li>To submit false or misleading information</li>
              <li>To upload or transmit viruses or any other type of malicious code</li>
              <li>To collect or track the personal information of others</li>
              <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
            </ul>
          </div>
        </section>

        {/* Disclaimer of Warranties */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Disclaimer of Warranties</h2>
          <div className="text-charcoal-600 space-y-4">
            <p>
              We do not guarantee, represent or warrant that your use of our service will be uninterrupted, timely, secure or error-free.
            </p>
            <p>
              We do not warrant that the results that may be obtained from the use of the service will be accurate or reliable.
            </p>
            <p>
              You agree that from time to time we may remove the service for indefinite periods of time or cancel the service at any time, without notice to you.
            </p>
          </div>
        </section>

        {/* Limitation of Liability */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <Scale className="text-charcoal-700 mr-3" size={24} />
            <h2 className="text-2xl font-serif font-bold text-charcoal-900">Limitation of Liability</h2>
          </div>
          
          <div className="text-charcoal-600 space-y-4">
            <p>
              In no case shall Chiaroscuro District, our directors, officers, employees, affiliates, agents, contractors, interns, suppliers, service providers or licensors be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind.
            </p>
            <p>
              Because some states or jurisdictions do not allow the exclusion or the limitation of liability for consequential or incidental damages, in such states or jurisdictions, our liability shall be limited to the maximum extent permitted by law.
            </p>
          </div>
        </section>

        {/* Governing Law */}
        <section className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Governing Law</h2>
          <div className="text-charcoal-600 space-y-4">
            <p>
              These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of the Netherlands.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="bg-charcoal-50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">Questions About Terms</h2>
          <div className="text-charcoal-600 space-y-4">
            <p>
              If you have any questions about these Terms of Service, please contact us:
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

export default TermsOfServicePage;