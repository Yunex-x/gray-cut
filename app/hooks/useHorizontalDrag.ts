"use client";

import { useRef, useState } from "react";

export function useHorizontalDrag() {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handlePointerStart = (pageX: number) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handlePointerMove = (pageX: number) => {
    if (!isDragging || !scrollContainerRef.current) return;
    const x = pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleDragEnd = () => setIsDragging(false);

  return {
    scrollContainerRef,
    isDragging,
    handlePointerStart,
    handlePointerMove,
    handleDragEnd,
  };
}