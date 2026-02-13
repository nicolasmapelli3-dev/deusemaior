import { motion } from "framer-motion";
import type { ArchetypeResult } from "@/data/quizData";

interface ResultStepProps {
  result: ArchetypeResult;
  gender: string;
}

const ResultStep = ({ result, gender }: ResultStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-[hsl(30,25%,96%)] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <header className="flex items-center justify-center px-4 py-3">
        <h1 className="text-xl font-bold tracking-[0.15em] text-[hsl(30,10%,20%)]">
          DUOMO
        </h1>
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pt-4 pb-8 max-w-lg mx-auto w-full">
        {/* Result card */}
        <div className="w-full rounded-3xl bg-white border border-[hsl(30,15%,88%)] overflow-hidden shadow-sm mb-6">
          {/* Top banner */}
          <div className="bg-gradient-to-br from-[hsl(30,20%,25%)] to-[hsl(30,15%,35%)] px-6 py-8 text-center">
            <p className="text-[hsl(30,30%,70%)] text-sm mb-2 font-['Lora',serif] italic">
              {result.title}
            </p>
            <h2 className="text-3xl font-bold text-white tracking-wide mb-3">
              {result.name}
            </h2>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-white/80 text-sm">
              <span>✝️</span>
              <span>{result.biblicalFigure}</span>
            </div>
          </div>

          {/* Description */}
          <div className="px-6 py-6">
            <p className="text-[hsl(30,10%,30%)] text-sm leading-relaxed mb-6">
              {result.description}
            </p>

            {/* Traits */}
            <h3 className="text-sm font-bold text-[hsl(30,10%,20%)] mb-3 uppercase tracking-wider">
              Suas Qualidades
            </h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {result.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-4 py-2 rounded-full bg-[hsl(30,25%,94%)] text-[hsl(30,10%,30%)] text-sm font-medium"
                >
                  {trait}
                </span>
              ))}
            </div>

            {/* Verse */}
            <div className="p-4 rounded-2xl bg-[hsl(30,25%,96%)] border border-[hsl(30,15%,90%)]">
              <p className="text-sm text-[hsl(30,10%,35%)] italic font-['Lora',serif] text-center">
                {result.verse}
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <button className="w-full max-w-sm py-4 rounded-2xl bg-[hsl(30,10%,20%)] text-white font-semibold text-base hover:bg-[hsl(30,10%,15%)] transition-colors active:scale-[0.98] mb-3">
          Começar minha jornada espiritual
        </button>
        <p className="text-xs text-[hsl(30,10%,55%)] text-center">
          Acesse o app Duomo e desbloqueie seu potencial
        </p>
      </main>
    </motion.div>
  );
};

export default ResultStep;
