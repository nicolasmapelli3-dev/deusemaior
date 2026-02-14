import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

interface PlanLoadingStepProps {
  onComplete: () => void;
  onBack: () => void;
}

const loadingSteps = [
  { label: "Alinhando-se aos seus objetivos", shortLabel: "Metas" },
  { label: "Identificar áreas de crescimento", shortLabel: "Áreas de crescimento" },
  { label: "Selecionando versículos bíblicos para você", shortLabel: "" },
];

const testimonials = [
  {
    title: "Exatamente o que meu coração precisava.",
    text: "Finalmente encontrei o que procurava: uma maneira consistente, profunda e pessoal de crescer na fé. O Duomo me ajuda a curar feridas antigas, renovar meu foco e construir um relacionamento real com Cristo que realmente me sustenta ao longo do dia.",
    author: "Jane S.",
  },
  {
    title: "Eu me concentro todas as manhãs.",
    text: "Duomo se tornou a âncora das minhas manhãs. É curto, prático e espiritualmente enriquecedor; eu o abro antes de qualquer outra coisa. Ele me ajuda a começar o dia me sentindo centrada, me lembrando do que importa e mais conectada com Deus.",
    author: "Lois H.",
  },
  {
    title: "Parece que foi feito sob medida para mim.",
    text: "A cada dia, o Duomo parece falar diretamente com o que estou vivenciando. As lições são instigantes e, ao mesmo tempo, pessoais. Não se trata apenas de ler as Escrituras; trata-se de aprender a vivê-las nas áreas em que mais preciso de Deus.",
    author: "Wendy J.",
  },
];

const STEP_DURATION = 3000; // 3s per step

const TrustpilotStars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="w-6 h-6 bg-[hsl(155,70%,35%)] flex items-center justify-center">
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      </div>
    ))}
  </div>
);

const PlanLoadingStep = ({ onComplete, onBack }: PlanLoadingStepProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [stepProgress, setStepProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const advanceStep = useCallback(() => {
    setCompletedSteps((prev) => [...prev, currentStep]);
    if (currentStep < loadingSteps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      setStepProgress(0);
    } else {
      setTimeout(onComplete, 600);
    }
  }, [currentStep, onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(advanceStep, 300);
          return 100;
        }
        return prev + 2;
      });
    }, STEP_DURATION / 50);
    return () => clearInterval(interval);
  }, [currentStep, advanceStep]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
    >
      {/* Header */}
      <header className="flex items-center px-4 py-3">
        <button onClick={onBack} className="p-1">
          <svg className="w-6 h-6 text-[hsl(30,10%,20%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <h1 className="flex-1 text-center text-lg font-bold tracking-[0.15em] text-[hsl(30,10%,20%)] pr-8">
          DUOMO
        </h1>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pt-8 pb-8 max-w-lg mx-auto w-full">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center leading-snug mb-1">
          Estamos desenvolvendo seu
        </h2>
        <h2 className="text-2xl font-bold text-[hsl(270,60%,55%)] text-center leading-snug mb-1">
          Plano de Crescimento Espiritual
        </h2>
        <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center leading-snug mb-8">
          com base no seu Arquétipo.
        </h2>

        {/* Steps list */}
        <div className="w-full max-w-sm mb-8">
          {loadingSteps.map((step, i) => {
            const isCompleted = completedSteps.includes(i);
            const isActive = currentStep === i;
            const isPending = !isCompleted && !isActive;
            const displayLabel = isCompleted ? step.shortLabel || step.label : step.label;

            return (
              <div key={i} className="border-b border-[hsl(0,0%,90%)] py-3">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-sm font-medium ${
                      isPending ? "text-[hsl(0,0%,65%)]" : "text-[hsl(30,10%,15%)]"
                    }`}
                  >
                    {displayLabel}
                  </span>
                  <span className="text-sm text-[hsl(0,0%,55%)]">
                    {isCompleted ? (
                      <div className="w-5 h-5 rounded-full border-2 border-[hsl(155,70%,40%)] flex items-center justify-center">
                        <Check className="w-3 h-3 text-[hsl(155,70%,40%)]" />
                      </div>
                    ) : isActive ? (
                      `${stepProgress} %`
                    ) : (
                      "0 %"
                    )}
                  </span>
                </div>
                {isActive && (
                  <div className="mt-2 w-full h-1 bg-[hsl(0,0%,90%)] rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[hsl(230,70%,55%)] rounded-full"
                      style={{ width: `${stepProgress}%` }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Testimonial card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-sm p-5 rounded-2xl border border-[hsl(0,0%,90%)] bg-[hsl(0,0%,98%)]"
          >
            <TrustpilotStars />
            <h3 className="text-base font-bold text-[hsl(30,10%,15%)] mt-3 mb-2">
              {testimonials[currentStep].title}
            </h3>
            <p className="text-sm text-[hsl(0,0%,45%)] leading-relaxed mb-3">
              {testimonials[currentStep].text}
            </p>
            <p className="text-sm font-medium text-[hsl(30,10%,20%)] text-right">
              {testimonials[currentStep].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </main>
    </motion.div>
  );
};

export default PlanLoadingStep;
