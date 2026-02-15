import { motion } from "framer-motion";
import { Check } from "lucide-react";
import type { ArchetypeResult } from "@/data/quizData";
import { ageRanges, ageImages } from "@/data/quizData";

interface ResultStepProps {
  result: ArchetypeResult;
  gender: string;
  age: string;
}

const ResultStep = ({ result, gender, age }: ResultStepProps) => {
  const ageIndex = ageRanges.indexOf(age);
  const images = ageImages[gender] || ageImages.male;
  const avatarSrc = images[ageIndex >= 0 ? ageIndex : 0];

  const days = ["Dia 1", "Dia 2", "Dia 3", "Dia 4", "Dia 5", "Dia 6", "Dia 7"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <main className="flex-1 flex flex-col items-center px-4 pt-6 pb-8 max-w-lg mx-auto w-full">
        {/* Title */}
        <h2 className="text-xl font-bold text-[hsl(30,10%,15%)] text-center mb-5">
          Seu Perfil Espiritual
        </h2>

        {/* Chart */}
        <div className="w-full max-w-sm mb-6">
          <div className="flex flex-col gap-3">
            {result.chartScores.map((score) => (
              <div key={score.label} className="flex items-center gap-3">
                <span className="text-xs text-[hsl(0,0%,45%)] w-24 text-right shrink-0">
                  {score.label}
                </span>
                <div className="flex-1 h-5 bg-[hsl(0,0%,94%)] rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${score.value}%` }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: score.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Archetype card with avatar */}
        <div className="w-full max-w-sm rounded-2xl overflow-hidden border border-[hsl(0,0%,90%)] mb-6">
          <div className="flex items-center gap-4 p-4">
            <img
              src={avatarSrc}
              alt={result.biblicalFigure}
              className="w-20 h-20 rounded-xl object-cover shrink-0"
            />
            <div>
              <p className="text-lg font-bold text-[hsl(30,10%,15%)]">{result.biblicalFigure}</p>
              <p className="text-sm text-[hsl(270,60%,55%)] font-semibold">{result.name}</p>
              <p className="text-xs text-[hsl(0,0%,55%)]">{result.verse}</p>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-[hsl(30,10%,35%)] text-center leading-relaxed mb-6 max-w-sm">
          {result.description}
        </p>

        {/* Bullet points */}
        <div className="w-full max-w-sm flex flex-col gap-3 mb-6">
          {result.bulletPoints.map((point, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[hsl(150,60%,45%)] flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-white" strokeWidth={3} />
              </div>
              <p className="text-sm text-[hsl(30,10%,30%)] leading-relaxed">{point}</p>
            </div>
          ))}
        </div>

        {/* Plan highlight */}
        <p className="text-sm text-[hsl(270,60%,55%)] text-center font-medium leading-relaxed mb-6 max-w-sm">
          {result.planHighlight}
        </p>

        {/* CTA Button */}
        <button className="w-full max-w-sm py-4 rounded-2xl bg-[hsl(225,90%,55%)] text-white font-semibold text-base hover:bg-[hsl(225,90%,50%)] transition-colors active:scale-[0.98] mb-8">
          Adquira meu plano
        </button>

        {/* Plan preview card */}
        <div className="w-full max-w-sm rounded-2xl border border-[hsl(0,0%,90%)] p-4 mb-6">
          <p className="text-sm text-[hsl(30,10%,25%)] text-center font-medium mb-4">
            Seu plano feito para você.<br />
            Tudo aquilo pensado para te ajudar a viver seus dons fortes no dia a dia.
          </p>
          <div className="flex gap-1.5 overflow-x-auto pb-2">
            {days.map((day) => (
              <div
                key={day}
                className="flex-1 min-w-[40px] rounded-lg bg-[hsl(270,60%,96%)] border border-[hsl(270,40%,88%)] py-3 flex items-center justify-center"
              >
                <span className="text-[10px] text-[hsl(270,50%,50%)] font-medium whitespace-nowrap">{day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Press logos */}
        <div className="w-full max-w-sm text-center mb-8">
          <p className="text-xs text-[hsl(0,0%,55%)] mb-3">Conforme mostrado em</p>
          <div className="flex items-center justify-center gap-6">
            <span className="text-sm font-bold text-[hsl(30,10%,20%)] italic font-serif">NEW YORK POST</span>
            <span className="text-sm font-bold text-[hsl(30,10%,20%)]">Bloomberg</span>
            <span className="text-sm font-bold text-[hsl(30,10%,20%)] italic font-serif">Forbes</span>
          </div>
        </div>

        {/* Bottom CTA section */}
        <div className="w-full max-w-sm text-center">
          <p className="text-lg font-bold text-[hsl(30,10%,15%)] mb-1">
            Seu <span className="text-[hsl(270,60%,55%)]">Plano de Crescimento Espiritual</span> baseado no seu Arquétipo está pronto!
          </p>
          <button className="w-full mt-4 py-4 rounded-2xl bg-[hsl(225,90%,55%)] text-white font-semibold text-base hover:bg-[hsl(225,90%,50%)] transition-colors active:scale-[0.98]">
            Adquira meu plano
          </button>
        </div>
      </main>
    </motion.div>
  );
};

export default ResultStep;
