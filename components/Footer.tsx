import { Terminal, ArrowUp, Mail, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/10 bg-[#070A11] relative overflow-hidden py-14">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" className="flex items-center gap-2.5 mb-2">
              <div className="size-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white">
                <Terminal className="size-4.5" />
              </div>
              <span className="font-bold text-lg text-white">Ahmed Khalil</span>
            </a>
            <p className="text-xs text-slate-400 max-w-sm">
              Computer Science Engineering Student • ESPRIT • Electronics & Automation • Client-Centric Problem Solver
            </p>
          </div>

          {/* Quick Nav Anchors */}
          <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">
              Experience
            </a>
            <a href="#education" className="hover:text-cyan-400 transition-colors">
              Education
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              Skills
            </a>
            <a href="#certifications" className="hover:text-cyan-400 transition-colors">
              Certifications
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Back to Top */}
          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/[0.04] hover:bg-cyan-500/10 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 text-xs font-medium transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {currentYear} Ahmed Khalil. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:Khalilahmed22002@gmail.com"
              className="hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail className="size-4" />
            </a>
            <a
              href="tel:+21654140550"
              className="hover:text-cyan-400 transition-colors"
              title="Phone"
            >
              <Phone className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/Ahmed Khalil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href="https://github.com/Ahmed Khalil"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
              title="GitHub"
            >
              <GithubIcon className="size-4" />
            </a>
          </div>

          <div className="text-[11px] text-slate-400 font-mono">
            Built with Next.js 16, Tailwind CSS v4 & Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
