"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import SizeSelector from "./SizeSelector";
import VariantSelector from "./VariantSelector";
import AddToCart from "./AddToCart";
import ColorSelector from "./ColorSelector";

interface ProductOption {
  id: string;
  name: string;
  delivery: string;
  price: number;
  isSelected?: boolean;
}

interface ProductConfiguratorProps {
  onAddToCart: (payload: {
    productId: string;
    variant: string;
    color: string;
    size: string;
    location?: string;
    quantity: number;
  }) => void;
}

export default function ProductConfigurator({ onAddToCart }: ProductConfiguratorProps) {
  const [selectedColor, setSelectedColor] = useState<string>("jet-black");
  const [selectedSize, setSelectedSize] = useState<string>("7 × 7");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedVariant, setSelectedVariant] = useState<string>("standard");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const productOptions: ProductOption[] = [
    {
      id: "custom",
      name: "the custom creation",
      delivery: "Delivery in 3 days",
      price: 1000,
    },
    {
      id: "standard",
      name: "The Standard System",
      delivery: "Delivery in 3 days",
      price: 240,
    },
  ];

  const colors = [
    { id: "jet-black", label: "Jet Black", image: "/products/jet-black.png" },
    { id: "natural-black", label: "Natural Black", image: "/products/natural-black.png" },
    { id: "dark-brown", label: "Dark Brown", image: "/products/dark-brown.png" },
    { id: "medium-brown", label: "Medium Brown", image: "/products/medium-brown.png" },
    { id: "light-brown", label: "Light Brown", image: "/products/light-brown.png" },
    { id: "chestnut-brown", label: "Chestnut Brown", image: "/products/chestnut-brown.png" },
    { id: "dark-blonde", label: "Dark Blonde", image: "/products/dark-blonde.png" },
    { id: "light-blonde", label: "Light Blonde", image: "/products/light-blonde.png" },
  ];

  const sizes = ["7 × 7", "8 × 8", "9 × 9"];

  const isValid = selectedVariant && selectedColor && selectedSize;

  async function handleAddToCartClick(): Promise<void> {
    if (!isValid) {
      setError("Please select all required options.");
      return;
    }

    setError("");
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 800));

    onAddToCart({
      productId: "standard-system",
      variant: selectedVariant,
      color: selectedColor,
      size: selectedSize,
      location: selectedLocation,
      quantity: 1,
    });

    setLoading(false);
  }

  return (
    <div className="w-full max-w-[300px] flex flex-col">
      <div className="bg-[#F6F4F1] p-3">
        <div className="flex flex-col gap-3">
          {/* Header */}
          <div className="flex flex-col gap-1">
            <h1 className="font-playfair whitespace-nowrap font-semibold text-[20px] leading-[26px] tracking-[-0.02em] uppercase text-[#2C2D30]">
              The Standard <br /> System
            </h1>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#2C2D30] text-[#2C2D30]" />
                <span className="font-poppins font-semibold text-xs uppercase text-[#2C2D30]">
                  5/5
                </span>
              </div>
              <span className="font-poppins text-[11px] uppercase text-[#2C2D30]/70">
                based on 240 reviews
              </span>
            </div>
          </div>

          {/* Variant */}
          <VariantSelector
            options={productOptions}
            selected={selectedVariant}
            onSelect={(value) => {
              setSelectedVariant(value);
              setError("");
            }}
            compact
          />

          {/* Color */}
          <ColorSelector
            colors={colors}
            selected={selectedColor}
            onSelect={(value) => {
              setSelectedColor(value);
              setError("");
            }}
            compact
          />

          {/* Size */}
          <SizeSelector
            sizes={sizes}
            selected={selectedSize}
            onSelect={(value) => {
              setSelectedSize(value);
              setError("");
            }}
            compact
          />

          {/* Error */}
          {error && (
            <p className="text-xs text-red-500 mt-1 font-poppins">
              {error}
            </p>
          )}

          <div className="h-3" />
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="sticky bottom-0 bg-[#F6F4F1] p-3 border-t border-[#E6E2D9] z-10">
        <AddToCart
          onAddToCart={handleAddToCartClick}
          disabled={loading || !isValid}
          compact
        />
      </div>
    </div>
  );
}