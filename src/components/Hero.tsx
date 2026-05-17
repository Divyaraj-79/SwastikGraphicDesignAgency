"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Download, FileDown } from "lucide-react";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";

const variants = [
  "Visual Reality.",
  "Brand Identity.",
  "Premium Print.",
  "Digital Impact.",
  "Custom Packaging."
];

export default function Hero() {
  const ref = useRef(null);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % variants.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring" as const, 
        stiffness: 80, 
        damping: 15,
        duration: 0.8
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-[95vh] flex items-center pt-32 pb-16 px-margin-mobile md:px-margin-desktop bg-background overflow-hidden">
      {/* Background Image with Parallax-like effect */}
      <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
          <img
            alt="Abstract branding and graphic design layout"
            className="w-full h-full object-cover object-center mix-blend-luminosity opacity-30"
            src="/hero-design-bg.png"
          />
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-max-width mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="col-span-1 md:col-span-10 flex flex-col justify-center"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-4 mb-8">
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 1, delay: 0.5, ease: "circOut" }}
              className="h-[2px] bg-primary-container" 
            />
            <span className="font-mono text-sm text-primary uppercase tracking-[0.4em]">
              Precision. Scale. Impact.
            </span>
          </motion.div>

          <div className="mb-10 flex flex-col items-start overflow-hidden">
            <TextReveal 
              text="Architects of" 
              className="font-sora text-5xl md:text-9xl font-extrabold text-foreground leading-[0.9] tracking-tighter"
              delay={0.1}
            />
            <div className="text-5xl md:text-9xl h-[1.1em] overflow-hidden relative w-full mt-2 flex items-center">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={textIndex}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="font-sora font-extrabold text-primary-container leading-none tracking-tighter whitespace-nowrap pb-2"
                >
                  {variants[textIndex]}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            variants={itemVariants}
            className="font-inter text-lg md:text-2xl text-on-surface-variant max-w-3xl mb-12 leading-relaxed opacity-80"
          >
            We create high-impact graphic design, premium branding, and custom packaging, blending refined creative direction with high-fidelity execution.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              href="/services"
              className="bg-primary-container text-on-primary-container font-saira font-bold px-8 py-5 rounded-default uppercase tracking-widest text-sm flex items-center gap-3 group relative overflow-hidden"
            >
              <span className="relative z-10">Explore Services</span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-surface-container-highest"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", ease: "circOut" }}
              />
            </Link>

            <Link
              href="/portfolio"
              className="border border-outline-variant text-primary px-8 py-5 rounded-default font-saira font-bold uppercase tracking-widest text-sm hover:bg-surface-container-highest transition-colors inline-flex items-center justify-center"
            >
              Our Portfolio
            </Link>

            <a
              href="/brochure/swastik-brochure.pdf"
              download="Swastik_Designs_Brochure.pdf"
              className="flex items-center gap-3 text-primary font-saira font-bold uppercase tracking-widest text-sm px-4 py-5 hover:text-primary-container transition-all group"
            >
              <div className="relative overflow-hidden">
                <span className="block border-b border-primary/30 group-hover:border-primary transition-colors pb-1">
                  Brochure
                </span>
                <motion.div 
                  className="absolute bottom-0 left-0 h-[1px] bg-primary"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex items-center justify-center bg-surface-container-highest w-10 h-10 rounded-full group-hover:bg-primary group-hover:text-on-primary transition-all duration-500 transform group-hover:rotate-[360deg]">
                <FileDown className="w-5 h-5" />
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
