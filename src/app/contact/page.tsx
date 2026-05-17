"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Tag, ArrowRight, Send, Clock } from "lucide-react";
import BusinessHours from "@/components/BusinessHours";
import { cn } from "@/lib/utils";

export default function ContactPage() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <section className="pt-48 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start gap-8"
        >
          <span className="font-mono text-xs text-primary-fixed uppercase tracking-[0.4em] border border-outline-variant px-6 py-3">
            Connect
          </span>
          <h1 className="font-sora text-6xl md:text-9xl font-extrabold text-primary tracking-tighter leading-none">
            INITIATE <br />
            <span className="text-foreground">DIALOGUE.</span>
          </h1>
          <p className="font-inter text-xl text-on-surface-variant max-w-2xl leading-relaxed">
            Reach out to our Rajkot hub. We specialize in bringing raw sophistication to high-end corporate and architectural printing needs.
          </p>
        </motion.div>
      </section>

      <section className="px-margin-mobile md:px-margin-desktop pb-32 max-w-max-width mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-gutter">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 bg-surface-container/50 backdrop-blur-sm border border-outline-variant/30 p-10 md:p-16 relative overflow-hidden group rounded-lg"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-container to-transparent" />
          <h2 className="font-sora text-4xl font-bold text-primary mb-12">Send a Message</h2>

          <form className="space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="relative group/field">
                <input
                  type="text"
                  id="name"
                  required
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant/50 py-3 text-foreground focus:ring-0 focus:border-primary-container transition-all placeholder-transparent"
                  placeholder="Name"
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 -top-6 text-[10px] font-mono text-on-surface-variant uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-primary-container transition-all pointer-events-none"
                >
                  Full Name
                </label>
              </div>
              <div className="relative group/field">
                <input
                  type="email"
                  id="email"
                  required
                  className="peer w-full bg-transparent border-0 border-b border-outline-variant/50 py-3 text-foreground focus:ring-0 focus:border-primary-container transition-all placeholder-transparent"
                  placeholder="Email"
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 -top-6 text-[10px] font-mono text-on-surface-variant uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-primary-container transition-all pointer-events-none"
                >
                  Email Address
                </label>
              </div>
            </div>

            <div className="relative group/field">
              <input
                type="text"
                id="company"
                className="peer w-full bg-transparent border-0 border-b border-outline-variant/50 py-3 text-foreground focus:ring-0 focus:border-primary-container transition-all placeholder-transparent"
                placeholder="Company"
              />
              <label
                htmlFor="company"
                className="absolute left-0 -top-6 text-[10px] font-mono text-on-surface-variant uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-primary-container transition-all pointer-events-none"
              >
                Company / Organization
              </label>
            </div>

            <div className="relative group/field">
              <textarea
                id="message"
                rows={4}
                required
                className="peer w-full bg-transparent border-0 border-b border-outline-variant/50 py-3 text-foreground focus:ring-0 focus:border-primary-container transition-all placeholder-transparent resize-none"
                placeholder="Message"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-6 text-[10px] font-mono text-on-surface-variant uppercase tracking-widest peer-placeholder-shown:text-sm peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:text-primary-container transition-all pointer-events-none"
              >
                Project Details
              </label>
            </div>

            <button
              type="submit"
              className="bg-primary-container text-on-primary-container font-saira font-bold px-10 py-5 rounded-default uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 group/btn relative overflow-hidden"
            >
              <span className="relative z-10">Submit Inquiry</span>
              <Send size={18} className="relative z-10 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              <motion.div
                className="absolute inset-0 bg-surface-container-highest"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ type: "tween", ease: "circOut" }}
              />
            </button>
          </form>
        </motion.div>

        {/* Sidebar Info */}
        <div className="lg:col-span-4 h-full">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container border border-outline-variant/30 p-8 rounded-lg h-full flex flex-col justify-between group hover:border-primary/50 transition-colors"
          >
            {/* Top: Contact & Socials */}
            <div className="space-y-8">
              <div>
                <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-6 border-b border-outline-variant/20 pb-2">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  {[
                    { icon: <Mail />, label: "Inquiries", val: "swastikbrandingagency@gmail.com", href: "mailto:swastikbrandingagency@gmail.com" },
                    { icon: <Phone />, label: "Support", val: "+91 76000 07625", href: "tel:+917600007625" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="p-2 bg-surface border border-outline-variant rounded">
                        {React.cloneElement(item.icon as React.ReactElement<any>, { size: 14 })}
                      </div>
                      <div className="min-w-0">
                        <p className="font-mono text-[8px] text-on-surface-variant uppercase tracking-widest">{item.label}</p>
                        <a href={item.href} className="text-foreground text-xs font-bold hover:text-primary transition-colors block truncate">{item.val}</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4">Social Presence</h3>
                <div className="flex gap-2">
                  <a
                    href="https://www.instagram.com/swastik_branding_agency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-surface border border-outline-variant hover:border-primary flex items-center justify-center hover:text-primary transition-all rounded text-on-surface-variant/80 hover:text-primary"
                    aria-label="Instagram"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Middle: Business Hours */}
            <div className="py-8 border-y border-outline-variant/20 my-8">
              <BusinessHours />
            </div>

            {/* Bottom: Location */}
            <div>
              <h3 className="font-mono text-[10px] text-primary uppercase tracking-[0.3em] mb-4">Hub Location</h3>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-surface border border-outline-variant rounded">
                  <MapPin size={16} className="text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-bold text-sm">Rajkot HQ</p>
                  <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                    1st Floor, Dhruvraj Complex,<br />
                    Nr. Mayani Chowk, Chandresh Nagar,<br />
                    Rajkot 360004
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
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
          className="absolute bottom-12 left-margin-mobile md:left-margin-desktop bg-surface-container-highest border border-primary p-8 shadow-2xl rounded-lg pointer-events-none"
        >
          <p className="font-saira font-bold text-primary uppercase tracking-[0.2em] mb-2">Designing Solution</p>
          <p className="font-mono text-xs text-on-surface">Mon - Sat | 09:00 - 20:00 (IST)</p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
