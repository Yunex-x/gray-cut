import SocialLinks from "./SocialLinks";

export default function KnowMore() {
  return (
    <div className="flex flex-col gap-[20px] w-[276px]">
      {/* TITLE */}
      <SocialLinks />
      <h3
        className="
          font-alumni
          font-semibold
          text-[48px]
          leading-[58px]
          uppercase
          text-[#F6F4F1]
        "
      >
        Know more about
      </h3>

      {/* LINKS */}
      <ul className="flex flex-col gap-[12px]">
        {["Why us?", "A question?", "Blog"].map((item) => (
          <li key={item}>
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
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
