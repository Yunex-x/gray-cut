import { GridGalleryProps } from "@/app/types/gallery";
import Image from "next/image";

export default function GridGallery({
  className = "",
}: GridGalleryProps) {
  return (
    <div
      className={`
        grid grid-cols-1 md:grid-cols-2 gap-5 -mt-5
        max-w-[1124px] mx-auto
         pl-[40px]
        2xl:mx-0 2xl:max-w-none 2xl:w-full 2xl:pl-6 2xl:gap-8
      `}
    >
      {/* Top large */}
      <div className="group col-span-1 md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300 aspect-[1044/755] 2xl:aspect-[1400/1014]">
        <Image
          src="/products/1.webp"
          alt="Gallery top image"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(min-width:1536px) calc(100vw - 356px), 100vw"
          priority
        />
      </div>

      {/* Left */}
      <div className="group bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300 aspect-[512/870] 2xl:aspect-[700/1100]">
        <Image
          src="/products/2.webp"
          alt="Gallery left image"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(min-width:1536px) calc((100vw - 356px) / 2), 100vw"
        />
      </div>

      {/* Right */}
      <div className="group bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300 aspect-[512/870] 2xl:aspect-[700/1100]">
        <Image
          src="/products/3.webp"
          alt="Gallery right image"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(min-width:1536px) calc((100vw - 356px) / 2), 100vw"
        />
      </div>

      {/* Bottom */}
      <div className="group col-span-1 md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden relative hover:shadow-xl transition-shadow duration-300 aspect-[1044/621] 2xl:aspect-[1400/834]">
        <Image
          src="/products/4.webp"
          alt="Gallery bottom image"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(min-width:1536px) calc(100vw - 356px), 100vw"
        />
      </div>
    </div>
  );
}