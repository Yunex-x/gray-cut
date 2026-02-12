import HeroSection from "../components/sections/herosection/HeroSection";
import ProtocolsSections from "../components/sections/protocols/ProtocolsSections";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col  bg-[#F6F4F1] items-center">
<HeroSection/>
<ProtocolsSections/>
<Footer/>
<DiagnosisSection/>
<BlueprintSection/>
    </main>
  );
}
