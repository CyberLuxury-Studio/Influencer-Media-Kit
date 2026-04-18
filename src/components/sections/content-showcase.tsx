"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { mediaKitData } from "@/data/media-kit-data";

export function ContentShowcase() {
  return (
    <section className="py-24 relative overflow-hidden" id="portfolio">
      <div className="max-w-screen-2xl mx-auto px-6 mb-12 flex justify-between items-end">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-headline text-3xl font-bold text-on-surface flex items-center gap-4 uppercase tracking-wider"
        >
          <span className="w-8 h-1 bg-secondary shadow-[0_0_10px_#FF003C]"></span>
          Archived_Missions
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="hidden md:flex gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
          <span className="w-2 h-2 rounded-full bg-white/20"></span>
          <span className="w-8 h-2 rounded-full bg-secondary shadow-[0_0_8px_#FF003C]"></span>
        </motion.div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full overflow-x-auto pb-12 pt-4 px-6 snap-x snap-mandatory hide-scrollbar">
        <div className="flex gap-6 w-max max-w-screen-2xl mx-auto">
          {mediaKitData.portfolio.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="w-[300px] md:w-[400px] shrink-0 snap-start group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-video rounded-2xl overflow-hidden glass-panel mb-6 border border-white/10 group-hover:border-secondary/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-surface-dim/50 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover scale-100 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-4 right-4 z-20 bg-surface-container-highest/80 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  <ArrowUpRight className="text-secondary w-5 h-5" />
                </div>
                {/* Type Badge */}
                <div className="absolute top-4 left-4 z-20 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10">
                  <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{item.type}</span>
                </div>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="font-headline text-xl font-bold text-on-surface mb-2 group-hover:text-secondary transition-colors duration-300 line-clamp-1">{item.title}</h3>
                <p className="font-body text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* View All Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-[200px] shrink-0 snap-start flex items-center justify-center"
          >
            <div className="flex flex-col items-center justify-center gap-4 text-on-surface-variant hover:text-secondary transition-colors cursor-pointer group">
              <div className="w-16 h-16 rounded-full border border-current flex items-center justify-center group-hover:shadow-[0_0_15px_#FF003C] transition-shadow">
                <ArrowUpRight className="w-6 h-6" />
              </div>
              <span className="font-headline uppercase tracking-widest text-sm font-bold">Access All Logs</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
