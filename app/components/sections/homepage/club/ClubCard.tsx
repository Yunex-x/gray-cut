import Image from "next/image";
import ClubImage from "./ClubImage";
import ClubContent from "./ClubContent";
import Clubheader from "./clubheader";

export default function ClubSection() {
  return (
    <section className="w-full bg-[#2C2D30] relative overflow-hidden">
     <Clubheader/>
      {/* Mobile Layout */}
      <div className="md:hidden w-full relative min-h-[702px]">
        {/* Background Blur Effect - Mobile */}
        <div
          className="
            absolute
            w-full
            h-[272px]
            left-0
            top-0
            z-20
            opacity-[0.87]
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
              className="object-contain"
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
                  <path d="M10 0.3125L10.625 9.375L19.6875 10L10.625 10.625L10 19.6875L9.375 10.625L0.3125 10L9.375 9.375L10 0.3125Z" fill="#FDDFB1" />
                  <path d="M5.625 5.625L10 9.55937L17.5 2.5L10.4406 10L14.375 14.375L10 10.4406L2.5 17.5L9.55937 10L5.625 5.625Z" fill="#C9B8A7" />
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
                  <path d="M10 0.3125L10.625 9.375L19.6875 10L10.625 10.625L10 19.6875L9.375 10.625L0.3125 10L9.375 9.375L10 0.3125Z" fill="#FDDFB1" />
                  <path d="M5.625 5.625L10 9.55937L17.5 2.5L10.4406 10L14.375 14.375L10 10.4406L2.5 17.5L9.55937 10L5.625 5.625Z" fill="#C9B8A7" />
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
                  <path d="M10 0.3125L10.625 9.375L19.6875 10L10.625 10.625L10 19.6875L9.375 10.625L0.3125 10L9.375 9.375L10 0.3125Z" fill="#FDDFB1" />
                  <path d="M5.625 5.625L10 9.55937L17.5 2.5L10.4406 10L14.375 14.375L10 10.4406L2.5 17.5L9.55937 10L5.625 5.625Z" fill="#C9B8A7" />
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





      {/* Desktop Layout - Flex Wrapper */}
      <div className="hidden md:flex w-full relative overflow-hidden">
        {/* Background Blur Effect - Desktop */}
        <div
          className="
      absolute
      w-[730px]
      xl:w-[730px]
      lg:w-[530px]
      md:w-[450px]
2xl:w-300
      h-[492px]
      xl:h-[462px]
      2xl:h-[580px]
      lg:h-[342px]
      md:h-[282px]
      mix-blend-plus-lighter
      pointer-events-none
      z-20
    "
          style={{
            backgroundImage: "url('/Sunshine.png')",
            backgroundSize: "cover",
            transform: "translateY(-39px)"
          }}
        />

        {/* Left Column - Image Component */}
        <div className="flex-1 relative z-10">
          <ClubImage />
        </div>

        {/* Right Column - Content Component */}
        <div className="flex-1 relative z-10">
          <ClubContent />
        </div>
      </div>    </section>
  );
}