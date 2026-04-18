"use client";

import { motion } from "framer-motion";
import { mediaKitData } from "@/data/media-kit-data";
import { NeonButton } from "@/components/ui/neon-button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "INSTAGRAM", href: "#" },
    { name: "TIKTOK", href: "#" },
    { name: "TWITCH", href: "#" },
    { name: "YOUTUBE", href: "#" }
  ];

  return (
    <footer className="w-full relative overflow-hidden mt-20" id="connect">
      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-8 py-24 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto flex flex-col items-center mb-16 space-y-6"
        >
          <h2 className="font-headline text-4xl lg:text-5xl font-black text-on-surface uppercase tracking-tighter">
            Ready to upgrade your campaign?
          </h2>
          <p className="font-body text-on-surface-variant text-lg">
            Access real-time analytics, dedicated audience insights, and direct integration options.
          </p>
          <a href={`mailto:${mediaKitData.profile.contactEmail}`}>
            <NeonButton variant="primary" className="mt-4 px-12 py-5">
              INITIATE SECURE COMMS
            </NeonButton>
          </a>
        </motion.div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
          <div className="text-primary font-black font-headline uppercase tracking-widest text-xl drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]">
            KINETIC_ARCHIVE
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -4, color: "var(--color-primary)" }}
                className="font-label text-xs tracking-widest uppercase text-on-surface-variant transition-colors cursor-pointer"
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          <div className="font-label text-xs tracking-widest uppercase text-on-surface-variant/50">
            © {currentYear} NEURAL_ENTITY. ENCODED FOR THE VOID.
          </div>
        </div>
      </div>
    </footer>
  );
}
