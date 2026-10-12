// components/Stepper.jsx — прогресс-бар

import { STEP_TITLES } from "../utils/validation";

export function Stepper({ currentStep, completedSteps, onStepClick }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {STEP_TITLES.map((title, index) => {
          const step = index + 1;
          const isCompleted = completedSteps.includes(step);
          const isCurrent = step === currentStep;
          const isClickable = isCompleted || step < currentStep;

          return (
            <div key={step} className="flex-1 flex items-center last:flex-none">
              <button
                type="button"
                onClick={() => isClickable && onStepClick(step)}
                disabled={!isClickable}
                className={
                  "flex flex-col items-center gap-1.5 " +
                  (isClickable ? "cursor-pointer" : "cursor-default")
                }
              >
                <span
                  className={
                    "w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors " +
                    (isCompleted
                      ? "bg-teal-600 border-teal-600 text-white"
                      : isCurrent
                      ? "border-teal-600 text-teal-700 bg-teal-50"
                      : "border-slate-300 text-slate-400 bg-white")
                  }
                >
                  {isCompleted ? "✓" : step}
                </span>
                <span
                  className={
                    "text-xs font-medium hidden sm:block " +
                    (isCurrent
                      ? "text-teal-700"
                      : isCompleted
                      ? "text-slate-700"
                      : "text-slate-400")
                  }
                >
                  {title}
                </span>
              </button>
              {step !== STEP_TITLES.length && (
                <div
                  className={
                    "flex-1 h-0.5 mx-2 transition-colors " +
                    (isCompleted ? "bg-teal-600" : "bg-slate-200")
                  }
                />
              )}
            </div>
          );
        })}
      </div>
      <p className="text-sm text-slate-500 text-center sm:hidden">
        Шаг {currentStep} из {STEP_TITLES.length}: {STEP_TITLES[currentStep - 1]}
      </p>
    </div>
  );
}
