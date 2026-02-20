import { BlueprintStepCardProps } from "@/app/types/blueprint";

export default function BlueprintStepCard({
  step,
  title,
  description,
  image,
  faded = false,
}: BlueprintStepCardProps) {
  return (
    <div
      className="
        bg-[#F6F4F1]
        w-full
        
        border-x
        border-[#E4DACC]
        md:border-x-0
        
        group
        cursor-pointer
        items-center
        flex
        flex-col
      "
    >
      {/* Content - Always on top for mobile, bottom for desktop */}
      <div className="
        px-[19px] 
        pt-[19px] 
        pb-[19px]
        md:px-[24px] 
        md:pt-[16px]
        md:pb-[24px]
        xl:px-[40px]
        xl:pt-[24px]
        xl:pb-[32px]
        
        flex flex-col 
        gap-[19px]
        md:gap-[16px]
        xl:gap-[24px]
        
        order-1
        md:order-2
        
        transition-all 
        duration-300 
        group-hover:translate-y-[-5px]
      ">
        {/* Header */}
        <div className="flex items-center gap-[9px] md:gap-[12px] xl:gap-[16px]">
          <span
            className={`
              font-neue
              text-[16px]
              leading-[19px]
              md:text-[32px]
              xl:text-[42px]
              md:leading-[38px]
              xl:leading-[48px]
              uppercase
              font-medium
              transition-all
              duration-300
              ${
                faded
                  ? "text-[rgba(42,42,42,0.5)] group-hover:text-[rgba(42,42,42,0.7)]"
                  : "text-[rgba(42,42,42,0.5)] group-hover:text-[#8AAE9B]"
              }
            `}
          >
            {step}
          </span>

          <span className="w-[1px] h-[17px] md:h-[21px] xl:h-[28px] bg-[#D2D2D2] transition-all duration-300 group-hover:bg-[#8AAE9B] group-hover:w-[2px]" />

          <span
            className="
              font-neue
              text-[16px]
              leading-[19px]
              md:text-[32px]
              xl:text-[42px]
              md:leading-[38px]
              xl:leading-[48px]
              uppercase
              font-medium
              text-[rgba(42,42,42,0.5)]
              transition-all
              duration-300
              group-hover:text-[#8AAE9B]
            "
          >
            {title}
          </span>
        </div>

        {/* Description */}
        <p
          className="
            font-poppins
            text-[24px]
            leading-[140%]
            md:text-[20px]
            xl:text-[26px]
            md:leading-[28px]
            xl:leading-[36px]
            text-[#2C2D30]
            md:text-[rgba(44,45,48,0.6)]
            uppercase
            font-medium
            md:font-normal
            transition-all
            duration-300
            group-hover:text-[rgba(44,45,48,0.9)]
          "
        >
          {description}
        </p>
      </div>

      {/* Image */}
      <div
        className="
          w-[321px]
          h-[177px]
          md:w-[220px]
          md:h-[198px]
          lg:h-[280px]
          lg:w-[300px]
          xl:w-[400px]
          xl:h-[330px]
          2xl:w-[600px]
          2xl:h-[500px]
       
          overflow-hidden
          relative
          mx-auto
          order-2
          md:order-1
        "
      >
        <div
          className="
            w-full
            h-full
            bg-cover

            transition-all
            duration-700
            ease-out
            group-hover:scale-110
            group-hover:brightness-110
          "
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
    </div>
  );
}