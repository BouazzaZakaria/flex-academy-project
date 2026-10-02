import { motion } from 'framer-motion';
import { content } from '../../data/content';

export const WebinarAgenda = () => {
  return (
    <section className="py-24 px-6 bg-neutral-900 text-cream">
      <div className="w-full max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-serif mb-6 sticky top-24"
          >
            {content.webinarAgenda.title}
          </motion.h2>
        </div>

        <div className="space-y-8">
          {content.webinarAgenda.items.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 items-start"
            >
              <div className="bg-forest-green text-white font-bold py-1 px-3 rounded-full text-sm flex-shrink-0 mt-1">
                {item.time}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
