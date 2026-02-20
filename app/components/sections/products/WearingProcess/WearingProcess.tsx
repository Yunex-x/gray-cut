'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';

interface ProcessStep {
  number: string;
  label: string;
  description: string;
  image: string;
}

interface WearingProcessProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  className?: string;
}

export default function WearingProcess({
  title = 'wearing process',
  subtitle = 'Wear it perfectly in under five minutes.',
  steps = [
    {
      number: '01',
      label: 'Prep',
      description: 'Clean your scalp. Apply adhesive or tape.',
      image: '/products/0.webp'
    },
    {
      number: '02',
      label: 'Place',
      description: 'Align the hairline. Position the system.',
      image: '/products/9.webp'
    },
    {
      number: '03',
      label: 'Secure',
      description: 'Press down, style, and go.',
      image: '/products/9.webp'
    }
  ],
  className = ''
}: WearingProcessProps) {
  // Shared drag/touch state used only by the mobile carousel
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handlePointerStart = (pageX: number) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handlePointerMove = (pageX: number) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseDown = (e: React.MouseEvent) => handlePointerStart(e.pageX);
  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    handlePointerMove(e.pageX);
  };
  const handleTouchStart = (e: React.TouchEvent) =>
    handlePointerStart(e.touches[0].pageX);
  const handleTouchMove = (e: React.TouchEvent) =>
    handlePointerMove(e.touches[0].pageX);
  const handleDragEnd = () => setIsDragging(false);

  return (
    <section className={`w-full bg-[#F6F4F1] ${className}`}>
      {/* Container: allow expansion at 2xl so this section fills the left column */}
      <div className="max-w-[1124px] 2xl:max-w-none 2xl:mx-0 mx-auto px-4 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20">
        {/* Header */}
        <div className="w-full mx-auto flex flex-col justify-end items-start gap-1 md:gap-2 mb-8 md:mb-12 lg:mb-14 2xl:mb-20">
          <h2 className="w-full font-playfair font-semibold text-[32px] md:text-[48px] lg:text-[64px] leading-[42px] md:leading-[64px] lg:leading-[85px] text-center tracking-[-0.02em] uppercase text-[#2C2D30] 2xl:text-[72px] 2xl:leading-[92px]">
            {title}
          </h2>

          <p className="w-full font-poppins font-normal text-sm md:text-base leading-5 md:leading-6 text-center uppercase text-[rgba(44,45,48,0.7)] px-4 2xl:text-[18px] 2xl:leading-7">
            {subtitle}
          </p>
        </div>

        {/* MOBILE: draggable carousel */}
        <div
          ref={scrollContainerRef}
          className={`
            md:hidden
            w-full
            flex flex-row
            overflow-x-auto
            snap-x snap-mandatory
            gap-4
            scrollbar-hide
            ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
          `}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleDragEnd}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className={`
                flex flex-col items-start p-4 gap-6
                flex-shrink-0
                w-[85vw]
                snap-center
                border-l border-r border-[#E4DACC]
              `}
            >
              <div className="w-full flex flex-col items-start gap-6">
                <div className="w-full flex flex-row items-center gap-3">
                  <span className="font-neue-montreal font-medium text-base leading-[19px] uppercase text-[rgba(42,42,42,0.5)]">
                    {step.number}
                  </span>
                  <div className="w-px h-4 bg-[#D2D2D2]" />
                  <span className="font-neue-montreal font-medium text-base leading-[19px] uppercase text-[rgba(42,42,42,0.5)]">
                    {step.label}
                  </span>
                </div>

                <p className="w-full font-neue-montreal font-medium text-lg md:text-xl leading-6 uppercase text-[#2C2D30]">
                  {step.description}
                </p>
              </div>

              <div className="relative w-full h-[166px] md:h-[240px] bg-[#F9F9F9] overflow-hidden rounded-md">
                <Image
                  src={step.image}
                  alt={`${step.label} step`}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="(max-width: 768px) 100vw, 348px"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP / MD+: three-column layout */}
        <div className="hidden md:flex w-full flex-row items-stretch gap-0 2xl:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col items-start p-6 gap-6 flex-1 ${index === 1 ? '' : 'border-r border-l border-[#E4DACC]'}`}
              style={{ boxSizing: 'border-box' }}
            >
              <div className="w-full flex flex-col items-start gap-6">
                <div className="w-full flex flex-row items-center gap-3">
                  <span className="font-neue-montreal font-medium text-base leading-[19px] uppercase text-[rgba(42,42,42,0.5)]">
                    {step.number}
                  </span>
                  <div className="w-px h-4 bg-[#D2D2D2]" />
                  <span className="font-neue-montreal font-medium text-base leading-[19px] uppercase text-[rgba(42,42,42,0.5)]">
                    {step.label}
                  </span>
                </div>

                <p className="w-full font-neue-montreal font-medium text-lg md:text-xl leading-6 uppercase text-[#2C2D30] 2xl:text-[20px]">
                  {step.description}
                </p>
              </div>

              <div className="relative w-full h-[240px] md:h-[300px] lg:h-[360px] 2xl:h-[480px] bg-[#F9F9F9] overflow-hidden rounded-md">
                <Image
                  src={step.image}
                  alt={`${step.label} step`}
                  fill
                  className="object-cover"
                  // On 2xl we expect the left column width is (100vw - aside), so request 1/3 of that for each column
                  sizes="(min-width:1536px) calc((100vw - 356px) / 3), (max-width: 768px) 100vw, 348px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}