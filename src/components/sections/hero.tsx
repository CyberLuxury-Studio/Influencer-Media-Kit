"use client";

import dynamic from "next/dynamic";
import { motion, Variants } from "framer-motion";
import { PlayCircle } from "lucide-react";
import { NeonButton } from "@/components/ui/neon-button";

// Lazy load the Spline component to avoid blocking initial page paint
const SplineHeroScene = dynamic(() => import("@/components/3d/spline-hero-scene").then(mod => mod.SplineHeroScene), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-full h-full max-w-lg aspect-square">
        <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute inset-4 rounded-full border border-secondary-container/20 animate-[spin_40s_linear_infinite_reverse]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-3xl mix-blend-screen"></div>
        <div className="absolute inset-1/4 rounded-2xl glass-panel flex flex-col items-center justify-center border-primary/30 shadow-[0_0_50px_rgba(0,240,255,0.1)]">
          <span className="material-symbols-outlined text-6xl text-primary opacity-50 mb-2 animate-pulse">sync</span>
          <span className="font-headline text-sm text-primary tracking-widest uppercase">Initializing 3D Asset</span>
        </div>
      </div>
    </div>
  )
});

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function Hero() {
  return (
    <section className="min-h-[921px] flex flex-col lg:flex-row items-center justify-center max-w-screen-2xl mx-auto px-6 lg:px-12 relative overflow-hidden">
      {/* Left Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full lg:w-1/2 z-10 flex flex-col justify-center space-y-8 pr-0 lg:pr-12 mt-20 lg:mt-0"
      >
        <motion.div variants={itemVariants} className="space-y-2">
          <p className="font-headline text-primary-fixed-dim uppercase tracking-[0.2em] text-sm font-bold opacity-80 pl-1">SYS.INIT // IDENTITY_VERIFIED</p>
          <h1 className="font-headline text-6xl lg:text-8xl font-black tracking-tighter text-on-surface leading-none text-gradient-primary py-2">
            @NeoCyber<br />Streamer
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="font-body text-on-surface-variant text-lg lg:text-xl max-w-lg leading-relaxed border-l-2 border-primary/20 pl-4">
          Digital Creator & Tech Streamer exploring the bleeding edge of interactive entertainment. Forging communities in the digital void.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-4">
          <NeonButton variant="primary">
            INITIATE COLLAB
          </NeonButton>
          <NeonButton variant="glass">
            <PlayCircle className="text-primary w-5 h-5 group-hover:scale-110 transition-transform" />
            VIEW REEL
          </NeonButton>
        </motion.div>
      </motion.div>

      {/* Right Spline Placeholder / Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-full lg:w-1/2 h-[512px] lg:h-[819px] relative mt-12 lg:mt-0"
      >
        <SplineHeroScene />
      </motion.div>
    </section>
  );
}
