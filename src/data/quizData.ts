export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Com que frequência você lê a Bíblia?",
    options: [
      "Todos os dias",
      "Algumas vezes por semana",
      "Uma vez por semana",
      "Raramente",
    ],
  },
  {
    id: 2,
    question: "Como você se sente em relação à sua vida espiritual atualmente?",
    options: [
      "Forte e conectado com Deus",
      "Em crescimento, mas com dificuldades",
      "Desconectado e buscando direção",
      "Acabei de começar minha jornada",
    ],
  },
  {
    id: 3,
    question: "O que mais te motiva na fé?",
    options: [
      "Ajudar e servir os outros",
      "Buscar sabedoria e conhecimento",
      "Liderar e inspirar pessoas",
      "Adorar e louvar a Deus",
    ],
  },
  {
    id: 4,
    question: "Qual é o seu maior desafio espiritual?",
    options: [
      "Manter a consistência na oração",
      "Confiar no plano de Deus",
      "Perdoar quem me magoou",
      "Resistir às tentações do mundo",
    ],
  },
  {
    id: 5,
    question: "Em um grupo, qual papel você naturalmente assume?",
    options: [
      "O líder que guia os outros",
      "O conselheiro que ouve e aconselha",
      "O servidor que ajuda nos bastidores",
      "O comunicador que compartilha a Palavra",
    ],
  },
  {
    id: 6,
    question: "Como você prefere se conectar com Deus?",
    options: [
      "Através da oração silenciosa",
      "Estudando as Escrituras",
      "Na comunidade e adoração coletiva",
      "Através da natureza e contemplação",
    ],
  },
  {
    id: 7,
    question: "O que mais te toca em uma história bíblica?",
    options: [
      "A coragem dos heróis da fé",
      "A misericórdia e o perdão de Deus",
      "A sabedoria nos provérbios e ensinamentos",
      "Os milagres e a intervenção divina",
    ],
  },
  {
    id: 8,
    question: "Qual área da sua vida você mais deseja transformar?",
    options: [
      "Relacionamentos e família",
      "Carreira e propósito",
      "Saúde mental e emocional",
      "Crescimento espiritual profundo",
    ],
  },
  {
    id: 9,
    question: "Como você lida com momentos difíceis?",
    options: [
      "Oro e busco conforto em Deus",
      "Busco conselhos de pessoas sábias",
      "Enfrento com força e determinação",
      "Reflito e busco aprender com a situação",
    ],
  },
  {
    id: 10,
    question: "Qual versículo mais ressoa com você?",
    options: [
      '"Tudo posso naquele que me fortalece" - Filipenses 4:13',
      '"O Senhor é meu pastor, nada me faltará" - Salmo 23:1',
      '"Porque Deus amou o mundo de tal maneira..." - João 3:16',
      '"Confia no Senhor de todo o teu coração" - Provérbios 3:5',
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

export const ageRanges = [
  "18-24",
  "25-34",
  "35-44",
  "45-54",
  "55+",
];
