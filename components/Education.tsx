"use client";

import { motion } from "motion/react";
import {
  GraduationCap,
  Calendar,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { useSite } from "@/context/SiteContext";

export default function Education() {
  const { t, theme } = useSite();
  const e = t.education;

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background ambient lighting */}
      <div className="absolute left-0 bottom-1/4 w-72 h-72 bg-sky-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-72 h-72 bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm backdrop-blur-md">
            <GraduationCap className="size-3.5 text-sky-400" />
            <span>{e.sectionLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {e.headline}{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              {e.headlineAccent}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">{e.subtitle}</p>
        </div>

        {/* Education Cards Stack */}
        <div className="space-y-8 max-w-4xl mx-auto">
          {e.items.map((edu, idx) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 relative ${
                edu.current
                  ? theme === "light"
                    ? "border-sky-400/50 shadow-lg shadow-sky-500/5 bg-gradient-to-b from-white to-sky-50/50"
                    : "border-sky-500/30 shadow-lg shadow-black/30 bg-gradient-to-b from-[#0e1422] to-[#0a0d16]"
                  : theme === "light"
                  ? "border-slate-200 hover:border-sky-500/30"
                  : "border-white/10 hover:border-sky-500/25"
              }`}
            >
              {edu.current && (
                <div className="absolute -top-3 right-6 px-3.5 py-1 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold shadow-md shadow-sky-500/20 flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  <span>{e.currentlyEnrolled}</span>
                </div>
              )}

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                    {edu.tag}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">{edu.degree}</h3>
                  <div className="text-base font-medium text-slate-200 mt-1">{edu.institution}</div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 shrink-0">
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-300 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20">
                    <Calendar className="size-3.5" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400">
                    <MapPin className="size-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">{edu.description}</p>

              {/* Curriculum & Key Learnings */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  {e.keyFocusAreas}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.keyLearnings.map((item, lIdx) => (
                    <div
                      key={lIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="size-4 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
