"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Clock,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";

export default function Contact() {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="size-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Let&apos;s Discuss{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              New Opportunities
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Whether you have a role in customer relations, tech support, automation, or software engineering, I am ready to bring dedication, rigor, and great energy to your team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Cards */}
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-5">
              <h3 className="text-xl font-bold text-white mb-2">
                Direct Contact Channels
              </h3>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Mail className="size-3.5 text-cyan-400" />
                    <span>Email Address</span>
                  </div>
                  <button
                    onClick={() =>
                      copyToClipboard("Khalilahmed22002@gmail.com", "email")
                    }
                    className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 focus:outline-none"
                    title="Copy Email"
                  >
                    {copiedType === "email" ? (
                      <>
                        <Check className="size-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="mailto:Khalilahmed22002@gmail.com"
                  className="text-white font-medium hover:text-cyan-400 transition-colors break-all text-sm sm:text-base font-mono"
                >
                  Khalilahmed22002@gmail.com
                </a>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Phone className="size-3.5 text-cyan-400" />
                    <span>Phone Number</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("+21654140550", "phone")}
                    className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 focus:outline-none"
                    title="Copy Phone"
                  >
                    {copiedType === "phone" ? (
                      <>
                        <Check className="size-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="tel:+21654140550"
                  className="text-white font-medium hover:text-cyan-400 transition-colors text-sm sm:text-base font-mono"
                >
                  +216 54140550
                </a>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <MapPin className="size-3.5 text-cyan-400" />
                  <span>Geographic Location</span>
                </div>
                <span className="text-white font-medium text-sm sm:text-base">
                  Ariana & Bizerte, Tunisia
                </span>
                <span className="text-xs text-slate-400 block mt-0.5">
                  Available for local and remote opportunities
                </span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10">
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                Professional Networks
              </h4>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://linkedin.com/in/Ahmed Khalil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-blue-500/40 hover:bg-blue-500/10 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <LinkedinIcon className="size-4 text-blue-400" />
                    <span className="text-xs font-semibold text-white">LinkedIn</span>
                  </div>
                  <ArrowUpRight className="size-3.5 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </a>

                <a
                  href="https://github.com/Ahmed Khalil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-slate-400 hover:bg-white/10 transition-all group"
                >
                  <div className="flex items-center gap-2.5">
                    <GithubIcon className="size-4 text-slate-300" />
                    <span className="text-xs font-semibold text-white">GitHub</span>
                  </div>
                  <ArrowUpRight className="size-3.5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Send a Message
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Fill out the form below and I will get back to you promptly.
                  </p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                  <Clock className="size-3.5" />
                  <span>Fast Reply</span>
                </div>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center"
                >
                  <div className="size-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <Check className="size-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">
                    Thank You, {formData.name}!
                  </h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                    Your message has been captured. I appreciate your interest and will respond to <span className="text-cyan-400 font-mono">{formData.email}</span> as soon as possible.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all"
                  >
                    Send Another Note
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="John Doe"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Subject
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      placeholder="Opportunity Inquiry / Project Discussion"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Hello Ahmed, we would love to speak with you regarding..."
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="size-4" />
                    <span>Transmit Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
