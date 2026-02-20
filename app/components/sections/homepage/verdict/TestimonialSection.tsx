"use client";

import { TESTIMONIALS } from "@/app/constants/testimonials";
import { useCarousel } from "@/app/hooks/useCarousel";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialCarousel() {
  const { index, direction, paginate } =
    useCarousel(TESTIMONIALS.length);

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
                "linear-gradient(181.2deg, rgba(0,0,0,0) 27.49%, rgba(0,0,0,0.54) 91.81%), url('/home/verdict.webp')",
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
              <p className="font-poppins text-[18px] leading-[27px] uppercase text-white line-clamp-4">
                {TESTIMONIALS[index].quote}
              </p>

              <div className="flex items-end gap-[12px]">
                <div className="flex flex-col gap-[8px]">
                  <p className="font-poppins font-medium text-[14px] text-white">
                    {TESTIMONIALS[index].name}
                  </p>
                  <p className="font-poppins text-[12px] text-white/60">
                    {TESTIMONIALS[index].role}
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
            className="w-[40px] h-[40px] border border-[#8AAE9B] flex items-center justify-center transition hover:bg-[#8AAE9B]/10"
            aria-label="Previous testimonial"
          >
            ←
          </button>

          <button
            onClick={() => paginate(1)}
            className="w-[40px] h-[40px] bg-[#8AAE9B] text-white flex items-center justify-center transition hover:opacity-90"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </div>

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="hidden lg:grid grid-cols-2 min-h-[870px]">
        {/* IMAGE */}
        <div className="relative bg-[#EEECE9] overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(181.2deg,rgba(0,0,0,0)_27%,rgba(0,0,0,0.54)_92%)] z-10" />
          <div className="absolute inset-0 bg-[url('/home/verdict.webp')] bg-cover bg-center xl:bg-top" />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col bg-[#F6F4F1]">
          {/* HEADER */}
          <div className="px-[40px] xl:px-[80px] pt-[64px]">
            <h2 className="font-playfair uppercase text-center text-[#2C2D30] text-[64px] leading-tight">
              Thought of First 50
            </h2>
            <p className="mt-2 text-center font-poppins uppercase text-[rgba(44,45,48,0.7)]">
              We invited 50 men to test the protocol. Here is the unedited reality.
            </p>
          </div>

          {/* CAROUSEL */}
          <div className="mt-[48px] bg-[#8AAE9B] border-y border-black/30 h-[346px] px-[40px] py-[40px] overflow-hidden">
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
                <p className="font-poppins uppercase text-white text-[36px] leading-[1.5] line-clamp-4">
                  {TESTIMONIALS[index].quote}
                </p>

                <div>
                  <p className="font-poppins text-white font-medium">
                    {TESTIMONIALS[index].name}
                  </p>
                  <p className="font-poppins text-white/60">
                    {TESTIMONIALS[index].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* NAV */}
          <div className="mt-auto flex items-center justify-between px-[40px] py-[40px]">
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