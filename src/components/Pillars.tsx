import { motion } from "motion/react";
import { Cpu, TrendingUp, Brain } from "lucide-react";

export function Pillars() {
  const pillars = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Robotics & Perception",
      subtitle: "UCSC Research",
      description:
        "Building reflection-aware SLAM systems with depth + IR sensor fusion for robust robot navigation. Working with Baxter & Sawyer arms on real-world calibration and manipulation tasks.",
      tags: ["SLAM", "RealSense", "ROS", "Computer Vision", "C++"],
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Quantitative Systems",
      subtitle: "Market Microstructure",
      description:
        "Developing limit order book simulators and market-making strategies. Exploring high-frequency trading infrastructure, backtesting frameworks, and latency optimization.",
      tags: ["Python", "C++", "Order Books", "Market Making", "Simulation"],
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Agents & Infrastructure",
      subtitle: "LLMs, Hardware, Cloud",
      description:
        "Shipping production AI systems from hardware accelerators (Verilog RTL) to cloud-native LLM agents. Built CalHacks-winning onboarding engine and AWS reliability automation.",
      tags: ["LLMs", "Verilog", "AWS Bedrock", "Agent Systems", "MLOps"],
    },
  ];

  return (
    <section className="py-20 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-cyan-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Unlocked
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">What I Build</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            At the intersection of robotics, finance, and artificial intelligence
          </p>
        </motion.div>

        <div className="grid gap-6">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }} // Unlocked
              transition={{ delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 rounded-2xl transition-all duration-300" />
              
              <div className="relative z-10 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center text-white">
                    {pillar.icon}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-2">
                    <h3 className="text-white mb-1">{pillar.title}</h3>
                    <p className="text-purple-400 text-sm">{pillar.subtitle}</p>
                  </div>
                  
                  <p className="text-white/60 mb-4 leading-relaxed">
                    {pillar.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-white/70 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}