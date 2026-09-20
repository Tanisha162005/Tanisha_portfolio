"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Briefcase, Mail, Send } from "lucide-react";
import { cn } from "@/lib/utils";

function MagneticIcon({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="w-16 h-16 rounded-full glass-pill flex items-center justify-center hover-trigger group border-white/20 hover:border-violet-accent transition-colors relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity" />
      <div className="text-violet-light group-hover:text-violet-accent transition-colors z-10">
        {children}
      </div>
    </motion.a>
  );
}

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "0%"]);

  return (
    <footer ref={containerRef} id="contact" className="relative z-0 overflow-hidden bg-violet-bg-edge corner-brackets">
      {/* Marquee Band */}
      <div className="w-full overflow-hidden flex whitespace-nowrap bg-violet-accent text-violet-bg-center py-3 transform -rotate-2 scale-110 relative z-20 shadow-xl border-y border-white/20">
        <motion.div
          className="flex items-center gap-8 px-4 w-max font-display font-bold text-xl uppercase tracking-wider"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {Array(10).fill("Let's Collaborate • Open for Opportunities • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>

      <motion.div style={{ y }} className="container mx-auto px-4 pt-32 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-start mb-24">
          
          {/* Header & Socials */}
          <div className="flex flex-col">
            <h2 className="text-sm uppercase tracking-widest text-violet-secondary font-semibold mb-6">Get in Touch</h2>
            <h3 className="text-6xl md:text-8xl font-display font-bold mb-8 leading-[0.9]">
              Let's work <br />
              <span className="text-gradient">together.</span>
            </h3>
            
            <p className="text-violet-light/70 text-lg max-w-md mb-12">
              Have a project in mind or just want to say hi? I'd love to hear from you.
            </p>

            <div className="flex gap-6">
              <MagneticIcon href="mailto:tanisha@example.com">
                <Mail size={24} />
              </MagneticIcon>
              <MagneticIcon href="https://github.com/Tanisha162005">
                <Code2 size={24} />
              </MagneticIcon>
              <MagneticIcon href="https://linkedin.com">
                <Briefcase size={24} />
              </MagneticIcon>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 md:p-12 w-full max-w-lg lg:ml-auto">
            <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-violet-light focus:outline-none peer" 
                  placeholder=" "
                  required 
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 top-3 text-violet-light/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-violet-accent peer-valid:-top-4 peer-valid:text-xs"
                >
                  Your Name
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-accent transition-all duration-500 peer-focus:w-full" />
              </div>
              
              <div className="relative group">
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-transparent border-b border-white/20 py-3 text-violet-light focus:outline-none peer" 
                  placeholder=" "
                  required 
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 top-3 text-violet-light/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-violet-accent peer-valid:-top-4 peer-valid:text-xs"
                >
                  Your Email
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-accent transition-all duration-500 peer-focus:w-full" />
              </div>

              <div className="relative group">
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-3 text-violet-light focus:outline-none peer resize-none" 
                  placeholder=" "
                  required 
                />
                <label 
                  htmlFor="message" 
                  className="absolute left-0 top-3 text-violet-light/50 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-violet-accent peer-valid:-top-4 peer-valid:text-xs"
                >
                  Tell me about your project
                </label>
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-accent transition-all duration-500 peer-focus:w-full" />
              </div>

              <button type="submit" className="flex items-center justify-between glass-pill px-8 py-4 mt-4 text-violet-light font-medium hover:bg-white/10 transition-colors group hover-trigger border-white/20 hover:border-violet-accent">
                Send Message
                <Send size={18} className="transform group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform text-violet-accent" />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-violet-light/50 text-sm">
          <p>© {new Date().getFullYear()} Tanisha. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed & Built with Next.js & Framer Motion</p>
        </div>
      </motion.div>
    </footer>
  );
}
