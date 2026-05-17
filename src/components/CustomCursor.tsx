"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHoverStart = () => setIsHovering(true);
    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener("mousemove", moveCursor);

    // Initial check for interactive elements
    const updateInteractiveElements = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart);
        el.addEventListener("mouseleave", handleHoverEnd);
      });
    };

    updateInteractiveElements();

    // Use a mutation observer to handle dynamic content
    const observer = new MutationObserver(updateInteractiveElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary-container rounded-full pointer-events-none z-[9999] mix-blend-difference hidden md:block"
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary-container rounded-full pointer-events-none z-[9998] hidden md:block"
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.3 : 0.6,
          backgroundColor: isHovering ? "rgba(250, 97, 63, 0.1)" : "rgba(250, 97, 63, 0)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          x: "-50%",
          y: "-50%",
        }}
      />
    </>
  );
}
