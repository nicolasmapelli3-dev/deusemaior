import { motion } from "framer-motion";
import { ChevronRight, Menu } from "lucide-react";
import { ageRanges, ageImages } from "@/data/quizData";

interface AgeStepProps {
  gender: string;
  onSelect: (age: string) => void;
  onBack: () => void;
}

const AgeStep = ({ gender, onSelect, onBack }: AgeStepProps) => {
  const images = ageImages[gender] || ageImages.male;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <header className="flex items-center justify-between px-4 py-3">
        <div className="w-10" />
        <div className="w-10" />
        <button className="w-10 h-10 flex items-center justify-center">
          <Menu className="w-6 h-6 text-[hsl(30,10%,30%)]" />
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pt-6 pb-8 max-w-lg mx-auto w-full">
        <h2 className="text-2xl md:text-3xl font-bold text-[hsl(30,10%,15%)] text-center mb-8 font-['Lora',serif] italic leading-snug">
          Por favor, selecione sua{"\n"}faixa etária.
        </h2>

        <div className="grid grid-cols-2 gap-4 w-full max-w-md">
          {ageRanges.map((age, i) => (
            <button
              key={age}
              onClick={() => onSelect(age)}
              className="relative rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <img
                src={images[i]}
                alt={`${age} anos`}
                className="w-full aspect-square object-cover object-top"
              />
              <div className="absolute bottom-3 left-3 right-3">
                <div className="flex items-center justify-between bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm">
                  <span className="text-sm font-semibold text-[hsl(30,10%,20%)]">{age}</span>
                  <ChevronRight className="w-4 h-4 text-[hsl(30,10%,40%)]" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default AgeStep;
