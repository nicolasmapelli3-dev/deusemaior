import { ChevronLeft, Menu } from "lucide-react";

interface QuizProgressProps {
  current: number;
  total: number;
  onBack: () => void;
}

const QuizProgress = ({ current, total, onBack }: QuizProgressProps) => {
  const percentage = (current / total) * 100;

  return (
    <div className="flex flex-col w-full">
      <header className="flex items-center justify-between px-4 py-3">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center shrink-0"
        >
          <ChevronLeft className="w-6 h-6 text-[hsl(30,10%,30%)]" />
        </button>
        <h1 className="text-xl font-bold tracking-[0.15em] text-[hsl(30,10%,20%)]">
          DUOMO
        </h1>
        <button className="w-10 h-10 flex items-center justify-center">
          <Menu className="w-6 h-6 text-[hsl(30,10%,30%)]" />
        </button>
      </header>
      <div className="w-full h-1 bg-[hsl(220,10%,92%)]">
        <div
          className="h-full bg-[hsl(225,90%,55%)] transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default QuizProgress;
