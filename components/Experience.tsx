"use client";

import { motion } from "motion/react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  CheckCircle2,
} from "lucide-react";

const EXPERIENCES = [
  {
    role: "Engineering Intern – Intelligent Technologies",
    company: "Bionic Soul",
    location: "Technopole El Ghazela, Ariana",
    period: "15 June 2025 – 30 August 2025",
    duration: "2.5 Months",
    type: "Technology Internship",
    summary:
      "Contributed to an innovative project in the intelligent technologies domain, developing sharp analysis capabilities and exacting attention to detail.",
    responsibilities: [
      "Conducted extensive data collection and systematic processing to engineer a dependable, highly-adapted system.",
      "Identified and mitigated technical anomalies, strengthening overall system accuracy.",
      "Reinforced analytical rigor, proactive problem-solving, and cross-functional technical adaptability.",
    ],
    skills: [
      "Intelligent Technologies",
      "Data Collection & Processing",
      "Analytical Rigor",
      "System Reliability",
      "Problem Solving",
    ],
    badgeColor: "from-cyan-500 to-blue-600",
  },
  {
    role: "IT & Workflow Digitization Intern",
    company: "Tunisair",
    location: "Charguia 2, Tunis",
    period: "15 July 2024 – 30 August 2024",
    duration: "6 Weeks",
    type: "Process Digitization",
    summary:
      "Focused on enhancing internal working conditions and operational productivity by digitizing employee request management.",
    responsibilities: [
      "Engineered and deployed an intuitive online form system that superseded manual paper-based processes.",
      "Facilitated smoother request handling, accelerating response times and improving employee experience.",
      "Strengthened personal autonomy, organizational rigor, and adherence to enterprise compliance standards.",
    ],
    skills: [
      "Online Form Systems",
      "Workflow Digitization",
      "Employee Support",
      "Process Optimization",
      "Autonomous Management",
    ],
    badgeColor: "from-blue-500 to-indigo-600",
  },
  {
    role: "End-of-Studies Automation Intern",
    company: "STIR (Société Tunisienne des Industries de Raffinage)",
    location: "Bizerte, Tunisia",
    period: "January 2023 – May 2023",
    duration: "6 Months",
    type: "Industrial Engineering",
    summary:
      "Completed a comprehensive 6-month end-of-studies internship in a rigorous industrial environment, operating with high responsibility.",
    responsibilities: [
      "Actively contributed to program development and parameter configuration for a Siemens API / industrial controller.",
      "Adapted to strict safety, industrial quality protocols, and mission-critical operating environments.",
      "Solidified fundamental engineering practices, methodical troubleshooting, and industrial teamwork.",
    ],
    skills: [
      "Siemens API",
      "Industrial Automation",
      "Controller Programming",
      "Structured Enterprise",
      "Industrial Protocols",
    ],
    badgeColor: "from-indigo-500 to-purple-600",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute right-0 top-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="size-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Work &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Internship History
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Proven track record of autonomy, rapid assimilation, and valuable contributions across innovative tech, airline operations, and heavy industrial automation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-blue-500 to-indigo-600/20" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.company}
                  className="relative flex flex-col md:flex-row items-center"
                >
                  {/* Timeline Center Node (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 top-6 -translate-x-1/2 items-center justify-center size-8 rounded-full bg-[#0B0F19] border-2 border-cyan-400 shadow-md shadow-cyan-500/40 z-20">
                    <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Card Content with Left/Right Alternation on Desktop */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className={`w-full md:w-[calc(50%-2.5rem)] ${
                      isEven ? "md:mr-auto" : "md:ml-auto"
                    }`}
                  >
                    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all group">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r ${exp.badgeColor}`}
                        >
                          {exp.type}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono">
                          <Calendar className="size-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Company */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs sm:text-sm text-slate-300 mt-2 mb-4">
                        <span className="flex items-center gap-1.5 font-medium text-white">
                          <Building2 className="size-4 text-cyan-400" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-400">
                          <MapPin className="size-3.5 text-slate-400" />
                          {exp.location}
                        </span>
                        <span className="text-slate-400 font-mono">({exp.duration})</span>
                      </div>

                      {/* Summary */}
                      <p className="text-slate-300 text-sm leading-relaxed mb-5">
                        {exp.summary}
                      </p>

                      {/* Key Responsibilities */}
                      <div className="space-y-2 mb-6">
                        {exp.responsibilities.map((resp, rIdx) => (
                          <div key={rIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skill Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-300 border border-white/5 hover:border-cyan-500/30 hover:text-cyan-300 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
