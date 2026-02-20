import Image from 'next/image';

interface GridGalleryProps {
  images?: {
    image146?: string;
    image147?: string;
    image148?: string;
    image141?: string;
  };
  className?: string;
}

export default function GridGallery({ 
  images,
  className = ''
}: GridGalleryProps) {
  return (
    <div
      className={`
        grid grid-cols-1 md:grid-cols-2 gap-5
        max-w-[1124px] mx-auto
        p-6 md:p-10 sm:p-5
        2xl:mx-0 2xl:max-w-none 2xl:w-full 2xl:pl-6 2xl:gap-8
        ${className}
      `}
    >
      {/* Top large card - spans full gallery width */}
      <div className="group col-span-1 md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300 aspect-[1044/755] 2xl:aspect-[1400/1014]">
        <Image 
          src={images?.image146 || '/products/1.webp'} 
          alt="Gallery item 1"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          // At 2xl the left column width is calc(100vw - 356px) so request that width
          sizes="(min-width:1536px) calc(100vw - 356px), 100vw"
          priority
        />
      </div>

      {/* Left card */}
      <div className="group col-span-1 bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300 aspect-[512/870] 2xl:aspect-[700/1100]">
        <Image 
          src={images?.image147 || '/products/2.webp'} 
          alt="Gallery item 2"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          // half of the left column width on 2xl
          sizes="(min-width:1536px) calc((100vw - 356px) / 2), 100vw"
        />
      </div>

      {/* Right card */}
      <div className="group col-span-1 bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300 aspect-[512/870] 2xl:aspect-[700/1100]">
        <Image 
          src={images?.image148 || '/products/3.webp'} 
          alt="Gallery item 3"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(min-width:1536px) calc((100vw - 356px) / 2), 100vw"
        />
      </div>

      {/* Bottom wide card */}
      <div className="group col-span-1 md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300 aspect-[1044/621] 2xl:aspect-[1400/834]">
        <Image 
          src={images?.image141 || '/products/4.webp'} 
          alt="Gallery item 4"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(min-width:1536px) calc(100vw - 356px), 100vw"
        />
      </div>
    </div>
  );
}