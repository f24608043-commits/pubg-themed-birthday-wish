import { useState } from "react";
import { HelpCircle, CheckCircle2, XCircle, Trophy, Brain, Zap } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  correct: number;
  fact: string;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [showMonkey, setShowMonkey] = useState(false);

  const questions: Question[] = [
    {
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correct: 2,
      fact: "Paris is known as the City of Light!",
    },
    {
      question: "How many continents are there on Earth?",
      options: ["5", "6", "7", "8"],
      correct: 2,
      fact: "There are 7 continents: Africa, Antarctica, Asia, Australia, Europe, North America, and South America!",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Saturn", "Jupiter"],
      correct: 3,
      fact: "Jupiter is so big that over 1,300 Earths could fit inside it!",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      correct: 1,
      fact: "Leonardo da Vinci painted the Mona Lisa between 1503 and 1519!",
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["CO2", "O2", "H2O", "NaCl"],
      correct: 2,
      fact: "H2O means two hydrogen atoms and one oxygen atom!",
    },
  ];

  const handleAnswer = (index: number) => {
    if (answered) return;
    
    setSelectedAnswer(index);
    setAnswered(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnswered(false);
      } else {
        setShowResult(true);
        // Show monkey popup after completing quiz
        setTimeout(() => {
          setShowMonkey(true);
        }, 1000);
      }
    }, 1500);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setAnswered(false);
    setShowMonkey(false);
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden pt-11 px-4">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/steam/apps/578080/ss_f9036a87a6fd22736e2a77e4a5d7e24a27e6e23d.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-[#1a1a1a]/85" />
        {/* Scanlines */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(212, 145, 10, 0.1) 2px,
                rgba(212, 145, 10, 0.1) 4px
              )`,
            }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Brain className="w-5 h-5 text-[#d4910a]" />
            <span className="font-inter text-xs tracking-[6px] text-[#d4910a] uppercase">
              Intel Test
            </span>
            <Brain className="w-5 h-5 text-[#d4910a]" />
          </div>
          <h2 className="font-teko text-4xl md:text-5xl font-bold text-[#e8e8e8] tracking-wider">
            KNOWLEDGE CHECK
          </h2>
          <p className="font-inter text-sm text-[#8a7d5a] mt-2 tracking-wider">
            PROVE YOUR WORTH, SQUAD MEMBER
          </p>
        </div>

        {!showResult ? (
          /* Quiz Card */
          <div className="bg-[#1a1a1a]/95 border-2 border-[#6b5a2a] p-6 md:p-8 relative">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#d4910a]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#d4910a]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#d4910a]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#d4910a]" />

            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-inter text-xs text-[#8a7d5a] tracking-wider">
                  QUESTION {currentQuestion + 1} / {questions.length}
                </span>
                <span className="font-inter text-xs text-[#d4910a]">
                  {Math.round(progress)}%
                </span>
              </div>
              <div className="w-full h-2 bg-[#0a0a0a] border border-[#6b5a2a]">
                <div
                  className="h-full bg-[#d4910a] transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Question */}
            <div className="mb-6">
              <div className="flex items-start gap-3 mb-4">
                <HelpCircle className="w-6 h-6 text-[#d4910a] flex-shrink-0 mt-1" />
                <h3 className="font-inter text-lg text-[#e8e8e8] leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>
            </div>

            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentQ.options.map((option, index) => {
                let buttonClass = "w-full p-4 border-2 text-left transition-all duration-200 font-inter text-sm ";
                
                if (!answered) {
                  buttonClass += "border-[#6b5a2a] bg-[#0a0a0a] text-[#e8e8e8] hover:border-[#d4910a] hover:bg-[#d4910a]/10 cursor-pointer";
                } else if (index === currentQ.correct) {
                  buttonClass += "border-[#4a9a3a] bg-[#4a9a3a]/20 text-[#4a9a3a]";
                } else if (index === selectedAnswer) {
                  buttonClass += "border-[#8b2a1a] bg-[#8b2a1a]/20 text-[#8b2a1a]";
                } else {
                  buttonClass += "border-[#6b5a2a] bg-[#0a0a0a] text-[#8a7d5a] opacity-50";
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    disabled={answered}
                    className={buttonClass}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {answered && index === currentQ.correct && (
                        <CheckCircle2 className="w-5 h-5 text-[#4a9a3a]" />
                      )}
                      {answered && index === selectedAnswer && index !== currentQ.correct && (
                        <XCircle className="w-5 h-5 text-[#8b2a1a]" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Fact display after answering */}
            {answered && (
              <div className="mt-4 p-4 bg-[#d4910a]/10 border border-[#d4910a]">
                <p className="font-inter text-sm text-[#d4910a]">
                  <Zap className="w-4 h-4 inline-block mr-2" />
                  {currentQ.fact}
                </p>
              </div>
            )}
          </div>
        ) : (
          /* Results Card */
          <div className="bg-[#1a1a1a]/95 border-2 border-[#6b5a2a] p-6 md:p-8 relative">
            {/* Corner brackets */}
            <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-[#d4910a]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-[#d4910a]" />
            <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-[#d4910a]" />
            <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-[#d4910a]" />

            <div className="text-center">
              <Trophy className="w-16 h-16 text-[#d4910a] mx-auto mb-4" />
              <h3 className="font-teko text-3xl text-[#e8e8e8] mb-2">MISSION COMPLETE</h3>
              <p className="font-inter text-sm text-[#8a7d5a] mb-4">Your Knowledge Stats</p>

              <div className="bg-[#0a0a0a] border border-[#6b5a2a] p-6 mb-6">
                <div className="font-teko text-6xl text-[#d4910a] mb-2">
                  {score} / {questions.length}
                </div>
                <p className="font-inter text-sm text-[#8a7d5a]">
                  {score === questions.length
                    ? "PERFECT! BIG BRAIN ENERGY! 🧠"
                    : score >= 3
                    ? "SOLID PERFORMANCE, SOLDIER! 💪"
                    : "NEED MORE INTEL, ROOKIE! 📚"}
                </p>
              </div>

              <button onClick={resetQuiz} className="pubg-btn">
                <span className="flex items-center gap-2">
                  <Brain className="w-4 h-4" />
                  RETAKE TEST
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Scroll hint */}
        <div className="text-center mt-6">
          <p className="font-inter text-xs text-[#5a7a3a] tracking-wider animate-pulse">
            {showResult ? "◆ SCROLL TO VIEW SQUAD GALLERY ◆" : "◆ ANSWER TO CONTINUE ◆"}
          </p>
        </div>
      </div>

      {/* Monkey Popup */}
      {showMonkey && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]/80 backdrop-blur-sm"
          onClick={() => setShowMonkey(false)}
        >
          {/* Banana Rain */}
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
            className="relative bg-[#1a1a1a] border-2 border-[#d4910a] p-8 rounded-lg max-w-md w-full mx-4 animate-monkey-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-[#d4910a]" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-[#d4910a]" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-[#d4910a]" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-[#d4910a]" />

            <div className="text-center">
              <div className="text-[120px] leading-none animate-monkey-bounce">🐵</div>
              <h3 className="font-teko text-2xl text-[#d4910a] mt-4 tracking-wider">
                OOH OOH AAH AAH!
              </h3>
              <p className="font-inter text-sm text-[#8a7d5a] mt-2">
                Smart monkey! You completed the quiz!
              </p>
              <p className="font-inter text-lg text-[#d4910a] mt-2 font-bold">
                Score: {score}/{questions.length}
              </p>
              <button 
                onClick={() => setShowMonkey(false)}
                className="pubg-btn mt-6"
              >
                CATCH THE MONKEY
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
