import { SYSTEM_ENGULFS_DEFAULTS } from '@/app/constants/systemEngulfs';
import { SystemEngulfsProps } from '@/app/types/system-engulfs';
import Image from 'next/image';

export default function SystemEngulfs({
  title = SYSTEM_ENGULFS_DEFAULTS.title,
  description = SYSTEM_ENGULFS_DEFAULTS.description,
  image = SYSTEM_ENGULFS_DEFAULTS.image,
  mobileImage = SYSTEM_ENGULFS_DEFAULTS.mobileImage,
  className = ''
}: SystemEngulfsProps) {
  return (
    <section className={`w-full bg-[#F6F4F1] ${className}`}>
      <div className="max-w-[1124px] 2xl:max-w-none 2xl:mx-0 mx-auto px-4 md:px-8 lg:px-10 py-1">
        
        {/* Text */}
        <div className="w-full flex flex-col gap-1 md:gap-2 mb-8 md:mb-12 lg:mb-14 2xl:mb-20">
          <h2 className="
            w-full font-playfair font-semibold
            text-[32px] md:text-[48px] lg:text-[64px]
            leading-[42px] md:leading-[64px] lg:leading-[85px]
            text-center tracking-[-0.02em] uppercase text-[#2C2D30]
            2xl:text-[72px] 2xl:leading-[92px]
          ">
            {title}
          </h2>

          <p className="
            w-full font-poppins text-sm md:text-base
            leading-5 md:leading-6
            text-center uppercase text-[rgba(44,45,48,0.7)]
            px-4
            2xl:text-[18px] 2xl:leading-7
          ">
            {description}
          </p>
        </div>

        {/* Image */}
        <div className="relative w-full h-[300px] md:h-[450px] lg:h-[621px] 2xl:h-[900px] bg-white overflow-hidden rounded-lg md:rounded-none">
          
          {/* Mobile */}
          <Image
            src={mobileImage}
            alt={title}
            fill
            className="object-cover object-[30%_23%] md:hidden"
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
          />

          {/* Desktop */}
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-[30%_23%] hidden md:block"
            priority
            sizes="(min-width:1536px) calc(100vw - 356px), 100vw"
          />
        </div>
      </div>
    </section>
  );
}