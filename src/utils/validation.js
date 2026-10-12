// utils/validation.js — валидация по шагам

export function calculateAge(birthDateStr) {
  if (!birthDateStr) return 0;
  const birthDate = new Date(birthDateStr);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function validateStep1(data) {
  const errors = {};
  if (!data.firstName || data.firstName.trim().length < 2) {
    errors.firstName = "Минимум 2 символа";
  }
  if (!data.lastName || data.lastName.trim().length < 2) {
    errors.lastName = "Минимум 2 символа";
  }
  if (!data.birthDate) {
    errors.birthDate = "Укажите дату рождения";
  } else if (calculateAge(data.birthDate) < 18) {
    errors.birthDate = "Регистрация доступна только с 18 лет";
  }
  return errors;
}

export function validateStep2(data) {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^\+?[0-9][0-9\s\-()]{8,}$/;

  if (!data.email) {
    errors.email = "Укажите email";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Неверный формат email";
  }

  if (!data.phone) {
    errors.phone = "Укажите номер телефона";
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone = "Неверный формат телефона";
  }

  if (!data.city || data.city.trim().length < 2) {
    errors.city = "Укажите страну или город";
  }

  return errors;
}

export function getPasswordStrength(password) {
  if (!password) return { label: "", score: 0 };
  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 2) return { label: "Слабый", score: 1 };
  if (score <= 4) return { label: "Средний", score: 2 };
  return { label: "Сильный", score: 3 };
}

export function validateStep3(data, takenLogins) {
  const errors = {};

  if (!data.login || data.login.trim().length < 3) {
    errors.login = "Минимум 3 символа";
  } else if (takenLogins.includes(data.login.trim().toLowerCase())) {
    errors.login = "Этот логин уже занят";
  }

  const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
  if (!data.password) {
    errors.password = "Укажите пароль";
  } else if (!passwordRegex.test(data.password)) {
    errors.password = "Минимум 8 символов, 1 цифра и 1 заглавная буква";
  }

  if (!data.confirmPassword) {
    errors.confirmPassword = "Подтвердите пароль";
  } else if (data.confirmPassword !== data.password) {
    errors.confirmPassword = "Пароли не совпадают";
  }

  return errors;
}

export function validateStep4(data) {
  const errors = {};
  if (!data.agreeToTerms) {
    errors.agreeToTerms = "Необходимо согласие с условиями использования";
  }
  return errors;
}

export const STEP_VALIDATORS = {
  1: validateStep1,
  2: validateStep2,
  4: validateStep4,
};

export const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  birthDate: "",
  email: "",
  phone: "",
  city: "",
  login: "",
  password: "",
  confirmPassword: "",
  agreeToTerms: false,
};

export const STEP_TITLES = ["Личные данные", "Контакты", "Аккаунт", "Подтверждение"];
