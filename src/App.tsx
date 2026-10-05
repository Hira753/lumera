/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { QuickSearchModal } from './components/QuickSearchModal';
import { CheckoutModal } from './components/CheckoutModal';
import { Toast } from './components/Toast';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';

const AppContent: React.FC = () => {
  const { currentPage } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#2B211D]">
      {/* Top Header */}
      <Header />

      {/* Main Page Content */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'shop' && <ShopPage />}
        {currentPage === 'collections' && <CollectionsPage />}
        {currentPage === 'product-detail' && (
          <ProductDetailPage onOpenCheckout={() => setIsCheckoutOpen(true)} />
        )}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'contact' && <ContactPage />}
        {currentPage === 'cart' && (
          <CartPage onOpenCheckout={() => setIsCheckoutOpen(true)} />
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Mini Cart Drawer */}
      <CartDrawer onOpenCheckout={() => setIsCheckoutOpen(true)} />

      {/* Wishlist Drawer */}
      <WishlistDrawer />

      {/* Quick Search Modal */}
      <QuickSearchModal />

      {/* Interactive Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Toast notifications */}
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
