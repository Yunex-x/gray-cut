import BlueprintStepCard from "./BlueprintStepCard";

export default function BlueprintSteps() {
  return (
    <section
      className="
        w-full
        mt-[40px]
        lg:mt-[10px]
        px-[18px]
        md:px-[40px]
        mb-[8px]
        md:mb-[20px]
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