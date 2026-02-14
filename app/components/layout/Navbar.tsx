"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import CurrencySelector from "./CurrencySelector";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <header
      className="
        absolute top-0 left-1/2 -translate-x-1/2
        w-full z-50
        backdrop-blur-[3px]
        bg-gradient-to-b from-white/5 to-transparent
      "
    >
      {/* ================= Desktop ================= */}
      <div className="hidden lg:flex flex-col w-full px-[40px]">
        {/* Top bar */}
        <div className="flex items-center justify-between h-[62px]">
          <CurrencySelector />

          <Link href="/" className="w-[69px] h-[30px]">
            <img src="/logo.svg" alt="Logo" className="w-full h-full" />
          </Link>

          <div className="flex gap-[24px]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_28_298)">
                <path d="M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z" fill="#F6F4F1"/>
              </g>
              <defs>
                <clipPath id="clip0_28_298">
                  <rect width="20" height="20" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.0005 18.7187C9.40023 18.7187 8.79995 18.4902 8.343 18.0332L1.74464 11.4349C-0.580244 9.11 -0.580244 5.32719 1.74464 3.00235C4.01148 0.735512 7.66456 0.679106 10.0006 2.83278C12.3367 0.680746 15.9882 0.737934 18.2546 3.00418C19.3807 4.13039 20.001 5.62778 20.001 7.22043C20.001 8.81305 19.3806 10.3105 18.2546 11.4367L11.658 18.0332C11.201 18.4902 10.6008 18.7187 10.0005 18.7187ZM5.96093 2.81864C4.78566 2.81864 3.68073 3.27629 2.84968 4.10735C2.01862 4.9384 1.56093 6.04336 1.56093 7.21864C1.56093 8.39391 2.01858 9.49883 2.84964 10.3299L9.448 16.9282C9.75265 17.2329 10.2484 17.2329 10.553 16.9282L17.1496 10.3317C17.9806 9.50067 18.4383 8.39575 18.4383 7.22047C18.4383 6.0452 17.9806 4.94028 17.1495 4.10922C15.434 2.39368 12.6426 2.39368 10.927 4.10922L10.553 4.48325C10.2478 4.78844 9.75312 4.7884 9.44796 4.48325L9.07214 4.10743C8.24112 3.27633 7.1362 2.81864 5.96093 2.81864Z" fill="#F6F4F1"/>
            </svg>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.50016 6.05315C3.43859 6.05315 3.37954 6.07761 3.336 6.12115C3.29246 6.16469 3.268 6.22374 3.268 6.28532V18.358C3.268 18.4861 3.37201 18.5901 3.50016 18.5901H16.5015C16.563 18.5901 16.6221 18.5657 16.6656 18.5221C16.7092 18.4786 16.7336 18.4195 16.7336 18.358V6.28532C16.7336 6.22374 16.7092 6.16469 16.6656 6.12115C16.6221 6.07761 16.563 6.05315 16.5015 6.05315H3.50016ZM1.875 6.28532C1.875 5.3873 2.60214 4.66016 3.50016 4.66016H16.5015C17.3995 4.66016 18.1266 5.3873 18.1266 6.28532V18.358C18.1266 18.789 17.9554 19.2023 17.6506 19.5071C17.3458 19.8119 16.9325 19.9831 16.5015 19.9831H3.50016C3.06914 19.9831 2.65578 19.8119 2.351 19.5071C2.04622 19.2023 1.875 18.789 1.875 18.358V6.28532Z" fill="#F6F4F1"/>
              <path d="M10.0005 1.4096C9.32322 1.4096 8.67364 1.67866 8.19471 2.1576C7.71577 2.63653 7.44671 3.28611 7.44671 3.96343V7.21375C7.44671 7.39847 7.37333 7.57563 7.24271 7.70625C7.11209 7.83687 6.93493 7.91025 6.75021 7.91025C6.56549 7.91025 6.38833 7.83687 6.25771 7.70625C6.12709 7.57563 6.05371 7.39847 6.05371 7.21375V3.96343C6.05371 2.91666 6.46954 1.91277 7.20971 1.1726C7.94988 0.432426 8.95377 0.0166016 10.0005 0.0166016C11.0473 0.0166016 12.0512 0.432426 12.7914 1.1726C13.5315 1.91277 13.9474 2.91666 13.9474 3.96343V7.21375C13.9474 7.39847 13.874 7.57563 13.7434 7.70625C13.6127 7.83687 13.4356 7.91025 13.2509 7.91025C13.0661 7.91025 12.889 7.83687 12.7584 7.70625C12.6277 7.57563 12.5544 7.39847 12.5544 7.21375V3.96343C12.5544 3.28611 12.2853 2.63653 11.8064 2.1576C11.3274 1.67866 10.6779 1.4096 10.0005 1.4096Z" fill="#F6F4F1"/>
            </svg>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex justify-center gap-[24px] h-[36px]">
          {[
            "Home",
            "PrecisionFit System",
            "Shop",
            "Why Us?",
            "A Question?",
            "Blog",
            "Our Location",
          ].map((item) => (
            <Link
              key={item}
              href="/"
              className="text-[rgba(246,244,241,0.7)] text-[16px] hover:text-[#F6F4F1]"
            >
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* ================= Mobile ================= */}
      <div className="lg:hidden flex items-center justify-between px-[18px] h-[62px]">
        {/* Left - Currency Selector */}
        <div className="relative z-[60]">
          <CurrencySelector />
        </div>

        {/* Logo */}
        <Link href="/" className="w-[69px] h-[30px]">
          <img src="/logo.svg" alt="Logo" className="w-full h-full" />
        </Link>

        {/* Hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="w-[28px] h-[28px] relative"
        >
          <span className="absolute top-[6px] left-0 right-0 h-[2px] bg-white" />
          <span className="absolute top-[13px] left-0 right-0 h-[2px] bg-white" />
          <span className="absolute top-[20px] left-0 right-0 h-[2px] bg-white" />
        </button>
      </div>

      {/* ================= Mobile Menu Dropdown ================= */}
      <div
        className={`
          fixed inset-0 z-[999]
          bg-black/40 backdrop-blur-md
          transition-opacity duration-300
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        {/* Panel */}
        <div
          className={`
            absolute top-0 left-0 w-full
            bg-[#2C2D30]
            pt-[96px] pb-[32px]
            px-[24px]
            transition-transform duration-300 ease-out
            ${menuOpen ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          {/* Close */}
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-[24px] right-[24px] text-white text-[28px]"
          >
            ✕
          </button>

          {/* Menu */}
          <nav className="flex flex-col gap-[24px]">
            {[
              "Home",
              "PrecisionFit System",
              "Shop",
              "Why Us?",
              "A Question?",
              "Blog",
              "Our Location",
            ].map((item) => (
              <Link
                key={item}
                href="/"
                onClick={() => setMenuOpen(false)}
                className="
                  text-[#F6F4F1]
                  text-[20px]
                  uppercase
                  font-medium
                  hover:opacity-70
                "
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}