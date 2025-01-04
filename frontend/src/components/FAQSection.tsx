import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const faqs = [
  {
    question: "Who Is Sant Rampal Ji Maharaj (Baba Rampal Ji)?",
    answer: "Sant Rampal Ji Maharaj is a spiritual leader known for his teachings on true spiritual knowledge and interpretation of holy scriptures."
  },
  {
    question: "History About Saint Rampal Ji Maharaj",
    answer: "Saint Rampal Ji Maharaj has dedicated his life to spreading spiritual knowledge and truth based on authentic holy scriptures."
  },
  {
    question: "What Is The Age Of Sant Rampal Ji?",
    answer: "Sant Rampal Ji Maharaj's age details are available in official records and documents."
  },
  {
    question: "Why Is Sant Rampal Ji Maharaj Known As Baba Rampal Ji?",
    answer: "He is known as Baba Rampal Ji due to his role as a spiritual father figure to his followers."
  },
  {
    question: "What Is The Caste Of Saint Rampal Ji Maharaj (Baba Rampal Ji)?",
    answer: "Saint Rampal Ji Maharaj teaches that spirituality transcends caste and social barriers."
  },
  {
    question: "Who Was The Guru Of Sant Rampal Ji Maharaj?",
    answer: "Sant Rampal Ji Maharaj received spiritual guidance through the traditional guru-disciple tradition."
  },
  {
    question: "What Is The Guru Tradition Of Saint Rampal Ji Maharaj?",
    answer: "The guru tradition follows the authentic spiritual path as described in holy scriptures."
  },
  {
    question: "When Did Saint Rampal Ji Maharaj (Baba Rampal Ji) Take Name Initiation?",
    answer: "The details of name initiation are documented in the spiritual records."
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <Image
            src="/images/om-symbol.png"
            alt="Om Symbol"
            width={60}
            height={60}
            className="mx-auto mb-6"
          />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-orange-200 rounded-lg overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-orange-50"
                  >
                    <p className="text-gray-700">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
