import BrandBlock from "./BrandBlock";
import ExploreNow from "./ExploreNow";
import FooterBottom from "./FooterBottom";
import KnowMore from "./KnowMore";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="hidden lg:block w-full bg-[#2C2D30] text-white whitespace-nowrap">
      {/* ===== TOP FOOTER ===== */}
      <div className="w-full mx-auto lg:px-[30px] xl:px-[40px] lg:py-[60px] xl:py-[80px]">
        <div className="grid lg:grid-cols-[1.2fr_auto_0.9fr_auto_0.9fr] xl:grid-cols-[1.4fr_auto_1fr_auto_1fr] lg:gap-[15px] xl:gap-[20px]">

          <BrandBlock />
          {/* Divider */}
          <div className="w-px  bg-[#8AAE9B]/20" />

          <div className="flex items-end">
            <ExploreNow />

          </div>

          {/* Divider */}
          <div className="w-px bg-[#8AAE9B]/20" />
          <div className="flex flex-col justify-end gap-[77px]">
      <SocialLinks />
            <KnowMore />
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <FooterBottom />
    </footer>
  );
}