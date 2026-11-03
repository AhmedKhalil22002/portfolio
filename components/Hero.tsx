"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import {
  ArrowDown,
  Mail,
  Phone,
  Award,
  Briefcase,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { useSite } from "@/context/SiteContext";

export default function Hero() {
  const { t } = useSite();
  const phrases = t.hero.typingPhrases as readonly string[];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    setPhraseIndex(0);
    setCurrentText("");
    setIsDeleting(false);
  }, [phrases]);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentPhrase.length) {
          setCurrentText(currentPhrase.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentPhrase.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex, phrases]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Glow Blobs */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md"
          >
            <Sparkles className="size-4 text-cyan-400 animate-spin" style={{ animationDuration: "6s" }} />
            <span>{t.hero.welcome}</span>
            <span className="text-white/30">•</span>
            <span className="text-slate-300">{t.hero.location}</span>
          </motion.div>

          {/* Headline Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            {t.hero.greeting}{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Ahmed Khalil
            </span>
          </motion.h1>

          {/* Dynamic Typing Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="min-h-[44px] flex items-center justify-center mb-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200">
              <span className="text-cyan-400 font-mono">&gt; </span>
              <span>{currentText}</span>
              <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse align-middle" />
            </h2>
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-10"
          >
            {t.hero.bio}
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <a
              href="#experience"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Briefcase className="size-4" />
              <span>{t.hero.exploreExperience}</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-sm backdrop-blur-md hover:border-cyan-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Mail className="size-4 text-cyan-400" />
              <span>{t.hero.getInTouch}</span>
            </a>

            <a
              href="#certifications"
              className="px-6 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 text-white font-semibold text-sm backdrop-blur-md hover:border-indigo-500/30 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Award className="size-4 text-indigo-400" />
              <span>{t.hero.certifications}</span>
            </a>
          </motion.div>

          {/* Social Links Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-3 mb-16"
          >
            <a
              href="mailto:Khalilahmed22002@gmail.com"
              title="Send Email"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all hover:scale-110"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="tel:+21654140550"
              title="Call Phone"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all hover:scale-110"
            >
              <Phone className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/Ahmed Khalil"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all hover:scale-110"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="https://github.com/Ahmed Khalil"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-slate-100 hover:border-white/40 hover:bg-white/10 transition-all hover:scale-110"
            >
              <GithubIcon className="size-4" />
            </a>
          </motion.div>

          {/* Key Stat Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
          >
            <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10 transition-all group">
              <div className="size-9 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <GraduationCap className="size-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">ESPRIT</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.hero.espritLabel}</div>
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all group">
              <div className="size-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Briefcase className="size-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">{t.hero.internships}</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.hero.internshipsLabel}</div>
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-indigo-500/40 hover:shadow-lg hover:shadow-indigo-500/10 transition-all group">
              <div className="size-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Award className="size-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">{t.hero.certs}</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.hero.certsLabel}</div>
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-emerald-500/40 hover:shadow-lg hover:shadow-emerald-500/10 transition-all group">
              <div className="size-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                <Sparkles className="size-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">{t.hero.bestProject}</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.hero.projectLabel}</div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex justify-center mt-14"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>{t.hero.scrollDown}</span>
            <ArrowDown className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
