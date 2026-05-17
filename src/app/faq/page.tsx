"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, MessageSquare, ArrowRight, Paintbrush, Printer, Clock } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categories = [
  { id: "all", label: "All Questions", icon: <HelpCircle className="w-3.5 h-3.5" /> },
  { id: "branding", label: "Branding & Design", icon: <Paintbrush className="w-3.5 h-3.5" /> },
  { id: "printing", label: "Printing & Signage", icon: <Printer className="w-3.5 h-3.5" /> },
  { id: "studio", label: "Operations & Studio", icon: <Clock className="w-3.5 h-3.5" /> }
];

const faqs = [
  {
    qNum: "Q01",
    category: "branding",
    question: "What master source files will I receive upon brand completion?",
    answer: "You will receive complete corporate deliverables including 100% scalable vector master files (.AI, .EPS, .PDF) alongside digital web-ready formats (.PNG with transparent background, high-res .JPG). This ensures your brand logo looks perfect on anything from a small business card to a massive highway billboard."
  },
  {
    qNum: "Q02",
    category: "printing",
    question: "Do you handle physical printing or only digital layouts?",
    answer: "We provide comprehensive, end-to-end execution! From initial vector layout and editorial graphic design (catalogues, flyer ads, custom corporate stationery) to high-fidelity printing. We specialize in premium finishes including spot UV, gloss lamination, copper/gold foil accents, and durable product packaging box runs."
  },
  {
    qNum: "Q03",
    category: "printing",
    question: "Why do my printed catalog colors look slightly different from my screen?",
    answer: "This is due to the natural transition between digital color models and physical ink. Screens display graphics in RGB (using light), while physical print presses utilize CMYK (using cyan, magenta, yellow, and black inks). We employ state-of-the-art calibrated equipment to ensure final physical prints are exceptionally precise and consistent."
  },
  {
    qNum: "Q04",
    category: "branding",
    question: "What is your typical turnaround timeline for corporate design projects?",
    answer: "A standard brand logo identity concept and manual guidelines takes 7 to 10 business days. Larger multi-page product catalogues, structural layouts, or complex custom packaging depends on the exact count of products and specs, with dedicated milestone updates at each stage."
  },
  {
    qNum: "Q05",
    category: "printing",
    question: "Can you design and fabricate large-format 3D LED outdoor signs?",
    answer: "Yes, absolutely! We specialize in structural corporate signage, including illuminated 3D LED lettering, glow boards, vinyl decals, and acrylic directional signboards. We handle the design blueprint, size scaling, and structural specifications matching your brand style sheet."
  },
  {
    qNum: "Q06",
    category: "studio",
    question: "Where is your studio located and when are you operational?",
    answer: "Our creative hub is located in Rajkot, Gujarat, India. We are fully operational Monday through Saturday, from 09:00 AM to 01:00 PM and 03:00 PM - 08:00 PM. We are closed on Sundays."
  },
  {
    qNum: "Q07",
    category: "branding",
    question: "What details do you need from me to start a custom branding project?",
    answer: "To start, we require your completed brand brief, existing vectors (if applicable), high-res product photos, color preferences, and copies of any copy/specs for brochures. If you have an industrial focus (like pumps, agro, or kitchenware), sharing drawings or catalog blueprints helps us frame your products perfectly!"
  }
];

function FaqCard({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      className={`border rounded-lg transition-all duration-300 ${
        isOpen
          ? "border-primary bg-surface-container-high/40"
          : "border-outline-variant/30 bg-surface-container-low/20 hover:border-outline-variant/80"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left p-6 md:p-8 select-none group"
      >
        <div className="flex gap-4 items-start pr-4">
          <span className="font-mono text-xs text-primary bg-primary-container/10 px-2.5 py-0.5 border border-primary-container/20 rounded select-none">
            {faq.qNum}
          </span>
          <h3 className="font-sora text-base md:text-lg font-bold text-foreground leading-tight tracking-tight group-hover:text-primary transition-colors">
            {faq.question}
          </h3>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-on-surface-variant/60 group-hover:text-foreground transition-transform duration-500 shrink-0 ${
            isOpen ? "rotate-180 text-primary" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 md:px-8 md:pb-8 pt-0 border-t border-outline-variant/10">
              <p className="font-inter text-sm md:text-base text-on-surface-variant/90 leading-relaxed max-w-4xl">
                {faq.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = faqs.filter(
    (faq) => activeCategory === "all" || faq.category === activeCategory
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Header Banner */}
      <section className="pt-48 pb-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full relative">
        <div className="absolute top-48 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
        
        <motion.header
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-left max-w-4xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-surface-container-high rounded-full border border-outline-variant/30">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Common Queries • Help Center
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-sora text-5xl md:text-7xl font-extrabold text-foreground leading-none tracking-tighter uppercase mb-6">
            FAQ<span className="text-primary/80">s.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="font-inter text-lg text-on-surface-variant max-w-2xl leading-relaxed opacity-80">
            Have questions about catalog design, printing specs, source vector coordinates, or our workflow? Find quick answers here.
          </motion.p>
        </motion.header>
      </section>

      {/* Filter Category Tabs */}
      <section className="pb-8 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full">
        <div className="flex flex-wrap gap-3 border-b border-outline-variant/20 pb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded font-mono text-[11px] uppercase tracking-wider border transition-all duration-300 ${
                activeCategory === cat.id
                  ? "border-primary bg-primary text-on-primary font-bold shadow-lg shadow-primary/10"
                  : "border-outline-variant/40 text-on-surface-variant hover:text-foreground hover:bg-surface-container-high/40"
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Accordions List Panel */}
      <section className="pb-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full grid grid-cols-1 lg:grid-cols-4 gap-12 relative">
        <div className="lg:col-span-3 space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <FaqCard key={faq.qNum} faq={faq} index={index} />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20 border border-dashed border-outline-variant/30 rounded-lg"
              >
                <p className="font-mono text-xs text-on-surface-variant/60">No queries found under this category.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* CTA Sidecard */}
        <div className="lg:col-span-1 hidden lg:block">
          <div className="sticky top-32 border border-primary/20 bg-primary/5 p-8 rounded-lg">
            <h4 className="font-sora text-xl font-bold text-foreground mb-4 uppercase">
              Still Have Queries?
            </h4>
            <p className="font-inter text-xs text-on-surface-variant leading-relaxed mb-6">
              Our creative director is ready to discuss custom graphics, catalogs, pumps branding, and layouts directly!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 bg-primary text-on-primary font-mono text-xs font-bold uppercase tracking-wider px-6 py-4 w-full rounded hover:bg-primary-container hover:text-on-primary-container transition-all"
            >
              <span>Ask Us Directly</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
