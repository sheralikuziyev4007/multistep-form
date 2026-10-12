// components/StepPersonalInfo.jsx — Шаг 1: Личные данные

import { TextField } from "./TextField";

export function StepPersonalInfo({ formData, errors, updateFields }) {
  return (
    <div className="space-y-4">
      <TextField
        label="Имя"
        value={formData.firstName}
        error={errors.firstName}
        placeholder="Алишер"
        onChange={(e) => updateFields({ firstName: e.target.value })}
      />
      <TextField
        label="Фамилия"
        value={formData.lastName}
        error={errors.lastName}
        placeholder="Каримов"
        onChange={(e) => updateFields({ lastName: e.target.value })}
      />
      <TextField
        label="Дата рождения"
        type="date"
        value={formData.birthDate}
        error={errors.birthDate}
        onChange={(e) => updateFields({ birthDate: e.target.value })}
      />
    </div>
  );
}
