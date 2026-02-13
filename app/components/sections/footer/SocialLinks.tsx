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
     <img src="/facebook.png" alt="Facebook" />
      </div>

      {/* Instagram */}
      <div className="w-[44px] h-[44px] border border-[#E4DACC] flex items-center justify-center">
        <img src="/instagram.png" alt="Instagram" />
      </div>

      {/* WhatsApp */}
      <div className="w-[44px] h-[44px] border border-[#E4DACC] flex items-center justify-center">
        <img src="/whatsapp.png" alt="WhatsApp" />
      </div>

      {/* X */}
      <div className="w-[44px] h-[44px] border border-[#E4DACC] flex items-center justify-center">
        <img src="/x.png" alt="X" />
      </div>
    </div>
  );
}
