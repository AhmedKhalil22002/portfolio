"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Code2,
  FileSpreadsheet,
  Headphones,
  Cpu,
  Layers,
} from "lucide-react";

interface SkillItem {
  name: string;
  level: string;
  percent: number;
  description: string;
}

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "web-dev",
    title: "Software & Web Development",
    icon: Code2,
    skills: [
      {
        name: "HTML5 & CSS3",
        level: "Proficient",
        percent: 88,
        description: "Semantic layouts, responsive styles, modern web standards",
      },
      {
        name: "PHP Basics",
        level: "Intermediate",
        percent: 75,
        description: "Server-side scripting, form handling, dynamic pages",
      },
      {
        name: "SQL & Relational Databases",
        level: "Advanced",
        percent: 85,
        description: "Query design, schema modeling, data consistency & indexing",
      },
      {
        name: "Linux Operating Systems",
        level: "Advanced",
        percent: 85,
        description: "CLI navigation, bash scripts, process & permission management",
      },
      {
        name: "Web Platforms & Navigation",
        level: "Expert",
        percent: 95,
        description: "High-speed research, platform management, digital tooling",
      },
    ],
  },
  {
    id: "productivity",
    title: "Office & Professional Productivity",
    icon: FileSpreadsheet,
    skills: [
      {
        name: "Fast & Precise Data Entry",
        level: "Expert",
        percent: 96,
        description: "High WPM typing, meticulous accuracy, rigorous verification",
      },
      {
        name: "Microsoft Excel",
        level: "Advanced",
        percent: 90,
        description: "Formulas, data tables, pivot analysis, reporting dashboards",
      },
      {
        name: "Microsoft Word & Documentation",
        level: "Expert",
        percent: 94,
        description: "Executive reports, formatted proposals, professional layout",
      },
      {
        name: "Microsoft PowerPoint",
        level: "Advanced",
        percent: 90,
        description: "Persuasive presentations, structured visuals, animations",
      },
      {
        name: "Professional Email Management",
        level: "Expert",
        percent: 95,
        description: "Structured communication, client etiquette, inbox triage",
      },
      {
        name: "IT & Management Software",
        level: "Advanced",
        percent: 88,
        description: "Enterprise software adoption, internal portal workflows",
      },
    ],
  },
  {
    id: "systems-ai",
    title: "Systems, AI & Cloud",
    icon: Cpu,
    skills: [
      {
        name: "Siemens API & PLC Automation",
        level: "Advanced",
        percent: 82,
        description: "Industrial API programming, controller workflows (STIR)",
      },
      {
        name: "AI & Anomaly Detection",
        level: "Certified (NVIDIA)",
        percent: 86,
        description: "Anomaly identification algorithms, data monitoring",
      },
      {
        name: "Generative AI & Diffusion Models",
        level: "Certified (NVIDIA)",
        percent: 84,
        description: "Diffusion architectures, prompt paradigms, synthetic data",
      },
      {
        name: "AI for Predictive Maintenance",
        level: "Certified (NVIDIA)",
        percent: 85,
        description: "Failure prediction, sensor data analysis, industrial AI",
      },
      {
        name: "AWS Cloud Foundations",
        level: "Certified (AWS)",
        percent: 82,
        description: "Cloud infrastructure, storage, computing services, security",
      },
    ],
  },
  {
    id: "interpersonal",
    title: "Relational & Client Success",
    icon: Headphones,
    skills: [
      {
        name: "Active Listening & Empathy",
        level: "Expert",
        percent: 98,
        description: "Understanding core customer concerns without prejudice",
      },
      {
        name: "Client Needs Analysis & Solutions",
        level: "Expert",
        percent: 94,
        description: "Translating ambiguous issues into practical, rapid answers",
      },
      {
        name: "Dynamic Interpersonal Relations",
        level: "Expert",
        percent: 95,
        description: "Comfortable in verbal interactions, call centers, client desk",
      },
      {
        name: "Stress Resistance & Composure",
        level: "Advanced",
        percent: 90,
        description: "Poised handling of difficult inquiries and high workloads",
      },
      {
        name: "Organizational Autonomy",
        level: "Advanced",
        percent: 92,
        description: "Independent execution with rigorous accountability",
      },
    ],
  },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedCategories =
    activeTab === "all"
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute right-1/4 top-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Layers className="size-3.5" />
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Proficiencies
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            A versatile combination of technical development, precision data handling, industrial systems, and standout interpersonal excellence.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "all"
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
            }`}
          >
            All Competencies
          </button>

          {SKILL_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                    : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
                }`}
              >
                <Icon className="size-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedCategories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <div className="size-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill Bars */}
                    <div className="space-y-5">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="group">
                          <div className="flex items-center justify-between text-xs sm:text-sm mb-1">
                            <span className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-cyan-400 font-mono text-xs font-medium">
                              {skill.level}
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-400 mb-2">
                            {skill.description}
                          </p>

                          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percent}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Quick Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/20 flex flex-wrap items-center justify-around gap-4 text-center"
        >
          <div>
            <div className="text-2xl font-bold text-cyan-400">100%</div>
            <div className="text-xs text-slate-300 mt-0.5">Client-Satisfaction Orientation</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-2xl font-bold text-sky-400">High Precision</div>
            <div className="text-xs text-slate-300 mt-0.5">Data Entry & Quality Verification</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-2xl font-bold text-indigo-400">Triple Cert</div>
            <div className="text-xs text-slate-300 mt-0.5">NVIDIA Applied AI Programs</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-2xl font-bold text-blue-400">Cloud Ready</div>
            <div className="text-xs text-slate-300 mt-0.5">AWS Academy Graduate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
