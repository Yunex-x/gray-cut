"use client";

import { useState, useEffect } from "react";
import {
  ProcessToggleButtonsProps,
  ProcessTrack,
} from "@/app/types/processButtons";

export default function ProcessToggleButtons({
  initial = "express",
  onChange,
  className = "",
}: ProcessToggleButtonsProps) {
  const [active, setActive] = useState<ProcessTrack>(initial);

  useEffect(() => {
    setActive(initial);
  }, [initial]);

  function handleClick(value: ProcessTrack) {
    if (value === active) return;
    setActive(value);
    onChange?.(value);
  }

  return (
    <div
      className={`md:hidden whitespace-nowrap flex items-center justify-center gap-3 ${className}`}
      role="tablist"
      aria-label="Process track toggle"
    >
      <button
        type="button"
        role="tab"
        aria-selected={active === "express"}
        onClick={() => handleClick("express")}
        className={`
          w-[147px] h-9 flex items-center justify-center
          px-[18px] py-2
          transition-colors duration-150
          ${
            active === "express"
              ? "bg-[#8AAE9B] text-[#F6F4F1]"
              : "bg-[#F6F4F1] text-[#8AAE9B] border border-[#8AAE9B]"
          }
        `}
      >
        <span className="font-neue-montreal font-medium text-sm uppercase">
          EXPRESS TRACK
        </span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={active === "standard"}
        onClick={() => handleClick("standard")}
        className={`
          w-[147px] h-9 flex items-center justify-center
          px-[18px] py-2
          transition-colors duration-150
          ${
            active === "standard"
              ? "bg-[#8AAE9B] text-[#F6F4F1]"
              : "bg-[#F6F4F1] text-[#8AAE9B] border border-[#8AAE9B]"
          }
        `}
      >
        <span className="font-neue-montreal font-medium text-sm uppercase">
          STANDARD TRACK
        </span>
      </button>
    </div>
  );
}