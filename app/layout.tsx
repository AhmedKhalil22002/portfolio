import type { Metadata } from "next";
import "./globals.css";
import { SiteProvider } from "@/context/SiteContext";

export const metadata: Metadata = {
  title: "Ahmed Khalil | Computer Science Engineer & Systems Portfolio",
  description:
    "Official portfolio of Ahmed Khalil - Final-year Computer Science Engineering Student at ESPRIT, specializing in software development, intelligent systems, and automation.",
  keywords: [
    "Ahmed Khalil",
    "Computer Science Engineer",
    "ESPRIT",
    "Software Engineer",
    "Portfolio",
    "Tunisia",
    "Automation",
    "AI",
    "NVIDIA Certified",
    "AWS Graduate",
  ],
  authors: [{ name: "Ahmed Khalil" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
