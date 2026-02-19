'use client';

import React, { useState, useEffect } from 'react';

interface ProcessToggleButtonsProps {
  /**
   * Initial active button. Defaults to 'express'.
   */
  initial?: 'express' | 'standard';
  /**
   * Called when user toggles. Receives the new value.
   */
  onChange?: (value: 'express' | 'standard') => void;
  className?: string;
}

export default function ProcessToggleButtons({
  initial = 'express',
  onChange,
  className = ''
}: ProcessToggleButtonsProps) {
  const [active, setActive] = useState<'express' | 'standard'>(initial);

  useEffect(() => {
    setActive(initial);
  }, [initial]);

  function handleClick(value: 'express' | 'standard') {
    if (value === active) return;
    setActive(value);
    onChange?.(value);
  }

  return (
    <div
      className={`md:hidden whitespace-nowrap flex items-center justify-center gap-3  ${className}`}
      role="tablist"
      aria-label="Process track toggle"
    >
      <button
        type="button"
        role="tab"
        aria-selected={active === 'express'}
        onClick={() => handleClick('express')}
        className={`
          w-[147px] h-9 flex items-center justify-center
          px-[18px] py-2
          transition-colors duration-150
          ${active === 'express'
            ? 'bg-[#8AAE9B] text-[#F6F4F1] border-none'
            : 'bg-[#F6F4F1] text-[#8AAE9B] border border-[#8AAE9B]'}
        `}
      >
        <span className="font-neue-montreal font-medium text-sm leading-[17px] uppercase">
          EXPRESS TRACK
        </span>
      </button>

      <button
        type="button"
        role="tab"
        aria-selected={active === 'standard'}
        onClick={() => handleClick('standard')}
        className={`
          w-[147px] h-9 flex items-center justify-center
          px-[18px] py-2
          transition-colors duration-150
          ${active === 'standard'
            ? 'bg-[#8AAE9B] text-[#F6F4F1] border-none'
            : 'bg-[#F6F4F1] text-[#8AAE9B] border border-[#8AAE9B]'}
        `}
      >
        <span className="font-neue-montreal font-medium text-sm leading-[17px] uppercase">
          STANDARD TRACK
        </span>
      </button>
    </div>
  );
}