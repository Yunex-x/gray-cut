"use client";

import { useState } from "react";

export interface CartItem {
  productId: string;
  variant: string;
  color: string;
  size: string;
  location?: string;
  quantity: number;
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(item: CartItem) {
    console.log("Cart payload:", item);

    setItems(prev => [...prev, item]);
  }

  return {
    items,
    addToCart,
  };
}