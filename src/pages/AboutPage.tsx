import React from 'react';
import { Palette, Leaf, Award, Users, Globe, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About Us"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">About Us</h1>
          <p className="text-xl md:text-2xl font-light">Where Art Becomes Fashion</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
              Our Story
            </h2>
            <p className="text-charcoal-600 mb-6 leading-relaxed text-lg">
              Chiaroscuro District was born from a passion for merging the timeless beauty of Renaissance art 
              with the dynamic energy of contemporary street culture. Founded in 2025, we believe that fashion 
              should be more than just clothing—it should be a canvas for artistic expression.
            </p>
            <p className="text-charcoal-600 mb-6 leading-relaxed">
              Our name draws inspiration from the Renaissance painting technique of chiaroscuro, which uses 
              the dramatic interplay of light and shadow to create depth and emotion. This philosophy guides 
              every piece we create, resulting in garments that tell stories and evoke feelings.
            </p>
            <p className="text-charcoal-600 leading-relaxed">
              Based in Amsterdam, we work with artisans and creators who share our vision of sustainable, 
              ethical fashion that doesn't compromise on style or quality.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Our Atelier"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="w-16 h-16 bg-charcoal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-charcoal-200 transition-colors">
                <Palette className="text-charcoal-700" size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Artistic Heritage</h3>
              <p className="text-charcoal-600 leading-relaxed">
                Every piece reflects the timeless technique of chiaroscuro, 
                creating depth through the masterful play of light and shadow.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-charcoal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-charcoal-200 transition-colors">
                <Leaf className="text-charcoal-700" size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Sustainable Craft</h3>
              <p className="text-charcoal-600 leading-relaxed">
                Committed to eco-conscious production with ethically sourced materials 
                and transparent manufacturing processes.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-16 h-16 bg-charcoal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-charcoal-200 transition-colors">
                <Award className="text-charcoal-700" size={28} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Premium Quality</h3>
              <p className="text-charcoal-600 leading-relaxed">
                Meticulously crafted pieces that merge luxury with streetwear, 
                designed for the modern creative and conscious consumer.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-12 text-center">
            Our Team
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 bg-charcoal-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="text-charcoal-600" size={48} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-2">Creative Directors</h3>
              <p className="text-charcoal-600">
                Visionaries who blend art history with contemporary design
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-charcoal-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Globe className="text-charcoal-600" size={48} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-2">Global Artisans</h3>
              <p className="text-charcoal-600">
                Skilled craftspeople from around the world who bring our designs to life
              </p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-charcoal-200 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Heart className="text-charcoal-600" size={48} />
              </div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-2">Community</h3>
              <p className="text-charcoal-600">
                Creatives, artists, and conscious consumers who inspire us daily
              </p>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-charcoal-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-charcoal-600 max-w-4xl mx-auto leading-relaxed mb-8">
            We aim to reconnect today's generation with the beauty of classical art techniques — 
            reimagined through the lens of modern, wearable art.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 text-left max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">What We Do</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                By collaborating with emerging artists, we offer creative talent a platform and bring art closer to Generation Z. 
                Our goal is to prove that art isn't just for gallery walls — it can be worn, lived, and shared.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                Collections like our original <em>Chiaroscuro</em> line are inspired by historic techniques and reinterpreted 
                into contemporary fashion. Each collection tells a story, with art as the medium.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Our Values</h3>
              <p className="text-charcoal-600 leading-relaxed mb-4">
                We stand firmly against fast fashion and are committed to quality, sustainability, and ethical production. 
                All our garments are made with eco-friendly materials and Fairtrade practices.
              </p>
              <p className="text-charcoal-600 leading-relaxed">
                We believe in fashion that carries meaning — art with purpose, made to be worn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;