export interface MobileProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface ProductOption {
  id: string;
  name: string;
  delivery: string;
  price: number;
}

export interface ProductColor {
  id: string;
  label: string;
  image: string;
}