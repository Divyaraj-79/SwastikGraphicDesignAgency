"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileDown, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Slide {
  tagline: string;
  line1: React.ReactNode;
  line2: React.ReactNode;
  description: string;
  image: string;
  btnText: string;
  btnLink: string;
  previewTitle: string;
}

const slides: Slide[] = [
  {
    tagline: "Precision. Scale. Impact.",
    line1: (
      <>
        EXPERIENCE THE{" "}
        <span className="text-outline font-sora font-extrabold uppercase select-none">
          POWER
        </span>
      </>
    ),
    line2: "OF DESIGN",
    description:
      "We create high-impact graphic design, premium branding, and custom packaging, blending refined creative direction with high-fidelity execution.",
    image: "/creative-design-studio.png",
    btnText: "Explore Services",
    btnLink: "/services",
    previewTitle: "Visual Studio"
  },
  {
    tagline: "Cohesive Brand Ecosystems",
    line1: "CRAFTING UNIFIED",
    line2: (
      <>
        <span className="text-outline font-sora font-extrabold uppercase select-none">
          BRAND
        </span>{" "}
        IDENTITIES
      </>
    ),
    description:
      "Premium print collateral, corporate stationery, and customized layouts that elevate your professional presence and define your visual identity.",
    image: "/branding-stationery-design.png",
    btnText: "Our Portfolio",
    btnLink: "/portfolio",
    previewTitle: "Corporate Branding"
  },
  {
    tagline: "High-Fidelity Product Packaging",
    line1: "DURABLE & ARTISTIC",
    line2: (
      <>
        <span className="text-outline font-sora font-extrabold uppercase select-none">
          BOX
        </span>{" "}
        PACKAGING
      </>
    ),
    description:
      "Premium pouches, structural corrugated boxes, and eye-catching product packaging tailored for retail appeal and maximum shelf-impact.",
    image: "/portfolio/pouches/BAG DESIGN 02.jpg.jpeg",
    btnText: "Packaging Solutions",
    btnLink: "/services",
    previewTitle: "Premium Packaging"
  },
  {
    tagline: "Vibrant & Durable Labels",
    line1: "SHAPING PREMIUM",
    line2: (
      <>
        <span className="text-outline font-sora font-extrabold uppercase select-none">
          PRODUCT
        </span>{" "}
        LABELS
      </>
    ),
    description:
      "Vibrant custom stickers, high-gloss labels, and transparent PVC sticker designs customized for perfect fit and stunning presentation.",
    image: "/portfolio/sticker-design/GLOSSY STICKER 04.jpg.jpeg",
    btnText: "Sticker Showcase",
    btnLink: "/portfolio",
    previewTitle: "Custom Labels"
  }
];

// WebGL shaders sources
const vsSource = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    vUv.y = 1.0 - vUv.y; // Flip y-axis to match canvas & image coordinates
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fsSource = `
  precision mediump float;
  varying vec2 vUv;
  
  uniform sampler2D uTexture1;
  uniform sampler2D uTexture2;
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uImageRes1;
  uniform vec2 uImageRes2;
  
  vec2 getCoverUv(vec2 uv, vec2 canvasRes, vec2 texRes) {
    if (texRes.x <= 0.0 || texRes.y <= 0.0) return uv;
    float canvasRatio = canvasRes.x / canvasRes.y;
    float texRatio = texRes.x / texRes.y;
    vec2 newUv = uv;
    if (canvasRatio > texRatio) {
      float scaleY = texRatio / canvasRatio;
      newUv.y = (uv.y - 0.5) * scaleY + 0.5;
    } else {
      float scaleX = canvasRatio / texRatio;
      newUv.x = (uv.x - 0.5) * scaleX + 0.5;
    }
    return newUv;
  }
  
  // Custom fluid ripple displacement calculation
  vec2 distort(vec2 uv, float progress, float time) {
    // Layered sine/cosine waves for organic watery ripples
    float waveX = sin(uv.y * 12.0 + time * 1.5) * cos(uv.x * 10.0 + time * 1.0);
    float waveY = cos(uv.x * 14.0 - time * 1.2) * sin(uv.y * 11.0 + time * 1.4);
    
    // Warp peaks at progress = 0.5
    float intensity = 0.09 * sin(progress * 3.14159265);
    return vec2(waveX, waveY) * intensity;
  }
  
  // Chromatic split offset color sample
  vec4 getChromaticTexture(sampler2D tex, vec2 uv, float offset) {
    float r = texture2D(tex, uv + vec2(offset, 0.0)).r;
    float g = texture2D(tex, uv).g;
    float b = texture2D(tex, uv - vec2(offset, 0.0)).b;
    float a = texture2D(tex, uv).a;
    return vec4(r, g, b, a);
  }
  
  void main() {
    vec2 uv = vUv;
    vec2 uv1 = getCoverUv(uv, uResolution, uImageRes1);
    vec2 uv2 = getCoverUv(uv, uResolution, uImageRes2);
    
    vec2 disp = distort(uv, uProgress, uTime);
    vec2 distortedUv1 = uv1 + disp;
    vec2 distortedUv2 = uv2 - disp;
    
    // Chromatic split peaks at 50% progress
    float chromaticOffset = 0.012 * sin(uProgress * 3.14159265);
    
    vec4 color1 = getChromaticTexture(uTexture1, distortedUv1, chromaticOffset);
    vec4 color2 = getChromaticTexture(uTexture2, distortedUv2, chromaticOffset);
    
    gl_FragColor = mix(color1, color2, uProgress);
  }
`;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [webglSupported, setWebglSupported] = useState(true);

  // WebGL references for render-loop tracking
  const activeIndexRef = useRef(0);
  const prevIndexRef = useRef(0);
  const transitionProgressRef = useRef(0);

  // Sync refs with React state to access hot variables inside the render frame loop
  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    prevIndexRef.current = prevIndex;
  }, [prevIndex]);

  // Load a single texture with correct wrapping and dimension parameters
  const loadTexture = (gl: WebGLRenderingContext, src: string): WebGLTexture => {
    const texture = gl.createTexture();
    if (!texture) throw new Error("Could not create WebGL texture");

    gl.bindTexture(gl.TEXTURE_2D, texture);

    // Set placeholder color (dark gray) while the real image is loaded asynchronously
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([19, 19, 19, 255])
    );

    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);

      // Store loaded dimension data on texture node for aspect ratio cover corrections
      (texture as any).width = img.naturalWidth;
      (texture as any).height = img.naturalHeight;
    };
    img.src = src;

    return texture;
  };

  // WebGL Mount & Continuous Render Loop Hook
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") ||
      (canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

    if (!gl) {
      console.warn("WebGL not supported in this environment. Falling back to CSS transitions.");
      setWebglSupported(false);
      return;
    }

    setWebglSupported(true);

    // Compile Vertex Shader
    const vs = gl.createShader(gl.VERTEX_SHADER);
    if (!vs) return;
    gl.shaderSource(vs, vsSource);
    gl.compileShader(vs);
    if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
      console.error("Vertex shader compile error:", gl.getShaderInfoLog(vs));
      return;
    }

    // Compile Fragment Shader
    const fs = gl.createShader(gl.FRAGMENT_SHADER);
    if (!fs) return;
    gl.shaderSource(fs, fsSource);
    gl.compileShader(fs);
    if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
      console.error("Fragment shader compile error:", gl.getShaderInfoLog(fs));
      return;
    }

    // Create & link the shader program
    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    // Create a full-screen quad (two triangles covering -1 to 1 space)
    const vertices = new Float32Array([
      -1, -1,
      1, -1,
      -1, 1,
      -1, 1,
      1, -1,
      1, 1,
    ]);
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Find and map uniform locations
    const uProgress = gl.getUniformLocation(program, "uProgress");
    const uTime = gl.getUniformLocation(program, "uTime");
    const uTexture1 = gl.getUniformLocation(program, "uTexture1");
    const uTexture2 = gl.getUniformLocation(program, "uTexture2");
    const uResolution = gl.getUniformLocation(program, "uResolution");
    const uImageRes1 = gl.getUniformLocation(program, "uImageRes1");
    const uImageRes2 = gl.getUniformLocation(program, "uImageRes2");

    // Load textures for all slides
    const texturesList: WebGLTexture[] = [];
    try {
      slides.forEach((slide) => {
        texturesList.push(loadTexture(gl, slide.image));
      });
    } catch (err) {
      console.error("Failed to load textures", err);
    }

    // Set viewport and dimensions
    const resizeCanvas = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize program variables
    gl.useProgram(program);

    // Continuous rendering animation frame loop
    let animationFrameId: number;
    const render = (time: number) => {
      const elapsedSeconds = time * 0.001;

      // Ensure viewport matches canvas layout size
      resizeCanvas();

      // Clear the canvas
      gl.clearColor(0.075, 0.075, 0.075, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const t1 = texturesList[prevIndexRef.current];
      const t2 = texturesList[activeIndexRef.current];

      if (t1 && t2) {
        // Bind texture 1 to Unit 0
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, t1);
        gl.uniform1i(uTexture1, 0);
        gl.uniform2f(uImageRes1, (t1 as any).width || 1920, (t1 as any).height || 1080);

        // Bind texture 2 to Unit 1
        gl.activeTexture(gl.TEXTURE1);
        gl.bindTexture(gl.TEXTURE_2D, t2);
        gl.uniform1i(uTexture2, 1);
        gl.uniform2f(uImageRes2, (t2 as any).width || 1920, (t2 as any).height || 1080);
      }

      // Update uniforms
      gl.uniform1f(uProgress, transitionProgressRef.current);
      gl.uniform1f(uTime, elapsedSeconds);
      gl.uniform2f(uResolution, canvas.width, canvas.height);

      // Draw the full-screen quad
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    // Clean up all GPU and system resources on unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);

      gl.deleteBuffer(buffer);
      texturesList.forEach((tex) => gl.deleteTexture(tex));
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteProgram(program);
    };
  }, []);

  // Slide transition controller
  const changeSlide = (nextIndex: number) => {
    if (isTransitioning || nextIndex === activeIndex) return;

    setPrevIndex(activeIndex);
    setActiveIndex(nextIndex);
    setIsTransitioning(true);

    const duration = 1200; // 1.2 seconds premium slide transition duration
    let startTime: number | null = null;

    const animateTransition = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min(elapsed / duration, 1);

      // Smooth custom ease-in-out cubic bezier approximation curve
      const easeProgress =
        rawProgress < 0.5
          ? 4 * rawProgress * rawProgress * rawProgress
          : 1 - Math.pow(-2 * rawProgress + 2, 3) / 2;

      transitionProgressRef.current = easeProgress;

      if (rawProgress < 1) {
        requestAnimationFrame(animateTransition);
      } else {
        // Complete transition: align refs and states
        setIsTransitioning(false);
        transitionProgressRef.current = 0;
        setPrevIndex(nextIndex);
      }
    };

    requestAnimationFrame(animateTransition);
  };

  // Autoplay intervals to slide every 7.5 seconds when not interacting
  useEffect(() => {
    if (isTransitioning) return;
    const timer = setTimeout(() => {
      const next = (activeIndex + 1) % slides.length;
      changeSlide(next);
    }, 7500);

    return () => clearTimeout(timer);
  }, [activeIndex, isTransitioning]);

  // Derived slide references for previews
  const prevSlideIndex = (activeIndex - 1 + slides.length) % slides.length;
  const nextSlideIndex = (activeIndex + 1) % slides.length;

  // Staggered text layout variants
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const textItemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 85,
        damping: 14,
        duration: 0.8
      }
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.35,
        ease: "easeIn" as const
      }
    }
  };


  return (
    <section className="relative min-h-screen w-full flex items-center bg-background overflow-hidden select-none">

      {/* Background Section (WebGL Canvas with CSS Transition Fallback) */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {webglSupported ? (
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover select-none pointer-events-none"
          />
        ) : (
          // Fallback block if client device doesn't support WebGL
          <div className="absolute inset-0 bg-surface select-none pointer-events-none">
            {slides.map((slide, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: idx === activeIndex ? 0.35 : 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={slide.image}
                  alt="Branding studio background fallback"
                  className="w-full h-full object-cover object-center mix-blend-luminosity opacity-80"
                />
              </motion.div>
            ))}
          </div>
        )}

        {/* Sleek dark gradient filter to enhance text contrast and typography readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/95 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-black/30 z-10 pointer-events-none mix-blend-multiply" />
      </div>

      {/* Decorative fine-grid or subtle overlay element */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(19,19,19,0.7)_100%)] z-15 pointer-events-none" />

      {/* PRIMARY CENTRAL TEXT OVERLAY */}
      <div className="relative z-20 max-w-max-width mx-auto w-full px-margin-mobile md:px-margin-desktop pt-24 pb-32 flex items-center min-h-[90vh]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter w-full">
          <div className="col-span-1 md:col-span-10 flex flex-col justify-center">

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={textContainerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col items-start w-full"
              >
                {/* Accent Tagline with guided dash */}
                <motion.div
                  variants={textItemVariants}
                  className="inline-flex items-center gap-4 mb-6"
                >
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: 40 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "circOut" }}
                    className="h-[2px] bg-primary"
                  />
                  <span className="font-mono text-xs text-primary uppercase tracking-[0.4em] font-semibold">
                    {slides[activeIndex].tagline}
                  </span>
                </motion.div>

                {/* Main Headline (Staggered Lines) */}
                <div className="mb-8 overflow-hidden font-sora">
                  <motion.h1
                    variants={textItemVariants}
                    className="text-4xl sm:text-5xl md:text-8xl font-black text-foreground leading-[1] tracking-tighter w-full"
                  >
                    {slides[activeIndex].line1}
                  </motion.h1>
                  <motion.h1
                    variants={textItemVariants}
                    className="text-4xl sm:text-5xl md:text-8xl font-black text-foreground leading-[1.1] tracking-tighter w-full flex items-center gap-4 mt-2"
                  >
                    <span className="text-primary font-sora font-extrabold select-none">↗</span>{" "}
                    {slides[activeIndex].line2}
                  </motion.h1>
                </div>

                {/* Description Paragraph */}
                <motion.p
                  variants={textItemVariants}
                  className="font-inter text-base md:text-xl text-on-surface-variant max-w-2xl mb-10 leading-relaxed opacity-85"
                >
                  {slides[activeIndex].description}
                </motion.p>

                {/* Dynamic call to action buttons & Socials */}
                <motion.div
                  variants={textItemVariants}
                  className="flex flex-wrap gap-6 items-center w-full mt-2"
                >
                  <Link
                    href={slides[activeIndex].btnLink}
                    className="bg-primary-container text-foreground font-saira font-bold px-8 py-4 rounded-default uppercase tracking-widest text-xs flex items-center gap-3 group relative overflow-hidden transition-all duration-300"
                    style={{ color: "#ffffff" }}
                  >
                    <span className="relative z-10">{slides[activeIndex].btnText}</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                    <motion.div
                      className="absolute inset-0 bg-surface-container-highest"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ type: "tween", ease: "circOut" }}
                    />
                  </Link>

                  <a
                    href="/brochure/swastik-brochure.pdf"
                    download="Swastik_Designs_Brochure.pdf"
                    className="flex items-center gap-3 text-primary font-saira font-bold uppercase tracking-widest text-xs px-6 py-4 hover:text-primary-container transition-all group"
                  >
                    <div className="relative overflow-hidden">
                      <span className="block border-b border-primary/30 group-hover:border-primary transition-colors pb-1" style={{ color: "#ffffff" }}>
                        Brochure
                      </span>
                    </div>
                    <div className="flex items-center justify-center bg-surface-container w-9 h-9 rounded-full group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[360deg] border border-outline-variant/30">
                      <FileDown className="w-4 h-4" />
                    </div>
                  </a>

                  {/* Guided divider line */}
                  <div className="hidden md:block w-[1px] h-6 bg-outline-variant/40 mx-2" />

                  {/* Creative Horizontal Follow Us CTA */}
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-primary-container uppercase tracking-[0.3em] font-bold select-none" style={{ color: "#ffffff" }}>
                        Follow Us
                      </span>
                      <span className="w-6 h-[1px] bg-outline-variant/50 hidden sm:block select-none" />
                    </div>

                    <div className="flex items-center gap-3">
                      <motion.a
                        whileHover={{ scale: 1.12, y: -2 }}
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-outline-variant/40 bg-surface-container/30 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 shadow-md shadow-black/10"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 8H7v3h2v9h4v-9h3.625L17 8h-4V6.5c0-.85.174-1.2 1.1-1.2H17V1h-2.9C11.3 1 9 2.5 9 5.8V8z" />
                        </svg>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.12, y: -2 }}
                        href="https://instagram.com/swastik_branding_agency"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-outline-variant/40 bg-surface-container/30 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 shadow-md shadow-black/10"
                      >
                        <svg className="w-3.5 h-3.5 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.12, y: -2 }}
                        href="https://wa.me/917600007625"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full border border-outline-variant/40 bg-surface-container/30 flex items-center justify-center text-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 shadow-md shadow-black/10"
                      >
                        <svg
                          className="w-3.5 h-3.5 fill-current"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.59 1.981 14.117.957 12.01.957c-5.446 0-9.873 4.38-9.877 9.801-.001 1.77.472 3.498 1.371 5.041L2.47 21.53l6.177-1.594-.003-.002z" />
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </motion.div>

              </motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>



      {/* RIGHT SIDEBAR BULLETS PAGING INDICATORS */}
      <div className="absolute right-8 md:right-12 top-1/2 -translate-y-1/2 z-30 flex flex-col gap-6 items-center">
        {slides.map((_, idx) => {
          const isActive = idx === activeIndex;
          return (
            <button
              key={idx}
              onClick={() => changeSlide(idx)}
              className="relative p-2 group cursor-pointer"
              aria-label={`Go to slide ${idx + 1}`}
            >
              {/* Sleek external rotating ring on active dot */}
              {isActive && (
                <motion.span
                  layoutId="activeBulletCircle"
                  className="absolute inset-0 rounded-full border border-primary/50"
                  transition={{ type: "spring", stiffness: 100, damping: 15 }}
                  animate={{ rotate: 360 }}
                  style={{ originX: 0.5, originY: 0.5 }}
                />
              )}
              {/* Bullet Center Dot */}
              <div
                className={`w-2 h-2 rounded-full bullet-dot ${isActive
                  ? "bg-primary scale-125"
                  : "bg-outline-variant group-hover:scale-125 group-hover:bg-primary/70"
                  }`}
              />
            </button>
          );
        })}
      </div>

      {/* BOTTOM AREA BAR (PAGINATION AND PREVIEWS) */}
      <div className="absolute bottom-8 left-0 w-full z-30 px-8 md:px-12 flex justify-between items-center">

        {/* BOTTOM LEFT: PREVIOUS PREVIEW BUTTON */}
        <button
          onClick={() => changeSlide(prevSlideIndex)}
          disabled={isTransitioning}
          className="flex items-center gap-4 text-left group cursor-pointer select-none"
        >
          <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 transform group-hover:-translate-x-1">
            <ArrowLeft size={16} className="text-on-surface-variant group-hover:text-primary transition-colors" />
          </div>
          <div className="hidden md:flex flex-col">
            <span className="font-mono text-[9px] text-on-surface-variant/50 uppercase tracking-widest leading-none mb-1">
              Previous
            </span>
            <span className="font-saira text-xs font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-wider">
              {slides[prevSlideIndex].previewTitle}
            </span>
          </div>
        </button>

        {/* BOTTOM CENTER: NUMERICAL SLIDE INDICATOR */}
        <div className="font-mono text-sm tracking-wider flex items-center gap-2">
          <AnimatePresence mode="popLayout">
            <motion.span
              key={activeIndex}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -15, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="text-primary font-bold inline-block"
            >
              0{activeIndex + 1}
            </motion.span>
          </AnimatePresence>
          <span className="text-outline-variant/60">/</span>
          <span className="text-on-surface-variant/60">0{slides.length}</span>
        </div>

        {/* BOTTOM RIGHT: NEXT PREVIEW BUTTON */}
        <button
          onClick={() => changeSlide(nextSlideIndex)}
          disabled={isTransitioning}
          className="flex items-center gap-4 text-right group cursor-pointer select-none"
        >
          <div className="hidden md:flex flex-col items-end">
            <span className="font-mono text-[9px] text-on-surface-variant/50 uppercase tracking-widest leading-none mb-1">
              Next Up
            </span>
            <span className="font-saira text-xs font-bold text-foreground group-hover:text-primary transition-colors uppercase tracking-wider">
              {slides[nextSlideIndex].previewTitle}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all duration-300 transform group-hover:translate-x-1">
            <ArrowRight size={16} className="text-on-surface-variant group-hover:text-primary transition-colors" />
          </div>
        </button>

      </div>
    </section>
  );
}
