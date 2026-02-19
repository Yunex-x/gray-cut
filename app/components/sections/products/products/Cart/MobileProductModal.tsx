'use client';

import { useState, useEffect } from 'react';
import { Star, X } from 'lucide-react';
import Image from 'next/image';

interface MobileProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileProductModal({ isOpen, onClose }: MobileProductModalProps) {
  const [selectedVariant, setSelectedVariant] = useState<string>('standard');
  const [selectedColor, setSelectedColor] = useState<string>('jet-black');
  const [selectedSize, setSelectedSize] = useState<string>('7 × 7');

  // Disable body scroll when modal is open
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

  const productOptions = [
    {
      id: 'custom',
      name: 'the custom creation',
      delivery: 'Delivery in 3 days',
      price: 1000
    },
    {
      id: 'standard',
      name: 'The Standard System',
      delivery: 'Delivery in 3 days',
      price: 240
    }
  ];

  // 8 colors with images matching desktop
  const colors = [
    { id: 'jet-black', label: 'Jet Black', image: '/products/jet-black.png' },
    { id: 'natural-black', label: 'Natural Black', image: '/products/natural-black.png' },
    { id: 'dark-brown', label: 'Dark Brown', image: '/products/dark-brown.png' },
    { id: 'medium-brown', label: 'Medium Brown', image: '/products/medium-brown.png' },
    { id: 'light-brown', label: 'Light Brown', image: '/products/light-brown.png' },
    { id: 'chestnut-brown', label: 'Chestnut Brown', image: '/products/chestnut-brown.png' },
    { id: 'dark-blonde', label: 'Dark Blonde', image: '/products/dark-blonde.png' },
    { id: 'light-blonde', label: 'Light Blonde', image: '/products/light-blonde.png' }
  ];

  const sizes = ['7 × 7', '8 × 8', '9 × 9'];

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto p-4"
      onClick={handleClose}
    >
      {/* Frame 493 - Modal Container */}
      <div 
        className="relative w-full max-w-[357px] bg-white flex flex-col items-start p-4 gap-8 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Positioned absolutely in top right */}
        <button
          onClick={handleClose}
          className="absolute w-11 h-11 flex items-center justify-center -top-2 -right-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-[#1D1B20]" />
        </button>

        {/* Frame 499 - Main Content */}
        <div className="w-full flex flex-col items-start gap-6">
          {/* Frame 469 - Title and Rating */}
          <div className="w-full flex flex-col items-start gap-3">
            {/* Title */}
            <h2 className="w-full font-playfair font-semibold text-[22px] leading-[29px] tracking-[-0.02em] uppercase text-[#2C2D30]">
              The Standard System
            </h2>

            {/* Frame 468 - Rating Container */}
            <div className="flex flex-row items-center gap-2">
              {/* Frame 467 - Star and Rating */}
              <div className="flex flex-row items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-[#2C2D30] text-[#2C2D30]" />
                <span className="font-poppins font-semibold text-[14px] leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]">
                  5/5
                </span>
              </div>

              {/* Reviews Text */}
              <span className="font-poppins font-normal text-[14px] leading-[21px] tracking-[-0.02em] uppercase text-[rgba(44,45,48,0.8)]">
                based on 240 reviews
              </span>
            </div>
          </div>

          {/* Frame 478 - Variant Options */}
          <div className="w-full flex flex-col items-start gap-3">
            {/* Custom Option */}
            <button
              onClick={() => setSelectedVariant('custom')}
              className={`w-full flex flex-col items-start p-3 gap-[18px] border ${
                selectedVariant === 'custom' 
                  ? 'bg-[rgba(138,174,155,0.12)] border-[#8AAE9B]' 
                  : 'border-[rgba(44,45,48,0.1)]'
              }`}
            >
              <span className="w-full font-playfair font-semibold text-base leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]">
                the custom creation
              </span>
              <div className="w-full flex flex-row justify-between items-end">
                <span className="font-poppins font-normal text-xs leading-[18px] uppercase text-[rgba(44,45,48,0.8)]">
                  Delivery in 3 days
                </span>
                <span className="font-alumni-sans font-semibold text-xl leading-6 uppercase text-[#2C2D30]">
                  £1000
                </span>
              </div>
            </button>

            {/* Standard Option */}
            <button
              onClick={() => setSelectedVariant('standard')}
              className={`w-full flex flex-col items-start p-3 gap-[18px] border ${
                selectedVariant === 'standard' 
                  ? 'bg-[rgba(138,174,155,0.12)] border-[#8AAE9B]' 
                  : 'border-[rgba(44,45,48,0.1)]'
              }`}
            >
              <span className="w-full font-playfair font-semibold text-base leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]">
                The Standard System
              </span>
              <div className="w-full flex flex-row justify-between items-end">
                <span className="font-poppins font-normal text-xs leading-[18px] uppercase text-[rgba(44,45,48,0.8)]">
                  Delivery in 3 days
                </span>
                <span className="font-alumni-sans font-semibold text-xl leading-6 uppercase text-[#2C2D30]">
                  £240
                </span>
              </div>
            </button>
          </div>

          {/* Frame 486 - Color Selector */}
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="w-full font-playfair font-semibold text-base leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]">
              Color
            </h3>
            
            {/* Color Swatches - 4x2 grid with smaller images */}
            <div className="w-full grid grid-cols-4 gap-2">
              {colors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => setSelectedColor(color.id)}
                  className={`relative w-full h-[40px] overflow-hidden ${
                    selectedColor === color.id 
                      ? 'ring-2 ring-[#2C2D30] ring-offset-1' 
                      : 'border border-[rgba(44,45,48,0.1)]'
                  }`}
                  title={color.label}
                >
                  <Image
                    src={color.image}
                    alt={color.label}
                    fill
                    className="object-cover"
                    sizes="60px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Frame 489 - Size Selector */}
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="w-full font-playfair font-semibold text-base leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]">
              Size
            </h3>
            
            {/* Size Options */}
            <div className="w-full flex flex-row justify-center items-center gap-1">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex-1 h-9 flex flex-row justify-center items-center p-2.5 border ${
                    selectedSize === size 
                      ? 'bg-[rgba(138,174,155,0.12)] border-[#8AAE9B]' 
                      : 'border-[rgba(44,45,48,0.1)]'
                  }`}
                >
                  <span className={`font-poppins font-normal text-[14px] leading-[21px] tracking-[-0.02em] uppercase ${
                    selectedSize === size ? 'text-[#2C2D30]' : 'text-[rgba(44,45,48,0.7)]'
                  }`}>
                    {size}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Frame 490 - Location Selector */}
          <div className="w-full flex flex-col items-start gap-2">
            <h3 className="w-full font-playfair font-semibold text-base leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]">
              Where is your part?
            </h3>
            
            {/* Dropdown */}
            <div className="w-full h-[38px] flex flex-row justify-between items-center px-4 py-2.5 border border-[rgba(44,45,48,0.1)]">
              <span className="font-poppins font-medium text-xs leading-[18px] tracking-[-0.02em] uppercase text-[rgba(44,45,48,0.3)]">
                Select your part line
              </span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 6.75L9 12.75L15 6.75" stroke="rgba(44, 45, 48, 0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Frame 392 - Done Button */}
        <button
          onClick={handleClose}
          className="w-full h-9 flex flex-row justify-center items-center px-[22px] py-2.5 gap-4 bg-[#8AAE9B] hover:bg-[#7A9E8B] transition-colors"
        >
          <span className="font-poppins font-semibold text-base leading-6 uppercase text-white">
            Done
          </span>
        </button>
      </div>
    </div>
  );
}