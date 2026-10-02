import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { ArrowRight } from 'lucide-react';
import { useModal } from '../../context/ModalContext';

export const PathSplit = () => {
  const { openModal } = useModal();
  
  return (
    <section id="launch" className="py-24 px-6 bg-neutral-900 text-cream">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black font-serif mb-6">{content.pathSplit.title}</h2>
          <p className="text-lg text-neutral-400">{content.pathSplit.description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-neutral-800 rounded-3xl p-10 border border-neutral-700 flex flex-col"
          >
            <div className="text-accent font-bold tracking-widest uppercase mb-2">{content.pathSplit.launch.subtitle}</div>
            <h3 className="text-3xl font-bold font-serif mb-4">{content.pathSplit.launch.title}</h3>
            <p className="text-neutral-400 mb-8 flex-grow">{content.pathSplit.launch.description}</p>
            <ul className="space-y-3 mb-10">
              {content.pathSplit.launch.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => openModal('webinar')} className="inline-flex items-center justify-center h-12 bg-cream text-neutral-900 rounded-full font-bold hover:bg-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              Explore Launch
            </button>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            className="bg-forest-green rounded-3xl p-10 border border-forest-green/80 flex flex-col relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="text-cream/80 font-bold tracking-widest uppercase mb-2" id="scale">{content.pathSplit.scale.subtitle}</div>
            <h3 className="text-3xl font-bold font-serif mb-4">{content.pathSplit.scale.title}</h3>
            <p className="text-cream/90 mb-8 flex-grow">{content.pathSplit.scale.description}</p>
            <ul className="space-y-3 mb-10">
              {content.pathSplit.scale.features.map((feat, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <ArrowRight className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => openModal('strategy')} className="inline-flex items-center justify-center h-12 bg-neutral-900 text-cream rounded-full font-bold hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-xl shadow-black/20">
              Explore Scale
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

