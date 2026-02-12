import BlueprintStepCard from "./BlueprintStepCard";

export default function BlueprintSteps() {
  return (
    <section
      className="
        w-full
        max-w-[1360px]
        mx-auto
        mt-[80px]
        px-[16px]
        mb-[8px]
md:mb-[100px]
      "
    >
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-[24px]
        "
      >
        <BlueprintStepCard
          step="01"
          title="Order"
          description="Pick your shade. Packed instantly."
          image="/Rectangle1.webp"
          faded
        />

        <BlueprintStepCard
          step="02"
          title="Ship"
          description="Dispatched from Europe in 24h."
          image="/Rectangle2.webp"
        />

        <BlueprintStepCard
          step="03"
          title="Wear"
          description="Receive in 3 days. Ready to install."
          image="/Rectangle3.webp"
        />
      </div>
    </section>
  );
}
