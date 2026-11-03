"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  ShieldCheck,
  Cpu,
  Cloud,
  Network,
  Trophy,
  Bot,
  Sparkles,
} from "lucide-react";

interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  type: "Certification" | "Award" | "Hackathon" | "Competition";
  badge: string;
  description: string;
  topics: string[];
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
}

const CERTIFICATIONS: CertificationItem[] = [
  {
    id: "bal-esprit",
    title: "Best Project of the Year Recognition",
    organization: "Bal des Projets ESPRIT 2025",
    type: "Award",
    badge: "Official Honors",
    description:
      "Honored as one of the standout, highest-caliber engineering projects of the entire academic year at ESPRIT.",
    topics: ["Project Excellence", "Software Engineering", "Innovation", "System Integration"],
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    icon: Trophy,
  },
  {
    id: "nvidia-anomaly",
    title: "Applications de l'IA et Détection d'Anomalies",
    organization: "NVIDIA Deep Learning Institute",
    type: "Certification",
    badge: "NVIDIA Certified",
    description:
      "Advanced certification on applying deep neural networks for anomaly detection in real-world sensor and visual datasets.",
    topics: ["Deep Learning", "Anomaly Detection", "Computer Vision", "Model Evaluation"],
    gradient: "from-emerald-500/20 via-cyan-500/10 to-transparent",
    icon: ShieldCheck,
  },
  {
    id: "nvidia-genai",
    title: "IA Générative avec les Modèles de Diffusion",
    organization: "NVIDIA Deep Learning Institute",
    type: "Certification",
    badge: "NVIDIA Certified",
    description:
      "Specialized training in generative artificial intelligence architectures, denoising diffusion probabilistic models, and prompting frameworks.",
    topics: ["Generative AI", "Diffusion Models", "Latent Space", "Prompt Engineering"],
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    icon: Sparkles,
  },
  {
    id: "nvidia-maintenance",
    title: "Applications de l'IA pour la Maintenance Prédictive",
    organization: "NVIDIA Deep Learning Institute",
    type: "Certification",
    badge: "NVIDIA Certified",
    description:
      "Industrial AI specialization on predictive maintenance, sensor stream processing, failure mode forecasting, and machine health telemetry.",
    topics: ["Predictive Maintenance", "Industrial AI", "Time-Series Telemetry", "Failure Prediction"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    icon: Cpu,
  },
  {
    id: "aws-cloud",
    title: "AWS Academy Graduate – Cloud Foundations",
    organization: "Amazon Web Services (AWS Academy)",
    type: "Certification",
    badge: "AWS Training Badge",
    description:
      "Comprehensive certification on AWS cloud architecture, compute (EC2), storage (S3), IAM security, and reliable cloud design principles.",
    topics: ["Cloud Architecture", "AWS Cloud Foundations", "Cloud Security", "Infrastructure"],
    gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
    icon: Cloud,
  },
  {
    id: "hashgraph-dev",
    title: "Hashgraph Developer Course",
    organization: "The Hashgraph Association",
    type: "Certification",
    badge: "DLT Certified",
    description:
      "Developer certification in distributed ledger technology (DLT), Hedera Hashgraph consensus algorithms, and decentralized application fundamentals.",
    topics: ["Hashgraph Consensus", "DLT & Web3", "Smart Contracts", "Decentralized Systems"],
    gradient: "from-indigo-500/20 via-purple-500/10 to-transparent",
    icon: Network,
  },
  {
    id: "ieee-hackathon",
    title: "Hackathon Engineering Challenge",
    organization: "IEEE FSB Bizerte Student Branch",
    type: "Hackathon",
    badge: "IEEE Participant",
    description:
      "Intensive collaborative hackathon tackling algorithmic problems and rapid prototyping under high-pressure competitive conditions.",
    topics: ["Rapid Prototyping", "Team Hackathon", "Problem Solving", "IEEE Engineering"],
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    icon: Bot,
  },
  {
    id: "smartech-robotics",
    title: "National Robotics Event – Sousse",
    organization: "Club Smartech",
    type: "Competition",
    badge: "Robotics Contest",
    description:
      "Inter-collegiate robotics competition requiring autonomous navigation, microcontroller coding, and real-time sensor processing.",
    topics: ["Autonomous Robotics", "Embedded Systems", "Sensor Fusion", "Team Competition"],
    gradient: "from-teal-500/20 via-cyan-500/10 to-transparent",
    icon: Bot,
  },
];

export default function Certifications() {
  const [filter, setFilter] = useState<string>("all");

  const filteredItems =
    filter === "all"
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.type === filter);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-white/[0.01]">
      {/* Background glow orbs */}
      <div className="absolute left-1/3 top-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="size-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Certifications &{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Industry credentials from NVIDIA & AWS, along with academic honors, hackathons, and national robotics challenges.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {["all", "Certification", "Award", "Hackathon", "Competition"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                filter === tab
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20"
                  : "bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10"
              }`}
            >
              {tab === "all" ? "All Credentials & Honors" : `${tab}s`}
            </button>
          ))}
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="glass-panel rounded-3xl p-6 sm:p-7 border border-white/10 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/10 transition-all flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Subtle Card Gradient Glow in top corner */}
                  <div
                    className={`absolute -top-12 -right-12 w-36 h-36 bg-gradient-to-br ${item.gradient} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none`}
                  />

                  <div>
                    {/* Top Row: Type and Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-2">
                        <div className="size-9 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="size-4.5" />
                        </div>
                        <span className="text-[11px] font-mono uppercase text-slate-400">
                          {item.type}
                        </span>
                      </div>

                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/25">
                        {item.badge}
                      </span>
                    </div>

                    {/* Title & Organization */}
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 leading-snug">
                      {item.title}
                    </h3>

                    <div className="text-xs font-medium text-slate-300 mb-3">
                      {item.organization}
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-5">
                      {item.description}
                    </p>
                  </div>

                  {/* Topics Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                    {item.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
