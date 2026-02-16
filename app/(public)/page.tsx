import BlueprintSection from "../components/sections/homepage/blueprint/BlueprintSection";
import ClubCard from "../components/sections/homepage/club/ClubCard";
import FeaturesMarquee from "../components/sections/homepage/Feature/Features";
import FooterSection from "../components/layout/footer/FooterSection";
import MobileFooter from "../components/layout/footer/MobileFooter";
import HeroSection from "../components/sections/homepage/herosection/HeroSection";
import ProtocolsSections from "../components/sections/homepage/protocols/ProtocolsSections";
import VerdictSection from "../components/sections/homepage/verdict/VerdictSection";
import DiagnosisSection from "../components/sections/homepage/Diagnosis/DiagnosisSection";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col  bg-[#F6F4F1] items-center">
      <HeroSection />
      <ProtocolsSections />
      <DiagnosisSection />
      <BlueprintSection />
      <VerdictSection />
      <ClubCard />
      <FeaturesMarquee />
      <FooterSection />
      <MobileFooter />
    </main>
  );
}
