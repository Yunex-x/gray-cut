export default function ExploreNow() {
  return (
    <div
      className="
        flex
        flex-col
        gap-[20px]
        lg:w-[180px]
        xl:w-[207px]
        2xl:w-[330px]
      "
    >
      {/* TITLE */}
      <h3
        className="
        font-poppins
          lg:text-[26px]
          xl:text-[32px]
          2xl:text-[48px]
          font-semibold
          uppercase
          text-[#F6F4F1]
        "
      >
        Explore now!
      </h3>

      {/* LINKS */}
      <ul className="flex flex-col gap-[12px]">
        <li>
          <a
            href="#"
            className="
              font-poppins
              font-normal
              lg:text-[16px]
              xl:text-[18px]
                2xl:text-[30px]
              lg:leading-[24px]
              xl:leading-[27px]
              2xl:leading-[42px]
              
              text-[#F6F4F1]
              hover:opacity-70
              transition
            "
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#"
            className="
              font-poppins
              font-normal
              lg:text-[16px]
              xl:text-[18px]
                2xl:text-[30px]
              lg:leading-[24px]
              xl:leading-[27px]
              2xl:leading-[45px]
              
              text-[#F6F4F1]
              hover:opacity-70
              transition
            "
          >
            PrecisionFit System
          </a>
        </li>

        <li>
          <a
            href="#"
            className="
              font-poppins
              font-normal
              lg:text-[16px]
              xl:text-[18px]
                2xl:text-[30px]
              lg:leading-[24px]
              xl:leading-[27px]
              2xl:leading-[45px]
              
              text-[#F6F4F1]
              hover:opacity-70
              transition
            "
          >
            Ready-to-Wear
          </a>
        </li>
      </ul>
    </div>
  );
}