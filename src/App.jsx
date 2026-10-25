// App.jsx — сборка формы: двухколоночный layout, анимации, тёмная тема

import { useEffect, useRef } from "react";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { Stepper } from "./components/Stepper";
import { StepPersonalInfo } from "./components/StepPersonalInfo";
import { StepContactInfo } from "./components/StepContactInfo";
import { StepAccountInfo } from "./components/StepAccountInfo";
import { StepConfirmation } from "./components/StepConfirmation";
import { SuccessScreen } from "./components/SuccessScreen";
import { NavigationButtons } from "./components/NavigationButtons";
import { AnimatedStep } from "./components/AnimatedStep";
import { BackgroundDecor } from "./components/BackgroundDecor";
import { ProgressBar } from "./components/ProgressBar";
import { SidePanel } from "./components/SidePanel";
import { ThemeToggle } from "./components/ThemeToggle";

const STEP_COMPONENTS = {
  1: StepPersonalInfo,
  2: StepContactInfo,
  3: StepAccountInfo,
  4: StepConfirmation,
};

export default function App() {
  const {
    currentStep, formData, errors, completedSteps, isSubmitted,
    updateFields, goNext, goBack, goToStep, reset,
  } = useMultiStepForm();

  // Направление перехода нужно для анимации (вперёд / назад)
  const prevStep = useRef(currentStep);
  const direction = currentStep < prevStep.current ? "back" : "next";
  useEffect(() => {
    prevStep.current = currentStep;
  }, [currentStep]);

  const CurrentStepComponent = STEP_COMPONENTS[currentStep];
  const progress = isSubmitted ? 100 : (currentStep / 4) * 100;

  function handleSubmit(e) {
    e.preventDefault();
    goNext();
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-10 px-4 bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-slate-950 dark:via-slate-900 dark:to-teal-950 transition-colors">
      <BackgroundDecor />

      <div className="relative w-full max-w-4xl rounded-3xl overflow-hidden border border-white/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl shadow-teal-900/10">
        <ProgressBar value={progress} />

        <div className="grid md:grid-cols-[5fr_7fr]">
          <SidePanel currentStep={currentStep} isSubmitted={isSubmitted} />

          <div className="p-6 sm:p-10">
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <h1 className="text-xl font-semibold text-slate-800">Регистрация</h1>
                <p className="text-sm text-slate-500">Заполните форму в несколько шагов</p>
              </div>
              <ThemeToggle />
            </div>

            {!isSubmitted && (
              <Stepper currentStep={currentStep} completedSteps={completedSteps} onStepClick={goToStep} />
            )}

            {isSubmitted ? (
              <SuccessScreen formData={formData} onReset={reset} />
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <AnimatedStep stepKey={currentStep} direction={direction}>
                  <CurrentStepComponent formData={formData} errors={errors} updateFields={updateFields} />
                </AnimatedStep>
                <NavigationButtons currentStep={currentStep} totalSteps={4} onBack={goBack} />
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
