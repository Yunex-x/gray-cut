"use client";

import { AddToCartProps } from "@/app/types/cart";


export default function AddToCart({
  onAddToCart,
  disabled = false,
  compact = false,
}: AddToCartProps) {
  const heightClass = compact ? "h-[40px]" : "h-[54px]";
  const paddingX = compact ? "px-4" : "px-[22px]";
  const textClass = compact ? "text-sm" : "text-base";

  return (
    <button
      type="button"
      onClick={onAddToCart}
      disabled={disabled}
      className={`
        flex items-center justify-center
        ${paddingX} py-2 gap-4 w-full ${heightClass}
        bg-[#8AAE9B]
        hover:bg-[#7a9d8a]
        active:bg-[#6a8d7a]
        disabled:bg-[#8AAE9B]/50
        disabled:cursor-not-allowed
        transition-colors
      `}
    >
      <span
        className={`font-poppins font-semibold ${textClass} leading-6 uppercase text-white`}
      >
        Add to cart
      </span>
    </button>
  );
}