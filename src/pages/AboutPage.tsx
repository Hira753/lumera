import React from 'react';
import { ArrowRight, Leaf, Shield, HeartHandshake, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const AboutPage: React.FC = () => {
  const { setCurrentPage } = useCart();

  return (
    <div className="space-y-20 sm:space-y-28 py-10 sm:py-16 overflow-hidden">
      {/* 1. Header & Hero Narrative */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs uppercase tracking-[0.28em] font-medium text-[#B99A6B]">
          Our Atelier Philosophy
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211D] font-normal leading-tight">
          Beauty With Intention.
        </h1>
        <p className="text-base sm:text-lg text-[#2B211D]/80 font-light leading-relaxed max-w-2xl mx-auto">
          LUMÉRA was conceived not in a boardroom, but in a quiet French botanical laboratory surrounded by ancient olive groves and sea lavender. We believe your skincare routine should be a sacred pause in a chaotic world.
        </p>
      </section>

      {/* 2. Visual Story Split Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#EDE4D8]">
            <img
              src="/src/assets/images/about_botanical_craft_1790447881053.jpg"
              alt="LUMÉRA Botanical Formulation Laboratory"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.24em] font-medium text-[#B99A6B]">
              The Genesis
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211D] font-normal leading-snug">
              Formulated to Honor Skin, Not Mask It
            </h2>
            <p className="text-sm text-[#2B211D]/80 font-light leading-relaxed">
              In an era of 12-step routines and over-exfoliation, LUMÉRA was established to return skincare to its essential purpose: nourishing your natural lipid barrier and allowing your authentic radiance to flourish.
            </p>
            <p className="text-sm text-[#2B211D]/80 font-light leading-relaxed">
              We extract our botanicals at low temperatures using renewable supercritical CO₂ methods, ensuring every volatile antioxidant, floral ester, and biomimetic lipid retains its living potency inside frosted amber glass vessels.
            </p>

            <div className="pt-2">
              <blockquote className="border-l-2 border-[#B99A6B] pl-4 italic text-sm text-[#2B211D]/70 font-serif">
                &ldquo;True luxury is time, quiet intention, and formulations that respect your biology.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Three Core Brand Values */}
      <section className="bg-white py-20 border-y border-[#EDE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.24em] font-medium text-[#B99A6B]">
              Our Guiding Pillars
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211D] font-normal mt-1">
              The Three Vows of LUMÉRA
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#FAF7F2] border border-[#EDE4D8] space-y-4">
              <div className="w-12 h-12 rounded-full bg-white border border-[#EDE4D8] flex items-center justify-center text-[#B99A6B]">
                <Leaf className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#2B211D] font-normal">
                1. Biocompatible Actives
              </h3>
              <p className="text-xs sm:text-sm text-[#2B211D]/75 font-light leading-relaxed">
                We synthesize plant lipids that mirror your skin’s own sebum matrix. This allows deep cellular uptake without clogging pores or disrupting the acid mantle.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#FAF7F2] border border-[#EDE4D8] space-y-4">
              <div className="w-12 h-12 rounded-full bg-white border border-[#EDE4D8] flex items-center justify-center text-[#B99A6B]">
                <Shield className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#2B211D] font-normal">
                2. Circular Sustainability
              </h3>
              <p className="text-xs sm:text-sm text-[#2B211D]/75 font-light leading-relaxed">
                100% infinitely recyclable European glass containers, FSC-certified organic cotton packaging, and carbon-neutral freight logistics for every parcel.
              </p>
            </div>

            <div className="p-8 rounded-xl bg-[#FAF7F2] border border-[#EDE4D8] space-y-4">
              <div className="w-12 h-12 rounded-full bg-white border border-[#EDE4D8] flex items-center justify-center text-[#B99A6B]">
                <HeartHandshake className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#2B211D] font-normal">
                3. Sensorial Mindfulness
              </h3>
              <p className="text-xs sm:text-sm text-[#2B211D]/75 font-light leading-relaxed">
                Skincare as meditation. Delicate natural scents of Bulgarian Damask rose, Roman chamomile, and warm amber designed to lower cortisol levels during your ritual.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Atelier Call to Action */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#2B211D] text-[#FAF7F2] rounded-2xl p-10 sm:p-16 border border-[#3D302A] shadow-xl space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B99A6B]">
            Begin The Journey
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-normal">
            Ready to Discover Your Sacred Ritual?
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF7F2]/75 font-light max-w-lg mx-auto leading-relaxed">
            Experience our formulations designed to nourish, hydrate, and reveal your skin&apos;s natural glow.
          </p>
          <div className="pt-2">
            <button
              onClick={() => setCurrentPage('collections')}
              className="px-8 py-3.5 bg-[#B99A6B] hover:bg-[#A08253] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium rounded shadow transition-all duration-300 inline-flex items-center gap-2"
            >
              <span>Explore The Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
