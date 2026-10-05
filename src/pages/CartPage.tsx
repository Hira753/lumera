import React, { useState } from 'react';
import { Trash2, Plus, Minus, ArrowRight, Sparkles, Tag, Check, ShoppingBag, ArrowLeft, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';

interface CartPageProps {
  onOpenCheckout: () => void;
}

export const CartPage: React.FC<CartPageProps> = ({ onOpenCheckout }) => {
  const {
    cart,
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

  const progressPercent = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    const res = applyPromoCode(inputCode);
    setPromoFeedback(res);
    if (res.success) setInputCode('');
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-white border border-[#EDE4D8] flex items-center justify-center mx-auto text-[#B99A6B]">
          <ShoppingBag className="w-10 h-10 stroke-[1.2]" />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl text-[#2B211D]">Your Bag is Currently Empty</h1>
        <p className="text-xs sm:text-sm text-[#2B211D]/70 font-light max-w-md mx-auto leading-relaxed">
          Allow your skin to experience the botanical difference. Explore our complete collection of serums, creams, and restoring elixirs.
        </p>
        <button
          onClick={() => setCurrentPage('shop')}
          className="px-8 py-3.5 bg-[#2B211D] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium rounded hover:bg-[#3D302A] transition-colors inline-flex items-center gap-2"
        >
          <span>Explore The Rituals</span>
          <ArrowRight className="w-4 h-4 text-[#B99A6B]" />
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
      {/* Page Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-[#EDE4D8] pb-6 gap-4">
        <div>
          <span className="text-xs uppercase tracking-[0.22em] font-medium text-[#B99A6B]">
            Your Selected Formulas
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#2B211D] font-normal mt-1">
            Shopping Bag ({cart.reduce((s, i) => s + i.quantity, 0)})
          </h1>
        </div>

        <button
          onClick={() => setCurrentPage('shop')}
          className="text-xs uppercase tracking-[0.16em] font-medium text-[#2B211D] hover:text-[#B99A6B] flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Continue Shopping</span>
        </button>
      </div>

      {/* Free Shipping Tracker */}
      <div className="bg-white p-5 rounded-xl border border-[#EDE4D8] space-y-2">
        <div className="flex items-center justify-between text-xs">
          <span className="font-medium text-[#2B211D]">
            {amountToFreeShipping === 0 ? (
              <span className="text-[#B99A6B] flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-4 h-4" />
                Congratulations! You have unlocked Complimentary Worldwide Delivery.
              </span>
            ) : (
              <>
                Add <span className="font-semibold text-[#2B211D] tabular-nums">${amountToFreeShipping.toFixed(2)}</span> more to your ritual for Complimentary Worldwide Delivery.
              </>
            )}
          </span>
          <span className="text-[11px] text-[#2B211D]/60 tabular-nums">{progressPercent}%</span>
        </div>
        <div className="w-full h-2 bg-[#FAF7F2] rounded-full overflow-hidden border border-[#EDE4D8]/60">
          <div
            className="h-full bg-[#B99A6B] transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Two Column Layout: Cart Table & Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left: Product List */}
        <div className="lg:col-span-8 space-y-4">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="bg-white p-4 sm:p-5 rounded-xl border border-[#EDE4D8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              {/* Product Info */}
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div
                  onClick={() => navigateToProduct(item.product.id)}
                  className="w-20 h-20 rounded-lg overflow-hidden bg-[#FAF7F2] flex-shrink-0 cursor-pointer border border-[#EDE4D8]"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="min-w-0">
                  <span className="text-[10px] uppercase tracking-wider text-[#B99A6B] font-semibold">
                    {item.product.category}
                  </span>
                  <h3
                    onClick={() => navigateToProduct(item.product.id)}
                    className="font-serif text-base sm:text-lg text-[#2B211D] font-normal hover:text-[#B99A6B] cursor-pointer truncate"
                  >
                    {item.product.name}
                  </h3>
                  <p className="text-xs text-[#2B211D]/50 font-light">
                    {item.product.volume}
                  </p>
                  <p className="text-xs font-semibold text-[#2B211D] tabular-nums mt-1 sm:hidden">
                    ${item.product.price}.00 each
                  </p>
                </div>
              </div>

              {/* Price & Quantity & Remove */}
              <div className="flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-[#EDE4D8]/60">
                {/* Quantity Controls */}
                <div className="flex items-center border border-[#EDE4D8] rounded bg-[#FAF7F2]">
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="px-2.5 py-1.5 text-xs hover:text-[#B99A6B] transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="w-7 text-center text-xs font-semibold tabular-nums text-[#2B211D]">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="px-2.5 py-1.5 text-xs hover:text-[#B99A6B] transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right min-w-[70px]">
                  <span className="text-sm font-semibold text-[#2B211D] tabular-nums">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </span>
                </div>

                {/* Delete */}
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  aria-label="Remove item"
                  className="p-1.5 text-[#2B211D]/40 hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Order Summary */}
        <div className="lg:col-span-4">
          <div className="bg-white p-6 sm:p-7 rounded-xl border border-[#EDE4D8] shadow-xs space-y-6 sticky top-28">
            <h3 className="font-serif text-xl text-[#2B211D] font-normal border-b border-[#EDE4D8] pb-3">
              Order Summary
            </h3>

            {/* Promo Code Input */}
            <form onSubmit={handleApply} className="space-y-2">
              <label className="block text-[11px] uppercase tracking-wider text-[#2B211D]/70 font-medium">
                Privilege Code
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-[#2B211D]/40 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="GLOW10 or VIP15"
                    value={inputCode}
                    onChange={(e) => setInputCode(e.target.value)}
                    className="w-full pl-8 pr-3 py-2 text-xs uppercase bg-[#FAF7F2] border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#2B211D] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium rounded hover:bg-[#3D302A] transition-colors"
                >
                  Apply
                </button>
              </div>

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
                <div className="flex items-center justify-between text-xs bg-[#EDE4D8]/40 p-2 rounded border border-[#EDE4D8]">
                  <span className="text-emerald-800 font-medium flex items-center gap-1">
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    Code &ldquo;{promoCode}&rdquo; active
                  </span>
                  <button
                    type="button"
                    onClick={removePromoCode}
                    className="text-[11px] text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              )}
            </form>

            {/* Calculations Breakdown */}
            <div className="space-y-3 text-xs text-[#2B211D]/80 border-t border-[#EDE4D8] pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold tabular-nums text-[#2B211D]">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-800 font-medium">
                  <span>Privilege Discount ({Math.round((useCart().discountPercentage) * 100)}%)</span>
                  <span className="tabular-nums">-${discountAmount.toFixed(2)}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Complimentary Courier Delivery</span>
                <span className="font-medium text-[#2B211D] tabular-nums">
                  {shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}
                </span>
              </div>

              <div className="flex justify-between text-base font-semibold text-[#2B211D] border-t border-[#EDE4D8] pt-3">
                <span>Estimated Total</span>
                <span className="tabular-nums">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={onOpenCheckout}
              className="w-full py-4 bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium rounded shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4 text-[#B99A6B]" />
            </button>

            {/* Trust Badges */}
            <div className="flex items-center justify-center gap-2 text-xs text-[#2B211D]/60 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Complimentary Gift Packaging with Ribbon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
