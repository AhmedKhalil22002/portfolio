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
  Loader2,
  AlertCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { useSite } from "@/context/SiteContext";

const RECIPIENT_EMAIL = "khalil.ahmed22002@gmail.com";

export default function Contact() {
  const { t } = useSite();
  const c = t.contact;

  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sentDirectly, setSentDirectly] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [lastDraft, setLastDraft] = useState({
    subject: "",
    body: "",
    mailtoUrl: "",
    gmailUrl: "",
    outlookUrl: "",
  });
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const subjectText = formData.subject.trim() || `Portfolio Contact from ${formData.name}`;
    const bodyText = `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`;

    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${RECIPIENT_EMAIL}&su=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    const outlookUrl = `https://outlook.live.com/mail/0/deeplink/compose?to=${RECIPIENT_EMAIL}&subject=${encodeURIComponent(
      subjectText
    )}&body=${encodeURIComponent(bodyText)}`;

    const draft = {
      subject: subjectText,
      body: bodyText,
      mailtoUrl,
      gmailUrl,
      outlookUrl,
    };
    setLastDraft(draft);

    // Check if an external background API key is provided
    const web3Key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (web3Key) {
      setIsSubmitting(true);
      setErrorMessage(null);

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: web3Key,
            name: formData.name,
            email: formData.email,
            subject: `[Portfolio] ${subjectText}`,
            message: formData.message,
            from_name: formData.name,
          }),
        });

        const result = await response.json().catch(() => null);

        if (response.ok && result?.success) {
          setSentDirectly(true);
          setSubmittedName(formData.name);
          setSubmittedEmail(formData.email);
          setFormSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          return;
        }
      } catch (err: unknown) {
        console.warn("Background API submission unavailable, switching to webmail dispatch:", err);
      } finally {
        setIsSubmitting(false);
      }
    }

    // Direct Webmail / Client Dispatch (100% reliable, zero NetworkError)
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(bodyText).catch(() => {});
    }

    // Try opening Gmail Web directly in a new tab
    try {
      window.open(gmailUrl, "_blank", "noopener,noreferrer");
    } catch {
      window.location.href = mailtoUrl;
    }

    setSentDirectly(false);
    setSubmittedName(formData.name);
    setSubmittedEmail(formData.email);
    setFormSubmitted(true);
  };

  const mailtoFallback =
    lastDraft.mailtoUrl ||
    `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Contact from ${formData.name || "Visitor"}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sky-500/[0.03] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-600/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm backdrop-blur-md">
            <Mail className="size-3.5 text-sky-400" />
            <span>{c.sectionLabel}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            {c.headline}{" "}
            <span className="bg-gradient-to-r from-sky-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
              {c.headlineAccent}
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">{c.subtitle}</p>
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
              <h3 className="text-xl font-bold text-white mb-2">{c.directChannels}</h3>

              {/* Email item */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-sky-500/30 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Mail className="size-3.5 text-sky-400" />
                    <span>{c.emailAddress}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard(RECIPIENT_EMAIL, "email")}
                    className="flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 focus:outline-none"
                    title={c.copy}
                  >
                    {copiedType === "email" ? (
                      <>
                        <Check className="size-3 text-emerald-400" />
                        <span className="text-emerald-400">{c.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>{c.copy}</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${RECIPIENT_EMAIL}`}
                  className="text-white font-medium hover:text-sky-300 transition-colors break-all text-sm sm:text-base font-mono"
                >
                  {RECIPIENT_EMAIL}
                </a>
              </div>

              {/* Phone item */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-sky-500/30 transition-all group">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Phone className="size-3.5 text-sky-400" />
                    <span>{c.phoneNumber}</span>
                  </div>
                  <button
                    onClick={() => copyToClipboard("+21654140550", "phone")}
                    className="flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 focus:outline-none"
                    title={c.copy}
                  >
                    {copiedType === "phone" ? (
                      <>
                        <Check className="size-3 text-emerald-400" />
                        <span className="text-emerald-400">{c.copied}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="size-3" />
                        <span>{c.copy}</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href="tel:+21654140550"
                  className="text-white font-medium hover:text-sky-300 transition-colors text-sm sm:text-base font-mono"
                >
                  +216 54140550
                </a>
              </div>

              {/* Location item */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                <div className="flex items-center gap-2 text-xs text-slate-400 mb-1">
                  <MapPin className="size-3.5 text-sky-400" />
                  <span>{c.geographicLocation}</span>
                </div>
                <span className="text-white font-medium text-sm sm:text-base">{c.location}</span>
                <span className="text-xs text-slate-400 block mt-0.5">{c.locationNote}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-panel rounded-3xl p-6 border border-white/10">
              <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider mb-4">
                {c.professionalNetworks}
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
                  <h3 className="text-xl font-bold text-white">{c.sendMessage}</h3>
                  <p className="text-xs text-slate-400 mt-1">{c.sendMessageNote}</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
                  <Clock className="size-3.5" />
                  <span>{c.fastReply}</span>
                </div>
              </div>

              {formSubmitted ? (
                sentDirectly ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center"
                  >
                    <div className="size-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <Check className="size-6" />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {c.thankYou}, {submittedName || "Friend"}!
                    </h4>
                    <p className="text-sm text-slate-300 max-w-md mx-auto mb-6">
                      {c.thankYouMessage}{" "}
                      <span className="text-sky-400 font-mono">{submittedEmail}</span>{" "}
                      {c.thankYouSuffix}
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setSubmittedName("");
                        setSubmittedEmail("");
                        setErrorMessage(null);
                      }}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-all cursor-pointer"
                    >
                      {c.sendAnother}
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 sm:p-8 rounded-2xl bg-sky-500/10 border border-sky-500/20 text-center space-y-6"
                  >
                    <div className="size-12 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto">
                      <Check className="size-6" />
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-white mb-1.5">
                        {c.messagePrepared}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                        {c.messagePreparedSubtitle}
                      </p>
                    </div>

                    {/* Quick Dispatch Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <a
                        href={lastDraft.gmailUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white text-xs font-semibold hover:border-sky-400/40 transition-all shadow-sm group"
                      >
                        <Mail className="size-4 text-sky-400 group-hover:scale-110 transition-transform" />
                        <span>{c.openGmail}</span>
                      </a>

                      <a
                        href={lastDraft.mailtoUrl}
                        className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white text-xs font-semibold hover:border-sky-400/40 transition-all shadow-sm group"
                      >
                        <Send className="size-4 text-blue-400 group-hover:scale-110 transition-transform" />
                        <span>{c.openDefaultMail}</span>
                      </a>

                      <a
                        href={lastDraft.outlookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.14] border border-white/15 text-white text-xs font-semibold hover:border-sky-400/40 transition-all shadow-sm group"
                      >
                        <ArrowUpRight className="size-4 text-indigo-400 group-hover:scale-110 transition-transform" />
                        <span>{c.openOutlook}</span>
                      </a>
                    </div>

                    {/* Formatted Draft preview & copy button */}
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-white/10 text-left text-xs space-y-2">
                      <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-white/5">
                        <span className="font-mono text-[11px] text-sky-400">
                          To: {RECIPIENT_EMAIL}
                        </span>
                        <button
                          type="button"
                          onClick={() => copyToClipboard(lastDraft.body, "draft")}
                          className="flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors focus:outline-none cursor-pointer"
                        >
                          {copiedType === "draft" ? (
                            <>
                              <Check className="size-3.5 text-emerald-400" />
                              <span className="text-emerald-400 font-semibold">{c.copiedToClipboard}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="size-3.5" />
                              <span>{c.copyFullMessage}</span>
                            </>
                          )}
                        </button>
                      </div>
                      <p className="text-slate-300 font-mono text-[11px] whitespace-pre-line max-h-32 overflow-y-auto pr-2">
                        {lastDraft.body}
                      </p>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setSubmittedName("");
                          setSubmittedEmail("");
                          setErrorMessage(null);
                        }}
                        className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                      >
                        {c.sendAnother}
                      </button>
                    </div>
                  </motion.div>
                )
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-200 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start gap-2.5">
                        <AlertCircle className="size-4 text-rose-400 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold block text-rose-300 mb-0.5">
                            {c.errorTitle}
                          </span>
                          <span>{errorMessage}</span>
                        </div>
                      </div>
                      <a
                        href={mailtoFallback}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-white font-medium text-xs transition-colors shrink-0 cursor-pointer"
                      >
                        <Mail className="size-3.5" />
                        <span>{c.openEmailApp}</span>
                      </a>
                    </motion.div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {c.yourName}
                      </label>
                      <input
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={c.namePlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 transition-all disabled:opacity-60"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {c.yourEmail}
                      </label>
                      <input
                        type="email"
                        required
                        disabled={isSubmitting}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={c.emailPlaceholder}
                        className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 transition-all disabled:opacity-60"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {c.subject}
                    </label>
                    <input
                      type="text"
                      disabled={isSubmitting}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={c.subjectPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 transition-all disabled:opacity-60"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {c.message}
                    </label>
                    <textarea
                      required
                      rows={5}
                      disabled={isSubmitting}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={c.messagePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500/30 transition-all resize-none disabled:opacity-60"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 via-sky-600 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-sm shadow-md shadow-sky-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-75"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        <span>{c.sending}</span>
                      </>
                    ) : (
                      <>
                        <Send className="size-4" />
                        <span>{c.transmit}</span>
                      </>
                    )}
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
