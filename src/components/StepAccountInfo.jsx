// components/StepAccountInfo.jsx — Шаг 3: Данные аккаунта

import { TextField } from "./TextField";
import { PasswordField } from "./PasswordField";
import { PasswordStrengthIndicator } from "./PasswordStrengthIndicator";

export function StepAccountInfo({ formData, errors, updateFields }) {
  return (
    <div className="space-y-4">
      <TextField
        label="Логин"
        value={formData.login}
        error={errors.login}
        placeholder="alisher_k"
        autoComplete="username"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        onChange={(e) => updateFields({ login: e.target.value })}
      />
      <div>
        <PasswordField
          label="Пароль"
          value={formData.password}
          error={errors.password}
          placeholder="Минимум 8 символов"
          onChange={(e) => updateFields({ password: e.target.value })}
        />
        <PasswordStrengthIndicator password={formData.password} />
      </div>
      <PasswordField
        label="Подтверждение пароля"
        value={formData.confirmPassword}
        error={errors.confirmPassword}
        placeholder="Повторите пароль"
        onChange={(e) => updateFields({ confirmPassword: e.target.value })}
      />
    </div>
  );
}
