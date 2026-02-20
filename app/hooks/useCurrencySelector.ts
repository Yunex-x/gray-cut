'use client';

import { useState, useRef, useEffect } from 'react';
import { Currency } from '../types/currency';
import { CURRENCIES } from '../constants/currencies';

export function useCurrencySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] =
    useState<Currency>(CURRENCIES[0]);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () =>
      document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  function selectCurrency(currency: Currency) {
    setSelectedCurrency(currency);
    setIsOpen(false);
  }

  return {
    isOpen,
    selectedCurrency,
    dropdownRef,
    toggle,
    selectCurrency,
  };
}