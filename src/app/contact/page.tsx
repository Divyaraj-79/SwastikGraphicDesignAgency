"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [isOperational, setIsOperational] = React.useState(false);

  React.useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const day = now.getDay(); // 0 is Sunday, 1-6 is Mon-Sat
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentTimeInMinutes = hours * 60 + minutes;

      // Monday to Saturday
      if (day >= 1 && day <= 6) {
        const morningStart = 9 * 60;  // 9:00 AM
        const morningEnd = 13 * 60;   // 1:00 PM
        const eveningStart = 15 * 60; // 3:00 PM
        const eveningEnd = 20 * 60;   // 8:00 PM

        if (
          (currentTimeInMinutes >= morningStart && currentTimeInMinutes < morningEnd) ||
          (currentTimeInMinutes >= eveningStart && currentTimeInMinutes < eveningEnd)
        ) {
          setIsOperational(true);
          return;
        }
      }
      setIsOperational(false);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 30000); // Check every 30 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-48 pb-16 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start gap-6"
        >
          <span className="font-zt font-medium text-[10px] text-primary uppercase tracking-[0.4em] border border-outline-variant px-5 py-2">
            Connect
          </span>
          <h1 className="font-sora text-6xl md:text-8xl font-black text-primary tracking-tighter leading-none uppercase italic">
            Initiate <br />
            <span className="text-foreground font-black">Dialogue.</span>
          </h1>
          <p className="font-inter text-base text-on-surface-variant max-w-xl leading-relaxed">
            Reach out to our Rajkot design and printing hub. We specialize in bringing raw sophistication to high-fidelity corporate and architectural printing needs.
          </p>
        </motion.div>
      </section>

      {/* Redesigned Contact Section */}
      <section className="px-margin-mobile md:px-margin-desktop pb-32 max-w-max-width mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Side: Editorial Capsule Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 bg-white/[0.01] border border-white/[0.06] backdrop-blur-md rounded-[32px] p-8 md:p-10 flex flex-col gap-8 relative overflow-hidden group shadow-2xl"
        >
          {/* Dotted mesh grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}
          />

          {/* Large Bold Phone Triggers */}
          <div className="space-y-2 relative z-10">
            <a
              href="tel:+917600007625"
              className="block text-2xl md:text-3xl font-sora font-extrabold text-foreground hover:text-primary transition-colors tracking-tight leading-none"
            >
              +91 76000 07625
            </a>
            {/* <a 
              href="https://wa.me/918154958595" 
              className="block text-2xl md:text-3xl font-sora font-extrabold text-foreground hover:text-primary transition-colors tracking-tight leading-none"
            >
              +91 81549 58595
            </a> */}
          </div>

          <div className="h-px bg-white/[0.06]" />

          {/* Address Block */}
          <div className="space-y-3 relative z-10">
            <h4 className="font-sora font-semibold text-[10px] text-primary uppercase tracking-[0.2em] leading-none">Address</h4>
            <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
              Swastik Branding Agency<br />
              1st Floor, Dhruvraj Complex,<br />
              Nr. Mayani Chowk, Chandresh Nagar,<br />
              Rajkot, Gujarat 360004
            </p>
          </div>

          <div className="h-px bg-white/[0.06]" />

          {/* Email Block */}
          <div className="space-y-3 relative z-10">
            <h4 className="font-sora font-semibold text-[10px] text-primary uppercase tracking-[0.2em] leading-none">Email</h4>
            <div className="space-y-1">
              <a
                href="mailto:swastikbrandingagency@gmail.com"
                className="block font-inter text-sm text-on-surface-variant hover:text-primary transition-colors truncate"
              >
                swastikbrandingagency@gmail.com
              </a>
            </div>
          </div>

          <div className="h-px bg-white/[0.06]" />

          {/* Live Status & Operating Hours */}
          <div className="space-y-4 relative z-10">
            <div className="flex justify-between items-center">
              <h4 className="font-sora font-semibold text-[10px] text-primary uppercase tracking-[0.2em] leading-none">Live Status</h4>
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-widest transition-all duration-500 ${isOperational
                  ? "bg-green-500/5 border-green-500/20 text-green-400"
                  : "bg-red-500/5 border-red-500/20 text-red-400"
                }`}>
                <span className={`w-1.5 h-1.5 rounded-full ${isOperational ? "bg-green-400 animate-pulse shadow-[0_0_8px_#22c55e]" : "bg-red-400 animate-pulse shadow-[0_0_8px_#ef4444]"
                  }`} />
                {isOperational ? "Open Now" : "Closed Now"}
              </div>
            </div>

            <div className="space-y-2">
              <div className="font-inter text-xs text-on-surface-variant flex justify-between leading-none">
                <span>Monday — Saturday:</span>
                <span className="font-bold text-foreground">09:00 AM — 08:00 PM</span>
              </div>
              <div className="font-inter text-[10px] text-on-surface-variant/50 flex justify-between leading-none pl-4">
                <span>Break Hours:</span>
                <span>01:00 PM — 03:00 PM</span>
              </div>
              <div className="font-inter text-xs text-on-surface-variant flex justify-between leading-none">
                <span>Sunday:</span>
                <span className="text-red-400 font-bold">Closed</span>
              </div>
            </div>
          </div>

          {/* Social Presence at bottom of capsule card */}
          <div className="flex gap-3 mt-auto relative z-10">
            {[
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>,
                href: "#",
                label: "Facebook"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>,
                href: "https://www.instagram.com/swastik_branding_agency",
                label: "Instagram"
              },
              {
                icon: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
                href: "https://wa.me/918154958595",
                label: "WhatsApp"
              }
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 hover:border-primary bg-white/[0.02] hover:bg-primary/10 flex items-center justify-center text-on-surface-variant hover:text-primary hover:scale-105 transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Redesigned Message Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col gap-10 justify-center"
        >
          <div>
            <span className="font-sora font-semibold text-[10px] text-primary uppercase tracking-[0.2em] block mb-2">LET'S CHAT</span>
            <h2 className="font-sora text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-foreground leading-none">
              SEND A MESSAGE
            </h2>
          </div>

          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Thank you! Your message has been sent successfully."); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                id="name"
                required
                className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-primary/50 focus:bg-white/[0.04] rounded-full px-6 py-4 text-foreground text-sm focus:ring-0 outline-none transition-all duration-300 placeholder:text-on-surface-variant/40"
                placeholder="Name"
              />
              <input
                type="email"
                id="email"
                required
                className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-primary/50 focus:bg-white/[0.04] rounded-full px-6 py-4 text-foreground text-sm focus:ring-0 outline-none transition-all duration-300 placeholder:text-on-surface-variant/40"
                placeholder="Email"
              />
            </div>

            <input
              type="tel"
              id="phone"
              className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-primary/50 focus:bg-white/[0.04] rounded-full px-6 py-4 text-foreground text-sm focus:ring-0 outline-none transition-all duration-300 placeholder:text-on-surface-variant/40"
              placeholder="Contact"
            />

            <textarea
              id="message"
              rows={6}
              required
              className="w-full bg-white/[0.02] border border-white/[0.08] focus:border-primary/50 focus:bg-white/[0.04] rounded-[24px] px-6 py-5 text-foreground text-sm focus:ring-0 outline-none transition-all duration-300 resize-none placeholder:text-on-surface-variant/40"
              placeholder="Message"
            />

            <button
              type="submit"
              className="w-full bg-transparent border border-white/20 hover:bg-white hover:text-black hover:border-white rounded-full py-4 text-xs font-sora font-semibold uppercase tracking-[0.2em] text-center cursor-pointer transition-all duration-300 select-none active:scale-[0.98]"
            >
              Let's Talk
            </button>
          </form>
        </motion.div>
      </section>

      {/* Interactive grayscale Map Section */}
      <section className="w-full h-[500px] bg-surface-container relative overflow-hidden border-t border-outline-variant/30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8797441865963!2d70.7816!3d22.2858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca128b9a5e81%3A0x6b4e698888e36e8b!2sChandresh%20Nagar%2C%20Rajkot%2C%20Gujarat%20360004!5e0!3m2!1sen!2sin!4v1715520000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-60 hover:opacity-80 transition-opacity duration-1000"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="absolute bottom-12 left-margin-mobile md:left-margin-desktop bg-surface-container-highest border border-primary p-6 shadow-2xl rounded pointer-events-none"
        >
          <p className="font-saira font-bold text-primary uppercase tracking-[0.2em] mb-2">Designing Solution</p>
          <p className="font-zt font-medium text-xs text-on-surface-variant">Mon - Sat | 09:00 - 20:00 (IST)</p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
