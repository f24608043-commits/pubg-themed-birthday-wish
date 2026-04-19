import { useState } from "react";
import { X, Sparkles } from "lucide-react";

const AirdropCrate = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showMonkey, setShowMonkey] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      setShowConfetti(true);
      setTimeout(() => setShowMonkey(true), 300);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowConfetti(false);
    setShowMonkey(false);
  };

  // Generate confetti
  const confetti = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    color: ["#d4910a", "#c8a84b", "#4a9a3a", "#e8e8e8"][i % 4],
    tx: `${(Math.random() - 0.5) * 300}px`,
    ty: `${(Math.random() - 0.5) * 300 - 100}px`,
    delay: `${Math.random() * 0.3}s`,
  }));

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-11 px-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_f9036a87a6fd22736e2a77e4a5d7e24a27e6e23d.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Airdrop Container */}
        <div className="relative" style={{ perspective: "1000px" }}>
          {/* Parachute */}
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="w-32 h-16 bg-[#c8a84b] rounded-t-full relative">
              <div className="absolute bottom-0 left-1/4 w-px h-20 bg-[#8a7d5a]" />
              <div className="absolute bottom-0 right-1/4 w-px h-20 bg-[#8a7d5a]" />
            </div>
          </div>

          {/* Crate */}
          <div
            onClick={handleOpen}
            className={`relative cursor-pointer transition-all duration-500 ${
              isOpen ? "" : "animate-crate-bob"
            }`}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Lid (flips when open) */}
            <div
              className="absolute -top-1 left-0 right-0 h-4 bg-[#3a4a22] border border-[#6b5a2a] transition-transform duration-500 origin-bottom"
              style={{
                transform: isOpen ? "rotateX(-110deg)" : "rotateX(0)",
              }}
            />

            {/* Main box */}
            <div className="w-40 h-32 bg-[#2d3a1a] border-2 border-[#6b5a2a] relative overflow-hidden">
              {/* Warning stripes */}
              <div className="absolute inset-0 warning-stripes opacity-30" />

              {/* Bolts */}
              <div className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#c8a84b]" />
              <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#c8a84b]" />
              <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full bg-[#c8a84b]" />
              <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full bg-[#c8a84b]" />

              {/* Label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="font-teko text-xl font-bold text-[#e8e8e8]">AIRDROP</span>
                <span className="font-inter text-xs text-[#c8a84b] tracking-wider">
                  FOR: HASSAM
                </span>
              </div>
            </div>

            {/* Hassam popping out */}
            {isOpen && (
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 animate-character-bounce">
                <div className="w-28 h-36 rounded-lg overflow-hidden border-2 border-[#d4910a] shadow-2xl bg-[#1a1a1a]">
                  <img
                    src="/hassam-tuxedo.png"
                    alt="Hassam"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Confetti */}
          {showConfetti && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              {confetti.map((c) => (
                <div
                  key={c.id}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    background: c.color,
                    "--tx": c.tx,
                    "--ty": c.ty,
                    animation: `confetti-burst 1s ease-out forwards`,
                    animationDelay: c.delay,
                  } as React.CSSProperties}
                />
              ))}
            </div>
          )}
        </div>

        {/* Instructions / Result */}
        {!isOpen ? (
          <div className="mt-8 text-center animate-pulse-opacity">
            <p className="font-inter text-xs text-[#8a7d5a] tracking-wider uppercase">
              <Sparkles className="w-4 h-4 inline-block mr-2" />
              TAP TO OPEN
            </p>
          </div>
        ) : (
          <div className="mt-8 text-center animate-fade-in-up">
            <h2 className="font-teko text-3xl font-bold text-[#d4910a] mb-4">
              SURPRISE! HAPPY BIRTHDAY HASSAM! 🎉
            </h2>
            <div className="flex gap-4 justify-center">
              <button onClick={handleClose} className="pubg-btn text-sm px-6 py-2">
                <span className="flex items-center gap-2">
                  <X className="w-4 h-4" />
                  CLOSE
                </span>
              </button>
            </div>
            <p className="font-inter text-xs text-[#5a7a3a] tracking-wider mt-4">
              ◆ SCROLL TO CONTINUE ◆
            </p>
          </div>
        )}

        {/* Monkey Popup */}
        {showMonkey && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-sm overflow-hidden"
            onClick={() => setShowMonkey(false)}
          >
            {/* Falling Bananas Background */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute text-2xl animate-banana-fall"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                >
                  🍌
                </div>
              ))}
            </div>

            <div 
              className="relative bg-[#1a1a1a] border-2 border-[#d4910a] p-8 rounded-lg max-w-md w-full mx-4 max-h-[80vh] overflow-y-auto animate-monkey-popup z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4910a]" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4910a]" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4910a]" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4910a]" />

              {/* Monkey animation */}
              <div className="text-center">
                <div className="text-[120px] animate-monkey-bounce leading-none">
                  🐵
                </div>
                <h3 className="font-teko text-2xl text-[#d4910a] mt-4 tracking-wider">
                  OOH OOH AAH AAH!
                </h3>
                <p className="font-inter text-sm text-[#8a7d5a] mt-2">
                  the big ear monkey ,
                </p>
                <button 
                  onClick={() => setShowMonkey(false)}
                  className="pubg-btn mt-6 text-sm px-6 py-2"
                >
                  CATCH THE MONKEY
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirdropCrate;
