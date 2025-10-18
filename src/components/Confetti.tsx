import { useEffect, useState } from 'react';

interface ConfettiPiece {
  id: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  velocityX: number;
  velocityY: number;
  rotationSpeed: number;
}

interface ConfettiProps {
  x: number;
  y: number;
  onComplete: () => void;
}

const Confetti = ({ x, y, onComplete }: ConfettiProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    const colors = ['#a78bfa', '#fbbf24', '#60a5fa', '#34d399', '#f472b6', '#fb923c'];
    const newPieces: ConfettiPiece[] = [];

    for (let i = 0; i < 30; i++) {
      const angle = (Math.PI * 2 * i) / 30;
      const velocity = 3 + Math.random() * 4;
      
      newPieces.push({
        id: i,
        x,
        y,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
        velocityX: Math.cos(angle) * velocity,
        velocityY: Math.sin(angle) * velocity - 2,
        rotationSpeed: (Math.random() - 0.5) * 10,
      });
    }

    setPieces(newPieces);

    const interval = setInterval(() => {
      setPieces(prevPieces => 
        prevPieces.map(piece => ({
          ...piece,
          x: piece.x + piece.velocityX,
          y: piece.y + piece.velocityY,
          velocityY: piece.velocityY + 0.3,
          rotation: piece.rotation + piece.rotationSpeed,
        }))
      );
    }, 16);

    const timeout = setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 2000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [x, y, onComplete]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {pieces.map(piece => (
        <div
          key={piece.id}
          className="absolute w-3 h-3 transition-opacity duration-1000"
          style={{
            left: piece.x,
            top: piece.y,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            opacity: Math.max(0, 1 - (Date.now() % 2000) / 2000),
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
