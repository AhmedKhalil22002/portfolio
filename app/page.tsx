import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div id="page-root" className="relative min-h-screen bg-[#0A0E17] text-slate-100 flex flex-col selection:bg-sky-500/25 selection:text-sky-200 dark:bg-[#0A0E17] light:bg-[#f8fafc]">
      {/* Global Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
