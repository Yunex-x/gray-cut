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
      <div className="w-[82px] h-[58px]">
        <img src="/logofooter.png" alt="GrayCut Logo" />
      </div>

      {/* TITLE */}
      <h2
        className="
          font-playfair
          font-semibold
          text-[64px]
          leading-[85px]
          uppercase
          text-[#F6F4F1]
        "
      >
        Stop Guessing
      </h2>

      {/* NEWSLETTER */}
      <div className="flex flex-col gap-[20px] pt-[40px]">
        <p
          className="
            font-neue
            font-medium
            text-[20px]
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
              w-[324px]
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
              w-[123px]
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
