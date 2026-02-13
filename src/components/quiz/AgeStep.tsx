import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import QuizProgress from "./QuizProgress";
import { ageRanges } from "@/data/quizData";

interface AgeStepProps {
  onSelect: (age: string) => void;
  onBack: () => void;
}

const AgeStep = ({ onSelect, onBack }: AgeStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[hsl(30,25%,96%)] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <QuizProgress current={1} total={12} onBack={onBack} />

      <main className="flex-1 flex flex-col items-center px-4 pt-8 pb-8 max-w-lg mx-auto w-full">
        <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center mb-2">
          Qual é a sua idade?
        </h2>
        <p className="text-sm text-[hsl(30,10%,45%)] mb-8 text-center">
          Isso nos ajuda a personalizar sua experiência
        </p>

        <div className="flex flex-col gap-3 w-full max-w-sm">
          {ageRanges.map((age) => (
            <button
              key={age}
              onClick={() => onSelect(age)}
              className="flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-white border border-[hsl(30,15%,88%)] text-[hsl(30,10%,20%)] font-medium text-left hover:border-[hsl(30,30%,60%)] hover:bg-[hsl(30,25%,98%)] transition-all active:scale-[0.98]"
            >
              <span>{age} anos</span>
              <ChevronRight className="w-5 h-5 text-[hsl(30,10%,50%)]" />
            </button>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default AgeStep;
