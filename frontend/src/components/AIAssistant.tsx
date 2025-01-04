import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const AIAssistant = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  const messages = [
    "Namaste! I'm your spiritual AI assistant.",
    "I can help you learn about Sant Rampal Ji Maharaj's teachings.",
    "Ask me anything about spirituality and true worship.",
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* AI Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 md:w-64 md:h-64"
          >
            <div className="absolute inset-0 bg-orange-500 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full">
              <Image
                src="/images/ai-assistant.png"
                alt="AI Assistant"
                width={256}
                height={256}
                className="rounded-full"
                priority
              />
            </div>
            {/* Orbiting Elements */}
            <div className="absolute inset-0">
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full top-0 left-1/2 transform -translate-x-1/2 animate-orbit"></div>
              <div className="absolute w-4 h-4 bg-orange-500 rounded-full bottom-0 left-1/2 transform -translate-x-1/2 animate-orbit-reverse"></div>
            </div>
          </motion.div>

          {/* AI Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 max-w-xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Your Spiritual AI Guide
            </h2>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMessageIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-[60px] flex items-center"
                >
                  <p className="text-lg text-gray-700">{messages[currentMessageIndex]}</p>
                </motion.div>
              </AnimatePresence>

              {/* Typing Indicator */}
              <div className="mt-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors">
                Ask a Question
              </button>
              <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors">
                Learn More
              </button>
              <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors">
                Get Guidance
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
