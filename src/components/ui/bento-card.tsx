"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";

import { HTMLMotionProps } from "framer-motion";

interface BentoCardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "secondary";
}

export function BentoCard({ children, className, glowColor = "primary", onMouseMove, onFocus, onBlur, onMouseEnter, onMouseLeave, ...props }: BentoCardProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const colorMap = {
    primary: "rgba(0, 240, 255, 0.15)", // Cyan
    secondary: "rgba(255, 0, 60, 0.15)", // Magenta
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={(e) => {
        handleMouseMove(e as unknown as React.MouseEvent<HTMLDivElement>);
        if (onMouseMove) onMouseMove(e);
      }}
      onFocus={(e) => {
        handleFocus();
        if (onFocus) onFocus(e);
      }}
      onBlur={(e) => {
        handleBlur();
        if (onBlur) onBlur(e);
      }}
      onMouseEnter={(e) => {
        handleMouseEnter();
        if (onMouseEnter) onMouseEnter(e);
      }}
      onMouseLeave={(e) => {
        handleMouseLeave();
        if (onMouseLeave) onMouseLeave(e);
      }}
      className={cn(
        "relative overflow-hidden glass-panel rounded-2xl transition-all duration-300",
        "border border-white/5",
        className
      )}
      whileHover={{ scale: 1.01 }}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${colorMap[glowColor]}, transparent 40%)`,
        }}
      />

      {/* Content wrapper to ensure it stays above the glow layer */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </motion.div>
  );
}
