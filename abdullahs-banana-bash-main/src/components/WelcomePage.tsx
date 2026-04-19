import { ChevronDown } from "lucide-react";

interface WelcomePageProps {
  onNext: () => void;
}

const WelcomePage = ({ onNext }: WelcomePageProps) => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden bg-[#0d0b07]">
      {/* Dark tactical background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_f9036a87a6fd22736e2a77e4a5d7e24a27e6e23d.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b07] via-[#0d0b07]/90 to-[#0d0b07]" />

      {/* Corner brackets decoration */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#6b5a2a]" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#6b5a2a]" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[#6b5a2a]" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[#6b5a2a]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 space-y-6">
        {/* Classified label */}
        <div className="flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-[#5a7a3a] animate-blink" />
          <span className="font-inter text-[11px] tracking-[8px] text-[#5a7a3a] uppercase">
            MISSION BRIEFING
          </span>
        </div>

        {/* Main title */}
        <h1
          className="font-teko text-6xl md:text-8xl font-bold text-[#f0ebe0] tracking-wider"
          style={{ textShadow: "0 0 40px rgba(212, 145, 10, 0.3)" }}
        >
          HASSAM
        </h1>

        <p className="font-inter text-lg md:text-xl text-[#8a7d5a] tracking-[4px] uppercase">
          Birthday Mission
        </p>

        {/* Deploy button */}
        <div className="pt-8">
          <button onClick={onNext} className="pubg-btn group">
            <span className="flex items-center gap-2">
              [ DEPLOY ]
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;