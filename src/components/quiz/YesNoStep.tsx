import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import QuizProgress from "./QuizProgress";

interface YesNoStepProps {
  question: string;
  current: number;
  total: number;
  onSelect: (answer: string) => void;
  onBack: () => void;
}

const YesNoStep = ({ question, current, total, onSelect, onBack }: YesNoStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <QuizProgress current={current} total={total} onBack={onBack} />

      <main className="flex-1 flex flex-col items-center justify-between px-4 pt-8 pb-12 max-w-lg mx-auto w-full">
        <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center leading-snug max-w-sm">
          {question}
        </h2>

        <div className="flex gap-4 w-full max-w-sm">
          <button
            onClick={() => onSelect("Não")}
            className="flex-1 flex flex-col items-center justify-center gap-3 py-8 rounded-2xl border border-[hsl(0,0%,85%)] bg-white hover:bg-[hsl(0,0%,97%)] transition-colors active:scale-[0.97]"
          >
            <X className="w-8 h-8 text-[hsl(0,70%,55%)]" strokeWidth={3} />
            <span className="text-base font-medium text-[hsl(30,10%,20%)]">Não</span>
          </button>
          <button
            onClick={() => onSelect("Sim")}
            className="flex-1 flex flex-col items-center justify-center gap-3 py-8 rounded-2xl border border-[hsl(0,0%,85%)] bg-white hover:bg-[hsl(0,0%,97%)] transition-colors active:scale-[0.97]"
          >
            <Check className="w-8 h-8 text-[hsl(155,70%,40%)]" strokeWidth={3} />
            <span className="text-base font-medium text-[hsl(30,10%,20%)]">Sim</span>
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default YesNoStep;
