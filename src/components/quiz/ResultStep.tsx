import { motion } from "framer-motion";
import type { ArchetypeResult } from "@/data/quizData";
import { ageRanges, ageImages } from "@/data/quizData";

interface ResultStepProps {
  result: ArchetypeResult;
  gender: string;
  age: string;
}

const statBars = [
  { label: "Fé", value: 90, color: "hsl(225,90%,55%)" },
  { label: "Coragem", value: 75, color: "hsl(25,90%,55%)" },
  { label: "Persistência", value: 70, color: "hsl(145,60%,45%)" },
  { label: "Perseverança", value: 80, color: "hsl(270,60%,55%)" },
];

const benefits = [
  { icon: "✦", text: "Um percurso pensado para você, voltado ao sentido e reconexão com Deus." },
  { icon: "📖", text: "Descubra como viver o seu dom espiritual cada dia, guiando o que sente com fé e discernimento." },
  { icon: "💡", text: "Orações e reflexões pessoais para momentos longe da tela." },
  { icon: "🌿", text: "Momentos de oração diária com temas inspiradores." },
];

const weeklyPlan = [
  {
    label: "Semana 1",
    color: "hsl(225,90%,55%)",
    days: ["Identidade espiritual", "Gratidão diária", "Presença de Deus", "Servo de Cristo", "Quietude e oração", "Sabedoria bíblica", "Descanso santo"],
  },
  {
    label: "Semana 2",
    color: "hsl(270,60%,55%)",
    days: ["Fé em ação", "Autoconhecimento", "Misericórdia Vi", "Servir ao próximo", "Busca de direção", "Gratidão profunda", "Renovação"],
  },
  {
    label: "Semana 3",
    color: "hsl(145,60%,45%)",
    days: ["Confiança", "Propósito", "Perdão", "Coragem", "Compaixão", "Esperança", "Sabedoria"],
  },
];

const ResultStep = ({ result, gender, age }: ResultStepProps) => {
  const ageIndex = ageRanges.indexOf(age);
  const images = ageImages[gender] || ageImages.male;
  const avatarSrc = images[ageIndex >= 0 ? ageIndex : 0];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <header className="flex items-center justify-center px-4 py-3" />

      <main className="flex-1 flex flex-col items-center px-4 pt-4 pb-8 max-w-lg mx-auto w-full">
        {/* Title */}
        <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center mb-6">
          Seu Perfil Espiritual
        </h2>

        {/* Profile card with avatar + stats */}
        <div className="w-full rounded-2xl border border-[hsl(220,20%,90%)] p-4 mb-6 bg-[hsl(220,30%,98%)]">
          <div className="flex gap-4">
            <div className="relative shrink-0">
              <img
                src={avatarSrc}
                alt={result.name}
                className="w-28 h-28 rounded-2xl object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent rounded-b-2xl px-2 py-1.5">
                <p className="text-white text-sm font-bold leading-tight">{result.name}</p>
                <p className="text-white/70 text-[10px]">{result.biblicalFigure}</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2.5">
              {statBars.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <span className="text-xs text-[hsl(30,10%,40%)] w-24 shrink-0">{stat.label}</span>
                  <div className="flex-1 h-2 bg-[hsl(220,20%,92%)] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.value}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: stat.color }}
                    />
                  </div>
                  <span className="text-xs text-[hsl(30,10%,40%)] w-7 text-right">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Description box */}
        <div className="w-full rounded-2xl border-2 border-[hsl(270,60%,70%)] p-4 mb-6">
          <p className="text-sm text-[hsl(30,10%,25%)] leading-relaxed text-center">
            {result.description}
          </p>
        </div>

        {/* Benefits checklist */}
        <div className="w-full rounded-2xl bg-[hsl(220,30%,97%)] border border-[hsl(220,20%,92%)] p-5 mb-6 flex flex-col gap-4">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-start gap-3">
              <span className="text-lg shrink-0 mt-0.5">{b.icon}</span>
              <p className="text-sm text-[hsl(30,10%,25%)] leading-relaxed">{b.text}</p>
            </div>
          ))}
        </div>

        {/* Archetype CTA text */}
        <p className="text-sm text-[hsl(30,10%,35%)] text-center mb-4 leading-relaxed px-2">
          Arquétipos são o caminho para entender e elaborar um plano que {gender === "female" ? "a" : "o"} ajudará a crescer e a conhecer cada dia de sua vida.
        </p>

        {/* CTA Button */}
        <button className="w-full max-w-sm py-4 rounded-full bg-[hsl(270,60%,55%)] text-white font-bold text-base hover:bg-[hsl(270,60%,48%)] transition-colors active:scale-[0.98] mb-8">
          Adquira meu plano
        </button>

        {/* Testimonial */}
        <div className="w-full text-center mb-8 px-4">
          <p className="text-sm text-[hsl(30,10%,30%)] italic font-['Lora',serif] leading-relaxed">
            "Desde que recebi meu perfil espiritual, percebi a importância de me reconectar com a minha fé de maneira intencional. O plano personalizado me ajudou a encontrar tempo para orar e refletir todos os dias."
          </p>
        </div>

        {/* Weekly plan */}
        <div className="w-full mb-8">
          <div className="relative flex flex-col gap-3 overflow-hidden">
            {/* Avatar overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <img
                src={avatarSrc}
                alt={result.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-xl opacity-90"
              />
            </div>

            {weeklyPlan.map((week, wi) => (
              <div key={wi}>
                <div className="flex items-stretch gap-1">
                  <div
                    className="w-20 shrink-0 rounded-l-lg flex items-center justify-center text-white text-[10px] font-bold py-2"
                    style={{ backgroundColor: week.color }}
                  >
                    {week.label}
                  </div>
                  <div className="flex-1 grid grid-cols-7 gap-0.5">
                    {week.days.map((day, di) => (
                      <div
                        key={di}
                        className="bg-[hsl(220,30%,96%)] border border-[hsl(220,20%,90%)] rounded-sm p-1 min-h-[48px] flex flex-col"
                      >
                        <span className="text-[8px] font-bold text-[hsl(30,10%,40%)]">Dia {di + 1}</span>
                        <span className="text-[7px] text-[hsl(30,10%,50%)] leading-tight mt-0.5">{day}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Media logos */}
        <div className="w-full text-center mb-6">
          <p className="text-xs text-[hsl(30,10%,55%)] mb-3">Como mostrado em:</p>
          <div className="flex items-center justify-center gap-6">
            <span className="text-sm font-bold text-[hsl(30,10%,25%)] italic font-['Lora',serif]">New York Post</span>
            <span className="text-sm font-bold text-[hsl(30,10%,25%)]">Bloomberg</span>
            <span className="text-sm font-bold text-[hsl(30,10%,25%)]">Forbes</span>
          </div>
        </div>

        {/* Final CTA section */}
        <div className="w-full text-center mb-4">
          <p className="text-lg font-bold text-[hsl(30,10%,15%)] leading-snug mb-1">
            Seu <span className="text-[hsl(270,60%,55%)]">Plano de Crescimento Espiritual</span> baseado no seu Arquétipo está pronto!
          </p>
        </div>

        <button className="w-full max-w-sm py-4 rounded-full bg-[hsl(270,60%,55%)] text-white font-bold text-base hover:bg-[hsl(270,60%,48%)] transition-colors active:scale-[0.98]">
          Adquira meu plano
        </button>
      </main>
    </motion.div>
  );
};

export default ResultStep;
