'use client';
import Image from 'next/image';
import React from 'react';

const questions = [
  "Who is the Supreme Almighty God?",
  "From where have we come?",
  "Why do we face problems?",
  "Why do we die?",
  "What happens with a soul after death?",
  "Why do people face problems and die an untimely death, even when they are already worshipping?",
  "Is there a land devoid of sorrows, old age and death?",
  "How can we attain the plentiful and immortal abode?"
];

export const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      
      <div className="relative w-full max-w-[2000px] mx-auto px-4 py-12">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffd7ae_1px,transparent_1px)] opacity-20" style={{ backgroundSize: '20px 20px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8 px-2">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#981B1B] mb-4">
              Jagat Guru Rampal Ji Maharaj
            </h1>
            <h2 className="text-base sm:text-xl lg:text-2xl subtitle-glow mt-4">
              True Spiritual Leader & Avatar of the Supreme Almighty God
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-7 gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="lg:sticky lg:top-4">
                <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[3/4] max-h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
                  <Image
                    src="/images/guruji.jpg"
                    alt="Jagat Guru Rampal Ji Maharaj"
                    fill
                    className="object-cover transform hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                
                <div className="mt-4 sm:mt-6 px-4 sm:px-0">
                  <button className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base">
                    About Sant Rampal Ji Maharaj
                  </button>
                </div>
              </div>
            </div>
            
            {/* Right Content */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 order-1 lg:order-2">
              {/* Description */}
              <div className="prose prose-sm sm:prose-base lg:prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  In this mortal world which is no more than a fake fantasy that can end any second, people are busy accumulating enough of the world's currency by hook or by crook. It is rightly said, that only the Real Saint can make us recollect the prime motive of getting a human life.
                </p>
              </div>
              
              {/* Questions Grid */}
              <div className="grid gap-2 sm:gap-3">
                {questions.map((q, i) => (
                  <div key={i} 
                    className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg p-3 sm:p-4 shadow hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center text-white font-bold text-sm sm:text-base">
                        {i + 1}
                      </span>
                      <p className="text-gray-700 font-medium text-sm sm:text-base pt-0.5">
                        {q}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
