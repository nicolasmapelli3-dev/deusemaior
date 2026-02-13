import { useState } from "react";
import { motion } from "framer-motion";
import QuizProgress from "./QuizProgress";

interface EmailStepProps {
  totalSteps: number;
  onSubmit: (email: string) => void;
  onBack: () => void;
}

const EmailStep = ({ totalSteps, onSubmit, onBack }: EmailStepProps) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      onSubmit(email);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen bg-[hsl(30,25%,96%)] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
    >
      <QuizProgress current={totalSteps} total={totalSteps} onBack={onBack} />

      <main className="flex-1 flex flex-col items-center px-4 pt-8 pb-8 max-w-lg mx-auto w-full">
        <div className="w-16 h-16 rounded-full bg-[hsl(30,20%,90%)] flex items-center justify-center mb-6">
          <svg className="w-8 h-8 text-[hsl(30,30%,45%)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center mb-2">
          Quase lá!
        </h2>
        <p className="text-sm text-[hsl(30,10%,45%)] mb-8 text-center max-w-xs leading-relaxed">
          Digite seu e-mail para receber seu resultado personalizado e dicas de crescimento espiritual
        </p>

        <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            required
            className="w-full px-5 py-4 rounded-2xl bg-white border border-[hsl(30,15%,88%)] text-[hsl(30,10%,20%)] placeholder:text-[hsl(30,10%,65%)] focus:outline-none focus:border-[hsl(30,30%,60%)] transition-colors text-base"
          />
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-[hsl(30,10%,20%)] text-white font-semibold text-base hover:bg-[hsl(30,10%,15%)] transition-colors active:scale-[0.98]"
          >
            Ver meu resultado
          </button>
        </form>

        <p className="text-xs text-[hsl(30,10%,55%)] mt-4 text-center max-w-xs">
          Ao enviar, você concorda em receber comunicações. Cancele a qualquer momento.
        </p>
      </main>
    </motion.div>
  );
};

export default EmailStep;
