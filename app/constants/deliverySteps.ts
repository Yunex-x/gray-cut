import { ProcessStep } from "../types/process";

export const DELIVERY_STEPS: ProcessStep[] = [
  {
    number: "01",
    label: "Order",
    description: "Pick your shade. Packed instantly",
    image: "/products/delivery1.png",
  },
  {
    number: "02",
    label: "Ship",
    description: "Dispatched from Europe in 24h.",
    image: "/products/delivery2.png",
  },
  {
    number: "03",
    label: "Wear",
    description: "Receive in 3 days. Ready to install",
    image: "/products/delivery3.png",
  },
];