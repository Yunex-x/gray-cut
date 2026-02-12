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
        max-w-[453px]
        mx-auto
        group
        cursor-pointer
      "
    >
      {/* Image */}
      <div
        className="
          w-full
          h-[311px]
          bg-cover
          bg-center
          overflow-hidden
          relative
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

      {/* Content */}
      <div className="px-[24px] pt-[16px] pb-[24px] flex flex-col gap-[16px] transition-all duration-300 group-hover:translate-y-[-5px]">
        {/* Header */}
        <div className="flex items-center gap-[12px]">
          <span
            className={`
              font-neue
              text-[32px]
              leading-[38px]
              uppercase
              transition-all
              duration-300
              ${
                faded
                  ? "text-[rgba(42,42,42,0.5)] group-hover:text-[rgba(42,42,42,0.7)]"
                  : "text-[#2A2A2A] group-hover:text-[#8AAE9B]"
              }
            `}
          >
            {step}
          </span>

          <span className="w-[1px] h-[21px] bg-[#D2D2D2] transition-all duration-300 group-hover:bg-[#8AAE9B] group-hover:w-[2px]" />

          <span
            className="
              font-neue
              text-[32px]
              leading-[38px]
              uppercase
              text-[#2A2A2A]
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
            font-neue
            text-[20px]
            leading-[24px]
            text-[rgba(44,45,48,0.6)]
            transition-all
            duration-300
            group-hover:text-[rgba(44,45,48,0.9)]
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}