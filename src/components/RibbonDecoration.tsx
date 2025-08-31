export const RibbonDecoration = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Top Left Ribbon */}
      <div className="absolute top-0 left-0 w-32 h-64 bg-gradient-romantic opacity-20 transform -rotate-12 animate-ribbon-wave"></div>
      
      {/* Top Right Ribbon */}
      <div className="absolute top-0 right-0 w-24 h-48 bg-gradient-romantic opacity-15 transform rotate-12 animate-ribbon-wave" style={{ animationDelay: '1s' }}></div>
      
      {/* Bottom Left Ribbon */}
      <div className="absolute bottom-0 left-0 w-28 h-56 bg-gradient-romantic opacity-25 transform rotate-6 animate-ribbon-wave" style={{ animationDelay: '2s' }}></div>
      
      {/* Bottom Right Ribbon */}
      <div className="absolute bottom-0 right-0 w-36 h-72 bg-gradient-romantic opacity-18 transform -rotate-6 animate-ribbon-wave" style={{ animationDelay: '0.5s' }}></div>
      
      {/* Center flowing ribbons */}
      <div className="absolute top-1/4 left-1/4 w-2 h-32 bg-primary/30 transform rotate-45 animate-ribbon-wave" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/3 right-1/3 w-2 h-40 bg-rose-gold/40 transform -rotate-45 animate-ribbon-wave" style={{ animationDelay: '3s' }}></div>
      
      {/* Sparkle effects */}
      <div className="absolute top-1/3 left-1/2 w-1 h-1 bg-cream-white rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/2 left-1/4 w-1 h-1 bg-primary rounded-full animate-ping" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-rose-gold rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
    </div>
  );
};