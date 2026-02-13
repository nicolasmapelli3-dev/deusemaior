import { ChevronRight, Star, Menu } from "lucide-react";
import { motion } from "framer-motion";

interface GenderStepProps {
  onSelect: (gender: string) => void;
}

const GenderStep = ({ onSelect }: GenderStepProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[hsl(30,25%,96%)] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]"
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

      <main className="flex-1 flex flex-col items-center px-4 pt-6 pb-8 max-w-lg mx-auto w-full">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-[hsl(30,10%,20%)]">4.8</span>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[hsl(152,69%,31%)] text-[hsl(152,69%,31%)]" />
              ))}
            </div>
            <span className="text-xs text-[hsl(30,10%,40%)]">Trustpilot</span>
          </div>
          <div className="w-px h-8 bg-[hsl(30,10%,80%)]" />
          <p className="text-xs text-[hsl(30,10%,40%)] leading-tight max-w-[160px]">
            400K fiéis já crescem com o app Duomo
          </p>
        </div>

        <div className="text-center mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-[hsl(30,10%,15%)] tracking-wide leading-tight">
            DESCUBRA SEU
            <br />
            ARQUÉTIPO ESPIRITUAL
          </h2>
        </div>

        <p className="text-base md:text-lg text-[hsl(30,10%,35%)] italic mb-1 font-['Lora',serif]">
          E COMO DESENVOLVÊ-LO COM DEUS
        </p>

        <p className="text-sm text-[hsl(30,10%,45%)] mb-6">
          Questionário de 3 minutos
        </p>

        <div className="flex gap-3 w-full max-w-md mb-8">
          <button
            onClick={() => onSelect("male")}
            className="relative flex-1 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <img
              src="/images/m_gender.webp"
              alt="Homem"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-lg">Homem</span>
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </button>

          <button
            onClick={() => onSelect("female")}
            className="relative flex-1 rounded-2xl overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <img
              src="/images/f_gender.webp"
              alt="Mulher"
              className="w-full aspect-[3/4] object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <div className="flex items-center justify-between">
                <span className="text-white font-semibold text-lg">Mulher</span>
                <ChevronRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </button>
        </div>

        <div className="text-center text-xs text-[hsl(30,10%,50%)] leading-relaxed max-w-sm">
          <p className="mb-1">Ao continuar, você aceita nossos</p>
          <p>
            <a href="#" className="underline hover:text-[hsl(30,10%,30%)]">Termos de Serviço</a>
            {" | "}
            <a href="#" className="underline hover:text-[hsl(30,10%,30%)]">Política de Privacidade</a>
            {" | "}
            <a href="#" className="underline hover:text-[hsl(30,10%,30%)]">Condições de Assinatura</a>
          </p>
          <p className="mt-0.5">
            <a href="#" className="underline hover:text-[hsl(30,10%,30%)]">Política de Cookies</a>
            {" "}(por exemplo, Meta Pixel)
          </p>
          <p className="mt-2 text-[hsl(30,10%,55%)]">
            Por favor, revise antes de continuar
          </p>
        </div>
      </main>
    </motion.div>
  );
};

export default GenderStep;
