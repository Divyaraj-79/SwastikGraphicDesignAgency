"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
  "/portfolio/highlight-logo/H LOGO 01.png",
  "/portfolio/highlight-logo/H LOGO 02.png",
  "/portfolio/highlight-logo/H LOGO 03.png",
  "/portfolio/highlight-logo/H LOGO 04.png",
  "/portfolio/highlight-logo/H LOGO 05.png",
  "/portfolio/highlight-logo/H LOGO 06.png",
  "/portfolio/highlight-logo/H LOGO 07.png",
  "/portfolio/highlight-logo/H LOGO 09.png",
  "/portfolio/highlight-logo/H LOGO 10.png",
  "/portfolio/highlight-logo/H LOGO 11.png",
  "/portfolio/highlight-logo/H LOGO 12.png",
  "/portfolio/highlight-logo/H LOGO 13.png",
  "/portfolio/highlight-logo/H LOGO 14.png",
  "/portfolio/highlight-logo/H LOGO 15.png",
  "/portfolio/highlight-logo/H LOGO 16.png",
  "/portfolio/highlight-logo/H LOGO 17.png",
  "/portfolio/highlight-logo/H LOGO 18.png",
  "/portfolio/highlight-logo/H LOGO 19.png",
  "/portfolio/highlight-logo/H LOGO 20.png",
  "/portfolio/highlight-logo/H LOGO 21.png",
];

export default function ClientMarquee() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto mb-16">
        <div className="flex flex-col items-start gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">Trusted Partners</span>
          </motion.div>
          <h2 className="font-sora text-4xl md:text-6xl font-black text-foreground uppercase tracking-tighter">
            Our Valuable <span className="text-primary">Clients.</span>
          </h2>
        </div>
      </div>

      <div className="relative flex flex-col gap-8">
        {/* First Row - Moving Left */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap gap-8 py-4"
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <div 
                key={index} 
                className="w-48 h-32 md:w-64 md:h-40 flex-shrink-0 bg-white border border-outline-variant/20 rounded-xl flex items-center justify-center p-8 transition-all duration-500 hover:border-primary/50 hover:scale-105 group/item shadow-sm hover:shadow-md"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    fill
                    className="object-contain filter transition-all duration-500 group-hover/item:scale-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second Row - Moving Right */}
        <div className="flex overflow-hidden group">
          <motion.div
            animate={{ x: ["-50%", 0] }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex whitespace-nowrap gap-8 py-4"
          >
            {[...clientLogos].reverse().concat([...clientLogos].reverse()).map((logo, index) => (
              <div 
                key={index} 
                className="w-48 h-32 md:w-64 md:h-40 flex-shrink-0 bg-white border border-outline-variant/20 rounded-xl flex items-center justify-center p-8 transition-all duration-500 hover:border-primary/50 hover:scale-105 group/item shadow-sm hover:shadow-md"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    fill
                    className="object-contain filter transition-all duration-500 group-hover/item:scale-110"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
