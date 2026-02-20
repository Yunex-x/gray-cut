import { useState } from "react";

export function useProductConfigurator() {
  const [selectedVariant, setSelectedVariant] = useState("standard");
  const [selectedColor, setSelectedColor] = useState("jet-black");
  const [selectedSize, setSelectedSize] = useState("7 × 7");
  const [selectedLocation, setSelectedLocation] = useState("");

  function getConfiguration() {
    return {
      selectedVariant,
      selectedColor,
      selectedSize,
      selectedLocation,
    };
  }

  return {
    selectedVariant,
    setSelectedVariant,
    selectedColor,
    setSelectedColor,
    selectedSize,
    setSelectedSize,
    selectedLocation,
    setSelectedLocation,
    getConfiguration,
  };
}