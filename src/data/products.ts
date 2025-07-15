import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Renaissance Tee',
    category: 'T-Shirts',
    collection: 'The Florence Drop',
    gender: 'unisex',
    price: 85,
    description: 'A premium cotton tee inspired by Renaissance art with subtle artistic details.',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Charcoal',
        hex: '#3d3d3d',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Ivory',
        hex: '#f8f8f0',
        image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Sage',
        hex: '#9caf88',
        image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '2',
    name: 'Shadow Hoodie',
    category: 'Hoodies',
    collection: 'Light & Shadow',
    gender: 'unisex',
    price: 145,
    description: 'Oversized hoodie with contrast panels representing the interplay of light and shadow.',
    image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Black',
        hex: '#000000',
        image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Stone',
        hex: '#a8a8a8',
        image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '3',
    name: 'Chiaroscuro Blazer',
    category: 'Blazers',
    collection: 'The Florence Drop',
    gender: 'women',
    price: 285,
    description: 'Tailored blazer with artistic draping inspired by Renaissance portraiture.',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Midnight',
        hex: '#1a1a1a',
        image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Camel',
        hex: '#c19a6b',
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '4',
    name: 'Canvas Trousers',
    category: 'Pants',
    collection: 'Canvas Series',
    gender: 'men',
    price: 165,
    description: 'Wide-leg trousers with artistic paint splatter details.',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Khaki',
        hex: '#8b7355',
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Navy',
        hex: '#2c3e50',
        image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Charcoal',
        hex: '#3d3d3d',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['28', '30', '32', '34', '36', '38', '40']
  },
  {
    id: '5',
    name: 'Light Silk Blouse',
    category: 'Blouses',
    collection: 'Light & Shadow',
    gender: 'women',
    price: 195,
    description: 'Flowing silk blouse with subtle light-catching details.',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Pearl',
        hex: '#f8f6f0',
        image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Blush',
        hex: '#f4c2c2',
        image: 'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Sage',
        hex: '#9caf88',
        image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '6',
    name: 'Artist Denim Jacket',
    category: 'Jackets',
    collection: 'Canvas Series',
    gender: 'unisex',
    price: 225,
    description: 'Classic denim jacket with hand-painted artistic details.',
    image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Indigo',
        hex: '#4b0082',
        image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Washed Black',
        hex: '#2c2c2c',
        image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '7',
    name: 'Contrast Knit',
    category: 'Sweaters',
    collection: 'Light & Shadow',
    gender: 'men',
    price: 125,
    description: 'Merino wool sweater with contrasting light and dark panels.',
    image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Cream/Charcoal',
        hex: '#f5f5dc',
        image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Navy/Stone',
        hex: '#2c3e50',
        image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '8',
    name: 'Renaissance Skirt',
    category: 'Skirts',
    collection: 'The Florence Drop',
    gender: 'women',
    price: 135,
    description: 'A-line midi skirt with Renaissance-inspired pleating.',
    image: 'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Burgundy',
        hex: '#800020',
        image: 'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Forest',
        hex: '#355e3b',
        image: 'https://images.pexels.com/photos/1464625/pexels-photo-1464625.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Midnight',
        hex: '#1a1a1a',
        image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '9',
    name: 'Shadow Play Coat',
    category: 'Coats',
    collection: 'Canvas Series',
    gender: 'women',
    price: 385,
    description: 'Long wool coat with dramatic silhouette and artistic details.',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Camel',
        hex: '#c19a6b',
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Black',
        hex: '#000000',
        image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '10',
    name: 'Artistic Sweatshirt',
    category: 'Sweatshirts',
    collection: 'Canvas Series',
    gender: 'men',
    price: 115,
    description: 'Oversized sweatshirt with abstract art print.',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Charcoal',
        hex: '#3d3d3d',
        image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Cream',
        hex: '#f5f5dc',
        image: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Rust',
        hex: '#b7410e',
        image: 'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '11',
    name: 'Florence Dress',
    category: 'Dresses',
    collection: 'The Florence Drop',
    gender: 'women',
    price: 245,
    description: 'Elegant midi dress with Renaissance-inspired draping.',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Pearl',
        hex: '#f8f6f0',
        image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Midnight',
        hex: '#1a1a1a',
        image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Burgundy',
        hex: '#800020',
        image: 'https://images.pexels.com/photos/1018911/pexels-photo-1018911.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: '12',
    name: 'Contrast Pants',
    category: 'Pants',
    collection: 'Light & Shadow',
    gender: 'men',
    price: 155,
    description: 'Tailored pants with contrasting side panels.',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500',
    colors: [
      {
        name: 'Black/Grey',
        hex: '#000000',
        image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=500'
      },
      {
        name: 'Navy/Stone',
        hex: '#2c3e50',
        image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500'
      }
    ],
    sizes: ['28', '30', '32', '34', '36', '38', '40']
  }
];

export const collections = [
  {
    id: 'florence-drop',
    name: 'The Florence Drop',
    description: 'Renaissance-inspired pieces with modern silhouettes',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'light-shadow',
    name: 'Light & Shadow',
    description: 'Monochromatic essentials playing with contrast',
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'canvas-series',
    name: 'Canvas Series',
    description: 'Artistic prints on premium streetwear',
    image: 'https://images.pexels.com/photos/1102341/pexels-photo-1102341.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const journalPosts = [
  {
    id: '1',
    title: 'The Art of Chiaroscuro in Modern Fashion',
    excerpt: 'Exploring how Renaissance painting techniques inspire contemporary streetwear design.',
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'Design',
    content: `
      <p>The Renaissance technique of chiaroscuro, literally meaning "light-dark" in Italian, has captivated artists for centuries. This dramatic interplay of light and shadow, mastered by legends like Caravaggio and Rembrandt, creates depth, emotion, and visual impact that transcends time.</p>
      
      <p>At Chiaroscuro District, we've taken this timeless artistic principle and woven it into the fabric of contemporary streetwear. Our designers study the way light falls across Renaissance paintings, analyzing how shadows create form and how highlights bring life to two-dimensional surfaces.</p>
      
      <p>This inspiration manifests in our collections through strategic color blocking, textural contrasts, and silhouettes that play with positive and negative space. Each garment tells a story of contrast – not just in color, but in the juxtaposition of classical artistry with modern urban culture.</p>
      
      <p>The result is fashion that doesn't just clothe the body, but creates a visual dialogue between past and present, between art and everyday life. When you wear Chiaroscuro District, you're not just making a fashion statement – you're carrying forward a tradition of artistic excellence that spans centuries.</p>
    `
  },
  {
    id: '2',
    title: 'Sustainable Fashion: Our Commitment to the Planet',
    excerpt: 'How we source materials ethically and reduce our environmental impact.',
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '2025-01-10',
    readTime: '7 min read',
    category: 'Sustainability',
    content: `
      <p>Sustainability isn't just a trend for us – it's the foundation upon which Chiaroscuro District was built. In an industry notorious for its environmental impact, we've made it our mission to prove that beautiful, artistic fashion can coexist with environmental responsibility.</p>
      
      <p>Our commitment begins with material selection. Every fiber we use is either organic, recycled, or sustainably sourced. We work exclusively with GOTS-certified organic cotton, hemp grown without pesticides, and innovative materials like Tencel made from sustainably managed forests.</p>
      
      <p>But sustainability goes beyond materials. Our production process is designed to minimize waste, with zero textile waste going to landfills. Fabric scraps are either recycled into new products or donated to art schools and community programs.</p>
      
      <p>We've also implemented a carbon-neutral shipping program and partner with reforestation projects worldwide. For every order placed, we plant a tree – because we believe fashion should give back to the planet that inspires it.</p>
      
      <p>Transparency is key to our approach. Our annual sustainability report details every aspect of our environmental impact, from water usage to carbon emissions, ensuring our customers can make informed choices about their fashion consumption.</p>
    `
  },
  {
    id: '3',
    title: 'Behind the Scenes: Creating The Florence Drop',
    excerpt: 'An inside look at the design process behind our latest collection.',
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    date: '2025-01-05',
    readTime: '4 min read',
    category: 'Collections',
    content: `
      <p>The Florence Drop represents everything we stand for at Chiaroscuro District – the perfect marriage of Renaissance artistry and contemporary streetwear. Named after the birthplace of the Renaissance, this collection pays homage to the masters while speaking to today's creative spirits.</p>
      
      <p>The design process began with a research trip to Florence, where our creative team spent weeks studying the works of Michelangelo, Leonardo da Vinci, and Botticelli. We analyzed the draping in Renaissance portraits, the way fabric falls in classical sculptures, and the color palettes that defined an era.</p>
      
      <p>Each piece in The Florence Drop tells a story. The Renaissance Tee features subtle geometric patterns inspired by the mathematical precision of Renaissance art. Our Chiaroscuro Blazer incorporates draping techniques that echo the flowing robes in classical paintings, while maintaining the sharp, modern silhouette that defines contemporary fashion.</p>
      
      <p>The color palette draws from the earth tones and rich jewel colors found in Renaissance frescoes – deep burgundies, forest greens, and warm golds that speak to both history and modernity. Every detail, from the hand-finished seams to the custom buttons, reflects our commitment to craftsmanship that honors both past and present.</p>
      
      <p>The Florence Drop isn't just clothing – it's wearable art that connects the wearer to centuries of creative tradition while making a bold statement about the future of fashion.</p>
    `
  }
];