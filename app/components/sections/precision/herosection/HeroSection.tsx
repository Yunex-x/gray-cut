import Navbar from "../../../layout/Navbar";
import HeroDescription from "./HeroDescription";
import HeroText from "./HeroText";

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
          bg-blend-darken
          bg-black/30
          bg-no-repeat
          md:bg-[url('/precision/hero.webp')]
          bg-[url('/precision/heromobile.webp')]

        "
      />

      {/* Content */}
      <div className="relative z-10 w-full h-full">
        <Navbar />
        <HeroText />
        <HeroDescription />
      </div>
    </section>
  );
}
