// utils/date.js — работа с датой в формате дд/мм/гггг

// Маска ввода: оставляет только цифры и расставляет «/» (12345678 → 12/34/5678)
export function formatDateInput(value) {
  const d = value.replace(/\D/g, "").slice(0, 8);
  if (d.length <= 2) return d;
  if (d.length <= 4) return `${d.slice(0, 2)}/${d.slice(2)}`;
  return `${d.slice(0, 2)}/${d.slice(2, 4)}/${d.slice(4)}`;
}

// Разбор «дд/мм/гггг» → Date. Возвращает null, если дата несуществующая (например, 31/02/2000)
export function parseDate(str) {
  const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(str || "");
  if (!m) return null;
  const [day, month, year] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const date = new Date(year, month - 1, day);
  const isReal =
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;
  return isReal ? date : null;
}
