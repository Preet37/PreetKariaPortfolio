import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  const projects = [
    {
      title: "Limit Order Book Simulator",
      description:
        "High-performance order book simulator with microsecond-level accuracy. Implements market-making strategies with inventory management.",
      tags: ["Python", "C++", "Quant", "Sim"],
      gradient: "from-green-600/20 to-emerald-600/20",
      visual: (
        <div className="w-full h-full flex flex-col justify-center px-8 gap-2">
          {/* Animated Order Book Bars */}
          <div className="flex justify-between items-end h-32 gap-1">
             {[...Array(8)].map((_, i) => (
               <motion.div 
                 key={i}
                 className={`flex-1 rounded-t ${i < 4 ? 'bg-green-500/50' : 'bg-red-500/50'}`}
                 animate={{ height: [`${30 + Math.random()*40}%`, `${30 + Math.random()*40}%`] }}
                 transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse", delay: i * 0.05 }}
               />
             ))}
          </div>
          <div className="flex justify-between font-mono text-[10px] text-white/40">
            <span>BIDS</span>
            <span>ASKS</span>
          </div>
        </div>
      ),
    },
    {
      title: "TinyTrainium — RTL AI Accelerator",
      description:
        "Custom hardware accelerator for neural network inference. Implements systolic array architecture for matrix multiplication.",
      tags: ["Verilog", "RTL", "FPGA", "Hardware"],
      gradient: "from-blue-600/20 to-indigo-600/20",
      visual: (
        <div className="w-full h-full flex items-center justify-center">
          <div className="grid grid-cols-3 gap-3">
            {[...Array(9)].map((_, i) => (
              <motion.div 
                key={i}
                className="w-8 h-8 border border-blue-400/30 bg-blue-400/10 rounded flex items-center justify-center"
                animate={{ backgroundColor: ["rgba(96, 165, 250, 0.1)", "rgba(96, 165, 250, 0.4)", "rgba(96, 165, 250, 0.1)"] }}
                transition={{ duration: 2, repeat: Infinity, delay: (i % 3) * 0.2 + Math.floor(i/3)*0.2 }}
              >
                <div className="w-1 h-1 bg-blue-400 rounded-full" />
              </motion.div>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Onboarly — CalHacks Winner",
      description:
        "AI-powered employee onboarding engine. Uses Gemini Vision in a Chrome extension to coach users step-by-step.",
      tags: ["Next.js", "LLMs", "Chrome Ext", "Winner"],
      gradient: "from-purple-600/20 to-pink-600/20",
      visual: (
        <div className="w-full h-full flex flex-col justify-center px-8 gap-3">
           <div className="h-2 w-3/4 bg-white/10 rounded overflow-hidden">
             <motion.div 
               className="h-full bg-purple-500"
               animate={{ width: ["0%", "100%"] }}
               transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
             />
           </div>
           <div className="space-y-2">
             <motion.div className="h-8 w-full bg-white/5 rounded border-l-2 border-purple-500" animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Infinity }} />
             <div className="h-8 w-5/6 bg-white/5 rounded border-l-2 border-transparent" />
           </div>
        </div>
      ),
    },
    {
      title: "DiffyBot — Reflection-Aware SLAM",
      description:
        "Novel SLAM approach using depth + IR sensor fusion to detect and compensate for reflective surfaces.",
      tags: ["ROS 2", "C++", "SLAM", "Research"],
      gradient: "from-orange-600/20 to-red-600/20",
      visual: (
        <div className="w-full h-full relative flex items-center justify-center overflow-hidden">
           {/* Robot Path */}
           <svg className="absolute inset-0 w-full h-full opacity-30">
             <motion.path 
               d="M 20 100 Q 100 20 180 100" 
               fill="none" 
               stroke="#f97316" 
               strokeWidth="2"
               strokeDasharray="4 4"
               animate={{ strokeDashoffset: [0, -8] }}
               transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
             />
           </svg>
           <motion.div 
             className="w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]"
             animate={{ x: [-40, 40], y: [-20, 20] }}
             transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
           />
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-24"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
        </motion.div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              {/* Text Content */}
              <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  {project.title}
                  <ArrowRight className="w-5 h-5 text-white/30 -rotate-45" />
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed text-lg">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/60 text-xs font-mono uppercase tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Active Visual Card */}
              <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} rounded-2xl border border-white/10 overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 backdrop-blur-[1px]" />
                  <div className="relative z-10 h-full w-full p-8">
                    <div className="w-full h-full bg-black/20 border border-white/10 rounded-xl backdrop-blur-sm overflow-hidden">
                      {project.visual}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}