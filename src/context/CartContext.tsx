import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, PageRoute, ProductCategory } from '../types';
import { PRODUCTS } from '../data/products';

interface ToastMessage {
  id: string;
  text: string;
  type?: 'success' | 'info';
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isWishlistOpen: boolean;
  setIsWishlistOpen: (open: boolean) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  promoCode: string;
  discountPercentage: number;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  subtotal: number;
  discountAmount: number;
  shippingFee: number;
  freeShippingThreshold: number;
  total: number;
  totalItemsCount: number;
  currentPage: PageRoute;
  setCurrentPage: (page: PageRoute) => void;
  selectedProductId: string;
  setSelectedProductId: (id: string) => void;
  navigateToProduct: (productId: string) => void;
  selectedCategoryFilter: ProductCategory;
  setSelectedCategoryFilter: (category: ProductCategory) => void;
  navigateToCategory: (category: ProductCategory) => void;
  toasts: ToastMessage[];
  addToast: (text: string) => void;
  removeToast: (id: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedProductId, setSelectedProductId] = useState<string>('glow-revival-serum');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<ProductCategory>('All');
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Cart state persisted to localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('lumera_cart');
      return saved ? JSON.parse(saved) : [
        { product: PRODUCTS[0], quantity: 1 }
      ];
    } catch {
      return [{ product: PRODUCTS[0], quantity: 1 }];
    }
  });

  // Wishlist state persisted to localStorage
  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('lumera_wishlist');
      return saved ? JSON.parse(saved) : [PRODUCTS[1].id];
    } catch {
      return [PRODUCTS[1].id];
    }
  });

  // Promo code state
  const [promoCode, setPromoCode] = useState<string>('');
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);

  useEffect(() => {
    try {
      localStorage.setItem('lumera_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('lumera_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Window scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, selectedProductId]);

  const addToast = (text: string, type: 'success' | 'info' = 'success') => {
    const id = Date.now().toString() + Math.random().toString();
    setToasts((prev) => [...prev, { id, text, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (product: Product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    addToast(`Added ${product.name} to your ritual bag`);
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
    addToast('Item removed from cart', 'info');
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        addToast(`Removed ${product?.name || 'item'} from your wishlist`, 'info');
        return prev.filter((id) => id !== productId);
      } else {
        addToast(`Saved ${product?.name || 'item'} to your wishlist`);
        return [...prev, productId];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  const applyPromoCode = (code: string): { success: boolean; message: string } => {
    const clean = code.trim().toUpperCase();
    if (clean === 'GLOW10' || clean === 'WELCOME10') {
      setPromoCode(clean);
      setDiscountPercentage(0.10);
      addToast('Promo code applied: 10% Off Your Order');
      return { success: true, message: '10% discount applied to your order!' };
    } else if (clean === 'LUMERA15' || clean === 'VIP15') {
      setPromoCode(clean);
      setDiscountPercentage(0.15);
      addToast('VIP code applied: 15% Off Your Order');
      return { success: true, message: '15% VIP discount applied to your order!' };
    } else {
      return { success: false, message: 'Invalid code. Try "GLOW10" for 10% off.' };
    }
  };

  const removePromoCode = () => {
    setPromoCode('');
    setDiscountPercentage(0);
    addToast('Promo code removed', 'info');
  };

  const navigateToProduct = (productId: string) => {
    setSelectedProductId(productId);
    setCurrentPage('product-detail');
  };

  const navigateToCategory = (category: ProductCategory) => {
    setSelectedCategoryFilter(category);
    setCurrentPage('shop');
  };

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round(subtotal * discountPercentage * 100) / 100;
  const freeShippingThreshold = 50;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 6.00;
  const total = Math.max(0, Math.round((subtotal - discountAmount + shippingFee) * 100) / 100);
  const totalItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
        isWishlistOpen,
        setIsWishlistOpen,
        isSearchOpen,
        setIsSearchOpen,
        wishlist,
        toggleWishlist,
        isInWishlist,
        promoCode,
        discountPercentage,
        applyPromoCode,
        removePromoCode,
        subtotal,
        discountAmount,
        shippingFee,
        freeShippingThreshold,
        total,
        totalItemsCount,
        currentPage,
        setCurrentPage,
        selectedProductId,
        setSelectedProductId,
        navigateToProduct,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        navigateToCategory,
        toasts,
        addToast,
        removeToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
