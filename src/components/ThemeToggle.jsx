// components/ThemeToggle.jsx — переключатель светлой / тёмной темы

import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "./icons";

export function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved) return saved === "dark";
    } catch {}
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch {}
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-pressed={dark}
      aria-label={dark ? "Включить светлую тему" : "Включить тёмную тему"}
      className="w-9 h-9 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-50 flex items-center justify-center transition-colors"
    >
      {dark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
