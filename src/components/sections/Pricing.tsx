import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Check } from 'lucide-react';
import { Button } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export const Pricing = () => {
  const { openModal } = useModal();
  return (
    <section id="pricing" className="py-24 px-6 bg-neutral-900 text-cream overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-forest-green/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="w-full max-w-[1440px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-black font-serif mb-6">
            {content.pricing.title}
          </h2>
          <p className="text-xl text-neutral-400">
            {content.pricing.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.pricing.plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className={`rounded-3xl p-8 md:p-10 border flex flex-col ${
                idx === 1 
                  ? 'bg-forest-green border-forest-green/80 text-white' 
                  : 'bg-neutral-800 border-neutral-700'
              }`}
            >
              <h3 className="text-2xl font-bold font-serif mb-2">{plan.name}</h3>
              <p className={`mb-8 h-12 ${idx === 1 ? 'text-cream/80' : 'text-neutral-400'}`}>
                {plan.description}
              </p>
              
              <div className="text-5xl font-black mb-10 tracking-tight">
                {plan.price}
              </div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feat, featIdx) => (
                  <li key={featIdx} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${idx === 1 ? 'text-accent' : 'text-forest-green'}`} />
                    <span className="font-medium">{feat}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={idx === 1 ? 'secondary' : 'primary'} 
                size="lg" 
                className="w-full shadow-lg"
                onClick={() => openModal(idx === 1 ? 'strategy' : 'webinar')}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
