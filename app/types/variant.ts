export interface VariantOption {
  id: string;
  name: string;
  delivery: string;
  price: number;
}

export interface VariantSelectorProps {
  options: VariantOption[];
  selected: string;
  onSelect: (id: string) => void;
  compact?: boolean;
}