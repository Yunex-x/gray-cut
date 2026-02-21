'use client';

import { useState, useEffect } from 'react';
import { Star, X } from 'lucide-react';
import Image from 'next/image';

interface MobileProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (payload: {
    productId: string;
    variant: string;
    color: string;
    size: string;
    location?: string;
    quantity: number;
  }) => void; // ✅ added
}

export default function MobileProductModal({
  isOpen,
  onClose,
  onAddToCart,
}: MobileProductModalProps) {

  const [selectedVariant, setSelectedVariant] = useState<string>('standard');
  const [selectedColor, setSelectedColor] = useState<string>('jet-black');
  const [selectedSize, setSelectedSize] = useState<string>('7 × 7');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const colors = [
    { id: 'jet-black', label: 'Jet Black', image: '/products/jet-black.png' },
    { id: 'natural-black', label: 'Natural Black', image: '/products/natural-black.png' },
    { id: 'dark-brown', label: 'Dark Brown', image: '/products/dark-brown.png' },
    { id: 'medium-brown', label: 'Medium Brown', image: '/products/medium-brown.png' },
    { id: 'light-brown', label: 'Light Brown', image: '/products/light-brown.png' },
    { id: 'chestnut-brown', label: 'Chestnut Brown', image: '/products/chestnut-brown.png' },
    { id: 'dark-blonde', label: 'Dark Blonde', image: '/products/dark-blonde.png' },
    { id: 'light-blonde', label: 'Light Blonde', image: '/products/light-blonde.png' },
  ];

  const sizes = ['7 × 7', '8 × 8', '9 × 9'];

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  // ✅ Shared add-to-cart call
  const handleDone = () => {
    onAddToCart({
      productId: 'standard-system',
      variant: selectedVariant,
      color: selectedColor,
      size: selectedSize,
      quantity: 1,
    });

    onClose(); // close modal after adding
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto p-4"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-[357px] bg-white flex flex-col items-start p-4 gap-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute w-11 h-11 flex items-center justify-center -top-2 -right-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-[#1D1B20]" />
        </button>

        {/* CONTENT (unchanged UI) */}

        <div className="w-full flex flex-col items-start gap-6">

          <h2 className="w-full font-playfair font-semibold text-[22px] leading-[29px] uppercase text-[#2C2D30]">
            The Standard System
          </h2>

          {/* Variant */}
          <div className="w-full flex flex-col gap-3">
            {['custom', 'standard'].map((variant) => (
              <button
                key={variant}
                onClick={() => setSelectedVariant(variant)}
                className={`w-full p-3 border ${
                  selectedVariant === variant
                    ? 'bg-[rgba(138,174,155,0.12)] border-[#8AAE9B]'
                    : 'border-[rgba(44,45,48,0.1)]'
                }`}
              >
                <span className="uppercase font-playfair font-semibold">
                  {variant === 'custom'
                    ? 'the custom creation'
                    : 'The Standard System'}
                </span>
              </button>
            ))}
          </div>

          {/* Color */}
          <div className="w-full grid grid-cols-4 gap-2">
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color.id)}
                className={`relative w-full h-[40px] ${
                  selectedColor === color.id
                    ? 'ring-2 ring-[#2C2D30]'
                    : ''
                }`}
              >
                <Image
                  src={color.image}
                  alt={color.label}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>

          {/* Size */}
          <div className="w-full flex gap-1">
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 h-9 border ${
                  selectedSize === size
                    ? 'bg-[rgba(138,174,155,0.12)] border-[#8AAE9B]'
                    : 'border-[rgba(44,45,48,0.1)]'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* DONE BUTTON */}
        <button
          onClick={handleDone}
          className="w-full h-9 bg-[#8AAE9B] hover:bg-[#7A9E8B] text-white uppercase font-semibold"
        >
          Done
        </button>
      </div>
    </div>
  );
}