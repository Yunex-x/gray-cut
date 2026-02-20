'use client';

import Navbar from "../../components/layout/Navbar";
import ProductShowcase from "../../components/sections/products/products/ProductShowcase";
import ProductConfigurator from "../../components/sections/products/products/Cart/ProductConfigurator";
import SystemEngulfs from "../../components/sections/products/SystemEngulfs/SystemEngulfs";
import WearingProcess from "../../components/sections/products/WearingProcess/WearingProcess";
import AfterProtocol from "../../components/sections/products/AfterProtocol/AfterProtocol";
import DeliveryProcess from "../../components/sections/products/DeliveryProcess/DeliveryProcess";
import MobileFooter from "@/app/components/layout/footer/MobileFooter";
import FooterSection from "@/app/components/layout/footer/FooterSection";

export default function Page() {
  return (
    <main className="w-full flex flex-col items-center">
      <Navbar variant="dark" />

      {/* Two-column container */}
      <div className="w-full bg-[#F6F4F1]">
        <div className="max-w-[1440px] 2xl:max-w-none w-full mx-auto flex flex-col lg:flex-row">
          
          {/* LEFT */}
          <div className="w-full lg:w-[1084px] 2xl:w-[calc(100vw-356px)]">
            <ProductShowcase />
            <SystemEngulfs />
            <WearingProcess />
            <AfterProtocol />
            <DeliveryProcess />
          </div>

          {/* RIGHT (Sticky) */}
          <aside className="hidden lg:block lg:w-[356px] flex-shrink-0">
            <div className="lg:sticky lg:top-[40px] lg:py-[120px]">
              <ProductConfigurator />
            </div>
          </aside>

        </div>

        <FooterSection />
        <MobileFooter />
      </div>
    </main>
  );
}