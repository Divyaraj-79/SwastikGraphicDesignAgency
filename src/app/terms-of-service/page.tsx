"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Scale, FileText, Check, AlertCircle, RefreshCw, Landmark } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    id: "agreement-terms",
    num: "01",
    title: "Agreement to Terms",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          Welcome to Swastik Branding Agency. These Terms of Service ("Terms") govern your access to our website and the engagement of our professional graphic design, corporate branding, catalog layout, packaging, and printing services.
        </p>
        <p className="leading-relaxed text-on-surface-variant/90">
          By contacting us, downloading our design brochure, or commissioning a branding project, you agree to be fully bound by these Terms. If you do not agree to these Terms, please do not engage our services.
        </p>
      </>
    )
  },
  {
    id: "intellectual-property",
    num: "02",
    title: "Intellectual Property Rights",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          We pride ourselves on original creative execution:
        </p>
        <ul className="list-none space-y-3 pl-0 mb-4 text-on-surface-variant/80">
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span><strong>Transfer of Ownership:</strong> Upon receipt of full and final payment, Swastik Branding Agency transfers complete copyright ownership and all intellectual property rights for the finalized deliverables (such as approved custom logos, vector brand manuals, and corporate brochures) to the client.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span><strong>Portfolio Showcase:</strong> Unless an explicitly signed Non-Disclosure Agreement (NDA) states otherwise, Swastik Branding Agency retains the right to display completed design layouts, catalog drafts, and visual mockups in our portfolio and social media showcases for marketing purposes.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span><strong>Source Files:</strong> Delivery of master editable source files (e.g., .AI, .PSD, vector formats) is provided upon complete project sign-off and final clearance of agreed milestones.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "client-responsibilities",
    num: "03",
    title: "Client Responsibilities",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          Successful creative campaigns are collaborative:
        </p>
        <ul className="list-none space-y-3 pl-0 text-on-surface-variant/80">
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span>You must supply complete and accurate information, vector company logo files (if existing), text copy, product measurements, and feedback in a timely manner.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span>You warrant that all assets (images, copy, fonts, illustrations) provided to us do not violate third-party trademark rights. Swastik Branding Agency is not liable for copyright issues originating from client-supplied materials.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "printing-tolerances",
    num: "04",
    title: "Printing & Signage Tolerances",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          Please note these critical industry-standard print notices:
        </p>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90 font-mono text-xs text-primary bg-primary/5 p-4 border border-outline-variant/30 rounded">
          ⚠️ COLOR SPECTRUM NOTE: Screens display graphics in RGB (light spectrum), while physical catalog materials, Spot UV, flyers, and box packaging are printed in CMYK (ink spectrum). Minor variation in hue and gradient depth between on-screen proofs and final physical print output is normal and fully within professional tolerances.
        </p>
        <p className="leading-relaxed text-on-surface-variant/90">
          For structural items (like 3D LED Signage and Glow Boards), client approval of architectural blueprints, dimensions, and mounting locations is mandatory prior to physical fabrication.
        </p>
      </>
    )
  },
  {
    id: "payment-terms",
    num: "05",
    title: "Payments & Delivery",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          Terms governing project financials and deliverables:
        </p>
        <ul className="list-none space-y-3 pl-0 text-on-surface-variant/80">
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span><strong>Retainer Deposit:</strong> Design projects and large print runs require a mobilization advance (usually 50%) prior to starting visual conceptualization.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span><strong>Final Release:</strong> Approved vector formats and physical shipments of packaging/collateral will be dispatched only upon settling remaining accounts.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-primary font-mono mt-1">✦</span>
            <span><strong>Timeline Shifts:</strong> Stated deadlines are estimates and may shift due to delayed feedback or adjustments in the scope of designs.</span>
          </li>
        </ul>
      </>
    )
  },
  {
    id: "governing-law",
    num: "06",
    title: "Governing Law & Disputes",
    content: (
      <>
        <p className="mb-4 leading-relaxed text-on-surface-variant/90">
          These Terms of Service and any contractual project engagements are governed by the laws of India.
        </p>
        <p className="leading-relaxed text-on-surface-variant/90">
          Any disputes, misunderstandings, or legal claims arising out of design contracts, printing tolerances, or visual campaigns will be subject to the exclusive jurisdiction of the competent courts located in <strong>Rajkot, Gujarat, India</strong>.
        </p>
      </>
    )
  }
];

export default function TermsOfService() {
  const [activeSection, setActiveSection] = useState("agreement-terms");

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
            <Scale className="w-4 h-4 text-primary" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Guidelines • Code of Practice
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-sora text-5xl md:text-7xl font-extrabold text-foreground leading-none tracking-tighter uppercase mb-6">
            Terms of <span className="text-primary/80">Service.</span>
          </motion.h1>
          
          <motion.p variants={itemVariants} className="font-inter text-lg text-on-surface-variant max-w-2xl leading-relaxed opacity-80">
            Understand key guidelines regarding design ownership, vector deliverable files, print CMYK tolerances, and collaborative client guidelines.
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
