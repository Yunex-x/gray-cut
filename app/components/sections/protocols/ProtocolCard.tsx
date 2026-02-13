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
        <div className="flex flex-col gap-[12px] md:gap-[16px] max-w-full md:max-w-[362px] transform transition-transform duration-500 group-hover:translate-y-[-10px]">
          {/* Title + Price */}
          <div className="flex  justify-center items-center whitespace-nowrap  gap-[149px]">
            <h3
              className="
      font-playfair
      font-semibold
      uppercase
      tracking-[0.02em]
      text-white

      text-[24px]
      md:text-[32px]
      xl:text-[32px]

      leading-[28px]
      md:leading-[23px]
      xl:leading-[38px]

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

      text-[32px]
      md:text-[40px]
      xl:text-[48px]

      leading-[36px]
      md:leading-[48px]
      xl:leading-[48px]

      transition-all
      duration-300
      group-hover:text-[#8AAE9B]
    "
              style={{ fontFamily: "Alumni Sans SC" }}
            >
              {price}
            </span>
          </div>
          {/* Features */}
          <ul className="flex flex-col gap-[4px]">
            {features.map((item, index) => (
              <li
                key={item}
                className="
                  font-normal
                  uppercase
                  text-white/80

                  text-[12px]
                  xl:text-[16px]
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

          {/* CTA */}
          <div className="pt-[8px]">
            <button
              className="
      bg-[#8AAE9B]
      flex items-center justify-center
      uppercase text-white

      px-[16px]
      h-[44px]
      xl:px-[22px]

      md:px-[22px]
      md:h-[54px]
      xl:h-[64px]

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
          </div>
        </div>
      </div>
    </div>
  );
}