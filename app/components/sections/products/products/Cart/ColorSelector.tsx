"use client";

import { COLOR_MAP } from "@/app/constants/colorMap";
import { ColorSelectorProps } from "@/app/types/color";
import Image from "next/image";

export default function ColorSelector({
  colors,
  selected,
  onSelect,
  compact = false,
}: ColorSelectorProps) {
  const containerWidthClass = compact ? "w-full" : "w-[276px]";
  const firstBtnHeight = compact ? "h-8" : "h-10";
  const otherBtnHeight = compact ? "h-7" : "h-9";
  const gap = compact ? "gap-1" : "gap-2";

  return (
    <div className={`flex flex-col ${gap} ${containerWidthClass}`}>
      <h3
        className={`font-playfair font-semibold ${
          compact ? "text-sm" : "text-base"
        } leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]`}
      >
        Color
      </h3>

      <div className={`flex flex-col ${gap}`}>
        {/* First Row */}
        <div className={`flex items-center ${compact ? "gap-1" : "gap-2"}`}>
          {colors.slice(0, 1).map((color) => (
            <button
              key={color.id}
              onClick={() => onSelect(color.id)}
              className={`relative flex-1 ${firstBtnHeight} transition-all overflow-hidden ${
                selected === color.id
                  ? "border-[1.5px] border-black p-0.5"
                  : "hover:opacity-80"
              }`}
              title={color.label}
              aria-label={color.label}
            >
              <div
                className="w-full h-full relative"
                style={{ backgroundColor: COLOR_MAP[color.id] }}
              >
                {color.image && (
                  <Image
                    src={color.image}
                    alt={color.label}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </button>
          ))}

          {colors.slice(1, 4).map((color) => (
            <button
              key={color.id}
              onClick={() => onSelect(color.id)}
              className={`relative flex-1 ${otherBtnHeight} transition-all overflow-hidden ${
                selected === color.id
                  ? compact
                    ? "ring-1 ring-[#8AAE9B]"
                    : "ring-2 ring-[#8AAE9B]"
                  : "hover:opacity-80"
              }`}
              style={{ backgroundColor: COLOR_MAP[color.id] }}
              title={color.label}
              aria-label={color.label}
            >
              {color.image && (
                <Image
                  src={color.image}
                  alt={color.label}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>

        {/* Second Row */}
        <div className={`flex items-center ${compact ? "gap-1" : "gap-2"}`}>
          {colors.slice(4, 8).map((color) => (
            <button
              key={color.id}
              onClick={() => onSelect(color.id)}
              className={`relative flex-1 ${otherBtnHeight} transition-all overflow-hidden ${
                selected === color.id
                  ? compact
                    ? "ring-1 ring-[#8AAE9B]"
                    : "ring-2 ring-[#8AAE9B]"
                  : "hover:opacity-80"
              }`}
              style={{ backgroundColor: COLOR_MAP[color.id] }}
              title={color.label}
              aria-label={color.label}
            >
              {color.image && (
                <Image
                  src={color.image}
                  alt={color.label}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}