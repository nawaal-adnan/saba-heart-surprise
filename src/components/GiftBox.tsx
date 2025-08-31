import { useState } from "react";

interface GiftBoxProps {
  onOpen: () => void;
}

export const GiftBox = ({ onOpen }: GiftBoxProps) => {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      onOpen();
    }, 500);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-8">
      <div className="text-center mb-6 md:mb-8 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-romantic text-foreground mb-3 md:mb-4">
          A Special Gift for You
        </h1>
        <p className="text-base md:text-lg text-muted-foreground px-2">
          Click the box to open your surprise ✨
        </p>
      </div>
      
      <div
        onClick={handleClick}
        className={`
          relative cursor-pointer transition-all duration-500 hover:scale-105
          ${isShaking ? 'animate-pulse animate-box-open' : ''}
        `}
      >
        {/* Gift Box */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64">
          {/* Box Body */}
          <div className="absolute inset-0 bg-gradient-box rounded-lg shadow-box transform perspective-1000">
            {/* Box Top */}
            <div className="absolute -top-4 left-2 right-2 h-8 bg-gradient-box rounded-lg border-2 border-stone-400 shadow-lg"></div>
            
            {/* Ribbon Vertical */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-full bg-gradient-romantic shadow-lg animate-ribbon-wave"></div>
            
            {/* Ribbon Horizontal */}
            <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-6 bg-gradient-romantic shadow-lg animate-ribbon-wave"></div>
            
            {/* Bow */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
              <div className="relative">
                {/* Bow Left */}
                <div className="absolute -left-4 -top-2 w-8 h-6 bg-primary rounded-full transform rotate-12 shadow-heart"></div>
                {/* Bow Right */}
                <div className="absolute -right-4 -top-2 w-8 h-6 bg-primary rounded-full transform -rotate-12 shadow-heart"></div>
                {/* Bow Center */}
                <div className="w-4 h-6 bg-primary rounded-lg shadow-heart"></div>
              </div>
            </div>
            
            {/* Box Shine Effect */}
            <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded pointer-events-none"></div>
          </div>
        </div>
        
        {/* Floating Hearts around Box */}
        <div className="absolute -top-10 -left-10 w-4 h-4">
          <div className="heart animate-float-heart" style={{ animationDelay: '0s' }}></div>
        </div>
        <div className="absolute -top-8 -right-8 w-3 h-3">
          <div className="heart animate-float-heart" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="absolute -bottom-6 -left-8 w-5 h-5">
          <div className="heart animate-float-heart" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      <div className="mt-6 md:mt-8 text-center animate-fade-in px-4" style={{ animationDelay: '0.5s' }}>
        <p className="text-xs sm:text-sm text-muted-foreground italic">
          "Good things come to those who click" 💕
        </p>
      </div>
    </div>
  );
};