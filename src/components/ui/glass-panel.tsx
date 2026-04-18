import { cn } from "@/lib/utils";
import React from "react";

export interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export function GlassPanel({ children, className, ...props }: GlassPanelProps) {
  return (
    <div
      className={cn("glass-panel", className)}
      {...props}
    >
      {children}
    </div>
  );
}
