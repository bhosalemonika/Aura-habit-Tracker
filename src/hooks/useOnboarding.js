import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { normalizeEmail, readUser } from "../utils/userSession";

const questions = [
  {
    title: "What are your goals?",
    key: "goal",
    options: ["Fitness", "Study", "Productivity", "Health", "Personal Growth"]
  },
  {
    title: "How many habits to track?",
    key: "habitCount",
    options: ["1-3", "4-6", "7+"]
  }
];

export function useOnboarding() {
  const navigate = useNavigate();
  const onboardingKey = `auraOnboarding:${normalizeEmail(readUser().email)}`;
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(
    JSON.parse(localStorage.getItem(onboardingKey)) || {}
  );

  const saveAnswer = (key, value) => {
    const updatedAnswers = { ...answers, [key]: value };
    setAnswers(updatedAnswers);
    localStorage.setItem(onboardingKey, JSON.stringify(updatedAnswers));
  };
  const next = () => step === 2 ? navigate("/dashboard") : setStep(step + 1);
  const previous = () => step > 0 && setStep(step - 1);

  return {
    step,
    answers,
    next,
    previous,
    saveAnswer,
    isReminder: step === 2,
    question: questions[step]
  };
}