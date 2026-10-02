import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { content } from '../../data/content';
import { Button } from '../ui/Button';
import { FileText, CheckCircle2, AlertCircle } from 'lucide-react';

export const ChecklistCapture = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate network
    setTimeout(() => {
      // randomly succeed or fail? let's just succeed
      setStatus('success');
    }, 1500);
  };

  return (
    <section className="py-24 px-6 bg-cream">
      <div className="w-full max-w-[1440px] mx-auto max-w-4xl bg-white rounded-3xl p-10 md:p-16 border border-neutral-200 shadow-xl text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-forest-green/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
        
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-8"
          >
            <FileText className="w-10 h-10 text-accent" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black font-serif text-forest-green mb-6"
          >
            {content.checklistCapture.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-600 mb-10 max-w-2xl mx-auto"
          >
            {content.checklistCapture.description}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-md mx-auto min-h-[60px]"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center gap-3 text-forest-green font-bold text-lg bg-forest-green/5 py-3 rounded-xl border border-forest-green/20"
                >
                  <CheckCircle2 className="w-6 h-6" />
                  Checklist sent to your inbox!
                </motion.div>
              ) : status === 'error' ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex items-center justify-center gap-2 text-red-600 font-medium">
                    <AlertCircle className="w-5 h-5" /> Something went wrong.
                  </div>
                  <Button variant="outline" onClick={() => setStatus('idle')}>Try Again</Button>
                </motion.div>
              ) : (
                <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
                  <label htmlFor="checklist-email" className="sr-only">Email</label>
                  <input
                    id="checklist-email"
                    type="email"
                    placeholder="Enter your email"
                    disabled={status === 'loading'}
                    className="flex-grow px-4 py-3 rounded-xl border border-neutral-300 bg-white focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none min-w-0 disabled:opacity-50"
                    required
                  />
                  <Button type="submit" size="lg" className="sm:w-auto w-full flex-shrink-0" disabled={status === 'loading'}>
                    {status === 'loading' ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full mx-6"
                      />
                    ) : (
                      content.checklistCapture.buttonText
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
