import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export function ProjectsGrid() {
  const projects = [
    {
      name: "Limit Order Book Simulator",
      tagline: "High-frequency market microstructure",
      tags: ["Python", "C++", "Quant"],
    },
    {
      name: "TinyTrainium",
      tagline: "Verilog RTL AI accelerator",
      tags: ["Verilog", "Hardware", "AI"],
    },
    {
      name: "Onboarly",
      tagline: "AI onboarding engine",
      tags: ["Next.js", "LLMs", "CalHacks"],
    },
    {
      name: "Learnify",
      tagline: "Smart study companion",
      tags: ["React", "AI/ML", "ACM"],
    },
    {
      name: "DiffyBot SLAM",
      tagline: "Reflection-aware navigation",
      tags: ["C++", "ROS", "SLAM"],
    },
    {
      name: "AutoOps",
      tagline: "Cloud reliability agent",
      tags: ["AWS", "Bedrock", "Agents"],
    },
    {
      name: "Market Making Bot",
      tagline: "Automated trading strategy",
      tags: ["Python", "Trading", "Quant"],
    },
    {
      name: "Neural Architecture Search",
      tagline: "AutoML optimization",
      tags: ["PyTorch", "ML", "Research"],
    },
    {
      name: "Robot Arm Controller",
      tagline: "Sawyer manipulation system",
      tags: ["ROS", "Python", "Robotics"],
    },
    {
      name: "Depth Sensor Fusion",
      tagline: "RealSense IR + depth",
      tags: ["C++", "Computer Vision", "Sensors"],
    },
    {
      name: "LLM Fine-tuning Pipeline",
      tagline: "Custom model training",
      tags: ["Python", "HuggingFace", "LLMs"],
    },
    {
      name: "Portfolio Optimizer",
      tagline: "Risk-adjusted allocation",
      tags: ["Python", "Finance", "Optimization"],
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-purple-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Unlocked
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">All Projects</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A selection of research, hackathon projects, and personal explorations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }} // Unlocked
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-xl transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white">{project.name}</h3>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                </div>
                
                <p className="text-white/60 text-sm mb-4">{project.tagline}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-white/70 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}