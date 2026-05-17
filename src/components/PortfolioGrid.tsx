"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react"; // Using Material Symbols names for icons if possible, or mapping them

const projects = [
  {
    title: "Nexus Urban Wayfinding",
    category: "Structural Signage",
    description: "Complete design, fabrication, and installation of a 50-point architectural signage system.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqM9vA8flMBftv89Kh-rTx6MCMwSpz3_vaVCyR_P_CM_Rdcv7C-13QNSkRe2Ms3H4142tyugTIvOi0p5dsfY5H276Edm8Qkg3WHRSkGsjeXpfhRWdI8Mua21WnOLEwJG8A0T2p1aCf-6VzTn5W-yonSerU4Be3V_cpndhQOTMpxbj83C-3w4mZjx4-ncjjdS-FU_W8XzJmCH-WniL8wRK-MUph_ovEwwqIgNOaIrPIQdSACRm8V-0wlW6zlpg4Ex1tUwfnd1T3uwR2",
    span: "md:col-span-8",
  },
  {
    title: "Aura Tech Rebrand",
    category: "Corporate Identity",
    description: "High-end print collateral featuring spot UV, edge gilding, and custom die-cuts on 600gsm stock.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3zmt3yoBHZTbxCP2aGTQp1iTqxYFCi389PCT1wwXPKQNNpXLn9s-nDjyfoyqyDxwcH_uRqFCZv5ChinQTu9fVSaU154N8pJFyGn9fFLJjasSmYdK4589_1KttGeJrUhSS8oJJqAKjeY8nwnE7h3Kqxi_aBDt0BEI3WOqG3eqku_axHYsD8Qa6fRbSvqgJJpL81xim5zS7z3HjRZSYwPCUBo-_c2ErOAoISgpyxfxM9inQmOGoUOJdCuweYdS56uM1uFuYgzWm_xmk",
    span: "md:col-span-4 md:row-span-2",
  },
  {
    title: "Global Trade Expo Hub",
    category: "Exhibition",
    description: "Immersive, multi-layered exhibition stand design.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRTE_1dIw4CpGgylqfBUcazVojpS_Hm2l0fgSb2RIvExe_wBsam4_b-APeNrRo6YydbSmISfRxdEet0-rRpOZWN4yEZQIhM5OKtU7pNuQlwJfejLHKU7gHxDr4QTdCJtJKTbyDtjZTxVMQfbccl51x4Sp43Ey_ZCpTdVaNnDwphySJFxT0AR8i6pyI9Bc4dDbw8YCsGWJey_uJqi2BGUlD2ShZ80AVQv5ug2WUwLyjbgm5KGxKJt1jJ9QosDbd1BNLJrh9myyDSxKq",
    span: "md:col-span-4",
  },
];

import ParallaxImage from "@/components/ParallaxImage";
import TextReveal from "@/components/TextReveal";

export default function PortfolioGrid() {
  return (
    <section className="py-32 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-max-width mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-mono text-xs text-primary uppercase tracking-[0.3em] mb-4 block"
            >
              Selected Works
            </motion.span>
            <TextReveal 
              text="Engineered Aesthetics." 
              className="font-sora text-4xl md:text-6xl font-bold text-foreground"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link
              href="/portfolio"
              className="font-saira font-semibold text-primary-container border-b-2 border-primary-container pb-1 hover:text-primary transition-colors flex items-center gap-2 group"
            >
              View All Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                type: "spring",
                stiffness: 60,
                damping: 20,
                delay: idx * 0.1 
              }}
              className={`${project.span} relative group overflow-hidden rounded-lg bg-surface-container border border-outline-variant/30`}
            >
              <ParallaxImage
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full"
                imageClassName="grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 transition-opacity group-hover:opacity-80" />
              
              <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="inline-block px-3 py-1 border border-primary-container text-primary-container font-mono text-[10px] uppercase tracking-widest mb-3 bg-background/80 backdrop-blur-sm">
                  {project.category}
                </span>
                <h3 className="font-sora text-2xl md:text-3xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="font-inter text-sm text-on-surface-variant line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Design Brochure Item */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:col-span-4 bg-surface-container-high flex flex-col justify-center p-8 border border-outline-variant/50 rounded-lg group hover:border-primary-container transition-colors"
          >
            <div className="w-12 h-12 bg-primary-container/10 rounded flex items-center justify-center mb-6 text-primary-container group-hover:bg-primary-container group-hover:text-on-primary-container transition-colors">
              <Download size={24} />
            </div>
            <h3 className="font-sora text-2xl text-foreground mb-4">
              Our Design Brochure
            </h3>
            <p className="font-inter text-sm text-on-surface-variant mb-6">
              Explore our full creative portfolio, custom branding packages, and high-fidelity print solutions.
            </p>
            <a
              href="/brochure/swastik-brochure.pdf"
              download="Swastik_Designs_Brochure.pdf"
              className="font-mono text-xs text-primary uppercase tracking-widest inline-flex items-center gap-2 hover:text-primary-container transition-colors"
            >
              Download Brochure <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
