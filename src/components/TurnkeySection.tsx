"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react"; // Using similar icons

const capabilities = [
  { process: "Brand Identity", materials: "Logos, Typography, Guidelines", dimensions: "100% Vector Precision" },
  { process: "Premium Print", materials: "Catalogues, Packaging, Spot UV", dimensions: "High-Fidelity Finishes" },
  { process: "Environmental", materials: "3D LED Signs, Decals, Signage", dimensions: "Architectural Sizing" },
];

import TextReveal from "@/components/TextReveal";
import ParallaxImage from "@/components/ParallaxImage";

export default function TurnkeySection() {
  const listContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring" as const, stiffness: 100, damping: 12 }
    },
  };

  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-background relative overflow-hidden border-y border-outline-variant/20">
      {/* Decorative Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{ 
          backgroundImage: "radial-gradient(var(--primary-container) 1px, transparent 1px)", 
          backgroundSize: "32px 32px" 
        }}
      />
      
      <div className="max-w-max-width mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-primary-container">
              <HubIcon size={20} />
            </span>
            <span className="font-mono text-xs text-primary-container uppercase tracking-[0.2em]">
              Rajkot Creative Studio
            </span>
          </div>
          
          <div className="mb-8">
            <TextReveal 
              text="Creative Execution." 
              className="font-sora text-4xl md:text-6xl font-bold text-foreground leading-[1.1]"
              delay={0.1}
            />
            <TextReveal 
              text="From Screen to Material." 
              className="font-sora text-4xl md:text-6xl font-bold text-primary/80 leading-[1.1]"
              delay={0.4}
            />
          </div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-inter text-base text-on-surface-variant mb-12 leading-relaxed opacity-80"
          >
            We don't just design; we bring brands to life. Our integrated studio combines cutting-edge graphic design with state-of-the-art print coordination and material expertise. This ensures flawless, high-fidelity execution from the initial screen layout to the final fabricated asset.
          </motion.p>

          <motion.div 
            variants={listContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-surface-container/50 backdrop-blur-sm p-8 rounded-lg border border-outline-variant/30"
          >
            <h4 className="font-saira text-sm text-foreground mb-6 uppercase tracking-widest border-b border-outline-variant/50 pb-4 flex justify-between items-center">
              Execution Capabilities
              <span className="font-mono text-[10px] text-primary-container">TECHNICAL SPECS V2.4</span>
            </h4>
            
            <div className="space-y-6">
              {capabilities.map((cap, i) => (
                <motion.div key={i} variants={listItem} className="grid grid-cols-3 gap-4 font-mono text-[11px] group">
                  <div className="text-primary group-hover:text-primary-container transition-colors uppercase">{cap.process}</div>
                  <div className="text-on-surface-variant/80 italic">{cap.materials}</div>
                  <div className="text-on-surface-variant text-right font-bold">{cap.dimensions}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative h-[600px] rounded-lg overflow-hidden border border-outline-variant/50"
        >
          <ParallaxImage
            src="/creative-design-studio.png"
            alt="Creative branding studio workspace"
            className="absolute inset-0 w-full h-full"
            imageClassName="grayscale hover:grayscale-0 transition-all duration-1000"
          />
          <div className="absolute bottom-8 right-8 bg-background/90 backdrop-blur-md p-6 border border-primary-container rounded flex items-center gap-6 shadow-2xl">
            <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center text-primary-container">
              <MapPin size={24} />
            </div>
            <div>
              <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">Creative Studio</p>
              <p className="font-sora text-sm font-bold text-primary">Rajkot, India</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Simple Hub icon since Lucide doesn't have it exactly as material symbols
function HubIcon({ size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <line x1="3" y1="12" x2="9" y2="12" />
      <line x1="15" y1="12" x2="21" y2="12" />
      <line x1="12" y1="3" x2="12" y2="9" />
      <line x1="12" y1="15" x2="12" y2="21" />
    </svg>
  );
}
