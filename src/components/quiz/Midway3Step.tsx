import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";

interface Midway3StepProps {
  gender?: string;
  onContinue: () => void;
  onBack: () => void;
}

const Midway3Step = ({ onContinue, onBack }: Midway3StepProps) => {
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

      <main className="flex-1 flex flex-col items-center justify-between px-4 pt-8 pb-6 max-w-lg mx-auto w-full">
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            src="/images/midway3.webp"
            alt="Caminho espiritual"
            className="w-64 h-64 object-cover rounded-2xl mb-8 shadow-md"
          />

          <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center mb-3 leading-snug">
            Reunimos a maior parte do seu perfil espiritual.
          </h2>

          <p className="text-base text-[hsl(30,10%,40%)] text-center max-w-xs leading-relaxed mb-6">
            Conhecer seu arquétipo é importante, mas o mais importante é aprender a aplicá-lo no dia a dia. Suas respostas nos mostraram como você se conecta naturalmente com Deus.
          </p>

          <div className="w-full max-w-sm bg-[hsl(220,10%,96%)] rounded-2xl px-5 py-4 flex items-center gap-3">
            <span className="text-2xl">🙏</span>
            <span className="text-sm text-[hsl(30,10%,25%)]">
              Agora, vamos escolher o tipo de apoio prático que se encaixa no seu arquétipo espiritual.
            </span>
          </div>
        </div>

        <button
          onClick={onContinue}
          className="w-full max-w-sm py-4 rounded-2xl bg-[hsl(225,90%,55%)] text-white font-semibold text-base hover:bg-[hsl(225,90%,50%)] transition-colors active:scale-[0.98] mt-8"
        >
          Continuar
        </button>
      </main>
    </motion.div>
  );
};

export default Midway3Step;
