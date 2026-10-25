// components/ProgressBar.jsx — тонкая полоса общего прогресса

export function ProgressBar({ value }) {
  return (
    <div
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(value)}
      className="h-1 w-full bg-slate-200"
    >
      <div
        className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-500 ease-out"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}
