import Navbar from "@/app/components/layout/Navbar";
import ProductShowcase from "@/app/components/sections/products/products/ProductShowcase";
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
      <ProductShowcase />
      <SystemEngulfs />
      <WearingProcess />
      <AfterProtocol />
      <DeliveryProcess />
      <FooterSection />
            <MobileFooter />
    </main>
  );
}