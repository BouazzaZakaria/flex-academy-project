import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { CheckCircle2 } from 'lucide-react';

export const LaunchOffer = () => {
  return (
    <section className="py-24 px-6 bg-cream border-y border-neutral-200">
      <div className="w-full max-w-[1440px] mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-serif text-forest-green mb-6"
          >
            {content.launchOffer.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-700 leading-relaxed"
          >
            {content.launchOffer.description}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-1 gap-6">
          {content.launchOffer.bullets.map((bullet, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border border-neutral-100"
            >
              <CheckCircle2 className="w-6 h-6 text-forest-green flex-shrink-0 mt-0.5" />
              <p className="text-lg text-neutral-800 font-medium">{bullet}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
