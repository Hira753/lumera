import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Check } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, navigateToProduct } = useCart();
  const [isHovered, setIsHovered] = useState(false);
  const [addedAnim, setAddedAnim] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product, 1);
    setAddedAnim(true);
    setTimeout(() => setAddedAnim(false), 1400);
  };

  return (
    <div
      onClick={() => navigateToProduct(product.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group cursor-pointer flex flex-col h-full bg-white rounded-md p-3.5 sm:p-4 border border-[#EDE4D8] transition-all duration-300 hover:shadow-[0_12px_32px_rgba(43,33,29,0.08)] hover:-translate-y-1 relative"
    >
      {/* Product Image Frame */}
      <div className="relative aspect-square w-full overflow-hidden rounded bg-[#FAF7F2] mb-4">
        {/* Main image */}
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
            isHovered && product.secondaryImage ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Secondary reveal image on hover if available */}
        {product.secondaryImage && (
          <img
            src={product.secondaryImage}
            alt={`${product.name} texture`}
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 ease-out ${
              isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
          />
        )}

        {/* Quick View overlay button */}
        <div
          className={`absolute inset-x-2.5 bottom-2.5 transition-all duration-200 hidden sm:flex items-center justify-center ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
          }`}
        >
          <div className="bg-[#FAF7F2]/95 backdrop-blur-sm text-[#2B211D] text-[11px] uppercase tracking-[0.15em] font-medium py-1.5 px-3 rounded border border-[#EDE4D8] shadow-sm flex items-center gap-1.5">
            <Eye className="w-3.5 h-3.5 text-[#B99A6B]" />
            <span>View Ritual</span>
          </div>
        </div>
      </div>

      {/* Product Metadata & Info */}
      <div className="flex flex-col flex-grow justify-between">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#2B211D]/60 mb-1.5">
            <span className="uppercase tracking-[0.14em] text-[11px] font-medium text-[#B99A6B]">
              {product.category}
            </span>
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3 fill-[#B99A6B] text-[#B99A6B]" />
              <span className="text-[11px] font-medium tabular-nums text-[#2B211D]">
                {product.rating.toFixed(1)}
              </span>
              <span className="text-[10px] text-[#2B211D]/40">({product.reviewCount})</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-serif text-lg text-[#2B211D] font-normal leading-snug group-hover:text-[#B99A6B] transition-colors mb-1 line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-xs text-[#2B211D]/70 font-light leading-relaxed line-clamp-2 mb-3">
            {product.shortDescription}
          </p>
        </div>

        {/* Price & Action button */}
        <div className="pt-2 border-t border-[#EDE4D8]/60 flex items-center justify-between gap-2 mt-auto">
          <div>
            <span className="text-sm sm:text-base font-semibold text-[#2B211D] tabular-nums tracking-tight">
              ${product.price}
            </span>
            <span className="text-[10px] text-[#2B211D]/40 ml-1.5 font-light">
              {product.volume}
            </span>
          </div>

          <button
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
            className={`px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] rounded transition-all duration-200 flex items-center gap-1.5 ${
              addedAnim
                ? 'bg-[#B99A6B] text-white'
                : 'bg-[#FAF7F2] text-[#2B211D] hover:bg-[#2B211D] hover:text-[#FAF7F2] border border-[#EDE4D8]'
            }`}
          >
            {addedAnim ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5 text-[#B99A6B]" />
                <span className="hidden sm:inline">Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
