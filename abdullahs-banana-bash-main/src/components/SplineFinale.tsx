import { ChevronUp } from "lucide-react";

interface SplineFinaleProps {
  onRestart: () => void;
}

const SplineFinale = ({ onRestart }: SplineFinaleProps) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-[#0d0b07]">
      {/* Background with explosion effect */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://media.giphy.com/media/xT9DPpf0zTqRASyzTi/giphy.gif')`,
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CSS Fireworks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${30 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
          >
            {[...Array(12)].map((_, j) => (
              <div
                key={j}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: ["#d4910a", "#4a9a3a", "#f0ebe0"][j % 3],
                  transform: `rotate(${j * 30}deg) translateX(0)`,
                  animation: `firework-burst 4s ease-out infinite`,
                  animationDelay: `${i * 0.8 + j * 0.1}s`,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
        <p className="font-inter text-xs tracking-[6px] text-[#5a7a3a] uppercase mb-4">
          MATCH RESULT
        </p>

        <h1
          className="font-teko text-5xl md:text-7xl font-bold text-[#d4910a] mb-2"
          style={{ textShadow: "0 0 30px rgba(212, 145, 10, 0.5)" }}
        >
          WINNER WINNER
        </h1>

        <h2 className="font-teko text-6xl md:text-8xl font-bold text-[#f0ebe0] mb-4">
          BIRTHDAY DINNER
        </h2>

        <p className="font-teko text-xl text-[#5a7a3a] tracking-wider mb-2">
          HASSAM — SEASON CHAMPION
        </p>

        <div className="flex items-center justify-center gap-4 my-6">
          <div className="w-16 md:w-24 h-px bg-[#6b5a2a]" />
          <span className="text-[#6b5a2a]">◆</span>
          <div className="w-16 md:w-24 h-px bg-[#6b5a2a]" />
        </div>

        <p className="font-inter text-sm md:text-base text-[#8a7d5a] max-w-md mb-8">
          From your best friend, with love. Here&apos;s to another legendary season!
        </p>

        <button onClick={onRestart} className="pubg-btn">
          <span className="flex items-center gap-2">
            <ChevronUp className="w-5 h-5" />
            RETURN TO LOBBY
          </span>
        </button>
      </div>
    </div>
  );
};

export default SplineFinale;