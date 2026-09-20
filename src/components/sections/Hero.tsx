"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

// Magnetic Button Component
function MagneticButton({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      onClick={onClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(
        "relative px-8 py-4 rounded-full bg-violet-primary hover:bg-violet-secondary text-violet-light font-medium overflow-hidden group transition-colors hover-trigger",
        className
      )}
    >
      <span className="relative z-10 block">{children}</span>
      <div className="absolute inset-0 rounded-full bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity" />
    </motion.button>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // For the staggered text reveal
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 1.6, // wait for loader
      },
    },
  };

  const item: Variants = {
    hidden: { y: "100%", opacity: 0 },
    show: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden corner-brackets"
    >
      {/* Background Gradient Blob */}
      <motion.div
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] opacity-20 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(circle, var(--color-violet-primary) 0%, var(--color-violet-accent) 100%)",
        }}
        animate={{
          x: ["-5%", "5%", "-5%"],
          y: ["-5%", "5%", "-5%"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 z-10 flex flex-col items-center text-center"
      >
        <motion.div variants={container} initial="hidden" animate="show" className="max-w-4xl mx-auto flex flex-col items-center">
          <div className="overflow-hidden pb-2 mb-2">
            <motion.p variants={item} className="text-violet-accent font-medium tracking-wide uppercase text-sm mb-4">
              Hello, I'm Tanisha
            </motion.p>
          </div>
          
          <div className="overflow-hidden pb-4">
            <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-violet-light leading-tight">
              Full-Stack Developer
            </motion.h1>
          </div>
          
          <div className="overflow-hidden pb-4">
            <motion.h1 variants={item} className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-gradient leading-tight mb-8">
              &amp; AI/ML Engineer
            </motion.h1>
          </div>

          <div className="overflow-hidden">
            <motion.p variants={item} className="text-lg md:text-xl text-violet-light/70 max-w-2xl mb-12 leading-relaxed">
              Crafting intelligent, scalable digital experiences and agentic systems that push the boundaries of modern web technologies.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 items-center"
          >
            <MagneticButton onClick={() => {
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}>
              View my work
            </MagneticButton>
            
            <a 
              href="/Tanisha_Resume.pdf" 
              download 
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-violet-light font-medium transition-colors hover-trigger"
            >
              Download Resume
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-violet-light/50 font-medium">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-12 glass-pill flex justify-center p-1"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-violet-accent mt-1" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
