import { useRef } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const SquadGallery = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 240;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const photos = [
    { label: "SQUAD MEMORY #01", sublabel: "SQUAD MEMORY" },
    { label: "CLASSIFIED FILE", sublabel: "MISSION RECAP" },
    { label: "SQUAD MEMORY #02", sublabel: "LEGENDARY DROP" },
    { label: "CHICKEN DINNER", sublabel: "SQUAD MEMORY #03" },
    { label: "VICTORY LOG", sublabel: "REPLAY ARCHIVE" },
    { label: "SQUAD MEMORY #04", sublabel: "POCHKINKI DROP" },
    { label: "FINAL CIRCLE", sublabel: "CLASSIFIED" },
    { label: "SQUAD MEMORY #05", sublabel: "CLUTCH REVIVE" },
    { label: "EPIC LOOT", sublabel: "SQUAD MEMORY #06" },
  ];

  return (
    <div className="min-h-screen relative flex flex-col justify-center overflow-hidden pt-11 px-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_3de0b8d5a0bb5e9f24b20cb42b4d63eef3e99082.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/75" />
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

      {/* Header */}
      <div className="relative z-10 mb-8 px-4">
        <h2 className="font-teko text-4xl md:text-5xl font-bold text-[#e8e8e8]">
          SQUAD GALLERY
        </h2>
        <p className="font-inter text-xs text-[#5a7a3a] tracking-[6px] uppercase">
          CLASSIFIED ARCHIVE — EYES ONLY
        </p>
        <div className="w-full h-px bg-[#6b5a2a] mt-4" />
      </div>

      {/* Gallery */}
      <div className="relative z-10 flex items-center gap-4">
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex w-10 h-10 items-center justify-center bg-[#1a1a1a] border border-[#6b5a2a] text-[#c8a84b] hover:border-[#d4910a] transition-colors shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide py-4 px-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative shrink-0 w-52 h-72 bg-[#1a1a1a] border border-[#6b5a2a] p-1 cursor-pointer transition-all duration-300 hover:scale-[1.04] hover:border-[#d4910a]"
              style={{ scrollSnapAlign: "start" }}
            >
              {/* Corner brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#d4910a]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#d4910a]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#d4910a]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#d4910a]" />

              {/* Photo placeholder */}
              <div className="w-full h-full bg-[#0a0a0a] flex flex-col items-center justify-center">
                <Camera className="w-8 h-8 text-[#6b5a2a] mb-2" />
                <p className="font-inter text-[10px] text-[#8a7d5a] text-center px-4">
                  MEMORY LOADING...
                </p>
                <p className="font-inter text-[10px] text-[#6b5a2a] text-center mt-1">
                  [Upload photo here]
                </p>
              </div>

              {/* Label */}
              <div className="absolute bottom-1 left-1 right-1 flex justify-between items-end">
                <span className="font-teko text-xs text-[#c8a84b] tracking-wider">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex w-10 h-10 items-center justify-center bg-[#1a1a1a] border border-[#6b5a2a] text-[#c8a84b] hover:border-[#d4910a] transition-colors shrink-0"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Swipe hint */}
      <div className="relative z-10 text-center mt-4 md:hidden">
        <p className="font-inter text-xs text-[#8a7d5a] tracking-wider">
          ◄ SWIPE TO BROWSE ARCHIVE ►
        </p>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 flex justify-center mt-8">
        <p className="font-inter text-xs text-[#5a7a3a] tracking-wider">
          ◆ SCROLL TO VIEW COMBAT STATS ◆
        </p>
      </div>
    </div>
  );
};

export default SquadGallery;
