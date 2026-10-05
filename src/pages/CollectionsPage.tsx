import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ProductCategory } from '../types';

interface CollectionItem {
  id: ProductCategory;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  itemCount: string;
}

export const CollectionsPage: React.FC = () => {
  const { navigateToCategory } = useCart();

  const collections: CollectionItem[] = [
    {
      id: 'All',
      name: 'Skincare',
      subtitle: 'The Complete Daily Ritual',
      description: 'Harmonious botanical balance engineered to purify, nourish, and shield your skin barrier throughout every season.',
      image: '/src/assets/images/hero_skincare_luxury_1790447841859.jpg',
      itemCount: '8 Formulations'
    },
    {
      id: 'Serums',
      name: 'Serums',
      subtitle: 'High-Potency Active Elixirs',
      description: 'Concentrated multi-molecular hyaluronic acid, lipid-soluble Vitamin C, and floral peptides designed for targeted deep cellular renewal.',
      image: '/src/assets/images/product_glow_serum_1790447908069.jpg',
      itemCount: '3 Formulations'
    },
    {
      id: 'Moisturizers',
      name: 'Moisturizers',
      subtitle: 'Whipped Barrier Creams & Balms',
      description: 'Velvety biomimetic ceramides, cold-pressed marula lipids, and restorative oat beta-glucan to seal in sustained 72-hour moisture.',
      image: '/src/assets/images/product_hydra_cream_1790447921145.jpg',
      itemCount: '3 Formulations'
    },
    {
      id: 'Body Care',
      name: 'Body Care',
      subtitle: 'Nourishing Satin Botanical Oils',
      description: 'Luxurious fast-absorbing dry body oils infused with golden mineral luster, French jasmine sambac, and organic baobab lipids.',
      image: '/src/assets/images/product_body_oil_1790447946910.jpg',
      itemCount: '1 Formulation'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Header Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.26em] font-medium text-[#B99A6B]">
          Atelier Curation
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#2B211D] font-normal">
          Our Collections
        </h1>
        <p className="text-sm text-[#2B211D]/75 font-light leading-relaxed">
          Explore our four signature pillars of intentional skincare. Each collection is carefully developed to address specific moments of your daily self-care ritual.
        </p>
      </div>

      {/* Collections Grid: 4 Premium Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {collections.map((item) => (
          <div
            key={item.name}
            className="group bg-white rounded-xl overflow-hidden border border-[#EDE4D8] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
          >
            {/* Image Container */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#FAF7F2]">
              <img
                src={item.image}
                alt={`${item.name} Collection`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B211D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content Container */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5 bg-white">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#B99A6B]">
                    {item.subtitle}
                  </span>
                  <span className="text-xs text-[#2B211D]/50 font-light">
                    {item.itemCount}
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#2B211D] font-normal group-hover:text-[#B99A6B] transition-colors">
                  {item.name}
                </h2>
                <p className="text-xs sm:text-sm text-[#2B211D]/75 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-2 border-t border-[#EDE4D8]/60">
                <button
                  onClick={() => navigateToCategory(item.id)}
                  className="w-full sm:w-auto px-6 py-3 bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2] text-xs uppercase tracking-[0.18em] font-medium rounded-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-[#B99A6B]"
                >
                  <span>Explore Collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Assurance Banner */}
      <div className="bg-[#FAF7F2] p-8 rounded-xl border border-[#EDE4D8] text-center max-w-3xl mx-auto space-y-3">
        <div className="w-10 h-10 rounded-full bg-white border border-[#EDE4D8] text-[#B99A6B] flex items-center justify-center mx-auto">
          <Sparkles className="w-5 h-5 stroke-[1.5]" />
        </div>
        <h3 className="font-serif text-xl sm:text-2xl text-[#2B211D]">
          Bespoke Routine Guidance
        </h3>
        <p className="text-xs sm:text-sm text-[#2B211D]/70 font-light max-w-lg mx-auto leading-relaxed">
          Unsure which collection best complements your skin type? Connect with our atelier consultants for a complimentary personalized regimen analysis.
        </p>
      </div>
    </div>
  );
};
