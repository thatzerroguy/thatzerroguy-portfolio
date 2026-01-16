
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HoverPreviewProps {
  image: string | null;
  isVisible: boolean;
  mousePos: { x: number; y: number };
}

const HoverPreview: React.FC<HoverPreviewProps> = ({ image, isVisible, mousePos }) => {
  return (
    <AnimatePresence>
      {isVisible && image && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            // Centered above the cursor with a slight offset
            x: mousePos.x + 20,
            y: mousePos.y - 180
          }}
          exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
          transition={{ 
            type: 'spring', 
            damping: 35, 
            stiffness: 450,
            opacity: { duration: 0.15 }
          }}
          style={{ 
            position: 'fixed', 
            left: 0, 
            top: 0, 
            pointerEvents: 'none', 
            zIndex: 9999 
          }}
          className="overflow-hidden w-40 h-40 md:w-56 md:h-56 rounded-2xl border-2 border-white shadow-2xl bg-brand-secondary ring-1 ring-brand-border"
        >
          <img 
            src={image} 
            alt="Preview" 
            className="w-full h-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HoverPreview;
