// components/Stepper.jsx — прогресс по шагам с иконками и анимированной линией

import { STEP_TITLES } from "../utils/validation";
import { CheckIcon, UserIcon, MailIcon, LockIcon, ShieldIcon } from "./icons";

const STEP_ICONS = [UserIcon, MailIcon, LockIcon, ShieldIcon];

export function Stepper({ currentStep, completedSteps, onStepClick }) {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-2">
        {STEP_TITLES.map((title, index) => {
          const step = index + 1;
          const isCompleted = completedSteps.includes(step);
          const isCurrent = step === currentStep;
          const isClickable = isCompleted || step < currentStep;
          const Icon = STEP_ICONS[index];

          return (
            <div key={step} className="flex-1 flex items-center last:flex-none">
              <button
                type="button"
                onClick={() => isClickable && onStepClick(step)}
                disabled={!isClickable}
                aria-current={isCurrent ? "step" : undefined}
                className={"flex flex-col items-center gap-1.5 " + (isClickable ? "cursor-pointer" : "cursor-default")}
              >
                <span
                  className={
                    "w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300 " +
                    (isCompleted
                      ? "bg-teal-600 border-teal-600 text-white"
                      : isCurrent
                      ? "border-teal-600 text-teal-700 bg-teal-50 ring-4 ring-teal-100 dark:ring-teal-900/50"
                      : "border-slate-300 text-slate-400 bg-white")
                  }
                >
                  {isCompleted ? <CheckIcon /> : <Icon />}
                </span>
                <span
                  className={
                    "text-xs font-medium hidden sm:block " +
                    (isCurrent ? "text-teal-700" : isCompleted ? "text-slate-700" : "text-slate-400")
                  }
                >
                  {title}
                </span>
              </button>
              {step !== STEP_TITLES.length && (
                <div className="flex-1 h-0.5 mx-2 mb-0 sm:mb-5 bg-slate-200 overflow-hidden rounded-full">
                  <div
                    className={"h-full w-full bg-teal-600 origin-left transition-transform duration-500 " + (isCompleted ? "scale-x-100" : "scale-x-0")}
                  />
                </div>
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
