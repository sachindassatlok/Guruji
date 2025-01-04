'use client';
import { useState } from 'react';
import Particles from './Particles';

const audioData = [
  {
    title: 'Nitniyam / नित्य नियम',
    titleEn: 'Nitniyam',
    titleHi: 'नित्य नियम',
    duration: '48:19',
    speakerName: 'Sant Rampal Ji Maharaj',
    audioSrc: '/audios/nitniyam.mp3'
  },
  {
    title: 'Sandhya Aarti / संध्या आरती',
    titleEn: 'Sandhya Aarti',
    titleHi: 'संध्या आरती',
    duration: '36:06',
    speakerName: 'Sant Rampal Ji Maharaj',
    audioSrc: '/audios/sandhya-aarti.mp3'
  },
  {
    title: 'Morning Prayer / प्रातः आरती',
    titleEn: 'Morning Prayer',
    titleHi: 'प्रातः आरती',
    duration: '42:30',
    speakerName: 'Sant Rampal Ji Maharaj',
    audioSrc: '/audios/morning-prayer.mp3'
  }
];

const BhaktiBodh = () => {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gray-50 relative">
      <Particles />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-lg font-medium text-[#971B1B] mb-2 block">DAILY MP3</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">BHAKTIBODH</h2>
          <div className="h-1 w-24 bg-[#971B1B] mx-auto"></div>
        </div>

        <div className="space-y-4 max-w-4xl mx-auto">
          {audioData.map((audio, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-yellow-100 to-red-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setPlayingIndex(playingIndex === index ? null : index)}
                  className="w-14 h-14 flex items-center justify-center bg-[#971B1B] rounded-full text-white hover:bg-[#7B1616] transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {playingIndex === index ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  )}
                </button>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">{audio.titleEn}</h3>
                      <h4 className="text-lg text-[#971B1B]">{audio.titleHi}</h4>
                    </div>
                    <span className="text-gray-600">{audio.duration}</span>
                  </div>
                  <div className="bg-white/50 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-[#971B1B] h-full rounded-full transition-all duration-300"
                      style={{ 
                        width: playingIndex === index ? '33%' : '0%'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 bg-[#971B1B] text-white rounded-full hover:bg-[#7B1616] transition-colors duration-300 shadow-lg hover:shadow-xl">
            View All Audios
          </button>
        </div>
      </div>
    </section>
  );
};

export default BhaktiBodh;
