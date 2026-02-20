"use client";

import { VariantSelectorProps } from "@/app/types/variant";


export default function VariantSelector({
  options,
  selected,
  onSelect,
  compact = false,
}: VariantSelectorProps) {
  const containerWidth = compact ? "w-full" : "w-[276px]";
  const padding = compact ? "px-2 py-2 gap-2" : "px-2.5 py-3 gap-[22px]";
  const titleSize = compact ? "text-sm" : "text-lg";
  const priceSize = compact ? "text-lg" : "text-2xl";
  const deliverySize = compact ? "text-xs" : "text-sm";

  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => {
        const isActive = selected === option.id;

        return (
          <button
            key={option.id}
            onClick={() => onSelect(option.id)}
            className={`
              flex flex-col ${padding} ${containerWidth}
              border transition-all
              ${
                isActive
                  ? "bg-[#8AAE9B]/12 border-[#8AAE9B]"
                  : "bg-[#F6F4F1] border-[#2C2D30]/10 hover:border-[#2C2D30]/30"
              }
            `}
          >
            <h3
              className={`
                font-playfair font-semibold ${titleSize}
                leading-6 tracking-[-0.02em] uppercase text-[#2C2D30] text-left
              `}
            >
              {option.name}
            </h3>

            <div className="flex items-end justify-between">
              <span
                className={`
                  font-poppins ${deliverySize}
                  leading-[21px] tracking-[0.02em]
                  whitespace-nowrap uppercase text-[#2C2D30]/80
                `}
              >
                {option.delivery}
              </span>

              <span
                className={`
                  font-alumni font-semibold ${priceSize}
                  leading-[29px] uppercase text-[#2C2D30]
                `}
              >
                £{option.price}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}