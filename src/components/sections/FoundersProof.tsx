import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { CountUp } from '../ui/CountUp';

export const FoundersProof = () => {
  return (
    <section id="proof" className="py-24 px-6 bg-white overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] bg-neutral-200 flex shadow-2xl"
        >
          <img src="/founder1.jpg" alt="Founder" className="w-1/2 h-full object-cover" />
          <img src="/founder2.jpg" alt="Founder" className="w-1/2 h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </motion.div>

        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black font-serif text-forest-green mb-6"
          >
            {content.foundersProof.title}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-neutral-700 leading-relaxed mb-10"
          >
            {content.foundersProof.description}
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-neutral-200 pt-10">
            {content.foundersProof.stats.map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
              >
                <div className="text-3xl md:text-4xl font-black text-accent mb-2">
                  {idx === 0 && <CountUp to={10} prefix="$" suffix="M+" />}
                  {idx === 1 && <CountUp to={500} suffix="+" />}
                  {idx === 2 && <CountUp to={8} suffix=" Yrs" />}
                </div>
                <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
