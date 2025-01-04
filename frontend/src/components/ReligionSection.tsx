'use client';
import Link from 'next/link';
import Image from 'next/image';

const religions = [
  {
    title: 'SUPREME GOD IN HINDUISM',
    path: '/hinduism',
    color: 'from-orange-500 to-red-500',
    hoverColor: 'from-orange-600 to-red-600',
    icon: '/icons/om.svg',
    texture: "url('/textures/mandala.png')",
    pattern: 'mandala-pattern'
  },
  {
    title: 'ALLAH KABIR IN ISLAM',
    path: '/islam',
    color: 'from-green-500 to-emerald-500',
    hoverColor: 'from-green-600 to-emerald-600',
    icon: '/icons/mosque.svg',
    texture: "url('/textures/arabic.png')",
    pattern: 'arabic-pattern'
  },
  {
    title: 'SUPREME GOD IN CHRISTIANITY',
    path: '/christianity',
    color: 'from-blue-500 to-indigo-500',
    hoverColor: 'from-blue-600 to-indigo-600',
    icon: '/icons/cross.svg',
    texture: "url('/textures/cross.png')",
    pattern: 'cross-pattern'
  },
  {
    title: 'SUPREME GOD IN SIKHISM',
    path: '/sikhism',
    color: 'from-yellow-500 to-amber-500',
    hoverColor: 'from-yellow-600 to-amber-600',
    icon: '/icons/khanda.svg',
    texture: "url('/textures/khanda.png')",
    pattern: 'khanda-pattern'
  },
  {
    title: 'SUPREME GOD IN JAINISM',
    path: '/jainism',
    color: 'from-purple-500 to-pink-500',
    hoverColor: 'from-purple-600 to-pink-600',
    icon: '/icons/ahimsa.svg',
    texture: "url('/textures/jain.png')",
    pattern: 'jain-pattern'
  },
  {
    title: 'SUPREME GOD IN BUDDHISM',
    path: '/buddhism',
    color: 'from-red-500 to-rose-500',
    hoverColor: 'from-red-600 to-rose-600',
    icon: '/icons/dharmachakra.svg',
    texture: "url('/textures/buddhist.png')",
    pattern: 'buddhist-pattern'
  }
];

const ReligionSection = () => {
  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Explore Supreme God in Different Religions
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {religions.map((religion) => (
            <Link 
              href={religion.path} 
              key={religion.path}
              className="group relative overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            >
              {/* Background Pattern */}
              <div className={`absolute inset-0 ${religion.pattern} opacity-10`} />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${religion.color} opacity-90 group-hover:opacity-95 transition-opacity duration-300`} />
              
              <div className="relative p-8 flex flex-col items-center justify-center min-h-[250px] text-center">
                {/* Religion Icon */}
                <div className="mb-6">
                  <Image
                    src={religion.icon}
                    alt={`${religion.title} Icon`}
                    width={48}
                    height={48}
                    className="text-white filter brightness-0 invert"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                  {religion.title}
                </h3>
                
                <div className="w-12 h-12 rounded-full border-2 border-white/80 flex items-center justify-center">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-6 w-6 text-white transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReligionSection;
