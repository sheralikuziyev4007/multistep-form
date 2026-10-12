# Многошаговая форма регистрации
**Демо:** https://multistep-form-ivory-delta.vercel.app
Многошаговая форма регистрации на React + Vite + Tailwind CSS: 4 шага, stepper,
пошаговая валидация, индикатор силы пароля, экран подтверждения.

## Запуск

```bash
npm install
npm run dev      # http://127.0.0.1:5173
npm run build    # production-сборка в dist/
npm run preview  # предпросмотр сборки
```

## Структура

```
src/
├── components/
│   ├── Stepper.jsx
│   ├── StepPersonalInfo.jsx
│   ├── StepContactInfo.jsx
│   ├── StepAccountInfo.jsx
│   ├── StepConfirmation.jsx
│   ├── PasswordStrengthIndicator.jsx
│   ├── SuccessScreen.jsx
│   ├── NavigationButtons.jsx
│   ├── TextField.jsx
│   ├── PasswordField.jsx
│   ├── FieldLabel.jsx
│   ├── FieldError.jsx
│   └── SummaryRow.jsx
├── hooks/
│   └── useMultiStepForm.js   // currentStep, formData, errors, next/back/reset
├── utils/
│   └── validation.js         // валидация по шагам + расчёт возраста и силы пароля
└── App.jsx
```

Каждый компонент вынесен в отдельный файл.

## Возможности

- Все 4 шага с валидацией: имя/фамилия, дата рождения (18+), email, телефон,
  логин + уникальность, пароль по правилам, подтверждение пароля
- Данные не теряются при переходе назад/вперёд
- Stepper с переходом по клику на пройденный шаг; при переходе вперёд
  все предыдущие шаги проверяются заново
- Финальный экран с резюме данных (пароль скрыт)
- Чекбокс согласия обязателен для отправки
- Экран «Регистрация завершена» + кнопка «Начать заново»
- Отправка шага по клавише Enter (поля обёрнуты в `<form>`)
- Доступность: сообщения об ошибках связаны с полями через `aria-describedby`
  и `aria-invalid`

## Примечание по уникальности логина

Проверка уникальности имитируется: `useRef` хранит список «занятых» логинов
(`admin`, `user`, `test`, `guest`). Для реального проекта эту проверку нужно
заменить запросом к бэкенду.

## Не реализовано

Анимация переходов, сохранение прогресса в URL, TypeScript, автосохранение
черновика.

## Лицензия

[MIT](./LICENSE)
