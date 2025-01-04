import React, { useState } from 'react';
import { FAQAccordion, FAQGrid, FAQTimeline } from './FAQSection';
import { motion } from 'framer-motion';

const FAQVariations = () => {
  const [activeVariation, setActiveVariation] = useState(0);

  const variations = [
    { name: 'Classic', component: FAQAccordion },
    { name: 'Grid', component: FAQGrid },
    { name: 'Timeline', component: FAQTimeline }
  ];

  return (
    <div className="relative">
      {/* Style Switcher */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="bg-white rounded-full shadow-md p-1 flex gap-1">
          {variations.map((variation, index) => (
            <button
              key={index}
              onClick={() => setActiveVariation(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeVariation === index
                  ? 'bg-orange-500 text-white'
                  : 'text-gray-600 hover:bg-orange-100'
              }`}
            >
              {variation.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ Content */}
      <motion.div
        key={activeVariation}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        {React.createElement(variations[activeVariation].component)}
      </motion.div>
    </div>
  );
};

export default FAQVariations;
