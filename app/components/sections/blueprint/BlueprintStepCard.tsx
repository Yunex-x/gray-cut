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
      "
    >
      {/* Image */}
      <div
        className="
          w-full
          h-[311px]
          bg-cover
          bg-center
        "
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Content */}
      <div className="px-[24px] pt-[16px] pb-[24px] flex flex-col gap-[16px]">
        {/* Header */}
        <div className="flex items-center gap-[12px]">
          <span
            className={`
              font-neue
              text-[32px]
              leading-[38px]
              uppercase
              ${
                faded
                  ? "text-[rgba(42,42,42,0.5)]"
                  : "text-[#2A2A2A]"
              }
            `}
          >
            {step}
          </span>

          <span className="w-[1px] h-[21px] bg-[#D2D2D2]" />

          <span
            className="
              font-neue
              text-[32px]
              leading-[38px]
              uppercase
              text-[#2A2A2A]
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
          "
        >
          {description}
        </p>
      </div>
    </div>
  );
}
