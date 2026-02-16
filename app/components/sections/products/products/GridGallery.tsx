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
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1124px] mx-auto p-10 md:p-10 sm:p-5 ${className}`}>
      {/* Frame 466 - Top large card */}
      <div className="group col-span-1 md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden aspect-[1044/755] relative hover:shadow-xl transition-shadow duration-300">
        <Image 
          src={images?.image146 || '/products/1.webp'} 
          alt="Gallery item 1"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 1044px"
          priority
        />
      </div>

      {/* Frame 495 - Bottom left card */}
      <div className="group col-span-1 bg-white rounded-lg shadow-md overflow-hidden aspect-[512/870] relative hover:shadow-xl transition-shadow duration-300">
        <Image 
          src={images?.image147 || '/products/2.webp'} 
          alt="Gallery item 2"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 512px"
        />
      </div>

      {/* Frame 494 - Bottom middle card */}
      <div className="group col-span-1 bg-white rounded-lg shadow-md overflow-hidden aspect-[512/870] relative hover:shadow-xl transition-shadow duration-300">
        <Image 
          src={images?.image148 || '/products/3.webp'} 
          alt="Gallery item 3"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 512px"
        />
      </div>

      {/* Frame 496 - Bottom wide card */}
      <div className="group col-span-1 md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden aspect-[1044/621] relative hover:shadow-xl transition-shadow duration-300">
        <Image 
          src={images?.image141 || '/products/4.webp'} 
          alt="Gallery item 4"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 1044px"
        />
      </div>
    </div>
  );
}