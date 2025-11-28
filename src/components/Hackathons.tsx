import { motion } from "motion/react";
import { Trophy, Award } from "lucide-react";

export function Hackathons() {
  const wins = [
    {
      event: "AGI Hackathon",
      project: "Sentinel",
      description: "AI Agent Safety OS with Sentry & Telnyx",
      year: "2025",
    },
    {
      event: "CalHacks",
      project: "Onboarly",
      description: "AI-powered employee onboarding platform",
      year: "2025",
    },
    {
      event: "ACM Hackathon",
      project: "Learnify",
      description: "Smart study companion with spaced repetition",
      year: "2025",
    },
  ];

  const participated = [
    "HackMIT",
    "AWS Bedrock Hackathon",
    "YC Agent Jam",
    "NexHacks",
  ];

  return (
    <section id="hackathons" className="py-20 px-6 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/3 w-[700px] h-[700px] bg-gradient-radial from-cyan-600/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Hackathons & Wins</h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Shipping production-grade products in 24-48 hours
          </p>
        </motion.div>

        {/* Winner Badges */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {wins.map((win, index) => (
            <motion.div
              key={win.event}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gradient-to-br from-yellow-600/20 to-amber-600/20 backdrop-blur-xl border-2 border-yellow-500/50 rounded-2xl p-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-amber-600/10 rounded-2xl blur-xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl flex items-center justify-center">
                    <Trophy className="w-7 h-7 text-white" />
                  </div>
                  <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 rounded-full text-yellow-300 text-xs">
                    {win.year}
                  </span>
                </div>

                <h3 className="text-white mb-2">
                  {win.event} Winner
                </h3>
                <div className="text-yellow-300 mb-2">
                  {win.project}
                </div>
                <p className="text-white/60 text-sm leading-relaxed">
                  {win.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Participated Events */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-white/60 mb-4">
            <Award className="w-5 h-5" />
            <span className="text-sm">Also built at</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {participated.map((event) => (
              <span
                key={event}
                className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white/70 text-sm hover:border-purple-500/50 transition-colors"
              >
                {event}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}