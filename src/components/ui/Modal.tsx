import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[100] bg-neutral-900/60 backdrop-blur-sm"
            aria-hidden="true"
          />
          <div className="fixed inset-0 z-[101] flex items-end md:items-center justify-center pointer-events-none p-0 md:p-6">
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="w-full md:max-w-lg bg-white rounded-t-3xl md:rounded-3xl shadow-2xl pointer-events-auto max-h-[90vh] flex flex-col relative overflow-hidden"
              role="dialog"
              aria-modal="true"
            >
              <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-neutral-100">
                <div className="w-12 h-1.5 bg-neutral-200 rounded-full mx-auto md:hidden absolute top-3 left-1/2 -translate-x-1/2" />
                <h3 className="text-xl font-bold text-forest-green font-serif mt-2 md:mt-0">Start Your Journey</h3>
                <button
                  onClick={onClose}
                  className="p-2 -mr-2 text-neutral-400 hover:text-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-full bg-neutral-50 hover:bg-neutral-100"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="overflow-y-auto flex-grow p-6">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
