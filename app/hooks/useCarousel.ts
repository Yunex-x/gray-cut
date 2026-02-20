'use client';

import { useState } from "react";

export function useCarousel(length: number) {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  const paginate = (dir: number) => {
    setIndex(([prevIndex]) => [
      (prevIndex + dir + length) % length,
      dir,
    ]);
  };

  return { index, direction, paginate };
}