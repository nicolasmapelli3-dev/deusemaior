import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import GenderStep from "@/components/quiz/GenderStep";
import AgeStep from "@/components/quiz/AgeStep";
import QuestionStep from "@/components/quiz/QuestionStep";
import EmailStep from "@/components/quiz/EmailStep";
import LoadingStep from "@/components/quiz/LoadingStep";
import ResultStep from "@/components/quiz/ResultStep";
import { quizQuestions, archetypes, type ArchetypeResult } from "@/data/quizData";

type Step = "gender" | "age" | "question" | "email" | "loading" | "result";

const TOTAL_STEPS = 2 + quizQuestions.length; // age + questions + email

const Index = () => {
  const [step, setStep] = useState<Step>("gender");
  const [gender, setGender] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<ArchetypeResult | null>(null);

  const calculateResult = useCallback((allAnswers: string[]): ArchetypeResult => {
    // Simple scoring based on answer patterns
    const scores = { leader: 0, servant: 0, wise: 0, worshipper: 0 };

    allAnswers.forEach((answer, i) => {
      const q = quizQuestions[i];
      if (!q) return;
      const idx = q.options.indexOf(answer);
      if (idx === 0) scores.leader += 1;
      else if (idx === 1) scores.wise += 1;
      else if (idx === 2) scores.servant += 1;
      else scores.worshipper += 1;
    });

    const maxKey = (Object.keys(scores) as Array<keyof typeof scores>).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );

    return archetypes[maxKey];
  }, []);

  const handleGender = (g: string) => {
    setGender(g);
    setStep("age");
  };

  const handleAge = () => {
    setStep("question");
    setQuestionIndex(0);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (questionIndex < quizQuestions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStep("email");
    }
  };

  const handleEmail = () => {
    setStep("loading");
  };

  const handleLoadingComplete = useCallback(() => {
    setResult(calculateResult(answers));
    setStep("result");
  }, [answers, calculateResult]);

  const handleBack = () => {
    if (step === "age") {
      setStep("gender");
    } else if (step === "question") {
      if (questionIndex > 0) {
        setQuestionIndex(questionIndex - 1);
        setAnswers(answers.slice(0, -1));
      } else {
        setStep("age");
      }
    } else if (step === "email") {
      setStep("question");
      setQuestionIndex(quizQuestions.length - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  return (
    <AnimatePresence mode="wait">
      {step === "gender" && <GenderStep key="gender" onSelect={handleGender} />}
      {step === "age" && <AgeStep key="age" onSelect={handleAge} onBack={handleBack} />}
      {step === "question" && (
        <QuestionStep
          key={`q-${questionIndex}`}
          question={quizQuestions[questionIndex]}
          questionIndex={questionIndex}
          totalSteps={TOTAL_STEPS}
          onSelect={handleAnswer}
          onBack={handleBack}
        />
      )}
      {step === "email" && (
        <EmailStep
          key="email"
          totalSteps={TOTAL_STEPS}
          onSubmit={handleEmail}
          onBack={handleBack}
        />
      )}
      {step === "loading" && <LoadingStep key="loading" onComplete={handleLoadingComplete} />}
      {step === "result" && result && <ResultStep key="result" result={result} gender={gender} />}
    </AnimatePresence>
  );
};

export default Index;
