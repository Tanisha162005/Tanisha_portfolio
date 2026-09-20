"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Asynchronous Federated Learning with Robust Aggregation",
    description: "Privacy-preserving federated learning system for decentralized training across clients, with robust aggregation to handle noisy updates and improve convergence on IID and non-IID data.",
    tags: ["Federated Learning", "Robust Aggregation", "Distributed Systems", "Python"],
    link: null,
  },
  {
    title: "AI-Powered Automotive Customer Sentiment & Insights Platform",
    description: "Analyzes social media and customer opinions on automobiles — sentiment classification and preference analytics, plus a functional AI chatbot prototype for conversational access to results.",
    tags: ["NLP", "Sentiment Analysis", "Text Classification", "Conversational AI"],
    link: null,
  },
  {
    title: "AI-Based Behavior-Aware Personalized Fraud Detection System",
    description: "Personalized fraud detection using dynamic spending profiles, combining anomaly detection (Isolation Forest, One-Class SVM) with XGBoost for real-time, explainable risk scoring.",
    tags: ["Isolation Forest", "One-Class SVM", "XGBoost", "Machine Learning"],
    link: null,
  },
  {
    title: "The Predictive Smart Inventory Supply Allocation Agent",
    description: "An agentic AI system for smart inventory and supply allocation prediction.",
    tags: ["Python", "AI", "Agentic System"],
    link: "#", // Placeholder for github repo
  },
  {
    title: "Conversational AI Data Annotation QA Pipeline",
    description: "A quality assurance pipeline for conversational AI data annotation.",
    tags: ["Python", "NLP", "QA", "Conversational AI"],
    link: "#",
  },
  {
    title: "Om Sai Financial Services (Repo)",
    description: "Website development for Om Sai Financial Services.",
    tags: ["HTML", "Web Development"],
    link: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className="relative h-full glass-card p-8 flex flex-col group hover-trigger cursor-none"
      >
        {/* Glowing Gradient Border */}
        <div className="absolute inset-0 rounded-[32px] border-2 border-transparent bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ maskImage: 'linear-gradient(white, white)', maskComposite: 'exclude', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', padding: '1px' }} />
        
        <div className="relative z-10 flex flex-col h-full transform-gpu" style={{ transform: isHovered ? "translateZ(30px)" : "none", transition: "transform 0.3s ease" }}>
          <div className="flex justify-between items-start mb-6">
            <div className="w-12 h-12 rounded-2xl bg-violet-primary/20 flex items-center justify-center border border-violet-secondary/20">
              <Code2 className="text-violet-accent" size={24} />
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-white/10 rounded-full transition-colors hover-trigger">
                <ExternalLink className="text-violet-light/70 hover:text-violet-accent transition-colors" size={20} />
              </a>
            )}
          </div>
          
          <h4 className="text-2xl font-display font-bold text-violet-light mb-4 group-hover:text-violet-accent transition-colors">
            {project.title}
          </h4>
          
          <p className="text-violet-light/70 mb-8 flex-grow leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
            {project.tags.map((tag, i) => (
              <motion.span
                key={i}
                animate={{ y: isHovered ? -2 : 0 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className="text-xs font-medium px-3 py-1 bg-white/5 border border-white/10 rounded-full text-violet-light/80"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function AcademicProjects() {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <h2 className="text-sm uppercase tracking-widest text-violet-secondary font-semibold mb-3">Academic & Personal</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-violet-light">
            Research & <span className="text-gradient">Innovations</span>
          </h3>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15 } }
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
