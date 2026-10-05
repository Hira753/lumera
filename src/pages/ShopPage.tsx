import React, { useState, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { ProductCategory } from '../types';
import { useCart } from '../context/CartContext';

export const ShopPage: React.FC = () => {
  const { selectedCategoryFilter, setSelectedCategoryFilter } = useCart();
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating'>('featured');

  const categories: ProductCategory[] = ['All', 'Serums', 'Moisturizers', 'Cleansers', 'Body Care'];

  const handleResetFilters = () => {
    setSelectedCategoryFilter('All');
    setSortBy('featured');
  };

  // Filter and sort computation
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategoryFilter !== 'All' && product.category !== selectedCategoryFilter) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      // Default 'featured': bestsellers first
      return (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0);
    });
  }, [selectedCategoryFilter, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.26em] font-medium text-[#B99A6B]">
          The Complete Formulation Catalog
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#2B211D] font-normal">
          Shop All
        </h1>
        <p className="text-sm text-[#2B211D]/75 font-light leading-relaxed">
          Every LUMÉRA formulation is crafted with clinically supported plant actives, biomimetic lipids, and organic botanical extracts to elevate your daily ritual.
        </p>
      </div>

      {/* Category Navigation & Sort Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#EDE4D8] pb-6">
        {/* Category Tabs (Clean Segmented Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategoryFilter(cat)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] rounded-md transition-all whitespace-nowrap ${
                selectedCategoryFilter === cat
                  ? 'bg-[#2B211D] text-[#FAF7F2] shadow-xs'
                  : 'bg-white text-[#2B211D]/70 hover:bg-[#EDE4D8] hover:text-[#2B211D] border border-[#EDE4D8]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Quiet Sort & Count */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
          <span className="text-xs text-[#2B211D]/60 font-light">
            Showing <strong className="text-[#2B211D] font-medium">{filteredProducts.length}</strong> rituals
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            aria-label="Sort products by"
            className="px-3 py-2 text-xs bg-white border border-[#EDE4D8] rounded text-[#2B211D] focus:outline-none focus:border-[#B99A6B]"
          >
            <option value="featured">Featured / Best Sellers</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-xl border border-[#EDE4D8] space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#FAF7F2] text-[#B99A6B] flex items-center justify-center mx-auto">
            <Sparkles className="w-8 h-8 stroke-[1.2]" />
          </div>
          <h3 className="font-serif text-2xl text-[#2B211D]">No Formulas Match Your Criteria</h3>
          <p className="text-xs text-[#2B211D]/60 max-w-sm mx-auto font-light">
            Try adjusting your search terms or increasing your maximum price filter to view all botanical elixirs.
          </p>
          <button
            onClick={handleResetFilters}
            className="px-6 py-2.5 bg-[#2B211D] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium rounded hover:bg-[#3D302A] transition-colors"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Assurance banner */}
      <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#EDE4D8] flex flex-col sm:flex-row items-center justify-between text-xs text-[#2B211D]/80 gap-4 text-center sm:text-left">
        <div>
          <p className="font-serif text-base text-[#2B211D] font-medium">
            Complimentary Samples With Every Ritual Order
          </p>
          <p className="text-[11px] text-[#2B211D]/60 font-light mt-0.5">
            Every shipment includes two handpicked deluxe travel minis of our latest apothecary preparations.
          </p>
        </div>
        <div className="text-[#B99A6B] font-semibold uppercase tracking-wider text-[11px] whitespace-nowrap">
          Included in Gift Wrap
        </div>
      </div>
    </div>
  );
};
