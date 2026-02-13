import { motion } from "framer-motion";
import { Menu } from "lucide-react";

interface ReadyStepProps {
  gender: string;
  onContinue: () => void;
}

const ReadyStep = ({ gender, onContinue }: ReadyStepProps) => {
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
        <h1 className="text-xl font-bold tracking-[0.15em] text-[hsl(30,10%,20%)]">
          DUOMO
        </h1>
        <button className="w-10 h-10 flex items-center justify-center">
          <Menu className="w-6 h-6 text-[hsl(30,10%,30%)]" />
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center justify-between px-4 pt-8 pb-6 max-w-lg mx-auto w-full">
        <div className="flex-1 flex flex-col items-center justify-center">
          <img
            src="/images/portal.webp"
            alt="Portal espiritual"
            className="w-64 h-64 object-cover rounded-2xl mb-8 shadow-md"
          />

          <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center mb-3 leading-snug">
            {gender === "female"
              ? "Pronta para descobrir quem você é?"
              : "Pronto para descobrir quem você é?"}
          </h2>

          <p className="text-base text-[hsl(30,10%,40%)] text-center max-w-xs leading-relaxed">
            Aprenda a crescer na fé de forma prática, de acordo com a sua conexão única com Deus.
          </p>
        </div>

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

export default ReadyStep;
