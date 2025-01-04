'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const prophecies = [
  {
    id: 1,
    name: 'Florence',
    country: 'America',
    year: '1927',
    image: '/images/prophecies/florence.jpg',
    flag: '/images/flags/us.png',
    quote: "In the year 1927, a great saint will be born in India who will guide the world towards the true spiritual path and establish peace.",
    description: "Florence made a significant prophecy about a great saint from India. She predicted that this saint would bring revolutionary changes in spiritual and social spheres."
  },
  {
    id: 2,
    name: 'Jules Verne',
    country: 'French',
    year: '1890',
    image: '/images/prophecies/jules.jpg',
    flag: '/images/flags/fr.png',
    quote: "A spiritual leader from the East will emerge, showing humanity the path to eternal truth and salvation.",
    description: "Jules Verne foresaw that this saint would emerge as a global spiritual guide, leading humanity towards salvation."
  },
  {
    id: 3,
    name: 'Jean Dixon',
    country: 'America',
    year: '1962',
    image: '/images/prophecies/jean.jpg',
    flag: '/images/flags/us.png',
    quote: "A divine messenger will appear in India, whose teachings will spread across the globe, bringing peace and unity.",
    description: "Jean Dixon prophesied about a divine messenger from India who would spread the message of peace and unity across the world."
  },
  {
    id: 4,
    name: 'Keiro',
    country: 'England',
    year: '1925',
    image: '/images/prophecies/keiro.jpg',
    flag: '/images/flags/uk.png',
    quote: "From India will rise a spiritual master who will guide humanity towards the true path of devotion and righteousness.",
    description: "Keiro predicted that this saint would reveal the true path of devotion and establish righteousness in the world."
  },
  {
    id: 5,
    name: 'Nostradamus',
    country: 'French',
    year: '1555',
    image: '/images/prophecies/nostradamus.jpg',
    flag: '/images/flags/fr.png',
    quote: "A great saint from India will emerge as the world teacher, spreading the message of peace and spiritual enlightenment.",
    description: "Nostradamus foresaw that this saint would spread the message of peace and spiritual enlightenment globally."
  },
  {
    id: 6,
    name: 'Anderson',
    country: 'Denmark',
    year: '1908',
    image: '/images/prophecies/anderson.jpg',
    flag: '/images/flags/dk.png',
    quote: "In the modern era, a spiritual leader from India will show the world the true way of worship and bring global transformation.",
    description: "Anderson foresaw that this saint would reveal the true way of worship and bring about global transformation."
  }
];

export function PropheciesSection() {
  const [selectedProphecy, setSelectedProphecy] = useState(prophecies[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-[#981B1B] py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
        >
          Prophecies
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 text-lg max-w-2xl mx-auto text-center mb-16"
        >
          Throughout history, many great seers and prophets have foretold the coming of Sant Rampal Ji Maharaj
        </motion.p>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-white/20 to-white/5"></div>

          {/* Prophecy Cards */}
          <div className="space-y-12">
            {prophecies.map((prophecy, index) => (
              <motion.div
                key={prophecy.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Marker */}
                <div className="hidden md:flex flex-col items-center justify-center w-32">
                  <div className="text-white font-bold text-xl">{prophecy.year}</div>
                  <div className="w-3 h-3 rounded-full bg-white mt-2"></div>
                </div>

                {/* Prophecy Card */}
                <div 
                  className="flex-1 w-full group cursor-pointer"
                  onClick={() => {
                    setSelectedProphecy(prophecy);
                    setIsModalOpen(true);
                  }}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={prophecy.image}
                          alt={prophecy.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">{prophecy.name}</h3>
                          <Image
                            src={prophecy.flag}
                            alt={prophecy.country}
                            width={20}
                            height={20}
                            className="rounded-full"
                          />
                          <span className="text-sm text-gray-300">{prophecy.country}</span>
                        </div>
                        <p className="text-gray-300 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                          {prophecy.quote}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl max-w-2xl w-full p-6 relative"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-full overflow-hidden">
                  <Image
                    src={selectedProphecy.image}
                    alt={selectedProphecy.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{selectedProphecy.name}</h3>
                  <div className="flex items-center gap-2">
                    <Image
                      src={selectedProphecy.flag}
                      alt={selectedProphecy.country}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                    <span className="text-gray-600">{selectedProphecy.country}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600">{selectedProphecy.year}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">The Prophecy</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedProphecy.quote}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Detailed Insight</h4>
                  <p className="text-gray-700 leading-relaxed">{selectedProphecy.description}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
