'use client';

import { useState } from 'react';
import GridGallery from './GridGallery';
import MobileProductHero from './MobileProductHero';
import MobileProductModal from './Cart/MobileProductModal';

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

  // Map images to GalleryImageSet shape
  const galleryImages = {
    top: images?.image146 || '/products/1.webp',
    left: images?.image147 || '/products/2.webp',
    right: images?.image148 || '/products/3.webp',
    bottom: images?.image141 || undefined,
  };

  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden w-full">
        <MobileProductHero
          heroImage={galleryImages.top}
          title="The Standard System"
          onConfigureClick={handleConfigureClick}
          additionalImages={{
            image1: galleryImages.left,
            image2: galleryImages.right
          }}
        />
      </div>

      {/* Desktop / wide */}
      <section className={`hidden lg:block w-full bg-[#F6F4F1] ${className}`}>
        <div className="w-full py-[118px]">
          <div className="w-full flex justify-end">
            {/* Keep a centered max width normally, but allow expansion on 2xl (2xl:max-w-none).
                We remove the extra right padding at 2xl so the left column's calc width is honored. */}
            <div className="w-full max-w-[1440px] 2xl:max-w-none pr-[40px] 2xl:pr-0">
              <div className="flex flex-col lg:flex-row gap-[20px] items-start">
                {/* Gallery Grid - this will expand to fill the left column (which is calc(100vw-356px) on 2xl) */}
                <div className="w-full">
                  <GridGallery images={galleryImages} className="p-0 max-w-none" />
                </div>
              </div>
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