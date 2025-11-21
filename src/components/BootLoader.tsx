import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Cpu } from "lucide-react";

export function BootLoader({ onComplete }: { onComplete: () => void }) {
  const [logs, setLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  const bootSequence = [
    "Initializing kernel...",
    "Loading SLAM modules...",
    "Mounting file system...",
    "Connecting to neural engine...",
    "Optimizing quant algorithms...",
    "Starting Preet OS v1.0...",
  ];

  useEffect(() => {
    let currentIndex = 0;
    
    // Log interval
    const logInterval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setLogs((prev) => [...prev, bootSequence[currentIndex]]);
        currentIndex++;
      }
    }, 400);

    // Progress bar
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(logInterval);
          clearInterval(progressInterval);
          setTimeout(onComplete, 800); // Slight delay before unmounting
          return 100;
        }
        return prev + 2;
      });
    }, 40);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-[#050509] flex flex-col items-center justify-center font-mono text-sm"
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="w-[300px] space-y-6">
        {/* Icon */}
        <div className="flex justify-center mb-8">
           <div className="relative">
             <div className="absolute inset-0 bg-purple-500 blur-xl opacity-20 animate-pulse" />
             <Cpu className="w-12 h-12 text-white" />
           </div>
        </div>

        {/* Terminal Logs */}
        <div className="h-32 overflow-hidden space-y-1 text-white/50">
          {logs.map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-green-500">➜</span> {log}
              {i === logs.length - 1 && (
                <span className="inline-block w-2 h-4 bg-purple-500 animate-pulse" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs text-white/40 uppercase tracking-widest">
            <span>System Boot</span>
            <span>{progress}%</span>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 to-cyan-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}