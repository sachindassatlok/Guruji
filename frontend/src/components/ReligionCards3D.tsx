'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';

const religions = [
  {
    title: 'SUPREME GOD IN HINDUISM',
    path: '/hinduism',
    color: 'from-orange-500 to-red-500',
    icon: '/icons/om.svg',
    glowColor: 'rgba(255, 100, 0, 0.3)'
  },
  {
    title: 'ALLAH KABIR IN ISLAM',
    path: '/islam',
    color: 'from-green-500 to-emerald-500',
    icon: '/icons/mosque.svg',
    glowColor: 'rgba(0, 200, 100, 0.3)'
  },
  {
    title: 'SUPREME GOD IN CHRISTIANITY',
    path: '/christianity',
    color: 'from-blue-500 to-indigo-500',
    icon: '/icons/cross.svg',
    glowColor: 'rgba(50, 100, 255, 0.3)'
  },
  {
    title: 'SUPREME GOD IN SIKHISM',
    path: '/sikhism',
    color: 'from-yellow-500 to-amber-500',
    icon: '/icons/khanda.svg',
    glowColor: 'rgba(255, 200, 0, 0.3)'
  },
  {
    title: 'SUPREME GOD IN JAINISM',
    path: '/jainism',
    color: 'from-purple-500 to-pink-500',
    icon: '/icons/ahimsa.svg',
    glowColor: 'rgba(200, 0, 255, 0.3)'
  },
  {
    title: 'SUPREME GOD IN BUDDHISM',
    path: '/buddhism',
    color: 'from-red-500 to-rose-500',
    icon: '/icons/dharmachakra.svg',
    glowColor: 'rgba(255, 50, 50, 0.3)'
  }
];

const ReligionCards3D = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = document.querySelectorAll('.religion-card');
    
    const handleMouseMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        (card as HTMLElement).style.transform = 
          `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      });
    };
    
    const handleMouseLeave = () => {
      cards.forEach((card) => {
        (card as HTMLElement).style.transform = 
          'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
      });
    };

    const container = cardsRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <section className="relative w-full py-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-red-50/50 to-orange-50/50 backdrop-blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-red-600 to-orange-600 text-transparent bg-clip-text animate-pulse">
          Explore Supreme God in Different Religions
        </h2>
        
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {religions.map((religion) => (
            <Link 
              href={religion.path} 
              key={religion.path}
              className="religion-card-wrapper"
            >
              <div className="religion-card group relative w-full p-1 rounded-2xl transition-all duration-300 ease-out hover:shadow-2xl"
                   style={{
                     background: `linear-gradient(to bottom right, ${religion.glowColor}, transparent)`
                   }}>
                <div className={`relative w-full rounded-xl bg-gradient-to-br ${religion.color} p-6 overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10 pattern-grid"></div>
                  
                  {/* Content */}
                  <div className="relative flex flex-col items-center text-center z-10">
                    <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                      <Image
                        src={religion.icon}
                        alt={`${religion.title} Icon`}
                        width={48}
                        height={48}
                        className="text-white filter brightness-0 invert"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">
                      {religion.title}
                    </h3>
                    
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span className="inline-flex items-center text-white text-sm font-medium">
                        Learn More
                        <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReligionCards3D;
