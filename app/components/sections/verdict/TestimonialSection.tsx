"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote:
      "I spent €20k on bad hair. This is the first time I've walked into a boardroom without checking a mirror.",
    name: "Marco",
    role: "Happy Customer",
  },
  {
    quote:
      "I forgot what anxiety feels like. This system gave me confidence back.",
    name: "Daniel",
    role: "Happy Customer",
  },
  {
    quote:
      "No one noticed. Everyone noticed. That's the magic.",
    name: "Luca",
    role: "Happy Customer",
  },
];

export default function TestimonialCarousel() {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (dir: number) => {
    setIndex([
      (index + dir + testimonials.length) % testimonials.length,
      dir,
    ]);
  };

  return (
    <section className="w-full bg-[#F6F4F1]">
      {/* ================= MOBILE LAYOUT ================= */}
      <div className="lg:hidden w-full max-w-[393px] mx-auto flex flex-col">
        {/* Image */}
        <div className="relative bg-[#EEECE9] w-full h-[426px] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(181.2deg, rgba(0,0,0,0) 27.49%, rgba(0,0,0,0.54) 91.81%), url('/verdict.webp')",
            }}
          />
        </div>

        {/* Testimonial Card */}
        <div className="w-full bg-[#8AAE9B] h-[212px] px-[18px] py-[24px] flex flex-col gap-[24px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 80 : -80,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
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
              {/* Quote */}
              <p className="
                font-poppins
                font-normal
                text-[18px]
                leading-[27px]
                uppercase
                text-white
                line-clamp-4
              ">
                {testimonials[index].quote}
              </p>

              {/* Author Info */}
              <div className="flex items-end gap-[12px]">
                <div className="flex flex-col gap-[8px]">
                  <p className="
                    font-poppins
                    font-medium
                    text-[14px]
                    leading-[61px]
                    text-white
                  ">
                    {testimonials[index].name}
                  </p>
                  <p className="
                    font-poppins
                    font-normal
                    text-[12px]
                    leading-[120%]
                    text-white/60
                  ">
                    {testimonials[index].role}
                  </p>
                </div>
                <div className="flex-1 h-[1px] bg-white/29" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-[12px] py-[40px]">
          <button
            onClick={() => paginate(-1)}
            className="
              w-[40px]
              h-[40px]
              border
              border-[#8AAE9B]
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:bg-[#8AAE9B]/10
              active:scale-95
            "
            aria-label="Previous testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M11.25 13.5L6.75 9L11.25 4.5" stroke="#8AAE9B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <button
            onClick={() => paginate(1)}
            className="
              w-[40px]
              h-[40px]
              bg-[#8AAE9B]
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:opacity-90
              active:scale-95
            "
            aria-label="Next testimonial"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M6.75 13.5L11.25 9L6.75 4.5" stroke="#F6F4F1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ================= DESKTOP LAYOUT - ORIGINAL ================= */}
      <div className="hidden lg:grid max-w-[1440px] mx-auto grid-cols-1 lg:grid-cols-2 min-h-[870px]">
        {/* IMAGE */}
        <div className="relative bg-[#EEECE9] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(181.2deg, rgba(0,0,0,0) 27%, rgba(0,0,0,0.54) 92%), url('/verdict.webp')",
            }}
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col">
          {/* HEADER */}
          <div className="px-[24px] lg:px-[40px] pt-[64px] ">
            <h2 className="font-playfair whitespace-nowrap uppercase font-medium text-right tracking-[-0.02em] text-[#2C2D30] text-[36px] lg:text-[64px] leading-tight">
              Thought of First 50
            </h2>
            <p className="mt-2 max-w-[373px] ml-auto text-right font-poppins uppercase text-[rgba(44,45,48,0.7)] text-[14px] lg:text-[16px]">
              We invited 50 men to test the protocol. Here is the unedited reality.
            </p>
          </div>

          {/* CAROUSEL */}
          <div
            className="
              mt-[48px]
              bg-[#8AAE9B]
              border-y
              border-black/30

              w-full
              max-w-[750px]
              h-[280px]
              lg:h-[346px]

              px-[24px]
              lg:px-[40px]
              py-[24px]

              overflow-hidden
              ml-auto
            "
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={index}
                custom={direction}
                initial={{
                  opacity: 0,
                  x: direction > 0 ? 80 : -80,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
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
                {/* QUOTE */}
                <p
                  className="
                    font-poppins
                    uppercase
                    text-white
                    text-[20px]
                    lg:text-[36px]
                    leading-[1.5]
                    line-clamp-4
                  "
                >
                  {testimonials[index].quote}
                </p>

                {/* AUTHOR */}
                <div>
                  <p className="font-poppins text-white text-[16px] font-medium">
                    {testimonials[index].name}
                  </p>
                  <p className="font-poppins text-white/60 text-[14px]">
                    {testimonials[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAV */}
          <div className="mt-auto flex items-center justify-between px-[24px] lg:px-[40px] py-[24px]">
            <div className="h-[1px] flex-1 bg-black/20 mr-[24px]" />

            <div className="flex gap-[12px]">
              <button
                onClick={() => paginate(-1)}
                className="w-[56px] h-[56px] border border-[#8AAE9B] flex items-center justify-center hover:bg-[#8AAE9B]/10 transition"
              >
                ←
              </button>
              <button
                onClick={() => paginate(1)}
                className="w-[56px] h-[56px] bg-[#8AAE9B] text-white flex items-center justify-center hover:opacity-90 transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}