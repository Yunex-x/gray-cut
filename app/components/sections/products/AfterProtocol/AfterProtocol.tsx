"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AFTER_PROTOCOL_TESTIMONIALS } from "@/app/constants/afterProtocolTestimonials";

export default function AfterProtocol() {
  const [[index, direction], setIndex] =
    useState<[number, number]>([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prevIndex]) => [
      (prevIndex + dir + AFTER_PROTOCOL_TESTIMONIALS.length) %
        AFTER_PROTOCOL_TESTIMONIALS.length,
      dir,
    ]);
  };

  return (
    <section className="w-full bg-[#F6F4F1]">
      {/* MOBILE LAYOUT */}
      <div className="lg:hidden w-full max-w-[393px] mx-auto flex flex-col">
        <div className="relative bg-[#EEECE9] w-full h-[426px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(181.2deg, rgba(0,0,0,0) 27.49%, rgba(0,0,0,0.54) 91.81%), url('/products/after-protocol.png')",
            }}
          />
        </div>

        <div className="w-full bg-[#8AAE9B] h-[212px] px-[18px] py-[24px] flex flex-col gap-[24px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 80 : -80,
              }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -80 : 80,
              }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
              className="flex flex-col gap-[24px]"
            >
              <p className="font-poppins font-normal text-[18px] leading-[27px] uppercase text-white line-clamp-4">
                {AFTER_PROTOCOL_TESTIMONIALS[index].quote}
              </p>

              <div className="flex items-end gap-[12px]">
                <div className="flex flex-col gap-[8px]">
                  <p className="font-poppins font-medium text-[14px] leading-[61px] text-white">
                    {AFTER_PROTOCOL_TESTIMONIALS[index].name}
                  </p>
                  <p className="font-poppins font-normal text-[12px] leading-[120%] text-white/60">
                    {AFTER_PROTOCOL_TESTIMONIALS[index].role}
                  </p>
                </div>
                <div className="flex-1 h-[1px] bg-white/29" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* navigation */}
        <div className="flex justify-center items-center gap-[12px] py-[40px]">
          <button
            onClick={() => paginate(-1)}
            className="w-[40px] h-[40px] border border-[#8AAE9B] flex items-center justify-center transition-all duration-300 hover:bg-[#8AAE9B]/10 active:scale-95"
            aria-label="Previous testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="#8AAE9B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            className="w-[40px] h-[40px] bg-[#8AAE9B] flex items-center justify-center transition-all duration-300 hover:opacity-90 active:scale-95"
            aria-label="Next testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="#F6F4F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* DESKTOP / WIDE LAYOUT */}
      <div className="hidden lg:grid w-full grid-cols-1 lg:grid-cols-2 min-h-[870px] pl-0 lg:pl-[40px]">
        {/* LEFT: image */}
        <div className="relative bg-[#EEECE9] overflow-hidden 2xl:h-[900px]">
          <div className="absolute inset-0 bg-[linear-gradient(181.2deg,rgba(0,0,0,0)_27%,rgba(0,0,0,0.54)_92%)] z-10" />
          <div className="absolute inset-0 bg-[url('/products/after-protocol.png')] bg-cover bg-center xl:bg-top xl:bg-cover" />
        </div>

        {/* RIGHT: content */}
        <div className="flex flex-col bg-[#F6F4F1]">
          <div className="px-[24px] lg:px-[40px] xl:px-[80px] pt-[64px] text-right 2xl:pt-[100px] 2xl:px-[120px]">
            <h2 className="font-playfair uppercase font-semibold tracking-[-0.02em] text-[#2C2D30] text-[36px] lg:text-[44px] xl:text-[64px] leading-tight 2xl:text-[72px]">
              After the Protocol
            </h2>
            <p className="mt-2 ml-auto text-right font-poppins uppercase text-[rgba(44,45,48,0.7)] text-[14px] lg:text-[16px] max-w-[319px] 2xl:text-[18px]">
              What happens when "good enough" is removed.
            </p>
          </div>

          <div className="mt-[48px] bg-[#8AAE9B] border-y border-black/30 w-full h-[280px] lg:h-[346px] xl:h-[400px] 2xl:h-[560px] px-[24px] lg:px-[40px] xl:px-[60px] py-[24px] xl:py-[40px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 80 : -80,
                }}
                animate={{ opacity: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  x: direction > 0 ? -80 : 80,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className="h-full flex flex-col justify-between"
              >
                <p className="font-poppins uppercase text-white text-[20px] lg:text-[24px] xl:text-[32px] 2xl:text-[40px] leading-[1.2]">
                  {AFTER_PROTOCOL_TESTIMONIALS[index].quote}
                </p>

                <div>
                  <div className="h-[1px] bg-white/29 mb-4" />
                  <p className="font-poppins text-white text-[16px] xl:text-[16px] font-medium leading-[61px] 2xl:text-[20px]">
                    {AFTER_PROTOCOL_TESTIMONIALS[index].name}
                  </p>
                  <p className="font-poppins text-white/60 text-[14px] xl:text-[14px] leading-[120%] 2xl:text-[16px]">
                    {AFTER_PROTOCOL_TESTIMONIALS[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-auto flex items-center justify-end px-[24px] lg:px-[40px] xl:px-[80px] py-[24px] xl:py-[40px] 2xl:py-[60px]">
            <div className="flex gap-[12px]">
              <button
                onClick={() => paginate(-1)}
                className="w-[56px] h-[56px] border border-[#8AAE9B] flex items-center justify-center hover:bg-[#8AAE9B]/10 transition"
                aria-label="Previous testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M15 18L9 12L15 6" stroke="#8AAE9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button
                onClick={() => paginate(1)}
                className="w-[56px] h-[56px] bg-[#8AAE9B] text-white flex items-center justify-center hover:opacity-90 transition"
                aria-label="Next testimonial"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9 18L15 12L9 6" stroke="#F6F4F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}