'use client';

interface AddToCartProps {
  onAddToCart: () => void;
  disabled?: boolean;
}

export default function AddToCart({ onAddToCart, disabled = false }: AddToCartProps) {
  return (
    <button
      onClick={onAddToCart}
      disabled={disabled}
      className="flex items-center justify-center px-[22px] py-2.5 gap-4 w-full h-[54px] bg-[#8AAE9B] hover:bg-[#7a9d8a] active:bg-[#6a8d7a] disabled:bg-[#8AAE9B]/50 disabled:cursor-not-allowed transition-colors"
    >
      <span className="font-poppins  font-semibold text-base leading-6 uppercase text-white">
        Add to cart
      </span>
    </button>
  );
}