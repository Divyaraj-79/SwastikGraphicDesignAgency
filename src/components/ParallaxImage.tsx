"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

export default function ParallaxImage({ src, alt, className, imageClassName }: ParallaxImageProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <div ref={ref} className={cn("overflow-hidden relative", className)}>
      <motion.img
        style={{ y, scale: 1.2 }} // scale up to avoid seeing edges
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover", imageClassName)}
      />
    </div>
  );
}
