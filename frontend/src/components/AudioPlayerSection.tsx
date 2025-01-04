'use client';
import { useState } from 'react';
import Image from 'next/image';

const audioData = {
  episodeNo: 69,
  title: 'परमात्मा में मन के लगने?। परमात्मा में गन लगने की विधि',
  audioSrc: '/audios/episode69.mp3',
  duration: '46:16',
  speakerName: 'Sant Rampal Ji Maharaj',
  thumbnailImage: '/images/audio-thumbnail.jpg'
};

const AudioPlayerSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#971B1B]">
            Spiritual Discourses
            <div className="h-1 w-48 bg-yellow-400 mx-auto mt-2"></div>
          </h2>
        </div>

        <div className="bg-gradient-to-r from-yellow-100 to-red-50 rounded-2xl shadow-xl p-8">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src={audioData.thumbnailImage}
                    alt="Episode Thumbnail"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-lg font-medium text-[#971B1B]">EPISODE : {audioData.episodeNo}</span>
                    <div className="h-1 w-16 bg-[#971B1B]"></div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">{audioData.title}</h2>
                  <div className="flex items-center gap-6 mb-6">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-16 h-16 flex items-center justify-center bg-[#971B1B] rounded-full text-white hover:bg-[#7B1616] transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      {isPlaying ? (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                      )}
                    </button>
                    <div className="flex-1">
                      <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
                        <div className="bg-[#971B1B] w-1/3 h-full rounded-full"></div>
                      </div>
                      <div className="flex justify-between mt-2 text-sm text-gray-600">
                        <span>00:00</span>
                        <span>{audioData.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#971B1B] rounded-full"></span>
                    Speaker: {audioData.speakerName}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioPlayerSection;
