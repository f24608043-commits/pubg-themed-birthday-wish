import { useState } from "react";
import { Skull, Zap, Gamepad2, Target } from "lucide-react";

const NoobBot = () => {
  const [currentSlang, setCurrentSlang] = useState(0);

  const genZSlangs = [
    "You'll always be a noob bot 💀",
    "Ratio + L + Noob + Get Good 🎯",
    "Skill issue fr fr no cap 🎮",
    "Caught in 4K eating dirt 😵",
    "NPC behavior detected 🤖",
    "Your gameplay is giving cringe 😬",
    "Sit down, be humble 💺",
    "Touch grass, touch victory 🌿",
    "Built different? More like built mediocre 📉",
    "Rent free in the lobby 🧠",
  ];

  const handleNextSlang = () => {
    setCurrentSlang((prev) => (prev + 1) % genZSlangs.length);
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-11 px-4">
      {/* GIF Background - Plays.tv Squad GIF */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTYyZ2NmbW1yNWt0cnc2bWNsbGVnM3RqbjRwa2FieWNnN21mYmtycCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l3mZg3lrvxDjM7pks/giphy.gif')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/70" />
        {/* Glitch overlay effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#d4910a]/10 via-transparent to-[#8b2a1a]/10 animate-pulse" />
      </div>

      {/* Floating emojis background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {["💀", "🎯", "🎮", "😵", "🤖", "📉", "🧠", "💺"].map((emoji, i) => (
          <div
            key={i}
            className="absolute text-4xl opacity-20 animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          >
            {emoji}
          </div>
        ))}
      </div>

      {/* Main Content Panel */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <Skull className="w-6 h-6 text-[#8b2a1a] animate-pulse" />
          <span className="font-inter text-xs tracking-[8px] text-[#d4910a] uppercase">
            Roasted & Toasted
          </span>
          <Skull className="w-6 h-6 text-[#8b2a1a] animate-pulse" />
        </div>

        {/* Main Insult Card */}
        <div className="bg-[#1a1a1a]/95 border-2 border-[#d4910a] p-8 md:p-12 relative">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#d4910a]" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#d4910a]" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#d4910a]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#d4910a]" />

          {/* Glitch effect lines */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-0 right-0 h-px bg-[#d4910a]/30" />
            <div className="absolute top-2/4 left-0 right-0 h-px bg-[#d4910a]/20" />
            <div className="absolute top-3/4 left-0 right-0 h-px bg-[#d4910a]/30" />
          </div>

          {/* Main Text */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Gamepad2 className="w-10 h-10 text-[#8b2a1a]" />
              <Target className="w-10 h-10 text-[#d4910a] animate-spin-slow" />
              <Zap className="w-10 h-10 text-[#8b2a1a]" />
            </div>

            <h2 className="font-teko text-5xl md:text-7xl font-bold text-[#e8e8e8] tracking-wider mb-6 leading-tight">
              {genZSlangs[currentSlang]}
            </h2>

            <p className="font-inter text-sm text-[#8a7d5a] tracking-wider mb-8">
              Press button for more emotional damage
            </p>

            <button
              onClick={handleNextSlang}
              className="pubg-btn text-lg px-8 py-4 hover:scale-105 transition-transform"
            >
              <span className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                ROAST AGAIN
                <Skull className="w-5 h-5" />
              </span>
            </button>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs font-inter text-[#6b5a2a]">
            <span>SKILL_LEVEL: BOT</span>
            <span>K/D: 0.01</span>
            <span>RANK: WOOD</span>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex justify-center gap-6 mt-8">
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-[#8b2a1a] flex items-center justify-center mb-2">
              <span className="font-teko text-2xl text-[#8b2a1a]">L</span>
            </div>
            <span className="font-inter text-xs text-[#8a7d5a]">TOOK AN L</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-[#d4910a] flex items-center justify-center mb-2">
              <span className="font-teko text-2xl text-[#d4910a]">0</span>
            </div>
            <span className="font-inter text-xs text-[#8a7d5a]">WINS</span>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 border-2 border-[#8b2a1a] flex items-center justify-center mb-2">
              <span className="font-teko text-2xl text-[#8b2a1a]">💀</span>
            </div>
            <span className="font-inter text-xs text-[#8a7d5a]">ELIMINATED</span>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-12">
          <p className="font-inter text-xs text-[#5a7a3a] tracking-wider animate-pulse">
            ◆ SCROLL TO VIEW REAL STATS ◆
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoobBot;
