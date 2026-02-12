import HeroContent from "./HeroContent";
import Navbar from "./Navbar";

export default function HeroSection({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section
      className="
        relative
        w-full
        max-w-[1440px]
        h-[870px]
        lg:h-[870px]
        md:h-[700px]
        sm:h-[600px]
        bg-[#F6F4F1]
        mx-auto
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          bg-[url('/hero.webp')]
        "
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
     <Navbar/>
     <HeroContent/>
      </div>
    </section>
  );
}
