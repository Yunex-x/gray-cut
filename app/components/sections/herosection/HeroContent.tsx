export default function HeroContent() {
  return (
    <div
      className="
        flex
        flex-col
        justify-end
        gap-[18px]

        h-full
        max-w-[834px]

        md:px-[40px]
        md:pb-[80px]
lg:whitespace-nowrap
        px-[18px]
        pb-[56px]
      "
    >
      {/* Title */}
      <h1
        className="
          uppercase
          font-playfair
          font-normal
          tracking-[0.02em]
          text-[48px]
          leading-[52px]
xl:text-[74px]
          lg:text-[60px]
          md:text-[56px]
          md:leading-[96px]
    
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
          font-normal
          uppercase
          text-[rgba(246,244,241,0.6)]

          lg:text-[24px]
          xl:text-[22px]
          leading-[24px]

          md:text-[18px]
          md:leading-[28px]

          text-[18px]
        "
        style={{ fontFamily: "Poppins" }}
      >
        The European standard in undetectable hair restoration.
      </p>

      {/* CTA */}
      <button
        className="
          bg-[#8AAE9B]

          flex
          items-center
          justify-center

          text-[#F6F4F1]
          text-[14px]
          leading-[21px]
          font-normal
          uppercase

          md:w-[324px]
         md:h-[44px]

          w-[184px]
          h-[36px]

          transition-all
          duration-300
          ease-in-out
          
          hover:bg-[#7a9d8a]
          hover:scale-105
          hover:shadow-lg
          hover:shadow-[#8AAE9B]/50
          
          active:scale-95
          active:shadow-md
          
          cursor-pointer
        "
        style={{ fontFamily: "Poppins" }}
      >
        Start Your Journey
      </button>
    </div>
  );
}