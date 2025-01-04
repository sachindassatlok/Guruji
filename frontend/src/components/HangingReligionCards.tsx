'use client';
import Link from 'next/link';
import Image from 'next/image';

const religions = [
  {
    title: 'SUPREME GOD IN HINDUISM',
    path: '/hinduism',
    color: 'from-orange-500 to-red-500',
    icon: '/icons/om.svg',
    delay: '0s'
  },
  {
    title: 'ALLAH KABIR IN ISLAM',
    path: '/islam',
    color: 'from-green-500 to-emerald-500',
    icon: '/icons/mosque.svg',
    delay: '0.1s'
  },
  {
    title: 'SUPREME GOD IN CHRISTIANITY',
    path: '/christianity',
    color: 'from-blue-500 to-indigo-500',
    icon: '/icons/cross.svg',
    delay: '0.2s'
  },
  {
    title: 'SUPREME GOD IN SIKHISM',
    path: '/sikhism',
    color: 'from-yellow-500 to-amber-500',
    icon: '/icons/khanda.svg',
    delay: '0.3s'
  },
  {
    title: 'SUPREME GOD IN JAINISM',
    path: '/jainism',
    color: 'from-purple-500 to-pink-500',
    icon: '/icons/ahimsa.svg',
    delay: '0.4s'
  },
  {
    title: 'SUPREME GOD IN BUDDHISM',
    path: '/buddhism',
    color: 'from-red-500 to-rose-500',
    icon: '/icons/dharmachakra.svg',
    delay: '0.5s'
  }
];

const HangingReligionCards = () => {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-red-50 to-orange-50">
      {/* Rope Line */}
      <div className="absolute top-12 left-0 w-full h-4 rope-line">
        <div className="w-full h-2 bg-gradient-to-b from-amber-700 to-amber-900 rope-texture"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16 hanging-title">
          Explore Supreme God in Different Religions
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {religions.map((religion, index) => (
            <Link 
              href={religion.path} 
              key={religion.path}
              className="hanging-card-wrapper"
              style={{ animationDelay: religion.delay }}
            >
              {/* Rope */}
              <div className="rope">
                <div className="rope-knot"></div>
                <div className="rope-string"></div>
              </div>

              {/* Card */}
              <div className="hanging-card bg-gradient-to-br shadow-xl">
                <div className={`w-full h-full bg-gradient-to-br ${religion.color} rounded-lg p-6 flex flex-col items-center justify-center text-center transform transition-transform duration-300 hover:scale-105`}>
                  {/* Icon */}
                  <div className="mb-4">
                    <Image
                      src={religion.icon}
                      alt={`${religion.title} Icon`}
                      width={40}
                      height={40}
                      className="text-white filter brightness-0 invert"
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    {religion.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HangingReligionCards;
