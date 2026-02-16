import Image from "next/image";

export default function ScanSection() {
  return (
    <section className="w-full bg-[#F6F4F1]">
      {/* Mobile Version */}
      <div className="lg:hidden w-[393px] h-[503px] relative">
        {/* Text Content */}
        <div className="flex flex-col items-center mt-[56px] gap-[16px]">
          {/* Title */}
          <h2 className="w-[357px] h-[17px] font-playfair font-normal text-[24px] leading-[32px] text-center uppercase text-[#2A2A2A]">
            WE DON&apos;T GUESS. WE SCAN..
          </h2>

          {/* Description */}
          <p className="w-[359px] h-[63px] mt-[16px] font-poppins font-normal text-[14px] leading-[21px] text-center uppercase text-[rgba(44,45,48,0.7)]">
            Standard wigs rely on stretch. Ours rely on physics. We print a biometric negative of your skull to ensure a vacuum fit.
          </p>
        </div>

        {/* Image Container */}
        <div className="a">
          <Image
            src="/precision/scanmobile.webp"
            alt="Scan"
            width={461}
            height={692}
            className="mt-[32px]"
          />
        </div>
      </div>

      {/* Desktop Version */}
      <div className="hidden lg:block w-full h-[1024px] relative">
        {/* Text Content */}
        <div className="flex flex-col items-center mt-[100px] gap-[24px] ">
          {/* Title */}
          <h2 className="w-[1075px] h-[45px] font-playfair font-normal text-[64px] leading-[85px] text-center uppercase text-[#2C2D30]">
            WE DON&apos;T GUESS. WE SCAN..
          </h2>

          {/* Description */}
          <p className="w-[1075px] h-[24px] mt-[24px] font-poppins font-normal text-[16px] leading-[24px] flex items-end text-center uppercase text-[rgba(44,45,48,0.7)]">
            Standard wigs rely on stretch. Ours rely on physics. We print a biometric negative of your skull to ensure a vacuum fit.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center items-center "  >
          <Image
            src="/precision/scan.webp"
            alt="Scan"
            width={1360}
            height={775}
            className=" mt-[56px] h-[775px]   "
          />
        </div>
      </div>
    </section>
  );
}