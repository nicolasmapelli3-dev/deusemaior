import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

interface ProfileSummaryStepProps {
  gender: string;
  onContinue: () => void;
  onBack: () => void;
}

const ProfileSummaryStep = ({ gender, onContinue, onBack }: ProfileSummaryStepProps) => {
  const avatarSrc = gender === "female" 
    ? "/images/age-female-35.webp" 
    : "/images/age-male-35.webp";

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-white flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <header className="flex items-center justify-between px-4 py-3">
        <button
          onClick={onBack}
          className="w-10 h-10 flex items-center justify-center"
        >
          <ChevronLeft className="w-6 h-6 text-[hsl(30,10%,30%)]" />
        </button>
        <h1 className="text-xl font-bold tracking-[0.15em] text-[hsl(30,10%,20%)]">
          DUOMO
        </h1>
        <div className="w-10" />
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pt-8 pb-6 max-w-lg mx-auto w-full">
        <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center mb-4 leading-snug">
          Resumo do seu perfil espiritual
        </h2>

        <div className="w-full max-w-sm border-t border-[hsl(30,10%,90%)] pt-5 mb-6">
          <div className="flex items-start gap-4">
            <img
              src={avatarSrc}
              alt="Seu perfil"
              className="w-16 h-16 rounded-full object-cover shrink-0"
            />
            <p className="text-sm text-[hsl(30,10%,30%)] leading-relaxed">
              <strong className="text-[hsl(30,10%,15%)]">Seu arquétipo agora está claro</strong> — e já podemos ver maneiras práticas de fortalecê-lo e desenvolvê-lo.
            </p>
          </div>
        </div>

        <div className="w-full max-w-sm mb-6">
          <p className="text-sm font-semibold text-[hsl(30,10%,20%)] mb-3">Eis o que se destaca:</p>
          <div className="rounded-2xl bg-gradient-to-b from-[hsl(220,90%,96%)] to-[hsl(220,90%,98%)] p-4 flex flex-col gap-3">
            <div className="bg-white rounded-xl px-4 py-3 flex items-start gap-3 shadow-sm border border-[hsl(220,80%,90%)]">
              <span className="text-[hsl(225,90%,55%)] text-lg mt-0.5">✦</span>
              <span className="text-sm text-[hsl(30,10%,25%)] leading-relaxed">
                Você possui uma força sólida que te impulsiona para frente.
              </span>
            </div>
            <div className="bg-white rounded-xl px-4 py-3 flex items-start gap-3 shadow-sm border border-[hsl(220,80%,90%)]">
              <span className="text-[hsl(225,90%,55%)] text-lg mt-0.5">✧</span>
              <span className="text-sm text-[hsl(30,10%,25%)] leading-relaxed">
                Você demonstra cordialidade e sinceridade na maneira como se relaciona com os outros.
              </span>
            </div>
            <div className="bg-white rounded-xl px-4 py-3 flex items-start gap-3 shadow-sm border border-[hsl(220,80%,90%)]">
              <span className="text-[hsl(225,90%,55%)] text-lg mt-0.5">💬</span>
              <span className="text-sm text-[hsl(30,10%,25%)] leading-relaxed">
                Sua fé influencia a maneira como você busca direção e encara a vida.
              </span>
            </div>
          </div>
        </div>

        <div className="flex-1" />

        <button
          onClick={onContinue}
          className="w-full max-w-sm py-4 rounded-2xl bg-[hsl(225,90%,55%)] text-white font-semibold text-base hover:bg-[hsl(225,90%,50%)] transition-colors active:scale-[0.98]"
        >
          Continuar
        </button>
      </main>
    </motion.div>
  );
};

export default ProfileSummaryStep;
