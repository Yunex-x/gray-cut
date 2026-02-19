import Navbar from "@/app/components/layout/Navbar";
import ProductShowcase from "@/app/components/sections/products/products/ProductShowcase";
import ProductConfigurator from "@/app/components/sections/products/products/ProductConfigurator";
import SystemEngulfs from "@/app/components/sections/products/SystemEngulfs/SystemEngulfs";
import AfterProtocol from "@/app/components/sections/products/AfterProtocol/AfterProtocol";
import WearingProcess from "@/app/components/sections/products/WearingProcess/WearingProcess";
import DeliveryProcess from "@/app/components/sections/products/DeliveryProcess/DeliveryProcess";
import FooterSection from "@/app/components/layout/footer/FooterSection";
import MobileFooter from "@/app/components/layout/footer/MobileFooter";

export default function PrecisionPage() {
  return (
    <main className="w-full flex flex-col items-center">
      <Navbar variant="dark" />

      {/* Two-column container (total 1440px) */}
      <div className="w-full bg-[#F6F4F1]">
        <div className="max-w-[1440px] w-full flex flex-col lg:flex-row">
          {/* LEFT: main content stack (full width on mobile, fixed 1084px on lg+) */}
          <div className="w-full lg:w-[1084px]">
            <ProductShowcase />
            <SystemEngulfs />
            <WearingProcess />
            <AfterProtocol />
            <DeliveryProcess />
          </div>

          {/* RIGHT: ProductConfigurator aside (hidden on small screens, fixed 356px on lg+). NOT sticky. */}
          <aside className="hidden lg:block lg:w-[356px] flex-shrink-0">
            <div className=" lg:py-[120px]">
              <ProductConfigurator />
            </div>
          </aside>
        </div>
      </div>

      <FooterSection />
      <MobileFooter />
    </main>
  );
}