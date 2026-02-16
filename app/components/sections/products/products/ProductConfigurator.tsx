'use client';

import { useState } from 'react';
import { Star } from 'lucide-react';
import ColorSelector from './ColorSelector';
import SizeSelector from './SizeSelector';
import VariantSelector from './VariantSelector';
import AddToCart from './AddToCart';

interface ProductOption {
  id: string;
  name: string;
  delivery: string;
  price: number;
  isSelected?: boolean;
}

export default function ProductConfigurator() {
  const [selectedColor, setSelectedColor] = useState<string>('beige');
  const [selectedSize, setSelectedSize] = useState<string>('7 × 7');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
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
    // First Row
    { id: 'beige', color: '#D5D6D1', image: '/products/jet-black.png', selected: true },
    { id: 'brown', color: '#745632', image: '/colors/brown.png', selected: false },
    { id: 'black', color: '#181818', image: '/colors/black.png', selected: false },
    { id: 'tan', color: '#5B4E3E', image: '/colors/tan.png', selected: false },
    // Second Row
    { id: 'beige-2', color: '#D5D6D1', image: '/colors/beige-2.png', selected: false },
    { id: 'brown-2', color: '#745632', image: '/colors/brown-2.png', selected: false },
    { id: 'black-2', color: '#181818', image: '/colors/black-2.png', selected: false },
    { id: 'tan-2', color: '#5B4E3E', image: '/colors/tan-2.png', selected: false }
  ];

  const sizes = ['7 × 7', '8 × 8', '9 × 9'];

  return (
    <div className="flex flex-col gap-8 w-[276px]">
      {/* Product Info Card */}
      <div className="flex flex-col gap-6 bg-[#F6F4F1] p-6">
        {/* Header */}
        <div className="flex flex-col gap-3">
          <h1 className="font-playfair font-semibold text-[32px] leading-[43px] tracking-[-0.02em] uppercase text-[#2C2D30]">
            The Standard System
          </h1>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#2C2D30] text-[#2C2D30]" />
              <span className="font-poppins font-semibold text-sm leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]">
                5/5
              </span>
            </div>
            <span className="font-poppins text-sm leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]/80">
              based on 240 reviews
            </span>
          </div>
        </div>

        {/* Variant Selector */}
        <VariantSelector 
          options={productOptions}
          selected={selectedVariant}
          onSelect={setSelectedVariant}
        />

        {/* Color Selector */}
        <ColorSelector 
          colors={colors}
          selected={selectedColor}
          onSelect={setSelectedColor}
        />

        {/* Size Selector */}
        <SizeSelector 
          sizes={sizes}
          selected={selectedSize}
          onSelect={setSelectedSize}
        />

        {/* Location Selector */}
        <div className="flex flex-col gap-2">
          <h3 className="font-playfair font-semibold text-base leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]">
            Where is your part?
          </h3>
          <div className="flex items-center justify-between px-4 py-2.5 border border-[#2C2D30]/10">
            <span className="font-poppins font-medium text-xs leading-[18px] tracking-[-0.02em] uppercase text-[#2C2D30]/30">
              Select your part line
            </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 6.75L9 12.75L15 6.75" stroke="rgba(44, 45, 48, 0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Add to Cart Button */}
      <AddToCart 
        onAddToCart={() => {
          console.log('Added to cart:', {
            variant: selectedVariant,
            color: selectedColor,
            size: selectedSize,
            location: selectedLocation
          });
        }}
      />
    </div>
  );
}