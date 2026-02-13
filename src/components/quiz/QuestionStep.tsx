import { motion } from "framer-motion";
import QuizProgress from "./QuizProgress";
import type { QuizQuestion } from "@/data/quizData";

interface QuestionStepProps {
  question: QuizQuestion;
  questionIndex: number;
  totalSteps: number;
  onSelect: (answer: string) => void;
  onBack: () => void;
}

const QuestionStep = ({ question, questionIndex, totalSteps, onSelect, onBack }: QuestionStepProps) => {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <QuizProgress current={questionIndex + 1} total={totalSteps} onBack={onBack} />

      <main className="flex-1 flex flex-col items-center px-4 pt-8 pb-8 max-w-lg mx-auto w-full">
        <h2 className="text-xl md:text-2xl font-bold text-[hsl(30,10%,15%)] text-center mb-8 leading-snug font-['Lora',serif] italic">
          {question.question}
        </h2>

        <div className="flex flex-col gap-3 w-full max-w-md">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => onSelect(option)}
              className="flex items-center justify-between w-full px-5 py-4 rounded-2xl bg-white border border-[hsl(30,10%,88%)] text-[hsl(30,10%,25%)] text-sm font-normal text-left hover:border-[hsl(30,20%,70%)] hover:bg-[hsl(30,20%,98%)] transition-all active:scale-[0.98] leading-relaxed"
            >
              <span className="flex-1">{option}</span>
              <span className="w-5 h-5 rounded-full border-2 border-[hsl(30,10%,82%)] shrink-0 ml-3" />
            </button>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default QuestionStep;
