import { useEffect, useState } from "react";
import { HeartParticles } from "./HeartParticles";
import { RibbonDecoration } from "./RibbonDecoration";

export const LoveMessage = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [showSubtext, setShowSubtext] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMessage(true), 500);
    setTimeout(() => setShowSubtext(true), 1500);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Hearts */}
      <HeartParticles />
      
      {/* Ribbon Decorations */}
      <RibbonDecoration />
      
      {/* Main Message */}
      <div className="text-center z-10 relative px-4 md:px-8">
        {showMessage && (
          <div className="animate-magical-appear">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-romantic bg-gradient-romantic bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
              I Love You
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-romantic text-primary mb-6 md:mb-8 drop-shadow-lg">
              Saba ✨
            </h2>
          </div>
        )}
        
        {showSubtext && (
          <div className="animate-magical-appear" style={{ animationDelay: '0.5s' }}>
            <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground/80 mb-4 md:mb-6 leading-relaxed px-2">
                You light up my world like nobody else. Every moment with you feels like magic. 💕
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-sm sm:text-base md:text-lg lg:text-xl px-2">
                <span className="bg-blush-pink/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full">Forever yours</span>
                <span className="bg-soft-purple/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full">Always & always</span>
                <span className="bg-rose-gold/50 px-3 py-1.5 md:px-4 md:py-2 rounded-full">My everything</span>
              </div>
              
              <div className="mt-6 md:mt-8 text-xl md:text-2xl">
                💖✨🎀✨💖
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Floating Hearts in corners */}
      <div className="absolute top-4 md:top-10 left-4 md:left-10 w-6 md:w-8 h-6 md:h-8 opacity-60">
        <div className="heart animate-float-heart text-primary" style={{ animationDelay: '0s' }}></div>
      </div>
      <div className="absolute top-8 md:top-20 right-6 md:right-16 w-4 md:w-6 h-4 md:h-6 opacity-50">
        <div className="heart animate-float-heart text-rose-gold" style={{ animationDelay: '1.5s' }}></div>
      </div>
      <div className="absolute bottom-8 md:bottom-16 left-8 md:left-20 w-8 md:w-10 h-8 md:h-10 opacity-70">
        <div className="heart animate-float-heart text-soft-purple" style={{ animationDelay: '2.5s' }}></div>
      </div>
      <div className="absolute bottom-8 md:bottom-20 right-4 md:right-10 w-5 md:w-7 h-5 md:h-7 opacity-60">
        <div className="heart animate-float-heart text-primary" style={{ animationDelay: '0.8s' }}></div>
      </div>
    </div>
  );
};