import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CascadeAssistant = () => {
  const [activeMessage, setActiveMessage] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const spiritualMessages = [
    "Namaste! I'm your spiritual knowledge companion.",
    "Let me guide you through Sant Rampal Ji Maharaj's divine teachings.",
    "I can help you understand the true path of bhakti and worship.",
    "Ask me about spiritual texts, mantras, and sacred knowledge.",
    "Together, we'll explore the depths of spiritual wisdom.",
  ];

  const features = [
    {
      icon: "🕉️",
      title: "Spiritual Knowledge",
      description: "Access deep insights from sacred texts and teachings"
    },
    {
      icon: "📚",
      title: "Scripture Guidance",
      description: "Understanding holy books and their true meanings"
    },
    {
      icon: "🙏",
      title: "Worship Support",
      description: "Learn about proper methods of true worship"
    },
    {
      icon: "💫",
      title: "Daily Wisdom",
      description: "Receive spiritual guidance for daily life"
    }
  ];

  const journeyOptions = [
    {
      icon: "📖",
      title: "सत्संग वाणी",
      description: "संत रामपाल जी महाराज की अमृतवाणी सुनें",
      action: () => window.location.href = "/satsang"
    },
    {
      icon: "🎵",
      title: "भजन",
      description: "भक्तिमय भजनों का आनंद लें",
      action: () => window.location.href = "/bhajan"
    },
    {
      icon: "📱",
      title: "ऑनलाइन सत्संग",
      description: "लाइव सत्संग में शामिल हों",
      action: () => window.location.href = "/live-satsang"
    },
    {
      icon: "📝",
      title: "नाम दीक्षा",
      description: "नाम दीक्षा के लिए आवेदन करें",
      action: () => window.location.href = "/naam-diksha"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isInteracting) {
        setActiveMessage((prev) => (prev + 1) % spiritualMessages.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isInteracting]);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const modal = document.getElementById('spiritual-modal');
      if (modal && !modal.contains(e.target as Node)) {
        setShowModal(false);
      }
    };

    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal]);

  return (
    <section className="relative py-20 bg-gradient-to-b from-orange-50 via-white to-orange-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* AI Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative w-64 h-64 lg:w-96 lg:h-96"
            >
              <div className="absolute inset-0 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center text-white text-6xl">
                  🕉️
                </div>
                {/* Sacred Symbols Orbit */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-6 h-6 left-1/2 top-1/2"
                      style={{
                        transform: `rotate(${i * 60}deg) translateY(-120px)`,
                      }}
                    >
                      <div className="w-full h-full bg-white rounded-full shadow-lg animate-orbit">
                        <span className="flex items-center justify-center h-full text-orange-500 text-sm">
                          ॐ
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Interaction Area */}
            <div className="flex-1 max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-3xl shadow-xl p-8"
                onMouseEnter={() => setIsInteracting(true)}
                onMouseLeave={() => setIsInteracting(false)}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="text-orange-500">आध्यात्मिक मार्गदर्शक</span>
                  <span className="text-sm px-3 py-1 bg-orange-100 text-orange-600 rounded-full">AI सहायक</span>
                </h2>

                {/* Message Display */}
                <div className="min-h-[100px] mb-6">
                  <AnimatePresence mode="wait">
                    <motion.p
                      key={activeMessage}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-xl text-gray-700 leading-relaxed"
                    >
                      {spiritualMessages[activeMessage]}
                    </motion.p>
                  </AnimatePresence>
                </div>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{feature.icon}</span>
                        <div>
                          <h3 className="font-medium text-gray-900">{feature.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowModal(true)}
                  className="w-full mt-8 bg-orange-500 text-white py-3 px-6 rounded-xl font-medium hover:bg-orange-600 transition-colors"
                >
                  आध्यात्मिक यात्रा प्रारंभ करें
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Spiritual Journey Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              id="spiritual-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">आध्यात्मिक यात्रा का चयन करें</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {journeyOptions.map((option, index) => (
                  <motion.div
                    key={option.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={option.action}
                    className="p-4 bg-orange-50 rounded-xl hover:bg-orange-100 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl group-hover:scale-110 transition-transform">
                        {option.icon}
                      </span>
                      <div>
                        <h4 className="text-xl font-medium text-gray-900 mb-1">
                          {option.title}
                        </h4>
                        <p className="text-gray-600">{option.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 text-center text-gray-600">
                <p>सत्य की खोज में आपका स्वागत है 🙏</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CascadeAssistant;
