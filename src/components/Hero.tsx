import { motion } from "motion/react";
import { Github, Linkedin, Download, ArrowRight, Trophy, FolderGit2, Microscope, School } from "lucide-react";

export function Hero() {
  const stats = [
    { label: "Hackathon Wins", value: "3", icon: <Trophy className="w-5 h-5 text-yellow-400" /> },
    { label: "Projects Built", value: "13+", icon: <FolderGit2 className="w-5 h-5 text-purple-400" /> },
    { label: "Research Areas", value: "3", icon: <Microscope className="w-5 h-5 text-cyan-400" /> },
    { label: "UCSC Lab", value: "ASL", icon: <School className="w-5 h-5 text-emerald-400" /> },
  ];

  return (
    // FIX: style={{ paddingTop: '180px' }} forces the content down below the navbar reliably
    <section id="home" className="relative pb-32 px-6" style={{ paddingTop: '180px' }}>
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-radial from-purple-600/15 via-cyan-600/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* 1. MAIN TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto mb-20"
        >
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-emerald-400">intelligent systems</span> for the real world.
          </h1>

          {/* Subtext */}
          <p className="text-white/70 mb-10 leading-relaxed text-lg md:text-xl max-w-2xl mx-auto">
            Robotics Engineering @ UCSC. I work on reflection-aware SLAM, design RTL AI accelerators, and simulate market microstructure.
          </p>

          {/* Tags (Skills) */}
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
              href="/Preet_Karia_Software_Resume.pdf"
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
          className="w-full max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-4"
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

      </div>
    </section>
  );
}