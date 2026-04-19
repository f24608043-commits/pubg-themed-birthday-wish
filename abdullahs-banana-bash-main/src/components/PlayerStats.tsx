import { useState, useEffect, useRef } from "react";
import { ChevronRight, Star } from "lucide-react";


interface StatBarProps {
  label: string;
  value: string;
  percent: number;
  isVisible: boolean;
}

const StatBar = ({ label, value, percent, isVisible }: StatBarProps) => {
  return (
    <div className="space-y-1">
      <div className="flex justify-between items-center">
        <span className="font-inter text-xs text-[#8a7d5a] tracking-wider uppercase">
          {label}
        </span>
        <span className="font-teko text-lg text-[#e8e8e8]">{value}</span>
      </div>
      <div className="stat-track w-full">
        <div
          className="stat-fill"
          style={{ width: isVisible ? `${percent}%` : "0%" }}
        />
      </div>
    </div>
  );
};

const PlayerStats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setShowBanner(true), 500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { label: "LOYALTY", value: "99/100", percent: 99 },
    { label: "VIBE LEVEL", value: "S-TIER", percent: 100 },
    { label: "BIRTHDAY ENERGY", value: "MAXED", percent: 100 },
    { label: "SQUAD BOND", value: "LEGENDARY", percent: 100 },
    { label: "YEARS SURVIVED", value: "∞ SEASONS", percent: 85 },
  ];

  const extraStats = [
    { label: "FRIENDSHIP RANK", value: "CONQUEROR" },
    { label: "HUMOR", value: "ELITE" },
    { label: "HEART", value: "UNMATCHED" },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-11 px-4"
    >
      {/* Dark background with vignette */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 0%, rgba(10,10,10,0.8) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row items-center gap-8 md:gap-16">
        {/* Character Display */}
        <div className="flex flex-col items-center">
          {/* Hassam Photo */}
          <div
            className="w-48 h-64 md:w-64 md:h-80 rounded-sm overflow-hidden border-2 border-[#6b5a2a]"
            style={{ boxShadow: "0 20px 40px rgba(0,0,0,0.8)" }}
          >
            <img
              src="https://ibb.co/PGKZZqwj"
              alt="Hassam"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h3 className="font-teko text-2xl text-[#e8e8e8] mt-4">HASSAM</h3>
          <p className="font-inter text-xs text-[#5a7a3a] tracking-wider">
            SQUAD LEADER — BIRTHDAY SEASON
          </p>
        </div>

        {/* Stats Panel */}
        <div className="flex-1 w-full">
          <div className="pubg-panel p-6 md:p-8 relative">
            {/* Scanlines */}
            <div className="absolute inset-0 scanlines" />

            {/* Royale Pass Badge */}
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#1a1a1a] border-2 border-[#d4910a] flex flex-col items-center justify-center">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-[#d4910a] fill-[#d4910a]" />
              <span className="font-teko text-[8px] md:text-[10px] text-[#e8e8e8] text-center leading-tight">
                ROYALE PASS<br />BIRTHDAY
              </span>
            </div>

            {/* Header */}
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[#d4910a]">★</span>
              <span className="font-teko text-lg tracking-wider text-[#d4910a]">
                LEGEND UNLOCKED
              </span>
            </div>

            <h2 className="font-teko text-2xl md:text-3xl font-bold text-[#e8e8e8] mb-6">
              COMBAT STATS
            </h2>

            {/* Main stats */}
            <div className="space-y-4 mb-6">
              {stats.map((stat) => (
                <StatBar
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  percent={stat.percent}
                  isVisible={isVisible}
                />
              ))}
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-[#6b5a2a]/50 my-6" />

            {/* Extra stats */}
            <div className="grid grid-cols-3 gap-4">
              {extraStats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-inter text-[10px] text-[#8a7d5a] tracking-wider uppercase">
                    {stat.label}
                  </p>
                  <p className="font-teko text-lg text-[#c8a84b]">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* Legend banner */}
            {showBanner && (
              <div className="mt-6 -mx-6 -mb-6 md:-mx-8 md:-mb-8 bg-[#d4910a] py-2 px-4 animate-slide-in-left">
                <p className="font-teko text-lg md:text-xl font-bold text-[#0a0a0a] text-center tracking-wider">
                  ★ LEGEND UNLOCKED ★
                </p>
              </div>
            )}
          </div>

          {/* Scroll hint */}
          <div className="flex justify-center mt-8">
            <p className="font-inter text-xs text-[#5a7a3a] tracking-wider">
              ◆ SCROLL TO OPEN BIRTHDAY CARD ◆
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
