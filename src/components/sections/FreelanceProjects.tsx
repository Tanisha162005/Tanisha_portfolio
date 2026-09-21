"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Swami Renewable",
    category: "Solar Energy Solutions",
    description: "Developed a comprehensive website showcasing their solar energy products and services.",
    tags: ["Web Development", "UI/UX", "Client Project"],
    link: "https://swamirenewable.com",
    color: "from-amber-500/20 to-orange-500/20",
    image: "/projects/swami.jpg"
  },
  {
    title: "Sushant Ghadge Masterclass",
    category: "Content Creation",
    description: "Created a modern landing page focusing on conversion and user engagement.",
    tags: ["Landing Page", "Web Development", "Client Project"],
    link: "https://sushantghadge.com",
    color: "from-blue-500/20 to-cyan-500/20",
    image: "/projects/sushant.jpg"
  },
  {
    title: "OFF SCRIPT STUDIOS",
    category: "Creative Boutique",
    description: "Designed and built a creative boutique film & content studio website with dynamic elements.",
    tags: ["Creative Portfolio", "Web Development"],
    link: "https://off-script-website.vercel.app",
    color: "from-purple-500/20 to-pink-500/20",
    image: "/projects/offscript.jpg"
  },
  {
    title: "Om Sai Financial Services",
    category: "Loan Recovery & Collections",
    description: "Developed a professional website for a financial services firm specializing in loan recovery.",
    tags: ["Corporate Website", "Web Development"],
    link: "https://om-sai-financial-services-khaki.vercel.app",
    color: "from-emerald-500/20 to-teal-500/20",
    image: "/projects/omsai.jpg"
  },
  {
    title: "MakeMart",
    category: "Buy, Sell & Showcase Innovation",
    description: "Built an online marketplace platform to showcase and trade innovative products.",
    tags: ["E-commerce", "Marketplace"],
    link: "https://maktronics-marketplace-development.vercel.app",
    color: "from-indigo-500/20 to-blue-500/20",
    image: "/projects/makemart.jpg"
  },
  {
    title: "Meethi — The Taste of Sweetness",
    category: "Shankar Confectioners",
    description: "Developed a brand website highlighting their sweet products and heritage.",
    tags: ["Brand Website", "Web Development"],
    link: "https://shanker-confectioners-website.vercel.app",
    color: "from-rose-500/20 to-red-500/20",
    image: "/projects/meethi.jpg"
  },
];

export default function FreelanceProjects() {
  const containerRef = useRef<HTMLDivElement>(null);


  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });



  return (
    <section 
      id="freelance" 
      ref={containerRef}
      className="py-32 relative z-10"
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-start"
        >
          <h2 className="text-sm uppercase tracking-widest text-violet-secondary font-semibold mb-3">Freelance & Client Work</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-violet-light max-w-2xl leading-tight">
            Digital Experiences Crafted for <span className="text-gradient">Impact</span>.
          </h3>
        </motion.div>

        <div className="flex flex-col border-t border-white/10">
          {projects.map((project, index) => (
            <ProjectRow 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>
      </div>


    </section>
  );
}

function ProjectRow({ 
  project, 
  index 
}: { 
  project: typeof projects[0]; 
  index: number; 
}) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col md:flex-row md:items-center justify-between py-8 border-b border-white/10 hover-trigger hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-12 flex-grow">
        <h4 className="text-3xl md:text-5xl font-display font-bold text-violet-light group-hover:text-violet-accent transition-colors">
          {project.title}
        </h4>
        <span className="text-violet-light/50 text-lg group-hover:text-violet-light/80 transition-colors">
          {project.category}
        </span>
      </div>

      <div className="mt-6 md:mt-0 flex items-center gap-6 justify-between md:justify-end w-full md:w-auto">
        <div className="hidden lg:flex gap-2">
          {project.tags.slice(0, 2).map((tag, i) => (
            <span key={i} className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-violet-light/80">
              {tag}
            </span>
          ))}
        </div>
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-violet-accent group-hover:border-violet-accent transition-all duration-300">
          <ArrowRight className="text-violet-light group-hover:text-violet-bg-center transform group-hover:-rotate-45 transition-all duration-300" />
        </div>
      </div>
    </motion.a>
  );
}
