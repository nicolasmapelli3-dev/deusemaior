import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import GenderStep from "@/components/quiz/GenderStep";
import AgeStep from "@/components/quiz/AgeStep";
import ReadyStep from "@/components/quiz/ReadyStep";
import QuestionStep from "@/components/quiz/QuestionStep";
import MidwayStep from "@/components/quiz/MidwayStep";
import Midway2Step from "@/components/quiz/Midway2Step";
import Midway3Step from "@/components/quiz/Midway3Step";
import ProgressCircleStep from "@/components/quiz/ProgressCircleStep";
import ProfileSummaryStep from "@/components/quiz/ProfileSummaryStep";
import YesNoStep from "@/components/quiz/YesNoStep";
import EmailStep from "@/components/quiz/EmailStep";
import PlanLoadingStep from "@/components/quiz/PlanLoadingStep";
import PlanReadyStep from "@/components/quiz/PlanReadyStep";
import ResultStep from "@/components/quiz/ResultStep";
import { quizQuestionsPart1, quizQuestionsPart2, quizQuestionsPart3, quizQuestionsPart4, allQuizQuestions, archetypes, type ArchetypeResult } from "@/data/quizData";

type Step = "gender" | "age" | "ready" | "question-part1" | "midway" | "question-part2" | "midway2" | "question-part3" | "midway3" | "question-part4" | "progress-circle" | "profile-summary" | "yesno1" | "yesno2" | "email" | "plan-loading" | "plan-ready" | "result";

const TOTAL_STEPS = allQuizQuestions.length + 1;

const Index = () => {
  const [step, setStep] = useState<Step>("gender");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<ArchetypeResult | null>(null);

  const calculateResult = useCallback((allAnswers: string[]): ArchetypeResult => {
    const scores = { leader: 0, servant: 0, wise: 0, worshipper: 0 };
    allAnswers.forEach((answer, i) => {
      const q = allQuizQuestions[i];
      if (!q) return;
      const idx = q.options.indexOf(answer);
      if (idx === 0) scores.wise += 1;
      else if (idx === 1) scores.servant += 1;
      else if (idx === 2) scores.leader += 1;
      else scores.worshipper += 1;
    });
    const maxKey = (Object.keys(scores) as Array<keyof typeof scores>).reduce((a, b) =>
      scores[a] > scores[b] ? a : b
    );
    return archetypes[maxKey];
  }, []);

  const handleGender = (g: string) => { setGender(g); setStep("age"); };
  const handleAge = (a: string) => { setAge(a); setStep("ready"); };
  const handleReady = () => { setStep("question-part1"); setQuestionIndex(0); };

  const handleAnswerPart1 = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (questionIndex < quizQuestionsPart1.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStep("midway");
    }
  };

  const handleMidway = () => { setStep("question-part2"); setQuestionIndex(0); };

  const handleAnswerPart2 = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (questionIndex < quizQuestionsPart2.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStep("midway2");
    }
  };

  const handleMidway2 = () => { setStep("question-part3"); setQuestionIndex(0); };

  const handleAnswerPart3 = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (questionIndex < quizQuestionsPart3.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStep("midway3");
    }
  };

  const handleMidway3 = () => { setStep("question-part4"); setQuestionIndex(0); };

  const handleAnswerPart4 = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    if (questionIndex < quizQuestionsPart4.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      setStep("progress-circle");
    }
  };

  const handleProgressCircle = () => { setStep("profile-summary"); };
  const handleProfileSummary = () => { setStep("yesno1"); };
  const handleYesNo1 = () => { setStep("yesno2"); };
  const handleYesNo2 = () => { setStep("email"); };
  const handleEmail = () => { setStep("plan-loading"); };

  const handlePlanLoadingComplete = useCallback(() => {
    setStep("plan-ready");
  }, []);

  const handlePlanReady = useCallback(() => {
    setResult(calculateResult(answers));
    setStep("result");
  }, [answers, calculateResult]);

  const handleBack = () => {
    if (step === "age") {
      setStep("gender");
    } else if (step === "ready") {
      setStep("age");
    } else if (step === "question-part1") {
      if (questionIndex > 0) { setQuestionIndex(questionIndex - 1); setAnswers(answers.slice(0, -1)); }
      else { setStep("ready"); }
    } else if (step === "midway") {
      setStep("question-part1"); setQuestionIndex(quizQuestionsPart1.length - 1); setAnswers(answers.slice(0, -1));
    } else if (step === "question-part2") {
      if (questionIndex > 0) { setQuestionIndex(questionIndex - 1); setAnswers(answers.slice(0, -1)); }
      else { setStep("midway"); }
    } else if (step === "midway2") {
      setStep("question-part2"); setQuestionIndex(quizQuestionsPart2.length - 1); setAnswers(answers.slice(0, -1));
    } else if (step === "question-part3") {
      if (questionIndex > 0) { setQuestionIndex(questionIndex - 1); setAnswers(answers.slice(0, -1)); }
      else { setStep("midway2"); }
    } else if (step === "midway3") {
      setStep("question-part3"); setQuestionIndex(quizQuestionsPart3.length - 1); setAnswers(answers.slice(0, -1));
    } else if (step === "question-part4") {
      if (questionIndex > 0) { setQuestionIndex(questionIndex - 1); setAnswers(answers.slice(0, -1)); }
      else { setStep("midway3"); }
    } else if (step === "progress-circle") {
      setStep("question-part4"); setQuestionIndex(quizQuestionsPart4.length - 1); setAnswers(answers.slice(0, -1));
    } else if (step === "profile-summary") {
      setStep("progress-circle");
    } else if (step === "yesno1") {
      setStep("profile-summary");
    } else if (step === "yesno2") {
      setStep("yesno1");
    } else if (step === "email") {
      setStep("yesno2");
    } else if (step === "plan-loading") {
      setStep("email");
    } else if (step === "plan-ready") {
      setStep("plan-loading");
    }
  };

  const getCurrentProgress = () => {
    if (step === "question-part1") return questionIndex + 1;
    if (step === "question-part2") return quizQuestionsPart1.length + questionIndex + 1;
    if (step === "question-part3") return quizQuestionsPart1.length + quizQuestionsPart2.length + questionIndex + 1;
    if (step === "question-part4") return quizQuestionsPart1.length + quizQuestionsPart2.length + quizQuestionsPart3.length + questionIndex + 1;
    if (step === "yesno1" || step === "yesno2" || step === "email") return allQuizQuestions.length + 1;
    return 0;
  };

  return (
    <AnimatePresence mode="wait">
      {step === "gender" && <GenderStep key="gender" onSelect={handleGender} />}
      {step === "age" && <AgeStep key="age" gender={gender} onSelect={handleAge} onBack={handleBack} />}
      {step === "ready" && <ReadyStep key="ready" gender={gender} onContinue={handleReady} />}
      {step === "question-part1" && (
        <QuestionStep key={`q1-${questionIndex}`} question={quizQuestionsPart1[questionIndex]} questionIndex={getCurrentProgress()} totalSteps={TOTAL_STEPS} onSelect={handleAnswerPart1} onBack={handleBack} />
      )}
      {step === "midway" && <MidwayStep key="midway" onContinue={handleMidway} onBack={handleBack} />}
      {step === "question-part2" && (
        <QuestionStep key={`q2-${questionIndex}`} question={quizQuestionsPart2[questionIndex]} questionIndex={getCurrentProgress()} totalSteps={TOTAL_STEPS} onSelect={handleAnswerPart2} onBack={handleBack} />
      )}
      {step === "midway2" && <Midway2Step key="midway2" onContinue={handleMidway2} onBack={handleBack} />}
      {step === "question-part3" && (
        <QuestionStep key={`q3-${questionIndex}`} question={quizQuestionsPart3[questionIndex]} questionIndex={getCurrentProgress()} totalSteps={TOTAL_STEPS} onSelect={handleAnswerPart3} onBack={handleBack} />
      )}
      {step === "midway3" && <Midway3Step key="midway3" onContinue={handleMidway3} onBack={handleBack} />}
      {step === "question-part4" && (
        <QuestionStep key={`q4-${questionIndex}`} question={quizQuestionsPart4[questionIndex]} questionIndex={getCurrentProgress()} totalSteps={TOTAL_STEPS} onSelect={handleAnswerPart4} onBack={handleBack} />
      )}
      {step === "progress-circle" && <ProgressCircleStep key="progress-circle" onComplete={handleProgressCircle} />}
      {step === "profile-summary" && <ProfileSummaryStep key="profile-summary" gender={gender} age={age} onContinue={handleProfileSummary} onBack={handleBack} />}
      {step === "yesno1" && (
        <YesNoStep key="yesno1" question="Você gostaria de fortalecer sua vida espiritual?" current={getCurrentProgress()} total={TOTAL_STEPS} onSelect={handleYesNo1} onBack={handleBack} />
      )}
      {step === "yesno2" && (
        <YesNoStep key="yesno2" question="Você gostaria de descobrir como viver sua identidade espiritual todos os dias?" current={getCurrentProgress()} total={TOTAL_STEPS} onSelect={handleYesNo2} onBack={handleBack} />
      )}
      {step === "email" && (
        <EmailStep key="email" totalSteps={TOTAL_STEPS} onSubmit={handleEmail} onBack={handleBack} />
      )}
      {step === "plan-loading" && <PlanLoadingStep key="plan-loading" onComplete={handlePlanLoadingComplete} onBack={handleBack} />}
      {step === "plan-ready" && <PlanReadyStep key="plan-ready" onContinue={handlePlanReady} onBack={handleBack} />}
      {step === "result" && result && <ResultStep key="result" result={result} gender={gender} age={age} />}
    </AnimatePresence>
  );
};

export default Index;
