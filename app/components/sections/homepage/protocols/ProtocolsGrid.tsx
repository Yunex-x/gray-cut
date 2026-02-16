import ProtocolCard from "./ProtocolCard";

export default function ProtocolsGrid() {
  return (
    <section
      className="
        w-full
        grid
        grid-cols-1
        lg:grid-cols-2
      "
    >
      <ProtocolCard
        title="The Standard System"
        price="£240"
        cta="Explore Standard"
        image="/home/protocolleft.webp"
        features={[
          "- All-Day Active Grip",
          "- Dispatched in 72 Hours",
          '- 0.06mm "Second Skin" Base',
        ]}
      />

      <ProtocolCard
        title="The Custom Creation"
        price="£1000"
        cta="Explore Custom"
        image="/home/protocolright.webp"
        features={[
          "- A fit that's only yours (10,000 points)",
          "- 60 hours of hand-knotting",
          "- 0.03 mm phantom knit",
        ]}
      />
    </section>
  );
}