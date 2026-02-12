type Props = {
  step: string;
  title: string;
  description: string;
  image: string;
  faded?: boolean;
};

export default function BlueprintStepCard({
  step,
  title,
  description,
  image,
  faded = false,
}: Props) {
  return (
    <div
      className="
        bg-[#F6F4F1]
        w-full
        max-w-[357px]
        md:max-w-[453px]
        mx-auto
        
        border-x
        border-[#E4DACC]
        md:border-x-0
        
        group
        cursor-pointer
        
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
        
        flex flex-col 
        gap-[19px]
        md:gap-[16px]
        
        order-1
        md:order-2
        
        transition-all 
        duration-300 
        group-hover:translate-y-[-5px]
      ">
        {/* Header */}
        <div className="flex items-center gap-[9px] md:gap-[12px]">
          <span
            className={`
              font-neue
              text-[16px]
              leading-[19px]
              md:text-[32px]
              md:leading-[38px]
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

          <span className="w-[1px] h-[17px] md:h-[21px] bg-[#D2D2D2] transition-all duration-300 group-hover:bg-[#8AAE9B] group-hover:w-[2px]" />

          <span
            className="
              font-neue
              text-[16px]
              leading-[19px]
              md:text-[32px]
              md:leading-[38px]
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
            md:leading-[24px]
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
          w-full
          h-[177px]
          md:h-[311px]
          bg-cover
          bg-center
          overflow-hidden
          relative
          
          order-2
          md:order-1
        "
      >
        <div
          className="
            w-full
            h-full
            bg-cover
            bg-center
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