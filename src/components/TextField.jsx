// components/TextField.jsx — текстовое поле с подписью и ошибкой

import { useId } from "react";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";

export function TextField({ label, error, ...props }) {
  const id = useId();
  const errorId = `${id}-error`;

  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <input
        id={id}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        {...props}
        className={
          "w-full h-10 px-3 rounded-lg border text-sm text-slate-800 outline-none transition-colors focus:ring-2 focus:ring-teal-100 " +
          (error
            ? "border-red-400 focus:border-red-500"
            : "border-slate-300 focus:border-teal-500")
        }
      />
      <FieldError id={errorId} message={error} />
    </div>
  );
}
