import BrandBlock from "./BrandBlock";
import ExploreNow from "./ExploreNow";
import FooterBottom from "./FooterBottom";
import KnowMore from "./KnowMore";

export default function Footer() {
  return (
    <footer className="hidden lg:block w-full bg-[#2C2D30] text-white">
      {/* ===== TOP FOOTER ===== */}
      <div className="max-w-[1440px] mx-auto px-[40px] py-[80px]">
        <div className="grid grid-cols-[1.4fr_auto_1fr_auto_1fr] gap-[48px]">
          
<BrandBlock/>
          {/* Divider */}
          <div className="w-px bg-[#8AAE9B]/20" />

          <ExploreNow />

          {/* Divider */}
          <div className="w-px bg-[#8AAE9B]/20" />

          <KnowMore />
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <FooterBottom />
    </footer>
  );
}
