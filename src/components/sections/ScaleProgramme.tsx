import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Zap } from 'lucide-react';

export const ScaleProgramme = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cream/50 -skew-x-12 translate-x-32 hidden lg:block pointer-events-none" />
      
      <div className="w-full max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-serif text-forest-green mb-6"
          >
            {content.scaleProgramme.title}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-700 leading-relaxed mb-10"
          >
            {content.scaleProgramme.description}
          </motion.p>

          <div className="space-y-6">
            {content.scaleProgramme.features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex items-center gap-4 bg-cream p-4 rounded-xl"
              >
                <div className="w-10 h-10 rounded-lg bg-forest-green flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <p className="font-bold text-neutral-800">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden aspect-square bg-neutral-900 flex items-center justify-center shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-forest-green/40 to-transparent z-0" />
          <img src="/dashboard.jpg" alt="Scale Dashboard" className="w-full h-full object-cover relative z-10" />
        </motion.div>
      </div>
    </section>
  );
};
