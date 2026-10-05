export type ProductCategory = 'All' | 'Serums' | 'Moisturizers' | 'Cleansers' | 'Body Care';

export interface ProductReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Product {
  id: string;
  name: string;
  category: 'Serums' | 'Moisturizers' | 'Cleansers' | 'Body Care';
  price: number;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  fullDescription: string;
  image: string;
  secondaryImage?: string;
  badge?: string;
  volume: string;
  isBestSeller?: boolean;
  benefits: string[];
  ingredients: string[];
  howToUse: string;
  texture: string;
  skinType: string;
  reviews: ProductReview[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVolume?: string;
}

export type PageRoute = 'home' | 'shop' | 'collections' | 'product-detail' | 'about' | 'contact' | 'cart';
