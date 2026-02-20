"use client";

import Image from "next/image";
import ProcessToggleButtons from "./ProcessToggleButtons";
import { useHorizontalDrag } from "@/app/hooks/useHorizontalDrag";
import { DELIVERY_STEPS } from "@/app/constants/deliverySteps";
import { DeliveryProcessProps } from "@/app/types/process";

export default function DeliveryProcess({
  title = "delivery process",
  subtitle = "From order to wear, every step is carefully planned.",
  steps = DELIVERY_STEPS,
  className = "",
}: DeliveryProcessProps) {
  const {
    scrollContainerRef,
    isDragging,
    handlePointerStart,
    handlePointerMove,
    handleDragEnd,
  } = useHorizontalDrag();

  return (
    <section className={`w-full bg-[#F6F4F1] ${className}`}>
      {/* Container: allow expansion at 2xl so this section fills the left column */}
      <div className="max-w-[1124px] 2xl:max-w-none 2xl:mx-0 mx-auto px-4 md:px-8 lg:px-10 py-12 md:py-16 lg:py-20">
        {/* Removed inner max-width on 2xl so the content can use the left-column width */}
        <div className="w-full 2xl:max-w-none 2xl:mx-0 flex flex-col justify-center items-start gap-8 md:gap-12 lg:gap-14 2xl:gap-20">
          <div className="w-full flex flex-col justify-center items-center gap-4 md:gap-6">
            <h2 className="w-full font-playfair font-normal text-[32px] md:text-[48px] lg:text-[64px] leading-[42px] md:leading-[64px] lg:leading-[85px] text-center tracking-[-0.02em] uppercase text-[#2C2D30] 2xl:text-[72px]">
              {title}
            </h2>

            <p className="w-full font-poppins font-normal text-sm md:text-base leading-5 md:leading-6 text-center uppercase text-[rgba(44,45,48,0.7)] 2xl:text-[18px]">
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
            onMouseDown={(e) => handlePointerStart(e.pageX)}
            onMouseMove={(e) => handlePointerMove(e.pageX)}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            onTouchStart={(e) => handlePointerStart(e.touches[0].pageX)}
            onTouchMove={(e) => handlePointerMove(e.touches[0].pageX)}
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

                  <div className="relative w-full h-[160px] md:h-[200px] bg-white overflow-hidden rounded-md">
                    <Image
                      src={step.image}
                      alt={`${step.label} step`}
                      fill
                      className="object-cover"
                      sizes="100vw"
                      draggable={false}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* DESKTOP / MD+: 3-column layout */}
          <div className="hidden md:flex w-full flex-row items-stretch gap-0 2xl:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`flex flex-col items-start p-6 gap-6 2xl:basis-1/3 ${index === 1 ? '' : 'border-r border-l border-[#E4DACC]'}`}
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

                <div className="relative w-full h-[220px] md:h-[260px] lg:h-[300px] 2xl:h-[520px] bg-white overflow-hidden rounded-md">
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
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}