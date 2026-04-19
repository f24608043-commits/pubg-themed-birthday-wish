import { useState } from "react";
import { Crosshair, Share2, Check } from "lucide-react";

const BirthdayCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden pt-11 px-4">
      {/* Background */}
      <div className="absolute inset-0 bg-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_f9036a87a6fd22736e2a77e4a5d7e24a27e6e23d.jpg')`,
            backgroundSize: "cover",
            filter: "blur(8px)",
          }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
      </div>

      {/* Confetti particles behind card */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: ["#d4910a", "#c8a84b", "#4a9a3a"][i % 3],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${4 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Card Container */}
      <div
        className="relative w-[300px] h-[420px] cursor-pointer"
        style={{ perspective: "1000px" }}
        onClick={handleFlip}
      >
        <div
          className="relative w-full h-full transition-transform duration-600"
          style={{
            transformStyle: "preserve-3d",
            transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            transition: "transform 0.6s ease",
          }}
        >
          {/* Front Face */}
          <div
            className="absolute inset-0 bg-[#1a1a1a] border-2 border-[#6b5a2a] p-6 flex flex-col items-center justify-center"
            style={{ backfaceVisibility: "hidden" }}
          >
            {/* Corner brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4910a]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4910a]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4910a]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4910a]" />

            {/* Crosshair icon */}
            <Crosshair className="w-6 h-6 text-[#d4910a] mb-4" />

            <p className="font-inter text-[10px] text-[#8a7d5a] tracking-wider mb-2">
              OPEN ORDERS:
            </p>

            <h2 className="font-teko text-3xl font-bold text-[#e8e8e8] text-center mb-2">
              BIRTHDAY CELEBRATION
            </h2>

            <p className="font-inter text-xs text-[#c8a84b] tracking-wider mb-6">
              FOR: HASSAM
            </p>

            <p className="font-inter text-[11px] text-[#d4910a] animate-pulse-opacity tracking-wider">
              ► TAP TO OPEN ◄
            </p>
          </div>

          {/* Back Face */}
          <div
            className="absolute inset-0 bg-[#2a2a2a] border-2 border-[#6b5a2a] p-6 flex flex-col"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Corner brackets */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4910a]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4910a]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4910a]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4910a]" />

            {/* Message */}
            <div className="flex-1 flex flex-col justify-center">
              <p className="font-caveat text-xl text-[#d4c8a8] leading-relaxed text-center">
                Happy Birthday, Hassam! 🎂
                <br /><br />
                Another season, another Chicken Dinner.
                You make every match worth playing.
                Here&apos;s to loud laughs, wild wins,
                and a year full of legendary moments.
                <br /><br />
                — Always your squad.
              </p>
            </div>

            {/* Share button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleShare();
              }}
              className="pubg-btn text-sm py-2 mt-4"
            >
              <span className="flex items-center gap-2 justify-center">
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    COPIED
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    SHARE THIS CARD
                  </>
                )}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      {isFlipped && (
        <div className="relative z-10 mt-8 animate-fade-in-up">
          <p className="font-inter text-xs text-[#5a7a3a] tracking-wider">
            ◆ SCROLL TO CONTINUE TO FINALE ◆
          </p>
        </div>
      )}

      {/* Toast notification */}
      {showToast && (
        <div className="fixed top-16 right-4 z-50 bg-[#1a1a1a] border-l-4 border-[#4a9a3a] px-4 py-3 shadow-lg animate-kill-feed">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#4a9a3a] flex items-center justify-center">
              <Check className="w-3 h-3 text-[#0a0a0a]" />
            </div>
            <span className="font-teko text-sm text-[#e8e8e8] tracking-wider">
              LINK COPIED TO CLIPBOARD
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayCard;
