import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const ContactPage: React.FC = () => {
  const { addToast } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    addToast('Message received. An atelier specialist will reply within 24 hours.');
  };

  const faqs = [
    {
      q: 'How long does shipping take?',
      a: 'We process all orders within 24 business hours from our temperature-controlled ateliers. Domestic US and EU orders arrive within 2–4 business days via complimentary white-glove signature courier.'
    },
    {
      q: 'Are LUMÉRA formulas suitable for reactive or rosacea-prone skin?',
      a: 'Yes. All formulas are dermatologically tested, non-comedogenic, and created without synthetic fragrance, essential oil irritants, or harsh drying alcohols. We recommend patch testing on the inner forearm prior to full application.'
    },
    {
      q: 'What is the shelf life of your botanical serums?',
      a: 'Because we use amber ultraviolet-protective glass packaging, unopened products maintain full antioxidant potency for 24 months. Once opened, we recommend savoring within 6 months.'
    },
    {
      q: 'What is your returns and ritual satisfaction guarantee?',
      a: 'We offer a 30-day ritual satisfaction guarantee. If a formulation is not suited to your skin type, contact our concierge for a complimentary return label or tailored product exchange.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.26em] font-medium text-[#B99A6B]">
          Concierge & Customer Care
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl text-[#2B211D] font-normal">
          Let’s Connect.
        </h1>
        <p className="text-sm text-[#2B211D]/75 font-light leading-relaxed">
          Whether you desire a personalized skincare consultation, order assistance, or atelier press inquiries, our team is here to assist.
        </p>
      </div>

      {/* Main Grid: Form + Atelier Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-xl border border-[#EDE4D8] shadow-sm">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-[#2B211D]">Message Dispatched</h3>
              <p className="text-xs text-[#2B211D]/70 font-light max-w-md mx-auto">
                Thank you, {formData.name}. Your inquiry has been sent directly to our Beverly Hills and Paris concierge desks. We will respond to {formData.email} promptly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="mt-4 px-6 py-2.5 bg-[#FAF7F2] text-[#2B211D] text-xs uppercase tracking-wider font-medium rounded border border-[#EDE4D8] hover:bg-[#EDE4D8] transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#2B211D]/80 mb-1 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Eleanor Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[#2B211D]/80 mb-1 font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#2B211D]/80 mb-1 font-medium">Subject</label>
                <input
                  type="text"
                  placeholder="Skincare Consultation / Order Inquiry"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[#2B211D]/80 mb-1 font-medium">Your Message *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="How may our skin specialists assist your ritual today?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FAF7F2] border border-[#EDE4D8] rounded text-[#2B211D] focus:border-[#B99A6B] focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#2B211D] hover:bg-[#3D302A] text-[#FAF7F2] text-xs uppercase tracking-[0.2em] font-medium rounded shadow transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <Send className="w-3.5 h-3.5 text-[#B99A6B]" />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Atelier Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-[#FAF7F2] p-6 sm:p-8 rounded-xl border border-[#EDE4D8] space-y-6">
            <h3 className="font-serif text-2xl text-[#2B211D]">The Atelier Offices</h3>

            <div className="space-y-4 text-xs text-[#2B211D]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B99A6B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#2B211D] block">Beverly Hills Atelier</span>
                  <span className="font-light">342 Rodeo Drive, Beverly Hills, CA 90210</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B99A6B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#2B211D] block">Paris Laboratory</span>
                  <span className="font-light">18 Rue de la Paix, 75002 Paris, France</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#B99A6B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#2B211D] block">Direct Electronic Mail</span>
                  <a href="mailto:concierge@lumera-beauty.com" className="font-light hover:text-[#B99A6B]">
                    concierge@lumera-beauty.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B99A6B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#2B211D] block">Concierge Telephone</span>
                  <span className="font-light">+1 (800) 586-3721 (US) · +33 1 42 68 00 00 (EU)</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B99A6B] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#2B211D] block">Business Hours</span>
                  <span className="font-light">Monday through Saturday: 10:00 AM – 7:00 PM PST</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Accordion Section */}
      <div className="pt-10 max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase tracking-[0.24em] font-medium text-[#B99A6B]">
            Questions Answered
          </span>
          <h2 className="font-serif text-3xl text-[#2B211D]">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-[#EDE4D8] overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between text-xs sm:text-sm font-medium text-[#2B211D] hover:text-[#B99A6B] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#B99A6B] transition-transform duration-300 ${
                    openFaq === idx ? 'transform rotate-180' : ''
                  }`}
                />
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs text-[#2B211D]/75 font-light leading-relaxed border-t border-[#EDE4D8]/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
