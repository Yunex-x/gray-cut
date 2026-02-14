export default function HeroDescription() {
  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden h-full py-[50px] px-[18px] flex flex-col items-start justify-end gap-[20px]">
        {/* Description */}
        <p className="w-[345px] h-[54px] font-poppins font-normal text-[18px] leading-[27px] flex items-end uppercase text-[#F6F4F1]">
          Mass production assumes an average head. We map yours.
        </p>

        {/* CTA Button */}
        <button className="flex flex-row whitespace-nowrap  justify-center items-center px-[8px] py-[8px] gap-[8px] w-[164px] h-[36px] bg-[#8AAE9B]">
          <span className="w-[120px] h-[17px] font-neue font-medium text-[14px] leading-[17px] text-justify uppercase text-[#F6F4F1]">
            VIEW TOUR DATES
          </span>
        </button>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:flex flex-col  items-start gap-[20px] absolute w-[345px] h-[172px] left-[1055px] top-[590px]">
        {/* Description */}
        <p className="w-[345px] h-[108px] font-poppins font-normal text-[24px] leading-[36px] flex items-end uppercase text-[#F6F4F1]">
          Mass production assumes an average head. We map yours.
        </p>

        {/* CTA Button */}
        <button className="flex flex-row whitespace-nowrap justify-center items-center px-[20px] py-[8px] gap-[8px] w-[185px] h-[44px] bg-[#8AAE9B]">
          <span className="w-[120px] h-[17px] font-neue font-medium text-[14px] leading-[17px] text-justify uppercase text-white">
            VIEW TOUR DATES
          </span>
        </button>
      </div>
    </>
  );
}