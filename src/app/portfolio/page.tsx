"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence, color } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, ArrowLeft, Maximize2 } from "lucide-react";
import { cn } from "@/lib/utils";
import TextReveal from "@/components/TextReveal";

const categories = ["All", "Bamboo Paper", "Box Design", "Brochure", "Dr File", "Flyer Design", "Logo Design", "Pouches", "Rough Pad", "Sleeve Paper", "Sticker Design", "V Card"];

const rawPortfolioData = {
  "Bamboo Paper": [
    "BAMBOO PAPER 01.jpg.jpeg", "BAMBOO PAPER 02.jpg.jpeg", "BAMBOO PAPER 03.jpg.jpeg", "BAMBOO PAPER 04.jpg.jpeg"
  ],
  "Box Design": [
    "BOX DESIGN POST 001.jpg.jpeg", "BOX DESIGN POST 002.jpg.jpeg", "BOX DESIGN POST 003.jpg.jpeg",
    "BOX DESIGN POST 004.jpg.jpeg", "BOX DESIGN POST 005.jpg.jpeg", "BOX DESIGN POST 006.jpg.jpeg",
    "BOX DESIGN POST 010.jpg.jpeg", "BOX DESIGN POST 011.jpg.jpeg", "BOX DESIGN POST 012.jpg.jpeg",
    "BOX DESIGN POST 013.jpg.jpeg", "BOX DESIGN POST 014.jpg.jpeg", "BOX DESIGN POST 015.jpg.jpeg",
    "BOX DESIGN POST 016.jpg.jpeg", "BOX DESIGN POST 017.jpeg", "BOX DESIGN POST 018.jpeg",
    "BOX DESIGN POST 019.jpeg"
  ],
  "Brochure": [
    "BROCHURE  01.jpg.jpeg", "BROCHURE  02.jpg.jpeg", "BROCHURE  03.jpg.jpeg",
    "BROCHURE  04.jpg.jpeg", "BROCHURE  05.jpg.jpeg", "BROCHURE  06.jpg.jpeg",
    "BROCHURE  07.jpg.jpeg", "BROCHURE  08.jpg.jpeg", "BROCHURE  09.png",
    "BROCHURE  10.jpg.jpeg", "BROCHURE  11.png", "BROCHURE  12.jpg.jpeg"
  ],
  "Dr File": [
    "DOCTOR FILE 01.jpg.jpeg", "DOCTOR FILE 02.jpg.jpeg", "DOCTOR FILE 03.jpg.jpeg", "DOCTOR FILE 04.jpg.jpeg"
  ],
  "Flyer Design": [
    "FLYER 01.jpg.jpeg", "FLYER 02.jpg.jpeg", "FLYER 03.jpg.jpeg", "FLYER 04.jpg.jpeg",
    "FLYER 05.jpg.jpeg", "FLYER 06.jpg.jpeg", "FLYER 07.jpg.jpeg"
  ],
  // "Highlight Logo": [
  //   "H LOGO 01.png", "H LOGO 02.png", "H LOGO 03.png", "H LOGO 04.png", "H LOGO 05.png",
  //   "H LOGO 06.png", "H LOGO 07.png", "H LOGO 09.png", "H LOGO 10.png", "H LOGO 11.png",
  //   "H LOGO 12.png", "H LOGO 13.png", "H LOGO 14.png", "H LOGO 15.png", "H LOGO 16.png",
  //   "H LOGO 17.png", "H LOGO 18.png", "H LOGO 19.png", "H LOGO 20.png", "H LOGO 21.png"
  // ],
  "Logo Design": [
    "298bd0ce2a00252dec8dbbe380ce5a0a.jpg.jpeg", "2716ed8019bca326cbd2fe8a846dd6d9.jpg.jpeg",
    "a1af96613fe2cd4007d9887accfb9fe0.jpg.jpeg", "ad6d291fd17256ef1b8e11f34cdd37e2.jpg.jpeg",
    "CLARA LOGO.jpg.jpeg", "d00050f58107e08effded8d714d9e244.jpg.jpeg",
    "db418bff8ff2bd38f4c0dc12e12861c7.jpg.jpeg", "dcd0e690226899869d443f963df06165.jpg.jpeg",
    "f1f484b022f772bed8d22931a9bcaf58.jpg.jpeg", "LOGO 001.jpg.jpeg", "LOGO 002.jpg.jpeg",
    "LOGO 003.jpg.jpeg", "LOGO 004.jpg.jpeg", "LOGO 005.jpg.jpeg", "LOGO MOCKUP.png",
    "SHIV GANGA LOGO.jpg.jpeg"
  ],
  "Pouches": [
    "BAG DESIGN 01.jpg.jpeg", "BAG DESIGN 02.jpg.jpeg", "BAG DESIGN 03.jpg.jpeg",
    "BAG DESIGN 04.jpg.jpeg", "BAG DESIGN 05.jpg.jpeg", "POUCH DESIGN 01.png",
    "POUCH DESIGN 02.png", "POUCH DESIGN 03.png", "POUCH DESIGN 04.png"
  ],
  "Rough Pad": [
    "BOOK 01.jpg.jpeg", "BOOK 02.jpg.jpeg", "BOOK 03.jpg.jpeg", "BOOK 04.jpg.jpeg",
    "BOOK 05.jpg.jpeg", "BOOK 06.jpg.jpeg", "BOOK 07.jpg.jpeg"
  ],
  "Sleeve Paper": [
    "CONTAINER PAPER 01.jpg.jpeg", "CONTAINER PAPER 02.jpg.jpeg", "CONTAINER PAPER 03.jpg.jpeg",
    "PAPER SLEEV.jpg.jpeg"
  ],
  "Sticker Design": [
    "BANSI HAIR SHAMPOO.jpg.jpeg", "GLOSSY STICKER 01.jpg.jpeg", "GLOSSY STICKER 02.jpg.jpeg",
    "GLOSSY STICKER 03.jpg.jpeg", "GLOSSY STICKER 04.jpg.jpeg", "GLOSSY STICKER 05.jpg.jpeg",
    "GLOSSY STICKER 06.jpg.jpeg", "GLOSSY STICKER 07.jpg.jpeg", "GLOSSY STICKER 08.jpg.jpeg",
    "GLOSSY STICKER 09.jpg.jpeg", "GLOSSY STICKER 10.jpg.jpeg", "PVC STICKER 01.jpg.jpeg",
    "PVC STICKER.jpg.jpeg", "TRANSPARENT STICKER 01.jpg.jpeg", "TRANSPARENT STICKER.jpg.jpeg"
  ],
  "V Card": [
    "V CARD COMBO 01.jpeg", "V CARD COMBO 02.jpg.jpeg", "V CARD COMBO 03.jpg.jpeg",
    "V CARD COMBO 04.jpg.jpeg", "V CARD COMBO 05.jpg.jpeg", "V CARD COMBO 06.jpg.jpeg",
    "V CARD COMBO 07.jpg.jpeg", "V CARD COMBO 08.jpg.jpeg", "V CARD COMBO 09.jpeg",
    "V CARD COMBO 10.jpg.jpeg", "V CARD COMBO 11.jpg.jpeg"
  ]
};

const portfolioItems = Object.entries(rawPortfolioData).flatMap(([category, files]) =>
  files.map((file, index) => ({
    id: `${category}-${index}`,
    title: `${category} Project ${index + 1}`,
    category: category,
    image: `/portfolio/${category.toLowerCase().replace(" ", "-")}/${file}`,
    // Create a dynamic grid pattern, but keep logos consistent
    span: category === "Highlight Logo"
      ? "md:col-span-4 row-span-1"
      : index % 5 === 0 ? "md:col-span-8 row-span-2" : index % 3 === 0 ? "md:col-span-4 row-span-2" : "md:col-span-4 row-span-1"
  }))
);

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [displayLimit, setDisplayLimit] = useState(12);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const categoryParam = params.get("category");
      if (categoryParam) {
        const matchedCategory = categories.find(
          (c) => c.toLowerCase() === categoryParam.toLowerCase()
        );
        if (matchedCategory) {
          setActiveCategory(matchedCategory);
        }
      }
    }
  }, []);

  const filteredItems = useMemo(() =>
    portfolioItems.filter(
      (item) => activeCategory === "All" || item.category === activeCategory
    ), [activeCategory]
  );

  const displayedItems = useMemo(() =>
    filteredItems.slice(0, displayLimit),
    [filteredItems, displayLimit]
  );

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === 0 ? displayedItems.length - 1 : (prev as number) - 1
      );
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((prev) => 
        prev === displayedItems.length - 1 ? 0 : (prev as number) + 1
      );
    }
  };

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === "ArrowLeft") {
        setSelectedImageIndex((prev) => 
          prev === 0 ? displayedItems.length - 1 : (prev as number) - 1
        );
      } else if (e.key === "ArrowRight") {
        setSelectedImageIndex((prev) => 
          prev === displayedItems.length - 1 ? 0 : (prev as number) + 1
        );
      } else if (e.key === "Escape") {
        setSelectedImageIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImageIndex, displayedItems.length]);

  return (
    <main className="flex flex-col min-h-screen bg-background">
      <Navbar />

      <section className="pt-48 pb-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto w-full flex flex-col items-start">
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 border-l-4 border-primary pl-8 py-4 w-full max-w-4xl text-left"
        >
          <div className="flex justify-start">
            <TextReveal
              text="Portfolio."
              className="font-sora text-6xl md:text-9xl font-extrabold text-primary mb-6 tracking-tighter text-left uppercase"
            />
          </div>
          <p className="font-inter text-xl text-on-surface-variant max-w-2xl leading-relaxed text-left opacity-80">
            A curated collection of industrial design, premium packaging, and corporate identity projects. Precision in every pixel, excellence in every print.
          </p>
        </motion.header>

        {/* Filters */}
        <div className="w-full sticky top-[72px] md:top-[88px] z-20 py-4 mb-16 bg-background/95 backdrop-blur-md border-b border-outline-variant/10 flex flex-row flex-nowrap overflow-x-auto no-scrollbar justify-start gap-3 scroll-smooth px-margin-mobile md:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setDisplayLimit(12);
              }}
              className={cn(
                "group relative px-5 py-2 font-zt font-medium text-[11px] uppercase tracking-[0.2em] transition-all duration-300 rounded border flex-shrink-0 cursor-pointer",
                activeCategory === cat
                  ? "text-white border-primary"
                  : "text-on-surface-variant/70 border-outline-variant/20 hover:text-white hover:border-white/30"
              )}
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 bg-primary rounded -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Gallery - Dynamic Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 w-full">
          <AnimatePresence mode="popLayout">
            {displayedItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: idx * 0.02
                }}
                onClick={() => setSelectedImageIndex(idx)}
                className={cn(
                  "break-inside-avoid mb-6 group relative overflow-hidden border border-outline-variant/10 cursor-pointer rounded shadow-md hover:shadow-xl transition-all duration-300",
                  (item.category === "Highlight Logo" || item.category === "Logo Design")
                    ? "bg-white"
                    : "bg-surface-container"
                )}
              >
                {/* Responsive Self-Scaling Image */}
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={800}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={idx < 4}
                    className={cn(
                      "w-full h-auto transition-all duration-1000 group-hover:scale-105",
                      (item.category === "Highlight Logo" || item.category === "Logo Design") ? "p-8" : "p-0"
                    )}
                  />
                </div>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Borders for hover */}
                <div className="absolute inset-0 border-2 border-primary scale-98 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="inline-block px-3 py-1 bg-primary text-white font-zt font-black text-[10px] uppercase tracking-widest">
                        {item.category}
                      </span>
                    </div>
                    <div className="bg-primary p-3 rounded-full translate-x-4 group-hover:translate-x-0 transition-transform duration-500">
                      <Maximize2 size={20} className="text-white" />
                    </div>
                  </div>
                </div>

                {/* Industrial Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        {filteredItems.length > displayLimit && (
          <div className="flex justify-center w-full mt-16">
            <button
              onClick={() => setDisplayLimit((prev) => prev + 12)}
              className="px-12 py-5 border border-primary text-primary font-zt font-black text-xs uppercase tracking-[0.25em] hover:bg-primary hover:text-on-primary transition-all duration-300 rounded shadow-lg shadow-primary/5 hover:shadow-primary/20"
            >
              Load More Projects [{filteredItems.length - displayLimit} Remaining]
            </button>
          </div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImageIndex(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out"
          >
            <div 
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              <button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 z-30 w-14 h-14 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 flex items-center justify-center text-white hover:text-primary transition-all duration-300 shadow-2xl cursor-pointer group"
                aria-label="Previous Image"
              >
                <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
              </button>

              {/* Image Frame */}
              <div className="relative w-4/5 h-4/5 flex items-center justify-center pointer-events-none select-none">
                <Image
                  src={displayedItems[selectedImageIndex].image}
                  alt={displayedItems[selectedImageIndex].title}
                  fill
                  className="object-contain"
                  quality={100}
                />
              </div>

              {/* Next Button */}
              <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 z-30 w-14 h-14 rounded-full border border-white/10 hover:border-primary hover:bg-primary/10 flex items-center justify-center text-white hover:text-primary transition-all duration-300 shadow-2xl cursor-pointer group"
                aria-label="Next Image"
              >
                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <button
              className="absolute top-12 right-12 text-white/50 hover:text-white transition-colors z-20 cursor-pointer"
              onClick={() => setSelectedImageIndex(null)}
            >
              <span className="font-zt font-medium text-xs tracking-widest uppercase">Close [ESC]</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Industrial Footer Section */}
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low w-full overflow-hidden relative">
        <div className="max-w-max-width mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="font-sora text-4xl md:text-6xl font-black text-primary mb-6 leading-none uppercase italic" style={{ color: "#eb6420", textAlign: "center" }}>
                Ready to elevate <br /> your brand?
              </h2>
              <p className="font-inter text-lg text-on-surface-variant/70 mb-8" style={{ color: "#ffffff", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center" }}>
                Let's discuss your next industrial printing or design project. Our team is ready to bring your vision to life.
              </p>
              <button className="px-12 py-5 bg-primary text-primary-container font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-4 mx-auto md:mx-0" style={{ color: "#ffffff", margin: "auto" }}>
                Start a Project <ArrowRight size={24} />
              </button>
            </div>
            {/* <div className="relative group">
              <div className="absolute -inset-4 border border-primary/20 group-hover:border-primary/50 transition-colors" />
              <div className="w-64 h-64 border-2 border-primary flex items-center justify-center p-8 bg-background relative overflow-hidden">
                <div className="text-9xl font-black text-primary/5 absolute -right-8 -bottom-8 select-none">SD</div>
                <div className="text-center relative z-10 w-full h-full flex flex-col items-center justify-center">
                  <span className="block font-mono text-sm tracking-[0.3em] mb-4">EST. 2024</span>
                  <div className="relative w-full h-24">
                    <Image
                      src="/swastik-logo-new.png"
                      alt="Swastik Designs Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <Footer />
    </main >
  );
}

