import Image from "next/image";

export default function BrandBlock() {
  return (
    <div
      className="
        flex flex-col
        gap-[32px]
        max-w-[500px]
      "
    >
      {/* LOGO */}
      <div className="lg:w-[65px] lg:h-[46px] xl:w-[82px] xl:h-[58px] ">
        <Image src="/home/logofooter.png" alt="GrayCut Logo" width={82} height={58} className="w-full h-full" />
      </div>

      {/* TITLE */}
      <h2
        className="
          font-playfair
          font-semibold
          lg:text-[48px]
          xl:text-[64px]
          2xl:text-[80px]
          lg:leading-[64px]
          xl:leading-[85px]
          uppercase
          text-[#F6F4F1]
        "
      >
        Stop Guessing
      </h2>

      {/* NEWSLETTER */}
      <div className="flex flex-col gap-[20px] lg:pt-[24px] xl:pt-[40px]">
        <p
          className="
            font-neue
            font-medium
            lg:text-[18px]
            xl:text-[20px]
            uppercase
            text-[#F6F4F1]
          "
        >
          Connect with us!
        </p>

        <div className="flex gap-[8px]">
          <input
            type="email"
            placeholder="Enter your email"
            className="
              lg:w-[260px]
              xl:w-[324px]
              h-[44px]
              bg-[#3D3E41]
              border
              border-[#E4DACC]
              px-[18px]
              text-[14px]
              text-[#F6F4F1]
              outline-none
            "
          />

          <button
            className="
              lg:w-[100px]
              xl:w-[123px]
              h-[44px]
              bg-[#8AAE9B]
              font-poppins
              font-medium
              text-[14px]
              uppercase
              text-white
              hover:opacity-90
              transition
            "
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}