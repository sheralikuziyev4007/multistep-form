// components/DateField.jsx — поле даты в формате дд/мм/гггг с автоматической маской

import { TextField } from "./TextField";
import { CalendarIcon } from "./icons";
import { formatDateInput } from "../utils/date";

export function DateField({ label, value, error, onChange }) {
  return (
    <TextField
      label={label}
      icon={CalendarIcon}
      inputMode="numeric"
      autoComplete="bday"
      maxLength={10}
      placeholder="дд/мм/гггг"
      value={value}
      error={error}
      onChange={(e) => onChange(formatDateInput(e.target.value))}
    />
  );
}
