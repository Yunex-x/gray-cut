export default function ClubContent() {
  return (
    <div className="relative flex flex-col justify-center lg:pl-[30px] xl:pl-[50px] py-[60px] lg:py-[80px] pr-[30px] lg:pr-[40px] xl:pr-[60px]">
      {/* Subtitle */}
      <p
        className="
          font-poppins
          font-normal
          text-[14px]
          lg:text-[16px]
          leading-[21px]
          lg:leading-[24px]
          uppercase
          text-white/70
          mb-[12px]
          lg:mb-[16px]
        "
      >
        The peace of mind protocol
      </p>

      {/* Main Title */}
      <h2
        className="
          font-playfair
          font-semibold
          text-[32px]
          lg:text-[40px]
          xl:text-[56px]
          leading-[40px]
          lg:leading-[50px]
          xl:leading-[70px]
          tracking-[-0.02em]
          uppercase
          text-white
          mb-[20px]
          lg:mb-[28px]
          xl:mb-[32px]
        "
      >
        never think about your hair again
      </h2>

      {/* Description */}
      <p
        className="
          font-poppins
          font-normal
          text-[14px]
          lg:text-[15px]
          xl:text-[16px]
          leading-[21px]
          lg:leading-[23px]
          xl:leading-[24px]
          text-white/70
          max-w-[400px]
          mb-[24px]
          lg:mb-[28px]
          xl:mb-[32px]
        "
      >
        We don't just sell systems. We manage your image. Join the inner
        circle and automate your maintenance
      </p>

      {/* Features List */}
      <div className="flex flex-col gap-[14px] lg:gap-[16px] xl:gap-[18px] mb-[32px] lg:mb-[40px] xl:mb-[48px]">
        {/* Feature 1 */}
        <div className="flex items-center gap-[8px]">
          <div className="w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] xl:w-[27px] xl:h-[27px] relative flex-shrink-0">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0781 0L13.9219 12.2344L26.1562 13.0781L13.9219 13.9219L13.0781 26.1562L12.2344 13.9219L0 13.0781L12.2344 12.2344L13.0781 0Z" fill="#FDDFB1"/>
              <path d="M7.17188 7.17188L13.0781 12.4833L23.2031 2.95312L13.673 13.0781L18.9844 18.9844L13.0781 13.673L2.95312 23.2031L12.4833 13.0781L7.17188 7.17188Z" fill="#C9B8A7"/>
            </svg>
          </div>
          <span className="font-poppins text-[16px] lg:text-[18px] xl:text-[22px] leading-[24px] lg:leading-[28px] xl:leading-[34px] text-white/89">
            The monthly reset
          </span>
        </div>

        {/* Feature 2 */}
        <div className="flex items-center gap-[8px]">
          <div className="w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] xl:w-[27px] xl:h-[27px] relative flex-shrink-0">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0781 0L13.9219 12.2344L26.1562 13.0781L13.9219 13.9219L13.0781 26.1562L12.2344 13.9219L0 13.0781L12.2344 12.2344L13.0781 0Z" fill="#FDDFB1"/>
              <path d="M7.17188 7.17188L13.0781 12.4833L23.2031 2.95312L13.673 13.0781L18.9844 18.9844L13.0781 13.673L2.95312 23.2031L12.4833 13.0781L7.17188 7.17188Z" fill="#C9B8A7"/>
            </svg>
          </div>
          <span className="font-poppins text-[16px] lg:text-[18px] xl:text-[22px] leading-[24px] lg:leading-[28px] xl:leading-[34px] text-white/89">
            Priority Access
          </span>
        </div>

        {/* Feature 3 */}
        <div className="flex items-center gap-[8px]">
          <div className="w-[22px] h-[22px] lg:w-[24px] lg:h-[24px] xl:w-[27px] xl:h-[27px] relative flex-shrink-0">
            <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.0781 0L13.9219 12.2344L26.1562 13.0781L13.9219 13.9219L13.0781 26.1562L12.2344 13.9219L0 13.0781L12.2344 12.2344L13.0781 0Z" fill="#FDDFB1"/>
              <path d="M7.17188 7.17188L13.0781 12.4833L23.2031 2.95312L13.673 13.0781L18.9844 18.9844L13.0781 13.673L2.95312 23.2031L12.4833 13.0781L7.17188 7.17188Z" fill="#C9B8A7"/>
            </svg>
          </div>
          <span className="font-poppins text-[16px] lg:text-[18px] xl:text-[22px] leading-[24px] lg:leading-[28px] xl:leading-[34px] text-white/89">
            Insured appearance
          </span>
        </div>
      </div>

      {/* CTA Button and Note */}
      <div className="flex flex-col gap-[10px] lg:gap-[12px]">
        <button
          className="
            w-full
            max-w-[320px]
            lg:max-w-[340px]
            xl:max-w-[365px]
            h-[40px]
            lg:h-[42px]
            xl:h-[44px]
            border
            border-[#C9B8A7]
            flex
            items-center
            justify-center
            
            font-poppins
            font-medium
            text-[13px]
            lg:text-[14px]
            leading-[20px]
            lg:leading-[21px]
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

        <p className="font-poppins text-[13px] lg:text-[14px] leading-[20px] lg:leading-[21px] text-white/70">
          Exclusive to custom system owners
        </p>
      </div>
    </div>
  );
}