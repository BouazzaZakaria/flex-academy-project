import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { Calendar, Download, CheckCircle2 } from 'lucide-react';

export const WebinarFlow = () => {
  const [step, setStep] = useState<'form' | 'loading' | 'success'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('loading');
    setTimeout(() => {
      setStep('success');
    }, 1500);
  };

  return (
    <div className="relative min-h-[350px]">
      <AnimatePresence mode="wait">
        {step === 'form' && (
          <motion.form
            key="form"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <p className="text-neutral-600 mb-6">Register for the exclusive training session breaking down the exact systems top coaches use.</p>
            
            <div>
              <label htmlFor="webinar-name" className="block text-sm font-medium text-neutral-700 mb-1">Full Name</label>
              <input
                id="webinar-name"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              />
            </div>
            
            <div>
              <label htmlFor="webinar-email" className="block text-sm font-medium text-neutral-700 mb-1">Email Address</label>
              <input
                id="webinar-email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="webinar-country" className="block text-sm font-medium text-neutral-700 mb-1">Country</label>
              <select
                id="webinar-country"
                required
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent outline-none transition-all appearance-none"
              >
                <option value="">Select your country...</option>
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
                <option value="OTHER">Other</option>
              </select>
            </div>

            <Button type="submit" className="w-full mt-4" size="lg">
              Secure My Spot
            </Button>
          </motion.form>
        )}

        {step === 'loading' && (
          <motion.div
            key="loading"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-10 h-10 border-4 border-neutral-200 border-t-forest-green rounded-full mb-4"
            />
            <p className="text-neutral-600 font-medium">Securing your spot...</p>
          </motion.div>
        )}

        {step === 'success' && (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-4"
          >
            <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-forest-green" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-forest-green mb-2">You're In!</h3>
            <p className="text-neutral-600 mb-8">
              Your spot is secured for <strong>Thursday at 2PM EST</strong>. Add this to your calendar so you don't miss out.
            </p>
            
            <div className="space-y-3">
              <Button 
                variant="primary" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  const content = "BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:Flex Academy Webinar\nDTSTART:20261015T180000Z\nDTEND:20261015T190000Z\nEND:VEVENT\nEND:VCALENDAR";
                  const blob = new Blob([content], { type: 'text/calendar' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'webinar.ics';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                }}
              >
                <Download className="w-4 h-4" /> Download .ics
              </Button>
              <Button 
                variant="outline" 
                className="w-full flex items-center justify-center gap-2"
                onClick={() => window.open('https://calendar.google.com/calendar/render?action=TEMPLATE&text=Flex+Academy+Webinar&dates=20261015T180000Z/20261015T190000Z', '_blank')}
              >
                <Calendar className="w-4 h-4" /> Add to Google Calendar
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
