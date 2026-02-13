export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
};

// Questions are the same for male and female
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Escolha um versículo bíblico que fale ao seu coração.",
    options: [
      '"Aquietai-vos e sabei que eu sou Deus" – Salmo 46:10',
      '"Aonde fores, irei eu" – Rute 1:16',
      '"Para um tempo como este" – Ester 4:14',
      '"Sejam fortes e corajosos" – Josué 1:9',
    ],
  },
  {
    id: 2,
    question: "Escolha uma frase que tenha significado para você.",
    options: [
      '"Deixe para lá e entregue a Deus"',
      '"Fé acima do medo"',
      '"Você nasceu para este momento"',
      '"Eu consigo fazer coisas difíceis com Cristo"',
      '"O tempo de Deus é perfeito"',
    ],
  },
  {
    id: 3,
    question: "Escolha uma história bíblica que te inspire.",
    options: [
      "Noé e a arca",
      "Moisés conduzindo o povo à terra prometida.",
      "Daniel na cova dos leões",
      "Jesus ressuscitando Lázaro dos mortos",
      "O nascimento de Jesus",
    ],
  },
];

export type ArchetypeResult = {
  name: string;
  title: string;
  description: string;
  traits: string[];
  biblicalFigure: string;
  verse: string;
};

export const archetypes: Record<string, ArchetypeResult> = {
  leader: {
    name: "O Líder",
    title: "Seu arquétipo espiritual é",
    description:
      "Você tem o dom natural de liderar e inspirar outros na fé. Assim como Moisés guiou o povo de Israel, você é chamado a ser uma luz que ilumina o caminho para aqueles ao seu redor.",
    traits: ["Coragem", "Visão", "Determinação", "Inspiração"],
    biblicalFigure: "Moisés",
    verse: '"Sê forte e corajoso" - Josué 1:9',
  },
  servant: {
    name: "O Servo",
    title: "Seu arquétipo espiritual é",
    description:
      "Seu coração é voltado para servir os outros com humildade e amor. Assim como Jesus lavou os pés dos discípulos, você encontra propósito em colocar as necessidades dos outros acima das suas.",
    traits: ["Humildade", "Compaixão", "Generosidade", "Dedicação"],
    biblicalFigure: "Rute",
    verse: '"O maior entre vocês será aquele que serve" - Mateus 23:11',
  },
  wise: {
    name: "O Sábio",
    title: "Seu arquétipo espiritual é",
    description:
      "Você busca constantemente conhecimento e sabedoria divina. Como Salomão, você valoriza o entendimento profundo das Escrituras e aplica essa sabedoria em todas as áreas da vida.",
    traits: ["Discernimento", "Paciência", "Reflexão", "Conhecimento"],
    biblicalFigure: "Salomão",
    verse: '"O princípio da sabedoria é o temor do Senhor" - Provérbios 9:10',
  },
  worshipper: {
    name: "O Adorador",
    title: "Seu arquétipo espiritual é",
    description:
      "Sua conexão com Deus se expressa através da adoração profunda e contemplação. Como Davi, você tem um coração que transborda louvor e encontra paz na presença de Deus.",
    traits: ["Sensibilidade", "Expressividade", "Devoção", "Gratidão"],
    biblicalFigure: "Davi",
    verse: '"Bendirei o Senhor em todo o tempo" - Salmo 34:1',
  },
};

export const ageRanges = ["18–34", "35–44", "45–54", "55+"];

export const ageImages: Record<string, string[]> = {
  male: [
    "/images/age-male-18.webp",
    "/images/age-male-35.webp",
    "/images/age-male-45.webp",
    "/images/age-male-55.webp",
  ],
  female: [
    "/images/age-female-18.webp",
    "/images/age-female-35.webp",
    "/images/age-female-45.webp",
    "/images/age-female-55.webp",
  ],
};
