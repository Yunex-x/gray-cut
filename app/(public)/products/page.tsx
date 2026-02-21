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

  // ✅ Shared Add To Cart Logic (Desktop + Mobile)
  function handleAddToCart(payload: any) {
    console.log("Shared Add To Cart:", payload);
  }

  return (
    <main className="w-full flex flex-col items-center">
      <Navbar variant="dark" />

      <div className="w-full bg-[#F6F4F1]">
        <div className="max-w-[1440px] 2xl:max-w-none w-full mx-auto flex flex-col lg:flex-row pb-40 lg:pb-40">
          
          {/* LEFT */}
          <div className="w-full lg:w-[1084px] 2xl:w-[calc(100vw-356px)]  ">
            <ProductShowcase onAddToCart={handleAddToCart} />
            <SystemEngulfs />
            <WearingProcess />
            <AfterProtocol />
            <DeliveryProcess />
          </div>

          {/* RIGHT */}
          <aside className="hidden lg:block lg:w-[356px] flex-shrink-0">
            <div className="lg:sticky lg:top-20 lg:transform lg:-translate-y-0">
              <div className="lg:py-4 lg:px-3">
                <div className="max-w-[300px]">
                  <ProductConfigurator onAddToCart={handleAddToCart} />
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