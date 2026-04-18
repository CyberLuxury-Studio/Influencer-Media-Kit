import { useState, useRef, RefObject } from 'react';

interface MousePositionState {
  x: number;
  y: number;
}

export function useMousePosition<T extends HTMLElement>(): [
  RefObject<T | null>,
  MousePositionState,
  boolean,
  (e: React.MouseEvent<T>) => void,
  () => void,
  () => void
] {
  const ref = useRef<T>(null);
  const [position, setPosition] = useState<MousePositionState>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<T>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return [ref, position, isHovered, handleMouseMove, handleMouseEnter, handleMouseLeave];
}
