"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Freelance", href: "#freelance" },
  { name: "Events", href: "#events" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.name.toLowerCase());
      const currentSection = sections.find(section => {
        const el = document.getElementById(section === "home" ? "hero" : section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });

      if (currentSection) {
        setActive(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string, name: string) => {
    setActive(name);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      // Lenis will automatically handle this if smooth scrolling is set up globally
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
        className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
      >
        {/* Desktop Nav */}
        <div
          className={cn(
            "hidden md:flex items-center gap-2 p-1.5 transition-all duration-300",
            scrolled ? "glass-pill px-2" : "bg-transparent px-4"
          )}
        >
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.href, link.name)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                active === link.name ? "text-violet-bg-center" : "text-violet-light hover:text-white hover-trigger"
              )}
            >
              {active === link.name && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 bg-violet-accent rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex justify-between w-full max-w-sm ml-auto mr-0">
           <div className="flex-1" />
           <button
             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
             className="glass-pill p-3 z-50 hover-trigger"
           >
             {mobileMenuOpen ? <X size={20} className="text-violet-light" /> : <Menu size={20} className="text-violet-light" />}
           </button>
        </div>
      </motion.nav>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-violet-bg-center/90 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                onClick={() => scrollTo(link.href, link.name)}
                className="text-3xl font-display font-medium text-violet-light hover:text-violet-accent transition-colors"
              >
                {link.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
