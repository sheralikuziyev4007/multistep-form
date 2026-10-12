// App.jsx — сборка формы

import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { Stepper } from "./components/Stepper";
import { StepPersonalInfo } from "./components/StepPersonalInfo";
import { StepContactInfo } from "./components/StepContactInfo";
import { StepAccountInfo } from "./components/StepAccountInfo";
import { StepConfirmation } from "./components/StepConfirmation";
import { SuccessScreen } from "./components/SuccessScreen";
import { NavigationButtons } from "./components/NavigationButtons";

const STEP_COMPONENTS = {
  1: StepPersonalInfo,
  2: StepContactInfo,
  3: StepAccountInfo,
  4: StepConfirmation,
};

export default function App() {
  const {
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
  } = useMultiStepForm();

  const CurrentStepComponent = STEP_COMPONENTS[currentStep];

  function handleSubmit(e) {
    e.preventDefault();
    goNext();
  }

  return (
    <div className="min-h-screen w-full bg-slate-50 flex items-start justify-center py-10 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
        <div className="mb-6">
          <h1 className="text-xl font-semibold text-slate-800">Регистрация</h1>
          <p className="text-sm text-slate-500">
            Заполните форму в несколько шагов
          </p>
        </div>

        {!isSubmitted && (
          <Stepper
            currentStep={currentStep}
            completedSteps={completedSteps}
            onStepClick={goToStep}
          />
        )}

        {isSubmitted ? (
          <SuccessScreen formData={formData} onReset={reset} />
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <CurrentStepComponent
              formData={formData}
              errors={errors}
              updateFields={updateFields}
            />
            <NavigationButtons
              currentStep={currentStep}
              totalSteps={4}
              onBack={goBack}
            />
          </form>
        )}
      </div>
    </div>
  );
}
