export default function SectionHeader() {
  return (
    <header
      className="
        w-full
        flex
        flex-col
        items-center
mt-[68px]
mb-[32px]
md:mt-[100px]
md:mb-[26px]
        px-[18px]

    
      "
    >
      {/* Title */}
      <h2
        className="
          font-playfair
          font-normal
          uppercase
          text-center
          text-[#2A2A2A]

          text-[24px]
          leading-[32px]

          md:text-[64px]
        "
      >
        The Protocols
      </h2>

      {/* Subtitle */}
      <p
        className="
          font-poppins
          uppercase
          text-center
          text-[rgba(44,45,48,0.7)]
mt-16
lg:mt-4
          text-[16px]
          leading-[21px]
          max-w-[359px]
          md:text-[16px]
          md:leading-[100px]
          md:max-w-[542px]
        "
        style={{ fontFamily: "Poppins" }}
      >
        One is engineered for speed. The other is crafted for obsession.
      </p>
    </header>
  );
}
