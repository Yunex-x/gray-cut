 export default function ExploreNow() {
  return (
    <div
      className="
        flex
        flex-col
        gap-[20px]
        w-[207px]
      "
    >
      {/* TITLE */}
      <h3
        className="
        font-poppins
          text-[32px]
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
              text-[18px]
              leading-[27px]
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
              text-[18px]
              leading-[27px]
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
              text-[18px]
              leading-[27px]
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
