'use client';

import Image from 'next/image';
import { useRef, useState, useEffect } from 'react';

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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className={`w-full bg-[#F6F4F1] ${className}`}>
      <div className=" mx-auto px-4 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20">
        {/* Frame 509 - Main Container */}
        <div className="w-full  mx-auto flex flex-col items-start gap-8 md:gap-12 lg:gap-14">

          {/* Frame 503 - Header */}
          <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6">
            {/* Title */}
            <h2
              className="w-full font-playfair font-normal text-[32px] md:text-[48px] lg:text-[64px] leading-[42px] md:leading-[64px] lg:leading-[85px] text-center tracking-[-0.02em] uppercase text-[#2C2D30]"
              style={{
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0
              }}
            >
              {title}
            </h2>

            {/* Subtitle */}
            <p
              className="w-full font-poppins font-normal text-sm md:text-base leading-5 md:leading-6 text-center uppercase text-[rgba(44,45,48,0.7)]"
              style={{
                flex: 'none',
                order: 1,
                alignSelf: 'stretch',
                flexGrow: 0
              }}
            >
              {subtitle}
            </p>
          </div>

          {/* Frame 508 - Steps Container */}
          <div 
            ref={scrollContainerRef}
            className={`
              w-full 
              flex flex-row 
              overflow-x-auto 
              md:overflow-x-visible
              snap-x snap-mandatory
              md:snap-none
              gap-4 md:gap-0
              scrollbar-hide
              ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
              md:cursor-default
            `}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleDragEnd}
            style={{
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`
                  flex flex-col items-start p-4 gap-6 
                  flex-shrink-0 
                  w-[85vw] md:w-auto md:flex-1
                  snap-center
                  ${index === 1
                    ? ''
                    : 'border-r border-l border-[#E4DACC] md:border-l-0 md:border-r md:first:border-l md:last:border-r'
                  }
                `}
                style={{
                  boxSizing: 'border-box',
                  flex: 'none',
                  order: index,
                  flexGrow: 1
                }}
              >
                {/* Frame 408 - Text Content */}
                <div className="w-full flex flex-col items-start gap-6">
                  {/* Frame 206 - Number and Label */}
                  <div className="w-full flex flex-row items-center gap-3">
                    {/* Number */}
                    <span
                      className="font-neue-montreal font-medium text-base leading-[19px] uppercase text-[rgba(42,42,42,0.5)]"
                      style={{
                        flex: 'none',
                        order: 0,
                        flexGrow: 0
                      }}
                    >
                      {step.number}
                    </span>

                    {/* Divider */}
                    <div
                      className="w-px h-4 bg-[#D2D2D2]"
                      style={{
                        flex: 'none',
                        order: 1,
                        flexGrow: 0
                      }}
                    />

                    {/* Label */}
                    <span
                      className="font-neue-montreal font-medium text-base leading-[19px] uppercase text-[rgba(42,42,42,0.5)]"
                      style={{
                        flex: 'none',
                        order: 2,
                        flexGrow: 0
                      }}
                    >
                      {step.label}
                    </span>
                  </div>

                  {/* Description */}
                  <p
                    className="w-full font-neue-montreal font-medium text-lg md:text-xl leading-6 uppercase text-[#2C2D30]"
                    style={{
                      flex: 'none',
                      order: 1,
                      alignSelf: 'stretch',
                      flexGrow: 0
                    }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Frame 505 - Image Container */}
                <div
                  className="relative w-full h-[166px] bg-[#F9F9F9] overflow-hidden"
                  style={{
                    flex: 'none',
                    order: 1,
                    alignSelf: 'stretch',
                    flexGrow: 0
                  }}
                >
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
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}