"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Calendar, MapPin, Trophy, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type EventType = "hackathon" | "conference" | "bootcamp" | "program";

interface Event {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  type: EventType;
  emoji: string;
  highlight?: string;
  linkedIn?: string;
}

const events: Event[] = [
  {
    title: "DimensionX – National Hackathon",
    subtitle: "D. Y. Patil College of Engineering, Kolhapur",
    date: "2026",
    description:
      "24-hour national hackathon organized by GDG On Campus DYPCET. From 400+ registered teams, only 33 were shortlisted. Trained 4 ML models, handled complex datasets, faced 3 intense evaluation rounds, and reached the Top 8.",
    type: "hackathon",
    emoji: "🏆",
    highlight: "🥇 First Prize Winners — ₹15,000",
    linkedIn: undefined,
  },
  {
    title: "CODECRAFT 2.0 – DEVHACKS 2026",
    subtitle: "Atharva University, Mumbai",
    date: "2026",
    description:
      "Shortlisted through an online technical interview in Round 1, qualifying the team for the main 24-hour offline hackathon.",
    type: "hackathon",
    emoji: "💻",
  },
  {
    title: "GHRHack 2.0 – Code to Career",
    subtitle: "G H Raisoni College",
    date: "2026",
    description:
      "36 hours of creativity, collaboration, and problem-solving. A journey from initial brainstorming to a complete strategic rework halfway through!",
    type: "hackathon",
    emoji: "💻",
    linkedIn:
      "https://www.linkedin.com/posts/sayali-jadhav-b4263827b_hackathon-studentdeveloper-techcommunity-activity-7438053728135471104-n5oK",
  },
  {
    title: "SheInspires 2.0 Hackathon 2026",
    subtitle: "Zensar × RPG Foundation × MIT ADT University",
    date: "2026",
    description:
      "Innovation hackathon championing the next wave of women innovators. Powered by Zensar and RPG Foundation, with 1500+ students from nearly 20 colleges for hands-on tech learning and real-world problem solving.",
    type: "hackathon",
    emoji: "✨",
  },
  {
    title: "IDE Bootcamp Phase 2",
    subtitle: "RK University, Rajkot",
    date: "2026",
    description:
      "Five-day immersive bootcamp on innovation and entrepreneurship. Gained hands-on problem-solving skills, design thinking, pitching skills, and advanced startup strategies through collaboration with bright minds across India.",
    type: "bootcamp",
    emoji: "🚀",
  },
  {
    title: "COEP MindSpark Hackathon",
    subtitle: "College of Engineering, Pune",
    date: "2025",
    description:
      "Qualified Round 1 of the prestigious 24-hour hackathon, competing among top student developers across India.",
    type: "hackathon",
    emoji: "⚡",
    linkedIn:
      "https://www.linkedin.com/posts/sayali-jadhav-b4263827b_coepmindspark25-tatamotors-hackathon-activity-7387331904510947328-JZp7",
  },
  {
    title: "Smart India Hackathon (SIH)",
    subtitle: "3 Years of Participation",
    date: "2024 – 2026",
    description:
      "Three consecutive years of participating in India's largest hackathon. Reached Top 5 at the college level, gaining deep experience in solving real-world government and industry problem statements.",
    type: "hackathon",
    emoji: "🇮🇳",
  },
  {
    title: "Infosys Pragati Cohort 5",
    subtitle: "Infosys Springboard",
    date: "Apr – Jul 2025",
    description:
      "12-week transformative program for women in tech with mentorship, skill-building, and real-world AI/ML project experience.",
    type: "program",
    emoji: "🚀",
    linkedIn:
      "https://www.linkedin.com/posts/sayali-jadhav-b4263827b_infosysspringboard-pragatipathtofuture-learning-activity-7325932990776102912-qYxw",
  },
  {
    title: "Mumbai Tech Week – Mumb.AI",
    subtitle: "Jio World Convention Centre, Mumbai",
    date: "Feb 2025",
    description:
      "Participated in Asia's largest AI event. Gained insights from visionary keynotes and networked with India's AI leaders.",
    type: "conference",
    emoji: "🤖",
    linkedIn:
      "https://www.linkedin.com/posts/sayali-jadhav-b4263827b_mumbaitechweek2025-airevolution-techinnovation-activity-7306503697595871232-9YVq",
  },
  {
    title: "DevFest Indore – GDG",
    subtitle: "Google Developer Group, Indore",
    date: "Dec 2024",
    description:
      "Attended the AI/ML + Cloud track, learning from Google, IBM, and Infosys experts about AI for cloud security and serverless architecture.",
    type: "conference",
    emoji: "🤖",
    linkedIn:
      "https://www.linkedin.com/posts/sayali-jadhav-b4263827b_gdgindore-devfest2024-ai-activity-7278797876065943553-SuSO",
  },
];

const typeConfig: Record<EventType, { gradient: string; badge: string; badgeText: string }> = {
  hackathon: {
    gradient: "from-violet-primary/40 to-purple-600/20",
    badge: "bg-purple-500/15 border-purple-500/30 text-purple-300",
    badgeText: "Hackathon",
  },
  conference: {
    gradient: "from-cyan-500/30 to-blue-600/20",
    badge: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
    badgeText: "Conference",
  },
  bootcamp: {
    gradient: "from-amber-500/30 to-orange-600/20",
    badge: "bg-amber-500/15 border-amber-500/30 text-amber-300",
    badgeText: "Bootcamp",
  },
  program: {
    gradient: "from-emerald-500/30 to-teal-600/20",
    badge: "bg-emerald-500/15 border-emerald-500/30 text-emerald-300",
    badgeText: "Program",
  },
};

function EventCard({ event, index }: { event: Event; index: number }) {
  const config = typeConfig[event.type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02]",
          "hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500",
          "p-6 md:p-8"
        )}
      >
        {/* Gradient glow on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl",
            config.gradient
          )}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Top row: emoji, badge, date */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{event.emoji}</span>
              <span
                className={cn(
                  "text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border",
                  config.badge
                )}
              >
                {config.badgeText}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-violet-light/40 text-xs font-medium">
              <Calendar size={12} />
              <span>{event.date}</span>
            </div>
          </div>

          {/* Title */}
          <h4 className="text-xl md:text-2xl font-display font-bold text-violet-light mb-1.5 group-hover:text-violet-accent transition-colors duration-300">
            {event.title}
          </h4>

          {/* Subtitle */}
          <p className="text-violet-light/50 text-sm font-medium mb-4 flex items-center gap-1.5">
            <MapPin size={12} className="shrink-0" />
            {event.subtitle}
          </p>

          {/* Highlight (e.g., prize) */}
          {event.highlight && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500/20 to-yellow-500/10 border border-amber-500/30"
            >
              <Trophy size={16} className="text-amber-400" />
              <span className="text-amber-300 font-bold text-sm">{event.highlight}</span>
            </motion.div>
          )}

          {/* Description */}
          <p className="text-violet-light/60 text-sm leading-relaxed mb-4">
            {event.description}
          </p>

          {/* LinkedIn link */}
          {event.linkedIn && (
            <a
              href={event.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-violet-secondary hover:text-violet-accent transition-colors text-sm font-medium group/link"
            >
              <ExternalLink size={14} className="group-hover/link:rotate-12 transition-transform" />
              <span>View on LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Events() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="events" ref={containerRef} className="py-32 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
            className="w-14 h-14 rounded-2xl glass-pill flex items-center justify-center border-violet-secondary/30 mb-6"
          >
            <Sparkles className="text-violet-accent" size={24} />
          </motion.div>
          <h2 className="text-sm uppercase tracking-widest text-violet-secondary font-semibold mb-3">
            Events & Hackathons
          </h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-violet-light max-w-3xl leading-tight">
            Building, Competing & <span className="text-gradient">Growing</span>.
          </h3>
          <p className="mt-6 text-violet-light/50 max-w-xl text-lg leading-relaxed">
            A timeline of hackathons won, conferences attended, and programs that shaped my journey in tech.
          </p>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { value: "8+", label: "Hackathons" },
            { value: "1st", label: "Prize Winner" },
            { value: "3yr", label: "SIH Experience" },
            { value: "2+", label: "AI Conferences" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="glass-card !rounded-2xl p-5 text-center hover:bg-white/[0.04] transition-colors"
            >
              <div className="text-2xl md:text-3xl font-display font-bold text-violet-accent mb-1">
                {stat.value}
              </div>
              <div className="text-violet-light/50 text-xs font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="relative">
          {/* Animated vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.06]">
            <motion.div
              className="w-full bg-gradient-to-b from-violet-primary via-violet-secondary to-violet-accent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {events.map((event, index) => (
              <div
                key={index}
                className={cn(
                  index % 2 === 0 ? "lg:pr-10" : "lg:pl-10",
                  // stagger vertical offset on desktop for timeline feel
                  index % 2 !== 0 && "lg:mt-16"
                )}
              >
                <EventCard event={event} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
