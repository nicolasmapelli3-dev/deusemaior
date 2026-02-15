import { motion } from "framer-motion";

interface PlanReadyStepProps {
  onContinue: () => void;
  onBack: () => void;
}

const PlanReadyStep = ({ onContinue, onBack }: PlanReadyStepProps) => {
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
        <div className="flex-1" />
      </header>

      <main className="flex-1 flex flex-col items-center px-4 pt-6 pb-8 max-w-lg mx-auto w-full">
        {/* Badge */}
        <div className="mb-6 px-6 py-2.5 rounded-full border border-transparent bg-gradient-to-r from-[hsl(280,80%,85%)] via-[hsl(300,70%,90%)] to-[hsl(200,80%,88%)] text-[hsl(30,10%,25%)] text-sm font-medium">
          Pronto para receber seu plano?
        </div>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center leading-snug">
          Seu <span className="text-[hsl(270,60%,55%)]">Plano de Crescimento Espiritual</span>
        </h2>
        <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center leading-snug mb-1">
          baseado no seu Arquétipo
        </h2>
        <h2 className="text-2xl font-bold text-[hsl(30,10%,15%)] text-center leading-snug mb-4">
          está pronto!
        </h2>

        {/* Subtitle */}
        <p className="text-sm text-[hsl(0,0%,55%)] mb-6">Desenvolvendo seus dons espirituais</p>

        {/* Chart */}
        <div className="w-full max-w-sm mb-2">
          <div className="relative w-full h-52">
            {/* "Após 4 semanas" label */}
            <div className="absolute top-0 right-4 bg-[hsl(30,10%,15%)] text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
              Após 4 semanas
            </div>

            {/* Chart area */}
            <svg viewBox="0 0 320 160" className="w-full h-full mt-4" preserveAspectRatio="none">
              {/* Grid lines */}
              <line x1="30" y1="30" x2="300" y2="30" stroke="hsl(0,0%,92%)" strokeWidth="0.5" />
              <line x1="30" y1="60" x2="300" y2="60" stroke="hsl(0,0%,92%)" strokeWidth="0.5" />
              <line x1="30" y1="90" x2="300" y2="90" stroke="hsl(0,0%,92%)" strokeWidth="0.5" />
              <line x1="30" y1="120" x2="300" y2="120" stroke="hsl(0,0%,92%)" strokeWidth="0.5" />

              {/* Orange gradient fill */}
              <defs>
                <linearGradient id="orangeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(25,95%,55%)" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(45,95%,65%)" stopOpacity="0.15" />
                </linearGradient>
                <linearGradient id="greenGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="hsl(80,60%,60%)" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="hsl(150,60%,55%)" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Orange area */}
              <path
                d="M30,130 C60,128 90,115 140,100 C180,88 220,78 260,75 L260,140 L30,140 Z"
                fill="url(#orangeGrad)"
              />
              {/* Green area */}
              <path
                d="M140,100 C180,88 220,60 280,35 L280,75 C220,78 180,88 140,100 Z"
                fill="url(#greenGrad)"
              />

              {/* Orange line */}
              <path
                d="M30,130 C60,128 90,115 140,100 C180,88 220,78 260,75"
                fill="none"
                stroke="hsl(25,95%,55%)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Green line */}
              <path
                d="M140,100 C180,80 220,55 280,32"
                fill="none"
                stroke="hsl(150,60%,45%)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Start dot */}
              <circle cx="30" cy="130" r="5" fill="hsl(25,95%,55%)" stroke="white" strokeWidth="2" />
              {/* End dot */}
              <circle cx="280" cy="32" r="5" fill="hsl(150,60%,45%)" stroke="white" strokeWidth="2" />
            </svg>

            {/* "Agora" label */}
            <div className="absolute bottom-8 left-4 bg-[hsl(30,10%,15%)] text-white text-xs font-semibold px-3 py-1.5 rounded-lg">
              Agora
            </div>
          </div>

          {/* Week labels */}
          <div className="flex justify-between px-8 mt-1">
            <span className="text-xs text-[hsl(0,0%,55%)]">Semana 1</span>
            <span className="text-xs text-[hsl(0,0%,55%)]">Semana 2</span>
            <span className="text-xs text-[hsl(0,0%,55%)]">Semana 3</span>
            <span className="text-xs text-[hsl(0,0%,55%)]">Semana 4</span>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-[hsl(0,0%,65%)] mb-6">*Esta tabela tem caráter meramente ilustrativo.</p>

        {/* CTA */}
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

export default PlanReadyStep;
