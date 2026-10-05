import React, { useState } from 'react';
import {
  Star,
  ShoppingBag,
  Check,
  Truck,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  Droplet,
  ChevronRight,
  ArrowRight
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';

interface ProductDetailPageProps {
  onOpenCheckout?: () => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ onOpenCheckout }) => {
  const {
    selectedProductId,
    addToCart,
    setCurrentPage,
    setIsCartOpen,
    addToast
  } = useCart();

  const product = PRODUCTS.find((p) => p.id === selectedProductId) || PRODUCTS[0];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'benefits' | 'ingredients' | 'howToUse' | 'reviews'>('benefits');
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [addedEffect, setAddedEffect] = useState(false);

  // Review modal state
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewAuthor, setReviewAuthor] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewComment, setReviewComment] = useState('');

  // Related products from the same category or bestsellers
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedEffect(true);
    setTimeout(() => setAddedEffect(false), 1200);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    if (onOpenCheckout) {
      onOpenCheckout();
    } else {
      setIsCartOpen(true);
    }
  };

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewAuthor.trim() || !reviewComment.trim()) return;

    product.reviews.unshift({
      id: `rev-${Date.now()}`,
      author: reviewAuthor,
      rating: reviewRating,
      date: 'Just now',
      title: reviewTitle || 'My LUMÉRA experience',
      comment: reviewComment,
      verified: true
    });
    product.reviewCount += 1;

    setShowReviewModal(false);
    setReviewAuthor('');
    setReviewTitle('');
    setReviewComment('');
    addToast('Thank you! Your verified review has been published.');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-[#2B211D]/60 uppercase tracking-widest font-light">
        <button
          onClick={() => setCurrentPage('home')}
          className="hover:text-[#B99A6B] transition-colors"
        >
          Home
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-[#B99A6B]" />
        <button
          onClick={() => setCurrentPage('shop')}
          className="hover:text-[#B99A6B] transition-colors"
        >
          {product.category}
        </button>
        <ChevronRight className="w-3.5 h-3.5 text-[#B99A6B]" />
        <span className="text-[#2B211D] font-medium truncate max-w-[200px] sm:max-w-none">
          {product.name}
        </span>
      </nav>

      {/* Main Product Stage: 2-Column Contiguous Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Hero Viewer */}
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-white border border-[#EDE4D8] shadow-sm">
            <img
              src={activeImage}
              alt={product.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Thumbnails row */}
          <div className="flex items-center gap-3">
            {[product.image, product.secondaryImage, '/src/assets/images/skincare_texture_glow_1790447867992.jpg']
              .filter(Boolean)
              .map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(img as string)}
                  className={`w-20 h-20 rounded-md overflow-hidden bg-[#FAF7F2] border-2 transition-all ${
                    activeImage === img ? 'border-[#B99A6B] scale-102 shadow-xs' : 'border-[#EDE4D8] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img as string}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
          </div>
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Category & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.22em] font-medium text-[#B99A6B]">
                {product.category} · {product.volume}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-[#2B211D]">
                <div className="flex text-[#B99A6B]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating) ? 'fill-current' : 'stroke-current fill-none'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold tabular-nums">{product.rating}</span>
                <span className="text-[#2B211D]/50 font-light">({product.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Product Name */}
            <h1 className="font-serif text-3xl sm:text-4xl text-[#2B211D] font-normal leading-tight">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-2xl sm:text-3xl font-semibold text-[#2B211D] tabular-nums">
                ${product.price}.00
              </span>
              <span className="text-xs text-[#2B211D]/60 font-light">
                Tax included · Free shipping over $50
              </span>
            </div>

            {/* Full description */}
            <p className="text-xs sm:text-sm text-[#2B211D]/80 font-light leading-relaxed pt-2">
              {product.fullDescription}
            </p>

            {/* Texture & Skin Type quick specs */}
            <div className="p-4 bg-white rounded-lg border border-[#EDE4D8] space-y-2 text-xs">
              <div className="flex items-start gap-2">
                <span className="font-medium text-[#2B211D] min-w-[70px]">Texture:</span>
                <span className="text-[#2B211D]/70 font-light">{product.texture}</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="font-medium text-[#2B211D] min-w-[70px]">Ideal For:</span>
                <span className="text-[#2B211D]/70 font-light">{product.skinType}</span>
              </div>
            </div>

            {/* Quantity Selector & Action CTAs */}
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-[#2B211D]/70 font-medium">
                  Quantity:
                </span>
                <div className="flex items-center border border-[#EDE4D8] rounded bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-xs hover:text-[#B99A6B] text-[#2B211D] transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center text-xs font-semibold tabular-nums text-[#2B211D]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-xs hover:text-[#B99A6B] text-[#2B211D] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart & Buy Now */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className={`py-3.5 px-6 rounded text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-all ${
                    addedEffect
                      ? 'bg-[#B99A6B] text-white'
                      : 'bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2]'
                  }`}
                >
                  {addedEffect ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Ritual</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4 text-[#B99A6B]" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>

                <button
                  onClick={handleBuyNow}
                  className="py-3.5 px-6 rounded text-xs uppercase tracking-[0.2em] font-medium bg-[#B99A6B] hover:bg-[#A08253] text-[#FAF7F2] transition-colors flex items-center justify-center gap-2"
                >
                  <span>Buy Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Trust Assurances */}
            <div className="pt-4 grid grid-cols-3 gap-2 border-t border-[#EDE4D8] text-[11px] text-[#2B211D]/70 text-center">
              <div className="flex flex-col items-center gap-1">
                <Truck className="w-4 h-4 text-[#B99A6B]" />
                <span>Complimentary Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-[#B99A6B]" />
                <span>Dermatologically Safe</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <RotateCcw className="w-4 h-4 text-[#B99A6B]" />
                <span>30-Day Ritual Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs: Benefits, Ingredients, How to Use, Customer Reviews */}
      <div className="bg-white rounded-xl border border-[#EDE4D8] p-6 sm:p-10 shadow-xs">
        {/* Tab Headers */}
        <div className="flex items-center gap-4 sm:gap-8 border-b border-[#EDE4D8] pb-4 overflow-x-auto scrollbar-none">
          {[
            { id: 'benefits', label: 'Key Benefits' },
            { id: 'ingredients', label: 'Full Ingredients' },
            { id: 'howToUse', label: 'How to Use' },
            { id: 'reviews', label: `Reviews (${product.reviews.length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`text-xs uppercase tracking-[0.18em] font-medium py-1 transition-colors relative whitespace-nowrap ${
                activeTab === tab.id ? 'text-[#B99A6B] font-semibold' : 'text-[#2B211D]/60 hover:text-[#2B211D]'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-[#B99A6B]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="pt-8">
          {activeTab === 'benefits' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-[#FAF7F2] rounded-lg border border-[#EDE4D8]">
                  <Sparkles className="w-4 h-4 text-[#B99A6B] flex-shrink-0 mt-0.5" />
                  <span className="text-xs text-[#2B211D]/80 leading-relaxed font-light">{b}</span>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div className="space-y-4">
              <p className="text-xs text-[#2B211D]/70 font-light">
                Formulated at our atelier with clean, high-efficacy botanicals. Completely free of parabens, phthalates, synthetic colorants, and mineral oils.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {product.ingredients.map((ing, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 bg-[#FAF7F2] rounded border border-[#EDE4D8] text-xs text-[#2B211D]/80">
                    <Droplet className="w-3.5 h-3.5 text-[#B99A6B]" />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'howToUse' && (
            <div className="space-y-4 max-w-2xl">
              <h4 className="font-serif text-lg text-[#2B211D]">The Recommended Ritual</h4>
              <p className="text-xs sm:text-sm text-[#2B211D]/80 font-light leading-relaxed">
                {product.howToUse}
              </p>
              <div className="p-4 bg-[#FAF7F2] rounded-lg border border-[#EDE4D8] text-xs text-[#2B211D]/70 space-y-1">
                <span className="font-medium text-[#2B211D]">Atelier Tip:</span>
                <p className="font-light">
                  Pair with our Gentle Cloud Cleanser for a harmonious double-cleanse and skin prepping ritual.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-[#EDE4D8]">
                <div>
                  <h4 className="font-serif text-xl text-[#2B211D]">Verified Customer Feedback</h4>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-[#B99A6B]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-[#2B211D] font-semibold">{product.rating} out of 5 stars</span>
                  </div>
                </div>

                <button
                  onClick={() => setShowReviewModal(true)}
                  className="px-5 py-2.5 bg-[#2B211D] text-[#FAF7F2] text-xs uppercase tracking-wider font-medium rounded hover:bg-[#3D302A] transition-colors"
                >
                  Write a Review
                </button>
              </div>

              {/* Reviews List */}
              <div className="space-y-6">
                {product.reviews.map((rev) => (
                  <div key={rev.id} className="p-4 rounded-lg bg-[#FAF7F2] border border-[#EDE4D8] space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-[#2B211D]">{rev.author}</span>
                        {rev.verified && (
                          <span className="text-[10px] text-emerald-800 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                            Verified Buyer
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-[#2B211D]/40 font-light">{rev.date}</span>
                    </div>

                    <div className="flex text-[#B99A6B]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>

                    <h5 className="font-serif text-base text-[#2B211D] font-medium">{rev.title}</h5>
                    <p className="text-xs text-[#2B211D]/80 font-light leading-relaxed">{rev.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products Carousel / Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#B99A6B]">
              Complete Your Ritual
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#2B211D] font-normal">
              Complementary Formulas
            </h3>
          </div>
          <button
            onClick={() => setCurrentPage('shop')}
            className="text-xs uppercase tracking-wider font-semibold text-[#2B211D] hover:text-[#B99A6B] flex items-center gap-1"
          >
            <span>View All</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#2B211D]/60 backdrop-blur-sm"
            onClick={() => setShowReviewModal(false)}
          />
          <div className="relative bg-[#FAF7F2] rounded-xl max-w-lg w-full p-6 border border-[#EDE4D8] shadow-2xl z-10 space-y-4">
            <h3 className="font-serif text-2xl text-[#2B211D]">Write a Review for {product.name}</h3>
            <form onSubmit={handleReviewSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#2B211D]/70 mb-1">Your Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setReviewRating(star)}
                      className="p-1"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= reviewRating ? 'fill-[#B99A6B] text-[#B99A6B]' : 'text-stone-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[#2B211D]/70 mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Victoria L."
                  value={reviewAuthor}
                  onChange={(e) => setReviewAuthor(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#2B211D]/70 mb-1">Headline</label>
                <input
                  type="text"
                  placeholder="e.g. Pure luxury in a bottle"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#2B211D]/70 mb-1">Your Review</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about the texture, fragrance, and skin changes you observed..."
                  value={reviewComment}
                  onChange={(e) => setReviewComment(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowReviewModal(false)}
                  className="px-4 py-2 border border-[#EDE4D8] rounded text-[#2B211D] hover:bg-[#EDE4D8]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#2B211D] text-white rounded hover:bg-[#3D302A]"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
