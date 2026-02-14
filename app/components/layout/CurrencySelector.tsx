'use client';

import { useState, useRef, useEffect } from 'react';

interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

const currencies: Currency[] = [
  { code: 'GBP', name: 'United Kingdom', symbol: '£', flag: '🇬🇧' },
  { code: 'USD', name: 'United States', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'European Union', symbol: '€', flag: '🇪🇺' },
  { code: 'JPY', name: 'Japan', symbol: '¥', flag: '🇯🇵' },
  { code: 'CNY', name: 'China', symbol: '¥', flag: '🇨🇳' },
  { code: 'AUD', name: 'Australia', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CAD', name: 'Canada', symbol: 'C$', flag: '🇨🇦' },
  { code: 'CHF', name: 'Switzerland', symbol: 'CHF', flag: '🇨🇭' },
  { code: 'INR', name: 'India', symbol: '₹', flag: '🇮🇳' },
  { code: 'AED', name: 'UAE', symbol: 'د.إ', flag: '🇦🇪' },
];

export default function CurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>(currencies[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectCurrency = (currency: Currency) => {
    setSelectedCurrency(currency);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-[18px] w-[237px] h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        {/* Left group */}
        <div className="flex items-center gap-[8px] w-[75px]  lg:w-[201px]  h-[24px]">
          {/* Icon */}
          <div className="relative w-[24px] h-[24px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 1.25C9.87386 1.25 7.79545 1.88048 6.02763 3.0617C4.2598 4.24293 2.88194 5.92185 2.0683 7.88615C1.25466 9.85046 1.04177 12.0119 1.45656 14.0972C1.87135 16.1825 2.89519 18.098 4.39861 19.6014C5.90202 21.1048 7.81749 22.1287 9.90278 22.5434C11.9881 22.9582 14.1495 22.7453 16.1139 21.9317C18.0782 21.1181 19.7571 19.7402 20.9383 17.9724C22.1195 16.2046 22.75 14.1262 22.75 12C22.7468 9.1499 21.6132 6.41744 19.5979 4.40211C17.5826 2.38678 14.8501 1.25318 12 1.25ZM2.75001 12C2.75183 10.9644 2.929 9.93649 3.274 8.96C3.89401 13.47 7.85001 13.851 8.02001 14.57C8.11377 15.3798 8.13719 16.1962 8.09001 17.01C8.16001 18.4 10.08 18.42 10.82 19.52C11.0801 20.041 11.1813 20.627 11.111 21.205C8.82362 20.9817 6.701 19.9158 5.15575 18.2145C3.6105 16.5133 2.75302 14.2983 2.75001 12ZM14.51 20.9C15.191 18.767 17.236 18.044 17.444 16.811C17.611 15.822 16.311 15.311 15.144 15.172C13.977 15.033 14.156 13.827 13.333 12.972C12.51 12.117 11.974 12.164 10.818 12.309C9.66201 12.454 8.67301 12.359 8.35001 11.648C8.02701 10.937 8.43901 10.597 7.58901 9.716C7.47425 9.60604 7.39182 9.46675 7.35064 9.31324C7.30946 9.15974 7.31112 8.99789 7.35544 8.84526C7.39975 8.69263 7.48503 8.55506 7.60201 8.44748C7.71899 8.33989 7.86321 8.26641 8.01901 8.235C8.61901 8.09 9.68601 9.135 10.311 9.012C12.193 8.624 9.93701 4.938 12.765 4.012C13.2841 3.83468 13.7122 3.45944 13.956 2.968C15.5423 3.31433 17.009 4.07323 18.208 5.168C18.557 5.96965 18.6817 6.85099 18.569 7.718C18.192 8.885 17.242 9.725 18.278 11.634C19.359 13.628 20.026 13.899 20.512 13.35C20.7021 13.1413 20.9399 12.9818 21.205 12.885C21.0244 14.7393 20.2889 16.496 19.0945 17.9258C17.9002 19.3556 16.3025 20.3921 14.51 20.9Z" fill="#F6F4F1" />
            </svg>
          </div>

          {/* Text */}
          <span
            className="text-[16px] leading-[19px] font-medium text-[rgba(246,244,241,0.7)] whitespace-nowrap"
            style={{ fontFamily: "Neue Montreal" }}
          >
            <span className="hidden sm:inline">
              {selectedCurrency.name}
            </span>
            <span className="sm:ml-1">
              ({selectedCurrency.code} {selectedCurrency.symbol})
            </span>
          </span>
        </div>

        {/* Arrow */}
        <div className={`relative w-[18px] h-[18px] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <svg
            width="18"
            height="18"
            viewBox="0 0 20 20"
            fill="none"
            className="absolute inset-0"
          >
            <path
              d="M4 7L10 13L16 7"
              stroke="#F6F4F1"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute top-[calc(100%+8px)] left-0 w-[280px] bg-[#1a1a1a] border border-[rgba(246,244,241,0.1)] rounded-lg shadow-xl overflow-hidden z-50 animate-fadeIn"
        >
          {/* Dropdown List */}
          <div className="max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-[rgba(246,244,241,0.2)] scrollbar-track-transparent">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                onClick={() => handleSelectCurrency(currency)}
                className={`
                  w-full flex items-center gap-3 px-4 py-3 
                  hover:bg-[rgba(246,244,241,0.05)] 
                  transition-colors duration-200
                  ${selectedCurrency.code === currency.code ? 'bg-[rgba(246,244,241,0.08)]' : ''}
                `}
              >
                <span className="text-2xl">{currency.flag}</span>
                <div className="flex-1 text-left">
                  <div
                    className="text-[14px] font-medium text-[#F6F4F1]"
                    style={{ fontFamily: "Neue Montreal" }}
                  >
                    {currency.name}
                  </div>
                  <div
                    className="text-[12px] text-[rgba(246,244,241,0.5)]"
                    style={{ fontFamily: "Neue Montreal" }}
                  >
                    {currency.code} {currency.symbol}
                  </div>
                </div>
                {selectedCurrency.code === currency.code && (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M13.3334 4L6.00002 11.3333L2.66669 8"
                      stroke="#F6F4F1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}