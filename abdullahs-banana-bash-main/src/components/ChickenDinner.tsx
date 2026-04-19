import { ChevronUp } from "lucide-react";

interface ChickenDinnerProps {
  onRestart: () => void;
}

const ChickenDinner = ({ onRestart }: ChickenDinnerProps) => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-11 px-4">
      {/* Background GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://media.giphy.com/media/xT9DPpf0zTqRASyzTi/giphy.gif')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/75" />
      </div>

      {/* CSS Fireworks */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 2) * 30}%`,
            }}
          >
            {[...Array(12)].map((_, j) => (
              <div
                key={j}
                className="absolute w-2 h-2 rounded-full"
                style={{
                  background: ["#d4910a", "#4a9a3a", "#e8e8e8", "#c8a84b"][j % 4],
                  transform: `rotate(${j * 30}deg) translateX(0)`,
                  animation: `firework-burst 4s ease-out infinite`,
                  animationDelay: `${i * 0.8 + j * 0.1}s`,
                }}
              />
            ))}
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        {/* Match result label */}
        <p className="font-inter text-xs tracking-[6px] text-[#5a7a3a] uppercase">
          MATCH RESULT
        </p>

        {/* Main title */}
        <div className="space-y-0">
          <h1
            className="font-teko text-6xl md:text-8xl font-bold text-[#d4910a] leading-none"
            style={{ textShadow: "0 0 30px rgba(212, 145, 10, 0.5)" }}
          >
            WINNER WINNER
          </h1>
          <h2 className="font-teko text-7xl md:text-9xl font-bold text-[#e8e8e8] leading-none">
            BIRTHDAY DINNER
          </h2>
        </div>

        {/* Champion text */}
        <p className="font-teko text-xl text-[#5a7a3a] tracking-wider">
          HASSAM — SEASON CHAMPION
        </p>

        {/* Divider with diamond */}
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 md:w-24 h-px bg-[#6b5a2a]" />
          <span className="text-[#6b5a2a]">◆</span>
          <div className="w-16 md:w-24 h-px bg-[#6b5a2a]" />
        </div>

        {/* Message */}
        <p className="font-inter text-sm md:text-base text-[#8a7d5a] max-w-md mx-auto leading-relaxed">
          From your best friend, with love. Here&apos;s to another legendary season — may every drop land hot and every loot be loaded.
        </p>

        {/* Return button */}
        <div className="pt-8">
          <button onClick={onRestart} className="pubg-btn">
            <span className="flex items-center gap-2">
              <ChevronUp className="w-5 h-5" />
              RETURN TO LOBBY
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChickenDinner;
