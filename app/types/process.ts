export interface ProcessStep {
  number: string;
  label: string;
  description: string;
  image: string;
}

export interface DeliveryProcessProps {
  title?: string;
  subtitle?: string;
  steps?: ProcessStep[];
  className?: string;
}