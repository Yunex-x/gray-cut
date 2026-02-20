export interface Protocol {
  title: string;
  price: string;
  features: string[];
  cta: string;
  image: string;
}

export interface ProtocolCardProps extends Protocol {}