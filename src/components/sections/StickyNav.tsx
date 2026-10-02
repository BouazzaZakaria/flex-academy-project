import { motion } from 'framer-motion';
import { content } from '../../data/content';
import { Button } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export const StickyNav = () => {
  const { openModal } = useModal();
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-md border-b border-neutral-200"
    >
      <div className="w-full max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <a
          href="#"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm flex items-center"
        >
          <img src="/logo.png" alt="The Flex Logo" className="h-12 w-auto object-contain" />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {content.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-neutral-800 hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm p-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button size="sm" onClick={() => openModal('webinar')}>
            {content.nav.cta}
          </Button>
        </div>
      </div>
    </motion.header>
  );
};
