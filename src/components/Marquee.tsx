"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  "Graphic Design",
  "Premium Printing",
  "Brand Identity",
  "Packaging Design",
  "Logo Development",
  "3D LED Signage",
  "Office Stationery",
  "Creative Concepts",
];

export default function Marquee() {
  return (
    <div className="bg-primary-container py-4 overflow-hidden flex border-y border-on-primary-container/20">
      <motion.div
        animate={{ x: [0, "-50%"] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {/* Render twice for seamless loop */}
        {[...Array(2)].map((_, i) => (
          <React.Fragment key={i}>
            {services.map((service, index) => (
              <div key={index} className="flex items-center gap-12">
                <span className="font-sora font-extrabold text-2xl md:text-4xl uppercase tracking-tighter text-on-primary-container">
                  ✦ {service}
                </span>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
