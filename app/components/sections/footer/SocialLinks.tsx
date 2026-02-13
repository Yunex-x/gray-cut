export default function SocialLinks() {
  return (
    <div className="flex gap-[8px]">
      {Array.from({ length: 4 }).map((_, i) => (
        <button
          key={i}
          className="
            w-[44px]
            h-[44px]
            border
            border-[#E4DACC]
            flex
            items-center
            justify-center
            hover:bg-white/10
            transition
          "
        >
          {/* SVG ICON */}
          <div className="w-[18px] h-[18px] bg-white" />
        </button>
      ))}
    </div>
  );
}
