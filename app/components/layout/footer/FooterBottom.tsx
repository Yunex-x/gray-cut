export default function FooterBottom() {
  return (
    <div
      className="
        hidden lg:flex
        w-full
        bg-[#8AAE9B]
      "
    >
      <div
        className="
          max-w-[1440px]
          mx-auto
          w-full
          h-[56px]

          flex
          items-center
          justify-between

          px-[40px]
        "
      >
        {/* LEFT */}
        <p
          className="
            font-neue
            font-medium
            text-[16px]
            leading-[19px]
            text-white
            whitespace-nowrap
          "
        >
          © 2025 GrayCut. All Rights Reserved. Terms & Conditions™
        </p>

        {/* RIGHT */}
        <div
          className="
            flex
            items-center
            gap-[53px]
            whitespace-nowrap
          "
        >
          <a
            href="#"
            className="
              font-neue
              font-medium
              text-[16px]
              leading-[19px]
              text-white
              capitalize
              hover:opacity-70
              transition
            "
          >
            Terms & Conditions
          </a>

          <a
            href="#"
            className="
              font-neue
              font-medium
              text-[16px]
              leading-[19px]
              text-white
              capitalize
              hover:opacity-70
              transition
            "
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
