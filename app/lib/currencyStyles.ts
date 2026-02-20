import { CurrencyVariant } from "../types/currency";

export function getCurrencyStyles(variant: CurrencyVariant) {
  const isDark = variant === 'dark';

  return {
    iconFill: isDark ? '#2C2D30' : '#F6F4F1',
    textColor: isDark
      ? 'text-[rgba(44,45,48,0.7)]'
      : 'text-[rgba(246,244,241,0.7)]',
    arrowStroke: isDark ? '#2C2D30' : '#F6F4F1',
  };
}