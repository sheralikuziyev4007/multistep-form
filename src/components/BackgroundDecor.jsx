// components/BackgroundDecor.jsx — размытые градиентные пятна на фоне

export function BackgroundDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-teal-300/40 dark:bg-teal-500/20 blur-3xl animate-float motion-reduce:animate-none" />
      <div className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-emerald-300/40 dark:bg-emerald-500/20 blur-3xl animate-float motion-reduce:animate-none [animation-delay:-4s]" />
    </div>
  );
}
