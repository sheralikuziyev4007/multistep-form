// hooks/useMultiStepForm.js — логика шагов, currentStep, next/back

import { useState, useRef } from "react";
import {
  STEP_VALIDATORS,
  validateStep3,
  INITIAL_FORM_DATA,
} from "../utils/validation";

export function useMultiStepForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Имитация проверки уникальности логина.
  // В реальном проекте здесь будет запрос к бэкенду; для демо —
  // список уже "занятых" логинов, хранящийся в памяти компонента.
  const takenLoginsRef = useRef(["admin", "user", "test", "guest"]);

  function updateFields(fields) {
    setFormData((prev) => ({ ...prev, ...fields }));
  }

  function validateCurrentStep() {
    const stepErrors = getStepErrors(currentStep);
    setErrors(stepErrors);
    return Object.keys(stepErrors).length === 0;
  }

  function goNext() {
    const isValid = validateCurrentStep();
    if (!isValid) return;

    setCompletedSteps((prev) =>
      prev.includes(currentStep) ? prev : [...prev, currentStep]
    );

    if (currentStep === 4) {
      takenLoginsRef.current = [
        ...takenLoginsRef.current,
        formData.login.trim().toLowerCase(),
      ];
      setIsSubmitted(true);
      return;
    }

    setErrors({});
    setCurrentStep((s) => Math.min(s + 1, 4));
  }

  function goBack() {
    setErrors({});
    setCurrentStep((s) => Math.max(s - 1, 1));
  }

  // Возвращает ошибки конкретного шага (для шага 3 — с проверкой занятых логинов)
  function getStepErrors(step) {
    if (step === 3) return validateStep3(formData, takenLoginsRef.current);
    const validator = STEP_VALIDATORS[step];
    return validator ? validator(formData) : {};
  }

  function goToStep(step) {
    const isClickable = step <= currentStep || completedSteps.includes(step - 1);
    if (!isClickable) return;

    // При переходе вперёд заново проверяем все шаги до целевого:
    // данные могли быть изменены после возврата назад.
    for (let s = 1; s < step; s++) {
      const stepErrors = getStepErrors(s);
      if (Object.keys(stepErrors).length > 0) {
        // шаг s и все последующие больше не считаются пройденными
        setCompletedSteps((prev) => prev.filter((x) => x < s));
        setCurrentStep(s);
        setErrors(stepErrors);
        return;
      }
    }

    setErrors({});
    setCurrentStep(step);
  }

  function reset() {
    setCurrentStep(1);
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    setCompletedSteps([]);
    setIsSubmitted(false);
  }

  return {
    currentStep,
    formData,
    errors,
    completedSteps,
    isSubmitted,
    updateFields,
    goNext,
    goBack,
    goToStep,
    reset,
  };
}
