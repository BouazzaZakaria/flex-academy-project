import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Button } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export const Hero = () => {
  const { openModal } = useModal();
  return (
    <section className="pt-32 pb-20 px-6 w-full max-w-[1440px] mx-auto min-h-screen flex flex-col justify-center">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black font-serif text-forest-green leading-tight mb-6"
          >
            {content.hero.headline}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-neutral-800 mb-8 leading-relaxed"
          >
            {content.hero.subheadline}
          </motion.p>
          <motion.button
            onClick={() => openModal('strategy')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-accent font-medium underline underline-offset-4 hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
          >
            {content.hero.secondaryLink}
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-8 rounded-3xl shadow-xl border border-neutral-100"
        >
          <h2 className="text-xl font-bold text-forest-green mb-6">{content.hero.formTitle}</h2>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); openModal('webinar'); }}>
            <div>
              <label htmlFor="hero-name" className="sr-only">Name</label>
              <input
                id="hero-name"
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                required
              />
            </div>
            <div>
              <label htmlFor="hero-email" className="sr-only">Email</label>
              <input
                id="hero-email"
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl border border-neutral-200 bg-neutral-50 focus:bg-white focus:ring-2 focus:ring-accent focus:border-transparent transition-all outline-none"
                required
              />
            </div>
            <Button type="submit" className="w-full" size="lg">{content.hero.formButtonText}</Button>
          </form>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-20 pt-10 border-t border-neutral-200"
      >
        <p className="text-sm font-medium text-neutral-500 uppercase tracking-wider mb-6 text-center">Trusted By Industry Leaders</p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale">
          {content.hero.trustStrip.map((item, idx) => (
            <span key={idx} className="font-bold text-neutral-800 text-lg">{item}</span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

