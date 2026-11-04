"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
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
      {/* Professional Ambient Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-sky-500/10 via-blue-600/5 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-slate-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-sky-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md shadow-sm"
          >
            <Sparkles className="size-3.5 text-sky-400" />
            <span>{t.hero.welcome}</span>
            <span className="text-white/20">•</span>
            <span className="text-slate-400">{t.hero.location}</span>
          </motion.div>

          {/* Profile Picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="relative mb-6 group"
          >
            {/* Soft ambient backlight (subtle, calm) */}
            <div className="absolute -inset-1 rounded-full bg-sky-500/15 blur-lg group-hover:bg-sky-500/25 transition-all duration-300" />

            {/* Photo ring */}
            <div className="relative size-32 sm:size-36 rounded-full p-1 bg-gradient-to-b from-white/20 via-white/5 to-white/10 shadow-xl shadow-black/40">
              <div className="size-full rounded-full overflow-hidden bg-slate-900 border border-white/15">
                <Image
                  src={`${basePath}/profile.jpg`}
                  alt="Ahmed Khalil"
                  width={144}
                  height={144}
                  priority
                  className="size-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            {/* Online / Active status badge */}
            <div
              className="absolute bottom-1 right-2 size-5 rounded-full bg-emerald-500 border-2 border-[#0A0E17] shadow-md flex items-center justify-center"
              title="Available for Opportunities"
            >
              <span className="size-2 rounded-full bg-white" />
            </div>
          </motion.div>

          {/* Headline Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
          >
            {t.hero.greeting}{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-200 to-blue-400 bg-clip-text text-transparent">
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
              <span className="text-sky-400 font-mono">&gt; </span>
              <span>{currentText}</span>
              <span className="inline-block w-2.5 h-6 ml-1 bg-sky-400 animate-pulse align-middle" />
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
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Briefcase className="size-4" />
              <span>{t.hero.exploreExperience}</span>
            </a>

            <a
              href="#contact"
              className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-sky-500/30 text-white font-semibold text-sm backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Mail className="size-4 text-sky-400" />
              <span>{t.hero.getInTouch}</span>
            </a>

            <a
              href="#certifications"
              className="px-6 py-3.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-slate-400/30 text-white font-semibold text-sm backdrop-blur-md hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Award className="size-4 text-slate-300" />
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
              href="mailto:khalil.ahmed22002@gmail.com"
              title="Send Email"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all hover:scale-105"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="tel:+21654140550"
              title="Call Phone"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 hover:bg-sky-500/10 transition-all hover:scale-105"
            >
              <Phone className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/Ahmed Khalil"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all hover:scale-105"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="https://github.com/Ahmed Khalil"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="p-3 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 hover:text-slate-100 hover:border-white/40 hover:bg-white/10 transition-all hover:scale-105"
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
            <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-sky-500/30 hover:shadow-lg transition-all group">
              <div className="size-9 rounded-lg bg-sky-500/10 text-sky-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <GraduationCap className="size-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">ESPRIT</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.hero.espritLabel}</div>
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-blue-500/30 hover:shadow-lg transition-all group">
              <div className="size-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Briefcase className="size-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">{t.hero.internships}</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.hero.internshipsLabel}</div>
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-indigo-500/30 hover:shadow-lg transition-all group">
              <div className="size-9 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                <Award className="size-5" />
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white">{t.hero.certs}</div>
              <div className="text-xs text-slate-400 mt-0.5">{t.hero.certsLabel}</div>
            </div>

            <div className="glass-panel rounded-2xl p-4 sm:p-5 text-left border border-white/10 hover:border-emerald-500/30 hover:shadow-lg transition-all group">
              <div className="size-9 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
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
            className="flex flex-col items-center gap-1.5 text-xs text-slate-400 hover:text-sky-400 transition-colors"
          >
            <span>{t.hero.scrollDown}</span>
            <ArrowDown className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
