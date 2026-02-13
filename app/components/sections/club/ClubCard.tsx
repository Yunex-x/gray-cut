import Image from "next/image";

export default function ClubSection() {
  return (
    <section className="w-full bg-[#2C2D30] relative overflow-hidden">
      {/* Mobile Layout */}
      <div className="lg:hidden w-full relative min-h-[702px]">
        {/* Background Blur Effect - Mobile */}
        <div
          className="
            absolute
            w-full
            h-[202px]
            left-0
            top-0
            opacity-[0.57]
            blur-[19.5px]
            mix-blend-plus-lighter
            pointer-events-none
          "
          style={{
            backgroundImage: "url('/Sunshine.png')",
            backgroundSize: "cover",
          }}
        />

        {/* Mobile Content */}
        <div className="relative flex flex-col items-start px-[18px] py-[48px] gap-[24px]">
          {/* Image */}
          <div className="w-full h-[231px] relative">
            <Image
              src="/club.webp"
              alt="Club member"
              fill
              className="object-cover"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-[16px] w-full">
            {/* Label */}
            <div className="flex justify-start">
              <p className="font-poppins text-[12px] leading-[18px] tracking-[0.16em] uppercase text-white">
                THE CLUB
              </p>
            </div>

            {/* Main Title */}
            <h2 className="font-playfair font-normal text-[24px] leading-[32px] uppercase text-white w-full">
              never think about your hair again
            </h2>

            {/* Description */}
            <p className="font-poppins text-[14px] leading-[21px] uppercase text-white/70 max-w-[319px]">
              We don't just sell systems. We manage your image. Join the inner
              circle and automate your maintenance
            </p>
          </div>

          {/* Features List */}
          <div className="flex flex-col gap-[12px] w-full">
            {/* Feature 1 */}
            <div className="flex items-center gap-[8px]">
              <div className="w-[20px] h-[20px] relative flex-shrink-0">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0.3125L10.625 9.375L19.6875 10L10.625 10.625L10 19.6875L9.375 10.625L0.3125 10L9.375 9.375L10 0.3125Z" fill="#FDDFB1"/>
<path d="M5.625 5.625L10 9.55937L17.5 2.5L10.4406 10L14.375 14.375L10 10.4406L2.5 17.5L9.55937 10L5.625 5.625Z" fill="#C9B8A7"/>
</svg>
              </div>
              <span className="font-poppins text-[16px] leading-[24px] text-white/89">
                The monthly reset
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-[8px]">
              <div className="w-[20px] h-[20px] relative flex-shrink-0">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0.3125L10.625 9.375L19.6875 10L10.625 10.625L10 19.6875L9.375 10.625L0.3125 10L9.375 9.375L10 0.3125Z" fill="#FDDFB1"/>
<path d="M5.625 5.625L10 9.55937L17.5 2.5L10.4406 10L14.375 14.375L10 10.4406L2.5 17.5L9.55937 10L5.625 5.625Z" fill="#C9B8A7"/>
</svg>
              </div>
              <span className="font-poppins text-[16px] leading-[24px] text-white/89">
                Priority Access
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-[8px]">
              <div className="w-[20px] h-[20px] relative flex-shrink-0">
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 0.3125L10.625 9.375L19.6875 10L10.625 10.625L10 19.6875L9.375 10.625L0.3125 10L9.375 9.375L10 0.3125Z" fill="#FDDFB1"/>
<path d="M5.625 5.625L10 9.55937L17.5 2.5L10.4406 10L14.375 14.375L10 10.4406L2.5 17.5L9.55937 10L5.625 5.625Z" fill="#C9B8A7"/>
</svg>
              </div>
              <span className="font-poppins text-[16px] leading-[24px] text-white/89">
                Insured appearance
              </span>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col gap-[24px] w-auto">
            <button
              className="
                w-[197px]
                h-[36px]
                border
                border-[#C9B8A7]
                flex
                items-center
                justify-center
                
                font-poppins
                font-medium
                text-[14px]
                leading-[21px]
                uppercase
                text-[#C9B8A7]
                
                transition-all
                duration-300
                ease-in-out
                
                hover:bg-[#C9B8A7]
                hover:text-[#2C2D30]
                hover:scale-105
                
                active:scale-95
              "
            >
              Discover membership
            </button>

            <p className="font-poppins text-[14px] leading-[21px] text-white/70 max-w-[246px]">
              Exclusive to custom system owners
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block w-full max-w-[1440px] mx-auto min-h-[749px] relative">
        {/* Background Blur Effect - Desktop */}
        <div
          className="
            absolute
            w-[679px]
            h-[679px]
            left-[8px]
            top-[-39px]
            opacity-[0.57]
            blur-[19.5px]
            mix-blend-plus-lighter
            pointer-events-none
          "
          style={{
            backgroundImage: "url('/Sunshine.png')",
            backgroundSize: "cover",
          }}
        />

        {/* Main Image */}
        <div className="absolute left-[40px] top-1/2 -translate-y-1/2 w-[575px] h-[373px]">
          <Image
            src="/club.webp"
            alt="Club member"
            width={575}
            height={373}
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="absolute left-[710px] top-1/2 -translate-y-1/2 w-[640px] flex flex-col">
          {/* Subtitle */}
          <p
            className="
              font-poppins
              font-normal
              text-[16px]
              leading-[24px]
              uppercase
              text-white/70
              mb-[16px]
            "
          >
            The peace of mind protocol
          </p>

          {/* Main Title */}
          <h2
            className="
              font-playfair
              font-semibold
              text-[64px]
              leading-[85px]
              tracking-[-0.02em]
              uppercase
              text-white
              mb-[32px]
              max-w-[640px]
            "
          >
            never think about your hair again
          </h2>

          {/* Description */}
          <p
            className="
              font-poppins
              font-normal
              text-[16px]
              leading-[24px]
              text-white/70
              max-w-[428px]
              mb-[32px]
            "
          >
            We don't just sell systems. We manage your image. Join the inner
            circle and automate your maintenance
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-[18px] mb-[48px]">
            {/* Feature 1 */}
            <div className="flex items-center gap-[8px]">
              <div className="w-[27px] h-[27px] relative flex-shrink-0">
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0781 0L13.9219 12.2344L26.1562 13.0781L13.9219 13.9219L13.0781 26.1562L12.2344 13.9219L0 13.0781L12.2344 12.2344L13.0781 0Z" fill="#FDDFB1"/>
<path d="M7.17188 7.17188L13.0781 12.4833L23.2031 2.95312L13.673 13.0781L18.9844 18.9844L13.0781 13.673L2.95312 23.2031L12.4833 13.0781L7.17188 7.17188Z" fill="#C9B8A7"/>
</svg>
              </div>
              <span className="font-poppins text-[24px] leading-[36px] text-white/89">
                The monthly reset
              </span>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-[8px]">
              <div className="w-[27px] h-[27px] relative flex-shrink-0">
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0781 0L13.9219 12.2344L26.1562 13.0781L13.9219 13.9219L13.0781 26.1562L12.2344 13.9219L0 13.0781L12.2344 12.2344L13.0781 0Z" fill="#FDDFB1"/>
<path d="M7.17188 7.17188L13.0781 12.4833L23.2031 2.95312L13.673 13.0781L18.9844 18.9844L13.0781 13.673L2.95312 23.2031L12.4833 13.0781L7.17188 7.17188Z" fill="#C9B8A7"/>
</svg>
              </div>
              <span className="font-poppins text-[24px] leading-[36px] text-white/89">
                Priority Access
              </span>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-[8px]">
              <div className="w-[27px] h-[27px] relative flex-shrink-0">
<svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0781 0L13.9219 12.2344L26.1562 13.0781L13.9219 13.9219L13.0781 26.1562L12.2344 13.9219L0 13.0781L12.2344 12.2344L13.0781 0Z" fill="#FDDFB1"/>
<path d="M7.17188 7.17188L13.0781 12.4833L23.2031 2.95312L13.673 13.0781L18.9844 18.9844L13.0781 13.673L2.95312 23.2031L12.4833 13.0781L7.17188 7.17188Z" fill="#C9B8A7"/>
</svg>
              </div>
              <span className="font-poppins text-[24px] leading-[36px] text-white/89">
                Insured appearance
              </span>
            </div>
          </div>

          {/* CTA Button and Note */}
          <div className="flex flex-col gap-[12px]">
            <button
              className="
                w-[365px]
                h-[44px]
                border
                border-[#C9B8A7]
                flex
                items-center
                justify-center
                
                font-poppins
                font-medium
                text-[14px]
                leading-[21px]
                uppercase
                text-[#C9B8A7]
                
                transition-all
                duration-300
                ease-in-out
                
                hover:bg-[#C9B8A7]
                hover:text-[#2C2D30]
                hover:scale-105
                hover:shadow-lg
                hover:shadow-[#C9B8A7]/50
                
                active:scale-95
                active:shadow-md
              "
            >
              Discover membership
            </button>

            <p className="font-poppins text-[14px] leading-[21px] text-white/70">
              Exclusive to custom system owners
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}