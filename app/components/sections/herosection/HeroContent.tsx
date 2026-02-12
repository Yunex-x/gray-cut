export default function HeroContent() {
    return (
        <div
            className="
        flex
        flex-col
        justify-end
        gap-[24px]
h-full
whitespace-nowrap
        max-w-[850px]
        px-[40px]
        pb-[80px]
      "
        >
            {/* Title */}
            <h1
                className="
          text-[#F6F4F1]
          uppercase
          tracking-[0.02em]
          font-playfair

          text-[80px]
          xl:text-[80px]
          leading-[96px]
xl:leading-[96px]
          md:text-[56px]
          md:leading-[68px]

          sm:text-[40px]
          sm:leading-[48px]
        "
            >
                <span className="text-[#F6F4F1]">
                    AGING IS INEVITABLE.
                </span>
                <br />
                <span className="text-[#8AAE9B]">
                    BALDING IS OPTIONAL.
                </span>
            </h1>

            {/* Subtitle */}
            <p
                className="
          text-[rgba(246,244,241,0.6)]
          font-normal
          text-[24px]
          leading-[36px]
          md:text-[18px]
          md:leading-[28px]

          sm:text-[16px]
          sm:leading-[24px]
        "
                style={{ fontFamily: "Poppins" }}
            >
                The European standard in undetectable hair restoration.
            </p>

            {/* CTA */}
            <button
                className="
          w-[324px]
          h-[44px]
          bg-[#8AAE9B]

          flex
          items-center
          justify-center

          text-[#F6F4F1]
          text-[14px]
          leading-[21px]
          font-medium
          uppercase

          md:w-[280px]
          sm:w-full
        "
                style={{ fontFamily: "Poppins" }}
            >
                Start Your Journey
            </button>
        </div>
    );
}
