import { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

interface BirthdayLetterProps {
  onNext: () => void;
}

const BirthdayLetter = ({ onNext }: BirthdayLetterProps) => {
  const [showContent, setShowContent] = useState(false);
  const [visibleLines, setVisibleLines] = useState(0);

  const letterLines = [
    "Dear Hassam,",
    "",
    "Happy Birthday to our squad leader! 🎂",
    "",
    "Another season in the books, and you're still the GOAT.",
    "Your callouts, your clutches, your unmatched loyalty.",
    "",
    "May your crates always contain level 3 gear.",
    "May your final circles always be in your favor. 🌟",
    "",
    "Here's to more Chicken Dinners together!",
    "",
    "From your squad, with respect and admiration,",
    "Your Battle Buddies 💖",
  ];

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent && visibleLines < letterLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [showContent, visibleLines, letterLines.length]);

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden py-12 bg-[#0d0b07]">
      {/* Dark tactical background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_3de0b8d5a0bb5e9f24b20cb42b4d63eef3e99082.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b07] via-[#0d0b07]/95 to-[#0d0b07]" />

      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* Letter content - PUBG Panel */}
      <div
        className={`relative z-10 w-full max-w-2xl mx-4 pubg-panel p-8 md:p-12 transition-all duration-700 ${
          showContent ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        {/* Corner brackets */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#d4910a]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#d4910a]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#d4910a]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#d4910a]" />

        <div className="text-center mb-8">
          <span className="text-5xl inline-block">🎂</span>
        </div>

        <div className="space-y-3 text-lg md:text-xl text-[#f0ebe0]">
          {letterLines.map((line, index) => (
            <p
              key={index}
              className={`transition-all duration-500 font-inter ${
                index < visibleLines
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              } ${line === "" ? "h-4" : ""} ${
                index === 0 ? "font-teko text-2xl font-bold text-[#d4910a]" : ""
              } ${line.includes("💖") ? "text-[#d4910a] font-bold" : ""}`}
            >
              {line}
            </p>
          ))}
        </div>

        {visibleLines >= letterLines.length && (
          <div className="mt-10 text-center animate-fade-in-up">
            <button
              onClick={onNext}
              className="pubg-btn"
            >
              <span className="flex items-center gap-2">
                Continue to Surprise
                <ChevronRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayLetter;