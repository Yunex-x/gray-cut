import BlueprintSection from "../components/sections/blueprint/BlueprintSection";
import ClubCard from "../components/sections/club/ClubCard";
import DiagnosisSection from "../components/sections/Diagnosis/diagnosisSection";
import FeaturesMarquee from "../components/sections/Feature/Features";
import FooterSection from "../components/sections/footer/FooterSection";
import Footer from "../components/sections/footer/MobileFooter";
import HeroSection from "../components/sections/herosection/HeroSection";
import ProtocolsSections from "../components/sections/protocols/ProtocolsSections";
import VerdictSection from "../components/sections/verdict/VerdictSection";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col  bg-[#F6F4F1] items-center">
<HeroSection/>
<ProtocolsSections/>
<DiagnosisSection/>
<BlueprintSection/>
<VerdictSection/>
<Footer/>
    </main>
  );
}
