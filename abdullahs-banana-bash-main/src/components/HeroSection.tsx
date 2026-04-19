import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [hasShaken, setHasShaken] = useState(false);
  const dateStr = "MON, APR 20, 2026";

  useEffect(() => {
    const handleScroll = () => {
      if (!hasShaken && window.scrollY > 50) {
        setHasShaken(true);
        document.body.classList.add("animate-screen-shake");
        setTimeout(() => {
          document.body.classList.remove("animate-screen-shake");
        }, 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasShaken]);

  // Generate embers
  const embers = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${6 + Math.random() * 4}s`,
    size: 2 + Math.random() * 3,
  }));

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-11">
      {/* Background with PUBG hero image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#1a1a1a]/70 to-[#2a2a2a]/85" />
      </div>

      {/* Floating embers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {embers.map((ember) => (
          <div
            key={ember.id}
            className="absolute rounded-full animate-ember"
            style={{
              left: ember.left,
              width: `${ember.size}px`,
              height: `${ember.size}px`,
              background: ember.id % 3 === 0 ? "#d4910a" : "#c8a84b",
              animationDelay: ember.delay,
              animationDuration: ember.duration,
              opacity: 0.6,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 space-y-6">
        {/* Player identified label */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-[#5a7a3a] animate-blink rounded-sm" />
          <span className="font-inter text-[11px] tracking-[8px] text-[#5a7a3a] uppercase">
            PLAYER IDENTIFIED
          </span>
        </div>

        {/* Main name */}
        <h1 className="font-teko text-[110px] md:text-[140px] leading-none font-bold text-[#e8e8e8] tracking-wider hover:animate-glitch cursor-default"
          style={{ textShadow: "0 0 40px rgba(212, 145, 10, 0.4)" }}
        >
          HASSAM
        </h1>

        {/* Mission text */}
        <p className="font-inter text-sm md:text-base tracking-[4px] text-[#8a7d5a] uppercase">
          BIRTHDAY MISSION INITIATED
        </p>

        {/* Date */}
        <p className="font-inter text-xs md:text-sm text-[#4a9a3a] tracking-wider">
          {dateStr}
        </p>

        {/* Scroll Indicator */}
        <div className="pt-8 animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#d4910a] mx-auto" />
          <p className="font-inter text-[10px] text-[#8a7d5a] tracking-wider mt-2">SCROLL TO EXPLORE</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
