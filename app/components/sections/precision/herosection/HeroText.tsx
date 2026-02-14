export default function HeroText() {
  return (
    <>
      {/* Mobile Version */}
      <div className="lg:hidden absolute left-[18px] top-[561px] w-[345px]">
        <h1 className="w-[330px] h-[105px] font-playfair font-normal text-[48px] leading-[52px] uppercase">
          <span className="text-[#F6F4F1]">An End to </span>
          <span className="text-[#8AAE9B]">Compromise.</span>
        </h1>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block absolute  left-[40px] bottom-[90px]">
        <h1 className="w-[867px] h-[224px] font-playfair font-normal text-[128px] leading-[112px] tracking-[-0.01em] uppercase">
          <span className="text-[#F6F4F1]">An End to </span>
          <span className="text-[#8AAE9B]">Compromise.</span>
        </h1>
      </div>
    </>
  );
}