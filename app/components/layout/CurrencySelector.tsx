'use client';

import { CURRENCIES } from "@/app/constants/currencies";
import { useCurrencySelector } from "@/app/hooks/useCurrencySelector";
import { getCurrencyStyles } from "@/app/lib/currencyStyles";
import { CurrencySelectorProps } from "@/app/types/currency";

export default function CurrencySelector({
  variant = 'light',
}: CurrencySelectorProps) {
  const {
    isOpen,
    selectedCurrency,
    dropdownRef,
    toggle,
    selectCurrency,
  } = useCurrencySelector();

  const { iconFill, textColor, arrowStroke } =
    getCurrencyStyles(variant);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={toggle}
        className="flex items-center gap-[18px] w-[237px] h-[24px] cursor-pointer hover:opacity-80 transition-opacity"
      >
        {/* Left group */}
        <span className="flex items-center gap-[8px] w-[75px] lg:w-[201px] h-[24px]">
          {/* Icon */}
          <span className="relative w-[24px] h-[24px]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 1.25C9.87386 1.25 7.79545 1.88048 6.02763 3.0617C4.2598 4.24293 2.88194 5.92185 2.0683 7.88615C1.25466 9.85046 1.04177 12.0119 1.45656 14.0972C1.87135 16.1825 2.89519 18.098 4.39861 19.6014C5.90202 21.1048 7.81749 22.1287 9.90278 22.5434C11.9881 22.9582 14.1495 22.7453 16.1139 21.9317C18.0782 21.1181 19.7571 19.7402 20.9383 17.9724C22.1195 16.2046 22.75 14.1262 22.75 12C22.7468 9.1499 21.6132 6.41744 19.5979 4.40211C17.5826 2.38678 14.8501 1.25318 12 1.25Z"
                fill={iconFill}
              />
            </svg>
          </span>

          {/* Text */}
          <span
            className={`text-[16px] leading-[19px] font-medium ${textColor} whitespace-nowrap`}
            style={{ fontFamily: "Neue Montreal" }}
          >
            <span className="hidden sm:inline">
              {selectedCurrency.name}
            </span>
            <span className="sm:ml-1">
              ({selectedCurrency.code} {selectedCurrency.symbol})
            </span>
          </span>
        </span>

        {/* Arrow */}
        <span
          className={`relative w-[18px] h-[18px] transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path
              d="M4 7L10 13L16 7"
              stroke={arrowStroke}
              strokeWidth="1.5"
            />
          </svg>
        </span>
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-[calc(100%+8px)] left-0 w-[280px] bg-[#1a1a1a] border border-[rgba(246,244,241,0.1)] rounded-lg shadow-xl overflow-hidden z-50">
          <div className="max-h-[300px] overflow-y-auto">
            {CURRENCIES.map((currency) => (
              <button
                key={currency.code}
                onClick={() => selectCurrency(currency)}
                className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-[rgba(246,244,241,0.05)] transition-colors duration-200 ${
                  selectedCurrency.code === currency.code
                    ? 'bg-[rgba(246,244,241,0.08)]'
                    : ''
                }`}
              >
                <span className="text-2xl">{currency.flag}</span>

                <span className="flex-1 text-left">
                  <span className="text-[14px] font-medium text-[#F6F4F1]">
                    {currency.name}
                  </span>
                  <span className="text-[12px] text-[rgba(246,244,241,0.5)] block">
                    {currency.code} {currency.symbol}
                  </span>
                </span>

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