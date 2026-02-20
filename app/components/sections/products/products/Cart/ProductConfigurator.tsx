'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import SizeSelector from './SizeSelector';
import VariantSelector from './VariantSelector';
import AddToCart from './AddToCart';
import ColorSelector from './ColorSelector';

interface ProductOption {
  id: string;
  name: string;
  delivery: string;
  price: number;
  isSelected?: boolean;
}

export default function ProductConfigurator() {
  const [selectedColor, setSelectedColor] = useState<string>('jet-black');
  const [selectedSize, setSelectedSize] = useState<string>('7 × 7');
  const [selectedLocation] = useState<string>('');
  const [selectedVariant, setSelectedVariant] = useState<string>('standard');

  const productOptions: ProductOption[] = [
    {
      id: 'custom',
      name: 'the custom creation',
      delivery: 'Delivery in 3 days',
      price: 1000,
      isSelected: false
    },
    {
      id: 'standard',
      name: 'The Standard System',
      delivery: 'Delivery in 3 days',
      price: 240,
      isSelected: true
    }
  ];

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

  function handleAddToCart(): void {
    console.log({
      selectedVariant,
      selectedColor,
      selectedSize,
      selectedLocation
    });
  }

  return (
    // Keep compact width, but DO NOT set maxHeight/overflow here to avoid inner scroll.
    <div className="w-full max-w-[300px] flex flex-col">
      {/* Content flows naturally; page will scroll instead of inner area */}
      <div className="bg-[#F6F4F1] p-3">
        {/* Card */}
        <div className="flex flex-col gap-3">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="font-playfair whitespace-nowrap font-semibold text-[20px] leading-[26px] tracking-[-0.02em] uppercase text-[#2C2D30]">
              The Standard <br /> System
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#2C2D30] text-[#2C2D30]" />
                <span className="font-poppins font-semibold text-xs uppercase text-[#2C2D30]">
                  5/5
                </span>
              </div>
              <span className="font-poppins text-[11px] uppercase text-[#2C2D30]/70">
                based on 240 reviews
              </span>
            </div>
          </div>

          {/* Variant */}
          <div className="mt-1">
            <VariantSelector
              options={productOptions}
              selected={selectedVariant}
              onSelect={setSelectedVariant}
              compact
            />
          </div>

          {/* Color */}
          <div className="mt-1">
            <ColorSelector
              colors={colors}
              selected={selectedColor}
              onSelect={setSelectedColor}
              compact
            />
          </div>

          {/* Size */}
          <div className="mt-1">
            <SizeSelector
              sizes={sizes}
              selected={selectedSize}
              onSelect={setSelectedSize}
              compact
            />
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1 mt-1">
            <h3 className="font-playfair font-semibold text-[12px] uppercase text-[#2C2D30]">
              Where is your part?
            </h3>

            <div className="flex items-center justify-between px-2 py-2 border border-[#2C2D30]/10 text-sm">
              <span className="font-poppins text-[11px] uppercase text-[#2C2D30]/40">
                Select your part line
              </span>

              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" className="ml-2">
                <path
                  d="M3 6.75L9 12.75L15 6.75"
                  stroke="rgba(44, 45, 48, 0.7)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* small spacer so content doesn't sit under sticky button */}
          <div className="h-3" />
        </div>
      </div>

      {/* Keep the CTA visible by making it sticky to the viewport bottom. No inner scroll. */}
      <div className="sticky bottom-0 bg-[#F6F4F1] p-3 border-t border-[#E6E2D9] z-10">
        <div className="w-full">
          <AddToCart onAddToCart={handleAddToCart} compact />
        </div>
      </div>
    </div>
  );
}