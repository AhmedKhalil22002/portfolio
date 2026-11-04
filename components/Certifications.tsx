"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  ShieldCheck,
  Cpu,
  Cloud,
  Network,
  Trophy,
  Bot,
  Sparkles,
} from "lucide-react";
import { useSite } from "@/context/SiteContext";

const CERT_META: Record<
  string,
  {
    icon: React.ComponentType<{ className?: string }>;
    gradient: string;
  }
> = {
  "bal-esprit": {
    icon: Trophy,
    gradient: "from-amber-400/10 via-yellow-500/5 to-transparent",
  },
  "nvidia-anomaly": {
    icon: ShieldCheck,
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
  },
  "nvidia-genai": {
    icon: Sparkles,
    gradient: "from-indigo-500/10 via-sky-500/5 to-transparent",
  },
  "nvidia-maintenance": {
    icon: Cpu,
    gradient: "from-slate-400/10 via-sky-500/5 to-transparent",
  },
  "aws-cloud": {
    icon: Cloud,
    gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
  },
  "hashgraph-dev": {
    icon: Network,
    gradient: "from-blue-500/10 via-indigo-500/5 to-transparent",
  },
  "ieee-hackathon": {
    icon: Bot,
    gradient: "from-sky-500/10 via-slate-500/5 to-transparent",
  },
  "smartech-robotics": {
    icon: Bot,
    gradient: "from-teal-500/10 via-sky-500/5 to-transparent",
  },
};

export default function Certifications() {
  const { t } = useSite();
  const c = t.certifications;

  const [filter, setFilter] = useState<string>("all");

  const filteredItems =
    filter === "all"
      ? c.items
      : c.items.filter((cert) => cert.type === filter);

  const filterTabs = [
    { key: "all", label: c.allCredentials },
    { key: "Certification", label: c.certifications },
    { key: "Award", label: c.awards },
    { key: "Hackathon", label: c.hackathons },
    { key: "Competition", label: c.competitions },
  ];

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background ambient lighting */}
      <div className="absolute left-1/3 top-1/4 w-80 h-80 bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm backdrop-blur-md">
            <Award className="size-3.5 text-sky-400" />
            <span>{c.sectionLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {c.headline}{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              {c.headlineAccent}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">{c.subtitle}</p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === tab.key
                  ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const meta = CERT_META[item.id] || {
                icon: Award,
                gradient: "from-sky-500/10 via-blue-500/5 to-transparent",
              };
              const Icon = meta.icon;

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-sky-500/30 hover:shadow-xl transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Card Gradient Glow in top corner */}
                  <div
                    className={`absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br ${meta.gradient} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`}
                  />

                  <div>
                    {/* Top Row: Type and Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="size-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                          <Icon className="size-4.5" />
                        </div>
                        <span className="text-[11px] font-mono uppercase text-slate-400">
                          {item.type}
                        </span>
                      </div>

                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-1.5 leading-snug">
                      {item.title}
                    </h3>

                    <div className="text-xs font-medium text-slate-300 mb-3">
                      {item.organization}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  {/* Topics Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {item.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
