export const HeartParticles = () => {
  const hearts = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    size: Math.random() * 20 + 10,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: Math.random() * 4 + 6,
    opacity: Math.random() * 0.7 + 0.3,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute heart animate-drift-up"
          style={{
            left: `${heart.left}%`,
            width: `${heart.size}px`,
            height: `${heart.size * 0.9}px`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            opacity: heart.opacity,
          }}
        />
      ))}
    </div>
  );
};