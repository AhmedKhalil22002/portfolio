"use client";

import { motion } from "motion/react";
import {
  User,
  HeartHandshake,
  Headphones,
  CheckCircle2,
  Globe2,
  Users2,
  Gamepad2,
  Phone,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";

const HIGHLIGHTS = [
  {
    icon: Headphones,
    title: "Client Relations & Active Listening",
    description:
      "Comfortable in client interactions, attentive to customer needs, and committed to delivering high-satisfaction outcomes.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "Rapid Problem Analysis",
    description:
      "Quickly grasps complex challenges and formulates tailored, efficient solutions in fast-paced environments.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: HeartHandshake,
    title: "Rigorous & Organized",
    description:
      "Demonstrated discipline in structured enterprise settings, combining technical autonomy with methodical execution.",
    color: "from-indigo-500 to-purple-500",
  },
];

const LANGUAGES = [
  { name: "Arabic", level: "Native / Mother Tongue", percent: 100 },
  { name: "French", level: "Fluent (Courant)", percent: 95 },
  { name: "English", level: "Fluent (Courant)", percent: 90 },
];

const ENGAGEMENTS = [
  {
    role: "Active Member",
    organization: "Club Smartech – FSB Bizerte",
    details: "Engaged in robotics development, team competitions, and tech workshops.",
  },
  {
    role: "Member & Participant",
    organization: "IEEE FSB Bizerte Student Branch",
    details: "Involved in technical hackathons, professional networking, and engineering initiatives.",
  },
];

const SPORTS = [
  { name: "Chess", label: "Strategic thinking & foresight", icon: "♟️" },
  { name: "Football", label: "Team cohesion & agility", icon: "⚽" },
  { name: "Table Tennis", label: "Focus & quick reflexes", icon: "🏓" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="size-3.5" />
            <span>About Ahmed</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Engineering Mindset.{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Client-First Heart.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Bridging technical precision in computer engineering with strong interpersonal and listening skills to deliver world-class client satisfaction.
          </p>
        </div>

        {/* Main Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          {/* Left Column: Detailed Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 border border-white/10"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="text-cyan-400">Professional</span> Summary
            </h3>
            
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              Engineering student in computer science, equipped with excellent communication skills and a deep ability to actively listen and understand client requirements. Motivated, dynamic, and naturally comfortable in interpersonal and client-facing interactions.
            </p>

            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Serious and organized, with a clear aspiration to put strong relational capabilities at the service of a customer call center or tech support environment, continually striving to elevate client satisfaction in a structured and professional atmosphere.
            </p>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2.5 text-slate-200 text-sm">
                <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                <span>Active listening & empathy</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-sm">
                <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                <span>Fast & precise data entry</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-sm">
                <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                <span>Rapid problem deconstruction</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-sm">
                <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                <span>Professional email communication</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-sm">
                <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                <span>Calm under operational pressure</span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-200 text-sm">
                <CheckCircle2 className="size-4 text-cyan-400 shrink-0" />
                <span>Client-satisfaction dedication</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Quick Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Details Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10">
              <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin className="size-4 text-cyan-400" />
                <span>Personal Information</span>
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5">
                    <User className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Full Name</span>
                    <span className="text-slate-100 font-medium">Ahmed Khalil</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Email Address</span>
                    <a
                      href="mailto:Khalilahmed22002@gmail.com"
                      className="text-cyan-400 hover:underline font-mono text-xs sm:text-sm break-all"
                    >
                      Khalilahmed22002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Phone Number</span>
                    <a
                      href="tel:+21654140550"
                      className="text-slate-100 hover:text-cyan-400 font-mono text-sm"
                    >
                      +216 54140550
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">Current Base</span>
                    <span className="text-slate-100 font-medium">Ariana & Bizerte, Tunisia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10">
              <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Globe2 className="size-4 text-cyan-400" />
                <span>Languages</span>
              </h4>

              <div className="space-y-4">
                {LANGUAGES.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-semibold text-slate-200">{lang.name}</span>
                      <span className="text-slate-400 font-mono">{lang.level}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 3 Pillars / Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all hover:-translate-y-1"
            >
              <div
                className={`size-11 rounded-xl bg-gradient-to-tr ${h.color} text-white flex items-center justify-center mb-4 shadow-md`}
              >
                <h.icon className="size-5" />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{h.title}</h4>
              <p className="text-slate-300 text-sm leading-relaxed">{h.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Engagements & Interests Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Club Engagements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-panel rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-4">
              <Users2 className="size-5 text-cyan-400" />
              <h4 className="text-lg font-bold text-white">Social & Club Engagements</h4>
            </div>

            <div className="space-y-4">
              {ENGAGEMENTS.map((eng) => (
                <div
                  key={eng.organization}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white text-sm">{eng.organization}</span>
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300">
                      {eng.role}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">{eng.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sports & Hobbies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-panel rounded-2xl p-6 border border-white/10"
          >
            <div className="flex items-center gap-2 mb-4">
              <Gamepad2 className="size-5 text-indigo-400" />
              <h4 className="text-lg font-bold text-white">Sports & Tactical Passions</h4>
            </div>

            <div className="space-y-3">
              {SPORTS.map((sport) => (
                <div
                  key={sport.name}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-indigo-500/20 transition-all"
                >
                  <span className="text-2xl">{sport.icon}</span>
                  <div>
                    <span className="font-semibold text-white text-sm block">{sport.name}</span>
                    <span className="text-xs text-slate-400">{sport.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
