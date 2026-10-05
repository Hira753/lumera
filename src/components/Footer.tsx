import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PageRoute } from '../types';

export const Footer: React.FC = () => {
  const { setCurrentPage } = useCart();

  const handleNav = (page: PageRoute) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B211D] text-[#FAF7F2] border-t border-[#3D302A] pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#3D302A]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <span className="font-serif text-3xl tracking-[0.22em] font-medium text-[#FAF7F2] uppercase">
                LUMÉRA
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#B99A6B] font-light mt-0.5">
                Atelier Botanique
              </p>
            </div>
            <p className="text-xs text-[#FAF7F2]/70 font-light max-w-sm leading-relaxed">
              Skincare designed for your everyday glow. Mindfully formulated botanical elixirs created to nourish, hydrate, and reveal timeless luminosity.
            </p>
            <div className="flex items-center gap-4 pt-2 text-[#EDE4D8]">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#B99A6B] hover:text-[#B99A6B] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#B99A6B] hover:text-[#B99A6B] transition-colors text-xs font-semibold"
              >
                <span className="tracking-tighter">TT</span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#B99A6B] hover:text-[#B99A6B] transition-colors text-xs font-serif italic"
              >
                f
              </a>

              {/* Pinterest */}
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Pinterest"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:border-[#B99A6B] hover:text-[#B99A6B] transition-colors text-xs font-semibold"
              >
                P
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B99A6B] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80 font-light">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#B99A6B] transition-colors flex items-center gap-1"
                >
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shop')}
                  className="hover:text-[#B99A6B] transition-colors flex items-center gap-1"
                >
                  <span>Shop</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#B99A6B] transition-colors flex items-center gap-1"
                >
                  <span>About</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#B99A6B] transition-colors flex items-center gap-1"
                >
                  <span>Contact</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B99A6B] mb-4">
              Customer Care
            </h4>
            <ul className="space-y-2.5 text-xs text-[#FAF7F2]/80 font-light">
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#B99A6B] transition-colors"
                >
                  Shipping & Customs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#B99A6B] transition-colors"
                >
                  Returns & Exchanges
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#B99A6B] transition-colors"
                >
                  Ritual FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#B99A6B] transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Boutiques & Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#B99A6B] mb-4">
              Atelier Locations
            </h4>
            <p className="text-xs text-[#FAF7F2]/80 font-light leading-relaxed">
              342 Rodeo Drive, Beverly Hills
              <br />
              18 Rue de la Paix, 75002 Paris
            </p>
            <p className="text-[11px] text-[#FAF7F2]/50 font-light mt-3">
              Monday – Saturday
              <br />
              10:00 AM – 7:00 PM PST
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FAF7F2]/50 font-light gap-4">
          <p>© 2026 LUMÉRA. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[11px]">
            <span>Terms of Ritual</span>
            <span>·</span>
            <span>Accessibility</span>
            <span>·</span>
            <span>Sustainably Handcrafted</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
