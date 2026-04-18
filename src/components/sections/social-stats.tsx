"use client";

import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import { TrendingUp, Activity, PlaySquare, Hash, Target } from "lucide-react";

export function SocialStats() {
  const containerReveal: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardReveal: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section className="max-w-screen-2xl mx-auto px-6 py-24" id="metrics">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="font-headline text-3xl font-bold text-on-surface mb-12 flex items-center gap-4"
      >
        <span className="w-8 h-1 bg-primary"></span>
        LIVE_TELEMETRY
      </motion.h2>

      <motion.div
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {/* Main Stat Card (Twitch) */}
        <motion.div variants={cardReveal} whileHover={{ scale: 1.02 }} className="md:col-span-2 lg:col-span-2 row-span-2 glass-panel rounded-2xl p-8 flex flex-col justify-between neon-glow-primary group overflow-hidden relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full mix-blend-screen pointer-events-none"></div>

          <div className="flex justify-between items-start mb-12">
            <div className="flex items-center gap-3 bg-surface-container-highest px-4 py-2 rounded-full border border-white/5">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse"></span>
              <span className="font-label text-xs tracking-widest uppercase font-bold text-on-surface">TWITCH_PRIME</span>
            </div>
            <Activity className="text-primary w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>

          <div>
            <p className="font-label text-on-surface-variant text-sm tracking-widest uppercase mb-2">Total Followers</p>
            <p className="font-headline text-6xl lg:text-7xl font-black text-gradient-primary tracking-tighter">1.2M</p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <p className="font-label text-on-surface-variant text-xs uppercase tracking-wider">Avg CCV</p>
                <p className="font-headline text-2xl lg:text-3xl font-bold text-on-surface">14.5K</p>
              </div>
              <div>
                <p className="font-label text-on-surface-variant text-xs uppercase tracking-wider">Hours Watched</p>
                <p className="font-headline text-2xl lg:text-3xl font-bold text-on-surface">3.8M</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Secondary Stat Card (YouTube) */}
        <motion.div variants={cardReveal} whileHover={{ scale: 1.02 }} className="glass-panel rounded-2xl p-6 flex flex-col justify-between neon-glow-primary">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <span className="font-label text-xs tracking-widest uppercase font-bold text-on-surface">YOUTUBE_VOD</span>
            </div>
            <PlaySquare className="text-secondary w-6 h-6" />
          </div>
          <div>
            <p className="font-headline text-4xl font-bold text-on-surface mb-1">850K</p>
            <p className="font-label text-on-surface-variant text-xs uppercase tracking-wider">Subscribers</p>
          </div>
        </motion.div>

        {/* Secondary Stat Card (Twitter/X) */}
        <motion.div variants={cardReveal} whileHover={{ scale: 1.02 }} className="glass-panel rounded-2xl p-6 flex flex-col justify-between neon-glow-primary">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-2">
              <span className="font-label text-xs tracking-widest uppercase font-bold text-on-surface">X_COMMS</span>
            </div>
            <Hash className="text-primary w-6 h-6" />
          </div>
          <div>
            <p className="font-headline text-4xl font-bold text-on-surface mb-1">420K</p>
            <p className="font-label text-on-surface-variant text-xs uppercase tracking-wider">Followers</p>
          </div>
        </motion.div>

        {/* Engagement Rate Card */}
        <motion.div variants={cardReveal} whileHover={{ scale: 1.02 }} className="md:col-span-3 lg:col-span-2 glass-panel rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between neon-glow-primary bg-gradient-to-br from-surface-container-low to-surface-container-lowest gap-6">
          <div>
            <p className="font-label text-on-surface-variant text-xs uppercase tracking-wider mb-2 flex items-center gap-2">
              <Target className="w-4 h-4" /> Global Engagement Index
            </p>
            <div className="flex items-baseline gap-3">
              <p className="font-headline text-5xl font-black text-on-surface">8.4%</p>
              <span className="text-primary text-sm font-bold flex items-center bg-primary/10 px-2 py-1 rounded">
                <TrendingUp className="w-4 h-4 mr-1" /> +1.2%
              </span>
            </div>
          </div>

          <div className="w-full sm:w-32 h-16 opacity-70 flex items-end justify-between gap-1 mt-4 sm:mt-0">
            {/* Abstract sparkline bars */}
            <motion.div initial={{ height: 0 }} whileInView={{ height: '25%' }} viewport={{ once: true }} className="w-full bg-primary/20 rounded-t-sm"></motion.div>
            <motion.div initial={{ height: 0 }} whileInView={{ height: '50%' }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="w-full bg-primary/40 rounded-t-sm"></motion.div>
            <motion.div initial={{ height: 0 }} whileInView={{ height: '33%' }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="w-full bg-primary/30 rounded-t-sm"></motion.div>
            <motion.div initial={{ height: 0 }} whileInView={{ height: '75%' }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="w-full bg-primary/60 rounded-t-sm"></motion.div>
            <motion.div initial={{ height: 0 }} whileInView={{ height: '100%' }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="w-full bg-primary rounded-t-sm shadow-[0_0_10px_#00f0ff]"></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
