"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact Us", href: "/contact" },
];

import Magnetic from "@/components/Magnetic";

import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      clipPath: "inset(0% 0% 100% 0%)"
    },
    visible: {
      opacity: 1,
      y: 0,
      clipPath: "inset(0% 0% 0% 0%)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      clipPath: "inset(0% 0% 100% 0%)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-margin-mobile md:px-margin-desktop py-4",
        scrolled && !isOpen
          ? "bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-max-width mx-auto flex justify-between items-center relative z-50">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="relative h-12 w-48 md:h-16 md:w-64"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-full"
          >
            <Image
              src="/logo.png"
              alt="Swastik Branding Agency Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </motion.div>
        </Link>

        {/* Universal Menu Toggle */}
        <div className="flex items-center gap-6">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="hidden md:flex bg-primary-container text-on-primary-container font-saira font-semibold px-6 py-2 rounded-default items-center gap-2 group overflow-hidden relative"
          >
            <span className="relative z-10 uppercase tracking-widest text-xs" style={{ color: "#ffffff" }}>Get Quote</span>
            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" style={{ color: "#ffffff" }} />
            <motion.div
              className="absolute inset-0 bg-surface-container-highest"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ type: "tween", ease: "circOut" }}
            />
          </Link>

          <button
            className="text-foreground hover:text-primary transition-colors flex items-center gap-3 font-mono text-xs uppercase tracking-widest"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="hidden md:inline-block" style={{ color: "#ffffff" }}>{isOpen ? "Close" : "Menu"}</span>
            <div className="p-2 bg-surface-container border border-outline-variant/30 rounded-full" style={{ color: "#ffffff" }}>
              {isOpen ? <X size={20} color="#ffffff" /> : <Menu size={20} color="#ffffff" />}
            </div>
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0 0%)" }}
            animate={{ clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 w-screen h-screen bg-surface z-40 flex flex-col md:flex-row overflow-hidden"
          >
            {/* Main Links Area */}
            <div className="flex-1 flex flex-col justify-center px-margin-mobile md:px-margin-desktop pt-32 pb-16 relative">
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center overflow-hidden">
                <span className="font-sora text-[30vw] font-black whitespace-nowrap">SWASTIK</span>
              </div>

              <div className="flex flex-col gap-2 md:gap-6 relative z-10">
                {navLinks.map((link, idx) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2 + idx * 0.1,
                        ease: [0.16, 1, 0.3, 1]
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "font-sora text-5xl md:text-8xl font-black uppercase tracking-tighter transition-all duration-500 hover:text-primary-container inline-block w-full",
                          pathname === link.href ? "text-primary" : "text-foreground"
                        )}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex flex-col justify-end p-margin-desktop border-l border-outline-variant/30 w-1/3 bg-surface-container/30 backdrop-blur-sm relative z-10"
            >
              <div className="relative aspect-[16/10] w-full mb-12 rounded overflow-hidden border border-outline-variant/30 group shadow-lg shadow-black/30">
                <Image
                  src="/branding-stationery-design.png"
                  alt="Premium Branding & Stationery Design"
                  fill
                  className="object-cover grayscale hover:grayscale-0 opacity-80 hover:opacity-100 transition-all duration-700"
                />
              </div>

              <div className="mb-16">
                <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-6 block border-b border-outline-variant/20 pb-4">
                  Get in Touch
                </span>
                <a href="mailto:swastikbrandingagency@gmail.com" className="text-xl font-medium hover:text-primary transition-colors block mb-2">
                  swastikbrandingagency@gmail.com
                </a>
                <a href="tel:+917600007625" className="text-xl font-medium hover:text-primary transition-colors block">
                  +91 76000 07625
                </a>
              </div>

              <div>
                <span className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-6 block border-b border-outline-variant/20 pb-4">
                  Location
                </span>
                <p className="text-on-surface-variant leading-relaxed">
                  1st Floor, Dhruvraj Complex,<br />
                  Nr. Mayani Chowk, Chandresh Nagar main road,<br />
                  Rajkot 360004, Gujarat, India
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
