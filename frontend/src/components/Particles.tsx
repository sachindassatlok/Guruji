'use client';
import { useEffect, useState } from 'react';
import '@/styles/Particles.css';

interface Particle {
  id: number;
  size: number;
  duration: number;
  opacity: number;
  drift: number;
  left: string;
}

const Particles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = (id: number): Particle => ({
      id,
      size: Math.random() * 15 + 5,
      duration: Math.random() * 20 + 10,
      opacity: Math.random() * 0.5 + 0.1,
      drift: (Math.random() - 0.5) * 200,
      left: `${Math.random() * 100}%`,
    });

    // Initial particles
    const initialParticles = Array.from({ length: 15 }, (_, i) => createParticle(i));
    setParticles(initialParticles);

    // Add new particles periodically
    const interval = setInterval(() => {
      setParticles(prev => {
        const newParticles = [...prev];
        // Remove a random particle
        const removeIndex = Math.floor(Math.random() * newParticles.length);
        newParticles.splice(removeIndex, 1);
        // Add a new particle
        newParticles.push(createParticle(Date.now()));
        return newParticles;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="particles-container">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle"
          style={{
            '--duration': `${particle.duration}s`,
            '--opacity': particle.opacity,
            '--drift': `${particle.drift}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: particle.left,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default Particles;
