import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../ui/Button';
import { CheckCircle2, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

export const StrategyCallFlow = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    units: '', target: '', city: '', budget: '', date: '', time: ''
  });

  const updateForm = (key: string, value: string) => setFormData(p => ({ ...p, [key]: value }));

  const nextStep = () => {
    if (step === 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(3);
      }, 1200);
    } else {
      setStep(s => s + 1);
    }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(4);
    }, 1500);
  };

  const slideVariants = {
    enter: { x: 20, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -20, opacity: 0 }
  };

  return (
    <div className="relative min-h-[400px]">
      {step < 4 && (
        <div className="mb-8">
          <div className="flex justify-between text-xs font-bold text-neutral-400 mb-2 px-1">
            <span className={step >= 1 ? 'text-forest-green' : ''}>Business</span>
            <span className={step >= 2 ? 'text-forest-green' : ''}>Goals</span>
            <span className={step >= 3 ? 'text-forest-green' : ''}>Schedule</span>
          </div>
          <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden flex">
            <motion.div 
              className="h-full bg-forest-green" 
              initial={{ width: '33%' }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ ease: "easeInOut" }}
            />
          </div>
        </div>
      )}

      {loading && step !== 4 && (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-10 h-10 border-4 border-neutral-200 border-t-forest-green rounded-full mb-4"
          />
          <p className="text-neutral-600 font-medium">Finding available slots...</p>
        </div>
      )}

      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.form key="step1" variants={slideVariants} initial="enter" animate="center" exit="exit" onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Current Monthly Revenue</label>
              <select required value={formData.units} onChange={e => updateForm('units', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none appearance-none">
                <option value="">Select range...</option>
                <option value="0-5k">$0 - $5k</option>
                <option value="5k-10k">$5k - $10k</option>
                <option value="10k-30k">$10k - $30k</option>
                <option value="30k+">$30k+</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Target Monthly Revenue</label>
              <select required value={formData.target} onChange={e => updateForm('target', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none appearance-none">
                <option value="">Select target...</option>
                <option value="10k">$10k</option>
                <option value="30k">$30k</option>
                <option value="50k">$50k</option>
                <option value="100k+">$100k+</option>
              </select>
            </div>
            <Button type="submit" className="w-full mt-4 flex justify-between items-center group">
              Next Step <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.form>
        )}

        {step === 2 && (
          <motion.form key="step2" variants={slideVariants} initial="enter" animate="center" exit="exit" onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">City / Timezone</label>
              <input type="text" required value={formData.city} onChange={e => updateForm('city', e.target.value)} placeholder="e.g. London, UK" className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1">Capital available to invest</label>
              <select required value={formData.budget} onChange={e => updateForm('budget', e.target.value)} className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none appearance-none">
                <option value="">Select available capital...</option>
                <option value="<1k">Less than $1k</option>
                <option value="1k-3k">$1k - $3k</option>
                <option value="3k-5k">$3k - $5k</option>
                <option value="5k+">$5k+</option>
              </select>
            </div>
            <div className="flex gap-3 mt-4">
              <Button type="button" variant="outline" onClick={() => setStep(1)} className="px-4">Back</Button>
              <Button type="submit" className="flex-grow flex justify-between items-center group">
                Find Availability <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.form>
        )}

        {step === 3 && (
          <motion.form key="step3" variants={slideVariants} initial="enter" animate="center" exit="exit" onSubmit={submit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-neutral-800 mb-3 flex items-center gap-2"><CalendarIcon className="w-4 h-4 text-accent" /> Select Date</label>
              <div className="grid grid-cols-3 gap-2">
                {['Oct 14', 'Oct 15', 'Oct 16'].map(d => (
                  <button key={d} type="button" onClick={() => updateForm('date', d)} className={`py-3 rounded-xl border text-sm font-medium transition-all ${formData.date === d ? 'border-forest-green bg-forest-green/5 text-forest-green ring-1 ring-forest-green' : 'border-neutral-200 hover:border-neutral-300 text-neutral-600 bg-white'}`}>
                    {d}
                  </button>
                ))}
              </div>
            </div>
            {formData.date && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}>
                <label className="block text-sm font-bold text-neutral-800 mb-3">Select Time (Local)</label>
                <div className="grid grid-cols-3 gap-2">
                  {['09:00', '11:30', '14:00', '15:30', '16:00'].map(t => (
                    <button key={t} type="button" onClick={() => updateForm('time', t)} className={`py-2 rounded-xl border text-sm font-medium transition-all ${formData.time === t ? 'border-accent bg-accent/5 text-accent ring-1 ring-accent' : 'border-neutral-200 hover:border-neutral-300 text-neutral-600 bg-white'}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
            <div className="flex gap-3 pt-2 border-t border-neutral-100">
              <Button type="button" variant="outline" onClick={() => setStep(2)} className="px-4">Back</Button>
              <Button type="submit" disabled={!formData.date || !formData.time} className="flex-grow">
                Confirm Booking
              </Button>
            </div>
          </motion.form>
        )}

        {step === 4 && (
          <motion.div key="step4" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-6">
            <div className="w-16 h-16 bg-forest-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8 text-forest-green" />
            </div>
            <h3 className="text-2xl font-bold font-serif text-forest-green mb-2">Call Scheduled</h3>
            <p className="text-neutral-600 mb-6">Your strategy session is booked for <strong>{formData.date} at {formData.time}</strong>.</p>
            <div className="bg-cream p-4 rounded-xl text-left mb-6">
              <p className="text-sm font-bold text-neutral-800 mb-1">Preparation Checklist:</p>
              <ul className="text-sm text-neutral-600 space-y-1 list-disc list-inside">
                <li>Be in a quiet room</li>
                <li>Have your current numbers ready</li>
                <li>Ensure a stable internet connection</li>
              </ul>
            </div>
            <Button variant="outline" className="w-full" onClick={() => window.location.reload()}>Close</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
