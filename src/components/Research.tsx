import { motion } from "motion/react";

export function Research() {
  return (
    <section id="research" className="py-20 px-6 relative">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-purple-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }} // Unlocked
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Research & Robotics</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            UCSC Computational Robotics Lab
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }} // Unlocked
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-white mb-3">Reflection-Aware SLAM</h3>
                <p className="text-white/60 leading-relaxed">
                  Developing novel SLAM algorithms that use depth + IR sensor fusion from Intel RealSense cameras to detect and compensate for reflective surfaces. This approach significantly improves mapping accuracy in environments with glass, mirrors, and polished floors.
                </p>
              </div>

              <div>
                <h3 className="text-white mb-3">Robot Calibration & Manipulation</h3>
                <p className="text-white/60 leading-relaxed">
                  Working with Baxter and Sawyer collaborative robots on kinematic calibration and manipulation tasks. Implementing real-time control systems for precise object manipulation in unstructured environments.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4">
                {["SLAM", "RealSense D435i", "ROS", "C++", "Python", "Point Clouds", "Sensor Fusion"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-purple-300 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Visuals */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.5 }} // Unlocked
            className="space-y-6"
          >
            {/* Robot Image Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-cyan-900/20 rounded-2xl border border-purple-500/30 p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: `linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
                                    linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />
              </div>
              <svg className="w-48 h-48 opacity-60" viewBox="0 0 200 200">
                <rect x="80" y="120" width="40" height="60" fill="url(#grad4)" rx="4" />
                <rect x="60" y="140" width="20" height="40" fill="url(#grad4)" rx="2" />
                <rect x="120" y="140" width="20" height="40" fill="url(#grad4)" rx="2" />
                <circle cx="100" cy="100" r="30" fill="url(#grad4)" />
                <circle cx="90" cy="95" r="5" fill="#fff" />
                <circle cx="110" cy="95" r="5" fill="#fff" />
                <path d="M 70 80 Q 70 60, 90 60 L 110 60 Q 130 60, 130 80" fill="none" stroke="url(#grad4)" strokeWidth="3" />
                <defs>
                  <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* SLAM Map Placeholder */}
            <div className="aspect-video bg-gradient-to-br from-cyan-900/20 to-purple-900/20 rounded-2xl border border-cyan-500/30 p-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute bg-cyan-400 rounded-full"
                    style={{
                      width: Math.random() * 3 + 1 + "px",
                      height: Math.random() * 3 + 1 + "px",
                      left: Math.random() * 100 + "%",
                      top: Math.random() * 100 + "%",
                    }}
                  />
                ))}
              </div>
              <div className="text-cyan-400 text-sm font-mono opacity-60">
                3D Point Cloud Mapping
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}