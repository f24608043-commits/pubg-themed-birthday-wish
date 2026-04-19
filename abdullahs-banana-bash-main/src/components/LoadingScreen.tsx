import { useState, useEffect } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 300);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/steam/apps/578080/header.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
      </div>

      {/* Top branding */}
      <div className="absolute top-8 text-center z-10">
        <p className="font-teko text-sm tracking-[6px] text-[#c8a84b]">
          PLAYERUNKNOWN&apos;S
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="font-teko text-2xl md:text-3xl font-bold tracking-wider text-[#e8e8e8] uppercase">
          LOADING BIRTHDAY MISSION
        </h1>

        {/* Progress bar */}
        <div className="w-[280px] h-[6px] border border-[#6b5a2a] relative overflow-hidden bg-[#0a0a0a]">
          <div
            className="absolute left-0 top-0 h-full bg-[#d4910a] transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage */}
        <p className="font-inter text-xs text-[#4a9a3a] tracking-widest">
          {progress}%
        </p>
      </div>

      {/* Bottom blinking text */}
      <div className="absolute bottom-12 z-10">
        <p className="font-inter text-[11px] text-[#c8a84b] animate-blink tracking-wider">
          INITIALIZING SQUAD DATA...
        </p>
      </div>
    </div>
  );
};

export default LoadingScreen;
