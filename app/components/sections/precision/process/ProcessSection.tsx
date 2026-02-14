"use client";
import Image from "next/image";
import { useState, useRef } from "react";

const processSteps = [
  {
    number: "01 ",
    title: "The Scan",
    image: "/process/01.webp",
    imageWidth: 429,
    imageHeight: 456,
  },
  {
    number: "02 ",
    title: "The mold",
    image: "/process/2.webp",
    imageWidth: 400,
    imageHeight: 200,
  },
  {
    number: "03 ",
    title: "The craft",
    image: "/process/3.webp",
    imageWidth: 396,
    imageHeight: 460,
  },
  {
    number: "04",
    title: "the fit",
    image: "/process/4.webp",
    imageWidth: 405,
    imageHeight: 456,
  },
  {
    number: "05",
    title: "THE FINISH",
    image: "/process/5.webp",
    imageWidth: 430,
    imageHeight: 458,
  },
  {
    number: "06  ",
    title: "The delivery",
    image: "/process/6.webp",
    imageWidth: 405,
    imageHeight: 233,
  },
];

export default function ProcessSection() {
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
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <section className="w-full bg-[#F6F4F1]">
      {/* Desktop Version */}
      <div className="hidden lg:flex flex-col items-center pt-[100px] gap-[56px] w-[1440px] h-[951px]">
        {/* Header */}
        <div className="flex flex-col items-center gap-[24px] w-[608px] h-[93px]">
          <h2 className="w-[608px] h-[45px] font-playfair font-normal text-[64px] leading-[85px] text-center tracking-[0.02em] uppercase text-[#2C2D30]">
            THE PROCESS
          </h2>
          <p className="w-[608px] h-[24px] mt-[24px] font-poppins font-normal text-[16px] leading-[24px] uppercase text-[rgba(44,45,48,0.7)]">
            A controlled process combining data accuracy and human expertise.
          </p>
        </div>

        {/* Grid Container */}
        <div className="flex flex-col mt-[56px] gap-[72px] w-[1440px] h-[702px]">
          {/* First Row */}
          <div className="grid grid-cols-3 w-full h-[315px] px-[40px]">
            {processSteps.slice(0, 3).map((step, index) => (
              <div
                key={index}
                className="flex flex-col gap-[32px] px-[24px] h-[315px] border-x border-[#E4DACC]"
              >
                <div className="flex flex-col gap-[24px] w-full h-[83px]">
                  <div className="flex flex-row items-center gap-[12px] w-full h-[21px]">
                    <span className="w-[22px] h-[16px] font-neue font-medium text-[22px] leading-[26px] uppercase text-[rgba(42,42,42,0.5)]">
                      {step.number}
                    </span>
                    <div className="w-[1px] h-[21px] bg-[#D2D2D2]" />
                  </div>
                  <h3 className="w-full h-[38px] font-neue font-medium text-[32px] leading-[38px] uppercase text-[#2C2D30]">
                    {step.title}
                  </h3>
                </div>
                <div className="w-full h-[200px] relative overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={step.imageWidth}
                    height={step.imageHeight}
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-3 w-full h-[315px] px-[40px]">
            {processSteps.slice(3, 6).map((step, index) => (
              <div
                key={index}
                className="flex flex-col gap-[32px] px-[24px] h-[315px] border-x border-[#E4DACC]"
              >
                <div className="flex flex-col gap-[24px] w-full h-[83px]">
                  <div className="flex flex-row items-center gap-[12px] w-full h-[21px]">
                    <span className="w-[22px] h-[16px] font-neue font-medium text-[22px] leading-[26px] uppercase text-[rgba(42,42,42,0.5)]">
                      {step.number}
                    </span>
                    <div className="w-[1px] h-[21px] bg-[#D2D2D2]" />
                  </div>
                  <h3 className="w-full h-[38px] font-neue font-medium text-[32px] leading-[38px] uppercase text-[#2C2D30]">
                    {step.title}
                  </h3>
                </div>
                <div className="w-full h-[200px] relative overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={step.imageWidth}
                    height={step.imageHeight}
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Version - Drag Slider */}
      <div className="lg:hidden w-full py-[56px]">
               <div className="flex flex-col items-center  gap-[24px] ">
          <h2 className="w-[608px] h-[45px] font-playfair font-normal text-[24px]  text-center tracking-[0.02em] uppercase text-[#2C2D30]">
            THE PROCESS
          </h2>
          <p className=" mt-[24px] font-poppins text-center font-normal text-[14px] leading-[24px] uppercase text-[rgba(44,45,48,0.7)]">
From order to wear, every step is carefully planned.          </p>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-scroll scrollbar-hide cursor-grab mt-[32px] active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {processSteps.map((step, index) => (
            <div key={index} className="flex-shrink-0 w-[307px] flex justify-center">
              <div className="flex flex-col gap-[36px] px-[16px] w-[307px] h-[228.33px] border-x border-[#E4DACC]">
                <div className="flex flex-col gap-[16.26px] w-[275px] h-[59.5px]">
                  <div className="flex flex-row items-center gap-[8.13px] w-[275px] h-[14.23px]">
                    <span className="font-neue font-medium text-[13.7591px] leading-[17px] uppercase text-[rgba(42,42,42,0.5)]">
                      {step.number}
                    </span>
                    <div className="w-[0.68px] h-[14.23px] bg-[#D2D2D2]" />
                  </div>
                  <h3 className="w-[275px] h-[29px] font-neue font-medium text-[24px] leading-[29px] uppercase text-[#2C2D30]">
                    {step.title}
                  </h3>
                </div>
                <div className="w-[275px] h-[132.83px] relative overflow-hidden">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={275}
                    height={133}
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}