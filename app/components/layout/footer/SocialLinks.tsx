import Image from "next/image";

export default function FooterSocials() {
  return (
    <div
      className="
        justify-end
        flex
        gap-[12px]
      "
    >
      {/* Facebook */}
      <div className="w-[44px] h-[44px] border border-[#E4DACC] flex items-center justify-center">
        <Image src="/home/facebook.png" alt="Facebook" width={20} height={20} />
      </div>

      {/* Instagram */}
      <div className="w-[44px] h-[44px] border border-[#E4DACC] flex items-center justify-center">
        <Image src="/home/instagram.png" alt="Instagram" width={20} height={20} />
      </div>

      {/* WhatsApp */}
      <div className="w-[44px] h-[44px] border border-[#E4DACC] flex items-center justify-center">
        <Image src="/home/whatsapp.png" alt="WhatsApp" width={20} height={20} />
      </div>

      {/* X */}
      <div className="w-[44px] h-[44px] border border-[#E4DACC] flex items-center justify-center">
        <Image src="/home/x.png" alt="X" width={20} height={20} />
      </div>
    </div>
  );
}
