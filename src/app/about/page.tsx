"use client";

import React from "react";
import { color, motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import ClientMarquee from "@/components/ClientMarquee";
import ParallaxImage from "@/components/ParallaxImage";
import TextReveal from "@/components/TextReveal";
import {
  CheckCircle2,
  Zap,
  Target,
  Users,
  Heart,
  Shield,
  Award,
  Rocket,
  Layers,
  ChevronRight
} from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "9+", sub: "Legacy" },
  { label: "Valuable Clients", value: "150+", sub: "Trusted" },
  { label: "Design Variants", value: "12k+", sub: "Creative" },
];

const industries = [
  "Agro Industries",
  "Kitchenware Brands",
  "Pump Manufacturers",
  "Healthcare & Doctors",
  "Retail & E-commerce",
  "Corporate Brands"
];

const coreValues = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Creativity",
    text: "We believe in original and innovative design to capture attention and inspire action."
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Quality",
    text: "We strive for excellence in every project, delivering superior products that stand the test of time."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Consistency",
    text: "We ensure brand consistency across all platforms and materials, strengthening your market identity."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaboration",
    text: "We prioritize working closely with our clients, valuing their insights as creative partners."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Customer-Centric",
    text: "Our clients' success is our top priority. We tailor solutions to meet your specific goals."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Reliability",
    text: "We are dependable and professional, ensuring that deadlines are met without compromising quality."
  }
];



export default function AboutPage() {
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
    <main className="flex flex-col min-h-screen bg-background overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-48 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full flex flex-col items-start relative">
        <div className="absolute top-48 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

        <motion.header
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl text-left"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-8 px-4 py-2 bg-surface-container-high rounded-full border border-outline-variant/30">
            <Award className="w-4 h-4 text-primary" />
            <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em]">
              Established 2015 • 9+ Years
            </span>
          </motion.div>

          <div className="mb-10">
            <TextReveal
              text="Architects of"
              className="font-sora text-5xl md:text-8xl font-extrabold text-foreground leading-none tracking-tighter"
            />
            <TextReveal
              text="Visual Identity."
              className="font-sora text-5xl md:text-8xl font-extrabold text-primary/80 leading-none tracking-tighter"
              delay={0.3}
            />
          </div>

          <motion.p variants={itemVariants} className="font-inter text-xl md:text-2xl text-on-surface-variant max-w-3xl leading-relaxed text-left opacity-90">
            At Swastik Branding Agency, we believe that every brand has a story — and our passion is to transform that story into a powerful visual identity.
          </motion.p>
        </motion.header>
      </section>

      <Marquee />

      {/* What We Do & Our Story */}
      <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 space-y-12"
          >
            <div className="relative pl-10 border-l-4 border-primary">
              <h2 className="font-sora text-4xl font-bold text-foreground mb-6 uppercase tracking-tight">What We Do.</h2>
              <p className="font-inter text-lg text-on-surface-variant leading-relaxed opacity-80">
                We are a full-service branding agency specializing in graphic and logo design, product catalogues, custom office stationery, and promotional materials like flyers and ads. We ensure brand consistency across all touch points and offer premium printing services for high-quality branded materials.
              </p>
            </div>

            <div className="aspect-square bg-surface-container rounded-lg overflow-hidden relative border border-outline-variant/30">
              <ParallaxImage
                src="/branding-stationery-design.png"
                alt="Premium branding design materials and corporate stationery flatlay"
                className="absolute inset-0 w-full h-full"
                imageClassName="grayscale hover:grayscale-0 transition-all duration-1000 opacity-60 hover:opacity-100"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-6 space-y-12"
          >
            <div className="space-y-6">
              <h3 className="font-sora text-2xl font-bold text-primary uppercase tracking-widest">Our Journey</h3>
              <p className="font-inter text-lg text-on-surface-variant leading-relaxed opacity-80">
                Our journey began with a simple vision — to deliver creativity with quality and build long-term relationships through trust, innovation, and excellence. Over the years, we have continuously evolved with modern design trends and advanced printing techniques to provide branding solutions that truly make a difference.
              </p>
              <p className="font-inter text-lg text-on-surface-variant leading-relaxed opacity-80">
                We serve businesses across multiple industries, including manufacturers, retailers, doctors, agro industries, and more, with customized branding solutions tailored to their goals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {industries.map((ind, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-surface-container-low border border-outline-variant/20 rounded">
                  <ChevronRight className="w-4 h-4 text-primary" />
                  <span className="font-zt font-medium text-[10px] uppercase tracking-widest text-on-surface">{ind}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-outline-variant/20 hidden md:block" />

        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="font-sora text-4xl font-bold text-foreground uppercase tracking-tight">Our Mission.</h2>
              <blockquote className="font-sora text-2xl font-medium text-foreground leading-relaxed italic border-l-4 border-primary pl-8">
                "We are committed to delivering innovative and high-quality branding solutions that enhance the visibility and consistency of our clients' brands. We aim to provide a seamless and cohesive brand experience."
              </blockquote>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Rocket className="w-8 h-8" />
              </div>
              <h2 className="font-sora text-4xl font-bold text-foreground uppercase tracking-tight">Our Vision.</h2>
              <blockquote className="font-sora text-2xl font-medium text-foreground leading-relaxed italic border-l-4 border-primary pl-8">
                "To become a leading force in the branding industry, empowering businesses of all sizes to create meaningful, lasting brand identities. We aspire to be recognized for our creative excellence and ability to transform engagement."
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-surface-container-low border-y border-outline-variant/20">
        <div className="px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="font-sora text-4xl md:text-6xl font-black text-foreground mb-6 uppercase tracking-tighter">
                Our Core <br /> <span className="text-primary">Values.</span>
              </h2>
              <p className="font-inter text-lg text-on-surface-variant opacity-70">
                Built on a foundation of trust and excellence, our values guide every project we undertake.
              </p>
            </div>
            <div className="flex flex-wrap gap-12 border-l border-outline-variant/30 pl-12">
              {stats.map((stat, i) => (
                <div key={i}>
                  <span className="block font-sora text-5xl font-black text-primary">{stat.value}</span>
                  <span className="block font-mono text-[10px] uppercase tracking-widest text-on-surface-variant/60">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 bg-background border border-outline-variant/30 hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="font-sora text-xl font-bold text-foreground mb-4 uppercase tracking-tight">{value.title}</h3>
                <p className="font-inter text-sm text-on-surface-variant leading-relaxed opacity-70">{value.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valuable Clients */}
      <ClientMarquee />

      {/* Final Statement */}
      <section className="py-48 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto text-center relative">
        <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden">
          <span className="font-sora text-[25vw] font-black text-primary/[0.03] whitespace-nowrap select-none">EXPERIENCE</span>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-sora text-4xl md:text-7xl font-extrabold text-foreground mb-12 leading-tight tracking-tighter">
            We don’t just create designs — <br />
            <span className="text-primary italic">We create brand experiences.</span>
          </h2>
          <p className="font-inter text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed opacity-80">
            At Swastik Branding Agency, every project is handled with creativity, precision, and professionalism. Our mission is to help your business stand out and leave a lasting impression.
          </p>

          <Link
            href="/contact"
            className="mt-20 inline-flex items-center gap-6 px-12 py-6 border-2 border-primary group hover:bg-primary transition-all cursor-pointer"
          >
            <span className="font-sora font-black text-primary group-hover:text-primary-container text-xl uppercase tracking-widest" style={{ color: "#ffffff" }}>Let's Connect</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ChevronRight className="w-6 h-6 text-primary group-hover:text-primary-container" style={{ color: "#ffffff" }} />
            </motion.div>
          </Link>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
