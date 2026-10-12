// components/StepConfirmation.jsx — Шаг 4: Подтверждение

import { useId } from "react";
import { SummaryRow } from "./SummaryRow";
import { FieldError } from "./FieldError";

export function StepConfirmation({ formData, errors, updateFields }) {
  const errorId = useId();

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-2">
        <SummaryRow
          label="Имя"
          value={`${formData.firstName} ${formData.lastName}`}
        />
        <SummaryRow label="Дата рождения" value={formData.birthDate} />
        <SummaryRow label="Email" value={formData.email} />
        <SummaryRow label="Телефон" value={formData.phone} />
        <SummaryRow label="Страна / город" value={formData.city} />
        <SummaryRow label="Логин" value={formData.login} />
        <SummaryRow label="Пароль" value="••••••••" />
      </div>

      <div>
        <label className="flex items-start gap-2.5 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.agreeToTerms}
            aria-invalid={!!errors.agreeToTerms}
            aria-describedby={errors.agreeToTerms ? errorId : undefined}
            onChange={(e) => updateFields({ agreeToTerms: e.target.checked })}
            className="mt-0.5 w-4 h-4 rounded border-slate-300 text-teal-600 focus:ring-teal-500"
          />
          <span className="text-sm text-slate-600">
            Я согласен с условиями использования и политикой обработки данных
          </span>
        </label>
        <FieldError id={errorId} message={errors.agreeToTerms} />
      </div>
    </div>
  );
}
