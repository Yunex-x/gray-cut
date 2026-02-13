"use client";

import { motion } from "framer-motion";

export default function FeaturesMarquee() {
  const features = [
    {
      id: 1,
      subtitle: "Hand-finished in Europe",
      title: "European Craft",
    },
    {
      id: 2,
      subtitle: "Plain, unbranded packaging",
      title: "Discreet Shipping",
    },
    {
      id: 3,
      subtitle: "Secure checkout, always",
      title: "Stripe secure",
    },
    {
      id: 4,
      subtitle: "14-Day Fit Guarantee",
      title: "Fit Guarantee",
    },
  ];

  return (
    <section className="w-full h-[264px] bg-[#EBEBEB] relative overflow-hidden">
      {/* Gradient Overlays */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #EBEBEB 0%, rgba(235, 235, 235, 0) 9.08%, rgba(235, 235, 235, 0) 90.9%, #EBEBEB 100%)",
        }}
      />

      {/* Scrolling Container */}
      <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden">
        <motion.div
          className="flex gap-[24px]"
          animate={{
            x: [0, "-33.333%"],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* First set */}
          {features.map((feature, index) => (
            <FeatureCard
              key={`first-${feature.id}`}
              subtitle={feature.subtitle}
              title={feature.title}
              showBorder={index !== features.length - 1}
            />
          ))}
          {/* Duplicate for seamless loop */}
          {features.map((feature, index) => (
            <FeatureCard
              key={`second-${feature.id}`}
              subtitle={feature.subtitle}
              title={feature.title}
              showBorder={index !== features.length - 1}
            />
          ))}
          {/* Third set for smooth transition */}
          {features.map((feature, index) => (
            <FeatureCard
              key={`third-${feature.id}`}
              subtitle={feature.subtitle}
              title={feature.title}
              showBorder={index !== features.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({
  subtitle,
  title,
  showBorder,
}: {
  subtitle: string;
  title: string;
  showBorder: boolean;
}) {
  return (
    <div
      className={`
        flex
        items-center
        gap-[8px]
        h-[64px]
        px-[16px]
        ${showBorder ? "border-r border-[rgba(44,45,48,0.23)]" : ""}
        flex-shrink-0
        min-w-[350px]
      `}
    >
      {/* Icon Placeholder */}
      <div className="w-[64px] h-[64px] flex items-center justify-center flex-shrink-0">
        <div className="w-[44px] h-[44px] bg-[#2C2D30] rounded-full opacity-20" />
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center">
        {/* Subtitle */}
        <p className="font-poppins text-[18px] leading-[27px] uppercase text-[rgba(42,42,42,0.5)] whitespace-nowrap">
          {subtitle}
        </p>

        {/* Title */}
        <h3 className="font-playfair font-semibold text-[24px] leading-[32px] uppercase text-[#2C2D30] whitespace-nowrap">
          {title}
        </h3>
      </div>
    </div>
  );
}