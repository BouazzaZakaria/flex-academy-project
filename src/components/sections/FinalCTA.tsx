import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Button } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export const FinalCTA = () => {
  const { openModal } = useModal();
  return (
    <section className="py-24 px-6 bg-forest-green text-cream relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
      
      <div className="w-full max-w-[1440px] mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl md:text-6xl font-black font-serif mb-6 leading-tight">
            {content.finalCta.title}
          </h2>
          <p className="text-xl md:text-2xl text-cream/80 mb-10">
            {content.finalCta.description}
          </p>
          <Button variant="secondary" size="lg" className="w-full sm:w-auto shadow-2xl shadow-black/20 text-lg h-16 px-12" onClick={() => openModal('strategy')}>
            {content.finalCta.buttonText}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
