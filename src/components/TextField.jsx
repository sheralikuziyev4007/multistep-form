// components/TextField.jsx — поле с иконкой, подписью, ошибкой и галочкой «верно»
// Иконка берётся из пропа `icon` или определяется по type (email / tel / date).

import { useId, useState } from "react";
import { FieldLabel } from "./FieldLabel";
import { FieldError } from "./FieldError";
import { CheckIcon, MailIcon, PhoneIcon, CalendarIcon } from "./icons";

const TYPE_ICONS = { email: MailIcon, tel: PhoneIcon, date: CalendarIcon };

export function TextField({ label, error, icon, ...props }) {
  const id = useId();
  const errorId = `${id}-error`;
  const [touched, setTouched] = useState(false);

  const Icon = icon || TYPE_ICONS[props.type];
  const isValid = touched && !error && String(props.value ?? "").trim() !== "";

  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <div className="relative">
        {Icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <Icon width={16} height={16} />
          </span>
        )}
        <input
          id={id}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          {...props}
          onBlur={(e) => {
            setTouched(true);
            props.onBlur?.(e);
          }}
          className={
            "w-full h-10 rounded-lg border text-sm outline-none transition-all focus:ring-2 focus:ring-teal-100 " +
            (Icon ? "pl-9 " : "pl-3 ") +
            (isValid ? "pr-9 " : "pr-3 ") +
            (error ? "border-red-400 focus:border-red-500" : "border-slate-300 focus:border-teal-500")
          }
        />
        {isValid && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-emerald-500 animate-slide-next">
            <CheckIcon width={16} height={16} />
          </span>
        )}
      </div>
      <FieldError id={errorId} message={error} />
    </div>
  );
}
