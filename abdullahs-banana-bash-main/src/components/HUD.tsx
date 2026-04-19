import { useState, useEffect } from "react";
import { Volume2, VolumeX, Shield } from "lucide-react";

const HUD = () => {
  const [time, setTime] = useState(new Date());
  const [muted, setMuted] = useState(false);
  const [killFeed, setKillFeed] = useState<{ id: number; message: string } | null>(null);

  const killMessages = [
    "Hassam eliminated another year",
    "Birthday cake has been looted",
    "New season unlocked: Age +1",
    "Chicken dinner acquired",
    "Squad bond: LEGENDARY",
    "Party supplies collected",
    "Birthday energy: MAXED",
  ];

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const showKillFeed = () => {
      const randomMessage = killMessages[Math.floor(Math.random() * killMessages.length)];
      const id = Date.now();
      setKillFeed({ id, message: randomMessage });

      setTimeout(() => {
        setKillFeed((current) => (current?.id === id ? null : current));
      }, 4000);
    };

    showKillFeed();
    const interval = setInterval(showKillFeed, 5000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <>
      {/* Fixed HUD Bar */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#1a1a1a] border-b border-[#4a4a4a] h-11 flex items-center justify-between px-4">
        {/* Left - Name and shield */}
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-[#d4910a]" />
          <span className="font-teko text-lg tracking-wider text-[#e8e8e8]">HASSAM</span>
        </div>

        {/* Center - HP/XP bars */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-inter text-[10px] text-[#5a7a3a] tracking-wider">HP</span>
            <div className="w-24 h-1.5 bg-[#0a0a0a] relative">
              <div className="absolute left-0 top-0 h-full bg-[#4a9a3a] w-[80%]" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-inter text-[10px] text-[#d4910a] tracking-wider">XP</span>
            <div className="w-24 h-1.5 bg-[#0a0a0a] relative">
              <div className="absolute left-0 top-0 h-full bg-[#d4910a] w-[60%]" />
            </div>
          </div>
        </div>

        {/* Right - Audio and clock */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setMuted(!muted)}
            className="text-[#8a7d5a] hover:text-[#d4910a] transition-colors"
          >
            {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
          <span className="font-inter text-xs text-[#4a9a3a] tracking-wider tabular-nums">
            {formatTime(time)}
          </span>
        </div>
      </div>

      {/* Kill Feed */}
      <div className="fixed top-14 right-4 z-40">
        {killFeed && (
          <div className="animate-kill-feed bg-[#1a1a1a] border-l-2 border-[#d4910a] px-3 py-2 shadow-lg">
            <p className="font-inter text-xs text-[#e8e8e8]">{killFeed.message}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default HUD;
