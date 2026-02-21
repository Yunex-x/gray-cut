'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

interface MobileProductHeroProps {
  heroImage?: string;
  title?: string;
  onConfigureClick: () => void;
  additionalImages?: {
    image1?: string;
    image2?: string;
  };
}

export default function MobileProductHero({
  onConfigureClick,
}: MobileProductHeroProps) {
  return (
    <div className="w-full flex flex-col bg-[#F6F4F1] relative">
      {/* Hero Image with Gradient Overlay */}
      {/* Make this element full viewport width on small screens so the background covers the full right edge.
          Use w-screen centered inside the parent; revert to normal flow on lg+. */}
      <div className="relative left-1/2 -translate-x-1/2 w-screen lg:mx-0 lg:left-0 lg:-translate-x-0 lg:w-full">
        <div className="relative w-full aspect-[375/646] md:aspect-[768/900]">
          {/* Background Image positioned as per design */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0) 55.99%, rgba(0, 0, 0, 0.38) 96.42%), url('/products/1.webp')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Title and CTA Container - Frame 603 */}
            <div 
              className="absolute bottom-8 md:bottom-16 left-1/2 md:left-[80px] -translate-x-1/2 w-[345px] md:w-[500px] max-w-[90%] flex flex-col items-start gap-[20px] md:gap-[24px]"
            >
              {/* Title - The Standard System */}
              <h1 
                className="w-full font-playfair font-normal text-[40px] md:text-[56px] leading-[52px] md:leading-[72px] uppercase text-[#F6F4F1]"
              >
                The Standard System
              </h1>

              {/* Frame 468 - Rating and CTA Container */}
              <div className="flex flex-row items-center gap-[8px]">
                {/* Frame 467 - Rating Container */}
                <div className="flex flex-row items-center gap-[4px]">
                  {/* Star Icon */}
                  <Star className="w-[14px] h-[14px] md:w-4 md:h-4 fill-[#FFFFFF] text-[#FFFFFF]" />

                  {/* Rating Text - 5/5 */}
                  <span className="font-poppins font-semibold text-[14px] md:text-base leading-[21px] md:leading-6 tracking-[-0.02em] uppercase text-[#FFFFFF]">
                    5/5
                  </span>
                </div>

                {/* Reviews Text */}
                <span className="font-poppins font-normal text-[14px] md:text-base leading-[21px] md:leading-6 tracking-[-0.02em] uppercase text-[rgba(255,255,255,0.8)]">
                  based on 240 reviews
                </span>
              </div>

              {/* Frame 370 - Add to Cart Button */}
              <button
                onClick={onConfigureClick}
                className="px-[18px] md:px-6 py-2 md:py-3 bg-[#8AAE9B] hover:bg-[#7A9E8B] transition-colors"
              >
                <span className="font-neue-montreal font-medium text-[14px] md:text-base leading-[17px] md:leading-5 uppercase text-[#F6F4F1]">
                  Add to cart
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Frame 677 - Additional Images Section (keeps normal container alignment) */}
      <div className="w-full px-4 md:px-8 py-6 md:py-12">
        <div className="w-full max-w-[357px] md:max-w-[600px] mx-auto flex flex-row items-center gap-[18px] md:gap-[24px]">
          {/* Frame 495 - First Image */}
          <div className="relative w-full h-[210px] md:h-[350px] bg-white overflow-hidden flex-1">
            <Image
              src='/products/2.webp'
              alt="Product view 1"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 300px"
            />
          </div>

          {/* Frame 672 - Second Image */}
          <div className="relative w-full h-[210px] md:h-[350px] bg-white overflow-hidden flex-1">
            <Image
              src='/products/3.webp'
              alt="Product view 2"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 300px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}