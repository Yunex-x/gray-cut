export interface Color {
  id: string;
  label: string;
  image?: string;
}

export interface ColorSelectorProps {
  colors: Color[];
  selected: string;
  onSelect: (id: string) => void;
  compact?: boolean;
}