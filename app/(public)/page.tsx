import Footer from "../components/footer/footer";
import HeroSection from "../components/sections/herosection/HeroSection";
import ProtocolsSections from "../components/sections/protocols/ProtocolsSections";

export default function HomePage() {
  return (
    <main className="w-full flex flex-col items-center">
<HeroSection/>
<ProtocolsSections/>
<Footer/>
    </main>
  );
}
