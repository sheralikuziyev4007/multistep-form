// components/SuccessScreen.jsx — экран после успешной отправки

import { SummaryRow } from "./SummaryRow";

export function SuccessScreen({ formData, onReset }) {
  return (
    <div className="text-center py-6">
      <div className="w-14 h-14 rounded-full bg-teal-50 border-2 border-teal-600 text-teal-600 flex items-center justify-center text-2xl mx-auto mb-4">
        ✓
      </div>
      <h2 className="text-lg font-semibold text-slate-800 mb-1">
        Регистрация завершена
      </h2>
      <p className="text-sm text-slate-500 mb-6">
        Добро пожаловать, {formData.firstName}! Аккаунт «{formData.login}» создан.
      </p>

      <div className="rounded-lg bg-slate-50 border border-slate-200 px-4 py-2 text-left mb-6">
        <SummaryRow
          label="Имя"
          value={`${formData.firstName} ${formData.lastName}`}
        />
        <SummaryRow label="Email" value={formData.email} />
        <SummaryRow label="Логин" value={formData.login} />
      </div>

      <button
        type="button"
        onClick={onReset}
        className="h-10 px-5 rounded-lg bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white text-sm font-medium transition-all"
      >
        Готово
      </button>
    </div>
  );
}
