import { useEffect, useRef, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import HeroSection from "@/components/HeroSection";
import MissionBriefing from "@/components/MissionBriefing";
import AirdropCrate from "@/components/AirdropCrate";
import SquadGallery from "@/components/SquadGallery";
import AboutMe from "@/components/AboutMe";
import Quiz from "@/components/Quiz";
import NoobBot from "@/components/NoobBot";
import PlayerStats from "@/components/PlayerStats";
import BirthdayCard from "@/components/BirthdayCard";
import ChickenDinner from "@/components/ChickenDinner";
import HUD from "@/components/HUD";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (!isLoading) {
      // Intersection Observer for scroll animations (only on main page)
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-fade-in-up");
              entry.target.classList.remove("opacity-0");
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      sectionRefs.current.forEach((ref) => {
        if (ref) {
          ref.classList.add("opacity-0");
          observer.observe(ref);
        }
      });

      return () => observer.disconnect();
    }
  }, [isLoading]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="bg-[#2a2a2a] overflow-x-hidden">
      {/* Fixed HUD */}
      <HUD />

      {/* Main scrolling page with all sections */}
      <main className="relative">
        {/* Hero Section */}
        <section
          ref={(el) => { sectionRefs.current[0] = el; }}
          className="min-h-screen"
        >
          <HeroSection />
        </section>

        {/* PUBG GIF Section */}
        <section
          ref={(el) => { sectionRefs.current[1] = el; }}
          className="min-h-screen relative flex items-center justify-center overflow-hidden"
        >
          {/* GIF Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/playerunknowns-battlegrounds.gif')`,
            }}
          >
            <div className="absolute inset-0 bg-[#0a0a0a]/40" />
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 text-center px-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="w-2 h-2 bg-[#d4910a] animate-blink rounded-sm" />
              <span className="font-inter text-xs tracking-[6px] text-[#d4910a] uppercase">
                Battle Royale
              </span>
            </div>
            <h2 className="font-teko text-4xl md:text-6xl font-bold text-[#e8e8e8] tracking-wider">
              GET READY
            </h2>
            <p className="font-inter text-sm text-[#8a7d5a] mt-2 tracking-wider">
              THE MISSION BEGINS
            </p>
          </div>
        </section>

        {/* Mission Briefing Section */}
        <section
          ref={(el) => { sectionRefs.current[1] = el; }}
          className="min-h-screen"
        >
          <MissionBriefing />
        </section>

        {/* Airdrop Section */}
        <section
          ref={(el) => { sectionRefs.current[2] = el; }}
          className="min-h-screen"
        >
          <AirdropCrate />
        </section>

        {/* About Me Section */}
        <section
          ref={(el) => { sectionRefs.current[3] = el; }}
          className="min-h-screen"
        >
          <AboutMe />
        </section>

        {/* Quiz Section */}
        <section
          ref={(el) => { sectionRefs.current[4] = el; }}
          className="min-h-screen"
        >
          <Quiz />
        </section>

        {/* Squad Gallery Section */}
        <section
          ref={(el) => { sectionRefs.current[5] = el; }}
          className="min-h-screen"
        >
          <SquadGallery />
        </section>

        {/* Noob Bot Roast Section */}
        <section
          ref={(el) => { sectionRefs.current[6] = el; }}
          className="min-h-screen"
        >
          <NoobBot />
        </section>

        {/* Player Stats Section */}
        <section
          ref={(el) => { sectionRefs.current[7] = el; }}
          className="min-h-screen"
        >
          <PlayerStats />
        </section>

        {/* Birthday Card Section */}
        <section
          ref={(el) => { sectionRefs.current[8] = el; }}
          className="min-h-screen"
        >
          <BirthdayCard />
        </section>

        {/* Chicken Dinner Finale Section */}
        <section
          ref={(el) => { sectionRefs.current[9] = el; }}
          className="min-h-screen"
        >
          <ChickenDinner onRestart={scrollToTop} />
        </section>
      </main>
    </div>
  );
};

export default Index;