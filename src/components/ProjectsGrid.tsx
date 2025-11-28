import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";

export function ProjectsGrid() {
  const projects = [
    {
      name: "Sentinel",
      tagline: "Real-Time Voice Authentication Firewall",
      tags: ["Python", "Sentry", "Telnyx", "AI Safety"],
    },
    {
      name: "OrderFlow Core",
      tagline: "High-frequency market microstructure simulator",
      tags: ["Python", "C++", "Quant", "Trading"],
    },
    {
      name: "TinyTrainium",
      tagline: "Verilog AI Accelerator Chip",
      tags: ["Verilog", "FPGA", "Hardware Architecture"],
    },
    {
      name: "DiffyBot",
      tagline: "RealSense SLAM & Reflection-Aware Navigation",
      tags: ["ROS 2", "C++", "Robotics", "SLAM"],
    },
    {
      name: "Onboarly",
      tagline: "AI Employee Onboarding Engine",
      tags: ["Next.js", "LLMs", "Agents", "CalHacks"],
    },
    {
      name: "AutoOps",
      tagline: "Self-Healing AWS Operations Agent",
      tags: ["AWS", "Bedrock", "DevOps", "Serverless"],
    },
    {
      name: "FlowPilot",
      tagline: "Autonomous Time-Blocking & Scheduling Agent",
      tags: ["Python", "AI", "Productivity"],
    },
    {
      name: "Iris",
      tagline: "Multimodal On-Device Personal Assistant",
      tags: ["Local LLM", "Computer Vision", "Edge AI"],
    },
    {
      name: "CleanData",
      tagline: "AI Data Cleaning & Normalization Pipeline",
      tags: ["Python", "Data Engineering", "HackMIT"],
    },
    {
      name: "Seed Drones",
      tagline: "Autonomous Seed-Planting Drone System",
      tags: ["Drone", "Path Planning", "Hardware"],
    },
    {
      name: "Waste Sorter",
      tagline: "Vision-Based Recycling Sorting Robot",
      tags: ["Computer Vision", "CNN", "Robotics", "Arduino"],
    },
    {
      name: "AI Meal Planner",
      tagline: "Personalized Nutrition & Meal Plan Generator",
      tags: ["Python", "LLMs", "Nutrition API"],
    },
    {
      name: "Learnify",
      tagline: "AI Learning Explainer & Personalized Tutor",
      tags: ["React", "EdTech", "Generative AI"],
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-[600px] h-[600px] bg-gradient-radial from-purple-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">All Projects</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            A complete archive of research, hackathons, and engineering builds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.05 }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-6 hover:border-purple-500/50 hover:bg-white/[0.07] transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-xl transition-all duration-300" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-medium">{project.name}</h3>
                  <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white/70 transition-colors" />
                </div>
                
                <p className="text-white/60 text-sm mb-4 line-clamp-2">{project.tagline}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/5 border border-white/10 rounded text-white/70 text-[10px] uppercase tracking-wider"
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