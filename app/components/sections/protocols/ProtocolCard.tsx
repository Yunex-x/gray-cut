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
    <div className="relative w-[719px] h-[928px]  overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div
        className="
          relative z-10
          h-full
          flex flex-col
          justify-end

          px-[80px]
          pb-[80px]

          
        "
      >
        <div className="flex flex-col gap-[16px] max-w-[362px]">
          {/* Title */}
          <h3
            className="
              font-playfair
              font-semibold
              uppercase
              tracking-[-0.02em]
              text-white

              text-[32px]
              leading-[43px]

              
            "
          >
            {title}
          </h3>

          {/* Features */}
          <ul className="flex flex-col gap-[4px]">
            {features.map((item) => (
              <li
                key={item}
                className="
                  font-normal
                  uppercase
                  text-white/80

                  text-[14px]
                  leading-[21px]

                 
                "
                style={{ fontFamily: "Poppins" }}
              >
                {item}
              </li>
            ))}
          </ul>

          {/* CTA + Price */}
          <div className="flex items-center justify-between pt-[8px]">
            <button
              className="
                bg-[#8AAE9B]
                flex items-center justify-center
                uppercase text-white

                px-[22px]
                h-[54px]

                text-[18px]
                font-semibold

                
              "
              style={{ fontFamily: "Poppins" }}
            >
              {cta}
            </button>

            <span
              className="
                font-semibold
                uppercase
                text-white

                text-[48px]
                leading-[58px]

              
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
