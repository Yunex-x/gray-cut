'use client';

interface SizeSelectorProps {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
}

export default function SizeSelector({ sizes, selected, onSelect }: SizeSelectorProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-playfair font-semibold text-base leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]">
        Size
      </h3>
      
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-center gap-1">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSelect(size)}
              className={`flex-1 flex items-center justify-center py-2.5 px-2.5 border transition-all ${
                selected === size
                  ? 'bg-[#8AAE9B]/12 border-[#8AAE9B]'
                  : 'border-[#2C2D30]/10 hover:border-[#2C2D30]/30'
              }`}
            >
              <span className={`font-poppins text-sm leading-[21px] tracking-[-0.02em] uppercase ${
                selected === size ? 'text-[#2C2D30]' : 'text-[#2C2D30]/70'
              }`}>
                {size}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}