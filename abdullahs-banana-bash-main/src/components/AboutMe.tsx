import { useState } from "react";
import { User, MapPin, Calendar, Trophy, Heart, Zap, Target, Shield } from "lucide-react";

const AboutMe = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { icon: Trophy, label: "CHICKEN DINNERS", value: "∞", color: "#d4910a" },
    { icon: Target, label: "HEADSHOT %", value: "100", color: "#c8a84b" },
    { icon: Shield, label: "SQUAD PROTECTION", value: "MAX", color: "#5a7a3a" },
    { icon: Heart, label: "LOYALTY", value: "999", color: "#8b2a1a" },
    { icon: Zap, label: "ENERGY", value: "OVER 9000", color: "#d4910a" },
    { icon: User, label: "FRIEND LEVEL", value: "LEGEND", color: "#c8a84b" },
  ];

  const facts = [
    "Professional loot collector since day one",
    "Can carry the whole squad blindfolded",
    "Never leaves a teammate behind (even the noobs)",
    "Master of the impossible clutch",
    "Has more medkits than kills (almost)",
    "The reason we always get to the final circle",
  ];

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-11 px-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_3de0b8d5a0bb5e9f24b20cb42b4d63eef3e99082.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/80" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(212, 145, 10, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 145, 10, 0.3) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-2 h-2 bg-[#d4910a] animate-blink rounded-sm" />
            <span className="font-inter text-xs tracking-[6px] text-[#d4910a] uppercase">
              Player Profile
            </span>
            <span className="w-2 h-2 bg-[#d4910a] animate-blink rounded-sm" />
          </div>
          <h2 className="font-teko text-4xl md:text-6xl font-bold text-[#e8e8e8] tracking-wider">
            ABOUT ME
          </h2>
          <p className="font-inter text-sm text-[#8a7d5a] mt-2 tracking-wider">
            CLASSIFIED SQUAD MEMBER PROFILE
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-[#1a1a1a]/95 border-2 border-[#6b5a2a] p-6 md:p-8 relative">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#d4910a]" />
          <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#d4910a]" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#d4910a]" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#d4910a]" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Bio */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-[#2d3a1a] border-2 border-[#6b5a2a] flex items-center justify-center">
                  <User className="w-10 h-10 text-[#d4910a]" />
                </div>
                <div>
                  <h3 className="font-teko text-2xl text-[#e8e8e8]">HASSAM</h3>
                  <p className="font-inter text-xs text-[#5a7a3a] tracking-wider">SQUAD LEADER</p>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="w-3 h-3 text-[#8a7d5a]" />
                    <span className="font-inter text-xs text-[#8a7d5a]">Pochinki, Erangel</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-[#8a7d5a]">
                  <Calendar className="w-4 h-4" />
                  <span className="font-inter text-sm">Active since: Birthday Season 2026</span>
                </div>

                <p className="font-inter text-sm text-[#c8b898] leading-relaxed">
                  The mastermind behind every Chicken Dinner. When the zone is closing and 
                  bullets are flying, this is the player you want in your corner. Known for 
                  clutch revives, impossible shots, and keeping the squad laughing even when 
                  we're eating dirt.
                </p>

                <div className="border-t border-[#6b5a2a]/50 pt-4">
                  <p className="font-inter text-xs text-[#8a7d5a] mb-2 tracking-wider">SQUAD RATING</p>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className="text-[#d4910a] text-lg">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div>
              <h4 className="font-teko text-xl text-[#e8e8e8] mb-4 tracking-wider">COMBAT STATS</h4>
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div
                      key={index}
                      className="bg-[#0a0a0a] border border-[#6b5a2a] p-3 cursor-pointer transition-all duration-300"
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                      style={{
                        borderColor: hoveredStat === index ? stat.color : undefined,
                        transform: hoveredStat === index ? "scale(1.05)" : undefined,
                      }}
                    >
                      <Icon
                        className="w-5 h-5 mb-2"
                        style={{ color: stat.color }}
                      />
                      <p className="font-teko text-xl" style={{ color: stat.color }}>
                        {stat.value}
                      </p>
                      <p className="font-inter text-xs text-[#8a7d5a] tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Fun Facts */}
          <div className="mt-8 border-t border-[#6b5a2a]/50 pt-6">
            <h4 className="font-teko text-xl text-[#e8e8e8] mb-4 tracking-wider">SQUAD NOTES</h4>
            <div className="grid md:grid-cols-2 gap-3">
              {facts.map((fact, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[#d4910a] mt-1">▸</span>
                  <p className="font-inter text-sm text-[#8a7d5a]">{fact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="text-center mt-8">
          <p className="font-inter text-xs text-[#5a7a3a] tracking-wider animate-pulse">
            ◆ SCROLL TO TEST YOUR KNOWLEDGE ◆
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
