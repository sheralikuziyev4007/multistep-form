// components/PasswordStrengthIndicator.jsx

import { getPasswordStrength } from "../utils/validation";

export function PasswordStrengthIndicator({ password }) {
  const { label, score } = getPasswordStrength(password);
  if (!password) return null;

  const colors = {
    1: "bg-red-500",
    2: "bg-amber-500",
    3: "bg-teal-600",
  };
  const textColors = {
    1: "text-red-600",
    2: "text-amber-600",
    3: "text-teal-700",
  };

  return (
    <div className="mt-2">
      <div className="flex gap-1 mb-1">
        {[1, 2, 3].map((bar) => (
          <div
            key={bar}
            className={
              "h-1.5 flex-1 rounded-full transition-colors " +
              (bar <= score ? colors[score] : "bg-slate-200")
            }
          />
        ))}
      </div>
      <p className={"text-xs font-medium " + textColors[score]}>
        Надёжность пароля: {label}
      </p>
    </div>
  );
}
