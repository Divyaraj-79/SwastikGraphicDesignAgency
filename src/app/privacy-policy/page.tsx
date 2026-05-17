"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, ChevronRight, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "introduction",
    num: "01",
    title: "Introduction",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          Welcome to Swastik Branding Agency ("we", "us", "our"). We are committed to protecting your privacy and ensuring the security of your creative assets and personal information. 
        </p>
        <p className="leading-relaxed text-on-surface-variant/90">
          This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website, download our creative brochure, or engage our professional graphic design, branding, and premium printing services.
        </p>
      </>
    )
  },
  {
    id: "info-collection",
    num: "02",
    title: "Information We Collect",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          To deliver bespoke branding and high-fidelity print services, we may collect the following information:
        </p>
        <ul className="list-none space-y-3 pl-0 mb-4 text-on-surface-variant/80">
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span><strong>Identity Details:</strong> Full name, company name, industry type, and designation.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span><strong>Contact Details:</strong> Email address, physical business address, phone number, and WhatsApp details.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span><strong>Project Assets:</strong> Raw brand assets, vector graphics, product specifications, catalog copy, pump drawings, and design direction files you upload or share with our creative team.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "info-usage",
    num: "03",
    title: "How We Use Your Data",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          Your information is utilized strictly to provide a premier graphic agency experience. This includes:
        </p>
        <ul className="list-none space-y-3 pl-0 text-on-surface-variant/80">
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span>Crafting custom logo designs, brand manuals, typography guidelines, and packaging concepts.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span>Processing spot UV catalog orders, premium stationery printing, and signage fabrication.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span>Surfacing operational status and updating you on branding project milestones.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span>Sharing creative brochures and showcasing newly completed work in line with design trends.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "data-security",
    num: "04",
    title: "Asset & File Security",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          We understand that logo vectors, packaging die-lines, and product designs represent critical intellectual property. We implement robust electronic safeguards:
        </p>
        <p className="leading-relaxed text-on-surface-variant/90">
          All branding blueprints, digital layout prototypes, and source design files are stored on secure local networks accessible only by key creative directors. We do not sell or lease your assets or business identity coordinates to third-party databases.
        </p>
      </>
    )
  },
  {
    id: "client-rights",
    num: "05",
    title: "Your Privacy Rights",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          As a Swastik Branding Agency client, you possess total control over your shared visual files and details. You have the right to:
        </p>
        <ul className="list-none space-y-3 pl-0 text-on-surface-variant/80">
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span>Request complete details or a summary of any data and files we hold for your projects.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span>Request correction of any obsolete company contact coordinates or print layout specs.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span>Opt-out of creative update lists or promotional brochure delivery services.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "contact-coordinates",
    num: "06",
    title: "Contact Our Studio",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          If you have questions regarding this Privacy Policy, your visual property, or data security practices, reach out to our Rajkot Creative Hub:
        </p>
        <div className="bg-surface-container p-6 border border-outline-variant/30 rounded font-mono text-xs space-y-2 text-on-surface-variant">
          <p className="text-primary font-bold uppercase tracking-wider">Swastik Branding Agency</p>
          <p>📍 Rajkot, Gujarat, India</p>
          <p>✉️ swastikbranding2015@gmail.com</p>
          <p>⏰ Mon - Sat | 09:00 AM - 01:00 PM, 03:00 PM - 08:00 PM (IST)</p>
        </div>
      </>
    )
  }
];

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction");

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-150px 0px -60% 0px",
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sec) => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((sec) => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

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

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Navbar offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
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
            <Shield className="w-4 h-4 text-primary" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Security & Trust • Privacy
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-sora text-5xl md:text-7xl font-extrabold text-foreground leading-none tracking-tighter uppercase mb-6">
            Privacy <span className="text-primary/80">Policy.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="font-inter text-lg text-on-surface-variant max-w-2xl leading-relaxed opacity-80">
            At Swastik Branding Agency, we prioritize the protection and confidentiality of your branding assets, catalog source files, and business details.
          </motion.p>
        </motion.header>
      </section>

      {/* Main Content Layout */}
      <section className="pb-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full grid grid-cols-1 md:grid-cols-4 gap-12 relative">
        {/* Sidebar Nav */}
        <div className="md:col-span-1 hidden md:block">
          <div className="sticky top-32 space-y-1">
            <p className="font-mono text-[10px] text-on-surface-variant/40 uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-4">
              Sections Index
            </p>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`w-full flex items-center justify-between text-left py-3 px-4 font-mono text-[11px] uppercase tracking-wider border rounded transition-all duration-300 ${
                  activeSection === sec.id
                    ? "border-primary bg-primary-container/10 text-primary font-bold"
                    : "border-transparent text-on-surface-variant/65 hover:text-foreground hover:bg-surface-container-high/40"
                }`}
              >
                <span>{sec.title}</span>
                <span className={`text-[9px] ${activeSection === sec.id ? "text-primary" : "text-on-surface-variant/40"}`}>
                  [{sec.num}]
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Legal Text Panel */}
        <div className="md:col-span-3 border border-outline-variant/40 bg-surface-container-low/30 p-8 md:p-12 rounded-lg space-y-16">
          {sections.map((sec) => (
            <motion.div
              id={sec.id}
              key={sec.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="border-b border-outline-variant/10 pb-12 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-primary bg-primary-container/10 px-3 py-1 border border-primary-container/20 rounded">
                  {sec.num}
                </span>
                <h2 className="font-sora text-2xl font-bold text-foreground uppercase tracking-tight">
                  {sec.title}
                </h2>
              </div>
              <div className="font-inter text-sm md:text-base leading-relaxed text-on-surface-variant/90 space-y-4">
                {sec.content}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
