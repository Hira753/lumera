import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Star, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

export const QuickSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigateToProduct, addToCart } = useCart();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const filtered = PRODUCTS.filter((p) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.skinType.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.ingredients.some((ing) => ing.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2B211D]/70 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative min-h-screen flex items-start justify-center p-4 sm:p-6 md:p-12">
        <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-xl shadow-2xl border border-[#EDE4D8] overflow-hidden z-10 animate-in zoom-in-95 duration-200 mt-10">
          {/* Search bar input */}
          <div className="relative flex items-center px-4 py-4 bg-white border-b border-[#EDE4D8]">
            <Search className="w-5 h-5 text-[#B99A6B] mr-3" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search serums, moisturizers, vitamin C, hyaluronic acid..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-base bg-transparent text-[#2B211D] placeholder-[#2B211D]/40 focus:outline-none"
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="text-xs text-[#2B211D]/40 hover:text-[#2B211D] mr-2"
              >
                Clear
              </button>
            )}
            <button
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
              className="p-1 text-[#2B211D]/60 hover:text-[#2B211D] rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick search tags */}
          <div className="px-6 py-2.5 bg-[#FAF7F2] border-b border-[#EDE4D8]/60 flex items-center gap-2 overflow-x-auto text-xs text-[#2B211D]/70">
            <span className="text-[11px] uppercase tracking-wider text-[#B99A6B] font-medium whitespace-nowrap">
              Popular:
            </span>
            {['Serum', 'Hyaluronic', 'Vitamin C', 'Cream', 'Cleanser', 'Body Oil'].map((tag) => (
              <button
                key={tag}
                onClick={() => setQuery(tag)}
                className="px-2.5 py-1 bg-white hover:bg-[#EDE4D8] rounded text-[11px] border border-[#EDE4D8] text-[#2B211D] transition-colors whitespace-nowrap"
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Search Results */}
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
            {filtered.length === 0 ? (
              <div className="text-center py-10">
                <p className="font-serif text-lg text-[#2B211D]">No rituals found matching &ldquo;{query}&rdquo;</p>
                <p className="text-xs text-[#2B211D]/60 mt-1">Try searching for &quot;serum&quot;, &quot;cream&quot;, or &quot;cleanser&quot;.</p>
              </div>
            ) : (
              filtered.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigateToProduct(product.id);
                  }}
                  className="flex items-center gap-4 p-3 rounded-lg bg-white border border-[#EDE4D8] hover:border-[#B99A6B] hover:shadow-md transition-all cursor-pointer group"
                >
                  <div className="w-16 h-16 rounded overflow-hidden bg-[#FAF7F2] flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#B99A6B] font-semibold">
                        {product.category}
                      </span>
                      <span className="text-[10px] text-[#2B211D]/40">·</span>
                      <div className="flex items-center gap-1 text-[11px] text-[#2B211D]/70">
                        <Star className="w-3 h-3 fill-[#B99A6B] text-[#B99A6B]" />
                        <span>{product.rating}</span>
                      </div>
                    </div>
                    <h4 className="font-serif text-base text-[#2B211D] font-normal group-hover:text-[#B99A6B] transition-colors truncate">
                      {product.name}
                    </h4>
                    <p className="text-xs text-[#2B211D]/60 font-light truncate">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-[#2B211D] tabular-nums">
                      ${product.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product, 1);
                      }}
                      className="p-2 rounded bg-[#FAF7F2] hover:bg-[#2B211D] text-[#2B211D] hover:text-[#FAF7F2] border border-[#EDE4D8] transition-colors"
                      aria-label="Add to cart"
                    >
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
