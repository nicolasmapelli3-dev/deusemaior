import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LoadingStepProps {
  onComplete: () => void;
}

const steps = [
  "Analisando suas respostas...",
  "Identificando padrões espirituais...",
  "Comparando com personagens bíblicos...",
  "Preparando seu resultado personalizado...",
];

const LoadingStep = ({ onComplete }: LoadingStepProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(onComplete, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[hsl(30,25%,96%)] flex flex-col items-center justify-center px-4 font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <div className="flex flex-col items-center max-w-sm w-full">
        {/* Animated cross/icon */}
        <div className="relative w-20 h-20 mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full border-4 border-[hsl(30,15%,85%)] border-t-[hsl(30,30%,45%)]"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl">✝️</span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-[hsl(30,10%,15%)] mb-2 text-center">
          Analisando seu perfil
        </h2>

        <motion.p
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-[hsl(30,10%,45%)] mb-8 text-center"
        >
          {steps[currentStep]}
        </motion.p>

        <div className="w-full h-2 bg-[hsl(30,15%,88%)] rounded-full overflow-hidden mb-3">
          <motion.div
            className="h-full bg-[hsl(30,30%,45%)] rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-sm font-semibold text-[hsl(30,10%,30%)]">
          {progress}%
        </span>
      </div>
    </motion.div>
  );
};

export default LoadingStep;
