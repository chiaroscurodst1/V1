import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { journalPosts } from '../data/products';
import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';

const JournalPage: React.FC = () => {
  const { postId } = useParams();
  
  // If we have a postId, show the individual post
  if (postId) {
    const post = journalPosts.find(p => p.id === postId);
    
    if (!post) {
      return (
        <div className="min-h-screen bg-white pt-8 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-serif font-bold text-charcoal-900 mb-4">Post Not Found</h1>
            <Link to="/journal" className="text-charcoal-600 hover:text-black transition-colors">
              ← Back to Journal
            </Link>
          </div>
        </div>
      );
    }
    
    return (
      <div className="min-h-screen bg-white pt-8">
        {/* Article Header */}
        <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
          <div className="absolute inset-0">
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          </div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <Link to="/journal" className="text-sm uppercase tracking-wide mb-4 hover:underline flex items-center justify-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Journal
            </Link>
            <div className="mb-4">
              <span className="bg-white/20 text-white px-3 py-1 text-xs font-medium uppercase tracking-wide rounded">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{post.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-sm text-white/80">
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-charcoal-700 leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
          
          {/* Back to Journal */}
          <div className="mt-16 pt-8 border-t border-charcoal-200 text-center">
            <Link 
              to="/journal"
              className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors"
            >
              <ArrowLeft size={16} />
              <span>Back to Journal</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Show journal listing
  return (
    <div className="min-h-screen bg-white pt-8">
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-charcoal-900 to-charcoal-700 flex items-center justify-center mb-16">
        <div className="absolute inset-0">
          <img 
            src="https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Journal"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Journal</h1>
          <p className="text-xl md:text-2xl font-light">Stories Behind the Art</p>
        </div>
      </div>

      {/* Journal Posts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-charcoal-900 mb-6">
            Latest Stories
          </h2>
          <p className="text-xl text-charcoal-600 max-w-2xl mx-auto">
            Dive deep into the world of artistic fashion, sustainability, and creative inspiration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {journalPosts.map((post) => (
            <Link key={post.id} to={`/journal/${post.id}`} className="group cursor-pointer block">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 text-charcoal-900 px-3 py-1 text-xs font-medium uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-sm text-charcoal-500">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} />
                    <span>{new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-serif font-semibold text-charcoal-900 group-hover:text-black transition-colors leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-charcoal-600 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <button className="group/btn flex items-center space-x-2 text-sm font-medium text-charcoal-900 hover:text-black transition-colors">
                  <span>Read More</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-charcoal-50 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-charcoal-900 mb-4">
            Stay Inspired
          </h3>
          <p className="text-charcoal-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our journal for the latest stories about art, fashion, and sustainable creativity.
          </p>
          <div className="max-w-md mx-auto flex space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-charcoal-300 focus:outline-none focus:border-black transition-colors"
            />
            <button className="bg-black text-white px-8 py-3 text-sm font-medium tracking-wide uppercase hover:bg-charcoal-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalPage;