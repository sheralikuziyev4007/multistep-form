// components/StepPersonalInfo.jsx — Шаг 1: Личные данные

import { TextField } from "./TextField";
import { DateField } from "./DateField";
import { capitalizeWords } from "../utils/text";

export function StepPersonalInfo({ formData, errors, updateFields }) {
  return (
    <div className="space-y-4">
      <TextField
        label="Имя"
        value={formData.firstName}
        error={errors.firstName}
        placeholder="Алишер"
        autoComplete="given-name"
        autoCapitalize="words"
        autoCorrect="off"
        spellCheck={false}
        onChange={(e) => updateFields({ firstName: capitalizeWords(e.target.value) })}
      />
      <TextField
        label="Фамилия"
        value={formData.lastName}
        error={errors.lastName}
        placeholder="Каримов"
        autoComplete="family-name"
        autoCapitalize="words"
        autoCorrect="off"
        spellCheck={false}
        onChange={(e) => updateFields({ lastName: capitalizeWords(e.target.value) })}
      />
      <DateField
        label="Дата рождения"
        value={formData.birthDate}
        error={errors.birthDate}
        onChange={(birthDate) => updateFields({ birthDate })}
      />
    </div>
  );
}
