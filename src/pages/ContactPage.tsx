import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact Us"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-xl md:text-2xl font-light">Let's Create Something Beautiful Together</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-8">
              Get in Touch
            </h2>
            <p className="text-charcoal-600 mb-12 leading-relaxed text-lg">
              We'd love to hear from you. Whether you have questions about our collections, 
              sustainability practices, or want to collaborate, our team is here to help.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-charcoal-700" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-2">Email</h3>
                  <p className="text-charcoal-600">info@chiaro-district.com</p>
                  <p className="text-sm text-charcoal-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-charcoal-700" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-2">Phone</h3>
                  <p className="text-charcoal-600">+31 617711619</p>
                  <p className="text-sm text-charcoal-500 mt-1">Monday - Friday, 9:00 - 18:00 CET</p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-charcoal-700" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-2">Studio</h3>
                  <p className="text-charcoal-600">
                    Prinsengracht 263<br />
                    1016 GV Amsterdam<br />
                    Netherlands
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-charcoal-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-charcoal-700" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-charcoal-900 mb-2">Studio Hours</h3>
                  <div className="text-charcoal-600 space-y-1">
                    <p>Monday - Friday: 10:00 - 18:00</p>
                    <p>Saturday: 11:00 - 16:00</p>
                    <p>Sunday: By appointment</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-charcoal-900 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-charcoal-100 rounded-full flex items-center justify-center hover:bg-charcoal-200 transition-colors">
                  <span className="text-charcoal-700 text-sm font-medium">IG</span>
                </a>
                <a href="#" className="w-10 h-10 bg-charcoal-100 rounded-full flex items-center justify-center hover:bg-charcoal-200 transition-colors">
                  <span className="text-charcoal-700 text-sm font-medium">TW</span>
                </a>
                <a href="#" className="w-10 h-10 bg-charcoal-100 rounded-full flex items-center justify-center hover:bg-charcoal-200 transition-colors">
                  <span className="text-charcoal-700 text-sm font-medium">FB</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-charcoal-50 p-8 rounded-lg">
            <h2 className="text-2xl font-serif font-bold text-charcoal-900 mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal-900 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-charcoal-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal-900 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="orders">Orders & Shipping</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="press">Press & Media</option>
                  <option value="sustainability">Sustainability</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-charcoal-300 focus:outline-none focus:border-black transition-colors resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white px-6 py-4 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors flex items-center justify-center space-x-2"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 pt-20 border-t border-charcoal-200">
          <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">
                What is your return policy?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                We offer a 30-day return policy for unworn items in original condition. 
                Please contact us to initiate a return.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">
                Do you ship internationally?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes, we ship worldwide with free shipping to all destinations. 
                Delivery times vary by location but standard shipping is always free.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">
                Are your products really sustainable?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Absolutely. We're GOTS certified and use only organic, ethically sourced materials. 
                Check our sustainability page for detailed information.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-charcoal-900 mb-3">
                Can I visit your studio?
              </h3>
              <p className="text-charcoal-600 leading-relaxed">
                Yes! Our Amsterdam studio is open for appointments. Contact us to schedule 
                a visit and see our collections in person.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;