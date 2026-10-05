import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Tag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  onOpenCheckout?: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({ onOpenCheckout }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    subtotal,
    discountAmount,
    shippingFee,
    freeShippingThreshold,
    total,
    promoCode,
    applyPromoCode,
    removePromoCode,
    setCurrentPage,
    navigateToProduct
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoFeedback, setPromoFeedback] = useState<{ success?: boolean; message?: string } | null>(null);

  if (!isCartOpen) return null;

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyPromoCode(inputCode);
    setPromoFeedback(res);
    if (res.success) {
      setInputCode('');
    }
  };

  const handleGoToCart = () => {
    setIsCartOpen(false);
    setCurrentPage('cart');
  };

  const handleProceedCheckout = () => {
    setIsCartOpen(false);
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      setCurrentPage('cart');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2B211D]/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FAF7F2] shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#EDE4D8] flex items-center justify-between bg-white">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#B99A6B]" />
            <h2 className="font-serif text-xl text-[#2B211D] font-medium tracking-wide">
              Your Ritual Bag
            </h2>
            <span className="text-xs text-[#2B211D]/60 font-light">
              ({cart.reduce((n, i) => n + i.quantity, 0)} items)
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart drawer"
            className="p-1.5 text-[#2B211D]/60 hover:text-[#2B211D] transition-colors rounded-full hover:bg-[#FAF7F2]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#EDE4D8]/50 px-6 py-3 border-b border-[#EDE4D8]">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-[#2B211D] font-medium">
              {amountToFreeShipping === 0 ? (
                <span className="text-[#B99A6B] flex items-center gap-1 font-semibold">
                  <Sparkles className="w-3.5 h-3.5" />
                  Unlocked: Complimentary Shipping!
                </span>
              ) : (
                <>Add <span className="font-semibold text-[#2B211D]">${amountToFreeShipping.toFixed(2)}</span> more for Free Shipping</>
              )}
            </span>
            <span className="text-[11px] text-[#2B211D]/60">{progressPercent}%</span>
          </div>
          <div className="w-full h-1.5 bg-[#FAF7F2] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#B99A6B] transition-all duration-500 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EDE4D8]/60 flex items-center justify-center text-[#B99A6B]">
                <ShoppingBag className="w-8 h-8 stroke-[1.2]" />
              </div>
              <h3 className="font-serif text-xl text-[#2B211D]">Your Bag is Empty</h3>
              <p className="text-xs text-[#2B211D]/60 font-light max-w-xs leading-relaxed">
                Discover our award-winning botanical elixirs and begin your bespoke daily glow ritual.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  setCurrentPage('shop');
                }}
                className="px-6 py-2.5 bg-[#2B211D] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-medium rounded hover:bg-[#3D302A] transition-colors"
              >
                Explore Bestsellers
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.product.id}
                className="flex gap-4 p-3 bg-white rounded-lg border border-[#EDE4D8] relative group"
              >
                {/* Thumbnail */}
                <div
                  onClick={() => {
                    setIsCartOpen(false);
                    navigateToProduct(item.product.id);
                  }}
                  className="w-20 h-20 rounded bg-[#FAF7F2] overflow-hidden flex-shrink-0 cursor-pointer"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h4
                        onClick={() => {
                          setIsCartOpen(false);
                          navigateToProduct(item.product.id);
                        }}
                        className="font-serif text-sm font-medium text-[#2B211D] hover:text-[#B99A6B] cursor-pointer truncate"
                      >
                        {item.product.name}
                      </h4>
                      <p className="text-[11px] text-[#2B211D]/50 font-light">
                        {item.product.volume}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.product.id)}
                      aria-label="Remove item"
                      className="text-[#2B211D]/40 hover:text-red-600 transition-colors p-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#EDE4D8]/60">
                    {/* Quantity controls */}
                    <div className="flex items-center border border-[#EDE4D8] rounded bg-[#FAF7F2]">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 hover:text-[#B99A6B] text-[#2B211D] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-semibold tabular-nums text-[#2B211D]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 hover:text-[#B99A6B] text-[#2B211D] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price calculation */}
                    <div className="text-right">
                      <span className="text-xs font-semibold text-[#2B211D] tabular-nums">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / Summary if items present */}
        {cart.length > 0 && (
          <div className="p-6 bg-white border-t border-[#EDE4D8] space-y-4">
            {/* Promo code mini form */}
            <form onSubmit={handleApplyCode} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-[#2B211D]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Code: GLOW10"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="w-full pl-8 pr-3 py-2 text-xs uppercase bg-[#FAF7F2] border border-[#EDE4D8] rounded text-[#2B211D] focus:outline-none focus:border-[#B99A6B]"
                />
              </div>
              <button
                type="submit"
                className="px-3.5 py-2 text-xs uppercase tracking-wider font-medium bg-[#2B211D] text-[#FAF7F2] rounded hover:bg-[#3D302A] transition-colors"
              >
                Apply
              </button>
            </form>

            {promoFeedback && (
              <p
                className={`text-[11px] ${
                  promoFeedback.success ? 'text-emerald-700' : 'text-red-600'
                }`}
              >
                {promoFeedback.message}
              </p>
            )}

            {promoCode && (
              <div className="flex items-center justify-between text-xs bg-[#EDE4D8]/40 px-3 py-1.5 rounded border border-[#EDE4D8]">
                <span className="flex items-center gap-1.5 text-emerald-800 font-medium">
                  <Check className="w-3 h-3 text-emerald-600" />
                  Code {promoCode} ({(useCart().discountPercentage * 100)}% off)
                </span>
                <button
                  onClick={removePromoCode}
                  className="text-[11px] text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#2B211D]/80">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium tabular-nums text-[#2B211D]">${subtotal.toFixed(2)}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-800">
                  <span>Savings</span>
                  <span className="font-medium tabular-nums">-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span className="font-medium tabular-nums text-[#2B211D]">
                  {shippingFee === 0 ? 'Complimentary' : `$${shippingFee.toFixed(2)}`}
                </span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#2B211D] pt-2 border-t border-[#EDE4D8]">
                <span>Estimated Total</span>
                <span className="tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleProceedCheckout}
                className="w-full py-3 bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium rounded flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <span>Checkout · ${total.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4 text-[#B99A6B]" />
              </button>

              <button
                onClick={handleGoToCart}
                className="w-full py-2.5 bg-[#FAF7F2] hover:bg-[#EDE4D8] text-[#2B211D] text-xs uppercase tracking-[0.16em] font-medium rounded border border-[#EDE4D8] transition-colors"
              >
                View Full Bag Page
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
