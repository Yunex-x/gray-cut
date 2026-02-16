'use client';

interface ProductOption {
  id: string;
  name: string;
  delivery: string;
  price: number;
  isSelected?: boolean;
}

interface VariantSelectorProps {
  options: ProductOption[];
  selected: string;
  onSelect: (id: string) => void;
}

export default function VariantSelector({ options, selected, onSelect }: VariantSelectorProps) {
  return (
    <div className="flex flex-col gap-3">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onSelect(option.id)}
          className={`flex flex-col px-2.5 py-3 gap-[22px] w-[276px] border transition-all ${
            selected === option.id
              ? 'bg-[#8AAE9B]/12 border-[#8AAE9B]'
              : 'bg-[#F6F4F1] border-[#2C2D30]/10 hover:border-[#2C2D30]/30'
          }`}
        >
          <h3 className="font-playfair font-semibold text-lg leading-6 tracking-[-0.02em] uppercase text-[#2C2D30] text-left">
            {option.name}
          </h3>
          <div className="flex items-end justify-between gap-14">
            <span className="font-poppins text-sm leading-[21px] tracking-[0.02em] whitespace-nowrap uppercase text-[#2C2D30]/80">
              {option.delivery}
            </span>
            <span className="font-alumni font-semibold text-2xl leading-[29px] uppercase text-[#2C2D30]">
              £{option.price}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
}