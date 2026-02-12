"use client";
import ConnectWithUs from "./connectwithus";

const Footer = () => {
  return (
    <footer className="bg-secondary font-poppins w-full">
      <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
        <img src="/logo.svg" alt="Logo" className="mx-auto mb-2" />
        <p className="text-sm mb-4">
          <strong>Gray</strong>Cut
        </p>
        <h1 className="playfair text-3xl sm:text-4xl font-extrabold">
          STOP GUESSING
        </h1>
      </div>
      <ConnectWithUs />
      {/* explore now and know more about  */}
      <div className="flex mx-4 items-center justify-center gap-2 py-4 text-xs mt-6">
        {/* left side  */}
        <div>
          <h1 className=" poppins mb-3 font-semibold"> EXPLORE NOW! </h1>
          <ul>
            <li className="mt-3">HOME</li>
            <li className="mt-3">PRECISIONFIT SYSTEM</li>
            <li className="mt-3">READY-TO-WEAR</li>
          </ul>
        </div>
        <div className=" h-30 w-0.5 bg-gray-600/30"/>
        {/* right side  */}
        <div className="ms-2">
          <h1 className=" poppins mb-3 font-semibold">KNOW MORE ABOUT</h1>
         <ul className="">
           <li className="mt-3 ">WHY US?</li>
          <li className="mt-3">A QUATION?</li>
          <li className="mt-3">BLOG</li>
         </ul>
        </div>
      </div>
      <div>
        <div className="flex items-center  gap-3  ms-4 mt-6">
          <img src="/facebook.svg" alt="" />
          <img src="/insta.svg" alt="" />
          <img src="/whatsapp.svg" alt="" />
          <img src="/x.svg"  />
        </div>
      </div> 
      <hr  className="text-gray-700/40 mt-4"/>
     <div className="flex gap-3 mx-auto justify-center items-center my-4 text-xs">
       <h1>Terms & Conditions</h1> <h1>Privacy Policy</h1>
     </div>
     <div className="flex gap-3 mx-auto justify-center items-center text-center my-4 text-xs bg-primary py-6">
      <p className="mx-auto">© 2025 GrayCut. All Rights Reserved. Terms & Conditions™</p>
     </div>
    </footer>
  );
};

export default Footer;
