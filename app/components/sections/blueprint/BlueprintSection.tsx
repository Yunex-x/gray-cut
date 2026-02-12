import BlueprintHeader from "./BlueprintHeader";
import BlueprintSteps from "./BlueprintSteps";
import SectionDivider from "./SectionDivider";

export default function BlueprintSection() {
  return (
    <section className="bg-[#F6F4F1] ">
        <SectionDivider/>
        <BlueprintHeader/>
        <BlueprintSteps/>
    </section>
  );
}
