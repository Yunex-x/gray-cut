'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import ProcessToggleButtons from './ProcessToggleButtons';
interface ProcessStep {
  number: string;
  label: string;
  description: string;
  image: string;
}

interface DeliveryProcessProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  className?: string;
}

export default function DeliveryProcess({
  title = 'delivery process',
  subtitle = 'From order to wear, every step is carefully planned.',
  steps = [
    {
      number: '01',
      label: 'Order',
      description: 'Pick your shade. Packed instantly',
      image: '/products/delivery1.png'
    },
    {
      number: '02',
      label: 'Ship',
      description: 'Dispatched from Europe in 24h.',
      image: '/products/delivery2.png'
    },
    {
      number: '03',
      label: 'Wear',
      description: 'Receive in 3 days. Ready to install',
      image: '/products/delivery3.png'
    }
  ],
  className = ''
}: DeliveryProcessProps) {
  // mobile carousel drag state (used only by the mobile carousel)
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
    const walk = (x - startX) * 2;
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
      <div className="max-w-[1124px] mx-auto px-4 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20">
        <div className="w-full max-w-[1044px] mx-auto flex flex-col justify-center items-start gap-8 md:gap-12 lg:gap-14">
          <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6">
            <h2 className="w-full font-playfair font-normal text-[32px] md:text-[48px] lg:text-[64px] leading-[42px] md:leading-[64px] lg:leading-[85px] text-center tracking-[-0.02em] uppercase text-[#2C2D30]">
              {title}
            </h2>

            <p className="w-full font-poppins font-normal text-sm md:text-base leading-5 md:leading-6 text-center uppercase text-[rgba(44,45,48,0.7)]">
              {subtitle}
            </p>
          </div>
          <div className="w-full flex flex-col mx-auto items-center gap-8">
                    <ProcessToggleButtons />
            </div>
          {/* MOBILE carousel (md:hidden) */}
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
              <div key={step.number} className="flex-shrink-0 w-[85vw] snap-center border-l border-r border-[#E4DACC] pl-4 pr-4">
                <div className="flex flex-col items-start gap-6 p-4">
                  <div className="w-full flex flex-row items-center gap-3">
                    <span className="font-neue-montreal font-medium text-base leading-[19px] uppercase text-[rgba(42,42,42,0.5)]">
                      {step.number}
                    </span>
                    <div className="w-px h-4 bg-[#D2D2D2]" />
                    <span className="font-neue-montreal font-medium text-base leading-[19px] uppercase text-[rgba(42,42,42,0.5)]">
                      {step.label}
                    </span>
                  </div>

                  <h3 className="font-neue-montreal font-medium text-xl leading-6 uppercase text-[#2C2D30] mb-4">
                    {step.description}
                  </h3>

                  <div className="relative w-full h-[120px] bg-white overflow-hidden">
                    <Image src={step.image} alt={`${step.label} step`} fill className="object-cover" sizes="100vw" draggable={false} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP / MD+: 3-column layout */}
          <div className="hidden md:flex w-full flex-row items-stretch gap-0">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col items-start p-4 gap-6 flex-1 ${index === 1 ? '' : 'border-r border-l border-[#E4DACC]'}`}
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

                  <p className="w-full font-neue-montreal font-medium text-lg md:text-xl leading-6 uppercase text-[#2C2D30]">
                    {step.description}
                  </p>
                </div>

                <div className="relative w-full h-[166px] bg-white overflow-hidden">
                  <Image src={step.image} alt={`${step.label} step`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 348px" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}