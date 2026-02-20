'use client';

interface SizeSelectorProps {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
  compact?: boolean;
}

export default function SizeSelector({ sizes, selected, onSelect, compact = false }: SizeSelectorProps) {
  return (
    <div className={`flex flex-col gap-2 ${compact ? 'w-full' : ''}`}>
      <h3 className={`font-playfair font-semibold ${compact ? 'text-sm' : 'text-base'} leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]`}>
        Size
      </h3>
      
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-center gap-1">
          {sizes.map((size) => (
            <button
              key={size}
              onClick={() => onSelect(size)}
              className={`flex-1 flex items-center justify-center ${compact ? 'py-2 px-2 text-sm' : 'py-2.5 px-2.5'} border transition-all ${
                selected === size
                  ? 'bg-[#8AAE9B]/12 border-[#8AAE9B]'
                  : 'border-[#2C2D30]/10 hover:border-[#2C2D30]/30'
              }`}
            >
              <span className={`font-poppins ${compact ? 'text-sm' : 'text-sm'} leading-[21px] tracking-[-0.02em] uppercase ${
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