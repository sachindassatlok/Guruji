'use client';
import Image from 'next/image';

const topics = [
  {
    id: 1,
    title: 'Creation of Universe',
    description: 'The divine process of universal creation',
    icon: '/images/icons/universe.png'
  },
  {
    id: 2,
    title: 'Souls Caught in Kaal\'s Trap',
    description: 'Understanding Brahm, Satan, Shaitan, and Devil\'s influence',
    icon: '/images/icons/souls.png'
  },
  {
    id: 3,
    title: 'Birth, Marriage & Death of Trinity',
    description: 'Life cycles of Brahma, Vishnu & Shiv Ji',
    icon: '/images/icons/trinity.png'
  },
  {
    id: 4,
    title: 'Three Gunas (Qualities)',
    description: 'Understanding Sattva, Rajas and Tamas',
    icon: '/images/icons/gunas.png'
  }
];

export const CreationSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-red-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#981B1B_1px,transparent_1px)] opacity-5" style={{ backgroundSize: '20px 20px' }}></div>
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#981B1B] mb-6">
            Creation of Nature
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            The divine creation story across different faiths
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Topics */}
          <div className="w-full lg:w-1/2 space-y-6">
            {topics.map((topic) => (
              <div
                key={topic.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 relative flex-shrink-0">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-red-100 to-red-200 opacity-50"></div>
                    <Image
                      src={topic.icon}
                      alt={topic.title}
                      fill
                      className="object-contain p-3"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#981B1B] mb-2">{topic.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/creation.jpg"
                alt="Creation of Nature"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Universal Truth</h3>
                <p className="text-white/90">The divine creation story across different faiths</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
