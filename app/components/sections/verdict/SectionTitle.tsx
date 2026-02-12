export default function SectionTitle() {
  return (
    <>
      {/* Mobile Title */}
      <div className="
        lg:hidden
        w-full
        flex
        flex-col
        items-center
        gap-[16px]
        px-[18px]
        pt-[54px]
        pb-[32px]
      ">
        {/* THE VERDICT label */}
        <div className="flex justify-center items-center">
          <p className="
            font-poppins
            font-normal
            text-[12px]
            leading-[18px]
            tracking-[0.16em]
            uppercase
            text-[#2C2D30]
          ">
            THE VERDICT
          </p>
        </div>

        {/* Title */}
        <h2
          className="
            text-center
            font-playfair
            font-normal
            uppercase
            tracking-[0.02em]
            text-[#2A2A2A]
            text-[24px]
            leading-[32px]
            max-w-[357px]
          "
        >
          Thought of First 50
        </h2>

        {/* Subtitle */}
        <p className="
          font-poppins
          font-normal
          text-[14px]
          leading-[21px]
          text-center
          uppercase
          text-[rgba(44,45,48,0.7)]
          max-w-[319px]
        ">
          We invited 50 men to test the protocol. Here is the unedited reality.
        </p>
      </div>

      {/* Desktop Title - Original */}
      <h2
        className="
          hidden
          lg:block
          w-full
          text-center
          font-playfair
          uppercase
          tracking-[0.02em]
          text-[#2A2A2A]
          text-[32px]
          leading-[40px]
          mb-[5px]
          md:mb-[50px]
          md:text-[64px]
          md:leading-[85px]
        "
      >
        THE VERDICT
      </h2>
    </>
  );
}