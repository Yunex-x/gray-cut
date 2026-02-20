"use client";

import { FEATURES } from "@/app/constants/features";
import { FeatureCardProps } from "@/app/types/features";
import { motion } from "framer-motion";

export default function FeaturesMarquee() {
  return (
    <section className="w-full h-[120px] lg:[264px] bg-[#EBEBEB] relative overflow-hidden">
      {/* Gradient edges */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #EBEBEB 0%, rgba(235,235,235,0) 10%, rgba(235,235,235,0) 90%, #EBEBEB 100%)",
        }}
      />

      {/* Marquee */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden">
        <motion.div
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {FEATURES.map((feature, i) => (
            <FeatureCard key={`a-${i}`} {...feature} />
          ))}

          {FEATURES.map((feature, i) => (
            <FeatureCard key={`b-${i}`} {...feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ subtitle, title }: FeatureCardProps) {
  return (
    <div className="flex items-center gap-[8px] h-[64px] px-[16px] border-r border-[rgba(44,45,48,0.23)] flex-shrink-0 min-w-[350px]">
      <div className="w-[64px] h-[64px] flex items-center justify-center">
        <div className="w-[44px] h-[44px] bg-[#2C2D30] rounded-full opacity-20" />
      </div>

      <div className="flex flex-col">
        <p className="font-poppins text-[18px] uppercase text-[rgba(42,42,42,0.5)] whitespace-nowrap">
          {subtitle}
        </p>
        <h3 className="font-playfair font-semibold text-[24px] uppercase text-[#2C2D30] whitespace-nowrap">
          {title}
        </h3>
      </div>
    </div>
  );
}