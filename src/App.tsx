import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Pillars } from "./components/Pillars";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { Hackathons } from "./components/Hackathons";
import { Research } from "./components/Research";
import { ProjectsGrid } from "./components/ProjectsGrid";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { BootLoader } from "./components/BootLoader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    // This uses the EXACT gradient from your working version
    <div className="min-h-screen bg-gradient-to-br from-[#050509] to-[#0C1020] relative overflow-hidden text-white">
      
      <AnimatePresence mode="wait">
        {loading ? (
          <BootLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative z-10"
          >
            {/* Background grid & Noise (From your working version) */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
               <div
                 className="w-full h-full"
                 style={{
                   backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
                   backgroundSize: "50px 50px",
                 }}
               />
            </div>
            
            <div
              className="fixed inset-0 opacity-[0.015] pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              }}
            />

            <Navbar />
            
            <main className="relative z-10 flex flex-col gap-24 pb-32">
              <Hero />
              <Pillars />
              <FeaturedProjects />
              <Hackathons />
              <Research />
              <ProjectsGrid />
              <About />
              <Contact />
            </main>

            {/* Footer */}
            <footer className="py-8 px-6 border-t border-white/5 relative z-10">
              <div className="max-w-7xl mx-auto text-center text-white/40 text-sm font-mono">
                <p>© 2025 Preet Karia. Built with React, Tailwind, and Motion.</p>
                <div className="flex justify-center items-center gap-2 mt-2 text-xs">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span>ALL SYSTEMS OPERATIONAL</span>
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}