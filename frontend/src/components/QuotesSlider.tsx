import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface Quote {
  text: string;
  author: string;
  image: string;
  audio: string;
  duration: number;
}

const quotes = [
  {
    text: "माटी कहे कुम्हार से तू क्या रौंदे मोहे।\nएक दिन ऐसा आयेगा, मैं रौंदूंगी तोहे।",
    author: "कबीर साहेब जी",
    image: "/quotes/kabir-bg1.jpg",
    audio: "/audio/kabir-vani1.mp3",
    duration: 30
  },
  {
    text: "गुरु गोविंद दोऊ खड़े, काके लागूं पाँय।\nबलिहारी गुरु आपने, गोविंद दियो मिलाय।",
    author: "कबीर साहेब जी",
    image: "/quotes/kabir-bg2.jpg",
    audio: "https://cdn.pixabay.com/download/audio/2022/03/15/audio_c8c8f0c302.mp3",
    duration: 30
  },
  {
    text: "बुरा जो देखन मैं चला, बुरा न मिलिया कोय।\nजो दिल खोजा आपना, मुझसे बुरा न कोय।",
    author: "कबीर साहेब जी",
    image: "/quotes/kabir-bg3.jpg",
    audio: "https://cdn.pixabay.com/download/audio/2022/05/17/audio_1808fbf07a.mp3",
    duration: 30
  }
];

const QuoteSlide = ({ 
  quote, 
  isActive, 
  isVisible,
  hasUserInteracted
}: { 
  quote: Quote; 
  isActive: boolean;
  isVisible: boolean;
  hasUserInteracted: boolean;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => {
      setIsPlaying(false);
      if (isActive && isVisible && hasUserInteracted) {
        audio.currentTime = 0;
        const playPromise = audio.play();
        if (playPromise) {
          playPromise.catch(error => {
            if (error.name === 'NotAllowedError') {
              console.warn('Audio autoplay was blocked');
            }
          });
        }
      }
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    if (isActive && isVisible && hasUserInteracted) {
      audio.currentTime = 0;
      const playPromise = audio.play();
      if (playPromise) {
        playPromise.catch(error => {
          if (error.name === 'NotAllowedError') {
            console.warn('Audio autoplay was blocked');
          }
        });
      }
    } else {
      audio.pause();
    }

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, [isActive, isVisible, hasUserInteracted]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      className="relative h-full w-full"
    >
      <div className="absolute inset-0">
        <Image
          src={quote.image}
          alt={quote.author}
          fill
          className="object-cover brightness-[0.4]"
          priority
          sizes="100vw"
        />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="mb-4 sm:mb-8"
        >
          <Image
            src="/images/om-symbol-white.png"
            alt="Om Symbol"
            width={60}
            height={60}
            className="opacity-80 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
          />
        </motion.div>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-hindi mb-4 sm:mb-8 leading-relaxed text-white whitespace-pre-line px-2 sm:px-4"
        >
          {quote.text}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
          className="flex flex-col items-center"
        >
          <span className="text-lg sm:text-xl md:text-2xl text-orange-400 font-semibold mb-2 sm:mb-4">{quote.author}</span>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="h-px w-8 sm:w-12 bg-orange-400"></span>
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="relative w-12 h-12 sm:w-16 sm:h-16"
                >
                  <div className="audio-wave">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i}
                        className="audio-bar"
                        style={{ 
                          animationDelay: `${i * 0.2}s`,
                          backgroundColor: '#FFA500'
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <span className="h-px w-8 sm:w-12 bg-orange-400"></span>
          </div>
        </motion.div>

        <audio 
          ref={audioRef} 
          src={quote.audio}
          preload="auto"
        />
      </div>
    </motion.div>
  );
};

const QuotesSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const swiperRef = useRef<any>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
          if (entry.isIntersecting && hasUserInteracted) {
            const audioElements = document.getElementsByTagName('audio');
            if (audioElements.length > 0) {
              const playPromise = audioElements[activeIndex]?.play();
              if (playPromise) {
                playPromise.catch(error => {
                  if (error.name === 'NotAllowedError') {
                    setHasUserInteracted(false); // Reset interaction state if autoplay is blocked
                  }
                });
              }
            }
          }
        });
      },
      { 
        threshold: 0.5,
        rootMargin: '0px 0px -10% 0px' // Adjust observer margin for better mobile experience
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [hasUserInteracted, activeIndex]);

  useEffect(() => {
    if (isVisible && swiperRef.current) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        if (swiperRef.current) {
          const nextIndex = (activeIndex + 1) % quotes.length;
          swiperRef.current.slideNext();
        }
      }, quotes[activeIndex].duration * 1000);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIndex, isVisible]);

  const handleInitialInteraction = useCallback(() => {
    setHasUserInteracted(true);
    const audioElements = document.getElementsByTagName('audio');
    if (audioElements.length > 0) {
      const playPromise = audioElements[activeIndex]?.play();
      if (playPromise) {
        playPromise.catch(error => {
          if (error.name === 'NotAllowedError') {
            setHasUserInteracted(false);
          }
        });
      }
    }
  }, [activeIndex]);

  const handleTouchStart = useCallback(() => {
    if (!hasUserInteracted) {
      handleInitialInteraction();
    }
  }, [hasUserInteracted, handleInitialInteraction]);

  return (
    <section 
      ref={sectionRef} 
      className="relative bg-black w-full min-h-[400px] sm:min-h-[500px] md:min-h-[600px]"
      onClick={!hasUserInteracted ? handleInitialInteraction : undefined}
      onTouchStart={handleTouchStart}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"></div>
      
      {!hasUserInteracted && isVisible && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <button
            onClick={handleInitialInteraction}
            className="bg-orange-400/80 hover:bg-orange-500 active:bg-orange-600 text-white rounded-full p-2 sm:p-3 transform hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg backdrop-blur-sm touch-manipulation"
            aria-label="Play Audio"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="currentColor" 
              className="w-5 h-5 sm:w-6 sm:h-6"
            >
              <path d="M8 5.14v14l11-7-11-7z" />
            </svg>
          </button>
        </div>
      )}

      <Swiper
        modules={[EffectFade]}
        effect="fade"
        speed={2000}
        allowTouchMove={false}
        autoplay={false}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="quotes-swiper h-full"
      >
        {quotes.map((quote, index) => (
          <SwiperSlide key={index} className="h-full">
            <QuoteSlide 
              quote={quote} 
              isActive={index === activeIndex} 
              isVisible={isVisible}
              hasUserInteracted={hasUserInteracted}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default QuotesSlider;
