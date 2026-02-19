'use client';

import { useState } from 'react';
import GridGallery from './GridGallery';
import MobileProductHero from './MobileProductHero';
import MobileProductModal from './MobileProductModal';

interface ProductShowcaseProps {
  images?: {
    image146?: string;
    image147?: string;
    image148?: string;
    image141?: string;
  };
  className?: string;
}

export default function ProductShowcase({ images, className = '' }: ProductShowcaseProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfigureClick = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Mobile Version - Only visible on mobile/tablet (below lg) */}
      <div className="lg:hidden w-full">
        <MobileProductHero 
          heroImage={images?.image146 || '/products/1.webp'}
          title="The Standard System"
          onConfigureClick={handleConfigureClick}
          additionalImages={{
            image1: images?.image147 || '/products/2.webp',
            image2: images?.image148 || '/products/3.webp'
          }}
        />
      </div>

      {/* Desktop Version - Only visible on desktop (lg and above) */}
      <section className={`hidden lg:block w-full bg-[#F6F4F1] ${className}`}>
        <div className="max-w-[1440px] px-[40px] py-[118px]">
          <div className="flex flex-col lg:flex-row gap-[20px] items-start">
            {/* Gallery Grid - Main Content */}
            <div className="w-full">
              <GridGallery images={images} className="p-0 max-w-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Modal */}
      <MobileProductModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}