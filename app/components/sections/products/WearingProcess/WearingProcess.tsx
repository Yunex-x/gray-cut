'use client';

import { WEARING_PROCESS_STEPS } from '@/app/constants/wearingProcess';
import { useHorizontalDrag } from '@/app/hooks/useHorizontalDrag';
import { ProcessProps } from '@/app/types/process';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function WearingProcess({
  steps = WEARING_PROCESS_STEPS,
}: ProcessProps) {
  const {
    scrollContainerRef,
    isDragging,
    handlePointerStart,
    handlePointerMove,
    handleDragEnd,
  } = useHorizontalDrag();

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const slideWidth =
        container.firstElementChild?.clientWidth || 1;
      const index = Math.round(container.scrollLeft / slideWidth);
      setActiveIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [scrollContainerRef]);

  return (
    <section className="w-full bg-[#F6F4F1]">
      <div className="max-w-[1124px] 2xl:max-w-none 2xl:mx-0 mx-auto px-4 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20">

        {/* Header */}
        <div className="w-full flex flex-col gap-1 md:gap-2 mb-8 md:mb-12 lg:mb-14 2xl:mb-20">
          <h2 className="w-full font-playfair font-semibold text-[32px] md:text-[48px] lg:text-[64px] leading-[42px] md:leading-[64px] lg:leading-[85px] text-center uppercase text-[#2C2D30] 2xl:text-[72px] 2xl:leading-[92px]">
            wearing process
          </h2>

          <p className="w-full font-poppins text-sm md:text-base leading-5 md:leading-6 text-center uppercase text-[rgba(44,45,48,0.7)] px-4 2xl:text-[18px] 2xl:leading-7">
            wear it perfectly in under five minutes.
          </p>
        </div>

        {/* MOBILE */}
        <div
          ref={scrollContainerRef}
          className={`
            md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4
            scrollbar-hide
            ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}
          `}
          onMouseDown={(e) => handlePointerStart(e.pageX)}
          onMouseMove={(e) => {
            e.preventDefault();
            handlePointerMove(e.pageX);
          }}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
          onTouchStart={(e) => handlePointerStart(e.touches[0].pageX)}
          onTouchMove={(e) => handlePointerMove(e.touches[0].pageX)}
          onTouchEnd={handleDragEnd}
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col flex-shrink-0 w-[85vw] snap-center p-4 gap-6 border-x border-[#E4DACC]"
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-neue-montreal text-base uppercase text-[rgba(42,42,42,0.5)]">
                    {step.number}
                  </span>
                  <div className="w-px h-4 bg-[#D2D2D2]" />
                  <span className="font-neue-montreal text-base uppercase text-[rgba(42,42,42,0.5)]">
                    {step.label}
                  </span>
                </div>

                <p className="font-neue-montreal text-lg uppercase text-[#2C2D30]">
                  {step.description}
                </p>
              </div>

              <div className="relative w-full h-[166px] bg-[#F9F9F9] overflow-hidden rounded-md">
                {step.image ? (
                  <Image
                    src={step.image}
                    alt={`${step.label} step`}
                    fill
                    className="object-cover pointer-events-none"
                    sizes="100vw"
                    draggable={false}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* MOBILE DOTS */}
        <div className="md:hidden flex justify-center gap-2 mt-6">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                const container = scrollContainerRef.current;
                if (!container) return;

                const slideWidth =
                  container.firstElementChild?.clientWidth || 0;

                container.scrollTo({
                  left: slideWidth * index,
                  behavior: 'smooth',
                });
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-6 bg-[#15b020]'
                  : 'w-2 bg-[#D2D2D2]'
              }`}
            />
          ))}
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex gap-0 2xl:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`flex flex-col flex-1 p-6 gap-6 ${
                index === 1 ? '' : 'border-x border-[#E4DACC]'
              }`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <span className="font-neue-montreal text-base uppercase text-[rgba(42,42,42,0.5)]">
                    {step.number}
                  </span>
                  <div className="w-px h-4 bg-[#D2D2D2]" />
                  <span className="font-neue-montreal text-base uppercase text-[rgba(42,42,42,0.5)]">
                    {step.label}
                  </span>
                </div>

                <p className="font-neue-montreal text-lg uppercase text-[#2C2D30] 2xl:text-[20px]">
                  {step.description}
                </p>
              </div>

              <div className="relative w-full h-[360px] 2xl:h-[480px] bg-[#F9F9F9] overflow-hidden rounded-md">
                <Image
                  src={step.image}
                  alt={`${step.label} step`}
                  fill
                  className="object-cover"
                  sizes="(min-width:1536px) calc((100vw - 356px) / 3), 348px"
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