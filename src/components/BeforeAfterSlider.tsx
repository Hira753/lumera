import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage = '/src/assets/images/about_botanical_craft_1790447881053.jpg',
  afterImage = '/src/assets/images/promo_lifestyle_skincare_1790447855919.jpg',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    handleMove(e.clientX);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Slider Visual Container */}
      <div
        ref={containerRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={(e) => isDragging && handleMove(e.clientX)}
        onTouchMove={handleTouchMove}
        onMouseMove={handleMouseMove}
        className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] overflow-hidden rounded-xl cursor-ew-resize select-none border border-[#EDE4D8] shadow-[0_16px_40px_rgba(43,33,29,0.08)] bg-[#2B211D]"
      >
        {/* AFTER Image (Full container underneath) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={afterImage}
            alt="After LUMÉRA Ritual - Radiant Glowing Skin"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          {/* AFTER Label */}
          <div className="absolute top-4 right-4 bg-[#2B211D]/80 backdrop-blur-md text-[#FAF7F2] text-[11px] uppercase tracking-[0.25em] font-medium py-1 px-3 rounded border border-white/20 shadow-sm flex items-center gap-1.5 pointer-events-none">
            <Sparkles className="w-3 h-3 text-[#B99A6B]" />
            <span>AFTER (Day 21)</span>
          </div>
        </div>

        {/* BEFORE Image (Clipped overlay on top) */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full">
            <img
              src={beforeImage}
              alt="Before LUMÉRA - Natural Untreated Skin"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center filter grayscale-[30%] brightness-90 contrast-95"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                maxWidth: 'none'
              }}
            />
            {/* BEFORE Label */}
            <div className="absolute top-4 left-4 bg-[#FAF7F2]/90 backdrop-blur-md text-[#2B211D] text-[11px] uppercase tracking-[0.25em] font-medium py-1 px-3 rounded border border-[#EDE4D8] shadow-sm pointer-events-none">
              <span>BEFORE</span>
            </div>
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Center Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#FAF7F2] border-2 border-[#B99A6B] text-[#2B211D] flex items-center justify-center shadow-lg transition-transform active:scale-95">
            <MoveHorizontal className="w-5 h-5 text-[#B99A6B]" />
          </div>
        </div>

        {/* Bottom helper prompt */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-[#2B211D]/80 backdrop-blur-sm px-3.5 py-1 rounded-full text-[11px] tracking-[0.15em] text-[#FAF7F2]/90 pointer-events-none font-light uppercase flex items-center gap-1.5 border border-white/10">
          <span>Drag to compare results</span>
        </div>
      </div>

      {/* Clinical Proof Statistics Below Slider */}
      <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6 text-center">
        <div className="bg-white p-4 rounded-lg border border-[#EDE4D8]">
          <p className="font-serif text-2xl sm:text-3xl text-[#2B211D] font-medium tabular-nums">
            +94%
          </p>
          <p className="text-xs uppercase tracking-[0.14em] text-[#B99A6B] font-medium mt-1">
            Skin Hydration
          </p>
          <p className="text-[11px] text-[#2B211D]/60 mt-0.5">
            Measured via corneometer after 14 days
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-[#EDE4D8]">
          <p className="font-serif text-2xl sm:text-3xl text-[#2B211D] font-medium tabular-nums">
            -42%
          </p>
          <p className="text-xs uppercase tracking-[0.14em] text-[#B99A6B] font-medium mt-1">
            Redness & Flaking
          </p>
          <p className="text-[11px] text-[#2B211D]/60 mt-0.5">
            Independent clinical evaluation of 60 subjects
          </p>
        </div>

        <div className="bg-white p-4 rounded-lg border border-[#EDE4D8]">
          <p className="font-serif text-2xl sm:text-3xl text-[#2B211D] font-medium tabular-nums">
            98%
          </p>
          <p className="text-xs uppercase tracking-[0.14em] text-[#B99A6B] font-medium mt-1">
            Luminous Clarity
          </p>
          <p className="text-[11px] text-[#2B211D]/60 mt-0.5">
            Agreed skin feels visibly more radiant
          </p>
        </div>
      </div>
    </div>
  );
};
