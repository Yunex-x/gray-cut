'use client'
import ConnectWithUs from './connectwithus'

const Footer = () => {
  return (
    <footer className="bg-secondary font-poppins w-full">
      <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
        <img src="/logo.svg" alt="Logo" className="mx-auto mb-2" />
        <p className="text-sm mb-4">
          <strong>Gray</strong>Cut
        </p>
        <h1 className="playfair text-3xl sm:text-4xl font-extrabold">
          STOP GUESSING
        </h1>
      </div>

      <ConnectWithUs />
    </footer>
  );
};

export default Footer;
