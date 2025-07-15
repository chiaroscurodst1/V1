export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: ProductColor[];
  sizes: string[];
  gender: 'men' | 'women' | 'unisex';
  description: string;
  collection: string;
}

export interface ProductColor {
  name: string;
  hex: string;
  image: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: ProductColor;
  selectedSize: string;
}

export interface ProductFilters {
  category?: string;
  gender?: string;
  collection?: string;
  priceRange?: [number, number];
  colors?: string[];
  sizes?: string[];
}

export interface JournalPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
  content: string;
}