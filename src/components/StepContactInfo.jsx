// components/StepContactInfo.jsx — Шаг 2: Контактная информация

import { TextField } from "./TextField";

export function StepContactInfo({ formData, errors, updateFields }) {
  return (
    <div className="space-y-4">
      <TextField
        label="Email"
        type="email"
        value={formData.email}
        error={errors.email}
        placeholder="name@example.com"
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <TextField
        label="Телефон"
        type="tel"
        value={formData.phone}
        error={errors.phone}
        placeholder="+998 90 123 45 67"
        onChange={(e) => updateFields({ phone: e.target.value })}
      />
      <TextField
        label="Страна / город"
        value={formData.city}
        error={errors.city}
        placeholder="Ташкент, Узбекистан"
        onChange={(e) => updateFields({ city: e.target.value })}
      />
    </div>
  );
}
