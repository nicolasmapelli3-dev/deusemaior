import { ChevronLeft } from "lucide-react";

interface QuizProgressProps {
  current: number;
  total: number;
  onBack: () => void;
}

const QuizProgress = ({ current, total, onBack }: QuizProgressProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="flex items-center gap-3 w-full px-4 py-3">
      <button
        onClick={onBack}
        className="w-10 h-10 flex items-center justify-center shrink-0"
      >
        <ChevronLeft className="w-6 h-6 text-[hsl(30,10%,30%)]" />
      </button>
      <div className="flex-1 h-2 bg-[hsl(30,15%,88%)] rounded-full overflow-hidden">
        <div
          className="h-full bg-[hsl(30,30%,45%)] rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <span className="text-sm text-[hsl(30,10%,45%)] shrink-0 min-w-[40px] text-right">
        {current}/{total}
      </span>
    </div>
  );
};

export default QuizProgress;
