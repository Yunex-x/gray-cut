import ProtocolsGrid from "./ProtocolsGrid";
import SectionHeader from "./SectionHeader";


export default function ProtocolsSections() {
  return (
    <section
      className="
        w-full
        mx-auto
        overflow-hidden
        bg-[#F6F4F1]
      "
    >
      <SectionHeader />
      <ProtocolsGrid />
    </section>
  );
}
