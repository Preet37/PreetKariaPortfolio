import { motion } from "motion/react";
import { Mail, Github, Linkedin, Award } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-purple-600/20 via-cyan-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Unlocked
        >
          <h2 className="text-white mb-6">Let's build something ambitious.</h2>
          <p className="text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
            Always interested in challenging problems at the intersection of robotics, AI, and quantitative systems. Open to research collaborations, hackathons, and full-time opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="mailto:preet@example.com"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg text-white flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-shadow"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://devpost.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg text-white flex items-center gap-2 hover:bg-white/10 transition-colors"
            >
              <Award className="w-5 h-5" />
              Devpost
            </a>
          </div>

          {/* Decorative underline */}
          <div className="flex justify-center">
            <div className="h-px w-64 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}