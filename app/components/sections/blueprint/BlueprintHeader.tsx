export default function BlueprintHeader() {
  return (
    <section
      className="
        w-full
        flex
        flex-col
        items-center
        text-center
        mt-[56px]
        md:mt-[58px]
        gap-[16px]
        mb-[24px]
        md:mb-[78px]
      "
    >
      {/* Title */}
      <h2
        className="
          font-playfair
          uppercase
          tracking-[-0.02em]
          text-[#2C2D30]

          text-[32px]
          leading-[40px]

          md:text-[64px]
          md:leading-[85px]
        "
      >
        THE BLUEPRINT
      </h2>

      {/* Subtitle */}
      <p
        className="
          font-poppins
          uppercase
          text-[rgba(44,45,48,0.7)]

          text-[14px]
          leading-[21px]

          md:text-[16px]
          md:leading-[24px]
          max-w-[450px]
        "
      >
        From order to wear, every step is carefully planned.
      </p>

      {/* Buttons */}
      <div
        className="
          flex
          flex-row
          gap-[12px]
          md:gap-[16px]
          mt-[8px]
        "
      >
        {/* Express Track */}
        <button
          className="
            w-[160px]
            md:w-[188px]
            h-[44px]
            bg-[#8AAE9B]

            flex
            items-center
            justify-center

            font-poppins
            text-[11px]
            md:text-[14px]
            leading-[21px]
            font-medium
            uppercase
            text-[#F6F4F1]

            transition-all
            duration-300
            ease-in-out

            hover:bg-[#7a9d8a]
            hover:scale-105
            hover:shadow-lg
            hover:shadow-[#8AAE9B]/50
            hover:tracking-wider

            active:scale-95
            active:shadow-md

            cursor-pointer
          "
        >
          Express Track
        </button>

        {/* Bespoke Protocol */}
        <button
          className="
            w-[160px]
            md:w-[187px]
            h-[44px]
            bg-[#F6F4F1]
            border
            border-[#8AAE9B]

            flex
            items-center
            justify-center

            font-poppins
            text-[11px]
            md:text-[14px]
            leading-[21px]
            font-medium
            uppercase
            text-[#8AAE9B]

            transition-all
            duration-300
            ease-in-out

            hover:bg-[#8AAE9B]
            hover:text-[#F6F4F1]
            hover:scale-105
            hover:shadow-lg
            hover:shadow-[#8AAE9B]/50

            active:scale-95
            active:shadow-md

            cursor-pointer
          "
        >
Bespoke Protocol 
        </button>
      </div>
    </section>
  );
}