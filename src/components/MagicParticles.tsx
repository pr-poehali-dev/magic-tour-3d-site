import { useEffect, useState } from 'react';

interface MagicParticlesProps {
  isActive: boolean;
}

const MagicParticles = ({ isActive }: MagicParticlesProps) => {
  const [particles, setParticles] = useState<number[]>([]);

  useEffect(() => {
    if (isActive) {
      setParticles([1, 2, 3, 4, 5, 6, 7, 8]);
      const timer = setTimeout(() => {
        setParticles([]);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setParticles([]);
    }
  }, [isActive]);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((id) => (
        <div
          key={`${id}-${Date.now()}`}
          className="magic-particle absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      ))}
    </div>
  );
};

export default MagicParticles;
