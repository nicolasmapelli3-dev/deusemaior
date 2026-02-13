export type QuizQuestion = {
  id: number;
  question: string;
  subtitle?: string;
  options: string[];
  multiSelect?: boolean;
};

// Questions are the same for male and female
// Questions 1-3 are before midway, 4-7 are after midway
export const quizQuestionsPart1: QuizQuestion[] = [
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

export const quizQuestionsPart2: QuizQuestion[] = [
  {
    id: 4,
    question: "Como você costuma se sentir em um dia normal?",
    options: [
      "Tranquilo",
      "Focado",
      "Sensato",
      "Esperançoso",
      "Energético",
      "Sobrecarregado",
    ],
  },
  {
    id: 5,
    question: "O que te ajuda a relaxar depois de um longo dia?",
    options: [
      "Um momento de calmaria a sós",
      "Conecte-se com alguém",
      "Um passeio ao ar livre",
      "Ar fresco e movimento",
      "Tarefas simples que me acalmam",
      "Atividades criativas ou aconchegantes",
    ],
  },
  {
    id: 6,
    question: "O que as pessoas costumam dizer que é o seu ponto forte?",
    subtitle: "Selecione todas as opções aplicáveis.",
    options: [
      "Um espírito pacífico",
      "Pensamento sábio e prático",
      "Um coração bondoso e gentil.",
      "Um presente para ideias",
      "Outro",
    ],
    multiSelect: true,
  },
  {
    id: 7,
    question: "Qual é a primeira coisa que você faz quando algo inesperado acontece?",
    options: [
      "Eu reajo rapidamente",
      "Eu paro para pensar",
      "Tento manter a calma.",
      "Observo como os outros se sentem.",
      "Estou tentando entender por que isso aconteceu.",
    ],
  },
  {
    id: 8,
    question: "O que normalmente te inspira?",
    options: [
      "Coisas lindas",
      "Histórias de outras pessoas",
      "Aprenda algo novo",
      "Ver progresso",
      "Atos de coragem",
    ],
  },
  {
    id: 9,
    question: "Quando você se importa com alguém, qual é a primeira coisa que você faz?",
    options: [
      "Ouvir",
      "Preciso de ajuda com algo prático.",
      "Diga algo encorajador",
      "Tente entender o problema deles.",
      "Para acalmar a situação.",
    ],
  },
  {
    id: 10,
    question: "Como você descreve seu modo de pensar?",
    options: [
      "Lógico",
      "Intuitivo",
      "Emocional",
      "Visão global",
      "Prático",
    ],
  },
  {
    id: 11,
    question: "O que te ajuda a manter o foco durante o dia?",
    options: [
      "Um plano claro a seguir.",
      "Um claro senso de propósito",
      "Uma mentalidade serena",
      "Me sentindo inspirado",
      "Boa gestão do tempo",
    ],
  },
  {
    id: 12,
    question: "Como você enfrenta um novo desafio?",
    options: [
      "Vou experimentar agora mesmo.",
      "Vou pensar nisso com cuidado.",
      "Sigo meu primeiro instinto.",
      "Vou dividir em etapas.",
      "Estou pedindo conselhos.",
    ],
  },
];

export const quizQuestionsPart3: QuizQuestion[] = [
  {
    id: 13,
    question: "Como você descreveria sua experiência de estudo bíblico até agora?",
    options: [
      "Sou iniciante",
      "Conheço algumas partes",
      "Eu estudei isso minuciosamente.",
      "Eu não tenho certeza",
    ],
  },
  {
    id: 14,
    question: "Como você se sente ao ler a Palavra?",
    options: [
      "Edificado",
      "Tranquilo",
      "Focado",
      "Eu ainda não leio muito.",
      "Eu não tenho certeza",
    ],
  },
  {
    id: 15,
    question: "Descreva seu relacionamento atual com Deus.",
    options: [
      "Forte e em crescimento",
      "Precisa de reforma.",
      "Eu não tenho certeza",
      "Outro",
    ],
  },
  {
    id: 16,
    question: "Onde você se sente mais à vontade para ler a Bíblia?",
    options: [
      "Um cantinho aconchegante em casa",
      "Ao ar livre, em contato com a natureza.",
      "Em uma igreja ou santuário tranquilo",
      "Em uma mesa com anotações",
      "Na cama, de manhã cedo ou à noite.",
    ],
  },
];

export const allQuizQuestions: QuizQuestion[] = [...quizQuestionsPart1, ...quizQuestionsPart2, ...quizQuestionsPart3];

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
