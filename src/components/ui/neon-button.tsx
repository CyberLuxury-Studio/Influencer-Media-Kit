import { cn } from "@/lib/utils";
import React from "react";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "glass";
  children: React.ReactNode;
}

export function NeonButton({ variant = "primary", className, children, ...props }: NeonButtonProps) {
  return (
    <button
      className={cn(
        "px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300",
        variant === "primary" && "btn-gradient hover:shadow-[0_0_30px_rgba(0,240,255,0.4)]",
        variant === "glass" && "btn-glass hover:text-primary group",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
