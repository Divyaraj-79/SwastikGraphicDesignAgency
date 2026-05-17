"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Reset scroll on page change
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-primary-container z-[100] origin-bottom pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        className="fixed top-0 left-0 w-full h-screen bg-surface-container-highest z-[99] origin-bottom pointer-events-none"
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
