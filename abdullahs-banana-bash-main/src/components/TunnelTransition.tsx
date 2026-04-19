import { useEffect, useState } from "react";

interface TunnelTransitionProps {
  onComplete: () => void;
}

const TunnelTransition = ({ onComplete }: TunnelTransitionProps) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase(1), 100);
    const timer2 = setTimeout(() => setPhase(2), 800);
    const timer3 = setTimeout(() => setPhase(3), 1500);
    const timer4 = setTimeout(() => onComplete(), 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0d0b07]"
      style={{
        background: phase >= 2
          ? "radial-gradient(ellipse at center, #1a150a 0%, #0d0b07 50%, #0d0b07 100%)"
          : "#0d0b07",
        transition: "background 0.5s ease-in-out",
      }}
    >
      {/* Tactical grid rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-[#6b5a2a]/30"
            style={{
              width: `${(i + 1) * 15}%`,
              height: `${(i + 1) * 15}%`,
              animation: phase >= 1
                ? `tunnel-zoom ${1.5 + i * 0.1}s ease-in forwards`
                : "none",
              animationDelay: `${i * 0.1}s`,
              opacity: phase >= 1 ? 1 : 0,
            }}
          />
        ))}
      </div>

      {/* Ember particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#d4910a] animate-ember"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Center text */}
      <div
        className={`z-10 text-center transition-all duration-500 ${
          phase >= 2 ? "scale-150 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-3 h-3 bg-[#5a7a3a] animate-blink" />
          <span className="font-inter text-xs tracking-[6px] text-[#5a7a3a] uppercase">
            DEPLOYING
          </span>
        </div>

        <h2 className="font-teko text-4xl md:text-6xl font-bold text-[#f0ebe0] animate-pulse-opacity">
          {phase < 2 ? "DROP INCOMING" : "TOUCHDOWN"}
        </h2>

        {/* Progress bar */}
        <div className="w-48 h-1 bg-[#1e1a0e] mt-6 mx-auto overflow-hidden">
          <div
            className="h-full bg-[#d4910a] transition-all duration-300"
            style={{ width: phase >= 2 ? "100%" : phase >= 1 ? "60%" : "20%" }}
          />
        </div>
      </div>

      {/* Swirling tactical particles */}
      {phase >= 1 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 bg-[#6b5a2a]"
              style={{
                left: "50%",
                top: "50%",
                transform: `rotate(${i * 18}deg) translateX(${50 + i * 10}px)`,
                animation: `tunnel-zoom ${1 + i * 0.05}s ease-in forwards`,
                animationDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TunnelTransition;