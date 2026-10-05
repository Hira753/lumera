import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PageRoute } from '../types';

export const Header: React.FC = () => {
  const {
    currentPage,
    setCurrentPage,
    setIsSearchOpen,
    setIsWishlistOpen,
    setIsCartOpen,
    totalItemsCount,
    wishlist
  } = useCart();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageRoute) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Top Announcement Bar */}
      {showBanner && (
        <div className="bg-[#2B211D] text-[#EDE4D8] px-4 py-2 text-xs tracking-wider uppercase text-center relative flex items-center justify-center border-b border-[#3D302A] select-none transition-all">
          <p className="font-light tracking-[0.18em] text-[11px] truncate px-6">
            Complimentary shipping on orders over $50 · Use code <span className="font-semibold text-[#B99A6B]">GLOW10</span> for 10% off
          </p>
          <button
            onClick={() => setShowBanner(false)}
            aria-label="Dismiss banner"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-[#EDE4D8]/60 hover:text-white transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF7F2]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(43,33,29,0.06)] border-b border-[#EDE4D8]'
            : 'bg-[#FAF7F2] border-b border-[#EDE4D8]/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="p-2 -ml-2 text-[#2B211D] hover:text-[#B99A6B] transition-colors focus:outline-none"
            >
              <Menu className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Brand Wordmark (Single text element in display face) */}
          <div className="flex-1 md:flex-initial flex items-center justify-center md:justify-start">
            <button
              onClick={() => handleNavClick('home')}
              className="group text-left focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.22em] font-medium text-[#2B211D] uppercase group-hover:text-[#B99A6B] transition-colors">
                LUMÉRA
              </span>
              <span className="block text-[9px] uppercase tracking-[0.32em] text-[#B99A6B] font-light -mt-1">
                Atelier Botanique
              </span>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-[#2B211D]">
            <button
              onClick={() => handleNavClick('home')}
              className={`py-1 transition-colors relative hover:text-[#B99A6B] ${
                currentPage === 'home' ? 'text-[#B99A6B]' : 'text-[#2B211D]'
              }`}
            >
              Home
              {currentPage === 'home' && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B99A6B]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('shop')}
              className={`py-1 transition-colors relative hover:text-[#B99A6B] ${
                currentPage === 'shop' ? 'text-[#B99A6B]' : 'text-[#2B211D]'
              }`}
            >
              Shop
              {currentPage === 'shop' && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B99A6B]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`py-1 transition-colors relative hover:text-[#B99A6B] ${
                currentPage === 'about' ? 'text-[#B99A6B]' : 'text-[#2B211D]'
              }`}
            >
              About
              {currentPage === 'about' && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B99A6B]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('collections')}
              className={`py-1 transition-colors relative hover:text-[#B99A6B] ${
                currentPage === 'collections' ? 'text-[#B99A6B]' : 'text-[#2B211D]'
              }`}
            >
              Collections
              {currentPage === 'collections' && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B99A6B]" />
              )}
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`py-1 transition-colors relative hover:text-[#B99A6B] ${
                currentPage === 'contact' ? 'text-[#B99A6B]' : 'text-[#2B211D]'
              }`}
            >
              Contact
              {currentPage === 'contact' && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#B99A6B]" />
              )}
            </button>
          </nav>

          {/* Right Action Icons & Primary CTA */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search catalog"
              className="p-2 text-[#2B211D] hover:text-[#B99A6B] transition-colors rounded-full hover:bg-[#EDE4D8]/50"
            >
              <Search className="w-5 h-5 stroke-[1.5]" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="View wishlist"
              className="p-2 text-[#2B211D] hover:text-[#B99A6B] transition-colors relative rounded-full hover:bg-[#EDE4D8]/50"
            >
              <Heart className="w-5 h-5 stroke-[1.5]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#B99A6B] text-white text-[10px] font-medium flex items-center justify-center rounded-full leading-none">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Cart Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View shopping bag"
              className="p-2 text-[#2B211D] hover:text-[#B99A6B] transition-colors relative rounded-full hover:bg-[#EDE4D8]/50"
            >
              <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
              {totalItemsCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#2B211D] text-[#FAF7F2] text-[10px] font-medium flex items-center justify-center rounded-full leading-none">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Primary SHOP NOW button */}
            <button
              onClick={() => handleNavClick('shop')}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-medium rounded-sm shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Shop Now</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#B99A6B]" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#2B211D]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer container */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF7F2] shadow-2xl flex flex-col justify-between p-6 z-50 animate-in slide-in-from-left duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EDE4D8]">
                <div>
                  <span className="font-serif text-2xl tracking-[0.2em] font-medium text-[#2B211D]">
                    LUMÉRA
                  </span>
                  <p className="text-[10px] tracking-[0.25em] text-[#B99A6B] uppercase font-light">
                    Luxury Skincare
                  </p>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 text-[#2B211D] hover:text-[#B99A6B] transition-colors"
                >
                  <X className="w-6 h-6 stroke-[1.5]" />
                </button>
              </div>

              {/* Navigation list */}
              <nav className="mt-8 flex flex-col space-y-5 text-sm uppercase tracking-[0.2em] font-medium text-[#2B211D]">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`text-left py-2 border-b border-[#EDE4D8]/60 hover:text-[#B99A6B] flex items-center justify-between ${
                    currentPage === 'home' ? 'text-[#B99A6B]' : ''
                  }`}
                >
                  <span>Home</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button
                  onClick={() => handleNavClick('shop')}
                  className={`text-left py-2 border-b border-[#EDE4D8]/60 hover:text-[#B99A6B] flex items-center justify-between ${
                    currentPage === 'shop' ? 'text-[#B99A6B]' : ''
                  }`}
                >
                  <span>Shop Collection</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button
                  onClick={() => handleNavClick('collections')}
                  className={`text-left py-2 border-b border-[#EDE4D8]/60 hover:text-[#B99A6B] flex items-center justify-between ${
                    currentPage === 'collections' ? 'text-[#B99A6B]' : ''
                  }`}
                >
                  <span>Collections</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`text-left py-2 border-b border-[#EDE4D8]/60 hover:text-[#B99A6B] flex items-center justify-between ${
                    currentPage === 'about' ? 'text-[#B99A6B]' : ''
                  }`}
                >
                  <span>Our Story</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`text-left py-2 border-b border-[#EDE4D8]/60 hover:text-[#B99A6B] flex items-center justify-between ${
                    currentPage === 'contact' ? 'text-[#B99A6B]' : ''
                  }`}
                >
                  <span>Contact & Atelier</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
                <button
                  onClick={() => handleNavClick('cart')}
                  className={`text-left py-2 border-b border-[#EDE4D8]/60 hover:text-[#B99A6B] flex items-center justify-between ${
                    currentPage === 'cart' ? 'text-[#B99A6B]' : ''
                  }`}
                >
                  <span>Shopping Bag ({totalItemsCount})</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </button>
              </nav>
            </div>

            {/* Bottom info in mobile drawer */}
            <div className="pt-6 border-t border-[#EDE4D8]">
              <button
                onClick={() => handleNavClick('shop')}
                className="w-full py-3 bg-[#2B211D] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 rounded-sm shadow-sm"
              >
                <span>Shop All Rituals</span>
                <ArrowRight className="w-4 h-4 text-[#B99A6B]" />
              </button>
              <p className="mt-4 text-center text-xs text-[#2B211D]/60 font-light">
                Atelier Paris & Beverly Hills · Est. 2026
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
