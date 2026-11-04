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
import { useSite } from "@/context/SiteContext";

const CATEGORY_ICONS = [Code2, FileSpreadsheet, Cpu, Headphones];

export default function Skills() {
  const { t } = useSite();
  const s = t.skills;

  const [activeTab, setActiveTab] = useState<string>("all");

  const displayedCategories =
    activeTab === "all"
      ? s.categories
      : s.categories.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute right-1/4 top-1/2 w-80 h-80 bg-sky-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute left-10 bottom-10 w-72 h-72 bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm backdrop-blur-md">
            <Layers className="size-3.5 text-sky-400" />
            <span>{s.sectionLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {s.headline}{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              {s.headlineAccent}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">{s.subtitle}</p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === "all"
                ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20"
                : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
            }`}
          >
            {s.allCompetencies}
          </button>

          {s.categories.map((cat, catIdx) => {
            const Icon = CATEGORY_ICONS[catIdx];
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  isActive
                    ? "bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20"
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
            {displayedCategories.map((category, catIdx) => {
              const Icon = CATEGORY_ICONS[s.categories.findIndex((c) => c.id === category.id)];
              return (
                <motion.div
                  key={category.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-sky-500/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                      <div className="size-10 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>

                    {/* Skill Bars */}
                    <div className="space-y-5">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="group">
                          <div className="flex items-center justify-between text-xs sm:text-sm mb-1">
                            <span className="font-semibold text-white group-hover:text-sky-300 transition-colors">
                              {skill.name}
                            </span>
                            <span className="text-sky-400 font-mono text-xs font-medium">
                              {skill.level}
                            </span>
                          </div>

                          <p className="text-[11px] text-slate-400 mb-2">{skill.description}</p>

                          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percent}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-500 rounded-full"
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
          className="mt-14 p-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md flex flex-wrap items-center justify-around gap-4 text-center"
        >
          <div>
            <div className="text-2xl font-bold text-sky-400">100%</div>
            <div className="text-xs text-slate-300 mt-0.5">{s.clientSatisfaction}</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-2xl font-bold text-slate-100">{s.highPrecision}</div>
            <div className="text-xs text-slate-300 mt-0.5">{s.dataEntry}</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-2xl font-bold text-sky-300">{s.tripleCert}</div>
            <div className="text-xs text-slate-300 mt-0.5">{s.nvidiaCert}</div>
          </div>
          <div className="hidden sm:block w-px h-8 bg-white/10" />
          <div>
            <div className="text-2xl font-bold text-blue-400">{s.cloudReady}</div>
            <div className="text-xs text-slate-300 mt-0.5">{s.awsGraduate}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
