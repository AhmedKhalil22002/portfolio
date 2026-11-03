"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight, Terminal, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useSite } from "@/context/SiteContext";

export default function Navbar() {
  const { t, lang, setLang, theme, toggleTheme } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_LINKS = [
    { name: t.nav.about, href: "#about" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.education, href: "#education" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.certifications, href: "#certifications" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [t]); // re-run when language changes so section ids stay fresh

  const isLight = theme === "light";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? isLight
            ? "py-3 bg-slate-100/90 backdrop-blur-xl border-b border-black/10 shadow-lg shadow-black/5"
            : "py-3 bg-[#0B0F19]/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
          : "py-5 bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="size-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="size-5" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-bold text-base tracking-tight group-hover:text-cyan-400 transition-colors",
                  isLight ? "text-slate-900" : "text-white"
                )}
              >
                Ahmed Khalil
              </span>
              <span className="text-[11px] text-cyan-400 font-mono tracking-wider -mt-0.5">
                {t.nav.subtitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav
            className={cn(
              "hidden md:flex items-center gap-1 rounded-full px-3 py-1.5 backdrop-blur-md border",
              isLight
                ? "bg-black/[0.04] border-black/10"
                : "bg-white/[0.03] border-white/10"
            )}
          >
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 relative",
                    isActive
                      ? "text-cyan-400"
                      : isLight
                      ? "text-slate-700 hover:text-slate-900 hover:bg-black/5"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-cyan-500/15 border border-cyan-500/30 -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-2">
            {/* Open to Work badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{t.nav.openToWork}</span>
            </div>

            {/* Language Toggle */}
            <div
              className={cn(
                "flex items-center gap-0.5 rounded-full border p-0.5",
                isLight ? "bg-black/[0.04] border-black/10" : "bg-white/[0.04] border-white/10"
              )}
            >
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-semibold transition-all",
                  lang === "en"
                    ? "bg-cyan-500 text-white shadow-sm"
                    : isLight
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-400 hover:text-white"
                )}
                aria-label="Switch to English"
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className={cn(
                  "px-2.5 py-1 rounded-full text-xs font-semibold transition-all",
                  lang === "fr"
                    ? "bg-cyan-500 text-white shadow-sm"
                    : isLight
                    ? "text-slate-600 hover:text-slate-900"
                    : "text-slate-400 hover:text-white"
                )}
                aria-label="Passer en Français"
              >
                FR
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-2 rounded-full border transition-all hover:scale-110",
                isLight
                  ? "bg-black/[0.04] border-black/10 text-slate-700 hover:text-cyan-600 hover:border-cyan-400/40"
                  : "bg-white/[0.04] border-white/10 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40"
              )}
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
            >
              {isLight ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </button>

            {/* CTA button */}
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              {t.nav.getInTouch}
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>

          {/* Mobile: Theme + Lang + Hamburger */}
          <div className="flex md:hidden items-center gap-1.5">
            {/* Language compact */}
            <div
              className={cn(
                "flex items-center gap-0.5 rounded-full border p-0.5",
                isLight ? "bg-black/[0.04] border-black/10" : "bg-white/[0.04] border-white/10"
              )}
            >
              <button
                onClick={() => setLang("en")}
                className={cn(
                  "px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all",
                  lang === "en"
                    ? "bg-cyan-500 text-white"
                    : isLight
                    ? "text-slate-600"
                    : "text-slate-400"
                )}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className={cn(
                  "px-2 py-0.5 rounded-full text-[11px] font-semibold transition-all",
                  lang === "fr"
                    ? "bg-cyan-500 text-white"
                    : isLight
                    ? "text-slate-600"
                    : "text-slate-400"
                )}
              >
                FR
              </button>
            </div>

            {/* Theme compact */}
            <button
              onClick={toggleTheme}
              className={cn(
                "p-1.5 rounded-full border transition-all",
                isLight
                  ? "bg-black/[0.04] border-black/10 text-slate-700"
                  : "bg-white/[0.04] border-white/10 text-slate-300"
              )}
              aria-label="Toggle theme"
            >
              {isLight ? <Moon className="size-4" /> : <Sun className="size-4" />}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={cn(
                "p-2 rounded-lg focus:outline-none",
                isLight
                  ? "text-slate-700 hover:text-slate-900 hover:bg-black/5"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              )}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={cn(
              "md:hidden border-b backdrop-blur-2xl overflow-hidden",
              isLight
                ? "bg-slate-100/95 border-black/10"
                : "bg-[#0B0F19]/95 border-white/10"
            )}
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs w-fit mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>{t.nav.openToWork}</span>
              </div>

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 rounded-lg text-sm font-medium hover:text-cyan-400 transition-colors",
                    isLight
                      ? "text-slate-700 hover:bg-black/5"
                      : "text-slate-300 hover:bg-white/5"
                  )}
                >
                  {link.name}
                </a>
              ))}

              <div className="pt-3 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-semibold shadow-md shadow-cyan-500/20"
                >
                  {t.nav.getInTouch}
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
