// components/FieldLabel.jsx — подпись к полю формы

export function FieldLabel({ children, htmlFor }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-slate-700 mb-1"
    >
      {children}
    </label>
  );
}
