"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Briefcase, Trophy, ChevronRight } from "lucide-react";

const education = [
  {
    title: "B.Tech in Artificial Intelligence & Machine Learning",
    institution: "R.C. Patel Institute of Technology, Shirpur",
    period: "2023 – Present",
    details: "GPA: 9.20",
  }
];

const experience = [
  {
    role: "Freelance AI & Web Developer",
    company: "Independent",
    period: "2024 – Present",
    description: "Delivered custom web-based and AI-driven solutions for multiple clients, managing requirements from consultation through deployment."
  },
  {
    role: "AI Research Intern",
    company: "Tagowls",
    period: "Aug 2025 – Nov 2025",
    description: "Working on NLP and real-world ML applications; exploring Agentic AI workflows and RAG-based systems."
  },
  {
    role: "AI/ML Intern",
    company: "CICD Prosystems",
    period: "Jun 2026 – Aug 2026",
    description: "Worked on AI/ML tasks including data preprocessing, model building, and evaluation, gaining hands-on exposure to applying machine learning techniques to real-world problems."
  }
];

const activities = [
  "1st Place – GDG On Campus Hackathon, DY Patil Kolhapur",
  "Core Member – E-Cell; Technical Member – Data Polaris",
  "Invited as guest speaker to conduct sessions on AI fundamentals and future technologies for students.",
  "Attended 5+ hackathons, 1 bootcamp, and multiple AI events."
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="experience" ref={containerRef} className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col items-center text-center"
        >
          <h2 className="text-sm uppercase tracking-widest text-violet-secondary font-semibold mb-3">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-violet-light">
            Experience & <span className="text-gradient">Education</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
          
          {/* Experience Column */}
          <motion.div style={{ y }} className="flex flex-col gap-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full glass-pill flex items-center justify-center border-violet-secondary/30">
                <Briefcase className="text-violet-accent" size={24} />
              </div>
              <h4 className="text-2xl font-display font-bold text-violet-light">Experience</h4>
            </div>
            
            <div className="flex flex-col gap-6 relative border-l border-white/10 ml-6 pl-8">
              {experience.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-violet-bg-center border-2 border-violet-secondary group-hover:bg-violet-accent transition-colors" />
                  <span className="text-violet-accent text-sm font-medium tracking-wider uppercase mb-1 block">
                    {exp.period}
                  </span>
                  <h5 className="text-xl font-bold text-violet-light mb-1">{exp.role}</h5>
                  <h6 className="text-violet-light/70 font-medium mb-3">{exp.company}</h6>
                  <p className="text-violet-light/60 leading-relaxed text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Activities Column */}
          <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [30, -30]) }} className="flex flex-col gap-16">
            
            {/* Education */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full glass-pill flex items-center justify-center border-violet-secondary/30">
                  <GraduationCap className="text-violet-accent" size={24} />
                </div>
                <h4 className="text-2xl font-display font-bold text-violet-light">Education</h4>
              </div>
              
              <div className="flex flex-col gap-6 relative border-l border-white/10 ml-6 pl-8">
                {education.map((edu, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-violet-bg-center border-2 border-violet-secondary group-hover:bg-violet-accent transition-colors" />
                    <span className="text-violet-accent text-sm font-medium tracking-wider uppercase mb-1 block">
                      {edu.period}
                    </span>
                    <h5 className="text-xl font-bold text-violet-light mb-1">{edu.title}</h5>
                    <h6 className="text-violet-light/70 font-medium mb-2">{edu.institution}</h6>
                    <p className="text-violet-light/80 font-semibold text-sm px-3 py-1 bg-white/5 inline-block rounded-full border border-white/10">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Leadership & Activities */}
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-full glass-pill flex items-center justify-center border-violet-secondary/30">
                  <Trophy className="text-violet-accent" size={24} />
                </div>
                <h4 className="text-2xl font-display font-bold text-violet-light">Leadership & Activities</h4>
              </div>
              
              <div className="flex flex-col gap-4 ml-2">
                {activities.map((activity, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3 glass-card p-4 hover:bg-white/[0.03] transition-colors rounded-2xl"
                  >
                    <ChevronRight className="text-violet-accent mt-0.5 shrink-0" size={18} />
                    <p className="text-violet-light/80 text-sm leading-relaxed">
                      {activity}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
