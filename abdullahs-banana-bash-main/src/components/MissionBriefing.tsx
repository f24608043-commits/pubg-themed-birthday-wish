import { useState, useEffect } from "react";

const MissionBriefing = () => {
  const [showContent, setShowContent] = useState(false);
  const [decryptedChars, setDecryptedChars] = useState(0);

  const fullMessage = `Channel opened. Squad communication secure.

Hassam — another year, another season. We've dropped into countless battles together, from Pochinki chaos to those impossible final circles. You've always been the reliable callout, the clutch revive, the one who never leaves a teammate behind.

This isn't just another birthday. This is a celebration of every Chicken Dinner we've earned, every laugh shared over comms, and every moment that proved why you're the heart of this squad.

May your loot always be legendary. May your zones always favor you. And may this next season bring you everything you've been grinding for.`;

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (showContent && decryptedChars < fullMessage.length) {
      const timer = setTimeout(() => {
        setDecryptedChars((prev) => prev + 1);
      }, 15);
      return () => clearTimeout(timer);
    }
  }, [showContent, decryptedChars, fullMessage.length]);

  const renderDecryptedText = () => {
    return fullMessage.split("").map((char, index) => {
      const isDecrypted = index < decryptedChars;
      const isNewline = char === "\n";

      if (isNewline) {
        return <br key={index} />;
      }

      return (
        <span
          key={index}
          className={`transition-colors duration-100 ${
            isDecrypted ? "text-[#c8b898]" : "text-[#5a7a3a]"
          }`}
        >
          {isDecrypted ? char : String.fromCharCode(33 + Math.floor(Math.random() * 94))}
        </span>
      );
    });
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-11 px-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://media.giphy.com/media/3o7TKtnuHOHHUjR38Y/giphy.gif')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/80 to-[#2a2a2a]/90" />
      </div>

      {/* Panel */}
      <div
        className={`relative z-10 w-full max-w-2xl pubg-panel p-8 md:p-12 transition-all duration-700 ${
          showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Scanlines */}
        <div className="absolute inset-0 scanlines" />

        {/* Radar in corner */}
        <div className="absolute top-4 right-4 w-14 h-14 rounded-full border border-[#5a7a3a]/50 flex items-center justify-center">
          <div className="absolute w-full h-full rounded-full border border-[#5a7a3a]/30 animate-radar-ping" />
          <div className="w-0.5 h-6 bg-[#5a7a3a] origin-bottom animate-radar" style={{ transformOrigin: "bottom center" }} />
        </div>

        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <span className="text-[#8a7d5a]">◆</span>
          <span className="font-teko text-sm tracking-[6px] text-[#8a7d5a]">
            CLASSIFIED TRANSMISSION
          </span>
          <span className="text-[#8a7d5a]">◆</span>
        </div>

        <h2 className="font-teko text-3xl md:text-4xl font-bold text-[#e8e8e8] mb-8">
          TRANSMISSION RECEIVED
        </h2>

        {/* Decrypted message */}
        <div className="font-inter text-sm md:text-base leading-relaxed mb-8 min-h-[200px]">
          {renderDecryptedText()}
          <span className="animate-blink text-[#5a7a3a]">_</span>
        </div>

        {/* Signature */}
        <p className="font-teko text-lg italic text-[#c8a84b] text-right mb-8">
          — YOUR SQUAD. ALWAYS.
        </p>

        {/* Stat chips */}
        <div className="flex flex-wrap gap-3 mb-8">
          <span className="px-3 py-1 border border-[#5a7a3a] text-[#5a7a3a] font-inter text-xs tracking-wider">
            FRIENDSHIP: LEGENDARY
          </span>
          <span className="px-3 py-1 border border-[#5a7a3a] text-[#5a7a3a] font-inter text-xs tracking-wider">
            LOYALTY: 99/100
          </span>
        </div>

        {/* Complete indicator */}
        {decryptedChars >= fullMessage.length && (
          <div className="flex justify-center animate-fade-in-up">
            <p className="font-inter text-xs text-[#5a7a3a] tracking-wider">
              ◆ TRANSMISSION COMPLETE — SCROLL TO CONTINUE ◆
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MissionBriefing;
