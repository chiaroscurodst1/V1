import React from 'react';
import { Leaf, Recycle, Heart, Globe, Award, Users } from 'lucide-react';

const SustainabilityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-green-900 to-green-700 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Sustainability"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Sustainability</h1>
          <p className="text-xl md:text-2xl font-light">Fashion with a Conscience</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-charcoal-900 mb-6">
            Our Commitment to the Planet
          </h2>
          <p className="text-xl text-charcoal-600 max-w-3xl mx-auto leading-relaxed">
            At Chiaroscuro District, sustainability isn't just a buzzword—it's woven into the very fabric 
            of our brand. We believe that beautiful fashion shouldn't come at the cost of our planet's future.
          </p>
        </div>

        {/* Sustainability Pillars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
          <div className="text-center group">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
              <Leaf className="text-green-700" size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Organic Materials</h3>
            <p className="text-charcoal-600 leading-relaxed">
              We source only certified organic cotton, hemp, and other natural fibers that are grown 
              without harmful pesticides or chemicals.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
              <Recycle className="text-blue-700" size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Circular Design</h3>
            <p className="text-charcoal-600 leading-relaxed">
              Every piece is designed for longevity and recyclability, with modular components 
              that can be repaired, updated, or repurposed.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
              <Heart className="text-purple-700" size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Ethical Production</h3>
            <p className="text-charcoal-600 leading-relaxed">
              We partner only with manufacturers who provide fair wages, safe working conditions, 
              and respect for workers' rights.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors">
              <Globe className="text-orange-700" size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Carbon Neutral</h3>
            <p className="text-charcoal-600 leading-relaxed">
              We offset 100% of our carbon emissions through verified reforestation and 
              renewable energy projects worldwide.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-200 transition-colors">
              <Award className="text-yellow-700" size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Certifications</h3>
            <p className="text-charcoal-600 leading-relaxed">
              GOTS certified organic textiles, Fair Trade partnerships, and B-Corp certification 
              validate our commitment to sustainability.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
              <Users className="text-red-700" size={28} />
            </div>
            <h3 className="text-xl font-serif font-semibold text-charcoal-900 mb-4">Community Impact</h3>
            <p className="text-charcoal-600 leading-relaxed">
              5% of profits support artisan communities and environmental conservation 
              projects in our production regions.
            </p>
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="bg-charcoal-50 rounded-lg p-12 mb-20">
          <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-12 text-center">
            Our Impact in Numbers
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
              <p className="text-charcoal-600">Organic Materials</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">0</div>
              <p className="text-charcoal-600">Waste to Landfill</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">50+</div>
              <p className="text-charcoal-600">Artisan Partners</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">1000+</div>
              <p className="text-charcoal-600">Trees Planted</p>
            </div>
          </div>
        </div>

        {/* Transparency Section */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">
              Transparency Report
            </h2>
            <p className="text-charcoal-600 mb-6 leading-relaxed">
              We believe in complete transparency about our supply chain, environmental impact, 
              and social responsibility initiatives. Our annual sustainability report details 
              every aspect of our operations.
            </p>
            <ul className="space-y-3 text-charcoal-600">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Supply chain mapping and audits
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Carbon footprint calculations
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Worker welfare assessments
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Environmental impact measurements
              </li>
            </ul>
            <button className="mt-6 bg-green-600 text-white px-6 py-3 text-sm font-medium tracking-wide uppercase hover:bg-green-700 transition-colors">
              Download Report
            </button>
          </div>
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Sustainable Production"
              className="w-full h-96 object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Every purchase supports sustainable fashion and helps create a more ethical industry. 
            Together, we can make fashion a force for good.
          </p>
          <button className="bg-black text-white px-8 py-4 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors">
            Shop Sustainably
          </button>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage;