import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

const StarDust = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const colors = ['#a78bfa', '#fbbf24', '#60a5fa', '#34d399', '#f472b6', '#c084fc'];
    let starId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newStars: Star[] = [];
      
      for (let i = 0; i < 3; i++) {
        newStars.push({
          id: starId++,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          size: Math.random() * 4 + 2,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: i * 0.1
        });
      }

      setStars(prev => [...prev, ...newStars].slice(-30));
    };

    let throttleTimer: number | null = null;
    const throttledMouseMove = (e: MouseEvent) => {
      if (throttleTimer === null) {
        throttleTimer = window.setTimeout(() => {
          handleMouseMove(e);
          throttleTimer = null;
        }, 50);
      }
    };

    window.addEventListener('mousemove', throttledMouseMove);

    return () => {
      window.removeEventListener('mousemove', throttledMouseMove);
      if (throttleTimer) clearTimeout(throttleTimer);
    };
  }, []);

  useEffect(() => {
    if (stars.length > 0) {
      const timer = setTimeout(() => {
        setStars(prev => prev.slice(3));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [stars]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute animate-star-fade"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}s`
          }}
        >
          <div
            className="w-full h-full rounded-full animate-star-twinkle"
            style={{
              background: star.color,
              boxShadow: `0 0 ${star.size * 2}px ${star.color}, 0 0 ${star.size * 4}px ${star.color}`
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default StarDust;
