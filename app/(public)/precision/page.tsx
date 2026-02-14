import HeroSection from "@/app/components/sections/precision/herosection/HeroSection";
import ProcessSection from "@/app/components/sections/precision/process/ProcessSection";
import ScanSection from "@/app/components/sections/precision/scan/ScanSection";

export default function PrecisionPage() {
  return (
    <main className="w-full flex flex-col  bg-[#F6F4F1] items-center">
   <HeroSection/>
   <ScanSection/>
   <ProcessSection/>
   
    </main>
  );
}
