export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

export type CurrencyVariant = 'light' | 'dark';

export interface CurrencySelectorProps {
  variant?: CurrencyVariant;
}