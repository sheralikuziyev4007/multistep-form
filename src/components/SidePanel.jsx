// components/SidePanel.jsx — левая градиентная панель (только на десктопе)

import { STEP_TITLES } from "../utils/validation";
import { CheckIcon } from "./icons";

const DESCRIPTIONS = [
  "Расскажите немного о себе",
  "Как с вами связаться",
  "Придумайте логин и пароль",
  "Проверьте данные и подтвердите",
];

export function SidePanel({ currentStep, isSubmitted }) {
  return (
    <aside className="hidden md:flex flex-col justify-between relative overflow-hidden p-8 text-white bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-800">
      <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
      <div className="absolute -bottom-20 -left-10 w-64 h-64 rounded-full bg-emerald-300/20 blur-3xl" aria-hidden="true" />

      <div className="relative">
        <h2 className="text-2xl font-semibold leading-snug">
          Создайте аккаунт
          <br />
          за 4 простых шага
        </h2>
        <p className="mt-2 text-sm text-teal-100">Это займёт меньше минуты</p>
      </div>

      <ol className="relative space-y-4 my-8">
        {STEP_TITLES.map((title, i) => {
          const step = i + 1;
          const done = isSubmitted || step < currentStep;
          const active = !isSubmitted && step === currentStep;
          return (
            <li key={title} className={"flex items-center gap-3 transition-opacity " + (active || done ? "opacity-100" : "opacity-50")}>
              <span className={"w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-semibold transition-colors " + (done ? "bg-white text-teal-700 border-white" : active ? "border-white bg-white/20" : "border-white/50")}>
                {done ? <CheckIcon width={16} height={16} /> : step}
              </span>
              <span>
                <span className="block text-sm font-medium">{title}</span>
                <span className="block text-xs text-teal-100">{DESCRIPTIONS[i]}</span>
              </span>
            </li>
          );
        })}
      </ol>

      <p className="relative text-xs text-teal-100">Ваши данные защищены и не передаются третьим лицам</p>
    </aside>
  );
}
