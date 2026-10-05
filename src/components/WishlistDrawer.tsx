import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    isWishlistOpen,
    setIsWishlistOpen,
    toggleWishlist,
    addToCart,
    navigateToProduct,
    setCurrentPage
  } = useCart();

  if (!isWishlistOpen) return null;

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2B211D]/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FAF7F2] shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#EDE4D8] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <Heart className="w-5 h-5 text-[#B99A6B] fill-[#B99A6B]" />
            <h2 className="font-serif text-xl text-[#2B211D] font-medium tracking-wide">
              Saved Rituals
            </h2>
            <span className="text-xs text-[#2B211D]/60 font-light">
              ({savedProducts.length} items)
            </span>
          </div>

          <button
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist drawer"
            className="p-1.5 text-[#2B211D]/60 hover:text-[#2B211D] transition-colors rounded-full hover:bg-[#FAF7F2]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {savedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EDE4D8]/60 flex items-center justify-center text-[#B99A6B]">
                <Heart className="w-8 h-8 stroke-[1.2]" />
              </div>
              <h3 className="font-serif text-xl text-[#2B211D]">Your Wishlist is Empty</h3>
              <p className="text-xs text-[#2B211D]/60 font-light max-w-xs leading-relaxed">
                Save your favorite elixirs and treatments to revisit your tailored skin ritual at any time.
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  setCurrentPage('shop');
                }}
                className="px-6 py-2.5 bg-[#2B211D] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-medium rounded hover:bg-[#3D302A] transition-colors"
              >
                Browse Collection
              </button>
            </div>
          ) : (
            savedProducts.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 p-3 bg-white rounded-lg border border-[#EDE4D8] relative group"
              >
                <div
                  onClick={() => {
                    setIsWishlistOpen(false);
                    navigateToProduct(product.id);
                  }}
                  className="w-20 h-20 rounded bg-[#FAF7F2] overflow-hidden flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4
                        onClick={() => {
                          setIsWishlistOpen(false);
                          navigateToProduct(product.id);
                        }}
                        className="font-serif text-sm font-medium text-[#2B211D] hover:text-[#B99A6B] cursor-pointer truncate"
                      >
                        {product.name}
                      </h4>
                      <p className="text-xs font-semibold text-[#2B211D] tabular-nums mt-0.5">
                        ${product.price}
                      </p>
                    </div>

                    <button
                      onClick={() => toggleWishlist(product.id)}
                      aria-label="Remove from wishlist"
                      className="text-[#2B211D]/40 hover:text-red-600 transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="mt-2 pt-2 border-t border-[#EDE4D8]/60 flex items-center justify-between">
                    <span className="text-[11px] text-[#B99A6B] uppercase tracking-wider font-medium">
                      {product.category}
                    </span>
                    <button
                      onClick={() => {
                        addToCart(product, 1);
                      }}
                      className="px-3 py-1 bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2] text-[11px] uppercase tracking-wider font-medium rounded flex items-center gap-1 transition-colors"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#B99A6B]" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer if items exist */}
        {savedProducts.length > 0 && (
          <div className="p-4 bg-white border-t border-[#EDE4D8]">
            <button
              onClick={() => {
                savedProducts.forEach((p) => addToCart(p, 1));
                setIsWishlistOpen(false);
              }}
              className="w-full py-2.5 bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-medium rounded flex items-center justify-center gap-2 transition-colors"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#B99A6B]" />
              <span>Add All To Bag</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
