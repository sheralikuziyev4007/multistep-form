// components/NavigationButtons.jsx — кнопки "Назад" / "Далее" / "Зарегистрироваться"
// Кнопка "Далее" имеет type="submit": форма отправляется и по клику, и по Enter.

export function NavigationButtons({ currentStep, totalSteps, onBack }) {
  return (
    <div className="flex justify-between mt-8">
      <button
        type="button"
        onClick={onBack}
        disabled={currentStep === 1}
        className={
          "h-10 px-5 rounded-lg text-sm font-medium border transition-colors " +
          (currentStep === 1
            ? "border-slate-200 text-slate-300 cursor-not-allowed"
            : "border-slate-300 text-slate-700 hover:bg-slate-50")
        }
      >
        Назад
      </button>
      <button
        type="submit"
        className="h-10 px-6 rounded-lg bg-teal-600 hover:bg-teal-700 active:scale-[0.98] text-white text-sm font-medium transition-all"
      >
        {currentStep === totalSteps ? "Зарегистрироваться" : "Далее"}
      </button>
    </div>
  );
}
