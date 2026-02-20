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
        {/* Ensure parent has bottom padding so sticky stops before footer */}
        <div className="max-w-[1440px] 2xl:max-w-none w-full mx-auto flex flex-col lg:flex-row pb-40 lg:pb-40">
          
          {/* LEFT */}
          <div className="w-full lg:w-[1084px] 2xl:w-[calc(100vw-356px)] pt-8 lg:pt-12">
            <ProductShowcase />
            <SystemEngulfs />
            <WearingProcess />
            <AfterProtocol />
            <DeliveryProcess />
          </div>

          {/* RIGHT (Sticky) - no inner scrolling */}
          <aside className="hidden lg:block lg:w-[356px] flex-shrink-0">
            {/* Keep a sticky container but DO NOT constrain it with overflow-auto/maxHeight.
                This lets the page scroll (no inner scroll). The AddToCart inside the configurator
                will be sticky-bottom so it remains visible.
            */}
            <div className="lg:sticky lg:top-20 lg:transform lg:-translate-y-0">
              <div className="lg:py-4 lg:px-3">
                <div className="max-w-[300px]">
                  <ProductConfigurator />
                </div>
              </div>
            </div>
          </aside>

        </div>

        <FooterSection />
        <MobileFooter />
      </div>
    </main>
  );
}