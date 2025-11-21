import { motion } from "motion/react";
import { Github, Linkedin, FileText } from "lucide-react";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Glass navbar */}
      <div className="backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">PK</span>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-white/70 hover:text-white transition-colors text-sm">
                Home
              </a>
              <a href="#projects" className="text-white/70 hover:text-white transition-colors text-sm">
                Projects
              </a>
              <a href="#research" className="text-white/70 hover:text-white transition-colors text-sm">
                Research
              </a>
              <a href="#hackathons" className="text-white/70 hover:text-white transition-colors text-sm">
                Hackathons
              </a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">
                About
              </a>
              <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">
                Contact
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <a
              href="/Preet_Karia_Resume.pdf"
              target="_blank"               // <--- THIS opens it in a new tab
              rel="noopener noreferrer"     // <--- THIS makes it secure
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors text-sm text-white"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
            <a href="https://github.com/Preet37" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/preetkaria/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* System status bar */}
      <div className="bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-2">
          <div className="flex items-center gap-6 text-xs text-white/60">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              Systems Online: Robotics · AI · Quant
            </span>
            <span>·</span>
            <span>Hackathon Wins: 2</span>
            <span>·</span>
            <span>Location: Santa Cruz, CA</span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
