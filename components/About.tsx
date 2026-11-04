"use client";

import Image from "next/image";
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
import { useSite } from "@/context/SiteContext";

const HIGHLIGHT_ICONS = [Headphones, Sparkles, HeartHandshake];

export default function About() {
  const { t } = useSite();
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const a = t.about;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-sky-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-blue-600/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm backdrop-blur-md">
            <User className="size-3.5 text-sky-400" />
            <span>{a.sectionLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {a.headline}{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              {a.headlineAccent}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">{a.subtitle}</p>
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
              <span className="text-sky-400">{a.professionalSummaryTitle.split(" ")[0]}</span>{" "}
              {a.professionalSummaryTitle.split(" ").slice(1).join(" ")}
            </h3>

            <p className="text-slate-300 text-base leading-relaxed mb-6">{a.bio1}</p>
            <p className="text-slate-300 text-base leading-relaxed mb-8">{a.bio2}</p>

            {/* Core Competencies Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10">
              {a.competencies.map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-slate-200 text-sm">
                  <CheckCircle2 className="size-4 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Details Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10">
              {/* Profile Photo Header */}
              <div className="flex items-center gap-4 pb-5 mb-5 border-b border-white/10">
                <div className="relative size-16 rounded-2xl p-0.5 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-md shrink-0">
                  <div className="size-full rounded-[14px] overflow-hidden bg-slate-900 border border-white/15">
                    <Image
                      src={`${basePath}/profile.jpg`}
                      alt="Ahmed Khalil"
                      width={64}
                      height={64}
                      className="size-full object-cover object-top"
                    />
                  </div>
                </div>
                <div>
                  <h5 className="font-bold text-white text-base">Ahmed Khalil</h5>
                  <p className="text-xs text-sky-400 font-mono">ESPRIT • Final-Year CS Engineer</p>
                  <p className="text-[11px] text-slate-400">Electronics &amp; Automation Background</p>
                </div>
              </div>

              <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <MapPin className="size-4 text-sky-400" />
                <span>{a.personalInfo}</span>
              </h4>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400 mt-0.5">
                    <User className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{a.fullName}</span>
                    <span className="text-slate-100 font-medium">Ahmed Khalil</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
                    <Mail className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{a.emailAddress}</span>
                    <a
                      href="mailto:khalil.ahmed22002@gmail.com"
                      className="text-sky-400 hover:text-sky-300 hover:underline font-mono text-xs sm:text-sm break-all"
                    >
                      khalil.ahmed22002@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
                    <Phone className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{a.phoneNumber}</span>
                    <a
                      href="tel:+21654140550"
                      className="text-slate-100 hover:text-sky-400 font-mono text-sm"
                    >
                      +216 54140550
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-slate-300 mt-0.5">
                    <MapPin className="size-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block">{a.currentBase}</span>
                    <span className="text-slate-100 font-medium">Ariana &amp; Bizerte, Tunisia</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Languages Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10">
              <h4 className="text-base font-semibold text-white mb-4 flex items-center gap-2">
                <Globe2 className="size-4 text-sky-400" />
                <span>{a.languages}</span>
              </h4>

              <div className="space-y-4">
                {a.langData.map((lang) => (
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
                        className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full"
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
          {a.highlights.map((h, i) => {
            const IconComp = HIGHLIGHT_ICONS[i];
            return (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-panel rounded-2xl p-6 border border-white/10 hover:border-sky-500/30 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div
                  className="size-11 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex items-center justify-center mb-4 shadow-sm"
                >
                  <IconComp className="size-5" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{h.title}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{h.description}</p>
              </motion.div>
            );
          })}
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
              <Users2 className="size-5 text-sky-400" />
              <h4 className="text-lg font-bold text-white">{a.engagementsTitle}</h4>
            </div>

            <div className="space-y-4">
              {a.engagements.map((eng) => (
                <div
                  key={eng.organization}
                  className="p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-sky-500/20 transition-all"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-white text-sm">{eng.organization}</span>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20">
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
              <Gamepad2 className="size-5 text-slate-300" />
              <h4 className="text-lg font-bold text-white">{a.sportsTitle}</h4>
            </div>

            <div className="space-y-3">
              {a.sports.map((sport) => (
                <div
                  key={sport.name}
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all"
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
