import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const { cart, subtotal, discountAmount, shippingFee, total, promoCode, clearCart, setCurrentPage } = useCart();

  const [step, setStep] = useState<'form' | 'success'>('form');
  const [formData, setFormData] = useState({
    name: 'Eleanor Vance',
    email: 'eleanor.vance@example.com',
    address: '742 Evergreen Terrace, Suite 4B',
    city: 'Beverly Hills',
    state: 'CA',
    postalCode: '90210',
    country: 'United States',
    paymentMethod: 'card',
    cardNumber: '•••• •••• •••• 4242',
    cardExp: '08/29',
    cardCvc: '•••'
  });

  const [orderNumber, setOrderNumber] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrder = `LM-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrder);
    setStep('success');
    clearCart();
  };

  const handleFinish = () => {
    onClose();
    setStep('form');
    setCurrentPage('home');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#2B211D]/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8">
        <div className="relative w-full max-w-2xl bg-[#FAF7F2] rounded-xl shadow-2xl border border-[#EDE4D8] overflow-hidden z-10 animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#EDE4D8]">
            <div className="flex items-center gap-2">
              <span className="font-serif text-xl tracking-[0.16em] text-[#2B211D] font-medium">
                LUMÉRA
              </span>
              <span className="text-xs text-[#2B211D]/40">· Checkout</span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 text-[#2B211D]/60 hover:text-[#2B211D] rounded-full hover:bg-[#FAF7F2]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {step === 'form' ? (
            <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {/* Order summary mini drawer */}
              <div className="bg-white p-4 rounded-lg border border-[#EDE4D8]">
                <div className="flex items-center justify-between text-xs font-medium text-[#2B211D] mb-2 pb-2 border-b border-[#EDE4D8]">
                  <span>Your Order ({cart.length} unique items)</span>
                  <span className="tabular-nums font-semibold">${total.toFixed(2)}</span>
                </div>
                <div className="space-y-1 text-xs text-[#2B211D]/70 max-h-24 overflow-y-auto">
                  {cart.map((i) => (
                    <div key={i.product.id} className="flex justify-between">
                      <span className="truncate max-w-[280px]">
                        {i.quantity}x {i.product.name}
                      </span>
                      <span className="tabular-nums">${(i.product.price * i.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shipping Address */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B99A6B] mb-3 flex items-center gap-1.5">
                  <Truck className="w-4 h-4" />
                  <span>1. Shipping Destination</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div>
                    <label className="block text-[11px] text-[#2B211D]/70 mb-1">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#2B211D]/70 mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="block text-[11px] text-[#2B211D]/70 mb-1">Street Address</label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#2B211D]/70 mb-1">City</label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-[#2B211D]/70 mb-1">Postal Code</label>
                    <input
                      type="text"
                      required
                      value={formData.postalCode}
                      onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                      className="w-full px-3 py-2 bg-white border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B99A6B] mb-3 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4" />
                  <span>2. Payment Information</span>
                </h3>
                <div className="bg-white p-4 rounded-lg border border-[#EDE4D8] space-y-3">
                  <div>
                    <label className="block text-[11px] text-[#2B211D]/70 mb-1">Card Number</label>
                    <input
                      type="text"
                      required
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#EDE4D8] rounded text-[#2B211D] text-xs focus:border-[#B99A6B] focus:outline-none font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <label className="block text-[11px] text-[#2B211D]/70 mb-1">Expires</label>
                      <input
                        type="text"
                        required
                        value={formData.cardExp}
                        onChange={(e) => setFormData({ ...formData, cardExp: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#EDE4D8] rounded text-[#2B211D] text-xs focus:border-[#B99A6B] focus:outline-none font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] text-[#2B211D]/70 mb-1">Security CVC</label>
                      <input
                        type="text"
                        required
                        value={formData.cardCvc}
                        onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        className="w-full px-3 py-2 bg-[#FAF7F2] border border-[#EDE4D8] rounded text-[#2B211D] text-xs focus:border-[#B99A6B] focus:outline-none font-mono"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Trust badge */}
              <div className="flex items-center gap-2 text-xs text-[#2B211D]/60 justify-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>256-bit Encrypted SSL Checkout · Complimentary Luxury Gift Wrap</span>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-3.5 bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium rounded shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <span>Authorize & Complete Ritual Order · ${total.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4 text-[#B99A6B]" />
              </button>
            </form>
          ) : (
            <div className="p-8 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[#B99A6B] font-semibold">
                  Order Confirmed
                </p>
                <h3 className="font-serif text-3xl text-[#2B211D] mt-1">
                  Thank You for Your Ritual
                </h3>
                <p className="text-xs text-[#2B211D]/70 font-light mt-2 max-w-md mx-auto leading-relaxed">
                  Your bespoke skincare parcel <span className="font-mono font-semibold text-[#2B211D]">#{orderNumber}</span> has been confirmed. A tracking email with estimated delivery has been sent to {formData.email}.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-[#EDE4D8] max-w-md mx-auto text-left text-xs space-y-2 text-[#2B211D]/80">
                <div className="flex justify-between border-b border-[#EDE4D8] pb-2">
                  <span className="font-medium text-[#2B211D]">Order Reference:</span>
                  <span className="font-mono font-semibold text-[#B99A6B]">{orderNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Address:</span>
                  <span className="text-right text-[#2B211D]">{formData.address}, {formData.city}</span>
                </div>
                <div className="flex justify-between">
                  <span>Delivery Method:</span>
                  <span className="text-[#2B211D]">White Glove Signature Courier (2-3 Business Days)</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#EDE4D8] font-semibold text-sm text-[#2B211D]">
                  <span>Total Paid:</span>
                  <span className="tabular-nums">${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="px-8 py-3 bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium rounded transition-colors inline-flex items-center gap-2"
              >
                <span>Return to LUMÉRA</span>
                <Sparkles className="w-3.5 h-3.5 text-[#B99A6B]" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
