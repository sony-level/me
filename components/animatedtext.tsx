import React from 'react';
import { motion } from 'framer-motion';

const AnimatedText = ({ text }: { text: string }) => {
  const letters = text.split('');

  return (
    <div className="inline-block">
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedText;
