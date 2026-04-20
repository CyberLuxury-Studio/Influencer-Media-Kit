"use client";

import { motion } from "framer-motion";
import { fadeUpVariant } from "@/lib/motion";

export function BrandCollaborations() {
  const brands = ["Neon", "Cyber", "Synth", "Chrome", "Nexus", "Flux", "Onyx"];

  return (
    <section className="py-24 border-b border-white/10 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="text-2xl font-bold font-headline uppercase text-on-surface text-center tracking-widest"
        >
          Trusted Collaborations
        </motion.h2>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-16 py-4">
          {brands.map((brand, i) => (
            <span key={i} className="text-4xl font-headline font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-tighter opacity-50 hover:opacity-100 transition-opacity">
              {brand}
            </span>
          ))}
          {brands.map((brand, i) => (
            <span key={`dup-${i}`} className="text-4xl font-headline font-black text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase tracking-tighter opacity-50 hover:opacity-100 transition-opacity">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
