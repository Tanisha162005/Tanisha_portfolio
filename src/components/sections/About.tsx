"use client";

import { motion, Variants } from "framer-motion";

const skills = [
  "Python", "SQL", "React", "Next.js", "TypeScript", "Node.js", 
  "Tailwind CSS", "Machine Learning", "NLP", "XGBoost", "Federated Learning",
  "Agentic AI", "LangChain", "OpenAI APIs", "RAG", "Vector DB", "n8n", "MCPs", 
  "Flask", "Pandas", "Docker", "AWS", "Framer Motion", "GSAP"
];

const stats = [
  { label: "Projects Completed", value: "20+" },
  { label: "Focus Areas", value: "ML & Web Dev" },
  { label: "Experience", value: "Full-Stack" },
  { label: "Specialty", value: "Agentic Systems" },
];

export default function About() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const item: Variants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center"
        >
          {/* Bio Section */}
          <motion.div variants={item} className="max-w-xl">
            <h2 className="text-sm uppercase tracking-widest text-violet-secondary font-semibold mb-3">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-violet-light mb-6">
              Bridging the gap between <span className="text-gradient">data</span> and <span className="text-gradient">design</span>.
            </h3>
            <p className="text-violet-light/70 text-lg leading-relaxed mb-6">
              I am a passionate Full-Stack Developer and AI/ML Engineer dedicated to building intelligent, user-centric applications. With a strong foundation in both modern web technologies and advanced machine learning techniques, I create systems that are not only visually stunning but also analytically powerful.
            </p>
            <p className="text-violet-light/70 text-lg leading-relaxed">
              Whether it's developing privacy-preserving federated learning systems or crafting buttery smooth web interfaces, I thrive on tackling complex problems and delivering elegant solutions.
            </p>
          </motion.div>

          {/* Photo & Stats */}
          <motion.div variants={item} className="flex flex-col items-center gap-8">
            {/* Profile Photo */}
            <div className="relative group">
              {/* Animated glow ring */}
              <motion.div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-violet-primary via-violet-secondary to-violet-accent opacity-40 blur-xl group-hover:opacity-70 transition-opacity duration-500"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              {/* Border frame */}
              <div className="relative w-64 h-72 md:w-72 md:h-80 rounded-3xl overflow-hidden border-2 border-white/10 group-hover:border-violet-secondary/50 transition-colors duration-500">
                <img
                  src="/me.jpeg"
                  alt="Tanisha"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                {/* Subtle gradient overlay at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-violet-bg-center/80 to-transparent" />
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-5 w-full max-w-sm">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="glass-card !rounded-2xl p-5 md:p-6 flex flex-col justify-center items-center text-center group hover-trigger border border-white/5 hover:border-violet-secondary/30 transition-colors"
                >
                  <span className="text-2xl md:text-3xl font-display font-bold text-violet-accent mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-violet-light/60 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Marquee */}
      <div className="w-full overflow-hidden flex whitespace-nowrap bg-violet-primary/10 py-6 border-y border-white/5 relative">
        {/* Gradient fades for the edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-violet-bg-center to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-violet-bg-center to-transparent z-10" />
        
        <motion.div
          className="flex items-center gap-8 px-4 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }} // Wait, framer motion whileHover doesn't easily pause this way, better to use standard CSS for pause on hover if needed, but framer motion handles it ok if we use a different approach. Let's stick to simple continuous for now, or use a hover state.
        >
          {/* Duplicate skills array to make the loop seamless */}
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="glass-pill px-6 py-3 text-violet-light font-medium flex items-center gap-3 hover-trigger hover:border-violet-accent/50 transition-colors cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-violet-accent" />
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
