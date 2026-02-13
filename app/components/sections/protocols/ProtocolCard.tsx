type ProtocolCardProps = {
  title: string;
  price: string;
  features: string[];
  cta: string;
  image: string;
};

export default function ProtocolCard({
  title,
  price,
  features,
  cta,
  image,
}: ProtocolCardProps) {
  return (
    <div className="relative w-full h-[580px] md:h-[928px] overflow-hidden group cursor-pointer">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-start transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity duration-500 group-hover:from-black/70 group-hover:via-black/30" />
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/10" />

      {/* Content */}
      <div
        className="
          relative z-10
          h-full
          flex flex-col
          justify-end

          px-[18px]
          pb-[40px]

          md:px-[40px]
          md:pb-[60px]

          lg:px-[80px]
          lg:pb-[80px]
        "
      >
        <div className="flex flex-col gap-[12px] md:gap-[20px] max-w-full md:max-w-[590px] transform transition-transform duration-500 group-hover:translate-y-[-10px]">
          
          {/* Title - Mobile Only */}
          <h3
            className="
              md:hidden
              font-playfair
              font-semibold
              uppercase
              tracking-[-0.02em]
              text-white

              text-[24px]
              leading-[28px]

              transition-all
              duration-300
              group-hover:text-[#8AAE9B]
            "
          >
            {title}
          </h3>

          {/* Title + Price Row - Desktop Only */}
          <div className="hidden md:flex items-center whitespace-nowrap justify-between gap-[16px] lg:gap-[42px] xl:gap-[80px] ">
            <h3
              className="
                font-playfair
                font-semibold
                uppercase
                tracking-[0.02em]
                text-white
                lg:text-[24px]

                text-[32px]
                leading-[43px]

                transition-all
                duration-300
                group-hover:text-[#8AAE9B]
              "
            >
              {title}
            </h3>

            <span
              className="
                font-semibold
                uppercase
                text-white

                text-[40px]
                xl:text-[48px]
                lg:text-[32px]

                leading-[48px]
                xl:leading-[58px]

                transition-all
                duration-300
                group-hover:text-[#8AAE9B]
              "
              style={{ fontFamily: "Alumni Sans SC" }}
            >
              {price}
            </span>
          </div>

          {/* Features / Protocols */}
          <ul className="flex flex-col gap-[8px] md:gap-[10px]">
            {features.map((item, index) => (
              <li
                key={item}
                className="
                  font-normal
                  uppercase
                  text-white/80

                  text-[12px]
                  leading-[18px]

                  md:text-[14px]
                  md:leading-[21px]

                  transition-all
                  duration-300
                  group-hover:text-white
                  group-hover:translate-x-2
                "
                style={{ 
                  fontFamily: "Poppins",
                  transitionDelay: `${index * 50}ms`
                }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* CTA + Price Row - Mobile Only / CTA Button - Desktop */}
          <div className="flex items-center justify-between pt-[8px] md:pt-[16px] gap-[12px]">
            <button
              className="
                bg-[#8AAE9B]
                flex items-center justify-center
                uppercase text-white

                px-[16px]
                h-[44px]

                md:px-[22px]
                md:h-[54px]

                text-[14px]
                md:text-[18px]
                font-semibold

                transition-all
                duration-300
                ease-in-out

                hover:bg-[#7a9d8a]
                hover:scale-110
                hover:shadow-xl
                hover:shadow-[#8AAE9B]/50
                hover:tracking-wider

                active:scale-95
                active:shadow-lg

                cursor-pointer
                whitespace-nowrap
              "
              style={{ fontFamily: "Poppins" }}
            >
              {cta}
            </button>

            {/* Price - Mobile Only */}
            <span
              className="
                md:hidden
                font-semibold
                uppercase
                text-white

                text-[32px]
                leading-[36px]

                transition-all
                duration-300
                group-hover:text-[#8AAE9B]
              "
              style={{ fontFamily: "Alumni Sans SC" }}
            >
              {price}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}