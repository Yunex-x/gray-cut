import BrandBlock from "./BrandBlock";
import ExploreNow from "./ExploreNow";
import FooterBottom from "./FooterBottom";
import KnowMore from "./KnowMore";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="hidden lg:block w-full bg-[#2C2D30] text-white whitespace-nowrap">
      {/* ===== TOP FOOTER ===== */}
      <div className="w-full mx-auto px-[40px] py-[80px]">
        <div className="grid grid-cols-[1.4fr_auto_1fr_auto_1fr] gap-[20px]">

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
