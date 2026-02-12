import BlueprintStepCard from "./BlueprintStepCard";

export default function BlueprintSteps() {
  return (
    <section
      className="
        w-full
        max-w-[357px]
        md:max-w-[1360px]
        mx-auto
        mt-[40px]
        md:mt-[80px]
        px-0
        md:px-[16px]
        mb-[8px]
        md:mb-[100px]
      "
    >
      <div
        className="
          flex
          flex-col
          md:grid
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
          faded
        />

        <BlueprintStepCard
          step="03"
          title="Wear"
          description="Receive in 3 days. Ready to install."
          image="/Rectangle3.webp"
          faded
        />
      </div>
    </section>
  );
}