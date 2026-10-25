// components/AnimatedStep.jsx — плавное появление шага (вперёд / назад)

export function AnimatedStep({ stepKey, direction, children }) {
  return (
    <div
      key={stepKey}
      className={
        (direction === "back" ? "animate-slide-prev" : "animate-slide-next") +
        " motion-reduce:animate-none"
      }
    >
      {children}
    </div>
  );
}
