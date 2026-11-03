"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "@/lib/i18n";

type Theme = "dark" | "light";

interface SiteContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  toggleTheme: () => void;
  t: Translations;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [theme, setThemeState] = useState<Theme>("dark");

  // Hydrate from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("site-lang") as Lang | null;
    const savedTheme = localStorage.getItem("site-theme") as Theme | null;
    if (savedLang === "en" || savedLang === "fr") setLangState(savedLang);
    if (savedTheme === "dark" || savedTheme === "light")
      setThemeState(savedTheme);
  }, []);

  // Apply theme class to <html>
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
      html.classList.remove("light");
    } else {
      html.classList.add("light");
      html.classList.remove("dark");
    }
  }, [theme]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem("site-lang", l);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("site-theme", next);
      return next;
    });
  }, []);

  const t = translations[lang] as Translations;

  return (
    <SiteContext.Provider value={{ lang, setLang, theme, toggleTheme, t }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}

