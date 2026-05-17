"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Zap, Newspaper, Briefcase, Layers } from "lucide-react"; // Using similar names or custom icons

const services = [
  {
    title: "Logo Design & Branding",
    category: "Identity",
    description: "Crafting unique visual identities that tell your brand's story. We create logos, brand guidelines, and complete visual systems that ensure consistency and professionalism.",
    icon: <DesignServicesIcon size={40} />,
    span: "md:col-span-8",
    image: null,
  },
  {
    title: "Packaging Design",
    category: "Product",
    description: "Functional and aesthetic packaging solutions. We design product boxes and labels that stand out on the shelf and reflect your brand's quality.",
    icon: <StorefrontIcon size={40} />,
    span: "md:col-span-4",
    image: null,
  },
  {
    title: "Brochure & Catalogue",
    category: "Editorial",
    description: "Premium product showcases and technical catalogues. We blend high-end layouts with precision typography to present your offerings effectively.",
    icon: <FileTextIcon size={40} />,
    span: "md:col-span-4",
    image: null,
  },
  {
    title: "Printing Solutions",
    category: "Technical",
    description: "High-fidelity digital and offset printing for all your corporate needs. From office stationery to large-format marketing materials.",
    icon: <PrintIcon size={40} />,
    span: "md:col-span-8",
    specs: [
      { label: "Types", value: "Business Cards, Letterheads, Envelopes" },
      { label: "Marketing", value: "Flyers, Posters, Stickers" },
      { label: "Finish", value: "Matte / Gloss / Spot UV" },
    ],
  },
  {
    title: "Flyer & Leaflet Design",
    category: "Marketing",
    description: "High-impact promotional materials. We design layouts that grab attention and communicate your message with clarity and style.",
    icon: <Newspaper size={40} />,
    span: "md:col-span-4",
    image: null,
  },
  {
    title: "Office Stationery",
    category: "Corporate",
    description: "Professional business essentials. We design and print letterheads, envelopes, and business cards that reinforce your brand's professionalism.",
    icon: <Briefcase size={40} />,
    span: "md:col-span-4",
    image: null,
  },
  {
    title: "Sticker Designing",
    category: "Creative",
    description: "Custom decals and brand labels. High-quality sticker designs for product packaging, promotional giveaways, and industrial labeling.",
    icon: <Layers size={40} />,
    span: "md:col-span-4",
    image: null,
  },
  {
    title: "Signage & 3D LED",
    category: "Structural",
    description: "Architectural-grade exterior and interior signage. We specialize in illuminated 3D LED lettering, glow signs, and structural brand boards.",
    icon: <SignageIcon size={40} />,
    span: "md:col-span-7",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBYcA7XLXDrQggwfiv9M4tczdCx3ycHX41YQzl8jNILfjCuRytgo9DK1_xROG4pu6XMHWg7bwc1TWWaQ5zCsnAv9Dyaj6KxmFvnU1dnw1mywmKTRChZLV8aiaZBLfsv16upzw6EWKsDQPrfJpgGCa2ZfENsXJqo1mwJ3Ir73LAGj77vf1dYY4m5elmnwmtSIhkP1XGtc3DD08W29y0zdlmzjD_e7BogJlkIOTppv4PP0MLJLE1hm-vjmAy9MP3_GK6QGcJXj_MHvnzH",
  },
  {
    title: "Corporate Gifting",
    category: "Curated",
    description: "Personalized merchandise and bespoke gift sets. We source and brand premium items that leave a lasting professional impression.",
    icon: <FeaturedSeasonalAndGiftsIcon size={40} />,
    span: "md:col-span-5",
    image: null,
  },
  {
    title: "Digital Marketing",
    category: "Online",
    description: "Expanding your brand's reach in the digital space. We provide social media management and strategic digital branding to connect with your audience online.",
    icon: <Zap size={40} />,
    span: "md:col-span-12",
    image: null,
  },
];

import TextReveal from "@/components/TextReveal";

export default function ServicesPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <section className="pt-48 pb-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 md:mb-32 max-w-3xl"
        >
          <div className="mb-8">
            <TextReveal 
              text="Our Services" 
              className="font-sora text-5xl md:text-8xl font-extrabold text-primary leading-[1.1]"
              delay={0.1}
            />
            <TextReveal 
              text="Hub." 
              className="font-sora text-5xl md:text-8xl font-extrabold text-foreground leading-[1.1]"
              delay={0.4}
            />
          </div>
          <p className="font-inter text-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Precision in print. Impact in design. We engineer visual solutions across four core pillars, transforming concepts into tangible, high-contrast realities for corporate environments and events.
          </p>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {services.map((service, idx) => (
            <motion.article
              key={idx}
              initial={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)", y: 30 }}
              whileInView={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${service.span} bg-surface-container/50 backdrop-blur-sm border border-outline-variant/30 rounded-lg p-10 relative overflow-hidden group hover:border-primary-container/50 transition-all duration-500`}
            >
              {service.image && (
                <div className="absolute inset-0 right-0 w-1/2 opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none">
                  <img src={service.image} alt="" className="w-full h-full object-cover object-right mix-blend-luminosity" />
                </div>
              )}
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="flex justify-between items-start mb-16">
                  <span className="font-mono text-[10px] text-primary-container tracking-[0.2em] uppercase py-1 px-2 border border-primary-container/30 bg-primary-container/5">
                    {service.category}
                  </span>
                  <div className="text-on-surface-variant group-hover:text-primary transition-colors">
                    {service.icon}
                  </div>
                </div>

                <div>
                  <h2 className="font-sora text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="font-inter text-base text-on-surface-variant mb-8 max-w-md leading-relaxed">
                    {service.description}
                  </p>

                  {service.specs && (
                    <div className="bg-background/50 border border-outline-variant/20 p-6 rounded-lg mb-8 max-w-sm">
                      <ul className="space-y-3">
                        {service.specs.map((spec, i) => (
                          <li key={i} className="flex justify-between items-center text-[11px] font-mono border-b border-outline-variant/10 pb-2 last:border-0 last:pb-0">
                            <span className="text-on-surface-variant/60 uppercase">{spec.label}</span>
                            <span className="text-primary font-bold">{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <button className="inline-flex items-center gap-3 font-mono text-xs text-primary uppercase tracking-[0.2em] group/btn">
                    View Case Studies 
                    <motion.span 
                      className="inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={14} />
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// Simple Icon Fallbacks
function DesignServicesIcon({ size = 24 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m13.5 6.5 4 4"/><path d="m16 4 4 4-8 8H8v-4l8-8Z"/><path d="M14.5 12.5 17 15"/><path d="M11.5 9.5 14 12"/><path d="M2 22h20"/></svg>;
}

function FeaturedSeasonalAndGiftsIcon({ size = 24 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8s2-5 4.5-5a2.5 2.5 0 0 1 0 5"/></svg>;
}

function PrintIcon({ size = 24 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>;
}

function StorefrontIcon({ size = 24 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"/><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"/><path d="M2 7h20"/><path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7"/></svg>;
}

function FileTextIcon({ size = 24 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>;
}

function SignageIcon({ size = 24 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v10"/><path d="M18.4 4.6a9 9 0 1 1-12.8 0"/><path d="m15 10-3 3-3-3"/></svg>;
}
