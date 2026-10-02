import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Quote } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black font-serif text-forest-green mb-4">
            {content.testimonials.title}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.testimonials.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="bg-neutral-50 rounded-3xl p-8 md:p-10 relative border border-neutral-100"
            >
              <Quote className="w-12 h-12 text-forest-green/10 absolute top-8 right-8" />
              <p className="text-lg md:text-xl text-neutral-800 leading-relaxed font-medium mb-8 relative z-10 italic">
                "{item.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-neutral-300 rounded-full flex-shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-neutral-200" />
                </div>
                <div>
                  <div className="font-bold text-neutral-900">{item.name}</div>
                  <div className="text-accent font-medium text-sm">{item.result}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
