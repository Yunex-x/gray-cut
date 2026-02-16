import Image from "next/image";

export default function ClubImage() {
  return (
    <div className="relative flex items-center justify-center py-[60px] lg:py-[80px] px-[20px] lg:px-[30px]">
      <div className="relative w-full max-w-[290px] lg:max-w-[320px] xl:max-w-[680px] h-[200px] md:h-[400px] lg:h-[400px] xl:h-[350px] 2xl:h-[500px]">
        <Image
          src="/home/club.webp"
          alt="Club member"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}