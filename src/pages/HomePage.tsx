import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
  Droplet,
  Award,
  Leaf,
  CheckCircle2,
  Star
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { PageRoute } from '../types';

export const HomePage: React.FC = () => {
  const { setCurrentPage, addToast, navigateToCategory } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Best sellers: Glow Revival Serum ($39), Hydra Luxe Cream ($32), Vitamin C Radiance Serum ($45), Gentle Cloud Cleanser ($28)
  const bestSellers = PRODUCTS.slice(0, 4);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSubscribed(true);
    addToast('Welcome to LUMÉRA. Your 10% code: GLOW10');
  };

  const handleCategoryClick = (categoryName: string) => {
    if (categoryName === 'SERUMS') navigateToCategory('Serums');
    else if (categoryName === 'MOISTURIZERS') navigateToCategory('Moisturizers');
    else if (categoryName === 'BODY CARE') navigateToCategory('Body Care');
    else navigateToCategory('All');
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      {/* ----------------- 1. HERO SECTION ----------------- */}
      <section className="relative pt-6 sm:pt-10 lg:pt-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 z-10">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] font-medium text-[#B99A6B]">
              <span className="w-6 h-[1px] bg-[#B99A6B]" />
              <span>Timeless Botanical Skincare</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B211D] font-normal leading-[1.12] tracking-tight">
              Glow That Feels Like Luxury
            </h1>

            <p className="text-base sm:text-lg text-[#2B211D]/80 font-light max-w-lg leading-relaxed">
              Discover premium skincare crafted to nourish, hydrate, and reveal your natural glow with clean, intentional botanical actives.
            </p>

            {/* Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => setCurrentPage('shop')}
                className="px-8 py-3.5 bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium rounded shadow-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>SHOP COLLECTION</span>
                <ArrowRight className="w-4 h-4 text-[#B99A6B]" />
              </button>

              <button
                onClick={() => setCurrentPage('about')}
                className="px-8 py-3.5 bg-transparent hover:bg-[#EDE4D8]/50 text-[#2B211D] text-xs uppercase tracking-[0.2em] font-medium rounded border border-[#2B211D]/40 transition-all duration-200 text-center"
              >
                EXPLORE MORE
              </button>
            </div>

            {/* Trust Metrics Pill */}
            <div className="pt-4 border-t border-[#EDE4D8] flex items-center gap-6 text-xs text-[#2B211D]/70 font-light">
              <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 fill-[#B99A6B] text-[#B99A6B]" />
                <span className="font-semibold text-[#2B211D] tabular-nums">4.9/5</span>
                <span>Customer Rating</span>
              </div>
              <span>·</span>
              <div>
                <span>Dermatologist Approved</span>
              </div>
              <span className="hidden sm:inline">·</span>
              <div className="hidden sm:inline">
                <span>100% Vegan</span>
              </div>
            </div>
          </div>

          {/* Right Image Showcase Column */}
          <div className="lg:col-span-6 relative">
            {/* Background subtle glow aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#EDE4D8]/80 to-transparent rounded-2xl transform rotate-1 filter blur-xl opacity-70 pointer-events-none" />

            <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(43,33,29,0.12)] border border-[#EDE4D8] group">
              <img
                src="/src/assets/images/hero_skincare_luxury_1790447841859.jpg"
                alt="LUMÉRA Luxury Skincare Hero Presentation"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 2. FEATURE BAR ----------------- */}
      <section className="border-y border-[#EDE4D8] bg-white py-10 px-4 sm:px-6 lg:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#EDE4D8] flex items-center justify-center flex-shrink-0 text-[#B99A6B]">
              <Sparkles className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-medium text-[#2B211D]">
                Premium Ingredients
              </h3>
              <p className="text-xs text-[#2B211D]/70 font-light mt-1 leading-relaxed">
                Carefully selected ingredients for your daily skincare ritual.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#EDE4D8] flex items-center justify-center flex-shrink-0 text-[#B99A6B]">
              <Heart className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-medium text-[#2B211D]">
                Cruelty Free
              </h3>
              <p className="text-xs text-[#2B211D]/70 font-light mt-1 leading-relaxed">
                Thoughtfully created with care and respect for all life.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#EDE4D8] flex items-center justify-center flex-shrink-0 text-[#B99A6B]">
              <Truck className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-medium text-[#2B211D]">
                Free Shipping
              </h3>
              <p className="text-xs text-[#2B211D]/70 font-light mt-1 leading-relaxed">
                Complimentary shipping on orders over $50 worldwide.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF7F2] border border-[#EDE4D8] flex items-center justify-center flex-shrink-0 text-[#B99A6B]">
              <ShieldCheck className="w-5 h-5 stroke-[1.5]" />
            </div>
            <div>
              <h3 className="font-serif text-base font-medium text-[#2B211D]">
                Secure Checkout
              </h3>
              <p className="text-xs text-[#2B211D]/70 font-light mt-1 leading-relaxed">
                Safe and secure shopping experience with encrypted data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 3. BEST SELLERS ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] font-medium text-[#B99A6B]">
              Curated Favorites
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211D] font-normal mt-1">
              Our Best Sellers
            </h2>
            <p className="text-sm text-[#2B211D]/70 font-light mt-1">
              Discover the products our customers love most.
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('shop')}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#2B211D] hover:text-[#B99A6B] transition-colors group self-start sm:self-auto"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ----------------- 5. SHOP BY CATEGORY ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.22em] font-medium text-[#B99A6B]">
            Bespoke Regimens
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211D] font-normal mt-1">
            Shop by Ritual
          </h2>
          <p className="text-sm text-[#2B211D]/70 font-light mt-2">
            Targeted solutions curated for each step of your daily care.
          </p>
        </div>

        {/* 4 Large Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'SKINCARE',
              subtitle: 'Full Collection',
              image: '/src/assets/images/hero_skincare_luxury_1790447841859.jpg',
              desc: 'Harmonious botanical balance for all skin types.'
            },
            {
              title: 'SERUMS',
              subtitle: 'High Potency Elixirs',
              image: '/src/assets/images/product_glow_serum_1790447908069.jpg',
              desc: 'Deep cellular hydration and luminous radiance.'
            },
            {
              title: 'MOISTURIZERS',
              subtitle: 'Barrier Creams & Balms',
              image: '/src/assets/images/product_hydra_cream_1790447921145.jpg',
              desc: 'Whipped ceramides that lock in moisture.'
            },
            {
              title: 'BODY CARE',
              subtitle: 'Botanical Elixirs',
              image: '/src/assets/images/product_body_oil_1790447946910.jpg',
              desc: 'All-over satin oils with delicate jasmine aura.'
            }
          ].map((cat, idx) => (
            <div
              key={idx}
              onClick={() => handleCategoryClick(cat.title)}
              className="group cursor-pointer relative rounded-xl overflow-hidden bg-white border border-[#EDE4D8] shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-[380px]"
            >
              <div className="relative h-[65%] w-full overflow-hidden bg-[#FAF7F2]">
                <img
                  src={cat.image}
                  alt={cat.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B211D]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between bg-white">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-[#B99A6B]">
                    {cat.subtitle}
                  </span>
                  <h3 className="font-serif text-xl text-[#2B211D] font-medium mt-0.5 group-hover:text-[#B99A6B] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#2B211D]/60 font-light mt-1 line-clamp-1">
                    {cat.desc}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#2B211D] group-hover:text-[#B99A6B] transition-colors pt-2">
                  <span>Explore</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ----------------- 6. WHY CHOOSE LUMÉRA ----------------- */}
      <section className="bg-white py-20 border-y border-[#EDE4D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.22em] font-medium text-[#B99A6B]">
              The LUMÉRA Ethos
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211D] font-normal mt-1">
              Beauty, Simplified.
            </h2>
            <p className="text-sm text-[#2B211D]/70 font-light mt-2">
              Every drop is deliberate, cruelty-free, and crafted to honour your skin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-xl bg-[#FAF7F2] border border-[#EDE4D8] text-center space-y-4 hover:border-[#B99A6B]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-white border border-[#EDE4D8] flex items-center justify-center mx-auto text-[#B99A6B] shadow-xs">
                <Leaf className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#2B211D] font-normal">
                Clean Ingredients
              </h3>
              <p className="text-xs sm:text-sm text-[#2B211D]/75 font-light leading-relaxed">
                Thoughtfully selected ingredients for healthy-looking skin. Free from sulfates, synthetic fragrances, parabens, and microplastics.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-xl bg-[#FAF7F2] border border-[#EDE4D8] text-center space-y-4 hover:border-[#B99A6B]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-white border border-[#EDE4D8] flex items-center justify-center mx-auto text-[#B99A6B] shadow-xs">
                <Award className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#2B211D] font-normal">
                Visible Results
              </h3>
              <p className="text-xs sm:text-sm text-[#2B211D]/75 font-light leading-relaxed">
                Effective formulas designed for your everyday routine. Verified through clinical hydration testing to deliver skin you love waking up in.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-xl bg-[#FAF7F2] border border-[#EDE4D8] text-center space-y-4 hover:border-[#B99A6B]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-white border border-[#EDE4D8] flex items-center justify-center mx-auto text-[#B99A6B] shadow-xs">
                <Droplet className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h3 className="font-serif text-2xl text-[#2B211D] font-normal">
                Made With Care
              </h3>
              <p className="text-xs sm:text-sm text-[#2B211D]/75 font-light leading-relaxed">
                Beautiful skincare created with intention. Small-batch produced in recyclable frosted glass to preserve ingredient freshness and vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 7. BEFORE & AFTER SECTION ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs uppercase tracking-[0.24em] font-medium text-[#B99A6B]">
            Clinical Transformation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211D] font-normal mt-1">
            See The Glow
          </h2>
          <p className="text-sm text-[#2B211D]/70 font-light mt-2">
            Witness the visible difference 21 days of our Glow Revival ritual creates on skin clarity, tone, and hydration.
          </p>
        </div>

        {/* Draggable Slider Component */}
        <BeforeAfterSlider />
      </section>

      {/* ----------------- 8. CUSTOMER REVIEWS ----------------- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.22em] font-medium text-[#B99A6B]">
            Real Rituals, Real Results
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#2B211D] font-normal mt-1">
            Loved by Our Customers
          </h2>
          <p className="text-sm text-[#2B211D]/70 font-light mt-2">
            Read authentic experiences from women around the globe who made LUMÉRA their holy grail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Review 1 */}
          <div className="p-8 rounded-xl bg-white border border-[#EDE4D8] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex text-[#B99A6B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <h4 className="font-serif text-lg text-[#2B211D] font-medium">
                &ldquo;The glass-skin holy grail.&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-[#2B211D]/75 font-light leading-relaxed">
                I have tested countless luxury serums, but LUMÉRA is unmatched. It absorbs seamlessly without tackiness and gives that luminous, lit-from-within glow even on four hours of sleep.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#EDE4D8]">
              <div className="w-10 h-10 rounded-full bg-[#EDE4D8] overflow-hidden flex items-center justify-center text-sm font-serif font-semibold text-[#2B211D]">
                EV
              </div>
              <div>
                <p className="text-xs font-semibold text-[#2B211D]">Evelyn Vance</p>
                <p className="text-[11px] text-[#B99A6B] font-medium">Verified Customer · New York</p>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="p-8 rounded-xl bg-white border border-[#EDE4D8] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex text-[#B99A6B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <h4 className="font-serif text-lg text-[#2B211D] font-medium">
                &ldquo;Gentle on my reactive skin.&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-[#2B211D]/75 font-light leading-relaxed">
                Most active serums cause stinging and redness. The Gentle Cloud Cleanser and Hydra Luxe Cream repaired my moisture barrier in just two weeks. Truly holy grail products.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#EDE4D8]">
              <div className="w-10 h-10 rounded-full bg-[#EDE4D8] overflow-hidden flex items-center justify-center text-sm font-serif font-semibold text-[#2B211D]">
                CL
              </div>
              <div>
                <p className="text-xs font-semibold text-[#2B211D]">Camille Laurent</p>
                <p className="text-[11px] text-[#B99A6B] font-medium">Verified Customer · Paris</p>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="p-8 rounded-xl bg-white border border-[#EDE4D8] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex text-[#B99A6B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <h4 className="font-serif text-lg text-[#2B211D] font-medium">
                &ldquo;Like a five-star hotel spa.&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-[#2B211D]/75 font-light leading-relaxed">
                The packaging, the dropper weight, the delicate botanical aroma—everything feels like a $200 French boutique treatment. My morning routine is now my favorite part of the day.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-[#EDE4D8]">
              <div className="w-10 h-10 rounded-full bg-[#EDE4D8] overflow-hidden flex items-center justify-center text-sm font-serif font-semibold text-[#2B211D]">
                SS
              </div>
              <div>
                <p className="text-xs font-semibold text-[#2B211D]">Sophia Sterling</p>
                <p className="text-[11px] text-[#B99A6B] font-medium">Verified Customer · London</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ----------------- 10. NEWSLETTER SECTION ----------------- */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#2B211D] text-[#FAF7F2] rounded-2xl p-8 sm:p-14 text-center border border-[#3D302A] shadow-xl relative overflow-hidden">
          {/* Subtle gold decoration aura */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B99A6B]/10 rounded-full filter blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#B99A6B]">
              Join The Circle
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF7F2] font-normal">
              Your Glow Starts Here.
            </h2>
            <p className="text-xs sm:text-sm text-[#FAF7F2]/75 font-light leading-relaxed">
              Join our beauty community and receive 10% off your first order, plus private invitations to seasonal formulation previews.
            </p>

            {newsletterSubscribed ? (
              <div className="pt-4 bg-white/10 p-4 rounded-lg border border-white/20 inline-block text-left text-xs space-y-1">
                <p className="text-[#B99A6B] font-semibold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Welcome to the LUMÉRA Atelier</span>
                </p>
                <p className="text-[#FAF7F2]/80">
                  Your complimentary 10% privilege code is: <span className="font-mono font-bold text-white bg-[#B99A6B]/30 px-1.5 py-0.5 rounded">GLOW10</span>
                </p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-3 bg-[#FAF7F2] text-[#2B211D] rounded text-xs placeholder-[#2B211D]/40 focus:outline-none focus:ring-1 focus:ring-[#B99A6B]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#B99A6B] hover:bg-[#A08253] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium rounded transition-colors"
                >
                  SUBSCRIBE
                </button>
              </form>
            )}

            <p className="text-[11px] text-[#FAF7F2]/40 font-light pt-2">
              Unsubscribe anytime. We honour your inbox privacy.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
