// components/FieldError.jsx — сообщение об ошибке под полем
// id нужен, чтобы связать сообщение с полем через aria-describedby

export function FieldError({ id, message }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="text-xs text-red-600 mt-1">
      {message}
    </p>
  );
}
