import { motion } from "motion/react";
import { Github, Linkedin, Download, ArrowRight, Radio, TrendingUp, Cpu, Trophy, FolderGit2, Microscope, School } from "lucide-react";
import { useState, useEffect } from "react";

export function Hero() {
  const [activeMode, setActiveMode] = useState<"robotics" | "quant" | "ai">("robotics");

  // Auto-cycle modes to keep the page alive
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMode((current) => {
        if (current === "robotics") return "quant";
        if (current === "quant") return "ai";
        return "robotics";
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const modes = {
    robotics: {
      title: "Reflection-Aware SLAM",
      icon: <Radio className="w-4 h-4" />,
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            className="absolute w-64 h-64 border border-cyan-500/30 rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute w-48 h-48 border border-cyan-500/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute top-0 left-1/2 w-full h-1/2 bg-gradient-to-r from-transparent to-cyan-500/20 origin-bottom left-0" />
          </motion.div>
          
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400 rounded-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.5, repeatDelay: Math.random() }}
              style={{ top: `${20 + Math.random() * 60}%`, left: `${20 + Math.random() * 60}%` }}
            />
          ))}
        </div>
      ),
    },
    quant: {
      title: "Limit Order Book Depth",
      icon: <TrendingUp className="w-4 h-4" />,
      visual: (
        <div className="relative w-full h-full flex items-center justify-center px-8">
          <div className="w-full flex items-end gap-1 h-32 border-b border-white/10 pb-1">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className={`flex-1 rounded-t-sm ${i < 6 ? 'bg-emerald-500/40' : 'bg-red-500/40'}`}
                animate={{ height: [`${20 + Math.random() * 50}%`, `${30 + Math.random() * 60}%`] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1, ease: "easeInOut", repeatType: "reverse" }}
              />
            ))}
          </div>
        </div>
      ),
    },
    ai: {
      title: "Agentic Systems Graph",
      icon: <Cpu className="w-4 h-4" />,
      visual: (
        <div className="relative w-full h-full flex items-center justify-center">
           {[...Array(6)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-3 h-3 bg-purple-500 rounded-full"
               animate={{ scale: [1, 1.5, 1], x: [0, Math.random() * 20 - 10, 0], y: [0, Math.random() * 20 - 10, 0] }}
               transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
               style={{ top: `${30 + Math.random() * 40}%`, left: `${30 + Math.random() * 40}%` }}
             />
           ))}
           <div className="absolute inset-0 bg-purple-600/5 blur-xl rounded-full animate-pulse" />
        </div>
      ),
    },
  } as const;

  const stats = [
    { label: "Hackathon Wins", value: "2", icon: <Trophy className="w-5 h-5 text-yellow-400" /> },
    { label: "Projects Built", value: "12+", icon: <FolderGit2 className="w-5 h-5 text-purple-400" /> },
    { label: "Research Areas", value: "3", icon: <Microscope className="w-5 h-5 text-cyan-400" /> },
    { label: "UCSC Lab", value: "ASL", icon: <School className="w-5 h-5 text-emerald-400" /> },
  ];

  return (
    <section id="home" className="relative pt-32 pb-40 px-6">
      {/* Orbital glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-radial from-purple-600/15 via-cyan-600/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* 1. TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <p className="text-sm font-semibold tracking-[0.25em] text-purple-400 mb-6 uppercase">
            Preet Karia · Robotics × AI × Quant
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-emerald-400">intelligent systems</span> for the real world.
          </h1>

          <p className="text-white/70 mb-10 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto">
            Robotics Engineering @ UCSC. I work on reflection-aware SLAM, design RTL AI accelerators, and simulate market microstructure.
          </p>

          {/* Minimal Tags */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {["Robotics", "Quant", "AI Systems", "Hardware", "Hackathons"].map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + (i * 0.1) }}
                className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-full text-white/80 text-sm hover:border-purple-500/30 hover:bg-white/5 transition-colors cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="#projects"
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all"
            >
              View Projects
              <ArrowRight className="w-4 h-4" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/Preet_Karia_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white/5 border border-white/10 rounded-lg text-white font-medium flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>
            
            <div className="flex gap-2">
                <a
                  href="https://github.com/Preet37"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/preetkaria/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 bg-white/5 border border-white/10 rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
            </div>
          </div>
        </motion.div>

        {/* 2. STATS ROW */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4 mb-24"
        >
           {stats.map((stat, i) => (
             <div key={i} className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-2 mb-2 text-white/40 text-xs font-bold uppercase tracking-widest">
                   {stat.icon}
                   {stat.label}
                </div>
                <div className="text-3xl font-bold text-white">
                   {stat.value}
                </div>
             </div>
           ))}
        </motion.div>

        {/* 3. CLEAN VISUALIZATION (No Header/Footer) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full max-w-4xl flex flex-col gap-6"
        >
          {/* Minimal Tabs (Moved Outside) */}
          <div className="flex justify-center gap-2">
            {(Object.keys(modes) as Array<keyof typeof modes>).map((m) => (
              <button
                key={m}
                onClick={() => setActiveMode(m)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all ${
                  activeMode === m 
                    ? 'bg-white/10 text-white border border-white/10 shadow-lg shadow-purple-500/10' 
                    : 'text-white/40 hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {modes[m].icon}
                {m}
              </button>
            ))}
          </div>

          {/* The Visual Container - No Header, No Footer */}
          <div className="relative w-full aspect-[16/9] bg-[#030305] rounded-2xl border border-white/10 shadow-2xl shadow-purple-900/20 overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent opacity-50 pointer-events-none" />
             
             {/* Active Visual */}
             <div className="w-full h-full">
                {modes[activeMode].visual}
             </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}