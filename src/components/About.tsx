import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial from-cyan-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-white mb-4">About Me</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12"
        >
          {/* Profile section */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 mx-auto md:mx-0">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-white text-4xl font-bold">PK</span>
              </div>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Preet Karia</h3>
              <p className="text-purple-400 mb-6 font-medium">Robotics Engineering @ UC Santa Cruz</p>
              
              <div className="space-y-4 text-white/60 leading-relaxed text-lg">
                <p>
                  I'm a founder-engineer building at the intersection of robotics, quantitative systems, and artificial intelligence. Currently pursuing Robotics Engineering at UC Santa Cruz, where I research reflection-aware SLAM and robot manipulation.
                </p>
                
                <p>
                  My work spans from hardware (Verilog RTL accelerators, depth sensors) to high-frequency trading systems and production LLM agents. I've won hackathons at CalHacks and ACM, shipping production-grade applications in 24-48 hours.
                </p>
                
                <p>
                  I believe the most interesting problems sit at the boundaries between disciplines — where robotics meets finance, where hardware meets AI, and where research meets rapid prototyping.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}