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
      "No one noticed. Everyone noticed. That’s the magic.",
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
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[870px]">
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
We invited 50 men to test the protocol. Here is the unedited reality.            </p>
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
