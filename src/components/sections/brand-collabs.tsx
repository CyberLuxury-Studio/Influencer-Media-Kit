"use client";

import React from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "../animations/scroll-reveal";

const brands = [
  "CYBERDYNE", "ARASAKA", "NEXUS_CORP", "NEON_DREAMS", 
  "QUANTUM_GEAR", "STEALTH_OPTICS", "VOID_RECORDS", "SYNTH_WAVE"
];

export function BrandCollabs() {
  return (
    <section className="py-24 border-y border-white/5 bg-zinc-950 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-pink-500/5 blur-[100px] pointer-events-none"></div>
      
      <ScrollReveal>
        <div className="text-center mb-12 relative z-10">
          <h2 className="text-sm font-mono text-pink-500 uppercase tracking-[0.3em] mb-4">
            [ Verified Partnerships ]
          </h2>
          <p className="text-xl md:text-2xl font-bold font-sans text-white/80 max-w-2xl mx-auto">
            Trusted by the most forward-thinking megacorps and underground labels in the digital sector.
          </p>
        </div>
      </ScrollReveal>

      {/* Infinite scrolling marquee */}
      <div className="relative flex overflow-x-hidden w-full mt-16 pb-4">
        {/* Left/Right Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
        
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...brands, ...brands, ...brands].map((brand, i) => (
            <div 
              key={i} 
              className="mx-8 text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-white/10 stroke-text uppercase tracking-tighter hover:text-white/30 hover:bg-white/30 transition-all duration-300 cursor-default"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.15)" }}
            >
              {brand}
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
}
