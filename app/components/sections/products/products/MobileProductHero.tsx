'use client';

import { Star } from 'lucide-react';

interface MobileProductHeroProps {
  heroImage?: string;
  title?: string;
  onConfigureClick: () => void;
}

export default function MobileProductHero({
  heroImage = '/products/heromobile.png',
  title = 'The Standard System',
  onConfigureClick
}: MobileProductHeroProps) {
  return (
    <div className="w-full flex flex-col bg-[#F6F4F1] relative">
      {/* Hero Image with Gradient Overlay */}
      <div className="relative w-full h-[646px] overflow-hidden">
        {/* Background Image positioned as per design */}
        <div 
          className="absolute w-[718px] h-[646px] top-[-40px]"
          style={{
            left: 'calc(50% - 718px/2 + 15.5px)',
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 55.99%, rgba(0, 0, 0, 0.38) 96.42%), url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* Title and CTA Container - Frame 603 */}
          <div 
            className="absolute w-[345px] h-[202px] flex flex-col items-start gap-[20px] p-0"
            style={{
              left: 'calc(50% - 345px/2 - 6px)',
              top: '386px'
            }}
          >
            {/* Title - The Standard System */}
            <h1 
              className="w-[345px] h-[105px] font-playfair font-normal text-[40px] leading-[52px] uppercase text-[#F6F4F1]"
              style={{
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0
              }}
            >
              {title}
            </h1>

            {/* Frame 468 - Rating and CTA Container */}
            <div 
              className="w-[205px] h-[21px] flex flex-row items-center gap-[8px] p-0"
              style={{
                flex: 'none',
                order: 1,
                flexGrow: 0
              }}
            >
              {/* Frame 467 - Rating Container */}
              <div 
                className="w-[43px] h-[21px] flex flex-row items-center gap-[4px] p-0"
                style={{
                  flex: 'none',
                  order: 0,
                  flexGrow: 0
                }}
              >
                {/* Star Icon */}
                <div 
                  className="w-[14px] h-[14px] rounded-[5px]"
                  style={{
                    flex: 'none',
                    order: 0,
                    flexGrow: 0
                  }}
                >
                  <Star className="w-full h-full fill-[#FFFFFF] text-[#FFFFFF]" />
                </div>

                {/* Rating Text - 5/5 */}
                <span 
                  className="w-[25px] h-[21px] font-poppins font-semibold text-[14px] leading-[21px] tracking-[-0.02em] uppercase text-[#FFFFFF]"
                  style={{
                    flex: 'none',
                    order: 1,
                    flexGrow: 0
                  }}
                >
                  5/5
                </span>
              </div>

              {/* Reviews Text */}
              <span 
                className="w-[154px] h-[21px] font-poppins font-normal text-[14px] leading-[21px] tracking-[-0.02em] uppercase text-[rgba(255,255,255,0.8)]"
                style={{
                  flex: 'none',
                  order: 1,
                  flexGrow: 0
                }}
              >
                based on 240 reviews
              </span>
            </div>

            {/* Frame 370 - Add to Cart Button */}
            <button
              onClick={onConfigureClick}
              className="w-[126px] h-[36px] flex flex-row justify-center items-center gap-[8px] bg-[#8AAE9B]"
              style={{
                boxSizing: 'border-box',
                padding: '8px 18px',
                flex: 'none',
                order: 2,
                flexGrow: 0
              }}
            >
              <span 
                className="w-[90px] h-[17px] whitespace-nowrap font-neue-montreal font-medium text-[14px] leading-[17px] text-justify uppercase text-[#F6F4F1]"
                style={{
                  flex: 'none',
                  order: 0,
                  flexGrow: 0
                }}
              >
                Add to cart
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}