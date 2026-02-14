import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ProgressCircleStepProps {
  onComplete: () => void;
}

const DURATION = 3500; // 3.5 seconds
const INTERVAL = 30;
const RADIUS = 80;
const STROKE = 10;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

const ProgressCircleStep = ({ onComplete }: ProgressCircleStepProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const steps = DURATION / INTERVAL;
    let current = 0;
    const timer = setInterval(() => {
      current++;
      const pct = Math.min(Math.round((current / steps) * 100), 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(timer);
        setTimeout(onComplete, 400);
      }
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [onComplete]);

  const offset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white flex flex-col items-center justify-center font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="relative w-48 h-48">
        <svg width="192" height="192" viewBox="0 0 192 192" className="-rotate-90">
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(270, 70%, 55%)" />
              <stop offset="50%" stopColor="hsl(240, 70%, 55%)" />
              <stop offset="100%" stopColor="hsl(210, 90%, 55%)" />
            </linearGradient>
          </defs>
          {/* Background circle */}
          <circle
            cx="96"
            cy="96"
            r={RADIUS}
            fill="none"
            stroke="hsl(0, 0%, 90%)"
            strokeWidth={STROKE}
          />
          {/* Progress circle */}
          <circle
            cx="96"
            cy="96"
            r={RADIUS}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth={STROKE}
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl font-bold text-[hsl(30,10%,15%)]">
            {progress} %
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProgressCircleStep;
