// utils/text.js — вспомогательные функции для текста

// Делает первую букву каждого слова заглавной: «xasan karimov» → «Xasan Karimov».
// Разделители слов: пробел и дефис. Апострофы (o‘g‘li, G‘ayrat) слова не разделяют.
// Остальные буквы не трогаем, чтобы не ломать имена вроде «McDonald».
export function capitalizeWords(value) {
  return value.replace(/(^|[\s-])(\p{L})/gu, (_, sep, ch) => sep + ch.toLocaleUpperCase());
}
