"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function LiveActivity() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, x: -50 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : 50,
        x: 0
      }}
      transition={{ type: "spring", stiffness: 100, damping: 15 }}
      className="fixed bottom-6 left-6 z-50 bg-[#111111]/80 backdrop-blur-md border border-[var(--color-primary-container)]/30 rounded-lg p-4 flex items-center gap-4 shadow-[0_0_20px_rgba(0,240,255,0.15)] hidden md:flex"
    >
      <div className="w-2 h-2 rounded-full bg-[var(--color-primary-container)] animate-pulse"></div>
      <div className="text-sm font-body">
        <p className="text-[var(--color-on-surface)] font-medium">New Partnership Locked</p>
        <p className="text-[var(--color-on-surface-variant)] text-xs">A Top Tier brand just reached out.</p>
      </div>
    </motion.div>
  );
}
