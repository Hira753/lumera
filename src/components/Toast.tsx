import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const Toast: React.FC = () => {
  const { toasts, removeToast } = useCart();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-2 pointer-events-none max-w-sm w-full px-4 sm:px-0">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#2B211D] text-[#FAF7F2] p-3.5 rounded-lg shadow-xl border border-[#B99A6B]/30 flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5 duration-300"
        >
          <div className="flex items-center gap-2.5">
            {toast.type === 'info' ? (
              <Info className="w-4 h-4 text-[#EDE4D8] flex-shrink-0" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-[#B99A6B] flex-shrink-0" />
            )}
            <span className="text-xs font-medium tracking-wide">
              {toast.text}
            </span>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-white/60 hover:text-white p-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ))}
    </div>
  );
};
