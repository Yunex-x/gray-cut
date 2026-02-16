'use client';

import Image from 'next/image';

interface Color {
  id: string;
  label: string;
  image?: string;
}

interface ColorSelectorProps {
  colors: Color[];
  selected: string;
  onSelect: (id: string) => void;
}

// Hair color hex values - only defined here
const colorMap: Record<string, string> = {
  'jet-black': '#181818',
  'natural-black': '#2C2D30',
  'dark-brown': '#3E2723',
  'medium-brown': '#5B4E3E',
  'light-brown': '#745632',
  'chestnut-brown': '#8B4513',
  'dark-blonde': '#C4A574',
  'light-blonde': '#D5D6D1',
};

export default function ColorSelector({ colors, selected, onSelect }: ColorSelectorProps) {
  return (
    <div className="flex flex-col gap-2 w-[276px]">
      <h3 className="font-playfair font-semibold text-base leading-[21px] tracking-[-0.02em] uppercase text-[#2C2D30]">
        Color
      </h3>
      
      <div className="flex flex-col gap-2">
        {/* First Row - 4 colors */}
        <div className="flex items-center gap-2 h-10">
          {/* First color with special border */}
          {colors.slice(0, 1).map((color) => (
            <button
              key={color.id}
              onClick={() => onSelect(color.id)}
              className={`relative flex-1 h-10 transition-all overflow-hidden ${
                selected === color.id
                  ? 'border-[1.5px] border-black p-0.5'
                  : 'hover:opacity-80'
              }`}
              title={color.label}
              aria-label={color.label}
            >
              <div 
                className="w-full h-full relative"
                style={{ backgroundColor: colorMap[color.id] }}
              >
                {color.image && (
                  <Image
                    src={color.image}
                    alt={color.label}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </button>
          ))}

          {/* Remaining 3 colors in first row */}
          {colors.slice(1, 4).map((color) => (
            <button
              key={color.id}
              onClick={() => onSelect(color.id)}
              className={`relative flex-1 h-9 transition-all overflow-hidden ${
                selected === color.id
                  ? 'ring-2 ring-[#8AAE9B]'
                  : 'hover:opacity-80'
              }`}
              style={{ backgroundColor: colorMap[color.id] }}
              title={color.label}
              aria-label={color.label}
            >
              {color.image && (
                <Image
                  src={color.image}
                  alt={color.label}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>

        {/* Second Row - 4 more colors */}
        <div className="flex items-center gap-2 h-9">
          {colors.slice(4, 8).map((color) => (
            <button
              key={color.id}
              onClick={() => onSelect(color.id)}
              className={`relative flex-1 h-full transition-all overflow-hidden ${
                selected === color.id
                  ? 'ring-2 ring-[#8AAE9B]'
                  : 'hover:opacity-80'
              }`}
              style={{ backgroundColor: colorMap[color.id] }}
              title={color.label}
              aria-label={color.label}
            >
              {color.image && (
                <Image
                  src={color.image}
                  alt={color.label}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}